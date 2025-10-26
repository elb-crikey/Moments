// Firebase messaging service worker with PWA caching
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Cache configuration
const CACHE_NAME = 'wellness-moments-v7';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/manifest.json',
    '/icon-192.png',
    '/icon-512.png',
    '/badge-96.png',
    '/firebase-config.js'
];

// Initialize Firebase in the service worker
firebase.initializeApp({
    apiKey: "AIzaSyCqug9b5eb4gBre21pKm9UXhbRT8FOSZx0",
    authDomain: "moments-ase.firebaseapp.com",
    projectId: "moments-ase",
    storageBucket: "moments-ase.firebasestorage.app",
    messagingSenderId: "251024107631",
    appId: "1:251024107631:web:ccc1f5379f71ffd9a1459a"
});

const messaging = firebase.messaging();

// Install service worker and cache assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch from cache, fallback to network
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

// Handle Firebase background messages
messaging.onBackgroundMessage((payload) => {
    console.log('Received background message:', payload);
    
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/icon-192.png',
        badge: '/badge-96.png',
        data: payload.data,
        actions: [
            { action: 'done', title: 'Ase' },
            { action: 'snooze', title: 'Another time' }
        ],
        requireInteraction: true,
        tag: payload.data?.momentId ? `moment-${payload.data.momentId}` : 'general'
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
    event.notification.close();

    const action = event.action;
    const momentId = event.notification.data?.momentId;

    if (action === 'done') {
        console.log('Moment completed:', momentId);
        // Send completion status to server
        if (momentId) {
            fetch(`https://us-central1-moments-ase.cloudfunctions.net/markMomentDone`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ momentId, action: 'done' })
            }).catch(err => console.error('Error marking done:', err));
        }
    } else if (action === 'snooze') {
        console.log('Moment snoozed:', momentId);
        // Send snooze status to server
        if (momentId) {
            fetch(`https://us-central1-moments-ase.cloudfunctions.net/snoozeMoment`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ momentId, action: 'snooze' })
            }).catch(err => console.error('Error snoozing:', err));
        }
    } else {
        // Open app to moment detail
        const urlToOpen = momentId ? `https://wellmoments.netlify.app/?moment=${momentId}` : 'https://wellmoments.netlify.app/';
        
        event.waitUntil(
            clients.matchAll({ type: 'window', includeUncontrolled: true })
                .then(clientList => {
                    // Check if app is already open
                    for (let client of clientList) {
                        if (client.url.includes('wellmoments.netlify.app') && 'focus' in client) {
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
