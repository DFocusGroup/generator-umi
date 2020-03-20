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
    "url": "assets/css/0.styles.157a6c56.css",
    "revision": "8a7b8b56f1f07c1cfd1ae95aa422afe8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8ff55f75.js",
    "revision": "7bdba7d5e9300081c9649117ece0f736"
  },
  {
    "url": "assets/js/11.40eca7ad.js",
    "revision": "c3083924bb56942ee446647b919d0a06"
  },
  {
    "url": "assets/js/12.906c03c2.js",
    "revision": "7f5d4546125ff7a158b2885abe2ca1a7"
  },
  {
    "url": "assets/js/13.e9494879.js",
    "revision": "e5e0dd50b3629a436a2329732459e127"
  },
  {
    "url": "assets/js/2.9f0e2a58.js",
    "revision": "f7144e9ea5f44c8ef66e4c4e62d18ee5"
  },
  {
    "url": "assets/js/3.7141b59a.js",
    "revision": "b3d099b83b5ffde7729db463b97d8e83"
  },
  {
    "url": "assets/js/4.b33d6cb0.js",
    "revision": "f4633199dad22593deff2829b477472e"
  },
  {
    "url": "assets/js/5.fe4a2776.js",
    "revision": "e94a799955f15e829e2922b47ba5d69c"
  },
  {
    "url": "assets/js/6.bab75110.js",
    "revision": "4f8f92eb1c8cf8e704de3e4da9b5e5db"
  },
  {
    "url": "assets/js/7.8ff2cde7.js",
    "revision": "8cd30f3560f0a9a92cb5a0ba322a4cd4"
  },
  {
    "url": "assets/js/8.49251bd9.js",
    "revision": "f60d339eaf94aed00eb982d635f3459b"
  },
  {
    "url": "assets/js/9.25e5b0dc.js",
    "revision": "aedc02244a0ed8d832bb5649c257845d"
  },
  {
    "url": "assets/js/app.e9ed6883.js",
    "revision": "995d8c2ef99ebdda0109304aef3f14d3"
  },
  {
    "url": "demo.gif",
    "revision": "9cf6eb237b123868212041091f66209b"
  },
  {
    "url": "generator.gif",
    "revision": "28d2e2d323233a182336f33498a4e2a5"
  },
  {
    "url": "guide/data.html",
    "revision": "d2b356f08f4b7156ccc3d65bc4c308d8"
  },
  {
    "url": "guide/index.html",
    "revision": "dea6889f92c2d790ccf527df9beaa4f8"
  },
  {
    "url": "guide/layout.html",
    "revision": "94dcdec048e609b6e719d59f02fe43a5"
  },
  {
    "url": "guide/locale.html",
    "revision": "a28ae9c06ee466dabb40b4cf3fde75d3"
  },
  {
    "url": "guide/route.html",
    "revision": "a873482dd1e5063d394ca728921511c3"
  },
  {
    "url": "index.html",
    "revision": "ac9c8db0281b4ca2adf6d4d5ec6d9c98"
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
