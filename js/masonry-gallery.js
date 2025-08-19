// Copyright (c) 2025 takotime808
/**
 * Lightweight adaptive masonry (repo-wide).
 * - Builds columns based on viewport width (1/2/3/4).
 * - Measures images on the fly (no hardcoded w/h required).
 * - Places each image into the shortest column to balance heights.
 * - Lazy loads images; first one can be eager via fetchpriority from HTML.
 *
 * Reusable: just set window.<NAME>_IMAGES = [{src, alt}, ...] before this script runs,
 * or adapt the source array logic below.
 */

(function () {
  // Grab the container and dataset (Seattle page passes window.SEATTLE_IMAGES)
  const container = document.getElementById('gallery');
  if (!container) return;

  // Use a page-scoped global list if available, otherwise bail.
  const images = (window.SEATTLE_IMAGES && Array.isArray(window.SEATTLE_IMAGES))
    ? window.SEATTLE_IMAGES.slice()
    : [];

  // Cache of measured aspect ratios so we don’t re-measure on resize
  const ratioCache = new Map(); // key: src => value: h/w number

  // Responsive column counts
  function getColumnCount() {
    const w = window.innerWidth;
    if (w < 600) return 1;
    if (w < 900) return 2;
    if (w < 1200) return 3;
    return 4;
  }

  let currentCols = 0;

  // Build an empty column structure
  function buildColumns(n) {
    container.innerHTML = '';
    for (let i = 0; i < n; i++) {
      const col = document.createElement('div');
      col.className = 'mg-col';
      container.appendChild(col);
    }
    return Array.from(container.children);
  }

  // Compute current column heights (sum of ratios) to choose the shortest
  function makeColumnTracker(cols) {
    const heights = new Array(cols.length).fill(0);
    return {
      push(index, ratio) { heights[index] += ratio * 100; },
      shortest() {
        let min = heights[0], idx = 0;
        for (let i = 1; i < heights.length; i++) {
          if (heights[i] < min) { min = heights[i]; idx = i; }
        }
        return idx;
      }
    };
  }

  // Create a card with an optional placeholder sized by aspect ratio
  function createCard(imgSrc, alt, ratio) {
    const wrapper = document.createElement('figure');
    wrapper.className = 'mg-item';
    wrapper.style.setProperty('--ar', ratio ? ratio : '4/3');

    // Placeholder to reduce layout shift
    const ph = document.createElement('span');
    ph.className = 'ph';
    wrapper.appendChild(ph);

    const img = document.createElement('img');
    img.loading = 'lazy';
    img.decoding = 'async';
    img.alt = alt || '';
    img.src = imgSrc;

    // Once the image loads, remove placeholder
    img.addEventListener('load', () => {
      // Remove placeholder after paint to avoid flash
      requestAnimationFrame(() => {
        if (ph && ph.parentNode) ph.parentNode.removeChild(ph);
      });
    });

    wrapper.appendChild(img);
    return wrapper;
  }

  // Ensure we have a measured ratio; returns a Promise<number>
  function getRatioFor(src) {
    if (ratioCache.has(src)) return Promise.resolve(ratioCache.get(src));

    return new Promise((resolve) => {
      const probe = new Image();
      probe.decoding = 'async';
      probe.loading = 'eager';
      probe.src = src;
      probe.addEventListener('load', () => {
        const r = (probe.naturalHeight && probe.naturalWidth)
          ? (probe.naturalHeight / probe.naturalWidth)
          : (3 / 4);
        ratioCache.set(src, r);
        resolve(r);
      });
      probe.addEventListener('error', () => {
        const fallback = 3 / 4;
        ratioCache.set(src, fallback);
        resolve(fallback);
      });
    });
  }

  // Layout the gallery
  async function render() {
    const colsCount = getColumnCount();
    if (colsCount === currentCols && container.children.length === colsCount) {
      // no-op on repeat calls with same column count
      return;
    }
    currentCols = colsCount;

    const cols = buildColumns(colsCount);
    const tracker = makeColumnTracker(cols);

    // Load ratios (in parallel) so layout is snappy
    const ratios = await Promise.all(images.map(img => getRatioFor(img.src)));

    images.forEach((img, i) => {
      const idx = tracker.shortest();
      const ratio = ratios[i] || (3 / 4);
      const card = createCard(img.src, img.alt, ratio);
      cols[idx].appendChild(card);
      tracker.push(idx, ratio);
    });
  }

  // Debounce resize
  let rAF = null;
  function onResize() {
    if (rAF) cancelAnimationFrame(rAF);
    rAF = requestAnimationFrame(render);
  }

  // Init
  render();
  window.addEventListener('resize', onResize, { passive: true });
})();
