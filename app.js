// Moments data
const moments = [
    // FOCUS/CALM TOOLS
    {
        id: 1,
        category: 'focus-calm',
        categoryName: 'Focus/Calm Tools',
        name: 'Brain.fm',
        duration: 'short',
        durationText: '1-3 min',
        timeRestriction: 'daytime',
        link: 'https://my.brain.fm',
        instructions: 'Take 1-3 minutes to focus with Brain.fm. Use music designed to help you concentrate and find calm.'
    },
    {
        id: 2,
        category: 'focus-calm',
        categoryName: 'Focus/Calm Tools',
        name: 'Sensory goo timer',
        duration: 'short',
        durationText: '30 sec - 2 min',
        timeRestriction: 'anytime',
        link: 'https://www.online-stopwatch.com/sensory-timers/goo',
        instructions: 'Watch the mesmerizing goo timer for 30 seconds to 2 minutes. Let your eyes soften and your mind settle.'
    },
    {
        id: 3,
        category: 'focus-calm',
        categoryName: 'Focus/Calm Tools',
        name: 'Mynoise.net',
        duration: 'short',
        durationText: '1-3 min',
        timeRestriction: 'daytime',
        link: 'https://mynoise.net',
        instructions: 'Listen to customizable soundscapes for 1-3 minutes. Adjust the sliders to create your perfect ambient sound.'
    },

    // MOVEMENTS
    {
        id: 4,
        category: 'movements',
        categoryName: 'Movements',
        name: 'Muscle energy for right hip',
        duration: 'short',
        durationText: '1-3 min',
        timeRestriction: 'anytime',
        instructions: 'Push up with right leg and down with hands for 10 seconds, 2-3 times. Then pull up with right leg for 10 seconds, 2-3 times. Next, push down with right leg while pushing up with hands for 10 seconds, 2-3 times.'
    },
    {
        id: 5,
        category: 'movements',
        categoryName: 'Movements',
        name: 'Muscle energy for neck',
        duration: 'short',
        durationText: '1-3 min',
        timeRestriction: 'anytime',
        instructions: 'Push to the left with neck and resist with hand on left side of head for 10 seconds, 2-3 times. Push to the right with neck and resist with hand on right side of head for 10 seconds, 2-3 times. Then reverse: resist leftward movement with left hand for 10 seconds, 2-3 times. Resist rightward movement with right hand for 10 seconds, 2-3 times.'
    },
    {
        id: 6,
        category: 'movements',
        categoryName: 'Movements',
        name: 'Muscle energy for back',
        duration: 'short',
        durationText: '1-3 min',
        timeRestriction: 'anytime',
        instructions: 'Tilt bottom of pelvis forward and resist movement with hands on lower back. Hold for 10 seconds, 2-3 times.'
    },

    // BODY AWARENESS
    {
        id: 7,
        category: 'body-awareness',
        categoryName: 'Body Awareness',
        name: 'Somatic scanning',
        duration: 'medium',
        durationText: '3-10 min',
        timeRestriction: 'anytime',
        instructions: 'Move attention slowly through your body, noticing sensations without judgment. Start at your feet and work upward, pausing where you feel tension or discomfort.'
    },
    {
        id: 8,
        category: 'body-awareness',
        categoryName: 'Body Awareness',
        name: 'Body scan',
        duration: 'medium',
        durationText: '3-10 min',
        timeRestriction: 'anytime',
        instructions: 'Lie or sit comfortably. Bring awareness to each part of your body sequentially, from toes to head, observing any sensations present without trying to change them.'
    },
    {
        id: 9,
        category: 'body-awareness',
        categoryName: 'Body Awareness',
        name: 'Progressive muscle relaxation',
        duration: 'medium',
        durationText: '3-10 min',
        timeRestriction: 'anytime',
        instructions: 'Systematically tense and then release different muscle groups. Notice the difference between tension and relaxation as you move through your body.'
    },

    // MENTAL REFRAMING
    {
        id: 10,
        category: 'mental-reframing',
        categoryName: 'Mental Reframing',
        name: 'Thought swapping',
        duration: 'short',
        durationText: '30 sec - 2 min',
        timeRestriction: 'anytime',
        instructions: 'Describe current sensations in the body without owning it or judging it. Notice what\'s present with curiosity rather than criticism.'
    },
    {
        id: 11,
        category: 'mental-reframing',
        categoryName: 'Mental Reframing',
        name: 'Tapping',
        duration: 'short',
        durationText: '30 sec - 2 min',
        timeRestriction: 'anytime',
        instructions: 'Tap on acupressure points while repeating: Divine, connected to the universe, confident, energetic, pain-free, focused, compassionate with self and others.'
    },
    {
        id: 12,
        category: 'mental-reframing',
        categoryName: 'Mental Reframing',
        name: 'Safety reminder',
        duration: 'short',
        durationText: '30 sec - 2 min',
        timeRestriction: 'anytime',
        instructions: 'Notice sensations in the body that are areas of attention and remember the body is safe, it can let go of the sensations.'
    },

    // QUIETING
    {
        id: 13,
        category: 'quieting',
        categoryName: 'Quieting',
        name: 'Changing locations',
        duration: 'medium',
        durationText: '2-10 min',
        timeRestriction: 'anytime',
        instructions: 'Have you moved in the last 60 minutes? If not, change your physical location. Go to a different room, step outside, or simply stand and stretch.'
    },
    {
        id: 14,
        category: 'quieting',
        categoryName: 'Quieting',
        name: 'EFT: Grenada snorkeling color',
        duration: 'short',
        durationText: '30 sec - 2 min',
        timeRestriction: 'anytime',
        instructions: 'Recall the sensation of floating in the salty Caribbean water. Remember the deep, deep teal color surrounding you. Let that memory wash over you.'
    },
    {
        id: 15,
        category: 'quieting',
        categoryName: 'Quieting',
        name: 'Box breathing',
        duration: 'short',
        durationText: '30 sec - 2 min',
        timeRestriction: 'anytime',
        instructions: '4-4-4-4: Breathe in for 4 counts, hold for 4 counts, breathe out for 4 counts, hold for 4 counts. Repeat.'
    },
    {
        id: 16,
        category: 'quieting',
        categoryName: 'Quieting',
        name: '5-1-5-1 breathing (Heartbeat breathing)',
        duration: 'short',
        durationText: '30 sec - 2 min',
        timeRestriction: 'anytime',
        instructions: 'Breathe in for 5 counts, hold for 1 heartbeat, breathe out for 5 counts, hold for 1 heartbeat. The hold allows one heartbeat to pass between breaths.'
    },
    {
        id: 17,
        category: 'quieting',
        categoryName: 'Quieting',
        name: 'Butterfly hug',
        duration: 'short',
        durationText: '30 sec - 2 min',
        timeRestriction: 'anytime',
        instructions: 'Cross arms over chest and tap underneath collarbones at the same time. Alternate tapping gently, like butterfly wings.'
    },
    {
        id: 18,
        category: 'quieting',
        categoryName: 'Quieting',
        name: 'Soft eyes',
        duration: 'short',
        durationText: '30 sec - 2 min',
        timeRestriction: 'anytime',
        instructions: 'Drop eyelids halfway down, unfocus the eyes, and breathe. Let your gaze soften and your vision blur slightly.'
    },
    {
        id: 19,
        category: 'quieting',
        categoryName: 'Quieting',
        name: 'Toning/humming',
        duration: 'short',
        durationText: '30 sec - 2 min',
        timeRestriction: 'anytime',
        instructions: 'Stimulate the vagus nerve by quietly humming. Feel the vibration in your chest and throat.'
    },

    // LONGER CARE
    {
        id: 20,
        category: 'longer-care',
        categoryName: 'Longer Care',
        name: 'Schedule a massage',
        duration: 'short',
        durationText: '30 sec - 2 min',
        timeRestriction: 'anytime',
        instructions: 'Take a moment to schedule your next massage. Your body deserves this care.',
        link: 'https://massageenvy.com',
        additionalLink: 'https://oakhavenbooking.com'
    },
    {
        id: 21,
        category: 'longer-care',
        categoryName: 'Longer Care',
        name: 'Have a slow shower',
        duration: 'long',
        durationText: '20-30 min',
        timeRestriction: 'evening-weekend',
        instructions: 'Take 20-30 minutes for a slow, intentional shower. Let the water wash away tension. No rushing.'
    }
];

