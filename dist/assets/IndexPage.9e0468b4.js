import{_ as p,d as v,u as k,a as x,r as b,o as e,c as u,b as _,w as g,e as i,t as l,f as n,F as m,g as y,n as f,h as C,i as B,j as $}from"./index.00bd3475.js";const P={class:"product"},I=["src"],A={class:"product__body"},S={class:"product__name"},F={class:"product__text"},D={key:0,class:"product__actions"},E=["onClick"],L={class:"product__footer"},N={class:"product__price"},V=v({props:{product:null},setup(t){const c=k(),o=x();return(d,s)=>{const a=b("router-link");return e(),u("article",P,[_(a,{to:{name:"Product",params:{id:t.product.id}},class:"product__img"},{default:g(()=>[i("img",{src:t.product.imageUrl,alt:""},null,8,I)]),_:1},8,["to"]),i("div",A,[_(a,{to:{name:"Product",params:{id:t.product.id}}},{default:g(()=>[i("h4",S,l(t.product.name),1)]),_:1},8,["to"]),i("div",F,"\u0420\u0435\u0439\u0442\u0438\u043D\u0433: "+l(t.product.rating),1)]),n(o).inCart(t.product.id)?C("",!0):(e(),u("div",D,[(e(!0),u(m,null,y(t.product.sizes,r=>(e(),u("button",{class:f(["btn",{active:r.active}]),key:r.id,onClick:h=>n(c).changeSizeProduct(t.product.id,r.id)},l(r.size)+"\u0441\u043C ",11,E))),128))])),i("div",L,[n(o).inCart(t.product.id)?C("",!0):(e(),u("button",{key:0,class:"btn btn--main",onClick:s[0]||(s[0]=r=>n(o).addToCart(t.product))}," \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C ")),n(o).inCart(t.product.id)?(e(),u("button",{key:1,class:"btn btn--main btn--red",onClick:s[1]||(s[1]=r=>n(o).delFromCart(t.product))}," \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")):C("",!0),i("div",N,l(t.product.price)+" \u20BD",1)])])}}});var w=p(V,[["__scopeId","data-v-7452e166"]]);const j={class:"list-product"},z=v({props:{products:null},setup(t){return(c,o)=>(e(),u("ul",j,[(e(!0),u(m,null,y(t.products,d=>(e(),u("li",{class:"list-product__item",key:d.id},[_(w,{product:d},null,8,["product"])]))),128))]))}});var T=p(z,[["__scopeId","data-v-4d84168a"]]);const U={class:"filter"},q={class:"filter__inner"},G=["onClick"],H=v({props:{currentCategory:null},emits:["buttonClick"],setup(t,{emit:c}){const o=[{title:"\u0412\u0441\u0435",category:0},{title:"\u041E\u0441\u0442\u0440\u044B\u0435",category:1},{title:"\u041C\u044F\u0441\u043D\u044B\u0435",category:2},{title:"\u0413\u0440\u0438\u043B\u044C",category:3},{title:"\u0417\u0430\u043A\u0440\u044B\u0442\u044B\u0435",category:4}],d=s=>{c("buttonClick",s.category)};return(s,a)=>(e(),u("div",U,[i("div",q,[(e(!0),u(m,null,y(n(o),r=>(e(),u("button",{class:f(["btn btn--filter",{active:r.category===t.currentCategory}]),onClick:h=>d(r),key:r.category},l(r.title),11,G))),128))])]))}});var J=p(H,[["__scopeId","data-v-cd4c7472"]]);const K={class:"products"},M=v({setup(t){let c=B(0);const o=a=>{c.value=a},d=k(),s=$(()=>d.products.filter(a=>c.value!==0?a.category===c.value:!0));return(a,r)=>(e(),u("div",K,[_(J,{onButtonClick:o,currentCategory:n(c)},null,8,["currentCategory"]),_(T,{products:n(s)},null,8,["products"])]))}});var Q=p(M,[["__scopeId","data-v-6cca957d"]]);export{Q as default};
