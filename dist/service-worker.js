if(!self.define){let e,n={};const s=(s,a)=>(s=new URL(s+".js",a).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,i)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(n[l])return;let r={};const o=e=>s(e,l),d={module:{uri:l},exports:r,require:o};n[l]=Promise.all(a.map((e=>d[e]||o(e)))).then((e=>(i(...e),r)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"kyasa-landingpage"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/kyasa-landingpage/css/app.970ec4bd.css",revision:null},{url:"/kyasa-landingpage/css/chunk-vendors.1944359c.css",revision:null},{url:"/kyasa-landingpage/img/kyasa_logo.611e08ff.png",revision:null},{url:"/kyasa-landingpage/img/kyasa_logo_white.0009f624.png",revision:null},{url:"/kyasa-landingpage/img/timsa.27e4c533.png",revision:null},{url:"/kyasa-landingpage/index.html",revision:"0308585fd41f976522fd7e3be73d0531"},{url:"/kyasa-landingpage/js/app.97862c73.js",revision:null},{url:"/kyasa-landingpage/js/chunk-vendors.bd8bfbb2.js",revision:null},{url:"/kyasa-landingpage/manifest.json",revision:"bf8fdef0564565ceb33fbe7982012967"},{url:"/kyasa-landingpage/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