// App state
let currentMoment = null;
let notificationsEnabled = false;
let snoozeTracking = {}; // Track snooze count per moment

// Initialize Firebase Messaging
let messaging = null;
let fcmToken = null;

function initializeFirebase() {
    try {
        // Initialize Firebase app
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        
        // Get messaging instance
        messaging = firebase.messaging();
        
        // Request permission and get token
        requestFirebasePermission();
        
    } catch (error) {
        console.error('Error initializing Firebase:', error);
    }
}

async function requestFirebasePermission() {
    try {
        const permission = await Notification.requestPermission();
        
        if (permission === 'granted') {
            console.log('Notification permission granted');
            
            // Get FCM token
            const token = await messaging.getToken({
                vapidKey: vapidKey
            });
            
            if (token) {
                fcmToken = token;
                console.log('FCM Token:', token);
                
                // Save token to server
                await saveTokenToServer(token);
                
                updateNotificationStatus(true);
            }
        } else {
            updateNotificationStatus(false, 'Notification permission denied');
        }
    } catch (error) {
        console.error('Error getting permission:', error);
        updateNotificationStatus(false, 'Error enabling notifications');
    }
}

async function saveTokenToServer(token) {
    try {
        // Get settings
        const settings = loadSettings();
        const dailyCount = settings.dailyCount || 7;
        
        // Save token and preferences to Firebase
        await fetch('https://us-central1-moments-ase.cloudfunctions.net/registerDevice', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token,
                dailyCount: dailyCount,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
            })
        });
        
        console.log('Token saved to server');
    } catch (error) {
        console.error('Error saving token:', error);
    }
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    checkNotificationStatus();
    setupEventListeners();
    loadSettings();
    initializeFirebase();
    
    // Check if opened from notification with moment ID
    const urlParams = new URLSearchParams(window.location.search);
    const momentId = urlParams.get('moment');
    if (momentId) {
        showMomentDetail(parseInt(momentId));
    }
    
    // Register service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker registered'))
            .catch(err => console.log('Service Worker registration failed', err));
    }
}

