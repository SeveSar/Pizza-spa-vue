var Ve=Object.defineProperty;var X=Object.getOwnPropertySymbols;var Ie=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable;var Y=(e,t,n)=>t in e?Ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ee=(e,t)=>{for(var n in t||(t={}))Ie.call(t,n)&&Y(e,n,t[n]);if(X)for(var n of X(t))Te.call(t,n)&&Y(e,n,t[n]);return e};import{T as Se}from"./TheHeader.80f773cc.js";import{d as w,C as Le,s as Fe,D as ie,E as Oe,G as A,_ as S,o as R,g as L,w as j,c as I,e as x,m as ce,H as de,i as me,T as je,p as H,q as U,l as _,j as d,k as b,I as Be,J as M,K as N,L as Me,M as Pe,N as De,O as te,P as ne,Q as ze,R as ue,t as C,S as ke,b as E,h as fe,U as Ne,V as pe,W as qe,A as He,v as Ue,X as We,r as F,Y as Ze,F as Ge,Z as Je,a as Ke}from"./index.8fbbe4da.js";import{B as Qe}from"./BaseButton.2bcbf60d.js";var Xe="/Pizza-spa-vue/assets/close.a4e7cd7c.svg";const Ye=w({setup(){const e=Le(),{loginModal:t}=Fe(e),n=u=>{u.key==="Escape"&&e.closeLoginModal()};return ie(()=>{document.body.addEventListener("keydown",n)}),Oe(()=>{document.body.removeEventListener("keydown",n)}),A(t,u=>{u?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll")}),{loginModal:t,storeModal:e}}}),et=e=>(H("data-v-1f7f33ac"),e=e(),U(),e),tt={class:"modal"},nt=et(()=>x("img",{src:Xe,alt:""},null,-1)),ut=[nt];function rt(e,t,n,u,r,m){return R(),L(je,{name:"fade"},{default:j(()=>[e.loginModal?(R(),I("div",{key:0,class:"modal-overlay",onMousedown:t[1]||(t[1]=de((...l)=>e.storeModal.closeLoginModal&&e.storeModal.closeLoginModal(...l),["self"]))},[x("div",tt,[x("button",{class:"modal-close",onClick:t[0]||(t[0]=(...l)=>e.storeModal.closeLoginModal&&e.storeModal.closeLoginModal(...l))},ut),ce(e.$slots,"default",{},void 0,!0)])],32)):me("",!0)]),_:3})}var st=S(Ye,[["render",rt],["__scopeId","data-v-1f7f33ac"]]);function re(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(e).reduce((n,u)=>(t.includes(u)||(n[u]=d(e[u])),n),{})}function B(e){return typeof e=="function"}function at(e){return Me(e)||Pe(e)}function $e(e,t,n,u){return e.call(u,d(t),d(n),u)}function ve(e){return e.$valid!==void 0?!e.$valid:!e}function ot(e,t,n,u,r,m,l){let{$lazy:i,$rewardEarly:c}=r,f=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],o=arguments.length>8?arguments[8]:void 0,$=arguments.length>9?arguments[9]:void 0,g=arguments.length>10?arguments[10]:void 0;const v=b(!!u.value),s=b(0);n.value=!1;const a=A([t,u].concat(f,g),()=>{if(i&&!u.value||c&&!$.value&&!n.value)return;let p;try{p=$e(e,t,o,l)}catch(y){p=Promise.reject(y)}s.value++,n.value=!!s.value,v.value=!1,Promise.resolve(p).then(y=>{s.value--,n.value=!!s.value,m.value=y,v.value=ve(y)}).catch(y=>{s.value--,n.value=!!s.value,m.value=y,v.value=!0})},{immediate:!0,deep:typeof t=="object"});return{$invalid:v,$unwatch:a}}function lt(e,t,n,u,r,m,l,i){let{$lazy:c,$rewardEarly:f}=u;const o=()=>({}),$=_(()=>{if(c&&!n.value||f&&!i.value)return!1;let g=!0;try{const v=$e(e,t,l,m);r.value=v,g=ve(v)}catch(v){r.value=v}return g});return{$unwatch:o,$invalid:$}}function it(e,t,n,u,r,m,l,i,c,f,o){const $=b(!1),g=e.$params||{},v=b(null);let s,a;e.$async?{$invalid:s,$unwatch:a}=ot(e.$validator,t,$,n,u,v,r,e.$watchTargets,c,f,o):{$invalid:s,$unwatch:a}=lt(e.$validator,t,n,u,v,r,c,f);const p=e.$message;return{$message:B(p)?_(()=>p(re({$pending:$,$invalid:s,$params:re(g),$model:t,$response:v,$validator:m,$propertyPath:i,$property:l}))):p||"",$params:g,$pending:$,$invalid:s,$response:v,$unwatch:a}}function ct(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=d(e),n=Object.keys(t),u={},r={},m={};return n.forEach(l=>{const i=t[l];switch(!0){case B(i.$validator):u[l]=i;break;case B(i):u[l]={$validator:i};break;case l.startsWith("$"):m[l]=i;break;default:r[l]=i}}),{rules:u,nestedValidators:r,config:m}}function dt(){}const mt="__root";function _e(e,t,n){if(n)return t?t(e()):e();try{var u=Promise.resolve(e());return t?u.then(t):u}catch(r){return Promise.reject(r)}}function ft(e,t){return _e(e,dt,t)}function pt(e,t){var n=e();return n&&n.then?n.then(t):t(n)}function $t(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(u){return Promise.reject(u)}}}function vt(e,t,n,u,r,m,l,i,c){const f=Object.keys(e),o=u.get(r,e),$=b(!1),g=b(!1),v=b(0);if(o){if(!o.$partial)return o;o.$unwatch(),$.value=o.$dirty.value}const s={$dirty:$,$path:r,$touch:()=>{$.value||($.value=!0)},$reset:()=>{$.value&&($.value=!1)},$commit:()=>{}};return f.length?(f.forEach(a=>{s[a]=it(e[a],t,s.$dirty,m,l,a,n,r,c,g,v)}),s.$externalResults=_(()=>i.value?[].concat(i.value).map((a,p)=>({$propertyPath:r,$property:n,$validator:"$externalResults",$uid:`${r}-externalResult-${p}`,$message:a,$params:{},$response:null,$pending:!1})):[]),s.$invalid=_(()=>{const a=f.some(p=>d(s[p].$invalid));return g.value=a,!!s.$externalResults.value.length||a}),s.$pending=_(()=>f.some(a=>d(s[a].$pending))),s.$error=_(()=>s.$dirty.value?s.$pending.value||s.$invalid.value:!1),s.$silentErrors=_(()=>f.filter(a=>d(s[a].$invalid)).map(a=>{const p=s[a];return M({$propertyPath:r,$property:n,$validator:a,$uid:`${r}-${a}`,$message:p.$message,$params:p.$params,$response:p.$response,$pending:p.$pending})}).concat(s.$externalResults.value)),s.$errors=_(()=>s.$dirty.value?s.$silentErrors.value:[]),s.$unwatch=()=>f.forEach(a=>{s[a].$unwatch()}),s.$commit=()=>{g.value=!0,v.value=Date.now()},u.set(r,e,s),s):(o&&u.set(r,e,s),s)}function _t(e,t,n,u,r,m,l){const i=Object.keys(e);return i.length?i.reduce((c,f)=>(c[f]=q({validations:e[f],state:t,key:f,parentKey:n,resultsCache:u,globalConfig:r,instance:m,externalResults:l}),c),{}):{}}function gt(e,t,n){const u=_(()=>[t,n].filter(s=>s).reduce((s,a)=>s.concat(Object.values(d(a))),[])),r=_({get(){return e.$dirty.value||(u.value.length?u.value.every(s=>s.$dirty):!1)},set(s){e.$dirty.value=s}}),m=_(()=>{const s=d(e.$silentErrors)||[],a=u.value.filter(p=>(d(p).$silentErrors||[]).length).reduce((p,y)=>p.concat(...y.$silentErrors),[]);return s.concat(a)}),l=_(()=>{const s=d(e.$errors)||[],a=u.value.filter(p=>(d(p).$errors||[]).length).reduce((p,y)=>p.concat(...y.$errors),[]);return s.concat(a)}),i=_(()=>u.value.some(s=>s.$invalid)||d(e.$invalid)||!1),c=_(()=>u.value.some(s=>d(s.$pending))||d(e.$pending)||!1),f=_(()=>u.value.some(s=>s.$dirty)||u.value.some(s=>s.$anyDirty)||r.value),o=_(()=>r.value?c.value||i.value:!1),$=()=>{e.$touch(),u.value.forEach(s=>{s.$touch()})},g=()=>{e.$commit(),u.value.forEach(s=>{s.$commit()})},v=()=>{e.$reset(),u.value.forEach(s=>{s.$reset()})};return u.value.length&&u.value.every(s=>s.$dirty)&&$(),{$dirty:r,$errors:l,$invalid:i,$anyDirty:f,$error:o,$pending:c,$touch:$,$reset:v,$silentErrors:m,$commit:g}}function q(e){const t=$t(function(){return k(),pt(function(){if(a.$rewardEarly)return K(),ft(ue)},function(){return _e(ue,function(){return new Promise(h=>{if(!z.value)return h(!D.value);const T=A(z,()=>{h(!D.value),T()})})})})});let{validations:n,state:u,key:r,parentKey:m,childResults:l,resultsCache:i,globalConfig:c={},instance:f,externalResults:o}=e;const $=m?`${m}.${r}`:r,{rules:g,nestedValidators:v,config:s}=ct(n),a=Object.assign({},c,s),p=r?_(()=>{const h=d(u);return h?d(h[r]):void 0}):u,y=Object.assign({},d(o)||{}),Z=_(()=>{const h=d(o);return r?h?d(h[r]):void 0:h}),G=vt(g,p,r,i,$,a,f,Z,u),J=_t(v,p,$,i,a,f,Z),{$dirty:P,$errors:ye,$invalid:D,$anyDirty:xe,$error:be,$pending:z,$touch:k,$reset:Re,$silentErrors:Ee,$commit:K}=gt(G,J,l),Ae=r?_({get:()=>d(p),set:h=>{P.value=!0;const T=d(u),Q=d(o);Q&&(Q[r]=y[r]),N(T[r])?T[r].value=h:T[r]=h}}):null;r&&a.$autoDirty&&A(p,()=>{P.value||k();const h=d(o);h&&(h[r]=y[r])},{flush:"sync"});function Ce(h){return(l.value||{})[h]}function we(){N(o)?o.value=y:Object.keys(y).length===0?Object.keys(o).forEach(h=>{delete o[h]}):Object.assign(o,y)}return M(Object.assign({},G,{$model:Ae,$dirty:P,$error:be,$errors:ye,$invalid:D,$anyDirty:xe,$pending:z,$touch:k,$reset:Re,$path:$||mt,$silentErrors:Ee,$validate:t,$commit:K},l&&{$getResultsForChild:Ce,$clearExternalResults:we},J))}class ht{constructor(){this.storage=new Map}set(t,n,u){this.storage.set(t,{rules:n,result:u})}checkRulesValidity(t,n,u){const r=Object.keys(u),m=Object.keys(n);return m.length!==r.length||!m.every(i=>r.includes(i))?!1:m.every(i=>n[i].$params?Object.keys(n[i].$params).every(c=>d(u[i].$params[c])===d(n[i].$params[c])):!0)}get(t,n){const u=this.storage.get(t);if(!u)return;const{rules:r,result:m}=u,l=this.checkRulesValidity(t,n,r),i=m.$unwatch?m.$unwatch:()=>({});return l?m:{$dirty:m.$dirty,$partial:!0,$unwatch:i}}}const O={COLLECT_ALL:!0,COLLECT_NONE:!1},se=Symbol("vuelidate#injectChildResults"),ae=Symbol("vuelidate#removeChildResults");function yt(e){let{$scope:t,instance:n}=e;const u={},r=b([]),m=_(()=>r.value.reduce((o,$)=>(o[$]=d(u[$]),o),{}));function l(o,$){let{$registerAs:g,$scope:v,$stopPropagation:s}=$;s||t===O.COLLECT_NONE||v===O.COLLECT_NONE||t!==O.COLLECT_ALL&&t!==v||(u[g]=o,r.value.push(g))}n.__vuelidateInjectInstances=[].concat(n.__vuelidateInjectInstances||[],l);function i(o){r.value=r.value.filter($=>$!==o),delete u[o]}n.__vuelidateRemoveInstances=[].concat(n.__vuelidateRemoveInstances||[],i);const c=te(se,[]);ne(se,n.__vuelidateInjectInstances);const f=te(ae,[]);return ne(ae,n.__vuelidateRemoveInstances),{childResults:m,sendValidationResultsToParent:c,removeValidationResultsFromParent:f}}function ge(e){return new Proxy(e,{get(t,n){return typeof t[n]=="object"?ge(t[n]):_(()=>t[n])}})}function xt(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(n=e,e=void 0,t=void 0);let{$registerAs:u,$scope:r=O.COLLECT_ALL,$stopPropagation:m,$externalResults:l,currentVueInstance:i}=n;const c=i||ze(),f=c?c.proxy.$options:{};!u&&c&&(u=`_vuelidate_${c.uid||c._uid}`);const o=b({}),$=new ht,{childResults:g,sendValidationResultsToParent:v,removeValidationResultsFromParent:s}=c?yt({$scope:r,instance:c}):{childResults:b({})};if(!e&&f.validations){const a=f.validations;t=b({}),Be(()=>{t.value=c.proxy,A(()=>B(a)?a.call(t.value,new ge(t.value)):a,p=>{o.value=q({validations:p,state:t,childResults:g,resultsCache:$,globalConfig:n,instance:c.proxy,externalResults:l||c.proxy.vuelidateExternalResults})},{immediate:!0})}),n=f.validationsConfig||n}else{const a=N(e)||at(e)?e:M(e||{});A(a,p=>{o.value=q({validations:p,state:t,childResults:g,resultsCache:$,globalConfig:n,instance:c?c.proxy:{},externalResults:l})},{immediate:!0})}return c&&(v.forEach(a=>a(o,{$registerAs:u,$scope:r,$stopPropagation:m})),De(()=>s.forEach(a=>a(u)))),_(()=>Object.assign({},d(o.value),g.value))}const W=e=>{if(e=d(e),Array.isArray(e))return!!e.length;if(e==null)return!1;if(e===!1)return!0;if(e instanceof Date)return!isNaN(e.getTime());if(typeof e=="object"){for(let t in e)return!0;return!1}return!!String(e).length},bt=e=>(e=d(e),Array.isArray(e)?e.length:typeof e=="object"?Object.keys(e).length:String(e).length);function V(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return u=>(u=d(u),!W(u)||t.every(r=>r.test(u)))}V(/^[a-zA-Z]*$/);V(/^[a-zA-Z0-9]*$/);V(/^\d*(\.\d+)?$/);const Rt=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var Et=V(Rt),At={$validator:Et,$message:"Value is not a valid email address",$params:{type:"email"}};function Ct(e){return t=>!W(t)||bt(t)>=d(e)}function wt(e){return{$validator:Ct(e),$message:t=>{let{$params:n}=t;return`This field should be at least ${n.min} characters long`},$params:{min:e,type:"minLength"}}}function Vt(e){return typeof e=="string"&&(e=e.trim()),W(e)}var oe={$validator:Vt,$message:"Value is required",$params:{type:"required"}};const It=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;V(It);V(/(^[0-9]*$)|(^-[0-9]+$)/);V(/^[-]?\d*(\.\d+)?$/);const Tt=w({inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},id:{type:String,default:""},labelText:{type:String,default:null},errors:{type:[Boolean,String],default:!1}},emits:["update:modelValue"],setup(e,t){return{updateValue:u=>{t.emit("update:modelValue",u.target.value)}}}}),St={class:"form-group"},Lt=["for"],Ft=["id","value"],Ot={key:0};function jt(e,t,n,u,r,m){return R(),I("div",St,[x("label",{for:e.id},C(e.labelText),9,Lt),x("input",ke({class:"form-control",id:e.id,value:e.modelValue,onInput:t[0]||(t[0]=(...l)=>e.updateValue&&e.updateValue(...l))},e.$attrs),null,16,Ft),e.errors?(R(),I("small",Ot,C(e.errors),1)):me("",!0)])}var le=S(Tt,[["render",jt],["__scopeId","data-v-72cac582"]]);const Bt=e=>(H("data-v-5dfb59a6"),e=e(),U(),e),Mt=["onSubmit"],Pt={class:"form-auth__header"},Dt={class:"form-auth__title"},zt=Bt(()=>x("div",{class:"form-auth__text"}," \u0421\u043C\u043E\u0436\u0435\u0442\u0435 \u0431\u044B\u0441\u0442\u0440\u043E \u043E\u0444\u043E\u0440\u043C\u043B\u044F\u0442\u044C \u0437\u0430\u043A\u0430\u0437\u044B, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u044B ",-1)),kt={class:"form-auth__body"},Nt=w({props:{buttonText:{type:String,default:"\u0412\u043E\u0439\u0442\u0438 \u0432 \u0430\u043A\u043A\u0430\u0443\u043D\u0442"},titleForm:{type:String,default:"\u0412\u0445\u043E\u0434 \u0432 \u0430\u043A\u043A\u0430\u0443\u043D\u0442"}},emits:["submit-form"],setup(e,{emit:t}){const n=M({emailInput:"",passwordInput:""}),u={emailInput:{required:oe,email:At},passwordInput:{required:oe,minLength:wt(6)}},r=xt(u,n,{$lazy:!0,$autoDirty:!0}).value,m=_(()=>r.emailInput.required.$invalid?"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 e-mail":r.emailInput.email.$invalid?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 e-mail":!1),l=_(()=>r.passwordInput.required.$invalid?"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C":r.passwordInput.minLength.$invalid?"\u041C\u0438\u043D 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432":!1),i=async()=>{const c=await r.$validate(),{emailInput:f,passwordInput:o}=Ne(n);c&&t("submit-form",{email:f.value,password:o.value})};return(c,f)=>(R(),I("form",{onSubmit:de(i,["prevent"]),class:"form-auth"},[x("div",Pt,[x("h3",Dt,C(e.titleForm),1),zt]),x("div",kt,[E(le,{modelValue:d(r).emailInput.$model,"onUpdate:modelValue":f[0]||(f[0]=o=>d(r).emailInput.$model=o),labelText:"\u0412\u0430\u0448 E-mail",id:"auth-1",errors:d(m),name:"email"},null,8,["modelValue","errors"]),E(le,{labelText:"\u0412\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C",id:"auth-2",type:"password",name:"password",errors:d(l),modelValue:d(r).passwordInput.$model,"onUpdate:modelValue":f[1]||(f[1]=o=>d(r).passwordInput.$model=o)},null,8,["errors","modelValue"])]),E(Qe,{type:"submit",color:"standart"},{default:j(()=>[fe(C(e.buttonText),1)]),_:1})],40,Mt))}});var he=S(Nt,[["__scopeId","data-v-5dfb59a6"]]);const qt=w({setup(e){const t=pe(),n=async u=>{await t.login(u.email,u.password)};return(u,r)=>(R(),L(he,{onSubmitForm:n}))}}),Ht=w({setup(e){const t=pe(),n=async u=>{await t.register(u.email,u.password)};return(u,r)=>(R(),L(he,{"title-form":"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044C","button-text":"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442",onSubmitForm:n}))}});const Ut=w({components:{AppAuthForm:qt,AppRegisterForm:Ht},setup(){const e=b("AppAuthForm"),t=_(()=>e.value==="AppAuthForm"?{text:"\u041D\u0435 \u0437\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u044B ?",buttonText:"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442"}:{text:"\u0423\u0436\u0435 \u0435\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442 ?",buttonText:"\u0412\u043E\u0439\u0434\u0438 \u0432 \u0430\u043A\u043A\u0430\u0443\u043D\u0442"});return{typeForm:e,currentTextButton:t,changeForm:()=>{e.value=e.value==="AppAuthForm"?"AppRegisterForm":"AppAuthForm"}}}}),Wt={class:"modal-content"},Zt={class:"modal-content__inner"},Gt={class:"modal-content__notify"};function Jt(e,t,n,u,r,m){return R(),I("div",Wt,[x("div",Zt,[(R(),L(qe(e.typeForm)))]),x("div",Gt,[fe(C(e.currentTextButton.text)+" ",1),x("button",{onClick:t[0]||(t[0]=(...l)=>e.changeForm&&e.changeForm(...l))},C(e.currentTextButton.buttonText),1)])])}var Kt=S(Ut,[["render",Jt],["__scopeId","data-v-6c3dfa02"]]),Qt="/Pizza-spa-vue/assets/cart.0064135d.svg";const Xt=w({setup(){const e=He(),t=Ue(),n=()=>{if(e.query.msg){switch(e.query.msg){case"NOT_AUTH":Je("error",{title:"Error",text:"\u0412\u044B \u043D\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D\u044B"});break}t.push({query:{}})}};ie(()=>{n()}),A(()=>e.query,()=>{n()})},components:{TheHeader:Se,AppModalWrap:st,AppModalAuth:Kt},computed:ee({},We(Ke,["totalItems"]))}),Yt=e=>(H("data-v-7702b3db"),e=e(),U(),e),en=Yt(()=>x("img",{src:Qt,alt:""},null,-1)),tn={class:"main"},nn={class:"container"};function un(e,t,n,u,r,m){const l=F("TheHeader"),i=F("AppModalAuth"),c=F("AppModalWrap"),f=F("router-link");return R(),I(Ge,null,[E(l),(R(),L(Ze,{to:"body"},[E(c,null,{default:j(()=>[E(i)]),_:1}),E(f,{to:{name:"Cart"},class:"cart-mobile"},{default:j(()=>[en,x("span",null,C(e.totalItems),1)]),_:1})])),x("main",tn,[x("div",nn,[ce(e.$slots,"default",{},void 0,!0)])])],64)}var ln=S(Xt,[["render",un],["__scopeId","data-v-7702b3db"]]);export{ln as default};
