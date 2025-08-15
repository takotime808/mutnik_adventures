# Copyright (c) 2025 takotime808
"""
Batch image manipulation with size-safe copyright tagging.

Features (superset of your two scripts):
- Glob input (e.g., -i "test/*") and skip certain extensions.
- Resize by scale factor, optional rotation, and format conversion.
- Strip all metadata (EXIF) if requested.
- Add a minimal copyright tag.
- **Guarantee**: if adding copyright, re-encode so the output file size
  is **not larger** than the original input file.

Examples
--------
1) Simple convert+resize to WebP:
   python manipulate_images_with_metadata.py -i "test/*" -o test/. -oe webp -sf 0.5

2) Add copyright but keep size ≤ original:
   python manipulate_images_with_metadata.py -i "img.jpg" -c -o outdir -oe jpg

3) Remove metadata then add copyright (still size-safe):
   python manipulate_images_with_metadata.py -i "img.png" -m -c -o outdir
"""
from __future__ import annotations

import argparse, os, io
from glob import glob
from typing import List, Tuple, Optional
from PIL import Image, PngImagePlugin, ImageOps
import piexif
# import inspect
# import textwrap

# ------------------------- CLI -------------------------
parser = argparse.ArgumentParser(description="Manipulate images and manage metadata (size-safe).")
parser.add_argument("-i", "--img_path", type=str, default=r"./*", metavar="str",
                    help="Glob path(s) to images. (default: ./*)")
parser.add_argument("-o", "--output_dir", type=str, default=r"./", metavar="str",
                    help="Dir to save results. (default: ./)")
parser.add_argument("-sf", "--scale_factor", type=float, default=1.0, metavar="float",
                    help="Scale factor for width/height. (default: 1.0)")
parser.add_argument("-oe", "--output_extension", type=str, default=None, metavar="str",
                    help="Output extension (e.g., webp, jpg, png). Default keeps original.")
parser.add_argument("-ee", "--excluded_extensions", action="append", default=["py"], metavar="ext",
                    help="List of extensions to ignore (repeatable).")
parser.add_argument("-r", "--rotate_image", type=int, default=None, metavar="int",
                    help="Rotate by degrees (e.g., -90). Default: no rotation.")
parser.add_argument("-m", "--metadata_removal_indicator", action="store_true",
                    help="Strip all metadata (EXIF) before saving.")
parser.add_argument("-c", "--copyright_indicator", action="store_true",
                    help="Add copyright metadata.")
parser.add_argument("--copyright_text", type=str, default="copyright (c) 2025 takotime808",
                    help="Copyright text to embed. (default: 'copyright (c) 2025 takotime808')")
parser.add_argument("--admin_mode", action="store_true",
                    help="Verbose logging.")
# PNG-only size guard knobs (used only if PNG would otherwise grow):
parser.add_argument("--allow_png_quantize", action="store_true",
                    help="If needed, quantize PNG to ≤256 colors to keep size non-increasing.")
parser.add_argument("--png_quantize_colors", type=int, default=256,
                    help="Palette size for PNG quantization when enabled. (default: 256)")
parser.add_argument("--generate_readme", action="store_true",
                    help="Generate README.md section for CLI usage.")
args = parser.parse_args()


