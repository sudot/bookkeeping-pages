import{i as m,e as c,a as o,l as $,N as b,b as v,g as k}from"./index.46a27899.js";const O={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>e.length===2},expand:Boolean};function P(){const{props:e,proxy:{$q:p}}=k(),a=m($,c);if(a===c)return console.error("QPageSticky needs to be child of QLayout"),c;const d=o(()=>{const t=e.position;return{top:t.indexOf("top")>-1,right:t.indexOf("right")>-1,bottom:t.indexOf("bottom")>-1,left:t.indexOf("left")>-1,vertical:t==="top"||t==="bottom",horizontal:t==="left"||t==="right"}}),i=o(()=>a.header.offset),n=o(()=>a.right.offset),f=o(()=>a.footer.offset),u=o(()=>a.left.offset),x=o(()=>{let t=0,r=0;const s=d.value,g=p.lang.rtl===!0?-1:1;s.top===!0&&i.value!==0?r=`${i.value}px`:s.bottom===!0&&f.value!==0&&(r=`${-f.value}px`),s.left===!0&&u.value!==0?t=`${g*u.value}px`:s.right===!0&&n.value!==0&&(t=`${-g*n.value}px`);const l={transform:`translate(${t}, ${r})`};return e.offset&&(l.margin=`${e.offset[1]}px ${e.offset[0]}px`),s.vertical===!0?(u.value!==0&&(l[p.lang.rtl===!0?"right":"left"]=`${u.value}px`),n.value!==0&&(l[p.lang.rtl===!0?"left":"right"]=`${n.value}px`)):s.horizontal===!0&&(i.value!==0&&(l.top=`${i.value}px`),f.value!==0&&(l.bottom=`${f.value}px`)),l}),h=o(()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand===!0?"expand":"shrink"}`);function y(t){const r=b(t.default);return v("div",{class:h.value,style:x.value},e.expand===!0?r:[v("div",r)])}return{$layout:a,getStickyContent:y}}export{P as a,O as u};