function checkNotificationStatus() {
    if ('Notification' in window) {
        if (Notification.permission === 'granted') {
            updateNotificationStatus(true);
            scheduleNotifications();
        } else if (Notification.permission === 'denied') {
            updateNotificationStatus(false, 'Notifications are blocked. Please enable them in your browser settings.');
        }
    }
}

function updateNotificationStatus(enabled, message) {
    notificationsEnabled = enabled;
    const statusDiv = document.getElementById('notificationStatus');
    
    if (enabled) {
        statusDiv.innerHTML = `
            <p style="color: #77b5bb; font-weight: 600;">✓ Notifications enabled</p>
            <p style="font-size: 0.9em; color: #cec3d8; opacity: 0.9;">You'll receive random moments throughout the day</p>
        `;
    } else {
        statusDiv.innerHTML = `
            <p>${message || 'Enable notifications to receive your moments'}</p>
            <button id="enableNotifications" class="btn-primary">Enable Notifications</button>
        `;
        document.getElementById('enableNotifications').addEventListener('click', requestNotificationPermission);
    }
}

function requestNotificationPermission() {
    if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                updateNotificationStatus(true);
                scheduleNotifications();
                showNotification('Notifications enabled!', 'You\'ll now receive moments');
            } else {
                updateNotificationStatus(false, 'Notification permission denied');
            }
        });
    }
}

function setupEventListeners() {
    // Navigation
    document.getElementById('exploreBtn').addEventListener('click', () => showView('library'));
    document.getElementById('settingsBtn').addEventListener('click', () => showView('settings'));
    document.getElementById('backFromLibrary').addEventListener('click', () => showView('main'));
    document.getElementById('backFromDetail').addEventListener('click', () => showView('library'));
    document.getElementById('backFromSettings').addEventListener('click', () => showView('main'));

    // Settings
    document.getElementById('dailyCount').addEventListener('change', saveSettings);
    document.getElementById('notificationsEnabled').addEventListener('change', toggleNotifications);
    document.getElementById('testNotification').addEventListener('click', sendTestNotification);

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => filterMoments(btn.dataset.category));
    });

    // Load library
    loadMomentLibrary();
}

