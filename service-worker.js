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
    "revision": "175234f5f1341550b6bcd41e62bc7cf6"
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
    "url": "assets/js/10.d586e96e.js",
    "revision": "f933948853fe2ca2ae8aae97a09be676"
  },
  {
    "url": "assets/js/11.54c6fadb.js",
    "revision": "7fc0b4a788f92e07a72542046976f690"
  },
  {
    "url": "assets/js/12.e8e560dc.js",
    "revision": "39c03a81c36e1a07672868ffb5fa82f0"
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
    "url": "assets/js/6.a58bb5ea.js",
    "revision": "4dafea89cb708f7bf227580103c6a36f"
  },
  {
    "url": "assets/js/7.3f66b0a7.js",
    "revision": "652789718c686098123ac3d4d375c0b9"
  },
  {
    "url": "assets/js/8.b4b6386c.js",
    "revision": "e3868f3ab0cddffa715d9fffbb6fcce2"
  },
  {
    "url": "assets/js/9.8aa4b6cc.js",
    "revision": "c09d5cb545ac2b1b77a8c59b2049b88f"
  },
  {
    "url": "assets/js/app.0d46703b.js",
    "revision": "e058c960662d7004908f48cfd9548011"
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
    "revision": "360c0cff5abee7039bea5b6d1cf04931"
  },
  {
    "url": "guide/index.html",
    "revision": "072d98981e5ce5b2e28db807afcafbde"
  },
  {
    "url": "guide/layout.html",
    "revision": "eb29db778f84e54357c4b86376b7052e"
  },
  {
    "url": "guide/locale.html",
    "revision": "6dd4c533efb457342ff0385ebb1e169e"
  },
  {
    "url": "guide/packaging.html",
    "revision": "06e056fcf4d2f93745ac87f59aa44a3f"
  },
  {
    "url": "guide/route.html",
    "revision": "dc6751c3969ac9939576a6e052a27ef2"
  },
  {
    "url": "guide/theme.html",
    "revision": "81db33c5ed573ef6371dd20d16506b6a"
  },
  {
    "url": "index.html",
    "revision": "dd5d473e72f99cfa9203989396b3564b"
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
