"use strict";var precacheConfig=[["/My-reactjs-profile/index.html","673e5ee47f54395150321f2253373d0b"],["/My-reactjs-profile/static/css/main.8e35f157.css","82c17891063243dd18f62789f57ee190"],["/My-reactjs-profile/static/js/main.2a15b574.js","03448e51c6abc4c51526c4ab181a44fe"],["/My-reactjs-profile/static/media/contact-bg.0903639c.jpg","0903639c96ce244928413b25b3b6f1ac"],["/My-reactjs-profile/static/media/cta-bg.d3cb035b.jpg","d3cb035b6097051319bc49c9d9695c75"],["/My-reactjs-profile/static/media/form-bg.b81da216.jpg","b81da21615d1e54f92812f416af2870b"],["/My-reactjs-profile/static/media/home-bg.5b6fd984.jpg","5b6fd984efb3526ebab269a020fb7a85"],["/My-reactjs-profile/static/media/home-hero-cutout.86ecd5af.png","86ecd5aff98f77511246c60cc7e2a86a"],["/My-reactjs-profile/static/media/logo.ae873441.png","ae873441a9340900efb7f03579b357d8"],["/My-reactjs-profile/static/media/primary_skill_bg.07ad02ab.jpg","07ad02ab02a975323036f2e4e03ac791"],["/My-reactjs-profile/static/media/projects-bg.4897a33b.jpg","4897a33b6cf90298129d5bbc27458fc6"],["/My-reactjs-profile/static/media/skills-bg.bf83713b.jpg","bf83713b8761f79b8c7e67ef6b8534be"],["/My-reactjs-profile/static/media/spring-boot-icon.51d3a3d7.png","51d3a3d7d56262899e12143cf282f51a"],["/My-reactjs-profile/static/media/work-hist-bg.24e735bf.jpg","24e735bf20a9fd3770692f6c9056111b"],["/My-reactjs-profile/static/media/yiiframework.f2b9aa6f.png","f2b9aa6fbb6c2cf3fbed0d8c859dfdb1"],["/My-reactjs-profile/static/media/youtube-bg.aa1f4845.jpg","aa1f48451e967e06f2da051c6372e467"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/My-reactjs-profile/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});