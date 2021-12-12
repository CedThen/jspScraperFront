(this["webpackJsonpjsp-scraper"]=this["webpackJsonpjsp-scraper"]||[]).push([[0],{93:function(e,t,r){},94:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(29),i=r.n(a),o=r(20),s=r.n(o),l=r(30),d=r(25),j=r(11),b=r(5),h=r(19),u=r(49),x=r(52),p=r(3),f=["children"],g=function(e){var t=e.children,r=Object(h.a)(e,f);return Object(p.jsx)(j.g,Object(b.a)(Object(b.a)({},r),{},{fontFamily:"Cinzel",children:t}))},O=function(){return Object(p.jsxs)(j.a,{position:"fixed",top:"10",right:"20",display:"flex",flexDirection:"row",children:[Object(p.jsx)("a",{href:"https://forums.d2jsp.org/forum.php?f=268&c=2",children:Object(p.jsxs)(j.g,{fontFamily:"Exocet",fontSize:"20",children:[Object(p.jsx)(x.a,{})," d2Jsp"]})}),Object(p.jsxs)(u.a,{children:[Object(p.jsx)(u.g,{children:Object(p.jsx)(j.g,{fontFamily:"Exocet",fontSize:"20",paddingLeft:"50",cursor:"pointer",children:"About"})}),Object(p.jsxs)(u.d,{backgroundColor:"brand.grey",children:[Object(p.jsx)(u.b,{}),Object(p.jsx)(u.f,{children:Object(p.jsx)(g,{align:"center",fontSize:"lg",children:"Methodology"})}),Object(p.jsxs)(u.c,{children:[Object(p.jsx)(g,{children:'This data is collected once an hour from the latest 100 posts under the "runes" filter on d2Jsp for softcore d2R. The weekly and monthly views will work once enough data has been collected (should have enough by 1/11/21)'}),Object(p.jsx)("br",{}),Object(p.jsx)(g,{children:"This should not be considered a definitive authority on rune pricing, as its data processing is imperfect and cannot handle all the jargon out there. "}),Object(p.jsx)("br",{}),Object(p.jsx)(g,{children:"However, I hope it helps make understanding rune pricing easier."})]}),Object(p.jsx)(u.f,{}),Object(p.jsxs)(u.e,{children:[Object(p.jsx)(g,{children:"Questions?"}),Object(p.jsx)(g,{children:"Reach me at cedthen@gmail.com"})]})]})]})]})},m=r(8),y=r(51);function v(e,t){var r=new RegExp("^-?\\d+(?:.\\d{0,"+(t||-1)+"})?");return e.toString().match(r)[0]}function w(e){return e.length<=24?e.map((function(e){return k(e.createdAt)})):e.map((function(e){return t=e.createdAt,new Date(t).toLocaleDateString([],{month:"short",day:"2-digit"});var t}))}function k(e){return new Date(e).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}var C={Daily:24,Weekly:168,Monthly:730};var S="#ffa800",R="rgb(255, 99, 132)",A="rgba(255, 99, 132, 0.5)",E=r(45),D=function(e){var t=Object(E.a)(e),r=t.getInputProps,n=t.getCheckboxProps,c=r(),a=n();return Object(p.jsxs)(j.a,{as:"label",children:[Object(p.jsx)("input",Object(b.a)({},c)),Object(p.jsx)(j.a,Object(b.a)(Object(b.a)({},a),{},{cursor:"pointer",borderWidth:"1px",borderRadius:"md",boxShadow:"md",_checked:{bg:"brand.lightGrey",color:"white"},px:5,py:3,children:Object(p.jsx)(j.g,{fontFamily:"Exocet",children:e.children})}))]})},T=function(e){var t=e.fetchData,r=Object(E.b)({name:"Timeframe",defaultValue:"Daily",onChange:function(e){return t(C[e])}}),n=r.getRootProps,c=r.getRadioProps,a=n();return Object(p.jsx)(j.a,Object(b.a)(Object(b.a)({},a),{},{display:"flex",flexDirection:"row",children:Object(p.jsx)(j.c,{templateColumns:"1fr 1fr 1fr",w:"75%",children:["Daily","Weekly","Monthly"].map((function(e){var t=c({value:e});return Object(p.jsx)(j.d,{padding:"10px",children:Object(p.jsx)(D,Object(b.a)(Object(b.a)({},t),{},{children:e}),e)})}))})}))};m.d.register(m.c,m.i,m.k,m.h,m.o,m.p,m.f);var z={family:"Exocet",size:15},F={color:"white",font:z},_=function(e,t){var r,n=(r=t.length)<=C.Daily?24:r<=C.Weekly?7:30;return{responsive:!0,plugins:{legend:{display:!1},tooltip:{titleColor:"white",titleFont:z,bodyColor:S,bodyFont:z},title:{display:!0,text:e,color:S,font:Object(b.a)(Object(b.a)({},z),{},{size:40})}},scales:{yAxes:{ticks:Object(b.a)(Object(b.a)({},F),{},{callback:function(e){return"    "+e}})},xAxes:{ticks:Object(b.a)(Object(b.a)({},F),{},{maxTicksLimit:n})}},maintainAspectRatio:!1}};var L=function(e){var t=e.data,r=e.chartedRune,n=e.fetchData,c=function(e){var t={};return Object.keys(e[0].runeprices).forEach((function(r){e.forEach((function(e){var n=e.runeprices[r].askAvg;t[r]?t[r].push(n):t[r]=[n]}))})),t}(t),a=c[r].reverse(),i={labels:w(t).reverse(),datasets:[{label:r,data:a,borderColor:R,backgroundColor:A}]};return Object(p.jsxs)(j.a,{w:"100%",h:"100%",children:[Object(p.jsx)(y.a,{data:i,options:_(r,a),width:"90%",height:"80%"}),Object(p.jsxs)(j.b,{padding:"20px",display:"flex",flexDirection:"column",children:[Object(p.jsx)(j.g,{fontFamily:"Exocet",fontSize:"xl",children:"Timeframe"}),Object(p.jsx)(T,{fetchData:n})]})]})},P=r(47),B=r.p+"static/media/ber.b998fe19.png",W=r.p+"static/media/cham.9aad9aa5.png",G=r.p+"static/media/gul.6511785b.png",J=r.p+"static/media/ist.ea49266a.png",I=r.p+"static/media/jah.3df4ae7c.png",H=r.p+"static/media/lem.7e8e05e9.png",M=r.p+"static/media/lo.94b9e270.png",N=r.p+"static/media/mal.ace2182f.png",U=r.p+"static/media/ohm.451a2bff.png",K=r.p+"static/media/pul.f6805011.png",V=r.p+"static/media/sur.d8163a20.png",Q=r.p+"static/media/um.b3fca588.png",q=r.p+"static/media/vex.99f5de6f.png",X=r.p+"static/media/zod.21d25b59.png",Y=r(46),Z=function(e){return Object(p.jsx)(Y.a,Object(b.a)({w:"36px",objectFit:"contain",paddingRight:"3"},e))},$=function(e){return{lem:Object(p.jsx)(Z,{src:H,alt:"lem"}),pul:Object(p.jsx)(Z,{src:K,alt:"pul"}),um:Object(p.jsx)(Z,{src:Q,alt:"um"}),mal:Object(p.jsx)(Z,{src:N,alt:"mal"}),ist:Object(p.jsx)(Z,{src:J,alt:"ist"}),gul:Object(p.jsx)(Z,{src:G,alt:"gul"}),vex:Object(p.jsx)(Z,{src:q,alt:"vex"}),ohm:Object(p.jsx)(Z,{src:U,alt:"ohm"}),lo:Object(p.jsx)(Z,{src:M,alt:"lo"}),sur:Object(p.jsx)(Z,{src:V,alt:"sur"}),ber:Object(p.jsx)(Z,{src:B,alt:"ber"}),jah:Object(p.jsx)(Z,{src:I,alt:"jah"}),cham:Object(p.jsx)(Z,{src:W,alt:"cham"}),zod:Object(p.jsx)(Z,{src:X,alt:"zod"})}[e]},ee=["children"],te=function(e){var t=e.children,r=Object(h.a)(e,ee);return Object(p.jsx)(P.d,{fontFamily:"ExocetBold",border:"0.5px",borderColor:"white",children:Object(p.jsx)(j.g,Object(b.a)(Object(b.a)({},r),{},{fontSize:"lg",children:t}))})};function re(e){return e>0?"brand.green":0===e?"brand.white":"brand.red"}var ne=function(e){var t=e.runeprices,r=e.rune,n=e.prevRuneprices,c=e.onRowClick,a=e.isSelected,i=t[r].bidAvg-n[r].bidAvg,o=t[r].askAvg-n[r].askAvg,s=re(i),l=re(o),d=(t[r].bidAvg+t[r].askAvg)/2,j=(d-(n[r].bidAvg+n[r].askAvg)/2)/d,b=re(j);return Object(p.jsxs)(P.g,{onClick:function(){return c(r)},_hover:{background:"brand.lightGrey"},backgroundColor:a?"brand.lightGrey":"brand.grey",children:[Object(p.jsxs)(te,{w:"100%",color:"brand.orange",display:"flex",flexDirection:"row",children:[$(r),r]}),Object(p.jsxs)(te,{color:s,textAlign:"right",children:[v(t[r].bidAvg,2),Object(p.jsx)("span",{})]}),Object(p.jsx)(te,{color:l,textAlign:"right",children:v(t[r].askAvg,2)}),Object(p.jsxs)(te,{color:b,textAlign:"right",children:[v(100*j,2),"%"]}),Object(p.jsx)(te,{textAlign:"right",children:t[r].count})]})},ce=["children"],ae=function(e){var t=e.children,r=Object(h.a)(e,ce);return Object(p.jsx)(P.e,Object(b.a)(Object(b.a)({width:"25%",fontFamily:"ExocetBold",fontSize:"lg",fontWeight:"light"},r),{},{children:Object(p.jsx)(j.g,{fontSize:"xl",textAlign:"center",children:t})}))},ie=function(e){var t=e.data,r=e.onRowClick,n=e.chartedRune,c=t[0],a=c.runeprices,i=c.createdAt,o=t[1].runeprices,s=["15%","25%","25%","25%","10%"];return Object(p.jsx)(j.a,{children:Object(p.jsxs)(P.a,{variant:"simple",children:[Object(p.jsxs)(P.b,{children:["Updates once an hour. Last updated at ",k(i)]}),Object(p.jsx)(P.f,{children:Object(p.jsxs)(P.g,{children:[Object(p.jsx)(ae,{w:s[0],border:"1px",borderColor:"white",children:"Rune"}),Object(p.jsx)(ae,{w:s[1],border:"1px",borderColor:"white",children:"Bid"}),Object(p.jsx)(ae,{w:s[2],border:"1px",borderColor:"white",children:"Ask"}),Object(p.jsx)(ae,{w:s[3],border:"1px",borderColor:"white",children:"% Chg"}),Object(p.jsx)(ae,{w:s[4],border:"1px",borderColor:"white",children:"Vol"})]})}),Object(p.jsx)(P.c,{children:Object.keys(a).map((function(e){var t=e===n;return Object(p.jsx)(ne,{isSelected:t,widths:s,runeprices:a,rune:e,prevRuneprices:o,onRowClick:r})}))})]})})},oe=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).ADDRESS_URL||"localhost",se=("http://".concat(oe,"/api/latest/"),function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch((r=t,"http://".concat(oe,"/api/last/").concat(r)));case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}()),le={display:"flex",alignItems:"center",flexDirection:"column",width:"100vw",height:"100vh",paddingLeft:"20px",paddingRight:"20px"},de=r(48),je=function(){var e=Array.from({length:14},(function(e,t){return t+1}));return Object(p.jsxs)(j.a,{style:le,backgroundColor:"brand.grey",children:[Object(p.jsxs)(j.e,{size:"3xl",padding:"20px",color:"brand.white",children:["JSP ",Object(p.jsx)(j.g,{as:"span",color:"brand.orange",children:"Rune"})," Prices"]}),Object(p.jsxs)(j.c,{className:"body",gridTemplateColumns:"2fr 3fr",h:"100%",w:"100%",gap:10,paddingTop:"20",children:[Object(p.jsx)(j.d,{children:Object(p.jsx)(j.f,{children:e.map((function(){return Object(p.jsx)(de.a,{height:"30px",paddingBottom:"10",color:"brand.orange",startColor:"brand.lightGrey",endColor:"brand.grey"})}))})}),Object(p.jsx)(j.d,{style:{width:"100%",height:"80%",paddingRight:"10px"},children:Object(p.jsx)(de.a,{height:"700px",padding:"5",color:"brand.orange",startColor:"brand.lightGrey",endColor:"brand.grey"})})]})]})},be=function(){var e=Object(n.useState)(),t=Object(d.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)("ber"),i=Object(d.a)(a,2),o=i[0],b=i[1];function h(){return u.apply(this,arguments)}function u(){return u=Object(l.a)(s.a.mark((function e(){var t,r,n=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:24,e.next=3,se(t);case 3:r=e.sent,c(r);case 5:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}return Object(n.useEffect)((function(){h()}),[]),r?Object(p.jsxs)(j.a,{style:le,backgroundColor:"brand.grey",children:[Object(p.jsx)(O,{}),Object(p.jsxs)(j.e,{size:"3xl",padding:"20px",color:"brand.white",children:["JSP ",Object(p.jsx)(j.g,{as:"span",color:"brand.orange",children:"Rune"})," Prices"]}),Object(p.jsxs)(j.c,{className:"body",gridTemplateColumns:"2fr 3fr",h:"100%",w:"100%",gap:5,children:[Object(p.jsx)(j.d,{style:{width:"100%",height:"80%"},children:r&&Object(p.jsx)(ie,{data:[r[0],r[1]],onRowClick:function(e){return b(e)},chartedRune:o})}),Object(p.jsx)(j.d,{style:{width:"100%",height:"80%",padding:"10px"},children:o&&Object(p.jsx)(L,{data:r,chartedRune:o,fetchData:h})})]})]}):Object(p.jsx)(je,{})};var he=function(){return Object(p.jsx)(be,{})},ue=r(15),xe=r(13),pe=function(){return Object(p.jsx)(xe.a,{styles:"\n      /* latin */\n      @font-face {\n        font-family: 'ExocetBold';\n        font-style: normal;\n        src: url('".concat("../fonts/exocetBold.ttf","') format('truetype');        \n      },\n      @font-face {\n        font-family: 'ExocetLight';\n        font-style: normal;\n        src: url('").concat("../fonts/exocetLight.ttf","') format('truetype');        \n      }\n      ")})},fe=Object(ue.b)({colors:{brand:{green:"#26ff00",red:"#ff0f00",grey:"#202124",orange:"#ffa800",white:"#ffffff",black:"#000000",lightGrey:"#2c2e33"}},fonts:{heading:"ExocetBold"},components:{Text:{baseStyle:{color:"brand.white"}}}});r(93);i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsxs)(ue.a,{theme:fe,children:[Object(p.jsx)(pe,{}),Object(p.jsx)(he,{})]})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.6a1f400c.chunk.js.map