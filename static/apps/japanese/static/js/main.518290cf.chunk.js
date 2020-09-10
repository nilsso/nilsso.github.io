(this.webpackJsonpjapanese=this.webpackJsonpjapanese||[]).push([[0],{50:function(e,a,t){e.exports=t(61)},56:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),c=t.n(l),o=t(35),i=t.n(o),u=t(6),s=t(41),m=t(72),d=t(66),f=(t(56),t(31)),h=t(20);function g(e){return console.assert(e.length>0),Math.floor(Math.random()*e.length)}function v(e){return e[g(e)]}function b(e,a){return Array(e).fill(a)}function p(e,a,t){var n=Object(f.a)(e);return n[a]=t,n}var E=t(32),y=t(36),j=function(){function e(a,t){Object(E.a)(this,e),this.fragment_template=void 0,this.meaning_template=void 0,this.fragment_template=a,this.meaning_template=t}return Object(y.a)(e,[{key:"populate",value:function(e){var a,t=this.fragment_template.slice(),n=this.meaning_template.slice(),r=1,l=Object(h.a)(this.fragment_template.matchAll(/\{\{.+?}}/g));try{for(l.s();!(a=l.n()).done;){var c=a.value;if(c){var o=c[0];if(console.log(o),o in e&&e[o].length>0){var i=v(e[o]),s=Object(u.a)(i,2),m=s[0],d=s[1];console.log(m),t=t.replace(o,m),n=n.replace(new RegExp("\\{\\{"+r+"}}","g"),d)}}r+=1}}catch(f){l.e(f)}finally{l.f()}return[t,n]}}]),e}(),k=function e(a,t,n){Object(E.a)(this,e),this.enabled=void 0,this.fragments=void 0,this.vocabulary=void 0,this.enabled=a,this.fragments=t,this.vocabulary=n},w=function(){function e(a,t,n,r){Object(E.a)(this,e),this.name=void 0,this.fragments=void 0,this.vocabulary=void 0,this.indices=void 0,this.name=a,this.fragments=t,this.vocabulary=n,this.indices=r}return Object(y.a)(e,[{key:"random_with_vocabulary",value:function(e){if(this.fragments.length>0){var a=v(this.indices);return this.fragments[a].populate(e)}return["...","..."]}},{key:"random",value:function(){return this.random_with_vocabulary(this.vocabulary)}}],[{key:"empty",value:function(){return new e("Empty",[],{},[])}},{key:"unzip_fragments",value:function(e){var a,t=[],n=[],r=Object(h.a)(e);try{for(r.s();!(a=r.n()).done;){var l=a.value;t.push(new j(l[0],l[1])),l[2]?n.push(l[2]):n.push(1)}}catch(c){r.e(c)}finally{r.f()}return[t,n]}},{key:"from_json",value:function(a){var t=a.name;!function(e){var a,t=[],n=[],r=Object(h.a)(e);try{for(r.s();!(a=r.n()).done;){var l=Object(u.a)(a.value,2),c=l[0],o=l[1];t.push(c),n.push(o)}}catch(i){r.e(i)}finally{r.f()}}(a.fragments);var n=e.unzip_fragments(a.fragments),r=Object(u.a)(n,2),l=r[0],c=r[1],o=a.vocabulary,i=[];return c.forEach((function(e,a){Object(f.a)(Array(e).keys()).forEach((function(){i.push(a)}))})),new e(t,l,o,i)}},{key:"join",value:function(a,t){var n=e.empty();return a.forEach((function(e,a){if(t.enabled[a]){if(t.fragments[a]){var r=n.indices.length>0?n.indices[n.indices.length-1]:0;n.fragments=n.fragments.concat(e.fragments);var l,c=Object(h.a)(e.indices);try{for(c.s();!(l=c.n()).done;){var o=l.value;n.indices.push(o+r)}}catch(g){c.e(g)}finally{c.f()}}if(t.vocabulary[a])for(var i=0,s=Object.entries(e.vocabulary);i<s.length;i++){var m=Object(u.a)(s[i],2),d=m[0],f=m[1];d in n.vocabulary?n.vocabulary[d]=n.vocabulary[d].concat(f):n.vocabulary[d]=f}}})),n}}]),e}(),O=t(67),F=t(68),_=t(78),S=t(46);function M(e){var a=[e.source,e.setSource],t=a[0],l=a[1],c=Object(n.useState)(t),o=Object(u.a)(c,2),i=o[0],s=o[1];return r.a.createElement(d.a,null,r.a.createElement(O.a,{className:"component"},r.a.createElement(F.a,null,r.a.createElement(F.a.Prepend,null,r.a.createElement(F.a.Text,null,"Module Source")),r.a.createElement(_.a,{defaultValue:i,onChange:function(e){return s(e.target.value)}}),r.a.createElement(F.a.Append,null,r.a.createElement(S.a,{variant:"outline-secondary",onClick:function(){return l(i)}},"Load")))))}var C=t(79),N=t(69),A=t(70),x=t(77),T=t(74),V=t(75),W=t(71);function I(e){var a=e.joined,t=e.enabledMask,l=Object(n.useState)("..."),c=Object(u.a)(l,2),o=c[0],i=c[1],s=Object(n.useState)(""),m=Object(u.a)(s,2),d=m[0],f=m[1],h=Object(n.useState)("..."),g=Object(u.a)(h,2),v=g[0],b=g[1],p=Object(n.useState)(!1),E=Object(u.a)(p,2),y=E[0],j=E[1],k=function(){return t.some((function(e){return e}))},w=r.a.createElement(C.a,{id:"help-popover"},r.a.createElement(C.a.Title,{as:"h3"},"Language Fragment Generator"),r.a.createElement(C.a.Content,null,r.a.createElement("p",null,"Language modules are like individual lessons of a language class, where each module contains a list of ",r.a.createElement("strong",null,"fragments")," and ",r.a.createElement("strong",null,"vocabulary"),". Under the card title ",r.a.createElement("strong",null,"Modules")," is the list of available language modules, each with an ",r.a.createElement(N.a,{variant:"primary"},"Enable")," button to enable the module, a ",r.a.createElement(N.a,{variant:"secondary"},"Fragments")," button to enable the fragments of that module, and a ",r.a.createElement(N.a,{variant:"secondary"},"Vocabulary")," button to enable the vocabulary of that module. The ",r.a.createElement(N.a,{variant:"primary"},"All")," button will enable all of the modules, and the ",r.a.createElement(N.a,{variant:"danger"},"None")," button will disable them all."),r.a.createElement("p",null,"Fragments can be entire sentences, or can contain ",r.a.createElement("strong",null,"placeholders")," that will be substituted upon generation. For example, a fragment containing the ",r.a.createElement("code",null,"{{noun}}")," placeholder would have a random noun inserted where the placeholder is."),r.a.createElement("p",null,"With one or more modules ",r.a.createElement("strong",null,"enabled"),", clicking the ",r.a.createElement(N.a,{variant:"primary"},"Generate")," button generates a ",r.a.createElement("strong",null,"populated")," fragment by first randomly selecting a fragment from any of the modules with fragments enabled, and then populating the fragment with randomly selected vocabulary from any of the language modules with vocabulary enabled."),r.a.createElement("p",null,"Clicking the ",r.a.createElement(N.a,{variant:"success"},"Reveal")," button will show the meaning of what was generated, and toggling on the ",r.a.createElement(N.a,{variant:"secondary"},"Swap")," button will instead first display the meaning so that revealing will show the populated fragment second."))),F=r.a.createElement(A.a,{id:"generator-buttons-tooltip",className:"tooltip-danger"},"Enable at least one module"),_=function(){var e=a.random(),t=Object(u.a)(e,2),n=t[0],r=t[1];if(n){var l=y?[r,n]:[n,r],c=Object(u.a)(l,2);n=c[0],r=c[1],b("..."),i(n),f(r)}};return r.a.createElement(O.a,{className:"component"},r.a.createElement(x.a,null,r.a.createElement(x.a.Header,null,r.a.createElement("span",null,"Generator"),r.a.createElement(T.a,{trigger:"click",placement:"bottom",overlay:w},r.a.createElement(S.a,{variant:"info"},"Help"))),r.a.createElement(V.a,{variant:"flush"},r.a.createElement(V.a.Item,{id:"generated"},o),r.a.createElement(V.a.Item,{id:"hidden"},v),r.a.createElement(T.a,{placement:"top",show:!k(),overlay:F},r.a.createElement(W.a,{id:"generator-buttons"},r.a.createElement(S.a,{disabled:!k(),onKeyPress:_,onClick:_},"Generate"),r.a.createElement(S.a,{variant:"success",disabled:!k(),onClick:function(){return b(d)}},"Reveal"),r.a.createElement(S.a,{variant:"outline-secondary",active:y,disabled:!k(),onClick:function(){return j(!y)}},"Swap"))))))}var R=t(76),H=t(73);function L(e){var a=e.lang_module.fragments.map((function(e,a){return r.a.createElement(d.a,{key:a},r.a.createElement(O.a,null,e.fragment_template),r.a.createElement(O.a,null,e.meaning_template))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a.Toggle,{as:x.a.Header,className:"small content-header",variant:"link",eventKey:"0"},"View Fragments"),r.a.createElement(R.a.Collapse,{eventKey:"0"},r.a.createElement(x.a.Body,null,r.a.createElement(x.a,{className:"content"},r.a.createElement(m.a,{fluid:!0},a)))))}function z(e){var a=e.lang_module,t=Object.entries(a.vocabulary).map((function(e,a){var t=Object(u.a)(e,2),n=t[0],l=t[1];return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement(V.a.Item,{variant:"secondary",className:"vocabulary-header"},n),r.a.createElement(V.a.Item,null,r.a.createElement(m.a,null,function(e){return e.map((function(e,a){var t=Object(u.a)(e,2),n=t[0],l=t[1];return r.a.createElement(d.a,{key:a},r.a.createElement(O.a,null,n),r.a.createElement(O.a,null,l))}))}(l))))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a.Toggle,{as:x.a.Header,className:"small content-header",variant:"link",eventKey:"1"},"View Vocabulary"),r.a.createElement(R.a.Collapse,{eventKey:"1"},r.a.createElement(x.a.Body,null,r.a.createElement(x.a,{className:"content"},r.a.createElement(V.a,{variant:"flush"},t)))))}function B(e){var a=e.lang_module,t=[e.enabledFlag,e.setEnabledFlag],n=t[0],l=t[1],c=[e.fragmentFlag,e.setFragmentFlag],o=c[0],i=c[1],u=[e.vocabFlag,e.setVocabFlag],s=u[0],m=u[1],d=!!o,f=!!s;return r.a.createElement(R.a,{className:"module"},r.a.createElement(x.a,null,r.a.createElement(x.a.Header,null,a.name),r.a.createElement(x.a.Body,{id:"module-control"},r.a.createElement(W.a,{toggle:!0,className:"module-controls"},r.a.createElement(H.a,{type:"checkbox",variant:"outline-primary",size:"sm",value:0,checked:n,onChange:function(e){return l(e.currentTarget.checked)}},"Enable"),r.a.createElement(H.a,{type:"checkbox",variant:"outline-secondary",size:"sm",value:1,checked:o,disabled:d&&!n,onChange:function(e){return i(e.currentTarget.checked)}},"Fragments"),r.a.createElement(H.a,{type:"checkbox",variant:"outline-secondary",size:"sm",value:2,checked:s,disabled:f&&!n,onChange:function(e){return m(e.currentTarget.checked)}},"Vocabulary")))),r.a.createElement(x.a,null,r.a.createElement(L,{lang_module:a}),r.a.createElement(z,{lang_module:a})))}function K(e){var a=e.modules,t=[e.enabledMask,e.setEnabledMask],n=t[0],l=t[1],c=[e.fragmentMask,e.setFragmentMask],o=c[0],i=c[1],u=[e.vocabMask,e.setVocabMask],s=u[0],m=u[1],d=function(e){l(b(a.length,e))},f=a.map((function(e,a){return r.a.createElement(B,{key:a,lang_module:e,enabledFlag:n[a],setEnabledFlag:function(e){return l(p(n,a,e))},setFragmentFlag:function(e){return i(p(o,a,e))},fragmentFlag:o[a],vocabFlag:s[a],setVocabFlag:function(e){return m(p(s,a,e))}})}));return r.a.createElement(O.a,{className:"component"},r.a.createElement(x.a,null,r.a.createElement(x.a.Header,null,r.a.createElement("span",null,"Modules"),r.a.createElement(S.a,{variant:"primary",onClick:function(){return d(!0)}},"All"),r.a.createElement(S.a,{variant:"danger",onClick:function(){return d(!1)}},"None")),r.a.createElement(V.a,{variant:"flush"},r.a.createElement(V.a.Item,null,r.a.createElement("div",{id:"module-list"},f)))))}function U(){return(U=Object(s.a)(i.a.mark((function e(a){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a).then((function(e){return e.json()})).then((function(e){return t=e})).catch((function(e){return alert("Invalid source URL\n"+e)}));case 2:if(!t){e.next=6;break}return e.abrupt("return",t);case 6:return e.abrupt("return",[]);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var G=function(){var e=Object(n.useState)("https://raw.githubusercontent.com/nilsso/nilsso.github.io/code/static/apps/lang_modules/japanese_modules.json"),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(Array(0)),o=Object(u.a)(c,2),i=o[0],s=o[1],f=Object(n.useState)(w.empty()),h=Object(u.a)(f,2),g=h[0],v=h[1],p=Object(n.useState)(b(0,!1)),E=Object(u.a)(p,2),y=E[0],j=E[1],O=Object(n.useState)(b(0,!0)),F=Object(u.a)(O,2),_=F[0],S=F[1],C=Object(n.useState)(b(0,!0)),N=Object(u.a)(C,2),A=N[0],x=N[1];return Object(n.useEffect)((function(){(function(e){return U.apply(this,arguments)})(t).then((function(e){return s(e.map((function(e){return w.from_json(e)})))}))}),[t]),Object(n.useEffect)((function(){j(b(i.length,!1)),S(b(i.length,!0)),x(b(i.length,!0))}),[i]),Object(n.useEffect)((function(){i.length>0&&v(w.join(i,new k(y,_,A)))}),[i,y,_,A]),r.a.createElement(m.a,null,r.a.createElement(d.a,null,r.a.createElement(I,{joined:g,enabledMask:y}),r.a.createElement(K,{modules:i,enabledMask:y,setEnabledMask:j,fragmentMask:_,setFragmentMask:S,vocabMask:A,setVocabMask:x})),r.a.createElement(M,{source:t,setSource:l}))},P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(G,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/apps/japanese",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/apps/japanese","/service-worker.js");P?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):J(a,e)}))}}()}},[[50,1,2]]]);
//# sourceMappingURL=main.518290cf.chunk.js.map