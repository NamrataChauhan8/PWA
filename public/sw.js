let cache = "appV1";
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cache).then((cache) => {
      cache.addAll([
        "/static/js/main.chunk.js",
        "/static/js/0.chunk.js",
        "/static/js/bundle.js",
        "/index.html",
        "/",
        "/favicon.ico",
        "/manifest.json",
        "/logo192.png",
        "/logo512.png",
      ]);
    }).catch((err)=>{
        alert("in catch block",err)
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        }
        let requestUrl = event.request.clone();
        fetch(requestUrl);
      })
    );
  }
});
