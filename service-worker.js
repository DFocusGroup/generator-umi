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
    "revision": "4dcb6e6de7ce09832c33a4c22596e39d"
  },
  {
    "url": "assets/css/0.styles.93ecdb6e.css",
    "revision": "c3ed54a4054c552c5e209eaabb5eeeaa"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c3893cd3.js",
    "revision": "2ac3f48bfecadcf9e7f78b42c61556f8"
  },
  {
    "url": "assets/js/11.7256fab9.js",
    "revision": "04831e9b862dfc6d19ee9e32633b09d7"
  },
  {
    "url": "assets/js/12.28a05d5c.js",
    "revision": "943b4b9a1a4bb591b91b67825012a930"
  },
  {
    "url": "assets/js/13.2e0f6968.js",
    "revision": "cfe4499a4eb6bffd729672bcdd8b8678"
  },
  {
    "url": "assets/js/2.2aba340b.js",
    "revision": "746fbc73a7aead1f549ffe2075b5d9e2"
  },
  {
    "url": "assets/js/3.ad9952fb.js",
    "revision": "b2eb7bc7323f0f1676755e6c61eb29e5"
  },
  {
    "url": "assets/js/4.22da9a16.js",
    "revision": "169f97bd5d8996a8e67218ce85812c71"
  },
  {
    "url": "assets/js/5.f8338ec5.js",
    "revision": "958109669c58bf5e4741baccdc5f1f52"
  },
  {
    "url": "assets/js/6.a73f2e9b.js",
    "revision": "8c4719a2d49a6a79b0429d7f3f8526d5"
  },
  {
    "url": "assets/js/7.6fd05b1a.js",
    "revision": "fc31ed8400c14b5f5c1367986448b771"
  },
  {
    "url": "assets/js/8.ef5340e2.js",
    "revision": "efb94224589aecc25ba89fa0d8d78624"
  },
  {
    "url": "assets/js/9.096d4ccd.js",
    "revision": "084635245ff744dc845fc5a2f3ecb09d"
  },
  {
    "url": "assets/js/app.59591600.js",
    "revision": "cc1c8a021603b0f726ec188271f1b2f5"
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
    "url": "demo.gif",
    "revision": "686d3ca01db9ebcf577950bb0cd9af6c"
  },
  {
    "url": "generator.gif",
    "revision": "28d2e2d323233a182336f33498a4e2a5"
  },
  {
    "url": "guide/data.html",
    "revision": "edbc77a30f2cd6214de2d959fb55a135"
  },
  {
    "url": "guide/index.html",
    "revision": "bb5435b5adeda10f02dd0711bb1aa1f0"
  },
  {
    "url": "guide/layout.html",
    "revision": "cefe9fc94e00625ef61fa8f61040c303"
  },
  {
    "url": "guide/locale.html",
    "revision": "dba07483e2514ad038a8e4f4111e38bd"
  },
  {
    "url": "guide/packaging.html",
    "revision": "5d265c8a533c5186a0e6d2b1f62eea28"
  },
  {
    "url": "guide/route.html",
    "revision": "e7919dfa54de7e99f5b6e70590b544e0"
  },
  {
    "url": "index.html",
    "revision": "a98396895a18b1f1e2c33db8631822f4"
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
    "revision": "e21c80c474e505478a9330b1765d3cb3"
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
