(()=>{"use strict";var e,t,n,r,o,a={426:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"body {\n    font-family: Verdana, sans-serif;\n    font-size: 10pt;\n}\n\ntable {\n    border-spacing: 0pt;\n    border: solid 1pt;\n    padding: 2pt;\n}\n\ntd, th {\n    border-left: solid 1pt;\n    padding: 0pt 2pt 1pt 2pt;\n}\n\n/*tr:hover {*/\n    /*background-color: yellow;*/\n/*}*/\n\ntd:first-child, th:first-child {\n    border-left: None;\n}\n\n@keyframes highlight {\n    0% {\n        background: yellow;\n    }\n    100% {\n        background: currentBackgroundColor;\n    }\n}\n\n.highlight {\n    animation: highlight ease-out 1s;\n}\n",""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&o[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},379:(e,t,n)=>{var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function i(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var s=e[o],d=t.base?s[0]+t.base:s[0],c=n[d]||0,l="".concat(d," ").concat(c);n[d]=c+1;var u=i(l),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:l,updater:m(p,t),references:1}),r.push(l)}return r}function d(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var c,l=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function u(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,h=0;function m(e,t){var n,r,o;if(t.singleton){var a=h++;n=f||(f=d(t)),r=u.bind(null,n,a,!1),o=u.bind(null,n,a,!0)}else n=d(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=i(n[r]);a[o].references--}for(var d=s(e,t),c=0;c<n.length;c++){var l=i(n[c]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=d}}}},987:(e,t,n)=>{var r=n(379),o=n.n(r),a=n(426);function i(e,t,n){var r,o,a,i,s,d,c,l;switch(1===arguments.length&&(t=e.s,n=e.v,e=e.h),d=n*(1-t),c=n*(1-(s=6*e-(i=Math.floor(6*e)))*t),l=n*(1-(1-s)*t),i%6){case 0:r=n,o=l,a=d;break;case 1:r=c,o=n,a=d;break;case 2:r=d,o=n,a=l;break;case 3:r=d,o=c,a=n;break;case 4:r=l,o=d,a=n;break;case 5:r=n,o=d,a=c}return{r:Math.round(255*r),g:Math.round(255*o),b:Math.round(255*a)}}o()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;const s=(e,t,n)=>{const r=document.createElement(e);return t&&(r.innerHTML=t),n&&n.forEach((e=>r.classList.add(e))),r};let[d,c,l]=function(){let e=new URLSearchParams(window.location.search),t=Number.parseInt(e.get("a"))||4,n=Number.parseInt(e.get("b"))||6,r=Number.parseInt(e.get("l"))||10;return e.set("a",t),e.set("b",n),e.set("l",r),window.history.replaceState({},"",`${location.pathname}?${e.toString()}`),[t,n,r]}(),[u,p,f,h,m,b,g]=((e,t,n)=>{const r=document.createElement("div");r.appendChild(s("p","\n            For specific M<sub>a,b</sub> results for ℓ elements,\n            modify any of a, b or ℓ in the the URL query.")),r.appendChild(s("p","\n            (e.g. <code>?a=1&b=4&l=100</code> for the first 100 elements\n            of the M<sub>1,4</sub> Hilbert monoid.)"));var o=s("h2",`ACM M<sub>${e},${t}</sub> results`);const a=s("span"," (loading)");o.append(a),r.appendChild(o);const i=s("div");i.setAttribute("hidden","");const d=s("p","Max number of factorizations: ");i.appendChild(d),i.appendChild(s("p","<p>(AF: atom factorization, PF: prime factorization)</p>"));const c=s("input"),l=s("p","Go to element # ");l.append(c),l.append(" (input and press "),l.append(s("kbd","Return")),l.append(")"),i.appendChild(l);const u=s("tbody"),p=s("table"),f=s("tr","\n                <th>#</th>\n                <th>n</th>\n                <th>AF</th>\n                <th>PF</th>"),h=s("thead");return h.append(f),p.append(h),p.append(u),i.appendChild(p),r.appendChild(i),[r,a,i,c,d,f,u]})(d,c);document.body.appendChild(u),n.e(968).then(n.bind(n,968)).then((e=>{const t=window.document.styleSheets[0];let{max_factorizations:n,element_data:r,prime_mods:o}=e.acm_data(d,c,l);for(let e=0;e<n;e++){let{r,g:o,b:a}=i(e/n+0,.3,1);t.insertRule(`.reducible${e+1} { background-color: rgb(${r},${o},${a}); }`,t.cssRules.length)}for(const e of o)b.append(s("th",`#[${e}]<sub>${c}`));const a=[];for(let[e,{n:t,num_factorizations:i,afs:d,pf:c,zp:l}]of r.entries()){const r=s("tr");i>0&&(r.classList.add(`reducible${i}`),i===n&&a.push([t,e])),r.appendChild(s("td",e+1)),r.appendChild(s("td",t)),r.appendChild(s("td","<div><span>"+d.map((e=>"("+e.map(String).join(" · ")+")")).join(", ")+"</span></div>")),r.appendChild(s("td",c.map((([e,t])=>`${e}<sup>${t}</sup>`)).join(" · ")));for(const e of o)r.appendChild(s("td",l[e]));g.appendChild(r)}m.append(n+", elements: "+a.map((([e,t])=>`${e}(#${t})`)).join(", "));let u=e=>e.classList.remove("highlight");h.addEventListener("keydown",(e=>{if(13===e.keyCode){const e=Number.parseInt(h.value)-1,t=g.children[e];u(t),setTimeout((()=>t.classList.add("highlight")),0),t.scrollIntoView({block:"center"})}})),document.addEventListener("webkitAnimationEnd",(e=>u(e.target))),document.addEventListener("animationend",(e=>u(e.target))),document.addEventListener("oanimationend",(e=>u(e.target))),p.setAttribute("hidden",""),f.removeAttribute("hidden")}))}},i={};function s(e){if(i[e])return i[e].exports;var t=i[e]={id:e,exports:{}};return a[e](t,t.exports,s),t.exports}s.m=a,s.c=i,s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,n)=>(s.f[n](e,t),t)),[])),s.u=e=>e+".bundle.js",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},s.l=(t,n,r,o)=>{if(e[t])e[t].push(n);else{var a,i;if(void 0!==r)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var l=d[c];if(l.getAttribute("src")==t){a=l;break}}a||(i=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.src=t),e[t]=[n];var u=(n,r)=>{a.onerror=a.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(r))),n)return n(r)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),i&&document.head.appendChild(a)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{var e={179:0};s.f.j=(t,n)=>{var r=s.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(((n,o)=>{r=e[t]=[n,o]}));n.push(r[2]=o);var a=s.p+s.u(t),i=new Error;s.l(a,(n=>{if(s.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,r[1](i)}}),"chunk-"+t,t)}};var t=(t,n)=>{for(var r,o,[a,i,d]=n,c=0,l=[];c<a.length;c++)o=a[c],s.o(e,o)&&e[o]&&l.push(e[o][0]),e[o]=0;for(r in i)s.o(i,r)&&(s.m[r]=i[r]);for(d&&d(s),t&&t(n);l.length;)l.shift()()},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),n={},r={27:function(){return{"./acm_wasm_simple_bg.js":{__wbindgen_json_parse:function(e,n){return void 0===t&&(t=s.c[210].exports),t.t(e,n)}}}}},o={968:[27]},s.w={},s.f.wasm=function(e,t){(o[e]||[]).forEach((function(o,a){var i=n[o];if(i)t.push(i);else{var d,c=r[o](),l=fetch(s.p+""+{968:{27:"e6e9e1e5b889ec163641"}}[e][o]+".module.wasm");d=c instanceof Promise&&"function"==typeof WebAssembly.compileStreaming?Promise.all([WebAssembly.compileStreaming(l),c]).then((function(e){return WebAssembly.instantiate(e[0],e[1])})):"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(l,c):l.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,c)})),t.push(n[o]=d.then((function(e){return s.w[o]=(e.instance||e).exports})))}}))},s(987)})();