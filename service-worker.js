self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('app-cache').then(cache => {
        return cache.addAll([
            '/',
            '/index.html',
            '/page1.html',
            '/quiz.html',
            '/assets/css/global.css',
            '/assets/css/home.css',
            '/assets/css/page1.css',
            '/assets/css/quiz.css',
            '/futura.ttf',
            '/swiss.ttf',
            '/trebuc.ttf',
            '/futura.woff',
            '/swiss.woff',
            '/trebuc.woff',
            '/assets/js/quiz.js',
            '/assets/js/modal.js',
            '/assets/img/home_photo.png',
            '/assets/img/q2.png',
            '/assets/img/q3.png',
            '/assets/img/4.png',
            '/assets/img/5.png',
            '/assets/img/6.jpg',
            '/assets/img/7.jpg',
            '/assets/img/8.png',
            '/assets/img/9.png',
            '/assets/img/10.jpg',
            '/assets/img/11.jpg',
            '/assets/img/12.1.png',
            '/assets/img/13.jpg',
            '/assets/img/14.jpg',
            '/assets/img/15.png',
            '/assets/img/correct.png',
            '/assets/img/wrong.png',
            '/assets/img/logo_facom.svg',
            '/assets/img/logo-ufms.svg',
            '/assets/img/apple-icon-180.png',
            '/assets/img/museu_icon-192.png',
            '/assets/img/museu_icon-512.png',
            '/assets/img/Logo-museu.png',
            '/assets/sounds/correct.mp3',
            '/assets/sounds/wrong.wav',
            '/manifest.json'
        ]).catch(error => {
            console.error('Falha ao adicionar arquivos ao cache:', error);
        });
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
