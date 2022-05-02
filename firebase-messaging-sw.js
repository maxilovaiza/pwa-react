importScripts("/__/firebase/8.10.1/firebase-app.js");
importScripts('/__/firebase/8.10.1/firebase-messaging.js');
const firebaseconfg = {
  apiKey: "AIzaSyDhZJ-6_gSC0rY0ldNQYbjzxPgwl3qeses",
    appId: "1:1051942780331:web:e871c416babdea5450a6ee",
    messagingSenderId: "1051942780331",
    projectId: "flutter-web-a1352",
    authDomain: "flutter-web-a1352.firebaseapp.com",
    storageBucket: "flutter-web-a1352.appspot.com",
    measurementId: "G-J1H4CGPMVL",
}
firebase.initializeApp(firebaseconfg)


const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});