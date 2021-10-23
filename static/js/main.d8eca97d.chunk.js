(this["webpackJsonpneumorphism-ui-react"]=this["webpackJsonpneumorphism-ui-react"]||[]).push([[0],{27:function(e,t,n){"use strict";n.r(t),n.d(t,"theme",(function(){return Fe}));var o=n(4),c=n(1),r=n.n(c),i=n(14),a=n.n(i),s=(n(23),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),o(e),c(e),r(e),i(e)}))}),d=n(3),l=n(2),b=n(0),p=function(e){return Object(l.b)('@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Roboto:wght@300;400;500;700&display=swap");{}html,body{width:100%;height:100%;background-color:',e.color.background.main,';font-family:"Roboto","Noto Sans JP",sans-serif;font-weight:400;letter-spacing:0.04em;}#root{width:100%;height:100%;}',"")},h=function(){return Object(b.a)(l.a,{styles:p})},u=n(5),x=function(e){return Object(l.b)("font-weight:600;text-shadow:3px 3px 5px ",e.color.shadow.dark,",-3px -3px 5px ",e.color.shadow.light,";letter-spacing:0.1em;","")},g=function(e){var t=e.children,n=e._css;return Object(b.a)("p",{css:[x,n,"",""],children:t})},j=n(6),O=["children"],m=function(e){return Object(l.b)("border-radius:30px;background:",e.color.background.main,";box-shadow:5px 5px 10px ",e.color.shadow.dark,",-5px -5px 10px ",e.color.shadow.light,";padding:1em 2em;&:hover{box-shadow:inset 5px 5px 10px ",e.color.shadow.dark,",inset -5px -5px 10px ",e.color.shadow.light,";}","")},f=function(e){var t=e.children,n=Object(j.a)(e,O);return Object(b.a)("button",Object(o.a)(Object(o.a)({},n),{},{css:m,children:t}))},v=["children"];var w={name:"1r5gb7q",styles:"display:inline-block"},k=function(e){return Object(l.b)("display:flex;border-radius:5px;background:",e.color.background.main,";box-shadow:5px 5px 10px ",e.color.shadow.dark,",-5px -5px 10px ",e.color.shadow.light,";overflow:hidden;","")},y=function(e){return Object(l.b)('position:relative;padding:0.8em 1em;&:nth-of-type(n + 2){margin-left:4px;&::before{content:"";position:absolute;top:0;left:-4px;height:100%;width:4px;background:',e.color.background.main,";box-shadow:inset 1px 0px 2px ",e.color.shadow.dark,",inset -1px 0px 2px ",e.color.shadow.light,";}}&:hover{background:linear-gradient(\n      145deg,\n      ",e.color.shadow.dark,",\n      ",e.color.shadow.light,"\n    );}","")},C=function(e){var t=e.children,n=e._css;return Object(b.a)("div",{css:[w,n,"",""],children:Object(b.a)("div",{css:k,children:t})})};C.Button=function(e){var t=e.children,n=Object(j.a)(e,v);return Object(b.a)("button",Object(o.a)(Object(o.a)({},n),{},{css:y,children:t}))};var S=C;var _={name:"bjn8wh",styles:"position:relative"},B={name:"1fmpde9",styles:'display:flex;>li:nth-last-of-type(n + 2){margin-right:16px;opacity:0.5;&::after{content:"/";margin-left:16px;}}'},I=function(e){var t=e.children;return Object(b.a)("nav",{css:_,children:Object(b.a)("ol",{css:B,children:t})})};var T={name:"crbxc5",styles:"border-radius:5px;padding:1em"},z={flat:function(e){return Object(l.b)("background:",e.color.background.main,";box-shadow:5px 5px 10px ",e.color.shadow.dark,",-5px -5px 10px ",e.color.shadow.light,";","")},concave:function(e){return Object(l.b)("background:linear-gradient(\n    145deg,\n    ",e.color.background.dark,",\n    ",e.color.background.light,"\n  );box-shadow:5px 5px 10px ",e.color.shadow.dark,",-5px -5px 10px ",e.color.shadow.light,";","")},convex:function(e){return Object(l.b)("background:linear-gradient(\n    145deg,\n    ",e.color.background.light,",\n    ",e.color.background.dark,"\n  );box-shadow:5px 5px 10px ",e.color.shadow.dark,",-5px -5px 10px ",e.color.shadow.light,";","")},pressed:function(e){return Object(l.b)("background:",e.color.background.main,";box-shadow:inset 5px 5px 10px ",e.color.shadow.dark,",inset -5px -5px 10px ",e.color.shadow.light,";","")}},F=function(e){var t=e.children,n=e.shape,o=void 0===n?"flat":n,c=e._css;return Object(b.a)("div",{css:[T,z[o],c,"",""],children:t})},M=function(e){return Object(l.b)("font-size:12px;font-weight:600;padding:0.4em 0.8em;background-color:",e.color.background.main,";box-shadow:inset 5px 5px 10px ",e.color.shadow.dark,",inset -5px -5px 10px ",e.color.shadow.light,";border-radius:100px;","")},P={info:function(e){return Object(l.b)("color:",e.color.info,";","")},error:function(e){return Object(l.b)("color:",e.color.error,";","")},warning:function(e){return Object(l.b)("color:",e.color.warning,";","")},success:function(e){return Object(l.b)("color:",e.color.success,";","")}},q=function(e){var t=e.children,n=e.type,o=P[void 0===n?"info":n];return Object(b.a)("span",{css:[M,o,"",""],children:t})},J=["_css"],L=function(e){return Object(l.b)("padding:1em 1.2em;border-radius:10px;background:",e.color.background.main,";box-shadow:inset 5px 5px 5px ",e.color.shadow.dark,",inset -5px -5px 5px ",e.color.shadow.light,";","")},N=function(e){var t=e._css,n=Object(j.a)(e,J);return Object(b.a)("div",{children:Object(b.a)("input",Object(o.a)(Object(o.a)({},n),{},{css:[L,t,"",""],type:"text"}))})};var R={name:"mdfq14",styles:"position:relative;display:inline-block;padding:0.5em 0;cursor:pointer"},E={name:"hwpq9n",styles:"position:absolute;opacity:0;visibility:hidden;height:0"},D=function(e){return Object(l.b)("position:absolute;top:0;bottom:2px;margin:auto 0;width:20px;height:20px;background-color:",e.color.background.main,";box-shadow:inset 2px 2px 2px ",e.color.shadow.dark,",inset -2px -2px 2px ",e.color.shadow.light,";","")},U={name:"pxst7y",styles:'&::after{content:"";position:absolute;top:4px;left:4px;width:12px;height:8px;box-sizing:border-box;border-bottom:3px solid #000;border-left:3px solid #000;transform-origin:center;transform:rotate(-45deg);}'},Y={name:"13feash",styles:"padding-left:28px"},A=function(e){var t=e._css,n=Object(c.useState)(!1),o=Object(u.a)(n,2),r=o[0],i=o[1];return Object(b.b)("label",{className:"hover",css:[R,t,"",""],children:[Object(b.a)("input",{css:E,type:"checkbox",onChange:function(){i((function(e){return!e}))},checked:r}),Object(b.a)("div",{css:[D,r&&U,"",""]}),Object(b.a)("span",{css:Y,children:"Check Box"})]})},G=["_css","name","label","value","selected"];var H={name:"1nrevy2",styles:"position:relative;display:inline-block"},K={name:"782gt4",styles:"display:flex;align-items:center;cursor:pointer;vertical-align:bottom"},Q={name:"s5xdrg",styles:"display:flex;align-items:center"},V={name:"1je75si",styles:"position:absolute;opacity:0;visibility:hidden"},W=function(e){return Object(l.b)("position:relative;display:inline-block;width:1em;height:1em;background:",e.color.background.main,";box-shadow:inset 1px 1px 2px ",e.color.shadow.dark,",inset -1px -1px 2px ",e.color.shadow.light,";border-radius:50%;","")},X=function(e){return Object(l.b)('&::before{content:"";position:absolute;top:0.25em;left:0.25em;width:0.5em;height:0.5em;border-radius:50%;background-color:',e.color.info,";}","")},Z={name:"1pfkmba",styles:"padding-left:8px"},$=function(e){var t=e._css,n=e.name,c=e.label,r=e.value,i=e.selected,a=Object(j.a)(e,G);return Object(b.a)("div",{css:[H,t,"",""],children:Object(b.b)("label",{css:K,children:[Object(b.b)("span",{css:Q,children:[Object(b.a)("input",Object(o.a)({css:V,type:"radio",name:n,value:r},a)),Object(b.a)("span",{css:[W,r===i&&X,"",""]})]}),c&&Object(b.a)("span",{css:Z,children:c})]})})},ee={name:"ny5p0o",styles:"margin-left:16px"},te=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],o=t[1],r=function(e){o(e.currentTarget.value)};return Object(b.b)("div",{children:[Object(b.a)($,{name:"group1",value:"v1",selected:n,label:"label 1",onChange:r}),Object(b.a)($,{name:"group1",value:"v2",label:"label 2",selected:n,onChange:r,_css:ee})]})};var ne=function(e){return Object(l.b)("position:relative;display:inline-block;border-radius:10px;background:",e.color.background.main,";box-shadow:inset 5px 5px 5px ",e.color.shadow.dark,",inset -5px -5px 5px ",e.color.shadow.light,';&::before{content:"";position:absolute;top:0;right:1em;bottom:0;margin:auto 0;width:0.6em;height:0.6em;border-right:3px solid;border-bottom:3px solid;box-sizing:border-box;transform-origin:center center;transform:rotate(45deg) translateY(-25%);}',"")},oe={name:"cokt27",styles:"position:relative;padding:1em 2em 1em 1.2em;min-width:200px"},ce=function(e){var t=e._css;return Object(b.a)("div",{css:[ne,t,"",""],children:Object(b.b)("select",{css:oe,children:[Object(b.a)("option",{value:"1",children:"test1"}),Object(b.a)("option",{value:"2",children:"test2"}),Object(b.a)("option",{value:"3",children:"test3"})]})})};var re=function(e){return Object(l.b)("position:relative;padding:6px 8px;border-radius:5px;box-shadow:5px 5px 10px ",e.color.shadow.dark,",-5px -5px 10px ",e.color.shadow.light,";overflow:hidden;","")},ie={name:"bjn8wh",styles:"position:relative"},ae={name:"11kz239",styles:'position:relative;padding:1em 1.2em;box-sizing:border-box;cursor:pointer;&::before,&::after{content:"";position:absolute;top:0;bottom:0;background-color:#000;margin:auto 0;}&::before{width:16px;height:2px;right:9px;}&::after{width:2px;height:16px;right:16px;}'},se={name:"14103c3",styles:"&::after{opacity:0;}"},de={name:"1hcx8jb",styles:"padding:0"},le=function(e){return Object(l.b)("position:relative;padding:1em 1.2em;border-radius:3px;background:",e.color.background.main,";box-shadow:inset 3px 3px 8px ",e.color.shadow.dark,",inset -3px -3px 8px ",e.color.shadow.light,";","")},be={name:"eivff4",styles:"display:none"},pe=function(e){var t=e.children,n=e._css;return Object(b.a)("div",{css:[re,n,"",""],children:t})};pe.Item=function(e){var t=e.title,n=e.text,o=Object(c.useState)(!0),r=Object(u.a)(o,2),i=r[0],a=r[1];return Object(b.b)("div",{css:ie,children:[Object(b.a)("div",{css:[ae,!i&&se,"",""],onClick:function(){a((function(e){return!e}))},children:t}),Object(b.a)("div",{css:de,children:Object(b.a)("p",{css:[le,i&&be,"",""],children:n})})]})};var he=pe;var ue={name:"1mo51p1",styles:"position:fixed;top:0;left:0;width:100%;height:100%"},xe=function(e){return Object(l.b)("position:relative;top:0;left:0;width:100%;height:100%;background-color:",e.color.background.main,";opacity:0.8;","")},ge={name:"1tai1wm",styles:"position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none;>*{pointer-events:auto;}"},je=function(e){var t=e.onClick,n=e.children;return Object(b.b)("div",{css:ue,children:[Object(b.a)("div",{onClick:t,css:xe}),Object(b.a)("div",{css:ge,children:n})]})},Oe=function(e){var t=e.onClick,n=e.children,o=document.getElementById("modal");return a.a.createPortal(Object(b.a)(je,{onClick:t,children:n}),o)},me=function(e){var t=e.children,n=e._css,o=Object(c.useState)(!1),r=Object(u.a)(o,2),i=r[0],a=r[1],s=function(){a((function(e){return!e}))};return Object(b.b)("div",{css:n,children:[Object(b.a)(f,{onClick:s,children:"modal"}),i&&Object(b.a)(Oe,{onClick:s,children:t})]})},fe=function(e){return Object(l.b)("height:6px;border:none;background:",e.color.background.main,";box-shadow:inset 1px 1px 2px ",e.color.shadow.dark,",inset -1px -1px 2px ",e.color.shadow.light,";","")},ve=function(e){var t=e._css;return Object(b.a)("hr",{css:[fe,t,"",""]})};var we={name:"11b7761",styles:"width:100%;min-height:100%;padding:64px;box-sizing:border-box"},ke={name:"1lw3ul3",styles:"margin-top:40px"},ye={name:"zjik7",styles:"display:flex"},Ce={name:"1wooq18",styles:"&:nth-of-type(n + 2){margin-left:30px;}"},Se={name:"j7349j",styles:"font-size:28px"},_e=function(){var e=Object(c.useState)("InputText"),t=Object(u.a)(e,2),n=t[0],o=t[1];return Object(b.b)("div",{css:we,children:[Object(b.a)("div",{children:Object(b.a)(g,{_css:Se,children:"Typography"})}),Object(b.a)("div",{css:ke,children:Object(b.a)(ve,{})}),Object(b.a)("div",{css:[ke,ye,"",""],children:["flat","concave","convex","pressed"].map((function(e){return Object(b.a)("div",{css:Ce,children:Object(b.a)(F,{shape:e,children:e})},e)}))}),Object(b.a)("div",{css:[ke,ye,"",""],children:["info","error","warning","success"].map((function(e){return Object(b.a)("div",{css:Ce,children:Object(b.a)(q,{type:e,children:e.toUpperCase()})},e)}))}),Object(b.a)("div",{css:ke,children:Object(b.a)(ve,{})}),Object(b.a)("div",{css:ke,children:Object(b.a)(f,{children:"Button"})}),Object(b.a)("div",{css:ke,children:Object(b.b)(S,{children:[Object(b.a)(S.Button,{children:"Left"}),Object(b.a)(S.Button,{children:"Center"}),Object(b.a)(S.Button,{children:"Right"})]})}),Object(b.a)("div",{css:ke,children:Object(b.a)(ve,{})}),Object(b.a)("div",{css:ke,children:Object(b.a)(A,{})}),Object(b.a)("div",{css:ke,children:Object(b.a)(te,{})}),Object(b.a)("div",{css:ke,children:Object(b.a)(N,{onChange:function(e){o(e.currentTarget.value)},value:n})}),Object(b.a)("div",{css:ke,children:Object(b.a)(ce,{})}),Object(b.a)("div",{css:ke,children:Object(b.a)(ve,{})}),Object(b.a)("div",{css:ke,children:Object(b.b)(he,{children:[Object(b.a)(he.Item,{title:"Title 1",text:"Sample text."}),Object(b.a)(he.Item,{title:"Title 2",text:"Sample text."}),Object(b.a)(he.Item,{title:"Title 3",text:"Sample text."})]})}),Object(b.a)("div",{css:ke,children:Object(b.a)(ve,{})}),Object(b.a)("div",{css:ke,children:Object(b.b)(I,{children:[Object(b.a)("li",{children:"First"}),Object(b.a)("li",{children:"Second"}),Object(b.a)("li",{children:"Last"})]})}),Object(b.a)("div",{css:ke,children:Object(b.a)(ve,{})}),Object(b.a)("div",{css:ke,children:Object(b.a)(me,{children:Object(b.a)(F,{children:"Modal Card"})})})]})};function Be(e,t){var n=e.toString().replace(/[^0-9a-f]/gi,"");n.length<6&&(n=n[0]+n[0]+n[1]+n[1]+n[2]+n[2]);return n.match(/.{2}/g).reduce((function(e,n){var o=parseInt(n,16);return e+Math.round(Math.min(Math.max(0,o+o*t),255)).toString(16)}),"#")}var Ie,Te={background:{main:"#e0e0e0"},info:"rgb(2, 136, 209)",success:"rgb(46, 125, 50)",error:"rgb(211, 47, 47)",warning:"rgb(237, 108, 2)"},ze={color:Object(o.a)(Object(o.a)({},Te),{},{background:{light:Be(Te.background.main,.1),main:Te.background.main,dark:Be(Te.background.main,-.1)},shadow:{light:Be(Te.background.main,.15),dark:Be(Te.background.main,-.15)}})},Fe=(Ie=ze,Object(o.a)({},Ie));a.a.render(Object(b.a)(r.a.StrictMode,{children:Object(b.b)(d.c,{theme:Fe,children:[Object(b.a)(h,{}),Object(b.a)(_e,{})]})}),document.getElementById("root")),s()}},[[27,1,2]]]);
//# sourceMappingURL=main.d8eca97d.chunk.js.map