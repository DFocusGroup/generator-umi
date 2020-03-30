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
    "url": "assets/js/10.214ff52c.js",
    "revision": "2fdbd918f9ed67f642268107ad898daf"
  },
  {
    "url": "assets/js/11.d59f24b3.js",
    "revision": "639358eb678380269cb3ff10227913cb"
  },
  {
    "url": "assets/js/12.d21599db.js",
    "revision": "817dc23d1ab4e957e0f05a78b6462680"
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
    "url": "assets/js/7.e8e7cbf2.js",
    "revision": "35362231bc8042ef4ae844c548b9d2d3"
  },
  {
    "url": "assets/js/8.434d3117.js",
    "revision": "f0d5d963ff32985e74498646cfda06bf"
  },
  {
    "url": "assets/js/9.1f54ea42.js",
    "revision": "bb4f4617efab701c744aa3ac373e6c06"
  },
  {
    "url": "assets/js/app.755f4b2b.js",
    "revision": "a71020a44795c8a55f6925b21db11452"
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
    "revision": "3e22e40a5ffff14302660fe3106f27b4"
  },
  {
    "url": "guide/index.html",
    "revision": "1a40813589d5f03de3b4283a911a8f52"
  },
  {
    "url": "guide/layout.html",
    "revision": "e3c872cf3c3cd76a0941b489e93c6ef4"
  },
  {
    "url": "guide/locale.html",
    "revision": "51993e269ee9b9b22bb3659b5e2fbb30"
  },
  {
    "url": "guide/packaging.html",
    "revision": "539aadf5242bc781f549041acc92bc25"
  },
  {
    "url": "guide/route.html",
    "revision": "886383227a7edaa97589c40609a50886"
  },
  {
    "url": "index.html",
    "revision": "9325f60206eaee55319b724f6cca37fe"
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
