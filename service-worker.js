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
    "revision": "78488ae1a2264ba0b0364c1ead87f2a7"
  },
  {
    "url": "assets/css/0.styles.3d110f57.css",
    "revision": "c3ed54a4054c552c5e209eaabb5eeeaa"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.317c2774.js",
    "revision": "e0bac2b888db47728d77898789b560b7"
  },
  {
    "url": "assets/js/11.0431a162.js",
    "revision": "115e05f6a9a811352948effd428b3738"
  },
  {
    "url": "assets/js/12.b1ea91bd.js",
    "revision": "db5b6cae2873597fa2c7b3f1dd865110"
  },
  {
    "url": "assets/js/13.51ec35a5.js",
    "revision": "da1a518b53bb78b71c5f942d1997f4b4"
  },
  {
    "url": "assets/js/14.3d3e10a0.js",
    "revision": "02ab64efe6cc002e4de1dd1cc3cb9e68"
  },
  {
    "url": "assets/js/2.46bc2f49.js",
    "revision": "cc9df625fc9d113ad5883365ba05bd0b"
  },
  {
    "url": "assets/js/3.9e68df6a.js",
    "revision": "e0466bf7fe210e64de842aa235b41db2"
  },
  {
    "url": "assets/js/4.abd2da30.js",
    "revision": "214ef010190c5b84998f95f8243d33de"
  },
  {
    "url": "assets/js/5.83bc0aa3.js",
    "revision": "b77fdd367d9248cd260e6c7a6e4ab6b3"
  },
  {
    "url": "assets/js/6.f7f2307e.js",
    "revision": "c67be59f70cc9d3f8d11e41ca96f58e8"
  },
  {
    "url": "assets/js/7.51844f8f.js",
    "revision": "030949d4b111a691eb70ff59d446cb55"
  },
  {
    "url": "assets/js/8.4e044360.js",
    "revision": "d39938dedc41ee44dd9941e142d3c5fb"
  },
  {
    "url": "assets/js/9.68d123f4.js",
    "revision": "0b0336ba28bd682a80a2df65a2a732de"
  },
  {
    "url": "assets/js/app.c1f4adb9.js",
    "revision": "0314d5c17ad6df28c904d7a8a502cf89"
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
    "revision": "8c8f655eb05c8a548e7873d8ceec2cd2"
  },
  {
    "url": "guide/index.html",
    "revision": "6e48b5841e12599241f110ff5d842f1a"
  },
  {
    "url": "guide/layout.html",
    "revision": "0efd1d61cf34b9fc8d906c94317bcaab"
  },
  {
    "url": "guide/locale.html",
    "revision": "37966ef4099d0a68989b6e028172b688"
  },
  {
    "url": "guide/packaging.html",
    "revision": "6276dbab4565458e557435b0532ccad7"
  },
  {
    "url": "guide/route.html",
    "revision": "d37fc798348fc8d45868ca2a9b3f2f91"
  },
  {
    "url": "guide/theme.html",
    "revision": "5b906aed378cc5afe4bcca8d22f829dd"
  },
  {
    "url": "index.html",
    "revision": "3f6d6ca18e9afe113e9a22008433b395"
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
