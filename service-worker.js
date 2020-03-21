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
    "url": "assets/js/10.86c0b2fa.js",
    "revision": "e48d24b711356b3d4a1be3a992773954"
  },
  {
    "url": "assets/js/11.7a839df8.js",
    "revision": "87f2e2b32725e6a5b28cd4606fc582c4"
  },
  {
    "url": "assets/js/12.7c8668b8.js",
    "revision": "f4c893c189090ae05adbc8d7ad46ea5b"
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
    "url": "assets/js/6.14dad718.js",
    "revision": "052a524837b046d587ff0256f3529467"
  },
  {
    "url": "assets/js/7.7e6424d5.js",
    "revision": "9869e8a048d265b2b2f9adbd2342b11a"
  },
  {
    "url": "assets/js/8.c134269e.js",
    "revision": "c49bc7550b9184f487ac9d83cf26e8ab"
  },
  {
    "url": "assets/js/9.cb6b19f6.js",
    "revision": "5b77d7a7a0c46e0ba5767346d5814dfb"
  },
  {
    "url": "assets/js/app.83ab4dad.js",
    "revision": "b9b223f6055038dfc8e1dae518e9b9a5"
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
    "revision": "c2d2f1be1438b99cd03efec54562393b"
  },
  {
    "url": "guide/index.html",
    "revision": "d07fdf95e2a990c361cf7df74e65567f"
  },
  {
    "url": "guide/layout.html",
    "revision": "5e0f4cfe3c650b44dc0ebbcc47b7ecae"
  },
  {
    "url": "guide/locale.html",
    "revision": "8ca9cadda7036be800bf383a17c2ae7f"
  },
  {
    "url": "guide/packaging.html",
    "revision": "124a51fef5d9c847351e88b723a80694"
  },
  {
    "url": "guide/route.html",
    "revision": "060171daa82cfea632a563543a7577b0"
  },
  {
    "url": "index.html",
    "revision": "63fef52eabfff3650ba1c150e5a113eb"
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
