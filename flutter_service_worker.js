'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "9d6c02ee3d10a1e08e061db22a1a9c80",
"assets/FontManifest.json": "0621fb7723859a382fc19210904f6578",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/images/ali.jpg": "793dafeb38b13afef30cc6d48251b1d7",
"assets/images/alistudios.png": "139cc09a91ada3af37146cb6ac764629",
"assets/images/fb.png": "e0b9de1d0f0b8be9c643eccde72dd0c6",
"assets/images/git.png": "1873d04ef913dd3a8269dcef5af09916",
"assets/images/instagram.png": "f360a807d2faa92dff14f8b58ef32964",
"assets/images/linkdin.png": "1f913fa8308525ab1e49d9c92eeede0b",
"assets/images/muet.png": "6e2a5e286c8b32c9748d8ba84cd2ea2d",
"assets/LICENSE": "581dfce8c53fe99bd4a81e01767e8793",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "6a2ddad1092a0a1c326b6d0e738e682b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/icon.png": "139cc09a91ada3af37146cb6ac764629",
"index.html": "3ed605c2713fd8ace39ec3e1e1ee1cff",
"/": "3ed605c2713fd8ace39ec3e1e1ee1cff",
"main.dart.js": "5e06f042a1b6d961f73955ee68535326",
"manifest.json": "e38aa9a535a30e76c9c26c5d2a23ffb2"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
