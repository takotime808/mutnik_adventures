# Copyright (c) 2025 takotime808
"""
Generate a grouped gallery index for Mutnik Adventures.

Each top-level folder under `galleries/` (e.g., jeff-and-beth, mel-and-carl, tako)
becomes a collapsible <details> section containing thumbnails linking to its subgalleries.
Representative images are automatically pulled from `images/` where names match.

Run from the repository root:
    python build_gallery_index.py
Output:
    galleries/index.html
    # gallery.html
"""

import os
from pathlib import Path
from urllib.parse import quote

# --- Configuration ---------------------------------------------------------
ROOT = Path(__file__).resolve().parent
GALLERIES = ROOT / "galleries"
IMAGES = ROOT / "images"
OUTPUT = GALLERIES / "index.html"
# OUTPUT = ROOT / "gallery.html"
IMG_EXTS = {".jpg", ".jpeg", ".png", ".webp", ".gif"}

# --- Helper functions ------------------------------------------------------

def find_representative_images(folder_name: str, limit=3):
    """Search images/ recursively for folders containing folder_name."""
    matches = []
    for dirpath, _, filenames in os.walk(IMAGES):
        if folder_name.lower() in dirpath.lower():
            for fn in filenames:
                if Path(fn).suffix.lower() in IMG_EXTS:
                    matches.append(Path(dirpath) / fn)
                    if len(matches) >= limit:
                        return matches
    return matches


def make_thumb_html(images, gallery_path, title):
    """Render clickable thumbnails (or placeholder)."""
    if not images:
        return f"<a href='/{quote(str(gallery_path))}'><div class='placeholder'>No preview</div></a>"

    thumbs = []
    for img in images:
        rel_img = os.path.relpath(img, ROOT)
        thumbs.append(f"<a href='/{quote(str(gallery_path))}'><img src='/{quote(rel_img)}' alt='{title}'></a>")
    return "\n".join(thumbs)


# --- Gather gallery data ---------------------------------------------------

family_galleries = {}

for html_file in GALLERIES.rglob("index.html"):
    # Determine family (top-level folder)
    try:
        family = html_file.relative_to(GALLERIES).parts[0]
    except IndexError:
        continue

    if family not in family_galleries:
        family_galleries[family] = []

    rel_html = html_file.relative_to(ROOT)
    title = html_file.parent.name.replace("_", " ").replace("-", " ").title()
    images = find_representative_images(html_file.parent.name)
    thumb_html = make_thumb_html(images, rel_html, title)

    family_galleries[family].append(
        f"""
        <div class="gallery-section">
          <h3><a href="/{quote(str(rel_html))}">{title}</a></h3>
          <div class="thumbs">{thumb_html}</div>
        </div>
        """
    )

# --- HTML Template ---------------------------------------------------------

sections = []
for family, galleries in sorted(family_galleries.items()):
    family_title = family.replace("_", " ").replace("-", " ").title()
    sections.append(
        f"""
        <details>
          <summary>{family_title}</summary>
          <div class="family-block">
            {''.join(galleries)}
          </div>
        </details>
        """
    )

HTML = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mutnik Adventures – Gallery Index</title>
  <style>
    body {{
      font-family: 'Inter', system-ui, sans-serif;
      margin: 0; padding: 30px;
      background: #fdfdfd;
      color: #222;
    }}
    h1 {{
      text-align: center;
      font-size: 2em;
      margin-bottom: 1em;
    }}
    a {{
      color: #005BAD;
      text-decoration: none;
    }}
    a:hover {{
      text-decoration: underline;
    }}
    details {{
      border: 1px solid #ccc;
      border-radius: 8px;
      margin-bottom: 20px;
      background: #fff;
      box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    }}
    summary {{
      font-size: 1.3em;
      font-weight: 600;
      padding: 10px 16px;
      cursor: pointer;
      background: #f0f4f8;
      border-radius: 8px 8px 0 0;
    }}
    summary:hover {{
      background: #e2ebf3;
    }}
    .family-block {{
      padding: 10px 20px 20px;
    }}
    .gallery-section {{
      margin-bottom: 20px;
    }}
    .gallery-section h3 {{
      margin: 10px 0;
      font-size: 1.1em;
    }}
    .thumbs {{
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }}
    .thumbs a {{
      width: 200px;
      height: 130px;
      display: block;
      overflow: hidden;
      border-radius: 10px;
      background: #fff;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      transition: transform 0.2s;
    }}
    .thumbs a:hover {{
      transform: scale(1.04);
    }}
    .thumbs a img {{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }}
    .placeholder {{
      width: 200px;
      height: 130px;
      background: repeating-linear-gradient(
        45deg, #eee, #eee 10px, #ddd 10px, #ddd 20px
      );
      display: flex;
      align-items: center;
      justify-content: center;
      color: #777;
      font-size: 0.9em;
    }}
  </style>
</head>
<body>
  <a id="back-button" href="index.html">Back to Globe</a>
  <h1>🌍 Mutnik Adventures – All Family Galleries</h1>
  {''.join(sections)}
</body>
</html>
"""

# --- Write output ----------------------------------------------------------
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
OUTPUT.write_text(HTML, encoding="utf-8")
print(f"✅ Grouped gallery index built: {OUTPUT}")
