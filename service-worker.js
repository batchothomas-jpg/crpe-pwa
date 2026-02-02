const CACHE_NAME = "crpe-pwa-v2";

const CORE_ASSETS = [
  "/crpe-pwa/",
  "/crpe-pwa/index.html",
  "/crpe-pwa/manifest.json",
  "/crpe-pwa/css/style.css"
];


// INSTALL
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

// ACTIVATE
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// FETCH (OFFLINE FIRST)
self.addEventListener("fetch", event => {
  const request = event.request;

  // navigation (page)
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(() =>
        caches.match("./index.html")
      )
    );
    return;
  }

  // autres fichiers
  event.respondWith(
    caches.match(request).then(
      response => response || fetch(request)
    )
  );
});

