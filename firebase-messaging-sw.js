importScripts('https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.7.0/firebase-messaging.js');
const firebaseconfg = {
  apiKey: "AIzaSyDhZJ-6_gSC0rY0ldNQYbjzxPgwl3qeses",
    appId: "1:1051942780331:web:e871c416babdea5450a6ee",
    messagingSenderId: "1051942780331",
    projectId: "flutter-web-a1352",
    authDomain: "flutter-web-a1352.firebaseapp.com",
    storageBucket: "flutter-web-a1352.appspot.com",
    measurementId: "G-J1H4CGPMVL",
}
initializeApp(firebaseconfg)


const messaging = messaging();

// Optional:
onBackgroundMessage(function(payload){
console.log(payload)
});