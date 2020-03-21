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
    "url": "assets/js/10.faa58d57.js",
    "revision": "37a05b4681fe05a89dae966c2c2e2a42"
  },
  {
    "url": "assets/js/11.0c714282.js",
    "revision": "4fc490f792c2e896a2d69cc53cacb6d7"
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
    "url": "assets/js/6.a9986b2e.js",
    "revision": "579680bf266d37d95195952942077952"
  },
  {
    "url": "assets/js/7.2f7a785b.js",
    "revision": "8bb2ad99194d8119b18378986cae4143"
  },
  {
    "url": "assets/js/8.210d0e5f.js",
    "revision": "e41842e04a1533593bbfcde821d90ffb"
  },
  {
    "url": "assets/js/9.05a403dc.js",
    "revision": "2e568afec55d231a77dee5e52fb70307"
  },
  {
    "url": "assets/js/app.ea1f078b.js",
    "revision": "570036b0e2ebc5b4eba075822247a808"
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
    "revision": "156ca1f525587136a87a864fc2fe1c8d"
  },
  {
    "url": "guide/index.html",
    "revision": "48c198bfcaa4c43cd9172991336a121f"
  },
  {
    "url": "guide/layout.html",
    "revision": "34432f71aae0aa0418720a5b1cec79ed"
  },
  {
    "url": "guide/locale.html",
    "revision": "a627e078ee13c20da49cf87d443102f2"
  },
  {
    "url": "guide/packaging.html",
    "revision": "f88e4cec29eedd12573cb8584cf64376"
  },
  {
    "url": "guide/route.html",
    "revision": "122d9194558d4a995b9042ebe268f9a8"
  },
  {
    "url": "index.html",
    "revision": "a5a8525d90355575dbe1302f92b5803f"
  },
  {
    "url": "locale.gif",
    "revision": "deec66be83f7b76e8cd7ac5365c1cd2c"
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
