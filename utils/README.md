# Python Image Utils #

Utility code for image handling and manipulation.

**Manipulate images for better display web display:**
```sh
python manipulate_images_for_web.py -oe webp -sf 0.5 -r -90
```

**Remove metadata and add copyright information, then save as `test.png`:**
```sh
python image_metadata.py -i icon-192.png -c -a -m -o "./test.png"
```
Note: The `-a` flag sets admin mode to True, for informative print-outs and debugging.

**Add copyright information to image:**
```sh
python image_metadata.py -i icon-192.png -c -a
```

**Remove image metadata:**
```sh
python image_metadata.py -i icon-192.png -m -a
```

**Check image metadata:**
```sh
python check_metadata.py out.png
#>> Copyright                : copyright (c) 2025 takotime808
```