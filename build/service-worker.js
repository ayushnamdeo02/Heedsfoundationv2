"use strict";var precacheConfig=[["/index.html","253e5d345cb2cbe2806828597d0c349b"],["/static/css/main.842c2fc1.css","b80e73f53774c83fb03486133221440a"],["/static/js/main.33b048bb.js","0e230c16ba25f060bf203b1e2e379e3a"],["/static/media/event-head.ecd116ee.png","ecd116ee6167b81dc61295e0a0104a95"],["/static/media/event2.b146191d.jpg","b146191d468c44189065f3389de5f67c"],["/static/media/head.dca75ea2.png","dca75ea2d4187f5f35eb552711d297c2"],["/static/media/image1.9b675f00.png","9b675f00c6719c305ec02f63559dd5b5"],["/static/media/image2.645c2c62.jpg","645c2c62965f869b2dd2dae9c8e1e4db"],["/static/media/image2.66c151a2.png","66c151a271137bc766f8cfcc9acac583"],["/static/media/image3.b8c76eee.png","b8c76eeee37c6514ed46488d68a990fb"],["/static/media/image5.d8f5210b.png","d8f5210b1ef97d9fb8b00fc17bfc28ff"],["/static/media/logobgclear.6c824b9c.png","6c824b9c8dbc843312e180e6989ab34e"],["/static/media/slider-1.36878001.jpg","36878001811b3ec2dbcee2d8262af47a"],["/static/media/slider-2.5b63f82e.jpg","5b63f82e3040d0f40936a1eadf17b0f0"],["/static/media/slider-3.b88d02ff.jpg","b88d02ff9aeabb292d7e53a21740347c"],["/static/media/slider-4.a18dd51f.jpg","a18dd51fa4f4dcbc1e5e2e47976861d5"],["/static/media/slider-5.ac644a6c.jpg","ac644a6c0439c09876ef83ed225872e2"],["/static/media/twitter-logo.0a5cdc5c.png","0a5cdc5c65413f08ee000cb57fea89c8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});