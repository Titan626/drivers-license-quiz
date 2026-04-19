// VIO Mock Quiz — Service Worker
// Strategy: precache app shell on install (cache-first for same-origin),
// network with cache fallback for the Inter font CDN.
// Bump CACHE_VERSION on every release to invalidate old caches.

const CACHE_VERSION = 'vio-quiz-v7';
const APP_SHELL = [
  './',
  './index.html',
  './questions.js',
  './manifest.json',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './signs/NG_road_sign_A04b.svg',
  './signs/NG_road_sign_A09.svg',
  './signs/NG_road_sign_A11.svg',
  './signs/NG_road_sign_A12.svg',
  './signs/NG_road_sign_A13a.svg',
  './signs/NG_road_sign_A16.svg',
  './signs/NG_road_sign_A18a.svg',
  './signs/NG_road_sign_A22.svg',
  './signs/NG_road_sign_A32.svg',
  './signs/NG_road_sign_B02a.svg',
  './signs/NG_road_sign_C02.svg',
  './signs/NG_road_sign_C12.svg',
  './signs/NG_road_sign_C19.svg',
  './signs/NG_road_sign_D01a.svg',
  './signs/NG_road_sign_D01c.svg',
  './signs/NG_road_sign_D02a.svg',
  './signs/NG_road_sign_D04.svg',
  './signs/NG_road_sign_F1a.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;

  if (sameOrigin) {
    // Cache-first for same-origin (app shell)
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req).then((res) => {
          // Cache successful basic responses
          if (res && res.status === 200 && res.type === 'basic') {
            const copy = res.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
          }
          return res;
        }).catch(() => caches.match('./index.html'));
      })
    );
    return;
  }

  // Cross-origin (e.g., rsms.me Inter font): network first, fall back to cache
  event.respondWith(
    fetch(req).then((res) => {
      if (res && res.status === 200) {
        const copy = res.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
      }
      return res;
    }).catch(() => caches.match(req))
  );
});
