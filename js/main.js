// Copyright (c) 2025 takotime808
const markers = [
  {
    lat: 48.8566,
    lng: 2.3522,
    label: "Jeff & Beth - Paris",
    color: "red",
    url: "galleries/jeff-and-beth/paris/index.html"
  },
  {
    lat: 40.7128,
    lng: -74.006,
    label: "Tako & Dani - New York",
    color: "teal",
    url: "galleries/tako-and-dani/new_york/index.html"
  },
  {
    lat: 21.4389,
    lng: -157.9633,
    label: "Oʻahu - Tako Gallery",
    color: "gold",
    url: "galleries/tako/hawaii/index.html"
  },
  {
    lat: 29.9511,
    lng: -90.0715,
    label: "Tako & Dani - New Orleans",
    color: "teal",
    url: "galleries/tako-and-dani/nola/index.html"
  },
  {
    lat: 40.6826,
    lng: -73.9755,
    label: "Barclays Center - Brooklyn",
    color: "teal",
    url: "galleries/tako-and-dani/new_york/index.html"
  },
  {
    lat: 27.7731,
    lng: -82.64,
    label: "St. Petersburg, FL",
    color: "teal",
    url: "galleries/tako-and-dani/st_petersburg_fl/index.html"
  },
  {
    lat: 24.5551,
    lng: -81.78,
    label: "Key West, FL",
    color: "teal",
    url: "galleries/tako-and-dani/key-west/index.html"
  },
  {
    lat: 26.142,
    lng: -81.7948,
    label: "Naples, FL",
    color: "teal",
    url: "galleries/tako-and-dani/naples_fl/index.html"
  },
  {
    lat: 32.9595,
    lng: -117.2653,
    label: "Del Mar, CA",
    color: "teal",
    url: "galleries/tako-and-dani/san-diego/index.html"
  },
  {
    lat: 15.87,
    lng: 100.9925,
    label: "Thailand",
    color: "gold",
    url: "galleries/tako/thailand/index.html"
  },
  {
    lat: 45.1,
    lng: 15.2,
    label: "Croatia",
    color: "gold",
    url: "galleries/tako/croatia/index.html"
  },
  {
    lat: 53.5511,
    lng: 9.9937,
    label: "Hamburg, Germany",
    color: "gold",
    url: "galleries/tako/hamburg/index.html"
  },
  {
    lat: 41.2753,
    lng: 28.7519,
    label: "Istanbul Airport, Turkey",
    color: "gold",
    url: "galleries/tako/turkey_airport/index.html"
  },
  {
    lat: -0.9538,
    lng: -90.9656,
    label: "Galapagos Islands",
    color: "red",
    url: "galleries/og-mutniks/galapagos/index.html"
  },
  {
    lat: 19.4326,
    lng: -99.1332,
    label: "Mexico City",
    color: "gold",
    url: "galleries/tako/mexico_city/index.html"
  },
  {
    lat: 10.4632,
    lng: -84.7033,
    label: "Arenal Volcano, Costa Rica",
    color: "gold",
    url: "galleries/tako/arenal_volcano/index.html"
  },
  {
    lat: 58.3019,
    lng: -134.4197,
    label: "Juneau, Alaska",
    color: "red",
    url: "galleries/og-mutniks/juneau/index.html"
  },
  {
    lat: 45.677,
    lng: -111.0429,
    label: "Bozeman, Montana",
    color: "gold",
    url: "galleries/tako/bozeman/index.html"
  },
  {
    lat: 36.2168,
    lng: -81.6746,
    label: "Boone, North Carolina",
    color: "gold",
    url: "galleries/tako/boone/index.html"
  },
  {
    lat: 35.5586,
    lng: -75.4665,
    label: "Outer Banks, NC",
    color: "gold",
    url: "galleries/tako/outer_banks/index.html"
  },
  {
    lat: 36.8508,
    lng: -76.2859,
    label: "Norfolk, Virginia",
    color: "blue",
    url: "galleries/zack/norfolk/index.html"
  },
  {
    lat: 34.7026,
    lng: -83.7288,
    label: "Helen, Georgia",
    color: "gold",
    url: "galleries/tako/helen/index.html"
  },
  {
    lat: 39.7392,
    lng: -104.9903,
    label: "Denver, Colorado",
    color: "gold",
    url: "galleries/tako/denver/index.html"
  },
  {
    lat: 41.9028,
    lng: 12.4964,
    label: "Rome, Italy",
    color: "red",
    url: "galleries/og-mutniks/rome/index.html"
  },
  {
    lat: 43.7396,
    lng: 7.427,
    label: "Monaco",
    color: "red",
    url: "galleries/og-mutniks/monaco/index.html"
  },
  {
    lat: 43.7102,
    lng: 7.262,
    label: "Nice, France",
    color: "red",
    url: "galleries/og-mutniks/nice/index.html"
  },
  {
    lat: 37.9838,
    lng: 23.7275,
    label: "Greece Coastline",
    color: "red",
    url: "galleries/og-mutniks/greece/index.html"
  },
  {
    lat: 42.3601,
    lng: -71.0589,
    label: "Boston, Massachusetts",
    color: "gold",
    url: "galleries/tako/boston/index.html"
  },
  {
    lat: 44.6995,
    lng: -73.4529,
    label: "Plattsburgh, New York",
    color: "gold",
    url: "galleries/tako/plattsburgh/index.html"
  },
  {
    lat: 40.01499,
    lng: -105.27055,
    label: "Jeff & Beth - Boulder",
    color: "red",
    url: "galleries/jeff-and-beth/boulder/index.html"
  },
  {
    lat: 13.4125,
    lng: 103.866,
    label: "Dukes - Ankor Wat",
    color: "red",
    url: "images/dukes/Ankor_Wat.jpg"
  }
];

const popup = document.getElementById('image-popup');
const popupImage = document.getElementById('popup-image');

popup.addEventListener('click', (event) => {
  event.stopPropagation();
  popup.classList.add('hidden');
  popupImage.src = '';
});

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
    if (d.url) {
      if (/\.(png|jpe?g|gif)$/i.test(d.url)) {
        popupImage.src = d.url;
        popup.classList.remove('hidden');
      } else {
        window.location.href = d.url;
      }
    }
  });


const activeColors = new Set(markers.map(m => m.color));

function updateMarkers() {
  globe.pointsData(markers.filter(m => activeColors.has(m.color)));
}

updateMarkers();

document.querySelectorAll('.legend-item').forEach(item => {
  const color = item.dataset.color;
  item.addEventListener('click', () => {
    if (activeColors.has(color)) {
      activeColors.delete(color);
      item.classList.add('disabled');
    } else {
      activeColors.add(color);
      item.classList.remove('disabled');
    }
    updateMarkers();
  });
});