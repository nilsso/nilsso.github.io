(function(e){function n(n){for(var a,i,s=n[0],l=n[1],c=n[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);m&&m(n);while(d.length)d.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,i=1;i<t.length;i++){var s=t[i];0!==r[s]&&(a=!1)}a&&(o.splice(n--,1),e=c(c.s=t[0]))}return e}var a={},r={app:0},o=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2273c8f0":"fbdde5eb"}[e]+".js"}var s={};var l={9490:function(){return{}}};function c(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var a=new Promise((function(n,a){t=r[e]=[n,a]}));n.push(t[2]=a);var o,p=document.createElement("script");p.charset="utf-8",p.timeout=120,c.nc&&p.setAttribute("nonce",c.nc),p.src=i(e);var d=new Error;o=function(n){p.onerror=p.onload=null,clearTimeout(u);var t=r[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,t[1](d)}r[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:p})}),12e4);p.onerror=p.onload=o,document.head.appendChild(p)}var m={"chunk-2273c8f0":["9490"]}[e]||[];return m.forEach((function(e){var t=s[e];if(t)n.push(t);else{var a,r=l[e](),o=fetch(c.p+""+{9490:"ce53610bb3b6af16b6a5"}[e]+".module.wasm");if(r instanceof Promise&&"function"===typeof WebAssembly.compileStreaming)a=Promise.all([WebAssembly.compileStreaming(o),r]).then((function(e){return WebAssembly.instantiate(e[0],e[1])}));else if("function"===typeof WebAssembly.instantiateStreaming)a=WebAssembly.instantiateStreaming(o,r);else{var i=o.then((function(e){return e.arrayBuffer()}));a=i.then((function(e){return WebAssembly.instantiate(e,r)}))}n.push(s[e]=a.then((function(n){return c.w[e]=(n.instance||n).exports})))}})),Promise.all(n)},c.m=e,c.c=a,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)c.d(t,a,function(n){return e[n]}.bind(null,a));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/apps/myps/",c.oe=function(e){throw console.error(e),e},c.w={};var p=window["webpackJsonp"]=window["webpackJsonp"]||[],d=p.push.bind(p);p.push=n,p=p.slice();for(var u=0;u<p.length;u++)n(p[u]);var m=d;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0b61":function(e,n,t){"use strict";t("1162")},1162:function(e,n,t){},"41a3":function(e,n,t){"use strict";t("4e64")},"4e64":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e623"),t("e379"),t("5dc8"),t("37e1");var a=t("7a23"),r={id:"container"};function o(e,n,t,o,i,s){var l=Object(a["resolveComponent"])("tab"),c=Object(a["resolveComponent"])("tabs"),p=Object(a["resolveComponent"])("Editor"),d=Object(a["resolveComponent"])("tab-panel"),u=Object(a["resolveComponent"])("AboutGuide"),m=Object(a["resolveComponent"])("tab-panels");return Object(a["openBlock"])(),Object(a["createBlock"])("div",r,[Object(a["createVNode"])(c,{modelValue:e.selectedTab,"onUpdate:modelValue":n[1]||(n[1]=function(n){return e.selectedTab=n})},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(l,{val:"editor",label:"Editor",class:"tab"}),Object(a["createVNode"])(l,{val:"about",label:"About/Guide",class:"tab"})]})),_:1},8,["modelValue"]),Object(a["createVNode"])(m,{modelValue:e.selectedTab,"onUpdate:modelValue":n[2]||(n[2]=function(n){return e.selectedTab=n})},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(d,{val:"editor"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(p,{class:["editor"==e.selectedTab?"":"hidden"]},null,8,["class"])]})),_:1}),Object(a["createVNode"])(d,{val:"about"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(u,{class:["about"==e.selectedTab?"":"hidden"]},null,8,["class"])]})),_:1})]})),_:1},8,["modelValue"])])}var i=t("5530"),s=t("f4be"),l={id:"editor-container"},c={id:"myps"},p={id:"mips",readonly:""},d={id:"optimizer-options",type:"none"};function u(e,n,t,r,o,i){return Object(a["openBlock"])(),Object(a["createBlock"])("div",l,[Object(a["createVNode"])("div",c,[Object(a["withDirectives"])(Object(a["createVNode"])("textarea",{id:"myps-editor","onUpdate:modelValue":n[1]||(n[1]=function(e){return o.mypsSource=e}),placeholder:"MYPS input",rows:"15",class:i.editorClass,onKeydown:n[2]||(n[2]=Object(a["withKeys"])(Object(a["withModifiers"])((function(){return i.compile&&i.compile.apply(i,arguments)}),["shift","prevent"]),["enter"]))},null,34),[[a["vModelText"],o.mypsSource]])]),Object(a["createVNode"])("div",p,[Object(a["withDirectives"])(Object(a["createVNode"])("textarea",{id:"mips-output","onUpdate:modelValue":n[3]||(n[3]=function(e){return o.mipsSource=e}),placeholder:"MIPS output",rows:"15",class:i.editorClass,readonly:""},null,2),[[a["vModelText"],o.mipsSource]]),Object(a["createVNode"])("div",null,[Object(a["createVNode"])("button",{onClick:n[4]||(n[4]=function(){return i.compile&&i.compile.apply(i,arguments)})}," Compile "),Object(a["createVNode"])("button",{onClick:n[5]||(n[5]=function(){return i.clear&&i.clear.apply(i,arguments)})}," Clear "),Object(a["createVNode"])("ul",d,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(o.optimizerOptions,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{key:t,onChange:n[6]||(n[6]=function(){return i.saveHash&&i.saveHash.apply(i,arguments)})},[Object(a["withDirectives"])(Object(a["createVNode"])("input",{id:e.id,"onUpdate:modelValue":function(n){return e.value=n},type:"checkbox"},null,8,["id","onUpdate:modelValue"]),[[a["vModelCheckbox"],e.value]]),Object(a["createVNode"])("label",{for:e.id},Object(a["toDisplayString"])(e.label),9,["for"])],32)})),128))])])])])}var m=t("1da1"),h=t("3835"),b=(t("96cf"),t("d3b7"),t("3ca3"),t("ddb0"),t("2ef0")),f=t.n(b),v=[["optimizeRegisters","Optimize Registers",!0],["removeComments","Remove comments",!1],["removeEmpty","Remove empty",!1],["removeEmptyComments","Remove empty comments",!1],["replaceAliasReg","Replace register aliases",!1],["replaceAliasDev","Replace device aliases",!1],["replaceDefines","Replace definitions",!1],["replaceTags","Replace line tags",!1]],g={Okay:0,Warning:1,Error:2},y=500,w={name:"Editor",data:function(){return{wasm:t.e("chunk-2273c8f0").then(t.bind(null,"a549")),optimizerOptions:v.reduce((function(e,n){var t=Object(h["a"])(n,3),a=t[0],r=t[1],o=t[2];return e[a]={id:a,label:r,value:o},e}),{}),mypsSource:"",mipsSource:"",editorState:g.Okay}},computed:{editorClass:function(){return{error:this.editorState==g.Error,okay:this.editorState==g.Okay,warning:this.editorState==g.Warning}}},watch:{mypsSource:f.a.debounce((function(){this.saveHash()}),y)},mounted:function(){this.loadHash()},methods:{compile:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.debug('compile: "'+e.mypsSource+'"'),n.prev=1,n.next=4,e.wasm;case 4:t=n.sent.translate(e.mypsSource,e.optimizerOptions.optimizeRegisters.value,e.optimizerOptions.removeComments.value,e.optimizerOptions.removeEmpty.value,e.optimizerOptions.removeEmptyComments.value,e.optimizerOptions.replaceAliasReg.value,e.optimizerOptions.replaceAliasDev.value,e.optimizerOptions.replaceDefines.value,e.optimizerOptions.replaceTags.value),e.editorState=g.Okay,e.mipsSource=t,e.saveHash(!1),n.next=15;break;case 10:n.prev=10,n.t0=n["catch"](1),e.editorState=g.Error,e.mipsSource="",console.debug("error!");case 15:case"end":return n.stop()}}),n,null,[[1,10]])})))()},clear:function(){this.mypsSource="",this.mipsSource="",this.saveHash(!0)},saveHash:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];console.debug("saveHash");var n={mypsSource:this.mypsSource,mipsSource:e?"":this.mipsSource,optimizeRegisters:this.optimizerOptions.optimizeRegisters.value,removeComments:this.optimizerOptions.removeComments.value,removeEmpty:this.optimizerOptions.removeEmpty.value,removeEmptyComments:this.optimizerOptions.removeEmptyComments.value,replaceAliasReg:this.optimizerOptions.replaceAliasReg.value,replaceAliasDev:this.optimizerOptions.replaceAliasDev.value,replaceDefines:this.optimizerOptions.replaceDefines.value,replaceTags:this.optimizerOptions.replaceTags.value,editorState:this.editorState},t=JSON.stringify(n),a=btoa(t);window.location.hash=a},loadHash:function(){var e=window.location.hash.substring(1);if(e){console.debug("loadHash");var n=atob(e),t=JSON.parse(n);this.mypsSource=t.mypsSource,this.mipsSource=t.mipsSource,this.optimizerOptions.optimizeRegisters.value=t.optimizeRegisters,this.optimizerOptions.removeComments.value=t.removeComments,this.optimizerOptions.removeEmpty.value=t.removeEmpty,this.optimizerOptions.removeEmptyComments.value=t.removeEmptyComments,this.optimizerOptions.replaceAliasReg.value=t.replaceAliasReg,this.optimizerOptions.replaceAliasDev.value=t.replaceAliasDev,this.optimizerOptions.replaceDefines.value=t.replaceDefines,this.optimizerOptions.replaceTags.value=t.replaceTags,this.editorState=t.editorState}}}};t("41a3");w.render=u;var S=w,O={id:"guide-container"};function j(e,n,t,r,o,i){var s=Object(a["resolveComponent"])("Markdown");return Object(a["openBlock"])(),Object(a["createBlock"])("div",O,[n[1]||(Object(a["setBlockTracking"])(-1),n[1]=Object(a["createVNode"])(s,{toc:r.markdownToc,source:r.guideSrc,html:!0},null,8,["toc","source"]),Object(a["setBlockTracking"])(1),n[1])])}t("99af");var x=t("f03e"),k=t.n(x),P=(t("131f"),"About\n=====\n\n[[toc]]\n\n---\n\n## What is MYPS?\n\nMYPS is a custom DSL (domain specific language) I've created which borrows much of the grammar from\nPython and which can be compiled into optimized Stationeers MIPS assembly code.\n\nI decided to create MYPS from a desire to write more complicated programs for Stationeers without\nthe necessary tedium of manually optimizing the MIPS assembly code. That being said I really like\nMIPS, and I wouldn't have the in game language be anything else, but the challenge of manually\noptimizing register allocations and cramming down into 128 lines started to become too much for me.\nI looked for other compiler/transpiler projects and found a few, but wasn't particularly satisfied.\nIn particular, it seemed that no one had taken a swing at automatically optimizing register\nallocation; the one thing that I desired the most. So I decided to get down and learn some\nparser/lexer/compiler theory, and this project is the result.\n\nSpecifically, there are three parts to this project:\n1. a MIPS parser, lexer and optimizer\n2. a parser and lexer for my custom language MYPS, and\n3. a translator which maps the MYPS abstract syntax tree into a MIPS one, such that the MIPS\noptimizer can then do its work.\n\nAll are written as libraries in the Rust language, which I can then compile into a Wasm binary\nfor use in this Javascript Vue web application. All in all, it's been a lot to learn, I'm\nvery satisfied with the results, and yet there's plenty more to be improved.\n\n---\n\n## What this app does\n\nWithin the editor tab, provide a source MYPS program and click compile (or hit shift-enter) to get\nback the translated MIPS source code for the MYPS input.\nVarious translation optimizations are included at below the editor. These selctions as well as the\ninput and output source code are saved in the URL hash for sharing or reopenning later.\n\n**As of writing there is not proper error management within the library itself, so the editor is\nentirely lacking in reporting what is going wrong. At the very least you can *see* that something\nwent wrong, but I'll eventually include propper error messages on top of proper text editing areas\n(both are no-frills text-areas for now).**\n\n---\n\n## Grammar Guide\n\nMYPS preserves much of the grammar of Python, but not everything can be the same when the purpose\nto to be translated into assembly as accurately as possible.\n\n### Variables, lifetimes, and register allocation\n\nVariables are just like in Python; defined with any assignment statement:\n\n```python\na = 1\n```\n\nHowever register names like `r0` are forbidden. Why? Because registers are *automatically allocated*\nwhen the MYPS is compiled.\n\n```mips\nmove r0 = 1 # a = 1\n```\n\nAnd not only is allocation automated but *optimized*.\n\n```python\na = 1\nb = 2\nc = a + b\n```\n```mips\nmove r0 = 1  # a = 1\nmove r1 = 2  # b = 2\nadd r0 r0 r1 # c = a + b\n```\n\nWhat's happening here?\nOn line 1 the allocator assigns the register `r0` for `a`, and on line 2 `r1` for `b`.\nEach variable has a *lifetime* which is as long as the last expression to use the variable.\nIn this example, `a` and `b` need to live as long as line 3 where we have the expression `a + b`.\nThe allocator is allowed to reuse the registers of any *dead* variables, and in this example it\nchooses `r0` for `c` since the lifetime of `a` ends on the same line as the new lifetime of `c`.\nWhat the allocator sees looks something like this graph:\n\n```text\n  0  r0 : 0 - 2\n  1  r1 : | 1 2\n  2  r2 : | | 2\n```\n\nOne caveat is that a lifetime ends as soon as the variable is re-assigned.\nThis also has the effect of reusing the same register, as we'll see below.\n\nAlso note that the order in which variables are defined/initialized matters.\nFor example, the following code fails to compile because `a` doesn't exist until after its use.\n\n```python\nb = a / 2\na = 5\n```\n\n(The main reason that this happens is because `a` has yet to be assigned a register by the\nallocator. For a method of circumventing this problem see the [fixed variables](#fixed-variables)\nsection.)\n\n### Operator expressions\n\nMost [Python operators][python-ops] are implemented.\nSpecifically the binary operators\n`+`, `-`, `*`, `/`, `%`, `^`, `and`, `or`, `xor`, `== `, `>= `, `>`, `<= `, `<` and `!= `;\nand the unary operators\n`-`, `!`\nare all preserved. Operator precedence is also the same as what you would expect.\n\nNote that the binary `a^b` (raise `a` to the power `b`) isn't actually available as a single\ninstruction in MIPS, and instead the translator inserts change of base instructions to compensate.\nSimilarly, unary operators `-a` and `!a` become `0 - a` and `nor a a a` respectively.\n\n```python\na = 2\nb = -(a^4)\n```\n```mips\nmove r0 2\nlog r0 r0\nmul r0 4 r0\nexp r0 r0\nsub r0 0 r0\n```\n\n(Also note parentheses must enclose unary operations that are part of other expressions like\n`(-a)*b`, but like in the above example must enclose binary expressions that the unary operator\nprecedes. The former is more a grammar bug, and likely something I'll eventually fix.)\n\nAdditionally, MYPS supports the ternary operator by way of `select` in MIPS.\n\n```python\na = 1\nb = (a > 0) ? 2 : 3\n```\n```mips\nmove r0 1\nsgt r0 r0 1\nselect r0 r0 2 3\n```\n\n(And as with unary operators, expression arguments need to be enclosed.)\n\n[python-ops]: https://docs.python.org/3/reference/lexical_analysis.html#operators\n\n### Compound expressions\n\nSince MIPS can only do a single mathematical instruction per line, writing more complicated\nexpressions can be an absolute chore, especially when it comes to not overwriting values you need\nsomewhere later. However in MYPS we can write compound expressions and let the allocator do the\ntedious parts for us.\n\n```python\na = 1\nb = 2\nc = 3\nb = (a + b) / c\n```\n```mips\nmove r0 1    # a = 1\nmove r1 2    # b = 2\nmove r2 3    # c = 3\nadd r0 r0 r1 # (a + b)\ndiv r1 r0 r2 # b = (a + b) / c\n```\n\nBy analyzing the lifetimes of each variable, the allocator can correctly expand the compound\nexpression into single line instructions in a way that doesn't \"clobber\" any of the values that need\nto be alive further down. (Also note that `r1` is reused for `b` despite `r0` being available.)\n\n### Defines\n\nLike in MIPS, we can define constant values using the `def` prefix, with the added bonus that\ndefines in MYPS can be constant valued expressions, which the compiler will reduce to a value.\nAdditionally, the define line itself will be removed and all occurrences of if replaced accordingly,\nso as to save some lines.\n\n```python\ndef V = 1500 / 3\na = 600\nif a > V:\n    yield()\n```\n```mips\nmove r0 600\nbrle r0 500 2\nyield\n```\n\n(Note that definitions currently only support expressions of literal numbers;\neventually I'll fix this to allow definitions that are expressions of other definitions.)\n\n### Working with devices\n\nDevices in MYPS can be used referenced by `d?`, just like in MIPS, but also aliased in an identical\ngrammar to assigning to a variable.\n\n```python\nsensor = d0\n```\n```mips\nalias sensor d0\n```\n\nDevices can even be referenced indirectly with the grammar `d(x)`, where `x` can be a literal,\na define, a variable, or even an expression.\n\n**(Note that at the time of writing this feature doesn't quite work well enough—in particular\nisn't playing well with register optimization—and that I manually changed the output MIPS of the\nexample below to reflect what it *should* be. Planning on fixing this soon.)**\n\n```python\nfor i in (0:3):\n    d(i).On = d(i+3).Setting\n```\n```mips\nmove r0 0\nbrlt r0 3 6\nadd r1 r0 3\nl r1 dr1 Setting\ns dr0 On r1\nadd r0 r0 1\njr -5\n```\n\n(See the [blocks and control flow](#blocks-and-control-flow) section for the for-loop grammar.)\n\nReading logic parameters has the grammar `d?.Parameter`, slot parameters have `d?[Slot].Parameter`\nand reagent parameters have `d?{Parameter}.Reagent` (chosen to match the order of parameters of `l`,\n`ls` and `lr`). Writing to a logic parameter works just like assigning to a variable.\n\n```python\na = d0.Setting          # Setting logic parameter\nb = d0[0].Quantity      # Quantity slot parameter from slot 0\nc = d0{Required}.Copper # Required count of the Copper reagent\n\nd0.On = a + b + c\n```\n```mips\nl r0 d0 Setting\nls r1 d0 0 Quantity\nlr r2 d0 1 Copper\n\nadd r0 r0 r1\nadd r0 r0 r2\ns d0 On r0\n```\n\nSecondly, batch reading and writing has the grammar `Hash.all.Parameter` for batch writing, and\n`Hash.all.Parameter.Mode` for reading (where `Mode` is one of `Average`/`Avg`, `Sum`, `Min` or\n`Max`, or a corresponding number values). The hash can be provided as a literal, as a definition, or\neven as a variable.\n\n```python\ndef ObjectA = 123\nobjectB = 456\n\nObjectA.all.Setting = objectB.all.Setting.Average + 789.all.Setting.Sum\n```\n```mips\nmove r0 456\n\nlb r0 r0 Setting 0\nlb r1 789 Setting 1\nadd r0 r0 r1\nsb 123 Setting r0\n```\n\nAnd as this last example demonstrates, any of the reading grammars can be use directly within\nexpressions. For a *full* example, here is a complete two-axis sun tracking solar panel program\nusing these grammars:\n\n```python\nsensor = d0\n# provides a multiple of 90 offset to the horizontal\n# just to make setting up easier\noffsetDial = d1\n\ndef Normal     = -2045627372\ndef NormalDual = -539224550\ndef Heavy      = -934345724\ndef HeavyDual  = -1545574413\n\nloop: # loop:\n    yield()\n    h = sensor.Horizontal + (offsetDial.Setting * 90)\n    Normal    .all.Horizontal = h\n    NormalDual.all.Horizontal = h\n    Heavy     .all.Horizontal = h\n    HeavyDual .all.Horizontal = h\n    v = (75 - sensor.Vertical) / 1.5\n    Normal    .all.Vertical   = v\n    NormalDual.all.Vertical   = v\n    Heavy     .all.Vertical   = v\n    HeavyDual .all.Vertical   = v\n```\n```mips\nalias sensor d0\nalias offsetDial d1\nyield\nl r0 d0 Horizontal\nl r1 d1 Setting\nmul r1 r1 90\nadd r0 r0 r1\nsb -2045627372 Horizontal r0\nsb -539224550 Horizontal r0\nsb -934345724 Horizontal r0\nsb -1545574413 Horizontal r0\nl r0 d0 Vertical\nsub r0 75 r0\ndiv r0 r0 1.5\nsb -2045627372 Vertical r0\nsb -539224550 Vertical r0\nsb -934345724 Vertical r0\nsb -1545574413 Vertical r0\njr -16\n```\n\n### Compound assignment\n\nA grammar feature common to many languages, [Python included][python-aug-asn], is compound\nassignment. Specifically the operators `+= `, `-= `, `*= `, `/= ` and `%= ` are preserved.\n\n```python\na = 1\na *= a + 1\n```\n```mips\nmove r0 1    # a = 1\nadd r0 r0 1  # a + 1\nmul r0 r0 r0 # a *= a + 1 <-> a = a * (a + 1)\n```\n\n[python-aug-asn]: https://docs.python.org/3/reference/simple_stmts.html?highlight=add%20assign#augmented-assignment-statements\n\n### Functions\n\nFunctions cannot be defined in MYPS like they can in Python; this is too daunting of a task when\nit comes to considering how any particular function definition should be translated into assembly.\nHowever the grammar of function calls is preserved for many MIPS function-like instructions;\nany of which can be used in expressions.\n\nFunction  | Description\n:-------- | :--------------------------\n`abs(a)`  | Absolute value of `a`\n`acos(a)` | Inverse cosine of `a`\n`asin(a)` | Inverse sine of `a` if 0 ≤ `a` ≤ 1, else 0\n`atan(a)` | Inverse tangent of `a` if 0 ≤ `a` ≤ 1, else 0\n`ceil(a)` | Nearest integer ≥ `a` if 0 ≤ `a` ≤ 1, else 0\n`cos(a)`  | Cosine of `a`\n`dec(a)`  | Decimal part of `a` (implemented as `a-trunc(a)`)\n`exp(a)`  | Exponential function of `a`\n`floor(a)` | Nearest integer ≤ `a`\n`log(a,b)` | Logarithm of `a` to base `b` (implemented as `ln(a)/ln(b)`)\n`ln(a)`   | Logarithm of `a` to base *e*\n`max(a,b)` | Maximum of `a` and `b`\n`min(a,b)` | Minimum of `a` and `b`\n`rand()` | Random value in range (0,1)\n`round(a)` | Nearest integer to `a`\n`sin(a)`   | Sine of `a`\n`sqrt(a)` | Square-root of `a`\n`tan(a)` | Tangent of `a`\n`trunc(a)` | Integer part of `a`\n`peek()` | Return stack value `sp-1`\n`pop()` | Return stack value `sp-1`, then decrement `sp`\n`dns(d)` | 1 if device `d` not set, else 0\n`dse(d)` | 1 if device `d` set, else 0\n\n### Raw MIPS\n\nThere are plenty of things that MIPS can do that aren't possible using only Python grammar, such\nas arbitrary line jumps. To account for this, *any* MIPS instruction can be expressed like a\nPython function, with the caveat that each argument must be valid MIPS; so no compound expressions\nor function calls, but variables are fine.\n\n```python\na = 0\nb = 1\nj(10) # jump to line 10\nbltal(a, b, 20) # branch to line 20, storing next line in ra, if a < b\n```\n```mips\nmove r0 0\nmove r1 1\nj 10\nbltal r0 r1 20\n```\n\n### Blocks and control flow\n\nMost of Python's blocks and control flow grammar is preserved in MYPS, in particular the use of\nindents to denote a block. For now and by default these indents *must* be four spaces but are lexed\nexactly as they are in Python (I'll change this eventually to support configurable indent sizes).\n\nWe have **`if` `elif` `else` chains**\n\n```python\na = 0\nv = d0.Setting\nif v == 0:\n    a = 1\nelif v == 1:\n    a = 2\nelse:\n    a = 3\n```\n```mips\nmove r0 0\nl r1 d0 Setting\nbrnez r1 3\nmove r0 1\nj 9\nbrne r1 1 3\nmove r0 2\nj 9\nmove r0 3\n```\n\n**`while` loops**\n\n```python\ni = 10\nwhile i > 10:\n    i -= 1\n```\n```mips\nmove r0 10\nbrle r0 10 3\nsub r0 r0 1\njr -2\n```\n\nAnd **numerical `for` loops** (granted with some slightly modified grammar)\n\n```python\na = 1\nfor i in (0:10:1): # or simply (0:10)\n    a *= 2\n```\n```mips\nmove r0 1    # a = 1\nmove r1 0    # i = 0\nbrlt r1 10 4 # while i < 10\nmul r0 r0 2\nadd r1 r1 1  # i += 1\njr -3\n```\n\nNote that for the range `(s:e[:step])`, any part can itself be an expression.\n\n```python\na = 1\nfor i in (a:a*5:a):\n    a *= 2\n```\n```mips\nmove r0 1\nmul r2 r0 5\nbrlt r1 r2 4\nmul r0 r0 2\nadd r1 r1 r0\njr -3\n```\n\nThere are also two additional control flow features: the **infinite `loop`**\n\n```python\nloop:\n    yield()\n```\n```mips\nyield\njr -1\n```\n\nAnd **`tag`**, the MYPS equivalent to line tags in MIPS\n\n```python\na = 0\ntag A:\n    a *= 2\nj(A)\n```\n```mips\nmove r0 0\nmul r0 r0 2\nj 1\n```\n\n### Fixed variables\n\nThe register allocator is not perfect. Since MYPS can also translate arbitrary line jumps like in\nMIPS, we have no way to linearly analyze the lifetimes of variables that are needed on a line prior\nto their definition (at least not without some much deeper algorithms). Consider this example:\n\n```python\nj(AssignACalcB)\ntag CalcC:\n    c = a * 2\ntag AssignACalcB:\n    a = 1\n    b = 2\nj(CalcC)\n```\n\nBut this doesn't compile, because linear analysis doesn't show that, because of the jumps, `a` will\nactually be alive by the time of the `c = a * 2` statement. We might first try to fix this\nby initializing `a`.\n\n```python\na = 0\nj(AssignACalcB)\ntag CalcC:\n    c = a * 2\ntag AssignACalcB:\n    a = 1\n    b = 2\nj(CalcC)\n```\n```mips\nmove r0 0\nj 3\nmul r0 r0 2\nmove r0 1\nmove r0 2\nj 2\n```\n\nWhich compiles, but notice that the register `r0` which was allocated for `a` has been re-used for\nthe allocation of `b`, clobbering whatever value was in `a` that needed to be used for the `c`\nstatement. To *fix* this, we can either prefix the `a` assignment with the word `fix`, or simply\nreplacing the assignment with a *fix declaration*.\n\n```python\nfix a = 0\nj(AssignACalcB)\ntag CalcC:\n    c = a * 2\ntag AssignACalcB:\n    a = 1\n    b = 2\nj(CalcC)\n```\n```mips\nmove r0 0\nj 3\nmul r1 r0 2\nmove r0 1\nmove r1 2\nj 2\n```\n\nThis tells the allocator that the lifetime of `a` should be global (or more precisely as long as the\nblock it is in; see the next section for specifics on this) and now have that the register `r0`\nallocated for `a` is fixed and wont be re-used later.\n\nThe most common use for fixed variables seems to be for variables whose \"old\" values need to persist\nthroughout a loop, such as an error term in a PID controller.\n\n### Lifetime scoping\n\nFinally, blocks are used by MYPS to help the allocator determine better fixed lifetimes for the\nprogram as a whole. If a variable is fixed within a block, then its lifetime isn't global, but as\nlong as the containing block. This way its possible to fix a variable within a block, but then\nhave the allocator re-use the variable's allocated register anywhere outside of and below the block.\n"),A=P.replaceAll(/(`{3}\w*\n[^`]+\n`{3}\n)(`{3}\w*\n[^`]+\n`{3})/g,(function(e,n,t){return'\n<div class="guide-example">\n<div class="lhs">\n\n'.concat(n,'\n</div>\n<div class="rhs">\n\n').concat(t,"\n\n</div>\n</div>")})),z={level:2,listType:"ul"},C={name:"AboutGuide",components:{Markdown:k.a},setup:function(){return{guideSrc:A,markdownToc:z}}};t("0b61");C.render=j;var M=C,T={name:"App",components:{Tabs:s["Tabs"],Tab:s["Tab"],TabPanels:s["TabPanels"],TabPanel:s["TabPanel"],Editor:S,AboutGuide:M},setup:function(){var e=Object(a["reactive"])({selectedTab:"editor"});return Object(i["a"])({},Object(a["toRefs"])(e))},data:function(){return{}}};t("bcbb");T.render=o;var V=T;Object(a["createApp"])(V).mount("#app")},"74be":function(e,n,t){},bcbb:function(e,n,t){"use strict";t("74be")}});
//# sourceMappingURL=app.633caba7.js.map