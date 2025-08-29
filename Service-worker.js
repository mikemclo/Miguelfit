const CACHE_NAME = 'fitness-app-v1';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.webmanifest',

  // Lunes
  './img/lunes/01-flexiones-inclinadas.jpg',
  './img/lunes/02-press-pectoral-isometrico.jpg',
  './img/lunes/03-flexiones-rodillas.jpg',
  './img/lunes/04-aperturas-suelo.jpg',
  './img/lunes/05-plancha.jpg',
  './img/lunes/06-dead-bug.jpg',
  './img/lunes/desayuno-avena-huevos-pan.jpg',
  './img/lunes/comida-pollo-arroz-verduras.jpg',
  './img/lunes/merienda-yogur-frutos.jpg',
  './img/lunes/cena-salmon-patata-verduras.jpg',

  // Martes
  './img/martes/01-sentadillas.jpg',
  './img/martes/02-zancadas.jpg',
  './img/martes/03-puente-gluteos.jpg',
  './img/martes/04-gemelos.jpg',
  './img/martes/05-plancha-lateral.jpg',
  './img/martes/06-bird-dog.jpg',
  './img/martes/desayuno.jpg',
  './img/martes/comida.jpg',
  './img/martes/merienda.jpg',
  './img/martes/cena.jpg',

  // Miércoles
  './img/miercoles/01-dominadas.jpg',
  './img/miercoles/02-remolaco.jpg',
  './img/miercoles/03-curl-biceps.jpg',
  './img/miercoles/04-face-pull.jpg',
  './img/miercoles/05-plancha.jpg',
  './img/miercoles/06-dead-bug.jpg',
  './img/miercoles/desayuno.jpg',
  './img/miercoles/comida.jpg',
  './img/miercoles/merienda.jpg',
  './img/miercoles/cena.jpg',

  // Jueves
  './img/jueves/01-sentadilla-isometrica.jpg',
  './img/jueves/02-abduccion-cadera.jpg',
  './img/jueves/03-femoral.jpg',
  './img/jueves/04-estocadas.jpg',
  './img/jueves/05-plancha.jpg',
  './img/jueves/06-bird-dog.jpg',
  './img/jueves/desayuno.jpg',
  './img/jueves/comida.jpg',
  './img/jueves/merienda.jpg',
  './img/jueves/cena.jpg',

  // Viernes
  './img/viernes/01-flexiones.jpg',
  './img/viernes/02-press.jpg',
  './img/viernes/03-aperturas.jpg',
  './img/viernes/04-triceps.jpg',
  './img/viernes/05-plancha.jpg',
  './img/viernes/06-dead-bug.jpg',
  './img/viernes/desayuno.jpg',
  './img/viernes/comida.jpg',
  './img/viernes/merienda.jpg',
  './img/viernes/cena.jpg',

  // Sábado
  './img/sabado/01-sentadilla.jpg',
  './img/sabado/02-zancadas.jpg',
  './img/sabado/03-gemelos.jpg',
  './img/sabado/04-puente-gluteos.jpg',
  './img/sabado/05-plancha-lateral.jpg',
  './img/sabado/06-bird-dog.jpg',
  './img/sabado/desayuno.jpg',
  './img/sabado/comida.jpg',
  './img/sabado/merienda.jpg',
  './img/sabado/cena.jpg',

  // Domingo
  './img/domingo/01-cardio.jpg',
  './img/domingo/02-abdominales.jpg',
  './img/domingo/03-sentadilla.jpg',
  './img/domingo/04-flexiones.jpg',
  './img/domingo/05-plancha.jpg',
  './img/domingo/06-bird-dog.jpg',
  './img/domingo/desayuno.jpg',
  './img/domingo/comida.jpg',
  './img/domingo/merienda.jpg',
  './img/domingo/cena.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
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
