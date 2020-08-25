const static_cache_ver = "staticCache_ver1.4.1";
const cacheArray = [
  "/",
  "index.html",
  "offline.html",
  "img/landing_withLogo.jpg",
  "img/blue_gift_box2.png",
  "img/red_gift_box.png",
  "img/rolll_logo_2.png",
  "img/background_35.png",
  // "https://firebasestorage.googleapis.com/v0/b/owospace-d6985.appspot.com/o/images%2Fred_gift_box.png?alt=media&token=ace05975-618b-4e8d-b9fd-a7d83736e5eb",
  // "https://firebasestorage.googleapis.com/v0/b/owospace-d6985.appspot.com/o/images%2Fbackground_35.png?alt=media&token=a5be174a-cd06-4d97-b282-be6b33e71946",
  // "https://firebasestorage.googleapis.com/v0/b/owospace-d6985.appspot.com/o/images%2Fblue_gift_box2.png?alt=media&token=a1e7a0ab-bf4e-4c07-8ca2-d4a841aa06b9",
];

// serviceWorker listens to install request
// install only happens whenever the service worker is updated / installed for the first time
self.addEventListener("install", (event) => {
  // waitUntil accepts a promise as a argument
  // cache.open function takes longer than the install event, waitUntil funciton will
  // allow cache event to finish before install event is finish
  event.waitUntil(
    (async () => {
      try {
        console.log("opened cache");
        const cache = await caches.open(static_cache_ver);
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
  cacheWhitelist.push(static_cache_ver);

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
  //   console.log("fetch event", event);
  // pauses fetch event and respond with custom event
  event.respondWith(
    caches.match(event.request).then((cacheRes) => {
      // return cache response or proceed with fetch
      return (
        cacheRes ||
        fetch(event.request).catch(() => caches.match("offline.html"))
      );
    })
  );
});
