importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebase/8.10.1/firebase-messaging.js");

const app  = firebase.initializeApp({
    apiKey: 'AIzaSyDhZJ-6_gSC0rY0ldNQYbjzxPgwl3qeses',
    appId: '1:1051942780331:web:e871c416babdea5450a6ee',
    messagingSenderId: '1051942780331',
    projectId: 'flutter-web-a1352',
    authDomain: 'flutter-web-a1352.firebaseapp.com',
    storageBucket: 'flutter-web-a1352.appspot.com',
    measurementId: 'G-J1H4CGPMVL',
});

const messaging = firebase.messaging(app);
// messaging
//    .requestPermission()
//    .then(function () {
     
//      console.log("Notification permission granted.");

//      // get the token in the form of promiser
//      return messaging.getToken()
//    })
//    .then(function(token) {
//      // print the token on the HTML page
//      console.log(token)
//    })
//    .catch(function (err) {
   
//    console.log("Unable to get permission to notify.", err);
//  });

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});