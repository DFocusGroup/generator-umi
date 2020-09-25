/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "682a56478b63990be361f0a921a7cad0"
  },
  {
    "url": "assets/css/0.styles.ef68005a.css",
    "revision": "e3c5f76fdcb13423260054677775c50c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9a9819b3.js",
    "revision": "10ab9a08110acb0b45587ea00acc1972"
  },
  {
    "url": "assets/js/11.c168b15e.js",
    "revision": "aba4c510ae1050a4038bf6ba3c612bba"
  },
  {
    "url": "assets/js/12.898165eb.js",
    "revision": "3615a086d93d63dacf8a8e1f38c106ea"
  },
  {
    "url": "assets/js/13.c608ad7a.js",
    "revision": "b9de9f971cce15da12d9af73963f01df"
  },
  {
    "url": "assets/js/14.3d3e10a0.js",
    "revision": "02ab64efe6cc002e4de1dd1cc3cb9e68"
  },
  {
    "url": "assets/js/2.8ddb359b.js",
    "revision": "b739dae5fcb4e352e6caed18143f9d6a"
  },
  {
    "url": "assets/js/3.1467d082.js",
    "revision": "e0466bf7fe210e64de842aa235b41db2"
  },
  {
    "url": "assets/js/4.abd2da30.js",
    "revision": "214ef010190c5b84998f95f8243d33de"
  },
  {
    "url": "assets/js/5.1ed7b868.js",
    "revision": "b77fdd367d9248cd260e6c7a6e4ab6b3"
  },
  {
    "url": "assets/js/6.d2a947a6.js",
    "revision": "c67be59f70cc9d3f8d11e41ca96f58e8"
  },
  {
    "url": "assets/js/7.e1c0c56c.js",
    "revision": "030949d4b111a691eb70ff59d446cb55"
  },
  {
    "url": "assets/js/8.b265cf09.js",
    "revision": "a1f0591c7ffabbf32ff457ac870b7012"
  },
  {
    "url": "assets/js/9.26396aee.js",
    "revision": "7941c885eb04e7ad097d1539324af95b"
  },
  {
    "url": "assets/js/app.caba5947.js",
    "revision": "375edf72b4a5b6e4160f6b9256ac7b9f"
  },
  {
    "url": "blank_layout.png",
    "revision": "d9bf300b128f51ea23471aebf9c95f9c"
  },
  {
    "url": "data-flow.png",
    "revision": "410122a580d66f281321f91fa9a658a1"
  },
  {
    "url": "generator.gif",
    "revision": "28d2e2d323233a182336f33498a4e2a5"
  },
  {
    "url": "guide/data.html",
    "revision": "3f206755264c1541280e59dbf85545ed"
  },
  {
    "url": "guide/index.html",
    "revision": "e60b45c626908f0e7b7685603608d9bc"
  },
  {
    "url": "guide/layout.html",
    "revision": "4ee67a5dd75e78a05dae2d1626118e33"
  },
  {
    "url": "guide/locale.html",
    "revision": "f95c93c5e7303816b81a6aeb3a90ebc9"
  },
  {
    "url": "guide/packaging.html",
    "revision": "55ea0a344e9dae53fd1142284a720c8c"
  },
  {
    "url": "guide/route.html",
    "revision": "62491427d567fb22d61bcf19412a118c"
  },
  {
    "url": "guide/theme.html",
    "revision": "78a86afb728f52d1003e030ab188b610"
  },
  {
    "url": "index.html",
    "revision": "076be0ea0b1b59950cb8bad7f189fc2f"
  },
  {
    "url": "locale.gif",
    "revision": "deec66be83f7b76e8cd7ac5365c1cd2c"
  },
  {
    "url": "open_404.png",
    "revision": "ae9fe4328db77a2df6a978089f40e4b6"
  },
  {
    "url": "pro_403.png",
    "revision": "9375a277155908169dc534aca1e8c729"
  },
  {
    "url": "pro_404.png",
    "revision": "3ba336f5445b2eba19b177b37786c870"
  },
  {
    "url": "pro_layout.png",
    "revision": "4916b3597399c05e46ab560e4606c821"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