function showView(viewName) {
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
    document.getElementById(`${viewName}View`).classList.add('active');
}

function loadMomentLibrary(filter = 'all') {
    const container = document.getElementById('momentsList');
    const filtered = filter === 'all' ? moments : moments.filter(m => m.category === filter);
    
    container.innerHTML = filtered.map(moment => `
        <div class="moment-card" onclick="showMomentDetail(${moment.id})">
            <h3>${moment.name}</h3>
            <div class="moment-meta">
                <span class="category-badge category-${moment.category}">${moment.categoryName}</span>
                <span class="duration-badge">${moment.durationText}</span>
            </div>
        </div>
    `).join('');
}

function filterMoments(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    loadMomentLibrary(category);
}

function showMomentDetail(id) {
    const moment = moments.find(m => m.id === id);
    if (!moment) return;

    document.getElementById('detailTitle').textContent = moment.name;
    document.getElementById('detailCategory').textContent = moment.categoryName;
    document.getElementById('detailCategory').className = `category-badge category-${moment.category}`;
    document.getElementById('detailDuration').textContent = moment.durationText;
    document.getElementById('detailContent').innerHTML = `<p>${moment.instructions}</p>`;
    
    let linkHTML = '';
    if (moment.link) {
        linkHTML = `<a href="${moment.link}" target="_blank" rel="noopener">Open ${moment.name}</a>`;
    }
    if (moment.additionalLink) {
        linkHTML += ` <a href="${moment.additionalLink}" target="_blank" rel="noopener">Alternative booking</a>`;
    }
    document.getElementById('detailLink').innerHTML = linkHTML;

    showView('detail');
}

function scheduleNotifications() {
    if (!notificationsEnabled) return;

    // Get settings
    const settings = loadSettings();
    const dailyCount = settings.dailyCount || 7;

    // Clear existing scheduled notifications
    if ('serviceWorker' in navigator && 'Notification' in window) {
        navigator.serviceWorker.ready.then(registration => {
            if (registration.showNotification) {
                // Schedule notifications for today
                scheduleRandomNotifications(dailyCount);
            }
        });
    }
}

function scheduleRandomNotifications(count) {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 6 = Saturday
    const isWeekend = day === 0 || day === 6;

    // Clear previous schedules
    const existingTimers = JSON.parse(localStorage.getItem('notificationTimers') || '[]');
    existingTimers.forEach(timerId => clearTimeout(timerId));

    const timerIds = [];

    // Schedule main notifications (8am - 5pm)
    const mainCount = Math.floor(count * 0.75); // 75% of notifications
    const eveningCount = count - mainCount;

    for (let i = 0; i < mainCount; i++) {
        const randomTime = getRandomTime(8, 17); // 8am - 5pm
        const delay = randomTime - now;
        
        if (delay > 0) {
            const timerId = setTimeout(() => {
                sendRandomMoment('daytime', isWeekend);
            }, delay);
            timerIds.push(timerId);
        }
    }

    // Schedule evening notifications (6pm - 10pm)
    for (let i = 0; i < eveningCount; i++) {
        const randomTime = getRandomTime(18, 22); // 6pm - 10pm
        const delay = randomTime - now;
        
        if (delay > 0) {
            const timerId = setTimeout(() => {
                sendRandomMoment('evening', isWeekend);
            }, delay);
            timerIds.push(timerId);
        }
    }

    localStorage.setItem('notificationTimers', JSON.stringify(timerIds));

    // Schedule next day's notifications at midnight
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const midnightDelay = tomorrow - now;

    setTimeout(() => {
        scheduleNotifications();
    }, midnightDelay);
}

function getRandomTime(startHour, endHour) {
    const now = new Date();
    const start = new Date(now);
    start.setHours(startHour, 0, 0, 0);
    
    const end = new Date(now);
    end.setHours(endHour, 0, 0, 0);
    
    const randomTime = new Date(start.getTime() + Math.random() * (end - start));
    return randomTime;
}

