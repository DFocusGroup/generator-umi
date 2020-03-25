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
    "url": "assets/js/11.d59f24b3.js",
    "revision": "639358eb678380269cb3ff10227913cb"
  },
  {
    "url": "assets/js/12.c1ea6da0.js",
    "revision": "284aff02bd28056981361c332fa4b11c"
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
    "url": "assets/js/2.7d6d3224.js",
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
    "url": "assets/js/6.8ef59005.js",
    "revision": "580f86a67199df651ec81541cd1d6587"
  },
  {
    "url": "assets/js/7.b1d09541.js",
    "revision": "802c828dd2b12e79bfe2dd63788627a5"
  },
  {
    "url": "assets/js/8.c4889fed.js",
    "revision": "793ca84477b981594a9bebcfe9c1cf06"
  },
  {
    "url": "assets/js/9.1cb80570.js",
    "revision": "a99121ce606e67938002010e3c4d8304"
  },
  {
    "url": "assets/js/app.e0e185c0.js",
    "revision": "125bf52df5c3a2811bf66239a8b1c506"
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
    "revision": "aae41d0b6569be020de592756c28efef"
  },
  {
    "url": "guide/index.html",
    "revision": "ab075a2ce2f57c853233a3058fd0aef4"
  },
  {
    "url": "guide/layout.html",
    "revision": "fc54d08b5d7a40c83ad494657d126c55"
  },
  {
    "url": "guide/locale.html",
    "revision": "10665fde0c2fdb8c17fa811c7638d784"
  },
  {
    "url": "guide/packaging.html",
    "revision": "765871da9313d94a004799473aca764c"
  },
  {
    "url": "guide/route.html",
    "revision": "5c8581936e0c2c99f8aaf3393125c01e"
  },
  {
    "url": "index.html",
    "revision": "cd6c6fb4cc57e4546ef9b9cc070c64c4"
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
