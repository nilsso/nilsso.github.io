(function(e){function t(t){for(var n,a,s=t[0],p=t[1],c=t[2],u=0,l=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&l.push(r[a][0]),r[a]=0;for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(e[n]=p[n]);v&&v(t);while(l.length)l.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],n=!0,a=1;a<i.length;a++){var s=i[a];0!==r[s]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=i[0]))}return e}var n={},r={app:0},o=[];function a(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-45a0f68d":"c1429d19"}[e]+".js"}var s={};var p={9490:function(){return{}}};function c(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.e=function(e){var t=[],i=r[e];if(0!==i)if(i)t.push(i[2]);else{var n=new Promise((function(t,n){i=r[e]=[t,n]}));t.push(i[2]=n);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=a(e);var l=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(m);var i=r[e];if(0!==i){if(i){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,i[1](l)}r[e]=void 0}};var m=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}var v={"chunk-45a0f68d":["9490"]}[e]||[];return v.forEach((function(e){var i=s[e];if(i)t.push(i);else{var n,r=p[e](),o=fetch(c.p+""+{9490:"b760ab4d1d3262f57a0a"}[e]+".module.wasm");if(r instanceof Promise&&"function"===typeof WebAssembly.compileStreaming)n=Promise.all([WebAssembly.compileStreaming(o),r]).then((function(e){return WebAssembly.instantiate(e[0],e[1])}));else if("function"===typeof WebAssembly.instantiateStreaming)n=WebAssembly.instantiateStreaming(o,r);else{var a=o.then((function(e){return e.arrayBuffer()}));n=a.then((function(e){return WebAssembly.instantiate(e,r)}))}t.push(s[e]=n.then((function(t){return c.w[e]=(t.instance||t).exports})))}})),Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,i){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(i,n,function(t){return e[t]}.bind(null,n));return i},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/apps/myps/",c.oe=function(e){throw console.error(e),e},c.w={};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var m=0;m<u.length;m++)t(u[m]);var v=l;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"1bd8":function(e,t,i){"use strict";i("4999")},4999:function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("7a23"),r={id:"container"},o={id:"myps"},a={id:"mips",readonly:""},s={id:"optimizer-options",type:"none"};function p(e,t,i,p,c,u){return Object(n["e"])(),Object(n["c"])("div",r,[Object(n["d"])("div",o,[Object(n["j"])(Object(n["d"])("textarea",{id:"myps-editor","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.mypsSource=e}),placeholder:"MYPS input",rows:"15",onKeydown:t[2]||(t[2]=Object(n["k"])(Object(n["l"])((function(){return u.compile&&u.compile.apply(u,arguments)}),["shift","prevent"]),["enter"]))},null,544),[[n["i"],c.mypsSource]])]),Object(n["d"])("div",a,[Object(n["j"])(Object(n["d"])("textarea",{id:"mips-viewer","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.mipsSource=e}),placeholder:"MIPS output",rows:"15",readonly:""},null,512),[[n["i"],c.mipsSource]]),Object(n["d"])("div",null,[Object(n["d"])("button",{onClick:t[4]||(t[4]=function(){return u.compile&&u.compile.apply(u,arguments)})}," Compile "),Object(n["d"])("ul",s,[(Object(n["e"])(!0),Object(n["c"])(n["a"],null,Object(n["f"])(c.optimizerOptions,(function(e,i){return Object(n["e"])(),Object(n["c"])("li",{key:i,onChange:t[5]||(t[5]=function(){return u.saveHash&&u.saveHash.apply(u,arguments)})},[Object(n["j"])(Object(n["d"])("input",{id:e.id,"onUpdate:modelValue":function(t){return e.value=t},type:"checkbox"},null,8,["id","onUpdate:modelValue"]),[[n["h"],e.value]]),Object(n["d"])("label",{for:e.id},Object(n["g"])(e.label),9,["for"])],32)})),128))])])])])}var c=i("1da1"),u=i("3835"),l=(i("96cf"),i("d3b7"),i("3ca3"),i("ddb0"),i("2ef0")),m=i.n(l),v=[["optimizeRegisters","Optimize Registers",!0],["removeComments","Remove comments",!1],["removeEmpty","Remove empty",!1],["removeEmptyComments","Remove empty comments",!1],["replaceAliasReg","Replace register aliases",!1],["replaceAliasDev","Replace device aliases",!1],["replaceDefines","Replace definitions",!1],["replaceTags","Replace line tags",!1]],d=500,f={name:"App",components:{},data:function(){return{wasm:i.e("chunk-45a0f68d").then(i.bind(null,"a549")),optimizerOptions:v.reduce((function(e,t){var i=Object(u["a"])(t,3),n=i[0],r=i[1],o=i[2];return e[n]={id:n,label:r,value:o},e}),{}),mypsSource:"",mipsSource:""}},watch:{mypsSource:m.a.debounce((function(){this.saveHash()}),d)},mounted:function(){this.loadHash()},methods:{compile:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.debug('compile: "'+e.mypsSource+'"'),t.next=3,e.wasm;case 3:e.mipsSource=t.sent.translate(e.mypsSource,e.optimizerOptions.optimizeRegisters.value,e.optimizerOptions.removeComments.value,e.optimizerOptions.removeEmpty.value,e.optimizerOptions.removeEmptyComments.value,e.optimizerOptions.replaceAliasReg.value,e.optimizerOptions.replaceAliasDev.value,e.optimizerOptions.replaceDefines.value,e.optimizerOptions.replaceTags.value),e.saveHash(!1);case 5:case"end":return t.stop()}}),t)})))()},saveHash:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];console.debug("saveHash");var t={mypsSource:this.mypsSource,mipsSource:e?"":this.mipsSource,optimizeRegisters:this.optimizerOptions.optimizeRegisters.value,removeComments:this.optimizerOptions.removeComments.value,removeEmpty:this.optimizerOptions.removeEmpty.value,removeEmptyComments:this.optimizerOptions.removeEmptyComments.value,replaceAliasReg:this.optimizerOptions.replaceAliasReg.value,replaceAliasDev:this.optimizerOptions.replaceAliasDev.value,replaceDefines:this.optimizerOptions.replaceDefines.value,replaceTags:this.optimizerOptions.replaceTags.value},i=JSON.stringify(t),n=btoa(i);window.location.hash=n},loadHash:function(){var e=window.location.hash.substring(1);if(e){console.debug("loadHash");var t=atob(e),i=JSON.parse(t);this.mypsSource=i.mypsSource,this.mipsSource=i.mipsSource,this.optimizerOptions.optimizeRegisters.value=i.optimizeRegisters,this.optimizerOptions.removeComments.value=i.removeComments,this.optimizerOptions.removeEmpty.value=i.removeEmpty,this.optimizerOptions.removeEmptyComments.value=i.removeEmptyComments,this.optimizerOptions.replaceAliasReg.value=i.replaceAliasReg,this.optimizerOptions.replaceAliasDev.value=i.replaceAliasDev,this.optimizerOptions.replaceDefines.value=i.replaceDefines,this.optimizerOptions.replaceTags.value=i.replaceTags}}}};i("1bd8");f.render=p;var h=f;Object(n["b"])(h).mount("#app")}});
//# sourceMappingURL=app.58f1e62b.js.map