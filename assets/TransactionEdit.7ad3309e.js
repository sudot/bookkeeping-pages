import{bg as ee,bp as te,aY as ae,B as le,r as d,w as ne,ab as v,f as c,E as V,m as o,k as u,j as D,G as T,Q as A,n as L,q as N,t as H,W as M,Y as S,H as C,a0 as _,a1 as oe,F as se,V as ue,bk as j}from"./index.46a27899.js";import{Q as ie}from"./QForm.143d2f76.js";import{g as re,Q as de,d as pe,s as ce}from"./transaction.8e31b849.js";import{a as I,Q as me}from"./QPageSticky.81a02079.js";import{a as fe,Q as ge,d as he}from"./QToolbar.3af662a7.js";import{u as ve}from"./use-quasar.20dd07d7.js";import{u as ye}from"./key.dfec5238.js";import{f as we}from"./account-group.879321a1.js";import{a as Ve,f as Ie,T as Q}from"./transaction.45dcaa38.js";import{f as be,a as xe}from"./payee.772acdd3.js";import"./use-page-sticky.f7fef31c.js";import"./QResizeObserver.5ab78c49.js";function F(f){return ee.get(`/descriptions?${te(f)}`)}const G=ae("visualViewport",{state:()=>{var f,p;if(window.visualViewport){const y=G(),b=()=>{var r,g;y.height=((r=window.visualViewport)==null?void 0:r.height)||window.innerHeight,y.width=((g=window.visualViewport)==null?void 0:g.width)||window.innerWidth};window.visualViewport.addEventListener("resize",b)}return{width:((f=window.visualViewport)==null?void 0:f.width)||window.innerWidth,height:((p=window.visualViewport)==null?void 0:p.height)||window.innerHeight}}}),ke={key:0,class:"row no-wrap q-col-gutter-x-sm"},Re={__name:"TransactionEdit",setup(f){var P,R,q;const{id:p,titlePrefix:y}=ye(le().params.transactionId),b=ve(),r=Ve(),g=d(null),m=d(!1),a=d({id:p,type:"Withdraw",senderAccountId:"",recipientAccountId:"",originalAmount:0,desc:"",categoryId:"",date:0,payeeId:"",notes:""}),E=d([]),w=d([]),U=d([]),x=d([]),h=d(!1),K=d(0);let z={};const k={},B=n=>{z[n]&&(a.value.categoryId=z[n]),F({transactionType:n}).then(t=>x.value=t.data),U.value=k[n]},W=n=>{F({transactionType:a.value.type,keyword:n}).then(t=>x.value=t.data)},Y=()=>{const n=a.value.senderAccountId;a.value.senderAccountId=a.value.recipientAccountId,a.value.recipientAccountId=n},$=n=>{a.value.desc=n.content,a.value.payeeId=n.payeeId,a.value.categoryId=n.categoryId,h.value=!1},O=j(()=>{m.value=!0,pe(a.value.id).then(()=>{r.publish({id:a.value.id},Q.DELETED)}).finally(()=>m.value=!1)},1e3),J=j(()=>{m.value=!0;const n=a.value.id?Q.UPDATED:Q.ADDED;ce({...a.value}).then(t=>{g.value.goBack(),r.publish(t.data,n)}).catch(t=>{var i,l;b.notify({type:"negative",message:((l=(i=t==null?void 0:t.response)==null?void 0:i.data)==null?void 0:l.message)||"\u64CD\u4F5C\u7ED3\u679C-\u5931\u8D25"})}).finally(()=>m.value=!1)},1e3);return!p||((P=r.editData)==null?void 0:P.id)==p?a.value={...a.value,...r.editData,type:((R=r.editData)==null?void 0:R.type)||"Withdraw",date:((q=r.editData)==null?void 0:q.date)||new Date().getTime()}:p&&re(p).then(n=>{a.value={...a.value,...n.data}}),we().then(n=>{const t={},i=[];n.data.forEach(l=>{const s={id:l.id,name:l.name,children:[]};t[l.id]=s,i.push(s)}),Ie().then(l=>{l.data.forEach(s=>{s.groupId?t[s.groupId].children.push({id:s.id,name:s.name}):i.push({id:s.id,name:s.name})}),w.value=i})}),be().then(n=>{const t={},i=[];n.data.forEach(l=>{if(l.parentId)return;const s={id:l.id,name:l.name,type:l.type,children:[]};t[l.id]=s,i.push(s)}),n.data.forEach(l=>{!l.parentId||t[l.parentId].children.push({id:l.id,name:l.name})});for(const l of Object.values(t))l.children.length===0&&l.children.push({...l,children:[]});k.Withdraw=i.filter(l=>l.type=="Expense"),k.Deposit=i.filter(l=>l.type=="Income"),B(a.value.type)}),xe().then(n=>{E.value=[{id:"",name:"\u4E0D\u9009\u62E9"}].concat(n.data)}),ne(()=>G().height,n=>K.value=window.innerHeight-n),(n,t)=>{const i=v("nav-bar"),l=v("InputNumberKeyboard"),s=v("InputSingleTreeSelect"),X=v("InputDateTimePopup"),Z=v("InputSingleListSheet");return c(),V(C,null,[o(i,{ref_key:"navBarRef",ref:g},{btn:u(()=>[a.value.id?(c(),D(A,{key:0,flat:"",round:"",icon:"delete",loading:m.value,onClick:T(O)},null,8,["loading","onClick"])):L("",!0),o(A,{flat:"",dense:"",icon:"save",loading:m.value,onClick:t[0]||(t[0]=e=>n.$refs.formRef.submit())},null,8,["loading"])]),default:u(()=>[N(H(T(y))+"\u4EA4\u6613 ",1)]),_:1},512),o(ie,{ref:"formRef",class:"q-px-md scroll",style:{"margin-top":"50px","max-height":"calc(100vh - 350px)"},greedy:"",onSubmit:T(J)},{default:u(()=>[o(l,{modelValue:a.value.originalAmount,"onUpdate:modelValue":t[1]||(t[1]=e=>a.value.originalAmount=e),"input-class":"text-right",prefix:"\u91D1\u989D",placeholder:"\u8BF7\u8F93\u5165\u91D1\u989D","always-show":"",dense:"","lazy-rules":"",rules:[e=>!0],onClick:t[2]||(t[2]=e=>h.value=!1)},null,8,["modelValue"]),a.value.type=="Transfer"?(c(),V("div",ke,[o(s,{modelValue:a.value.senderAccountId,"onUpdate:modelValue":t[3]||(t[3]=e=>a.value.senderAccountId=e),"input-class":"text-right",prefix:"\u8D26\u6237",placeholder:"\u70B9\u51FB\u9009\u62E9\u8D26\u6237",dense:"","lazy-rules":"",rules:[e=>(e==null?void 0:e.length)||"\u8BF7\u9009\u62E9\u8D26\u6237"],items:w.value},null,8,["modelValue","rules","items"]),o(M,{name:"double_arrow",size:"3em",onClick:Y}),o(s,{modelValue:a.value.recipientAccountId,"onUpdate:modelValue":t[4]||(t[4]=e=>a.value.recipientAccountId=e),"input-class":"text-right",placeholder:"\u70B9\u51FB\u9009\u62E9\u8D26\u6237",dense:"","lazy-rules":"",rules:[e=>(e==null?void 0:e.length)||"\u8BF7\u9009\u62E9\u8D26\u6237"],items:w.value},null,8,["modelValue","rules","items"])])):(c(),D(s,{key:1,modelValue:a.value.senderAccountId,"onUpdate:modelValue":t[5]||(t[5]=e=>a.value.senderAccountId=e),"input-class":"text-right",prefix:"\u8D26\u6237",placeholder:"\u70B9\u51FB\u9009\u62E9\u8D26\u6237",dense:"","lazy-rules":"",rules:[e=>(e==null?void 0:e.length)||"\u8BF7\u9009\u62E9\u8D26\u6237"],items:w.value},null,8,["modelValue","rules","items"])),o(S,{modelValue:a.value.desc,"onUpdate:modelValue":[t[6]||(t[6]=e=>a.value.desc=e),W],"input-class":"text-right",prefix:"\u63CF\u8FF0",placeholder:"\u8BF7\u8F93\u5165\u5BF9\u8FD9\u6B21\u4EA4\u6613\u7684\u7B80\u8981\u63CF\u8FF0",dense:"","lazy-rules":"",rules:[e=>(e==null?void 0:e.length)||"\u8BF7\u8F93\u5165\u5BF9\u8FD9\u6B21\u4EA4\u6613\u7684\u7B80\u8981\u63CF\u8FF0"],onClick:t[7]||(t[7]=e=>h.value=!0)},null,8,["modelValue","rules"]),o(X,{modelValue:a.value.date,"onUpdate:modelValue":t[8]||(t[8]=e=>a.value.date=e),"input-class":"text-right",prefix:"\u65F6\u95F4",placeholder:"\u70B9\u51FB\u9009\u62E9\u4EA4\u6613\u65F6\u95F4",dense:"","lazy-rules":"",rules:[e=>(e==null?void 0:e.length)||"\u8BF7\u9009\u62E9\u4EA4\u6613\u65F6\u95F4"]},null,8,["modelValue","rules"]),a.value.type=="Withdraw"||a.value.type=="Deposit"?(c(),V(C,{key:2},[o(s,{modelValue:a.value.categoryId,"onUpdate:modelValue":t[9]||(t[9]=e=>a.value.categoryId=e),"input-class":"text-right",prefix:"\u5206\u7C7B",placeholder:"\u70B9\u51FB\u9009\u62E9\u5206\u7C7B",dense:"","lazy-rules":"",rules:[e=>(e==null?void 0:e.length)||"\u8BF7\u9009\u62E9\u5206\u7C7B"],items:U.value},null,8,["modelValue","rules","items"]),o(Z,{modelValue:a.value.payeeId,"onUpdate:modelValue":t[10]||(t[10]=e=>a.value.payeeId=e),"input-class":"text-right",prefix:"\u4EA4\u6613\u5BF9\u8C61",placeholder:"\u70B9\u51FB\u9009\u62E9\u4EA4\u6613\u5BF9\u8C61",dense:"","lazy-rules":"",rules:[e=>!0],items:E.value},null,8,["modelValue","items"])],64)):L("",!0),o(S,{modelValue:a.value.notes,"onUpdate:modelValue":t[11]||(t[11]=e=>a.value.notes=e),"input-class":"text-right",type:"textarea",prefix:"\u5907\u6CE8",placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",dense:"",rows:"3"},null,8,["modelValue"])]),_:1},8,["onSubmit"]),o(ue,{modelValue:h.value,"onUpdate:modelValue":t[14]||(t[14]=e=>h.value=e),position:"bottom"},{default:u(()=>[o(_,null,{default:u(()=>[o(S,{modelValue:a.value.desc,"onUpdate:modelValue":[t[13]||(t[13]=e=>a.value.desc=e),W],type:"search",filled:"",clearable:"",debounce:"500"},{prepend:u(()=>[o(M,{name:"search"})]),append:u(()=>[o(A,{color:"primary",label:"\u786E\u5B9A",onClick:t[12]||(t[12]=e=>$({content:a.value.desc}))})]),_:1},8,["modelValue"]),o(oe,{class:"flex content-start scroll",style:{height:"60vh"}},{default:u(()=>[(c(!0),V(C,null,se(x.value,e=>(c(),D(de,{key:e.id,clickable:"",onClick:De=>$(e)},{default:u(()=>[N(H(e.content),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(me,{expand:"",position:"top"},{default:u(()=>[o(fe,{class:"q-pa-none"},{default:u(()=>[o(ge,null,{default:u(()=>[o(_,null,{default:u(()=>[o(he,{modelValue:a.value.type,"onUpdate:modelValue":[t[15]||(t[15]=e=>a.value.type=e),B],align:"justify"},{default:u(()=>[o(I,{label:"\u652F\u51FA",name:"Withdraw"}),o(I,{label:"\u6536\u5165",name:"Deposit"}),o(I,{label:"\u8F6C\u8D26",name:"Transfer"}),o(I,{label:"\u8C03\u6574\u4F59\u989D",name:"Reconcile"})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})],64)}}};export{Re as default};
