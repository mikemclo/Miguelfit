const CACHE_NAME = 'fitness-app-v1';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.webmanifest',

  // Imágenes lunes
  './img/lunes/01-flexiones-inclinadas.jpg',
  './img/lunes/02-press-pectoral-isometrico.jpg',
  './img/lunes/03-flexiones-rodillas.jpg',
  './img/lunes/04-aperturas-suelo.jpg',
  './img/lunes/05-plancha.jpg',
  './img/lunes/06-dead-bug.jpg',
  './img/lunes/desayuno-avena-huevos-pan.jpg',
  './img/lunes/comida-pollo-arroz-verduras.jpg',
  './img/lunes/merienda-yogur-frutos.jpg',
  './img/lunes/cena-salmon-patata-verduras.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
