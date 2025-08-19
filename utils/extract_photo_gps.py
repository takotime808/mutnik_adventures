# Copyright (c) 2025 takotime808

"""Extract GPS lat/long from images recursively (jpg/jpeg/png/webp)."""

import argparse
import json
import sys
from pathlib import Path
from typing import Any, Dict, Optional, Tuple

from PIL import Image, ExifTags
from PIL.TiffImagePlugin import IFDRational

# Build reverse lookup maps once
TAGS = ExifTags.TAGS
GPSTAGS = ExifTags.GPSTAGS

IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".webp"}

def as_float(x: Any) -> float:
    """Coerce EXIF rational/tuple to float."""
    if isinstance(x, IFDRational):
        return float(x)
    if isinstance(x, tuple) and len(x) == 2 and all(isinstance(v, (int, float)) for v in x):
        num, den = x
        return float(num) / float(den) if den else float("nan")
    return float(x)

def dms_to_decimal(dms, ref) -> Optional[float]:
    """Convert degrees/minutes/seconds to signed decimal degrees."""
    try:
        deg = as_float(dms[0])
        minutes = as_float(dms[1])
        seconds = as_float(dms[2])
        dec = deg + minutes / 60.0 + seconds / 3600.0
        if str(ref).upper() in ("S", "W"):
            dec = -dec
        return dec
    except Exception:
        return None

def parse_exif_gps(exif: Dict[int, Any]) -> Dict[str, Any]:
    """Extract GPS and a few handy tags (make/model/datetaken) from EXIF dict."""
    out: Dict[str, Any] = {
        "gps_latitude": None,
        "gps_longitude": None,
        "gps_altitude_m": None,
        "gps_timestamp": None,
        "date_time_original": None,
        "camera_make": None,
        "camera_model": None,
    }
    if not exif:
        return out

    # Convert to human keys
    h = {TAGS.get(k, k): v for k, v in exif.items()}

    # Camera info
    out["camera_make"] = h.get("Make")
    out["camera_model"] = h.get("Model")
    out["date_time_original"] = h.get("DateTimeOriginal") or h.get("DateTime")

    # GPS blob
    gps_info = h.get("GPSInfo") or {}
    if gps_info:
        gps = {GPSTAGS.get(k, k): v for k, v in gps_info.items()}

        lat = gps.get("GPSLatitude")
        lat_ref = gps.get("GPSLatitudeRef")
        lon = gps.get("GPSLongitude")
        lon_ref = gps.get("GPSLongitudeRef")
        if lat and lat_ref and lon and lon_ref:
            out["gps_latitude"] = dms_to_decimal(lat, lat_ref)
            out["gps_longitude"] = dms_to_decimal(lon, lon_ref)

        alt = gps.get("GPSAltitude")
        alt_ref = gps.get("GPSAltitudeRef")  # 0 = above sea level, 1 = below
        if alt is not None:
            try:
                alt_val = as_float(alt)
                if alt_ref == 1:
                    alt_val = -alt_val
                out["gps_altitude_m"] = alt_val
            except Exception:
                pass

        # Time if present (UTC)
        if gps.get("GPSTimeStamp"):
            try:
                hh = as_float(gps["GPSTimeStamp"][0])
                mm = as_float(gps["GPSTimeStamp"][1])
                ss = as_float(gps["GPSTimeStamp"][2])
                out["gps_timestamp"] = f"{int(hh):02d}:{int(mm):02d}:{int(ss):02d}Z"
            except Exception:
                pass

    return out

