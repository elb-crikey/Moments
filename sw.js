const CACHE_NAME = 'wellness-moments-v2';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/manifest.json'
];

// Install service worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

// Fetch from cache
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
    event.notification.close();

    const action = event.action;
    const momentId = event.notification.data?.momentId;

    if (action === 'done') {
        // Moment completed
        console.log('Moment completed:', momentId);
    } else if (action === 'snooze') {
        // Handle snooze
        event.waitUntil(
            clients.matchAll({ type: 'window' })
                .then(clientList => {
                    if (clientList.length > 0) {
                        // Send message to open client
                        clientList[0].postMessage({
                            type: 'snooze',
                            momentId: momentId
                        });
                    }
                })
        );
    } else if (action === 'explore' || !action) {
        // Open app to moment detail
        event.waitUntil(
            clients.matchAll({ type: 'window', includeUncontrolled: true })
                .then(clientList => {
                    // Focus existing window if available
                    for (let client of clientList) {
                        if ('focus' in client) {
                            return client.focus().then(() => {
                                client.postMessage({
                                    type: 'showMoment',
                                    momentId: momentId
                                });
                            });
                        }
                    }
                    // Open new window if no existing window
                    if (clients.openWindow) {
                        return clients.openWindow(`/?moment=${momentId}`);
                    }
                })
        );
    }
});

// Listen for messages from the app
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// Update service worker
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
