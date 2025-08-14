# Copyright (c) 2025 takotime808

import piexif
import argparse
from PIL import Image


parser = argparse.ArgumentParser(description="Image Metadata Manipulation")
parser.add_argument("-i", "--in_img_path",
                    type=str,
                    metavar="str",
                    help="Path to image that needs to be modified.")
parser.add_argument("-o", "--out_img_path",
                    type=str,
                    default=r"out.png",
                    metavar="str",
                    help="Path to save modified image to (default: out.png).")
parser.add_argument("-m", "--metadata_removal_indicator",
                    action="store_true",
                    help="Indicator used to determine if image metadata should be removed")
parser.add_argument("-c", "--copyright_indicator",
                    action="store_true",
                    help="Add copyright to the image.")
parser.add_argument("-a", "--admin_mode",
                    action="store_true",
                    help="Boolean option to run in admin mode.")
args = parser.parse_args()


def remove_image_metadata(
        in_img_path: str,
        out_img_path: str,
        admin_mode: bool,
):
    image = Image.open(in_img_path)
        
    # next 3 lines strip exif
    data = list(image.getdata())
    image_without_exif = Image.new(image.mode, image.size)
    image_without_exif.putdata(data)
        
    image_without_exif.save(out_img_path)

    # as a good practice, close the file handler after saving the image.
    image_without_exif.close()
    if admin_mode:
        print(f"Image w/o metadata saved to {out_img_path}")
    return 


def add_copyright_metadata(
        in_img_path: str,
        out_img_path: str,
        admin_mode: bool,
):
    image = Image.open(in_img_path)

    # Create EXIF dictionary
    exif_dict = {
                    "0th": {piexif.ImageIFD.Copyright: b"copyright (c) 2025 takotime808"},
                    "1st": {piexif.ImageIFD.ImageDescription: "© 2025 takotime808"}
                }

    # Dump EXIF data to bytes
    exif_bytes = piexif.dump(exif_dict)

    # Save image with EXIF metadata
    image.save(out_img_path, exif=exif_bytes)
    if admin_mode:
        print(f"Image with (c) saved to {out_img_path}")
    return

if __name__ == "__main__":
    in_img_path = args.in_img_path
    out_img_path = args.out_img_path
    admin_mode = args.admin_mode
    rm_metadata = args.metadata_removal_indicator
    add_copyright = args.copyright_indicator

    if rm_metadata:
        remove_image_metadata(
            in_img_path=in_img_path,
            out_img_path=out_img_path,
            admin_mode=admin_mode,
        )
        if admin_mode:
            print(f"Metadata has been removed.")
    else:
        if admin_mode:
            print(f"No metadata was removed.")

    if add_copyright:
        # If the image first had metadata removed, reset variable names.
        if rm_metadata:
            in_img_path = out_img_path

        add_copyright_metadata(
                in_img_path=in_img_path,
                out_img_path=out_img_path,
                admin_mode=admin_mode,
        )
        if admin_mode:
            print(f"copyright info has been added to {out_img_path}")
    else:
        if admin_mode:
            print(f"No copyright information was added.")