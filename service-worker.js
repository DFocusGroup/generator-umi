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
    "url": "assets/js/11.3f553245.js",
    "revision": "c6a9c682d58f744d92ae80c1a3cec356"
  },
  {
    "url": "assets/js/12.db0539f6.js",
    "revision": "99e9e469f73952d804ddd02205fbb5b4"
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
    "url": "assets/js/8.44637656.js",
    "revision": "3c37dd3bff9a8642808a83c4e26043da"
  },
  {
    "url": "assets/js/9.f3e94244.js",
    "revision": "73abed98b27a228b5bba93901a7a6119"
  },
  {
    "url": "assets/js/app.b886aaa1.js",
    "revision": "1583bc39d04f9956cb36bd6c92a44615"
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
    "revision": "f0ae007d4c3fd58759fbfaf13e33d319"
  },
  {
    "url": "guide/index.html",
    "revision": "a60d594cbc2debb54c0591323f24feeb"
  },
  {
    "url": "guide/layout.html",
    "revision": "d062d1bc1b56eacf301e5d731b6bfa14"
  },
  {
    "url": "guide/locale.html",
    "revision": "e38087ad0bcc44e4d62aa202abc6cb7a"
  },
  {
    "url": "guide/packaging.html",
    "revision": "9154860c82c69c6a878908af65f92d4f"
  },
  {
    "url": "guide/route.html",
    "revision": "224b5a3df4b9cb0547c1af67459f2160"
  },
  {
    "url": "index.html",
    "revision": "dab10756ad49d8cc559324b7c6e84be6"
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
