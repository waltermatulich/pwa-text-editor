// service-worker.js

// Install service worker
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('v1').then((cache) => {
        return cache.addAll([
          // Add URLs of assets to cache for offline use
          '/index.html',
          '/styles.css',
          '/script.js',
          // Add more assets as needed
        ]);
      })
    );
  });
  
  // Fetch assets from cache or network
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  