function sendRandomMoment(timeOfDay, isWeekend) {
    // Filter moments based on time restrictions
    let availableMoments = moments.filter(moment => {
        if (moment.timeRestriction === 'anytime') return true;
        if (moment.timeRestriction === 'daytime' && timeOfDay === 'daytime') return true;
        if (moment.timeRestriction === 'evening-weekend' && (timeOfDay === 'evening' || isWeekend)) return true;
        return false;
    });

    // Check for snoozed moments and filter out if snoozed twice
    availableMoments = availableMoments.filter(moment => {
        const snoozeData = snoozeTracking[moment.id];
        if (!snoozeData) return true;
        
        // Check if snooze period has passed
        const now = Date.now();
        if (now < snoozeData.until) return false;
        
        // Reset snooze tracking if enough time has passed
        if (snoozeData.count >= 2 && now > snoozeData.until) {
            delete snoozeTracking[moment.id];
        }
        
        return true;
    });

    if (availableMoments.length === 0) {
        console.log('No available moments for this time');
        return;
    }

    const randomMoment = availableMoments[Math.floor(Math.random() * availableMoments.length)];
    showNotification(randomMoment.name, randomMoment.categoryName, randomMoment.id);
}

function showNotification(title, body, momentId) {
    if ('Notification' in window && Notification.permission === 'granted') {
        navigator.serviceWorker.ready.then(registration => {
            const options = {
                body: body,
                icon: '/icon-192.png',
                badge: '/badge-96.png',
                tag: momentId ? `moment-${momentId}` : 'general',
                data: { momentId: momentId },
                actions: momentId ? [
                    { action: 'done', title: 'Ase' },
                    { action: 'snooze', title: 'Another time' },
                    { action: 'explore', title: 'Explore' }
                ] : [],
                requireInteraction: true
            };

            registration.showNotification(title, options);
        });
    }
}

function sendTestNotification() {
    const randomMoment = moments[Math.floor(Math.random() * moments.length)];
    showNotification(randomMoment.name, randomMoment.categoryName, randomMoment.id);
}

function handleNotificationAction(action, momentId) {
    switch(action) {
        case 'done':
            // Moment completed, no further action needed
            console.log('Moment completed:', momentId);
            break;
        
        case 'snooze':
            handleSnooze(momentId);
            break;
        
        case 'explore':
            // This will be handled by the service worker to open the app
            break;
    }
}

function handleSnooze(momentId) {
    const now = Date.now();
    const snoozeData = snoozeTracking[momentId] || { count: 0, until: 0 };
    
    snoozeData.count += 1;
    
    if (snoozeData.count === 1) {
        // First snooze: 2 hours
        snoozeData.until = now + (2 * 60 * 60 * 1000);
    } else {
        // Second snooze: 24+ hours
        snoozeData.until = now + (24 * 60 * 60 * 1000);
    }
    
    snoozeTracking[momentId] = snoozeData;
    localStorage.setItem('snoozeTracking', JSON.stringify(snoozeTracking));
}

function loadSettings() {
    const settings = JSON.parse(localStorage.getItem('settings') || '{}');
    
    if (settings.dailyCount) {
        document.getElementById('dailyCount').value = settings.dailyCount;
    }
    
    return settings;
}

function saveSettings() {
    const settings = {
        dailyCount: parseInt(document.getElementById('dailyCount').value)
    };
    
    localStorage.setItem('settings', JSON.stringify(settings));
    scheduleNotifications();

    if (fcmToken) {
        saveTokenToServer(fcmToken);
    }
}

function toggleNotifications() {
    const enabled = document.getElementById('notificationsEnabled').checked;
    
    if (enabled) {
        scheduleNotifications();
    } else {
        // Clear all scheduled notifications
        const existingTimers = JSON.parse(localStorage.getItem('notificationTimers') || '[]');
        existingTimers.forEach(timerId => clearTimeout(timerId));
        localStorage.setItem('notificationTimers', '[]');
    }
}

// Load snooze tracking from storage
snoozeTracking = JSON.parse(localStorage.getItem('snoozeTracking') || '{}');
