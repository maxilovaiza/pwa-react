importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDhZJ-6_gSC0rY0ldNQYbjzxPgwl3qeses",
  appId: "1:1051942780331:web:e871c416babdea5450a6ee",
  messagingSenderId: "1051942780331",
  projectId: "flutter-web-a1352",
  authDomain: "flutter-web-a1352.firebaseapp.com",
  storageBucket: "flutter-web-a1352.appspot.com",
  measurementId: "G-J1H4CGPMVL",
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});
