(this.webpackJsonpjapanese=this.webpackJsonpjapanese||[]).push([[0],{49:function(e,a,t){e.exports=t(60)},55:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),c=t.n(r),o=t(32),u=t.n(o),s=t(6),m=t(38),i=t(44),d=t(66),g=t(67),f=t(68),b=t(69),h=t(77),E=t(45),v=t(78),p=t(70),y=t(76),j=t(73),k=t(74),w=t(71),O=t(75),F=t(72),N=t(39),_=t(29),M=t(33);function x(e){return console.assert(e.length>0),Math.floor(Math.random()*e.length)}function S(e){return e[x(e)]}var C=function(){function e(a,t){Object(_.a)(this,e),this.fragment_template=void 0,this.meaning_template=void 0,this.fragment_template=a,this.meaning_template=t}return Object(M.a)(e,[{key:"populate",value:function(e){var a,t=this.fragment_template.slice(),n=this.meaning_template.slice(),l=1,r=Object(N.a)(this.fragment_template.matchAll(/\{\{.+}}/g));try{for(r.s();!(a=r.n()).done;){var c=a.value;if(c){var o=c[0];if(o in e&&e[o].length>0){var u=S(e[o]),m=Object(s.a)(u,2),i=m[0],d=m[1];t=t.replace(o,i),n=n.replace(new RegExp("\\{\\{"+l+"}}","g"),d)}}l+=1}}catch(g){r.e(g)}finally{r.f()}return[t,n]}}]),e}(),V=function e(a,t,n){Object(_.a)(this,e),this.enabled=void 0,this.fragments=void 0,this.vocabulary=void 0,this.enabled=a,this.fragments=t,this.vocabulary=n},T=function(){function e(a,t,n){Object(_.a)(this,e),this.name=void 0,this.fragments=void 0,this.vocabulary=void 0,this.name=a,this.fragments=t,this.vocabulary=n}return Object(M.a)(e,[{key:"random_with_vocabulary",value:function(e){return this.fragments.length>0?S(this.fragments).populate(e):["...","..."]}},{key:"random",value:function(){return this.random_with_vocabulary(this.vocabulary)}}],[{key:"empty",value:function(){return new e("Empty",[],{})}},{key:"from_json",value:function(a){return new e(a.name,a.fragments.map((function(e){var a=Object(s.a)(e,2),t=a[0],n=a[1];return new C(t,n)})),a.vocabulary)}},{key:"join",value:function(a,t){var n=new e("Joined",[],{});return a.forEach((function(e,a){if(t.enabled[a]&&(t.fragments[a]&&(n.fragments=n.fragments.concat(e.fragments)),t.vocabulary[a]))for(var l=0,r=Object.entries(e.vocabulary);l<r.length;l++){var c=Object(s.a)(r[l],2),o=c[0],u=c[1];o in n.vocabulary?n.vocabulary[o]=n.vocabulary[o].concat(u):n.vocabulary[o]=u}})),n}}]),e}(),I=(t(55),function(e,a){return Array(e).fill(a)}),A=function(e,a,t){var n=Object(i.a)(e);return n[a]=t,n};function H(){return(H=Object(m.a)(u.a.mark((function e(a){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a).then((function(e){return e.json()})).then((function(e){return t=e})).catch((function(e){return alert("Invalid source URL\n"+e)}));case 2:if(!t){e.next=6;break}return e.abrupt("return",t);case 6:return e.abrupt("return",[]);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){var a=[e.source,e.setSource],t=a[0],r=a[1],c=Object(n.useState)(t),o=Object(s.a)(c,2),u=o[0],m=o[1];return l.a.createElement(g.a,null,l.a.createElement(f.a,{className:"component"},l.a.createElement(b.a,null,l.a.createElement(b.a.Prepend,null,l.a.createElement(b.a.Text,null,"Module Source")),l.a.createElement(h.a,{defaultValue:u,onChange:function(e){return m(e.target.value)}}),l.a.createElement(b.a.Append,null,l.a.createElement(E.a,{variant:"outline-secondary",onClick:function(){return r(u)}},"Load")))))}function G(e){var a=e.joined,t=e.enabledMask,r=Object(n.useState)("..."),c=Object(s.a)(r,2),o=c[0],u=c[1],m=Object(n.useState)(""),i=Object(s.a)(m,2),d=i[0],g=i[1],b=Object(n.useState)("..."),h=Object(s.a)(b,2),O=h[0],F=h[1],N=Object(n.useState)(!1),_=Object(s.a)(N,2),M=_[0],x=_[1],S=function(){return t.some((function(e){return e}))},C=l.a.createElement(v.a,{id:"help-popover"},l.a.createElement(v.a.Title,{as:"h3"},"Language Fragment Generator"),l.a.createElement(v.a.Content,null,l.a.createElement("p",null,"Language modules are like individual lessons of a language class, where each module contains a list of ",l.a.createElement("strong",null,"fragments")," and ",l.a.createElement("strong",null,"vocabulary"),". The list of language modules can be found below, each with an ",l.a.createElement("span",{className:"text-primary"},"Enable")," button to enable the module, a ",l.a.createElement("span",{className:"text-secondary"},"Fragments")," button to enable the fragments of that module, and a ",l.a.createElement("span",{className:"text-secondary"},"Vocabulary")," button to enable the vocabulary of that module. The ",l.a.createElement("span",{className:"primary"},"All")," button will enable all of the modules, and the ",l.a.createElement("span",{className:"danger"},"None")," button will disable them all."),l.a.createElement("p",null,"Fragments can be entire sentences, or can contain ",l.a.createElement("strong",null,"placeholders")," that will be substituted upon generation. For example, a fragment containing the ",l.a.createElement("code",null,"{{noun}}")," placeholder would have a random noun inserted where the placeholder is."),l.a.createElement("p",null,"With one or more modules ",l.a.createElement("strong",null,"enabled"),", clicking the ",l.a.createElement("span",{className:"text-primary"},"Generate")," button generates a ",l.a.createElement("strong",null,"populated")," fragment by first randomly selecting a fragment from any of the modules with fragments enabled, and then populating the fragment with randomly selected vocabulary from any of the language modules with vocabulary enabled."),l.a.createElement("p",null,"Clicking the ",l.a.createElement("span",{className:"text-success"},"Reveal")," button will show the meaning of what was generated, and toggling on the ",l.a.createElement("span",{className:"text-secondary"},"Swap")," button will instead first display the meaning so that revealing will show the populated fragment second."))),V=l.a.createElement(p.a,{id:"generator-buttons-tooltip",className:"tooltip-danger"},"Enable at least one module");return l.a.createElement(f.a,{className:"component"},l.a.createElement(y.a,null,l.a.createElement(y.a.Header,null,l.a.createElement("span",null,"Generator"),l.a.createElement(j.a,{trigger:"click",placement:"bottom",overlay:C},l.a.createElement(E.a,{variant:"info"},"Help"))),l.a.createElement(k.a,{variant:"flush"},l.a.createElement(k.a.Item,null,l.a.createElement("p",null,o)),l.a.createElement(k.a.Item,null,l.a.createElement("p",null,O)),l.a.createElement(j.a,{placement:"top",show:!S(),overlay:V},l.a.createElement(w.a,{id:"generator-buttons"},l.a.createElement(E.a,{disabled:!S(),onClick:function(){var e=a.random(),t=Object(s.a)(e,2),n=t[0],l=t[1];if(n){var r=M?[l,n]:[n,l],c=Object(s.a)(r,2);n=c[0],l=c[1],F("..."),u(n),g(l)}}},"Generate"),l.a.createElement(E.a,{variant:"success",disabled:!S(),onClick:function(){return F(d)}},"Reveal"),l.a.createElement(E.a,{active:M,variant:"outline-secondary",disabled:!S(),onClick:function(){return x(!M)}},"Swap"))))))}function K(e){var a=e.modules,t=[e.enabledMask,e.setEnabledMask],n=t[0],r=t[1],c=[e.fragmentMask,e.setFragmentMask],o=c[0],u=c[1],s=[e.vocabularyMask,e.setVocabularyMask],m=s[0],i=s[1],d=function(e){r(I(a.length,e))},g=a.map((function(e,a){return l.a.createElement(L,{key:a,lang_module:e,enabledFlag:n[a],fragmentFlag:o[a],vocabularyFlag:m[a],setEnabledFlag:function(e){return r(A(n,a,e))},setFragmentFlag:function(e){return u(A(o,a,e))},setVocabularyFlag:function(e){return i(A(m,a,e))}})}));return l.a.createElement(f.a,{className:"component"},l.a.createElement(y.a,null,l.a.createElement(y.a.Header,null,l.a.createElement("span",null,"Modules"),l.a.createElement(E.a,{variant:"primary",onClick:function(){return d(!0)}},"All"),l.a.createElement(E.a,{variant:"danger",onClick:function(){return d(!1)}},"None")),l.a.createElement(k.a,{variant:"flush"},l.a.createElement(k.a.Item,null,l.a.createElement("div",{id:"module-list"},g)))))}function L(e){var a=e.lang_module,t=[e.enabledFlag,e.setEnabledFlag],n=t[0],r=t[1],c=[e.fragmentFlag,e.setFragmentFlag],o=c[0],u=c[1],s=[e.vocabularyFlag,e.setVocabularyFlag],m=s[0],i=s[1],d=!!o,g=!!m;return l.a.createElement(O.a,{className:"module"},l.a.createElement(y.a,null,l.a.createElement(y.a.Header,null,a.name),l.a.createElement(y.a.Body,{id:"module-control"},l.a.createElement(w.a,{toggle:!0,className:"module-controls"},l.a.createElement(F.a,{type:"checkbox",variant:"outline-primary",size:"sm",value:0,checked:n,onChange:function(e){return r(e.currentTarget.checked)}},"Enable"),l.a.createElement(F.a,{type:"checkbox",variant:"outline-secondary",size:"sm",value:1,checked:o,disabled:d&&!n,onChange:function(e){return u(e.currentTarget.checked)}},"Fragments"),l.a.createElement(F.a,{type:"checkbox",variant:"outline-secondary",size:"sm",value:2,checked:m,disabled:g&&!n,onChange:function(e){return i(e.currentTarget.checked)}},"Vocabulary")))),l.a.createElement(y.a,null,l.a.createElement(R,{lang_module:a}),l.a.createElement(z,{lang_module:a})))}function R(e){var a=e.lang_module.fragments.map((function(e,a){return l.a.createElement(g.a,{key:a,className:"module-content-item"},l.a.createElement(f.a,null,e.fragment_template),l.a.createElement(f.a,null,e.meaning_template))}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a.Toggle,{as:y.a.Header,className:"small module-contents-header",variant:"link",eventKey:"0"},"View Fragments"),l.a.createElement(O.a.Collapse,{eventKey:"0"},l.a.createElement(y.a.Body,null,l.a.createElement(y.a,{className:"module-content"},l.a.createElement(d.a,{fluid:!0},a)))))}function z(e){var a=e.lang_module,t=Object.entries(a.vocabulary).map((function(e,a){var t=Object(s.a)(e,2),n=t[0],r=t[1];return l.a.createElement(l.a.Fragment,{key:a},l.a.createElement(k.a.Item,{variant:"secondary"},n),l.a.createElement(k.a.Item,{className:"vocabulary"},l.a.createElement(d.a,null,function(e){return e.map((function(e,a){var t=Object(s.a)(e,2),n=t[0],r=t[1];return l.a.createElement(g.a,{key:a,className:"module-content-item"},l.a.createElement(f.a,null,n),l.a.createElement(f.a,null,r))}))}(r))))}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a.Toggle,{as:y.a.Header,className:"small module-contents-header",variant:"link",eventKey:"1"},"View Vocabulary"),l.a.createElement(O.a.Collapse,{eventKey:"1"},l.a.createElement(y.a.Body,null,l.a.createElement(y.a,{className:"module-content"},l.a.createElement(k.a,{variant:"flush"},t)))))}var J=function(){var e=Object(n.useState)("https://raw.githubusercontent.com/nilsso/nilsso.github.io/code/static/apps/lang_modules/japanese_modules.json"),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(Array(0)),o=Object(s.a)(c,2),u=o[0],m=o[1],i=Object(n.useState)(T.empty()),f=Object(s.a)(i,2),b=f[0],h=f[1],E=Object(n.useState)(I(0,!1)),v=Object(s.a)(E,2),p=v[0],y=v[1],j=Object(n.useState)(I(0,!0)),k=Object(s.a)(j,2),w=k[0],O=k[1],F=Object(n.useState)(I(0,!0)),N=Object(s.a)(F,2),_=N[0],M=N[1];return Object(n.useEffect)((function(){(function(e){return H.apply(this,arguments)})(t).then((function(e){return m(e.map((function(e){return T.from_json(e)})))}))}),[t]),Object(n.useEffect)((function(){y(I(u.length,!1)),O(I(u.length,!0)),M(I(u.length,!0))}),[u]),Object(n.useEffect)((function(){u.length>0&&h(T.join(u,new V(p,w,_)))}),[u,p,w,_]),l.a.createElement(d.a,null,l.a.createElement(g.a,null,l.a.createElement(G,{joined:b,enabledMask:p}),l.a.createElement(K,{modules:u,enabledMask:p,setEnabledMask:y,fragmentMask:w,setFragmentMask:O,vocabularyMask:_,setVocabularyMask:M})),l.a.createElement(B,{source:t,setSource:r}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.e4bf797a.chunk.js.map