const staticCache = 'static-cache-v1';
const dynamicCacheName = 'dynamic-cache-v1';

const assets = [
    '/index.html',
    '/fallback.html',
];

// Installations-event: Tilføj statiske assets til cache
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(staticCache).then(cache => {
            return cache.addAll(assets);
        }).catch(error => {
            console.error('Fejl ved tilføjelse til statisk cache:', error);
        })
    );
});

// Aktiverings-event: Slet gammel cache, der ikke matcher `staticCache`
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys
                    .filter(key => key !== staticCache && key !== dynamicCacheName)
                    .map(key => caches.delete(key))
            );
        })
    );
    // Tager kontrol over alle åbne klienter med den nye service worker
    return self.clients.claim();
});

// Fetch-event: Network-first caching-strategi
self.addEventListener('fetch', event => {
    // Tjekker om forespørgslen er HTTP/HTTPS
    if (!(event.request.url.startsWith('http'))) return;

    event.respondWith(
        fetch(event.request)
            .then(fetchRes => {
                // Hvis vi får et netværkssvar, cache det dynamisk og returner det
                return caches.open(dynamicCacheName).then(cache => {
                    cache.put(event.request, fetchRes.clone()); // Tilføj svaret til cache
                    return fetchRes; // Returner netværkssvaret
                });
            })
            .catch(() => {
                // Hvis netværket fejler, prøv at returnere fra cachen
                return caches.match(event.request).then(cacheRes => {
                    return cacheRes || caches.match('/fallback.html'); // Fallback til en offline-side
                });
            })
    );
});
