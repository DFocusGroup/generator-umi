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
    "url": "assets/js/11.d59f24b3.js",
    "revision": "639358eb678380269cb3ff10227913cb"
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
    "url": "assets/js/6.4df05946.js",
    "revision": "ee47aa6db9906ce471b73d4907a1a3b3"
  },
  {
    "url": "assets/js/7.3eaf00c5.js",
    "revision": "1fa7325c455a5ec7dc458eedc571fc80"
  },
  {
    "url": "assets/js/8.f0056364.js",
    "revision": "6224361f18092c01852f815202e4f007"
  },
  {
    "url": "assets/js/9.bd67052a.js",
    "revision": "18fe17c6e812545bdd490962935f29db"
  },
  {
    "url": "assets/js/app.bfcd8fee.js",
    "revision": "2aa0d6c7884d68d50140f55598af387d"
  },
  {
    "url": "demo.gif",
    "revision": "9cf6eb237b123868212041091f66209b"
  },
  {
    "url": "generator.gif",
    "revision": "28d2e2d323233a182336f33498a4e2a5"
  },
  {
    "url": "guide/data.html",
    "revision": "c0d48baed7aaeff034a5993c28a93fc2"
  },
  {
    "url": "guide/index.html",
    "revision": "3725d6404b0a8fd53405bdd22eda1797"
  },
  {
    "url": "guide/layout.html",
    "revision": "a94f7a815775d2251389362e0dbebe4e"
  },
  {
    "url": "guide/locale.html",
    "revision": "0a4b316dbe4b3b6c271cff0aa1e0b0c8"
  },
  {
    "url": "guide/packaging.html",
    "revision": "f625b3db4032171bd2cbe2265f1a5fd2"
  },
  {
    "url": "guide/route.html",
    "revision": "456cef479fed73eef13525cb7d52c691"
  },
  {
    "url": "index.html",
    "revision": "43aff39df5c0c0f44f4128ac4ae3aec3"
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
