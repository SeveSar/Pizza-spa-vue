import{_ as v,d as f,A as h,u as y,l as r,B as P,r as k,o as t,c as s,e as o,t as a,F as A,f as B,g as E}from"./index.8fbbe4da.js";const D=f({setup(){const e=h(),c=y(),n=r(()=>e.params.id),u=r(()=>c.getItemById(+n.value)),d=r(()=>typeof u.value!="undefined");return{product:u,hasProduct:d}},components:{AppError:P}}),b={class:"wrap"},I={key:0,class:"big-product"},$=["src"],C={class:"big-product__name"},F={class:"big-product__rating"},S={class:"big-product__sizes"};function z(e,c,n,u,d,w){var p,_,i,l;const g=k("AppError");return t(),s("div",b,[e.hasProduct?(t(),s("div",I,[o("img",{src:(p=e.product)==null?void 0:p.imageUrl,alt:""},null,8,$),o("h1",C,a((_=e.product)==null?void 0:_.name),1),o("div",F,"\u0420\u0435\u0439\u0442\u0438\u043D\u0433: "+a((i=e.product)==null?void 0:i.rating),1),o("div",S,[(t(!0),s(A,null,B((l=e.product)==null?void 0:l.sizes,m=>(t(),s("div",{key:m.id},a(m.size)+" \u0441\u043C ",1))),128))])])):(t(),E(g,{key:1,title:"\u041E\u0448\u0438\u0431\u043A\u0430 404. \u041F\u0440\u043E\u0434\u0443\u043A\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"}))])}var N=v(D,[["render",z],["__scopeId","data-v-2a6e48a9"]]);export{N as default};