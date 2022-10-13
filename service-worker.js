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
    "revision": "e784e70cda9960bd683e6427f737e1e1"
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
    "url": "assets/js/10.8d0e12cb.js",
    "revision": "f9fc625a04f065908cf5176b1864dbe3"
  },
  {
    "url": "assets/js/11.c4de6c6e.js",
    "revision": "c7e07cf299a04127eeb1b8bbb11a2b16"
  },
  {
    "url": "assets/js/12.d7a6f534.js",
    "revision": "7e56078c20896eaa05be8023ae9989d3"
  },
  {
    "url": "assets/js/13.1224e432.js",
    "revision": "920ae579b14168d703830add5f9fb42a"
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
    "url": "assets/js/8.4fc93a8e.js",
    "revision": "11db327d1e1a909aab9ee3d82685f3ed"
  },
  {
    "url": "assets/js/9.a836cb82.js",
    "revision": "f4e2a117b7b662f9f8ca9b971d7f3f2d"
  },
  {
    "url": "assets/js/app.a3c8e64d.js",
    "revision": "38f678270063f84ef9e494b23a1e86f2"
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
    "revision": "124e36609dc5f43db0386720e452cfdc"
  },
  {
    "url": "guide/index.html",
    "revision": "e07da6702eebc89ae70d3acb5501d6a1"
  },
  {
    "url": "guide/layout.html",
    "revision": "e6f70e8dc0be7bdbb2efc59f8b989ff0"
  },
  {
    "url": "guide/locale.html",
    "revision": "b17ff5ddb2e76bc38c78af51ef63ab48"
  },
  {
    "url": "guide/route.html",
    "revision": "2473155b1fc6706588ce479b1232815a"
  },
  {
    "url": "index.html",
    "revision": "aca13020fced600befc8d47fb337799b"
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
