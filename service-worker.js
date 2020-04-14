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
    "url": "assets/js/10.f5b7b91b.js",
    "revision": "948f9c1538043e51dc17960ea8ef8ffd"
  },
  {
    "url": "assets/js/11.d59f24b3.js",
    "revision": "639358eb678380269cb3ff10227913cb"
  },
  {
    "url": "assets/js/12.f512f4fd.js",
    "revision": "e24682e76c2dbdf36293574c143c56f4"
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
    "url": "assets/js/7.1dac7cce.js",
    "revision": "e17b3319b8ec92b75f0b2edc881139f5"
  },
  {
    "url": "assets/js/8.4392ab95.js",
    "revision": "354fe39db07fdedbfc6cf701781440a8"
  },
  {
    "url": "assets/js/9.660831bc.js",
    "revision": "0f61a447e3424e59ccfb4efd2937970d"
  },
  {
    "url": "assets/js/app.322e4f07.js",
    "revision": "382a87fecac8255d76fc9ff629d44762"
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
    "revision": "cbeb25364ff4d6bd733487a141788026"
  },
  {
    "url": "guide/index.html",
    "revision": "c166d5e3db32ae76cfcd525472427a8e"
  },
  {
    "url": "guide/layout.html",
    "revision": "32850c50747aa3b1cc4dd61a9fa050fe"
  },
  {
    "url": "guide/locale.html",
    "revision": "1fbf15428e0767f2e91001b615bab900"
  },
  {
    "url": "guide/packaging.html",
    "revision": "c3940e540e939b886c3cf6ffeea366c7"
  },
  {
    "url": "guide/route.html",
    "revision": "19e84dad912ff61a4863e098d7d12501"
  },
  {
    "url": "index.html",
    "revision": "5ce37b57ae341d3ab13780f5c79468dd"
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