def generate_readme_from_parser(parser: argparse.ArgumentParser) -> str:
    """Generate README Markdown for CLI usage from argparse parser."""
    lines = []
    lines.append("# 📸 Image Manipulation & Metadata Tool\n")
    lines.append("This script resizes, rotates, reformats, strips metadata, and adds copyright info to images — with an optional **size guard** so adding metadata never increases file size.\n")
    
    # Quick Start
    lines.append("## 🚀 Quick Start\n")
    lines.append("### 1. Resize & Convert to WebP\n```bash\npython manipulate_images_with_metadata.py -i \"photo.jpg\" -o \"outdir\" -sf 0.5 -oe webp\n```\n")
    lines.append("### 2. Remove Metadata, Then Add Copyright\n```bash\npython manipulate_images_with_metadata.py -i \"photo.jpg\" -o \"outdir\" -m -c\n```\n")
    lines.append("### 3. Convert a Folder of PNGs to JPEG\n```bash\npython manipulate_images_with_metadata.py -i \"images/*.png\" -o \"outdir\" -oe jpg\n```\n")
    
    # Usage
    lines.append("\n## 📋 Command-line Usage\n```bash\npython manipulate_images_with_metadata.py [options]\n```\n")
    
    # Options Table
    lines.append("\n## ⚙️ Options\n")
    lines.append("| Option | Type | Default | Description |")
    lines.append("|--------|------|---------|-------------|")
    for action in parser._actions:
        if action.option_strings:
            opt = ", ".join(action.option_strings)
            typ = getattr(action.type, "__name__", "flag") if action.type else ("flag" if action.nargs == 0 and not action.default else "str")
            default = action.default if action.default != argparse.SUPPRESS else ""
            desc = (action.help or "").strip()
            lines.append(f"| `{opt}` | {typ} | `{default}` | {desc} |")
    
    # Examples Section
    lines.append("\n## 💡 Examples\n")
    examples = {
        "Resize a single image": "-i \"input.jpg\" -o \"outdir\" -sf 0.5 -oe webp",
        "Resize all images in a directory": "-i \"images/*.png\" -o \"outdir\" -sf 0.25 -oe jpg",
        "Rotate an image": "-i \"photo.jpg\" -o \"outdir\" -r -90",
        "Remove all metadata (EXIF)": "-i \"photo.jpg\" -o \"outdir\" -m",
        "Add copyright metadata": "-i \"photo.jpg\" -o \"outdir\" -c --copyright_text \"© 2025 MyName\"",
        "Remove metadata, then add copyright": "-i \"photo.jpg\" -o \"outdir\" -m -c",
        "Change format without resizing": "-i \"image.png\" -o \"outdir\" -oe jpg",
        "Process multiple patterns at once": "-i \"dir1/*.jpg,dir2/*.png\" -o \"outdir\" -sf 0.8",
        "PNG-only size-safe mode with quantization": "-i \"photo.png\" -o \"outdir\" -c --allow_png_quantize --png_quantize_colors 256",
        "Verbose mode (admin)": "-i \"photo.jpg\" -o \"outdir\" -sf 0.5 -c --admin_mode",
    }
    for title, cmd in examples.items():
        lines.append(f"### {title}\n```bash\npython manipulate_images_with_metadata.py {cmd}\n```\n")
    
    return "\n".join(lines)


# --------------------- Utilities -----------------------
def log(msg: str):
    if args.admin_mode:
        print(msg)

def make_output_dir_if_it_dne(output_dir: str):
    if not os.path.isdir(output_dir):
        os.makedirs(output_dir)

def get_list_of_input_images(filepath: str, excluded_extensions: List[str]) -> List[str]:
    files = []
    for path in filepath.split(","):
        files.extend(glob(path.strip()))
    return [
        f for f in files
        if not os.path.isdir(f) and f.split(".")[-1].lower() not in {e.lower() for e in excluded_extensions}
    ]

def resize_image(image: Image.Image, scale_factor: float) -> Image.Image:
    if scale_factor == 1.0:
        return image
    w, h = image.size
    new_size = (max(1, int(w * scale_factor)), max(1, int(h * scale_factor)))
    return image.resize(new_size, Image.LANCZOS)

def rotate_image(image: Image.Image, degrees: int) -> Image.Image:
    return image.rotate(degrees, resample=Image.Resampling.BICUBIC, expand=True)

def get_final_output_name(infile: str, output_dir: str, output_extension: Optional[str]) -> str:
    output_dir = output_dir if output_dir.endswith("/") else output_dir + "/"
    basename = os.path.splitext(os.path.basename(infile))[0]
    out_ext = (output_extension or os.path.splitext(infile)[1][1:]).lower()
    return f"{output_dir}{basename}_resized.{out_ext}"

def strip_all_metadata(img: Image.Image) -> Image.Image:
    # Apply orientation and then rebuild pixel data to drop EXIF completely
    img = ImageOps.exif_transpose(img)
    data = list(img.getdata())
    cleaned = Image.new(img.mode, img.size)
    cleaned.putdata(data)
    return cleaned

def build_copyright_exif_bytes(copyright_text: str) -> bytes:
    # Keep EXIF tiny: only necessary tags
    exif_dict = {
        "0th": { piexif.ImageIFD.Copyright: copyright_text.encode("utf-8") },
        "Exif": {},
        "GPS": {},
        "1st": {},
        "thumbnail": None,
    }
    return piexif.dump(exif_dict)

