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
    "url": "403.png",
    "revision": "fcb332534eda844bf32258cd052a994c"
  },
  {
    "url": "assets/css/0.styles.157a6c56.css",
    "revision": "8a7b8b56f1f07c1cfd1ae95aa422afe8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.af3dbc96.js",
    "revision": "feea6e7689f7bc4dfa8bfc530e7833c6"
  },
  {
    "url": "assets/js/11.3f553245.js",
    "revision": "c6a9c682d58f744d92ae80c1a3cec356"
  },
  {
    "url": "assets/js/12.7ddc6c21.js",
    "revision": "8ba4627c9e9787f81826bd629c34fd29"
  },
  {
    "url": "assets/js/13.525189da.js",
    "revision": "712af9e57f1926b31c3a04e906506a7a"
  },
  {
    "url": "assets/js/14.57159853.js",
    "revision": "7fc6a997646b33ae465b0c2bd25c116e"
  },
  {
    "url": "assets/js/2.b3e0ca11.js",
    "revision": "de385cf583a441c19e679250999077bb"
  },
  {
    "url": "assets/js/3.e34fe760.js",
    "revision": "8df6c32d277cff3ec05895c0d4fcbb88"
  },
  {
    "url": "assets/js/4.46b2373c.js",
    "revision": "99e1c7558d5e4fd77307a5f959767659"
  },
  {
    "url": "assets/js/5.fe4a2776.js",
    "revision": "e94a799955f15e829e2922b47ba5d69c"
  },
  {
    "url": "assets/js/6.4df05946.js",
    "revision": "ee47aa6db9906ce471b73d4907a1a3b3"
  },
  {
    "url": "assets/js/7.e33501c8.js",
    "revision": "4eb792e54ebb72385241cb930ff19920"
  },
  {
    "url": "assets/js/8.44637656.js",
    "revision": "3c37dd3bff9a8642808a83c4e26043da"
  },
  {
    "url": "assets/js/9.577b9a61.js",
    "revision": "a530a0d76509b12fffcadb3ad8f6a19f"
  },
  {
    "url": "assets/js/app.b0495e08.js",
    "revision": "3f176bf0b68eec54a3e1d8cf18c156e6"
  },
  {
    "url": "data-flow.png",
    "revision": "895f91dd8ac5677b91f77f8b011e1598"
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
    "revision": "fdc2eac265189707c883107ef75658e1"
  },
  {
    "url": "guide/index.html",
    "revision": "2f824f52a903277b571d7176a7f6593c"
  },
  {
    "url": "guide/layout.html",
    "revision": "2411af8ec3de82acee6d85eaeb7315dd"
  },
  {
    "url": "guide/locale.html",
    "revision": "2872162f097185328df36488a4265048"
  },
  {
    "url": "guide/packaging.html",
    "revision": "2175fa282c33c9d748f68e41b57307aa"
  },
  {
    "url": "guide/route.html",
    "revision": "64f880a9ad3a173e61920e45f3acebc4"
  },
  {
    "url": "index.html",
    "revision": "8195e3a81854f166b33d926f0b039ae8"
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
    "url": "p1_ pikachu.jpeg",
    "revision": "c21533be4ee1be655aef465c3351fbbe"
  },
  {
    "url": "p1.jpg",
    "revision": "4e36bb09899013c98a0e0e220f84d45b"
  },
  {
    "url": "pro_404.png",
    "revision": "3ba336f5445b2eba19b177b37786c870"
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
