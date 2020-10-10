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
    "revision": "2d58db69e4146a917650e398cf0a19ab"
  },
  {
    "url": "assets/css/0.styles.97efe6a0.css",
    "revision": "8171740c1e9ca500c1fd18fce1268ecc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.766cee77.js",
    "revision": "288092b960a6d971806854a117e6c342"
  },
  {
    "url": "assets/js/11.81daf4cf.js",
    "revision": "8bf77e273b53393b8c27e2b3edd95fa3"
  },
  {
    "url": "assets/js/12.4aef4f91.js",
    "revision": "a637bf7bc4671a19b1dcb85cda3d5098"
  },
  {
    "url": "assets/js/13.6a9583ca.js",
    "revision": "e37127b1d138fdbc05dbf180c616a0e5"
  },
  {
    "url": "assets/js/14.39d43cc9.js",
    "revision": "c0b799078785acaeafa4b292418c3148"
  },
  {
    "url": "assets/js/15.cd16b72b.js",
    "revision": "e1404f5e109eac9dcc9ba081befbe6ad"
  },
  {
    "url": "assets/js/16.d91cac72.js",
    "revision": "5f3baf9d116546094c62eb19a991fbe7"
  },
  {
    "url": "assets/js/2.8298ae56.js",
    "revision": "229fdd111941681f033ec953a7ae02a6"
  },
  {
    "url": "assets/js/3.90180ba9.js",
    "revision": "fc1046fce12e358ed0cb79f7f0fa8ebe"
  },
  {
    "url": "assets/js/4.a1018bb0.js",
    "revision": "09c38ca4a369d3c3d6020358995d56d7"
  },
  {
    "url": "assets/js/5.662e806e.js",
    "revision": "bb3d944d82389d15846299c53568c377"
  },
  {
    "url": "assets/js/6.871ab763.js",
    "revision": "a703df7a4e55831652390d0e88147818"
  },
  {
    "url": "assets/js/7.7ae62eff.js",
    "revision": "2b893750eb40739614315c6e189a2f98"
  },
  {
    "url": "assets/js/8.f6aaeb83.js",
    "revision": "e672b03a94a2b9eea3eb2ae1c0fe8f5d"
  },
  {
    "url": "assets/js/9.7a1bc0ab.js",
    "revision": "a57c9a2cd8e25e68b7a298bad9f8955b"
  },
  {
    "url": "assets/js/app.8550b5f3.js",
    "revision": "07a53d6d464cfc0195884290e1edce6d"
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
    "revision": "544eb0ece0b62e0b4f32102349edbbab"
  },
  {
    "url": "guide/index.html",
    "revision": "55f351c5525141786f2bb61d292b65f9"
  },
  {
    "url": "guide/layout.html",
    "revision": "ddbbd95dc900301064a89fbd0cd4aac2"
  },
  {
    "url": "guide/locale.html",
    "revision": "1103fd41d8ff72ad7e471bfbfadc282c"
  },
  {
    "url": "guide/packaging.html",
    "revision": "add78175a64413646791161298b61610"
  },
  {
    "url": "guide/route.html",
    "revision": "c9d729546e5e1136d31835110493ac8d"
  },
  {
    "url": "guide/theme.html",
    "revision": "4c1cce87edeffbb89fcda229b51e183a"
  },
  {
    "url": "index.html",
    "revision": "1d123d57b076311a8be6cee8b2b486ff"
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