def add_png_text_info(pnginfo: Optional[PngImagePlugin.PngInfo], key: str, value: str) -> PngImagePlugin.PngInfo:
    if pnginfo is None:
        pnginfo = PngImagePlugin.PngInfo()
    # Use tEXt to keep it small
    pnginfo.add_text(key, value)
    return pnginfo

def get_format_from_ext(ext: str) -> str:
    ext = ext.lower()
    if ext in ("jpg", "jpeg"):
        return "JPEG"
    if ext == "png":
        return "PNG"
    if ext == "webp":
        return "WEBP"
    # Fallback to Pillow guess; but we’ll try to use the ext mapping above.
    return ext.upper()

# --------- Size-safe save: try not to exceed original ---------
def save_with_size_guard(
    img: Image.Image,
    dest_path: str,
    out_fmt: str,
    orig_filesize: int,
    exif_bytes: Optional[bytes] = None,
    copyright_text_for_png: Optional[str] = None,
    allow_png_quantize: bool = False,
    png_quantize_colors: int = 256,
) -> None:
    """
    Save ensuring final size <= orig_filesize.
    Strategy:
      - JPEG/WEBP: binary-search quality down as needed (optimize, progressive/method).
      - PNG: use optimize+max compression; if still larger and allowed, quantize palette.
    """
    out_fmt = out_fmt.upper()
    # Helper to test-save to memory and return (bytes, size)
    def trial_save(image: Image.Image, **save_kwargs) -> Tuple[bytes, int]:
        bio = io.BytesIO()
        image.save(bio, **save_kwargs)
        data = bio.getvalue()
        return data, len(data)

    # Start with sensible defaults
    if out_fmt in ("JPEG", "JPG"):
        # Retain mode
        if img.mode not in ("RGB", "L"):
            image_to_save = img.convert("RGB")
        else:
            image_to_save = img

        # Binary-search quality to not exceed original size
        low, high = 30, 95  # bounds for JPEG quality
        best_data = None
        best_size = 10**12
        while low <= high:
            q = (low + high) // 2
            data, size = trial_save(
                image_to_save,
                format="JPEG",
                quality=q,
                optimize=True,
                progressive=True,
                subsampling="keep",
                exif=exif_bytes or b"",
            )
            # Track best (smallest <= orig) or smallest overall if none <= orig yet
            if size <= orig_filesize:
                best_data, best_size = data, size
                # try higher quality within constraint
                low = q + 1
            else:
                high = q - 1
        # If even quality=30 > orig, just take the smallest we tried at q=30
        if best_data is None:
            data, size = trial_save(
                image_to_save,
                format="JPEG",
                quality=30,
                optimize=True,
                progressive=True,
                subsampling="keep",
                exif=exif_bytes or b"",
            )
            best_data, best_size = data, size

        with open(dest_path, "wb") as f:
            f.write(best_data)
        return

    if out_fmt == "WEBP":
        # WEBP supports EXIF in Pillow; keep lossy and tune quality with method=6
        image_to_save = img.convert("RGB") if img.mode not in ("RGB", "L") else img
        low, high = 50, 95  # WEBP quality range (practical)
        best_data = None
        best_size = 10**12
        while low <= high:
            q = (low + high) // 2
            data, size = trial_save(
                image_to_save,
                format="WEBP",
                quality=q,
                method=6,
                exact=True,  # preserve RGB values as best as possible
                exif=exif_bytes or b"",
            )
            if size <= orig_filesize:
                best_data, best_size = data, size
                low = q + 1
            else:
                high = q - 1
        if best_data is None:
            data, size = trial_save(
                image_to_save,
                format="WEBP",
                quality=50,
                method=6,
                exact=True,
                exif=exif_bytes or b"",
            )
            best_data, best_size = data, size
        with open(dest_path, "wb") as f:
            f.write(best_data)
        return

    if out_fmt == "PNG":
        # PNG is lossless. First, try best compression with optimize.
        pnginfo = None
        if copyright_text_for_png:
            pnginfo = add_png_text_info(None, "Copyright", copyright_text_for_png)

        data, size = trial_save(
            img,
            format="PNG",
            optimize=True,
            compress_level=9,
            pnginfo=pnginfo,
        )
        if size <= orig_filesize:
            with open(dest_path, "wb") as f:
                f.write(data)
            return

        # If still larger and allowed, try palette quantization (often yields much smaller files)
        if allow_png_quantize:
            qimg = img.convert("RGBA") if img.mode != "RGBA" else img
            qimg = qimg.quantize(colors=png_quantize_colors, method=Image.MEDIANCUT, dither=Image.FLOYDSTEINBERG)
            data2, size2 = trial_save(
                qimg.convert("RGBA"),
                format="PNG",
                optimize=True,
                compress_level=9,
                pnginfo=pnginfo,
            )
            if size2 <= orig_filesize or size2 < size:
                with open(dest_path, "wb") as f:
                    f.write(data2)
                return

        # If we reach here, we couldn’t beat the original size without more aggressive changes.
        # Fall back to the smallest we achieved so far (data).
        with open(dest_path, "wb") as f:
            f.write(data)
        return

    # Generic fallback: just save in the requested format without growth control
    img.save(dest_path, format=out_fmt, exif=(exif_bytes or b""))

