import{j as e,c as t,a as n,t as i,F as o,r,w as s,v as a,n as l,o as d,b as c,d as h,e as u,T as f,f as g}from"./vendor.a8783a40.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var p;(p=e).fn.fitText=function(e,t){var n=e||1,i=p.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},t);return this.each((function(){var e=p(this),t=function(){e.css("font-size",Math.max(Math.min(e.width()/(10*n),parseFloat(i.maxFontSize)),parseFloat(i.minFontSize)))};t(),p(window).on("resize.fittext orientationchange.fittext",t)}))};const m={name:"Card",props:{front:{type:String,required:!0},back:{type:String,required:!0},meaning:{type:String,required:!0},flipped:{type:Boolean,required:!0},showMeaning:{type:Boolean,required:!0}},mounted(){const e=e=>{const t=e.target,n=2*t.offsetWidth/3;t.style.height=n+"px"};new ResizeObserver((t=>{t.forEach(e)})).observe(this.$refs.card)}},x={class:"relative w-full h-full text-center m-auto text-gray-700"},y={class:"absolute left-0 right-0 bottom-1/2 top-0"},b={class:"absolute left-0 right-0 bottom-0 px-4 overflow-y-hidden overflow-x-scroll"},v={key:0,class:"m-auto whitespace-nowrap"},k={key:1,class:"yomi"},w={class:"absolute left-0 right-0 top-1/2 h-1/2"},M={class:"absolute left-0 right-0 top-0 px-4 overflow-x-scroll"},F={class:"m-auto text-.5em whitespace-nowrap"};m.render=function(e,c,h,u,f,g){return d(),t("div",{ref:"card",class:l(["w-full ring-4 ring-inset ring-gray-700 rounded-lg",h.flipped?"bg-gray-200":"bg-white"])},[n("div",x,[n("div",y,[n("div",b,[h.flipped?(d(),t("ul",k,[(d(!0),t(o,null,r(this.back,((e,n)=>(d(),t("li",{key:n},i(e),1)))),128))])):(d(),t("span",v,i(this.front),1))])]),s(n("div",w,[n("div",M,[n("span",F,i(h.meaning),1)])],512),[[a,h.showMeaning]])])],2)};const I=[[["絵",["エ"],"picture"],["里",["リ","さと"],"country side"],["子",["こ"],"child"],["本",["ホン","もと"],"foundation, book"],["山",["サン","やま"],"mountain"],["木",["モク","き"],"tree"],["糸",["いと"],"thread"],["会",["カイ","あ(う)"],"to meet"],["田",["た,だ"],"rice paddy"],["土",["ド","つち"],"soil, earth"],["語",["ゴ","かた"],"language"],["漢",["カン","はん"],"China"],["字",["ジ","あざ"],"character, letter, word"]],[["京",["キョウ"],"capital"],["足",["ソク"],"foot, leg"],["大",["ダイ,タイ","おお(きい)"],"big"],["上",["うえ"],"on, top"],["日",["ニチ,(ニ)","ひ,び"],"sun/day"],["母",["ボ","はは, (お)かあ(さん)"],"mother"],["一",["イチ","ひと(つ)"],"one"],["口",["くち"],"mouth"],["二",["ニ","ふた(つ)"],"two"],["生",["セイ,ショウ","い(きる)"],"life, birth"],["活",["カツ","い(きる)"],"lively, living"],["好",["コウ","この(む),す(く)"],"fond, pleasing"],["長",["チョウ","なが(い)"],"long, leader"],["年",["ネン","とし"],"year"],["体",["からだ"],"body"]],[["鳥",["チョウ","とり"],"bird, chicken"],["魚",["ギョ","さかな"],"fish"],["作",["つく(る)"],"to make"],["牛",["ギュウ","うし"],"beef, cow"],["肉",["ニク"],"meat"],["四",["よん,よ,よっ(つ)"],"four"],["五",["ゴ","いつ(つ)"],"five"],["人",["ジン,ニン"],"to meet"],["下",["した"],"under, below"],["火",["ひ(ぴ,び)"],"fire, flame"],["六",["ロク","むっ(つ)"],"six"],["七",["シチ","なな"],"seven"],["三",["サン"],"three"],["食",["た(べる)"],"eat, food"],["米",["ベイ","こめ"],"rice"],["百",["ヒャク"],"hundred"],["十",["ジュウ"],"ten"],["半",["はん"],"half"],["多",["おお(い)"],"many, much"],["少",["すく(ない)","す(こし)"],"few, little"],["入",["い(れる)"],"enter, insert"]],[["月",["ゲツ,ガツ","つき"],"moon, Monday"],["水",["スイ","みず"],"water, Wednesday"],["金",["キン","かね"],"gold, money, Friday"],["午",["ゴ"],"noon"],["時",["ジ"],"time, ~o'clock"],["分",["フン,(プン,ブン)","わ(かる)"],"to divide, minute, (to understand)"],["毛",["け"],"hair"],["目",["め"],"eye"],["青",["あお(い)"],"blue"],["走",["はし(る)"],"to run"],["八",["ハチ","や,やっ(つ)"],"eight"],["九",["キュウ,ク","ここの(つ)"],"nine"],["教える",["おしえる"],"to teach"],["見る",["みる"],"to see"],["来る",["くる"],"to come"],["行く",["いく"],"to go"],["午前",["ごぜん"],"AM"],["午後",["ごご"],"PM"],["大学",["だいがく"],"university"],["読む",["よむ"],"to read"],["高い",["たかい"],"expensive, tall, high"],["毎",["マイ","ごと"],"every"],["毎日",["まいにち"],"everyday"],["丸い",["まるい"],"round"]],[["男",["ダン","オトコ"],"male, man"],["室",["シツ"],"room"],["女",["ジョ","おんな"],"female, woman"],["同",["ドウ","おな(じ)"],"same"],["行",["コウ","い(く)"],"to go"],["中",["チュウ","なか"],"inside, center, during"],["学",["ガク"],"study, learning, science"],["細",["ほそ(い)"],"fine, thin; narrow"],["川",["かわ"],"river"],["思",["おも"],"to think"],["妹",["いもうと"],"younger sister"],["芯",["シン","こころ"],"heart, mind; motive"],["共",["キョウ","とも"],"together, both"],["男女共同",["だんきょきょうどう"],"unisex"],["部屋",["へや"],"room"],["住む",["すむ"],"to live (in)"],["先",["セン","さき"],"in the future"],["この先",["このさき"],"in the future"],["洋",["ヨウ"],"western style"],["服",["フク"],"clothing"],["洋服",["ようふく"],"clothes"],["着る",["きる"],"to wear"],["親",["おや"],"parents"],["事",["ジ","こと"],"matter, thing, fact"],["食事",["しょくじ"],"meal"]],[["光",["コウ","ひかり,みつ(for names)"],"light"],["姉",["シ","(お)ねえ(さん)"],"elder sister"],["千",["セン","ち"],"thousand"],["夏",["カ","なつ"],"summer"],["石",["いし"],"rock"],["原",["はら"],"field"],["早い",["はやい"],"early"],["何",["なに"],"what"],["小",["ショウ","ちい(さい)"],"small"],["昼",["ひる"],"noon, lunch"],["呼ぶ",["よぶ"],"to call/invite"],["間",["カン,ケン","あいだ"],"interval, space"],["この間",["このあいだ"],"the other day"],["時間",["じかん"],"time"],["物",["ブツ","もの"],"thing, object"],["好物",["こうぶつ"],"favorite food"],["食べ物",["たべもの"],"food"],["知",["チ","し(る)"],"know, wisdom"],["知っている",["しっている"],"to know"],["聞く",["きく"],"to listen"],["用",["ヨウ","もち(いる)"],"business, use, capital"],["意",["イ","もと,よし"],"idea, mind, heart"],["用意",["ようい"],"preparation"],["手",["て"],"hand"],["当",["トウ","あ(たる)"],"hit, right, appropriate"],["本当に",["ほんとうに"],'"really"'],["合う",["あう"],"to meet"]]].flat(),N={name:"App",components:{Card:m},data:()=>({front:null,back:null,meaning:null,flipped:!1,showMeaning:!1,deck:I,stack:null,index:null}),created(){this.reset(),this.next()},computed:{finished(){return 0==this.stack.length}},methods:{reset(){this.stack=[...this.deck],this.showMeaning=!1,this.next()},next(){let e=Math.floor(Math.random()*this.stack.length);const t=this.stack[e];this.index=e,this.front=t[0],this.back=t[1],this.meaning=t[2]},flip(){this.flipped=!this.flipped},toggleMeaning(){this.showMeaning=!this.showMeaning},skip(){this.next()},remove(){this.stack.splice(this.index,1),this.stack.length>0&&this.next()}}},S={class:"table-fixed max-w-xl px-4 py-16 m-auto flex flex-col"},z={class:"relative table-cell align-middle text-xl md:text-xl lg:text-2xl"},C={class:"absolute top-0 right-0 my-2 mx-4 text-gray-400"},q={class:"flex flex-row mt-8 text-lg md:text-xl lg:text-2xl"},T={class:"flex-1 inline-block relative"},E=n("span",{class:"absolute inset-0 z-10 pointer-events-none\n                    ring-4 ring-gray-700 rounded-xl z-10"},null,-1),A={class:"grid grid-cols-4 divide-x-4 divide-gray-700"},L={class:"inline-block flex-none"};N.render=function(e,o,r,s,a,l){const g=c("Card");return d(),t("div",S,[n("div",z,[h(f,null,{default:u((()=>[n("div",null,[h(g,{front:l.finished?"Finished 😉":a.front,back:l.finished?"Finished 😉":a.back,meaning:l.finished?"(click reset to start again)":a.meaning,flipped:!l.finished&&a.flipped,showMeaning:!!l.finished||a.showMeaning,class:"text-8xl"},null,8,["front","back","meaning","flipped","showMeaning"]),n("div",C,i(a.stack.length)+" to go ",1)])])),_:1})]),n("div",q,[n("div",T,[E,n("div",A,[n("button",{class:"btn-pink rounded-none rounded-l-xl",onClick:o[0]||(o[0]=(...e)=>l.flip&&l.flip(...e))}," かな "),n("button",{class:"btn-blue py-3 rounded-none",onClick:o[1]||(o[1]=(...e)=>l.toggleMeaning&&l.toggleMeaning(...e))}," いみ "),n("button",{class:"btn-yellow py-3 rounded-none",onClick:o[2]||(o[2]=(...e)=>l.skip&&l.skip(...e))}," Skip "),n("button",{class:"btn-green py-3 rounded-none rounded-r-xl",onClick:o[3]||(o[3]=(...e)=>l.remove&&l.remove(...e))}," Got it ")])]),n("div",L,[n("button",{class:"btn py-4 px-4 ml-4 ring-4 ring-gray-700 rounded-xl",onClick:o[4]||(o[4]=(...e)=>l.reset&&l.reset(...e))}," Reset ")])])])},g(N).mount("#app");