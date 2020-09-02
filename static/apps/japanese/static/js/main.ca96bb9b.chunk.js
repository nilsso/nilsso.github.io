(this.webpackJsonpjapanese=this.webpackJsonpjapanese||[]).push([[0],{23:function(e,t,n){e.exports=n(33)},29:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),l=n(13),s=n.n(l),u=n(5),i=n(17),m=n(21),d=n(36),h=n(37),b=n(38),f=n(42),v=n(22),y=n(41),E=n(39),p=n(40),g=n(11),j=n(14);function O(e){return console.assert(e.length>0),Math.floor(Math.random()*e.length)}function k(e){var t=O(e);return e.splice(t,1).pop()}function w(e,t){var n=e.source,a="";return t=t||"",(e.global||/g/i.test(t))&&(a+="g"),(e.ignoreCase||/i/i.test(t))&&(a+="i"),(e.multiline||/m/i.test(t))&&(a+="m"),new RegExp(n,a)}var N=function(){function e(t){Object(g.a)(this,e),this.template=void 0,this.template=t}return Object(j.a)(e,[{key:"populate",value:function(e){for(var t=this.template.slice(),n=0,a=Object.entries(e);n<a.length;n++)for(var r=Object(u.a)(a[n],2),c=r[0],o=r[1],l=new RegExp(c),s=Array.from(Array(o.length).keys()),i=this.template.matchAll(w(l,"g"));!i.next().done;){var m=k(s);t=t.replace(l,o[m])}return t}}]),e}(),S=function e(t,n,a){Object(g.a)(this,e),this.enabled=void 0,this.sentences=void 0,this.vocabulary=void 0,this.enabled=t,this.sentences=n,this.vocabulary=a},x=function(){function e(t,n,a){Object(g.a)(this,e),this.name=void 0,this.sentences=void 0,this.vocabulary=void 0,this.name=t,this.sentences=n,this.vocabulary=a}return Object(j.a)(e,[{key:"random_with_vocabulary",value:function(e){var t;return this.sentences.length>0?(t=this.sentences)[O(t)].populate(e):""}},{key:"random",value:function(){return this.random_with_vocabulary(this.vocabulary)}}],[{key:"empty",value:function(){return new e("Empty",[],{})}},{key:"from_json",value:function(t){return new e(t.name,t.sentences.map((function(e){return new N(e)})),t.vocabulary)}},{key:"join",value:function(t,n){var a=new e("Joined",[],{});return t.forEach((function(e,t){if(n.enabled[t]&&(n.sentences[t]&&(a.sentences=a.sentences.concat(e.sentences)),n.vocabulary[t]))for(var r=0,c=Object.entries(e.vocabulary);r<c.length;r++){var o=Object(u.a)(c[r],2),l=o[0],s=o[1];l in a.vocabulary?a.vocabulary[l]=a.vocabulary[l].concat(s):a.vocabulary[l]=s}})),a}}]),e}(),C=(n(29),function(e,t){return Array(e).fill(t)}),A=function(e,t,n){var a=Object(m.a)(e);return a[t]=n,a};function B(){return(B=Object(i.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{mode:"cors",credentials:"include"});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e){var t=e.modules,n=Object(a.useState)(x.empty()),c=Object(u.a)(n,2),o=c[0],l=c[1],s=Object(a.useState)(C(0,!1)),i=Object(u.a)(s,2),m=i[0],b=i[1],f=Object(a.useState)(C(0,!0)),v=Object(u.a)(f,2),y=v[0],E=v[1],p=Object(a.useState)(C(0,!0)),g=Object(u.a)(p,2),j=g[0],O=g[1];return Object(a.useEffect)((function(){b(C(t.length,!1)),E(C(t.length,!0)),O(C(t.length,!0))}),[t]),Object(a.useEffect)((function(){t.length>0&&l(x.join(t,new S(m,y,j)))}),[t,m,y,j]),r.a.createElement(d.a,{className:"h-100"},r.a.createElement(h.a,{id:"components",className:"h-100"},r.a.createElement(_,{joined:o}),r.a.createElement(M,{modules:t,enabled:m,sentences:y,vocabulary:j,setEnabled:b,setSentences:E,setVocabulary:O})))}function _(e){var t=e.joined,n=Object(a.useState)("..."),c=Object(u.a)(n,2),o=c[0],l=c[1];return r.a.createElement(b.a,{className:"generator"},r.a.createElement(f.a,null,r.a.createElement(f.a.Header,null,r.a.createElement("span",{className:"header-text"},"Generator"),r.a.createElement(v.a,{onClick:function(){l(t.random())}},"Generate")),r.a.createElement(f.a.Body,null,r.a.createElement("h1",null,o))))}function M(e){var t=e.modules,n=e.enabled,a=e.sentences,c=e.vocabulary,o=e.setEnabled,l=e.setSentences,s=e.setVocabulary,u=t.map((function(e,t){return r.a.createElement(T,{key:t,name:e.name,enabled:n[t],sentences:a[t],vocabulary:c[t],setEnabled:function(e){return o(A(n,t,e))},setSentences:function(e){return l(A(a,t,e))},setVocabulary:function(e){return s(A(c,t,e))}})})),i=function(e){o(C(t.length,e))};return r.a.createElement(b.a,{className:"h-100"},r.a.createElement(f.a,{className:"h-100"},r.a.createElement(f.a.Header,null,r.a.createElement("span",{className:"header-text"},"Modules"),r.a.createElement(v.a,{variant:"primary",onClick:function(){return i(!0)}},"Enable All"),r.a.createElement(v.a,{variant:"danger",onClick:function(){return i(!1)}},"Enable None")),r.a.createElement(f.a.Body,{className:"h-100"},r.a.createElement("div",{id:"module-list"},u))))}function T(e){var t=e.enabled,n=e.sentences,a=e.vocabulary,c=e.setEnabled,o=e.setSentences,l=e.setVocabulary;return r.a.createElement(y.a,{className:"module"},r.a.createElement(f.a,null,r.a.createElement(f.a.Body,{id:"module-control"},r.a.createElement(E.a,{toggle:!0,className:"module-controls"},r.a.createElement(p.a,{type:"checkbox",variant:"outline-primary",value:0,checked:t,onChange:function(e){return c(e.currentTarget.checked)}},e.name),r.a.createElement(p.a,{type:"checkbox",variant:"outline-secondary",value:1,checked:n,disabled:!t,onChange:function(e){return o(e.currentTarget.checked)}},"Sentences"),r.a.createElement(p.a,{type:"checkbox",variant:"outline-secondary",value:2,checked:a,disabled:!t,onChange:function(e){return l(e.currentTarget.checked)}},"Vocabulary")))),r.a.createElement(f.a,null,r.a.createElement(y.a.Toggle,{as:f.a.Header,className:"module-contents-header small",variant:"link",eventKey:"0"},"Contents"),r.a.createElement(y.a.Collapse,{eventKey:"0"},r.a.createElement(f.a.Body,null,"Sentences, Vocabulary"))))}var H=function(){var e=Object(a.useState)(Array(0)),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){(function(e){return B.apply(this,arguments)})("https://gist.github.com/nilsso/bdf52edd7e207b9fb3ccdb74fd774973/raw/").then((function(e){return c(e.map((function(e){return x.from_json(e)})))}))}),[]),Object(a.useEffect)((function(){n.length>0&&console.log(n)}),[n]),r.a.createElement("div",{className:"App h-100"},r.a.createElement(V,{modules:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.ca96bb9b.chunk.js.map