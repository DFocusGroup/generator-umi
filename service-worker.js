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
    "revision": "b97db1a9ce9a7605df30c7f044f8dd1e"
  },
  {
    "url": "assets/css/0.styles.2aa6a9a2.css",
    "revision": "805b0bba8bd3e2c4ae15bc76b3e5c050"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4f809b02.js",
    "revision": "8000747b25c1fa9d587258e00a29dc54"
  },
  {
    "url": "assets/js/11.fb6d48aa.js",
    "revision": "558d8a7def83d5e449f49121212111f3"
  },
  {
    "url": "assets/js/12.ca7ced3a.js",
    "revision": "8cad9ddc7e5fd6d40e5c15217608db4d"
  },
  {
    "url": "assets/js/13.537f1d7e.js",
    "revision": "e9791bbf453ce579dc33b038c8562ca0"
  },
  {
    "url": "assets/js/14.1d821e15.js",
    "revision": "b95ee814712e730972bba8e9560510f6"
  },
  {
    "url": "assets/js/15.ff48233b.js",
    "revision": "ab0fd01904ef5ae34d6e904ba3ad8f23"
  },
  {
    "url": "assets/js/16.f1690722.js",
    "revision": "29ecc654f231253f3a8383837f279f79"
  },
  {
    "url": "assets/js/2.17245b32.js",
    "revision": "e4160b62b9b1b80435df2fbd78a471bc"
  },
  {
    "url": "assets/js/3.84a7bcab.js",
    "revision": "b0e0df218c506e10e95d0fd184e49bc4"
  },
  {
    "url": "assets/js/4.ce5313b5.js",
    "revision": "e065c73e610882c749f22b01b5d3f8ec"
  },
  {
    "url": "assets/js/5.4d9c3a5d.js",
    "revision": "89185cf6dd09793a548c6d116cd7cf9c"
  },
  {
    "url": "assets/js/6.b31cd6d3.js",
    "revision": "8157f0949b4dfd401686b6fdbfcea806"
  },
  {
    "url": "assets/js/7.368e026b.js",
    "revision": "8de69ceaee076713e92cda60f501d261"
  },
  {
    "url": "assets/js/8.21fe10f6.js",
    "revision": "27b0507ca092de5dab7814cb2665a15a"
  },
  {
    "url": "assets/js/9.eeaa4a66.js",
    "revision": "ee4f993167fa41af50f34b78a3792009"
  },
  {
    "url": "assets/js/app.acf1eb54.js",
    "revision": "7663f99529e4d2025b9eb964eba93c90"
  },
  {
    "url": "blank_layout.png",
    "revision": "d9bf300b128f51ea23471aebf9c95f9c"
  },
  {
    "url": "callchain.png",
    "revision": "546fe5e0f7e5b1f1a5a3cc67f66a1e38"
  },
  {
    "url": "callchain.svg",
    "revision": "f3fe250e5d3e890593b24c2734b69fdd"
  },
  {
    "url": "generator.gif",
    "revision": "28d2e2d323233a182336f33498a4e2a5"
  },
  {
    "url": "guide/data.html",
    "revision": "e98278ac6c0628de6906dc5d006a27bc"
  },
  {
    "url": "guide/index.html",
    "revision": "2cae61e8287fb675610bef331b210dda"
  },
  {
    "url": "guide/layout.html",
    "revision": "bca7bcab47a6f4a25f303253e314e2fe"
  },
  {
    "url": "guide/locale.html",
    "revision": "476fafab2cd76911df900327a6a5310e"
  },
  {
    "url": "guide/packaging.html",
    "revision": "3e84ca0695ef8176b38cbf50fa23076d"
  },
  {
    "url": "guide/route.html",
    "revision": "260cd912e44d0552d868e601355408f4"
  },
  {
    "url": "guide/theme.html",
    "revision": "f975fbe96d1ab6e31a213f8052847eee"
  },
  {
    "url": "index.html",
    "revision": "9f0e53c6a2a49b2a3af8f46d5b9e1811"
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
