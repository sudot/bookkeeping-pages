import{r as $,a as Q,u as g,bb as D,ab as h,f as l,j as o,k as a,m as e,v as d,a2 as n,a3 as s,q as u,bc as F,t as _,E as C,H as S,F as x,a0 as j,Q as z,bd as G,s as K,b2 as P,G as A}from"./index.46a27899.js";import{Q as b,a as B}from"./QItemLabel.0564320f.js";import{A as V,Q as T}from"./AccountDetail.87de9822.js";import{Q as W}from"./QPage.7824d0da.js";import{C as i}from"./ClosePopup.084ab801.js";import{u as H}from"./use-quasar.20dd07d7.js";import{m as R,a as J}from"./currency.9051c79a.js";import{l as O}from"./login.416c33bb.js";import{u as X}from"./transaction.45dcaa38.js";import{u as Y}from"./account.00e1e43f.js";import"./QSlideTransition.69f0c632.js";import"./currency.es.c7e1cdbb.js";import"./account-group.879321a1.js";import"./account-group.3c4ddb1d.js";const pa={__name:"AccountMain",setup(Z){const k=()=>"account-group.expanded.ids",y=H(),f=Y(),m=$(new Set((localStorage.getItem(k())||"").split(","))),w=Q(()=>f.treeNodes),L=Q(()=>f.netAssetValue),q=(v,c)=>{v?m.value.add(c):m.value.delete(c),localStorage.setItem(k(),Array.from(m.value.keys()).filter(p=>p).join(","))},I=()=>{y.loading.show(),X().then(f.fetchAccounts).finally(()=>y.loading.hide())},E=g(),M=D(),N=()=>{O().finally(()=>{M.storeToken(""),E.push("/")})};return(v,c)=>{const p=h("nav-bar"),U=h("MainWrapperLayout");return l(),o(U,null,{default:a(()=>[e(W,null,{default:a(()=>[e(p,{"show-back":!1},{menu:a(()=>[e(b,null,{default:a(()=>[d((l(),o(n,{clickable:"",to:"/accounts/add"},{default:a(()=>[e(s,null,{default:a(()=>[u("\u65B0\u589E\u8D26\u6237")]),_:1})]),_:1})),[[i]]),d((l(),o(n,{clickable:"",to:"/account-groups/add"},{default:a(()=>[e(s,null,{default:a(()=>[u("\u65B0\u589E\u8D26\u6237\u7EC4")]),_:1})]),_:1})),[[i]]),d((l(),o(n,{clickable:"",to:"/accounts/sort"},{default:a(()=>[e(s,null,{default:a(()=>[u("\u8D26\u6237\u6392\u5E8F")]),_:1})]),_:1})),[[i]]),d((l(),o(n,{clickable:"",onClick:I},{default:a(()=>[e(s,null,{default:a(()=>[u("\u91CD\u7B97\u8D26\u6237\u4F59\u989D")]),_:1})]),_:1})),[[i]]),e(F),d((l(),o(n,{clickable:"",onClick:N},{default:a(()=>[e(s,null,{default:a(()=>[u("\u9000\u51FA\u767B\u5F55")]),_:1})]),_:1})),[[i]])]),_:1})]),default:a(()=>[u(" \u51C0\u503C\uFF1A"+_(L.value)+" ",1)]),_:1}),e(b,{class:"q-px-md q-py-sm q-gutter-sm"},{default:a(()=>[(l(!0),C(S,null,x(w.value,t=>(l(),o(j,{key:t.id},{default:a(()=>[t.type?(l(),o(n,{key:0,clickable:"",to:`/accounts/${t.id}/transactions`},{default:a(()=>[e(s,null,{default:a(()=>[e(V,{account:t},null,8,["account"])]),_:2},1024)]),_:2},1032,["to"])):(l(),o(T,{key:1,label:t.name,"model-value":m.value.has(t.id),"onUpdate:modelValue":r=>q(r,t.id)},{header:a(()=>[e(s,null,{default:a(()=>[e(B,null,{default:a(()=>[e(z,{size:"xs",dense:"",flat:"",icon:"edit",to:`/account-groups/${t.id}`,onClick:c[0]||(c[0]=G(()=>{},["stop"]))},null,8,["to"]),u(" "+_(t.name),1)]),_:2},1024)]),_:2},1024),e(s,{side:""},{default:a(()=>[e(B,null,{default:a(()=>[K("span",{class:P(A(R)(t.balance))},_(A(J)(t.balance)),3)]),_:2},1024)]),_:2},1024)]),default:a(()=>[e(b,null,{default:a(()=>[(l(!0),C(S,null,x(t.children,r=>(l(),o(n,{key:r.id,class:"border-top",clickable:"",to:`/accounts/${r.id}/transactions`},{default:a(()=>[e(s,null,{default:a(()=>[e(V,{account:r},null,8,["account"])]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:2},1024)]),_:2},1032,["label","model-value","onUpdate:modelValue"]))]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})}}};export{pa as default};
