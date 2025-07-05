// Initialize the map
var map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Traveler data with markers
var travelers = {
    'Jeff & Beth': {
        color: 'red',
        locations: [
            { name: 'Paris', coords: [48.8566, 2.3522], url: 'galleries/jeff-and-beth/paris/index.html' },
            { name: 'Italian Trulli', coords: [42.3730, -73.3677], url: 'galleries/jeff-and-beth/italian-trulli/index.html' },
        ]
    },
    'Tako & Dani': {
        color: 'teal',
        locations: [
            // { name: 'New York', coords: [40.7128, -74.0060], url: 'galleries/tako-and-dani/new_york/index.html' },
            { name: 'New York', coords: [40.7128, -74.0060], url: 'galleries/tako-and-dani/new_york/index.html' },
            { name: 'NOLA', coords: [29.9509, -90.0758], url: 'galleries/tako-and-dani/nola/index.html' },
            { name: 'San Diego', coords: [32.7157, -117.1611], url: 'galleries/tako-and-dani/san-diego/index.html' },
            { name: 'Oahu, HI', coords: [21.4389, -158.0001], url: 'galleries/tako-and-dani/hawaii-dani2025/index.html' },
            { name: 'Key West', coords: [24.5551, -81.7800], url: 'galleries/tako-and-dani/key-west/index.html' },
        ]
    },
    'Tako': {
        color: 'green',
        locations: [
            { name: 'Hawaii', coords: [19.5429, -155.6659], url: 'galleries/tako/hawaii/index.html' },
        ]
    },
};

// Add markers and legend items
Object.keys(travelers).forEach(function(name) {
    var traveler = travelers[name];
    traveler.locations.forEach(function(loc) {
        var marker = L.circleMarker(loc.coords, {
            color: traveler.color,
            radius: 8,
            fillOpacity: 0.8
        }).addTo(map);
        marker.bindPopup('<b>' + name + '</b><br>' + loc.name + '<br><a href="' + loc.url + '">View Photos</a>');
    });
});