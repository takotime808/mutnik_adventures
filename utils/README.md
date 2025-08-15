# 📸 Image Manipulation & Metadata Tools #

This script resizes, rotates, reformats, strips metadata, and adds copyright info to images — with an optional **size guard** so adding metadata never increases file size.

---

## 🚀 Quick Start

Here are the **3 most common workflows**:

### 1. Resize & Convert to WebP

```bash
python manipulate_images_with_metadata.py -i "photo.jpg" -o "outdir" -sf 0.5 -oe webp
```

### 2. Remove Metadata, Then Add Copyright

```bash
python manipulate_images_with_metadata.py -i "photo.jpg" -o "outdir" -m -c
```

### 3. Convert a Folder of PNGs to JPEG

```bash
python manipulate_images_with_metadata.py -i "images/*.png" -o "outdir" -oe jpg
```

---

## 📋 Command-line Usage

```bash
python manipulate_images_with_metadata.py [options]
```

---

## ⚙️ Options

| Option                               | Type       | Default                          | Description                                                                             |
| ------------------------------------ | ---------- | -------------------------------- | --------------------------------------------------------------------------------------- |
| `-i`, `--img_path`                   | str        | `./*`                            | Glob pattern or file path(s) for input image(s). Comma-separated for multiple patterns. |
| `-o`, `--output_dir`                 | str        | `./`                             | Directory to save output images.                                                        |
| `-sf`, `--scale_factor`              | float      | `1.0`                            | Resize factor (e.g., `0.5` = half size).                                                |
| `-oe`, `--output_extension`          | str        | *keep original*                  | Output format (e.g., `jpg`, `png`, `webp`).                                             |
| `-ee`, `--excluded_extensions`       | list\[str] | `["py"]`                         | Extensions to skip (repeatable).                                                        |
| `-r`, `--rotate_image`               | int        | None                             | Rotate image by degrees (e.g., `-90`).                                                  |
| `-m`, `--metadata_removal_indicator` | flag       | *off*                            | Strip all EXIF metadata.                                                                |
| `-c`, `--copyright_indicator`        | flag       | *off*                            | Add copyright metadata (size-safe).                                                     |
| `--copyright_text`                   | str        | `copyright (c) 2025 takotime808` | Copyright text to embed.                                                                |
| `--allow_png_quantize`               | flag       | *off*                            | Allow PNG palette reduction to meet size-safe constraint.                               |
| `--png_quantize_colors`              | int        | `256`                            | Number of colors for PNG quantization (if enabled).                                     |
| `--admin_mode`                       | flag       | *off*                            | Verbose logging for debugging.                                                          |

---

## 💡 Examples

### 1. Resize a single image

```bash
python manipulate_images_with_metadata.py -i "input.jpg" -o "outdir" -sf 0.5 -oe webp
```

### 2. Resize all images in a directory

```bash
python manipulate_images_with_metadata.py -i "images/*.png" -o "outdir" -sf 0.25 -oe jpg
```

### 3. Rotate an image

```bash
python manipulate_images_with_metadata.py -i "photo.jpg" -o "outdir" -r -90
```

### 4. Remove all metadata (EXIF)

```bash
python manipulate_images_with_metadata.py -i "photo.jpg" -o "outdir" -m
```

### 5. Add copyright metadata (size-safe)

```bash
python manipulate_images_with_metadata.py -i "photo.jpg" -o "outdir" -c --copyright_text "© 2025 MyName"
```

### 6. Remove metadata, then add copyright

```bash
python manipulate_images_with_metadata.py -i "photo.jpg" -o "outdir" -m -c
```

### 7. Change format without resizing

```bash
python manipulate_images_with_metadata.py -i "image.png" -o "outdir" -oe jpg
```

### 8. Process multiple patterns at once

```bash
python manipulate_images_with_metadata.py -i "dir1/*.jpg,dir2/*.png" -o "outdir" -sf 0.8
```

### 9. PNG-only size-safe mode with quantization

```bash
python manipulate_images_with_metadata.py -i "photo.png" -o "outdir" -c --allow_png_quantize --png_quantize_colors 256
```

### 10. Verbose mode (admin)

```bash
python manipulate_images_with_metadata.py -i "photo.jpg" -o "outdir" -sf 0.5 -c --admin_mode
```

