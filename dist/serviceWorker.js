const CACHE_NAME = `locker-v1.0.0-cache-v1`;

const cacheFiles = [
    "/views",
    "/scripts/bundle.js",
    "/images/favicon.ico"
]

const excludeFilePaths = [
    "extension",
    "chrome-extension",
    "/resources",
    "/update/map",
    "socket.io"
]

// Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        cache.addAll(cacheFiles);
    })());
    console.log("[Service Worker] installed Service Worker.");
});

self.addEventListener("activate", event => {
    event.waitUntil((async () => {
        event.waitUntil(self.clients.claim());
        event.waitUntil(self.skipWaiting());
    })())
})

self.addEventListener('fetch', event => {
    event.respondWith((async () => {
        const cache = await caches.open(CACHE_NAME);

        try {
            // Try to fetch the resource from the network.
            const fetchResponse = await fetch(event.request);

            // If it fetched excluded files, they will not save in the cache
            for (const path of excludeFilePaths) {
                if (event.request.url.includes(path)) return fetchResponse;
            }

            // Save the resource in the cache.
            cache.put(event.request, fetchResponse.clone());

            console.log("[Service Worker] updated chache resources.");

            // And return it.
            return fetchResponse;
        } catch (e) {
            console.log("[Service Worker] failed to fetch resources");
            // Fetching didn't work get the resource from the cache.
            const cachedResponse = await cache.match(event.request);

            console.log("[Service Worker] loading from cached resources.");

            // And return it.
            return cachedResponse;
        }
    })());
});