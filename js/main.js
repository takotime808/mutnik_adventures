// js/main.js (no exports/require)
const markers = [
  { lat: 40.7, lng: -74.0, label: "Jeff & Beth", color: "red", imageUrl: "https://raw.githubusercontent.com/takotime808/world_map/develop/Beth_Jeff_Adventures/photos/IMG_0195.JPG" },
  { lat: 34.0, lng: -118.2, label: "Tako & Dani", color: "teal", imageUrl: "https://example.com/2.jpg" },
    {
    lat: 21.4389,
    lng: -157.9633,
    label: "Oʻahu - Tako Gallery",
    color: "gold",
    url: "galleries/tako/hawaii/index.html" // relative path
  },
];

const globe = window.Globe()(document.getElementById('globeViz'))
  .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
  .pointOfView({ lat: 20, lng: 0, altitude: 2 });

globe
  .pointsData(markers)
  .pointLat('lat')
  .pointLng('lng')
  .pointColor(d => d.color)
  .pointAltitude(0.05)
  .pointRadius(0.2)
  .pointLabel('label')
  .onPointClick(d => {
    document.getElementById('img-popup')?.remove();

    // If the pin has a URL, redirect instead of showing an image
    if (d.url) {
      window.location.href = d.url;
      return;
    }

    if (d.imageUrl) {
      const img = document.createElement('img');
      img.id = 'img-popup';
      img.src = d.imageUrl;
      img.style.cssText = `
        position:fixed; top:20px; right:20px;
        max-width:200px; border-radius:8px;
        background:#fff; padding:6px;
        box-shadow:0 0 16px #0008;
        cursor:pointer; z-index:1000;
      `;
      img.onclick = () => img.remove();
      document.body.appendChild(img);
    }
  });
