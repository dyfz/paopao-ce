import{_ as z}from"./post-item.vue_vue_type_style_index_0_lang-c48fe5cf.js";import{_ as B}from"./post-skeleton-fdf95824.js";import{_ as F}from"./main-nav.vue_vue_type_style_index_0_lang-5f0e81a4.js";import{u as P}from"./vuex-cc1858c6.js";import{b as R,u as $}from"./vue-router-29025daf.js";import{G as b,_ as G}from"./index-f6017bc3.js";import{d as I,r as s,j as L,c as e,L as n,Y as m,U as M,O as u,o as t,F as N,$ as S,K as U}from"./@vue-f70ab1bd.js";import{F as V,G as j,I as q,H as E}from"./naive-ui-ddb574dd.js";import"./content-0b348d1e.js";import"./@vicons-2f3cb6b9.js";import"./nonesir-video-29a967e9.js";import"./formatTime-936c40eb.js";import"./moment-b7869f98.js";import"./vooks-dfdd6eef.js";import"./evtd-b614532e.js";import"./axios-707ed124.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-804c4158.js";import"./@css-render-66126308.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";const H={key:0,class:"skeleton-wrap"},K={key:1},O={key:0,class:"empty-wrap"},T={key:0,class:"pagination-wrap"},Y=I({__name:"Collection",setup(A){const d=P(),g=R();$();const a=s(!1),_=s([]),p=s(+g.query.p||1),i=s(20),r=s(0),l=()=>{a.value=!0,b({page:p.value,page_size:i.value}).then(o=>{a.value=!1,_.value=o.list,r.value=Math.ceil(o.pager.total_rows/i.value),window.scrollTo(0,0)}).catch(o=>{a.value=!1})},v=o=>{p.value=o,l()};return L(()=>{l()}),(o,D)=>{const f=F,h=B,k=q,y=z,w=E,C=V,x=j;return t(),e("div",null,[n(f,{title:"收藏"}),n(C,{class:"main-content-wrap",bordered:""},{default:m(()=>[a.value?(t(),e("div",H,[n(h,{num:i.value},null,8,["num"])])):(t(),e("div",K,[_.value.length===0?(t(),e("div",O,[n(k,{size:"large",description:"暂无数据"})])):u("",!0),(t(!0),e(N,null,S(_.value,c=>(t(),U(w,{key:c.id},{default:m(()=>[n(y,{post:c},null,8,["post"])]),_:2},1024))),128))]))]),_:1}),r.value>0?(t(),e("div",T,[n(x,{page:p.value,"onUpdate:page":v,"page-slot":M(d).state.collapsedRight?5:8,"page-count":r.value},null,8,["page","page-slot","page-count"])])):u("",!0)])}}});const xt=G(Y,[["__scopeId","data-v-1e709369"]]);export{xt as default};
