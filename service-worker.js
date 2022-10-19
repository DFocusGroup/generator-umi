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
    "revision": "14a72fdf1f1be948fa0ad379f233d510"
  },
  {
    "url": "assets/css/0.styles.e9ba2c5f.css",
    "revision": "19cf72341cc33fe62c1bb055922c198b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.dbb5cca9.js",
    "revision": "4b05eaab7e18244efddde74915dade33"
  },
  {
    "url": "assets/js/11.993ea155.js",
    "revision": "9ce5455954c9b66bf0eb0125733dd7d8"
  },
  {
    "url": "assets/js/12.841adc70.js",
    "revision": "45801cb390e53558c98e4215b18ad801"
  },
  {
    "url": "assets/js/13.94c977f4.js",
    "revision": "99aa1bfa0d16839ab242ee6e5072210c"
  },
  {
    "url": "assets/js/14.0c67f1a3.js",
    "revision": "0ea4cde4b7810e9c1aa90d0f84a8dc5e"
  },
  {
    "url": "assets/js/2.aea9175b.js",
    "revision": "d8315cdfba9987e9fcc931e82ed42229"
  },
  {
    "url": "assets/js/3.139183f1.js",
    "revision": "bd095e6b2d2cb2dd8e2361473827ace3"
  },
  {
    "url": "assets/js/4.5515ca2a.js",
    "revision": "02c9768b04aa0d1dfaea9ed47d353390"
  },
  {
    "url": "assets/js/5.c16d4f62.js",
    "revision": "4dd3742838b4c6c7dab7c88ba36a30e2"
  },
  {
    "url": "assets/js/6.281bc310.js",
    "revision": "2c63f68ce9ed0041b0a3c948f8825619"
  },
  {
    "url": "assets/js/7.9a397e2c.js",
    "revision": "d0d27cdfd0bc7621017f42f8d0274f19"
  },
  {
    "url": "assets/js/8.823e7c5d.js",
    "revision": "b49f0fd5bc5bfe850bbb2fc6d00905c4"
  },
  {
    "url": "assets/js/9.bd501ca0.js",
    "revision": "2866c1e4eedb4868f37f302dfdaab282"
  },
  {
    "url": "assets/js/app.b1bd9279.js",
    "revision": "2067ede6da39745dacfd26c2526b1500"
  },
  {
    "url": "blank_layout.png",
    "revision": "d9bf300b128f51ea23471aebf9c95f9c"
  },
  {
    "url": "callchain.png",
    "revision": "df2518bbf7e36de2de1217b2a67222c6"
  },
  {
    "url": "generator.gif",
    "revision": "28d2e2d323233a182336f33498a4e2a5"
  },
  {
    "url": "guide/data.html",
    "revision": "a49a4215560cb275d22cb52694d606c8"
  },
  {
    "url": "guide/index.html",
    "revision": "5b9280f180738a331a5e544a55c063d8"
  },
  {
    "url": "guide/layout.html",
    "revision": "03fe4fdb0a90e180fa6299039ee8c2f7"
  },
  {
    "url": "guide/locale.html",
    "revision": "d077210f5e06402375d1b38516f6ce09"
  },
  {
    "url": "guide/route.html",
    "revision": "aefc47d9b680d4b46302421b0d47a45f"
  },
  {
    "url": "index.html",
    "revision": "3336a25f2fb42a323ce947ae467f426c"
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