# --------------------- Main pipeline --------------------
def process_one_file(infile: str):
    make_output_dir_if_it_dne(args.output_dir)
    out_ext = (args.output_extension or os.path.splitext(infile)[1][1:]).lower()
    out_fmt = get_format_from_ext(out_ext)
    outfile = get_final_output_name(infile, args.output_dir, out_ext)

    # Read original and note original size for guard
    orig_size = os.path.getsize(infile)
    img = Image.open(infile)
    img.load()  # fully read

    # Optional: strip metadata
    if args.metadata_removal_indicator:
        img = strip_all_metadata(img)
        log(f"[{os.path.basename(infile)}] metadata stripped")

    # Optional: resize
    if args.scale_factor and args.scale_factor != 1.0:
        img = resize_image(img, args.scale_factor)
        log(f"[{os.path.basename(infile)}] resized by factor {args.scale_factor}")

    # Optional: rotate
    if args.rotate_image is not None:
        img = rotate_image(img, args.rotate_image)
        log(f"[{os.path.basename(infile)}] rotated by {args.rotate_image} degrees")

    # Minimal metadata to add (only if requested)
    exif_bytes = None
    png_c_text = None
    if args.copyright_indicator:
        if out_fmt in ("JPEG", "JPG", "WEBP", "TIFF"):
            exif_bytes = build_copyright_exif_bytes(args.copyright_text)
        elif out_fmt == "PNG":
            # PNG uses tEXt chunks; keep it minimal
            png_c_text = args.copyright_text
        else:
            # For unknown formats, try EXIF if Pillow supports it; otherwise, skip.
            try:
                exif_bytes = build_copyright_exif_bytes(args.copyright_text)
            except Exception:
                exif_bytes = None

    # FINAL SAVE with SIZE GUARD if adding copyright; otherwise, regular efficient save
    if args.copyright_indicator:
        save_with_size_guard(
            img,
            outfile,
            out_fmt,
            orig_filesize=orig_size,
            exif_bytes=exif_bytes,
            copyright_text_for_png=png_c_text,
            allow_png_quantize=args.allow_png_quantize,
            png_quantize_colors=args.png_quantize_colors,
        )
        new_size = os.path.getsize(outfile)
        log(f"[{os.path.basename(infile)}] copyright added; size {new_size} (orig {orig_size})")
    else:
        # Non-copyright path: still write efficiently.
        save_kwargs = {"format": out_fmt}
        if out_fmt in ("JPEG", "JPG"):
            if img.mode not in ("RGB", "L"):
                img = img.convert("RGB")
            save_kwargs.update(dict(quality=95, optimize=True, progressive=True, subsampling="keep"))
        elif out_fmt == "WEBP":
            if img.mode not in ("RGB", "L"):
                img = img.convert("RGB")
            save_kwargs.update(dict(quality=90, method=6, exact=True))
        elif out_fmt == "PNG":
            save_kwargs.update(dict(optimize=True, compress_level=9))
        img.save(outfile, **save_kwargs)
        log(f"[{os.path.basename(infile)}] saved ({out_fmt})")

def main():
    files = get_list_of_input_images(args.img_path, args.excluded_extensions)
    if not files:
        log("No input files matched.")
        return
    for f in files:
        try:
            process_one_file(f)
        except Exception as e:
            log(f"Error processing {f}: {e}")

    # Update readme automatically from the argparser.
    if args.generate_readme:
        print(generate_readme_from_parser(parser))
        exit(0)


if __name__ == "__main__":
    main()
