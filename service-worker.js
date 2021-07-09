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
    "revision": "420344d357ecc8100f3dc309100f6b62"
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
    "url": "assets/js/10.370209c5.js",
    "revision": "4f4645a3f85df56c9471d23c759f3ab3"
  },
  {
    "url": "assets/js/11.1d718c39.js",
    "revision": "54e9143643c5aed7177c06e11d2f5ea6"
  },
  {
    "url": "assets/js/12.a1dc0c32.js",
    "revision": "807d1ba55b485eb9a98efe6874e447cc"
  },
  {
    "url": "assets/js/13.d314e110.js",
    "revision": "52080a4ed69f397d62774963ca343631"
  },
  {
    "url": "assets/js/14.34bab4e9.js",
    "revision": "f05a009aa9a6920feea9e46df6642390"
  },
  {
    "url": "assets/js/15.12f189fe.js",
    "revision": "228d711c870a03691bdcd33e9ece60aa"
  },
  {
    "url": "assets/js/16.9d93af9f.js",
    "revision": "e57db0f1ff32b850ae97d14295a59b82"
  },
  {
    "url": "assets/js/2.cafc3556.js",
    "revision": "0b171ff29f767abc8d1403c37bdd603c"
  },
  {
    "url": "assets/js/3.787a86e4.js",
    "revision": "1e87709f672089d5f4b91065dedeef7e"
  },
  {
    "url": "assets/js/4.26886a36.js",
    "revision": "569035921165b3033761797c55da9466"
  },
  {
    "url": "assets/js/5.4dd01d75.js",
    "revision": "159d77c74ddd42e646b819536caedc68"
  },
  {
    "url": "assets/js/6.de7cf039.js",
    "revision": "d7fbe19717dcb464c910fb7c058b2cf8"
  },
  {
    "url": "assets/js/7.ca6791d1.js",
    "revision": "b26b2ea305792a76376ca508f2a6ace4"
  },
  {
    "url": "assets/js/8.b83e2666.js",
    "revision": "65aa8f4134a74cbd951e99675e9a95ed"
  },
  {
    "url": "assets/js/9.b09fb085.js",
    "revision": "394eeda92b6b703c17e2c68ef14820fb"
  },
  {
    "url": "assets/js/app.04fa939b.js",
    "revision": "04b18838270c1d5feecd23ca511e6d4c"
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
    "revision": "95ddd6cf5e1e2c388d23d4a6717f5a26"
  },
  {
    "url": "guide/index.html",
    "revision": "a1c15a675d38bb72c0b9c1a732aef80d"
  },
  {
    "url": "guide/layout.html",
    "revision": "e0ae78ffd8c11b75c8f746fccb457ee3"
  },
  {
    "url": "guide/locale.html",
    "revision": "07e160fa99db1c600f285b5ad9d17c14"
  },
  {
    "url": "guide/packaging.html",
    "revision": "e5845a958d6edb3b96302396bdbdd29a"
  },
  {
    "url": "guide/route.html",
    "revision": "6b43ec2f208fa4bd1cbbf5acbc1f086e"
  },
  {
    "url": "guide/theme.html",
    "revision": "6658fd296b906edf4c0d303410392341"
  },
  {
    "url": "index.html",
    "revision": "f1d6d7b24297a087b63e78b8bacfad9e"
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