def parse_xmp_for_gps(xmp_bytes: bytes) -> Tuple[Optional[float], Optional[float]]:
    """
    Minimal XMP parser for GPS lat/long from common namespaces.
    Looks for tags like GPano:Longitude, exif:GPSLongitude, etc., in the XML text.
    """
    try:
        text = xmp_bytes.decode("utf-8", errors="ignore")
    except Exception:
        return (None, None)

    # Very lightweight string search (avoid full XML dependency)
    import re
    candidates = [
        r"GPSLongitude=\"([\-0-9\.]+)\"",
        r"GPSLatitude=\"([\-0-9\.]+)\"",
        r"exif:GPSLongitude=\"([\-0-9\.]+)\"",
        r"exif:GPSLatitude=\"([\-0-9\.]+)\"",
        r"GPano:Longitude=\"([\-0-9\.]+)\"",
        r"GPano:Latitude=\"([\-0-9\.]+)\"",
    ]
    lon = lat = None
    for pat in candidates:
        m = re.search(pat, text)
        if m:
            val = float(m.group(1))
            if "Longitude" in pat and lon is None:
                lon = val
            if "Latitude" in pat and lat is None:
                lat = val
    return (lat, lon)

def extract_from_image(path: Path) -> Dict[str, Any]:
    """Open one image and collect metadata of interest."""
    row: Dict[str, Any] = {
        "file": str(path),
        "ext": path.suffix.lower(),
        "gps_latitude": None,
        "gps_longitude": None,
        "gps_altitude_m": None,
        "gps_timestamp": None,
        "date_time_original": None,
        "camera_make": None,
        "camera_model": None,
        "source": None,  # "EXIF" or "XMP"
        "error": None,
    }
    try:
        with Image.open(path) as im:
            # Primary: EXIF via Pillow
            exif = {}
            try:
                exif = im.getexif() or {}
            except Exception:
                exif = {}

            gps = parse_exif_gps(exif)
            row.update(gps)
            if gps["gps_latitude"] is not None and gps["gps_longitude"] is not None:
                row["source"] = "EXIF"
                return row

            # Secondary: XMP sidecar embedded in file (Pillow exposes in info on many formats)
            xmp_bytes = None
            # Common keys Pillow uses for XMP
            for key in ("XML:com.adobe.xmp", "xmp", "XMP"):
                if key in im.info and isinstance(im.info[key], (bytes, bytearray)):
                    xmp_bytes = im.info[key]
                    break

            if xmp_bytes:
                lat, lon = parse_xmp_for_gps(xmp_bytes)
                if lat is not None and lon is not None:
                    row["gps_latitude"] = lat
                    row["gps_longitude"] = lon
                    row["source"] = "XMP"
                    return row

    except Exception as e:
        row["error"] = f"{type(e).__name__}: {e}"

    return row

def walk_images(root: Path):
    for p in root.rglob("*"):
        if p.is_file() and p.suffix.lower() in IMAGE_EXTS:
            yield p

def main():
    ap = argparse.ArgumentParser(description="Extract GPS from images recursively.")
    ap.add_argument("root", nargs="?", default=".", help="Root directory to scan (default: .)")
    ap.add_argument("--csv", default="photo_gps.csv", help="Output CSV path (default: photo_gps.csv)")
    ap.add_argument("--json", default=None, help="Optional JSON output path")
    args = ap.parse_args()

    root = Path(args.root).resolve()
    files = list(walk_images(root))
    if not files:
        print(f"No images with extensions {sorted(IMAGE_EXTS)} found under {root}", file=sys.stderr)
        sys.exit(1)

    rows = []
    found = 0
    for f in files:
        rec = extract_from_image(f)
        if rec.get("gps_latitude") is not None and rec.get("gps_longitude") is not None:
            found += 1
        rows.append(rec)

    # Write CSV
    import csv
    fieldnames = [
        "file", "ext",
        "gps_latitude", "gps_longitude", "gps_altitude_m", "gps_timestamp",
        "date_time_original", "camera_make", "camera_model",
        "source", "error"
    ]
    with open(args.csv, "w", newline="", encoding="utf-8") as fh:
        w = csv.DictWriter(fh, fieldnames=fieldnames)
        w.writeheader()
        for r in rows:
            w.writerow(r)

    # Optional JSON
    if args.json:
        with open(args.json, "w", encoding="utf-8") as fh:
            json.dump(rows, fh, ensure_ascii=False, indent=2)

    print(f"Scanned {len(files)} images under {root}")
    print(f"Found GPS for {found} images")
    print(f"CSV written to: {args.csv}")
    if args.json:
        print(f"JSON written to: {args.json}")

if __name__ == "__main__":
    main()
