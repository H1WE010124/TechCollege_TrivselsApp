const staticCache = 'static-cache-v1';
const dynamicCacheName = 'dynamic-cache-v1';

const assets = [

    'index.html',
    'fallback.html',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(staticCache).then(cache => {
            console.log('Caching følgende filer:', assets);
            return cache.addAll(assets);
        }).catch(error => {
            console.error('Fejl ved caching af filer:', error);
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.filter(key => key !== staticCache && key !== dynamicCacheName)
                    .map(key => caches.delete(key))
            )
        )
    );
    console.log('Service worker aktiveret og gammel cache ryddet.');
    return self.clients.claim();
});

self.addEventListener('fetch', event => {
    if (!(event.request.url.startsWith('http'))) return;

    event.respondWith(
        fetch(event.request)
            .then(fetchRes => {
                return caches.open(dynamicCacheName).then(cache => {
                    cache.put(event.request, fetchRes.clone());
                    console.log('Dynamisk caching af:', event.request.url);
                    return fetchRes;
                });
            })
            .catch(() => {
                console.warn('Netværk fejlede. Tjekker cache for:', event.request.url);
                return caches.match(event.request).then(cacheRes => {
                    if (cacheRes) {
                        console.log('Serving fra cache:', event.request.url);
                        return cacheRes;
                    } else if (event.request.mode === 'navigate') {
                        console.log('Serving fallback.html som offline fallback');
                        return caches.match('/fallback.html');
                    }
                });
            })
    );
});
