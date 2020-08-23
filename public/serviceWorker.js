const cache_ver = "ver1";
const cacheArray = [
  "index.html",
  "offline.html",
  "img/landing_withLogo.jpg"
];

// serviceWorker listens to install request
// install only happens whenever the service worker is updated / installed for the first time
self.addEventListener("install", (event) => {
  // waitUntil accepts a promise as a argument
  event.waitUntil(
    (async () => {
      try {
        console.log("opened cache");
        const cache = await caches.open(cache_ver);
        // reaches out to server to get resources
        return cache.addAll(cacheArray);
      } catch (err) {
        console.log(err);
      }
    })()
  );
});

// listens for activate request
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(cache_ver);

  event.waitUntil(
    (async () => {
      const cacheNameArray = await caches.keys();
      Promise.all(
        cacheNameArray.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })()
  );
});

// listens for fetch requests
// fetch requests refers to any request to the server ( .html, .js, .css, libraries, images, etc)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match("offline.html"));
    })
  );
});
