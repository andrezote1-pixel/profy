importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
firebase.initializeApp({apiKey:'AIzaSyBZSt0mqCnS0sbAu_xmASeieIZH1MvTejE',authDomain:'profy-515414.firebaseapp.com',projectId:'profy-515414',messagingSenderId:'936559144488',appId:'1:936559144488:web:37fad39320c2d3ea4d0f1d'});
firebase.messaging();
self.addEventListener('notificationclick',function(e){
  e.notification.close();
  e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(function(l){
    for(var i=0;i<l.length;i++){if('focus' in l[i])return l[i].focus()}
    return clients.openWindow('/profy/');
  }));
});
