const CACHE_NAME = 'mutnik-cache-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/images/icons/icon-192.png',
  '/images/icons/icon-512.png',
  '/images/icons/maskable_icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
