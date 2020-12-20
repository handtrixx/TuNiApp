self.addEventListener('install', async event => {
   console.log('install event')
 });
 
 self.addEventListener('fetch', async event => {
   console.log('fetch event')
 });

 const cacheName = 'pwa-conf-v1';
const staticAssets = [
  './',
  './black.png',
  './style.css',
  './functions.js',
  './bootstrap.bundle.min.js',
  './bootstrap.bundle.min.js.map',
  './bootstrap.min.css',
  './bootstrap.min.css.map',
  './icon_192.png',
  './icon.ico',
  './index.html',
  './masonry.pkgd.min.js',
  './OpenSans-Regular.woff',
  './OpenSans-Regular.woff2'
];

self.addEventListener('install', async event => {
   const cache = await caches.open(cacheName); 
   await cache.addAll(staticAssets); 
 });