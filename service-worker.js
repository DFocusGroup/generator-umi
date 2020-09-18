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
    "revision": "dc21ef9576ec2a1093394230ee18f608"
  },
  {
    "url": "assets/css/0.styles.952b84a7.css",
    "revision": "e3c5f76fdcb13423260054677775c50c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.666d0345.js",
    "revision": "603b1aa8ce709ac5c7989c87805c4361"
  },
  {
    "url": "assets/js/11.4d0eddbe.js",
    "revision": "b456913e5ab73b026b93a84da1583346"
  },
  {
    "url": "assets/js/12.ad2d4b14.js",
    "revision": "46c2c3bdb7da6d3623404398276d594d"
  },
  {
    "url": "assets/js/13.ad6599e0.js",
    "revision": "6bc91e6d343623635ed7c970c81ac795"
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
    "url": "assets/js/4.10eb1e39.js",
    "revision": "525b507cba5e8e93a4245521583bb8e5"
  },
  {
    "url": "assets/js/5.1ed7b868.js",
    "revision": "b77fdd367d9248cd260e6c7a6e4ab6b3"
  },
  {
    "url": "assets/js/6.31c47903.js",
    "revision": "ee1d3e0adb5473811c2bea84463daf6c"
  },
  {
    "url": "assets/js/7.c5f6610e.js",
    "revision": "afa8355aee34379547a4afd5a6372143"
  },
  {
    "url": "assets/js/8.b4b6386c.js",
    "revision": "e3868f3ab0cddffa715d9fffbb6fcce2"
  },
  {
    "url": "assets/js/9.4153c022.js",
    "revision": "a55f27652eff60c709dfc97c59a01baf"
  },
  {
    "url": "assets/js/app.4fcc90df.js",
    "revision": "68a0529fe1c25cc4c330cb229a2c3cde"
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
    "revision": "ea3e4c6730aee2b49e9ecd9f43517420"
  },
  {
    "url": "guide/index.html",
    "revision": "a44e3db26c1181686d5395be563211b5"
  },
  {
    "url": "guide/layout.html",
    "revision": "5808397003c1844aed3bd1d531e8bba6"
  },
  {
    "url": "guide/locale.html",
    "revision": "90c48a81b6e6ff858c6a04bf1a2fdadd"
  },
  {
    "url": "guide/packaging.html",
    "revision": "d22a3ce7b3c9ea7b3efae74e7c27efc0"
  },
  {
    "url": "guide/route.html",
    "revision": "0f99a6eed839a36a81ffb522dcde59fe"
  },
  {
    "url": "guide/theme.html",
    "revision": "8c8d5b1b110325cd078bf5e532eced35"
  },
  {
    "url": "index.html",
    "revision": "f09e39eed6cf478fbe91cc27807b0b60"
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
