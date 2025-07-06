var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / (window.innerHeight * 0.8), 0.1, 1000);
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight * 0.8);
document.getElementById('globe-container').appendChild(renderer.domElement);

var light = new THREE.AmbientLight(0xffffff);
scene.add(light);

var geometry = new THREE.SphereGeometry(5, 64, 64);
var globe;

// `earthBase64` is provided by js/earth_base64.js
var texture = new THREE.TextureLoader().load('data:image/jpeg;base64,' + earthBase64);
var material = new THREE.MeshPhongMaterial({ map: texture });
globe = new THREE.Mesh(geometry, material);
scene.add(globe);
animate();

camera.position.z = 10;

function animate() {
    requestAnimationFrame(animate);
    if (globe) {
        globe.rotation.y += 0.002;
    }
    renderer.render(scene, camera);
}

window.addEventListener('resize', function () {
    const width = window.innerWidth;
    const height = window.innerHeight * 0.8;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});
