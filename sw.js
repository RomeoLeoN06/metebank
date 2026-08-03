const CACHE_NAME = 'kpss-lisans-v300-dynamic-svg-geometry-and-charts';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css?v=300',
  './tarih_kartlar.js?v=300',
  './cografya_kartlar.js?v=300',
  './vatandaslik_kartlar.js?v=300',
  './questions.js?v=300',
  './turkce_denemeler.js?v=300',
  './matematik_denemeler.js?v=300',
  './tarih_denemeler.js?v=300',
  './cografya_denemeler.js?v=300',
  './vatandaslik_denemeler.js?v=300',
  './app.js?v=300',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate' || event.request.headers.get('accept').includes('text/html')) {
    event.respondWith(
      fetch(event.request).then((networkResponse) => {
        const responseClone = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });
        return networkResponse;
      }).catch(() => {
        return caches.match(event.request) || caches.match('./index.html');
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request).then((networkResponse) => {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return networkResponse;
        });
      })
    );
  }
});
