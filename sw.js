if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const o=e=>n(e,t),u={module:{uri:t},exports:l,require:o};s[t]=Promise.all(i.map((e=>u[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/apple-touch-icon-C6BJjPoF.png",revision:null},{url:"assets/favicon-16x16-ZXROALFY.png",revision:null},{url:"assets/favicon-32x32-DMshgUGI.png",revision:null},{url:"assets/index-CdzADark.js",revision:null},{url:"assets/index-ZunUjyFc.css",revision:null},{url:"assets/virtu-NV1dSq9V.png",revision:null},{url:"index.html",revision:"8cc7e8920e5289934a21dbd0ef2d798d"},{url:"manifest.webmanifest",revision:"68b1a905deffe73611f3b9a05d2796a7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
