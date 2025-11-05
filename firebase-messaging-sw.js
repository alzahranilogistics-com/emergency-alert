importScripts("https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/12.5.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyAgSfZgX13q4tK92T5_6hDR5pNKkhw8YeI",
  authDomain: "za122-789c0.firebaseapp.com",
  projectId: "za122-789c0",
  messagingSenderId: "139885324329",
  appId: "1:139885324329:web:2b8128ba318ef4da93d438"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("📢 [Service Worker] رسالة بالخلفية:", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: payload.notification.icon
  });
});
