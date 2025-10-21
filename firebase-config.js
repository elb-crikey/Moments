// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqug9b5eb4gBre21pKm9UXhbRT8FOSZx0",
    authDomain: "moments-ase.firebaseapp.com",
    projectId: "moments-ase",
    storageBucket: "moments-ase.firebasestorage.app",
    messagingSenderId: "251024107631",
    appId: "1:251024107631:web:ccc1f5379f71ffd9a1459a"
};

// VAPID key for push notifications
const vapidKey = "B0f2WDUFxR7zfH1GK0hTImvXZroKoxznHXdknTMESdx2cfdRy8CtdRk13z_HH3bSZw2i_ERdZearT-cYTy-8dGM";

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { firebaseConfig, vapidKey };
}
