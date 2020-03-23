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
    "url": "assets/js/10.d6580f5c.js",
    "revision": "b423e087c23519eb614dcff47c946bc7"
  },
  {
    "url": "assets/js/11.1d688618.js",
    "revision": "dec3cc241b5755c712fdc7f18289ef82"
  },
  {
    "url": "assets/js/12.fef66935.js",
    "revision": "c76ae67b8e688307361e3d182d0b8e58"
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
    "url": "assets/js/6.0e0d7864.js",
    "revision": "132a827a8615b397f5c1ff24ad3253a4"
  },
  {
    "url": "assets/js/7.7e6424d5.js",
    "revision": "9869e8a048d265b2b2f9adbd2342b11a"
  },
  {
    "url": "assets/js/8.f76f86b6.js",
    "revision": "696deb151c5c031b1fb0d6d676b7d772"
  },
  {
    "url": "assets/js/9.bd67052a.js",
    "revision": "18fe17c6e812545bdd490962935f29db"
  },
  {
    "url": "assets/js/app.6a505922.js",
    "revision": "f12bd40d1e73b9443a4a286d17c0915a"
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
    "revision": "9994298f6697a7221a72a2418a6e67f6"
  },
  {
    "url": "guide/index.html",
    "revision": "2c57e357d8c0f5649fab0ba98d7a0c06"
  },
  {
    "url": "guide/layout.html",
    "revision": "aea969027a02f3ac642d9b08bc4b7da3"
  },
  {
    "url": "guide/locale.html",
    "revision": "66874a8b1db1bf25bdc89723f529dbc4"
  },
  {
    "url": "guide/packaging.html",
    "revision": "c6f708288c7133bc1021b0eb796e5a48"
  },
  {
    "url": "guide/route.html",
    "revision": "8e79fa2ca23d6b15accc6c2ad48066bb"
  },
  {
    "url": "index.html",
    "revision": "5b96b54a3f139b24aa31544e67331bd7"
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
