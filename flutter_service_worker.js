'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "bda34be03b9b5cd77e53e43c655ff002",
"assets/assets/images/account_active_icon.svg": "02270f361065cf1f8012e12adab53f11",
"assets/assets/images/account_icon.svg": "07aefae7b5105fb61c3d1b10a74af448",
"assets/assets/images/chat_active_icon.svg": "2725d693ce08cf2811da035bacd97b2f",
"assets/assets/images/chat_icon.svg": "76a0c67812f03bd394dd132ff341d34b",
"assets/assets/images/close_icon.svg": "25b9b2bd8692d9c5ea9dd9b7074d5e8f",
"assets/assets/images/explore_active_icon.svg": "288c3cf307b01308b5a707ee83b3b7f9",
"assets/assets/images/explore_icon.svg": "63f1aaa66a4c2a4a60008898aff2b77b",
"assets/assets/images/girls/img_1.jpeg": "49a190e1e4d8fd64be256665ab54ec0d",
"assets/assets/images/girls/img_10.jpeg": "dde052fc473e8b391478bdeced7e85ae",
"assets/assets/images/girls/img_11.jpeg": "dc4f9f46203fb94f47e252c58cc9d128",
"assets/assets/images/girls/img_12.jpeg": "ccfe7a102071563f29de74aab8faaaab",
"assets/assets/images/girls/img_13.jpeg": "0d8e987c12846891f63d3ad4f0ec5c5a",
"assets/assets/images/girls/img_14.jpeg": "c3b7e079682e61bad8e7283c06cbd8e9",
"assets/assets/images/girls/img_15.jpeg": "115d77e49d87687f53424f545acd81b1",
"assets/assets/images/girls/img_16.jpeg": "75c6792de990285b7ed6fc797cf878d6",
"assets/assets/images/girls/img_2.jpeg": "13d97838b698e22ca65be4e1677213f5",
"assets/assets/images/girls/img_3.jpeg": "12087d8853685738bfd2e240b37f599f",
"assets/assets/images/girls/img_4.jpeg": "6de7835167838e83fd640e110093b9a7",
"assets/assets/images/girls/img_5.jpeg": "08d02014093ea66820b0eac5e6513f8e",
"assets/assets/images/girls/img_6.jpeg": "6a7e70d2837ec3e7892865b725a97f17",
"assets/assets/images/girls/img_7.jpeg": "21a44bece9588dd1079ffadc63332282",
"assets/assets/images/girls/img_8.jpeg": "b0aefe301fa8d31fe3256c6ff2406cee",
"assets/assets/images/girls/img_9.jpeg": "f32a47cd55b59252a452ee1baf76252b",
"assets/assets/images/likes_active_icon.svg": "74a0467060fc8c70036673a1d3e215b7",
"assets/assets/images/likes_icon.svg": "7a20afce62844312fd8b645f143b42fe",
"assets/assets/images/like_icon.svg": "86b5c40dfa0c00f92607af46cfb868ab",
"assets/assets/images/profile.png": "0789b3c3d071b819dc9aedb6c5a351dd",
"assets/assets/images/refresh_icon.svg": "eeaa93fea05dcc5ad7bd42b39581833c",
"assets/assets/images/star_icon.svg": "0219c6dc9d7cdb895d899d102126aa62",
"assets/assets/images/thunder_icon.svg": "13e862b87ffa144e84bf73298460b888",
"assets/FontManifest.json": "62520cfe7eed27ef39e363312d9a430a",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "7eded4cced56f8f02fecef3a531abfef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_tindercard/assets/welcome0.png": "97e534de38f2045e9f22ea0c707a2c96",
"assets/packages/flutter_tindercard/assets/welcome1.png": "0e88dad1f73f380fddd50c74a42ae6e8",
"assets/packages/flutter_tindercard/assets/welcome2.png": "b8a1d4b4e68e4413c7d791d742bb97c2",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "8d0d74fa070d25f1d57e29df18800b8a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c967227bbbfa1eae877f1d9b6939605e",
"/": "c967227bbbfa1eae877f1d9b6939605e",
"main.dart.js": "c969dfa6b8dbf57fa4752469d97048a1",
"manifest.json": "f0ed0e502254fb92951c2248a473426f",
"version.json": "bfbd17afe282d88fd2a1bf20b3222282"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "./",
"./main.dart.js",
"./index.html",
"./assets/NOTICES",
"./assets/AssetManifest.json",
"./assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
