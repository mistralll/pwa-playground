// service-worker.js
self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
});
  
self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
});
  
// リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function(event) {
  event.respondWith(
      caches
          .match(event.request)
          .then(function(response) {
              return response || fetch(event.request);
          })
  );
});