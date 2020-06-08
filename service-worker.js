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
    "revision": "1be19bfdf59c106de824c0c25700b08b"
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
    "url": "assets/js/10.89bebf75.js",
    "revision": "e01f8ee675fba9d644a166825dd2203e"
  },
  {
    "url": "assets/js/11.7ded6320.js",
    "revision": "80fc21cccec519ad09d1f5fe515b7b70"
  },
  {
    "url": "assets/js/12.639e443c.js",
    "revision": "1fa3986b09aaa813229b2b62092be7cd"
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
    "url": "assets/js/7.72461f9b.js",
    "revision": "231cdd82d4e6a37a013cfec5204201a1"
  },
  {
    "url": "assets/js/8.9a1382fc.js",
    "revision": "54347fe079bc46c80852091276d04c65"
  },
  {
    "url": "assets/js/9.f225d498.js",
    "revision": "e3e1fed36e175110b5eaa731df21306f"
  },
  {
    "url": "assets/js/app.f65992f0.js",
    "revision": "764103b3772f8a9f11b730ed65775456"
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
    "revision": "90ba22f9aff721a3b6ff9bffeebc6929"
  },
  {
    "url": "guide/index.html",
    "revision": "ee29bac879cf0fc8e3276a8697761ecc"
  },
  {
    "url": "guide/layout.html",
    "revision": "5b1a71987898bdf2fe4466f8892fe5b2"
  },
  {
    "url": "guide/locale.html",
    "revision": "46ff96115cb0ca16467ff221fb47b9da"
  },
  {
    "url": "guide/packaging.html",
    "revision": "5f48cd908c14484c3b637f4d19cc8155"
  },
  {
    "url": "guide/route.html",
    "revision": "f933171a1bf1e44a2bdd55b9c9a16f3d"
  },
  {
    "url": "index.html",
    "revision": "49b33a56b91cf50b03b8efe0afe3f9fe"
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
