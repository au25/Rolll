const cache_ver = "ver1";
const cacheArray = ["index.html", "offline.html"];

// serviceWorker listens to install request
self.addEventListener("install", (event) => {
  // waitUntil accepts a promise as a argument
  event.waitUntil(
    (async () => {
      try {
        console.log("opened cache");
        const cache = await caches.open(cache_ver);
        return cache.addAll(cacheArray);
      } catch (err) {
        console.log(err);
      }
    })()
  );
});

// listens for fetch requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match("offline.html"));
    })
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
