importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/9.7.0/firebase-messaging.js"
);
firebase.initializeApp({
  'messagingSenderId': '1051942780331'
})


const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage(function(payload){
console.log(payload)
});