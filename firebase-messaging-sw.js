importScripts('https://www.gstatic.com/firebasejs/12.5.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.5.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAgSfZgX13q4tK92T5_6hDR5pNKkhw8YeI",
  authDomain: "za122-789c0.firebaseapp.com",
  projectId: "za122-789c0",
  storageBucket: "za122-789c0.firebasestorage.app",
  messagingSenderId: "139885324329",
  appId: "1:139885324329:web:2b8128ba318ef4da93d438"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('📩 إشعار بالخلفية:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
