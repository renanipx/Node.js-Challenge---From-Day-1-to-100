self.addEventListener('install', (event) => {
  console.log('[SW] Installed');
  event.waitUntil(
    caches.open('demo-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
      ]);
    })
  );
});

self.addEventListener('activate', () => {
  console.log('[SW] Activated');
});

self.addEventListener('fetch', (event) => {
  console.log('[SW] Fetching:', event.request.url);
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
