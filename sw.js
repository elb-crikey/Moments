   const CACHE_NAME = 'wellness-moments-v4';
   const urlsToCache = [
       '/',
       '/index.html',
       '/styles.css',
       '/app.js',
       '/manifest.json',
       '/icon-192.png',
       '/icon-512.png',
       '/badge-96.png'
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

Fix Service Worker Notification Click

Go to GitHub → sw.js → Edit
Find the notificationclick event listener (around line 27)
Replace the entire event listener with this:

javascript// Handle notification clicks
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
                        clientList[0].postMessage({
                            type: 'snooze',
                            momentId: momentId
                        });
                    }
                })
        );
    } else {
        // No action or "explore" - open app to moment detail
        const urlToOpen = momentId ? `/?moment=${momentId}` : '/';
        
        event.waitUntil(
            clients.matchAll({ type: 'window', includeUncontrolled: true })
                .then(clientList => {
                    // Check if app is already open
                    for (let client of clientList) {
                        if (client.url.includes(self.registration.scope) && 'focus' in client) {
                            return client.focus().then(client => {
                                return client.navigate(urlToOpen);
                            });
                        }
                    }
                    // Open new window if app not open
                    if (clients.openWindow) {
                        return clients.openWindow(urlToOpen);
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
