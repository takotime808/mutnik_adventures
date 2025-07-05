// Initialize the map
var map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Traveler data with markers
var travelers = {
    'Alice': {
        color: 'red',
        locations: [
            { name: 'Paris', coords: [48.8566, 2.3522], url: 'galleries/alice/paris/index.html' },
            { name: 'Tokyo', coords: [35.6895, 139.6917], url: 'galleries/alice/tokyo/index.html' }
        ]
    },
    'Bob': {
        color: 'blue',
        locations: [
            { name: 'New York', coords: [40.7128, -74.0060], url: 'galleries/bob/new_york/index.html' }
        ]
    }
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
