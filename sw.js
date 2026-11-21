/* Chhota service worker: sirf "install" ko mumkin banata hai.
   Kuch cache nahi karta, is liye naya version hamesha foran milta hai. */
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(fetch(e.request).catch(function () {
    return new Response("Internet nahi hai. Dobara try karein.", { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } });
  }));
});
