import{d as se,H as r,r as ye,e as o,f as _,j as p,k as t,w as n,A as U,x as z,q as T,Y as u,bf as a,y as j,c as le,al as Ye,F as de,u as me,$ as Te,a0 as Ue,b as ze,h as Ce,E as Je}from"./@vue-a481fc63.js";import{u as ie}from"./vuex-44de225f.js";import{f as ve,t as Ke,h as We,i as Ge,_ as ue,j as Qe,k as Xe,l as Ze,m as et,n as tt,g as st,o as ot,p as nt,q as at,r as lt,s as it,u as ut,v as ct,w as rt,x as _t,y as pt,z as dt,A as ge}from"./index-ac7904e2.js";import{Y as ee,V as X}from"./IEnum-5453a777.js";import{T as Re,e as he,f as Se,g as fe,h as Le,i as mt,j as vt,I as ht,k as ft,l as gt,m as yt,n as kt,o as wt,p as bt,q as $t,r as Ct,s as xt,t as It,u as Pt,v as xe,F as Ie,E as re,w as _e,x as pe,y as Pe}from"./@vicons-4ed09704.js";import{j as J,e as ce,J as Oe,H as Tt,b as Ut,K as zt,o as ke,L as Ae,M as De,v as Rt,w as St,x as Lt,y as Ot,z as At,B as Dt,O as Mt,i as Et,P as Nt,a as Me,F as qt,I as Bt,k as Ht,G as jt,f as Ft,g as Vt}from"./naive-ui-609478ed.js";import{p as we,_ as Ee,a as Yt,b as Jt,c as Kt}from"./content-3f086a36.js";import{u as Ne,b as Wt}from"./vue-router-e5a2430e.js";import{_ as Gt}from"./post-skeleton-32ed3219.js";import{l as Qt}from"./lodash-e0b37ac3.js";import{_ as Xt}from"./whisper-b4b61448.js";import{c as Zt}from"./copy-to-clipboard-4ef7d3eb.js";import{_ as es}from"./main-nav.vue_vue_type_style_index_0_lang-e2b1e404.js";import{W as ts}from"./v3-infinite-loading-2c58ec2f.js";import"./axios-4a70c6fc.js";import"./moment-2ab8298d.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-39372edb.js";import"./evtd-b614532e.js";import"./@css-render-7124a1a5.js";import"./vooks-6d99783e.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";import"./paopao-video-player-2fe58954.js";import"./@babel-725317a4.js";import"./toggle-selection-93f4ad84.js";const ss={class:"reply-item"},os={class:"header-wrap"},ns={class:"username"},as={class:"reply-name"},ls={class:"timestamp"},is={class:"base-wrap"},us={class:"content"},cs={class:"reply-switch"},rs={class:"time-item"},_s={class:"actions"},ps={class:"upvote-count"},ds=["onClick"],ms={class:"upvote-count"},vs={key:2,class:"action-item"},hs=["onClick"],fs=se({__name:"reply-item",props:{tweetId:{},reply:{}},emits:["focusReply","reload"],setup(E,{emit:N}){const l=E,d=ie(),m=r(l.reply.is_thumbs_up==ee.YES),g=r(l.reply.is_thumbs_down==ee.YES),w=r(l.reply.thumbs_up_count),A=()=>{Ke({tweet_id:l.tweetId,comment_id:l.reply.comment_id,reply_id:l.reply.id}).then(v=>{m.value=!m.value,m.value?(w.value++,g.value=!1):w.value--}).catch(v=>{console.log(v)})},c=()=>{We({tweet_id:l.tweetId,comment_id:l.reply.comment_id,reply_id:l.reply.id}).then(v=>{g.value=!g.value,g.value&&m.value&&(w.value--,m.value=!1)}).catch(v=>{console.log(v)})},R=()=>{N("focusReply",l.reply)},O=()=>{Ge({id:l.reply.id}).then(v=>{window.$message.success("删除成功"),setTimeout(()=>{N("reload")},50)}).catch(v=>{console.log(v)})};return(v,C)=>{const D=ye("router-link"),x=J,b=ce,P=Oe,y=Tt;return o(),_("div",ss,[p("div",os,[p("div",ns,[t(D,{class:"user-link",to:{name:"user",query:{s:l.reply.user.username}}},{default:n(()=>[U(z(l.reply.user.username),1)]),_:1},8,["to"]),p("span",as,z(l.reply.at_user_id>0?"回复":":"),1),l.reply.at_user_id>0?(o(),T(D,{key:0,class:"user-link",to:{name:"user",query:{s:l.reply.at_user.username}}},{default:n(()=>[U(z(l.reply.at_user.username),1)]),_:1},8,["to"])):u("",!0)]),p("div",ls,[U(z(l.reply.ip_loc)+" ",1),a(d).state.userInfo.is_admin||a(d).state.userInfo.id===l.reply.user.id?(o(),T(P,{key:0,"negative-text":"取消","positive-text":"确认",onPositiveClick:O},{trigger:n(()=>[t(b,{quaternary:"",circle:"",size:"tiny",class:"del-btn"},{icon:n(()=>[t(x,null,{default:n(()=>[t(a(Re))]),_:1})]),_:1})]),default:n(()=>[U(" 是否删除这条回复？ ")]),_:1})):u("",!0)])]),p("div",is,[p("div",us,[t(y,{"expand-trigger":"click","line-clamp":"5",tooltip:!1},{default:n(()=>[U(z(l.reply.content),1)]),_:1})]),p("div",cs,[p("span",rs,z(a(ve)(l.reply.created_on)),1),p("div",_s,[a(d).state.userLogined?u("",!0):(o(),_("div",{key:0,class:"action-item",onClick:C[0]||(C[0]=j(()=>{},["stop"]))},[t(x,{size:"medium"},{default:n(()=>[t(a(he))]),_:1}),p("span",ps,z(w.value),1)])),a(d).state.userLogined?(o(),_("div",{key:1,class:"action-item hover",onClick:j(A,["stop"])},[t(x,{size:"medium"},{default:n(()=>[m.value?u("",!0):(o(),T(a(he),{key:0})),m.value?(o(),T(a(Se),{key:1,class:"show"})):u("",!0)]),_:1}),p("span",ms,z(w.value>0?w.value:"赞"),1)],8,ds)):u("",!0),a(d).state.userLogined?u("",!0):(o(),_("div",vs,[t(x,{size:"medium"},{default:n(()=>[t(a(fe))]),_:1})])),a(d).state.userLogined?(o(),_("div",{key:3,class:"action-item hover",onClick:j(c,["stop"])},[t(x,{size:"medium"},{default:n(()=>[g.value?u("",!0):(o(),T(a(fe),{key:0})),g.value?(o(),T(a(Le),{key:1,class:"show"})):u("",!0)]),_:1})],8,hs)):u("",!0),a(d).state.userLogined?(o(),_("span",{key:4,class:"show opacity-item reply-btn",onClick:R}," 回复 ")):u("",!0)])])])])}}});const gs=ue(fs,[["__scopeId","data-v-eccdbbd8"]]),ys={class:"reply-compose-wrap"},ks={class:"reply-switch"},ws={class:"time-item"},bs={class:"actions"},$s={key:0,class:"action-item"},Cs={class:"upvote-count"},xs=["onClick"],Is={class:"upvote-count"},Ps={key:2,class:"action-item"},Ts=["onClick"],Us={key:0,class:"reply-input-wrap"},zs=se({__name:"compose-reply",props:{comment:{},atUserid:{default:0},atUsername:{default:""}},emits:["reload","reset"],setup(E,{expose:N,emit:l}){const d=E,m=ie(),g=r(),w=r(!1),A=r(""),c=r(!1),R=+"300",O=r(d.comment.is_thumbs_up==ee.YES),v=r(d.comment.is_thumbs_down==ee.YES),C=r(d.comment.thumbs_up_count),D=()=>{Qe({tweet_id:d.comment.post_id,comment_id:d.comment.id}).then(y=>{O.value=!O.value,O.value?(C.value++,v.value=!1):C.value--}).catch(y=>{console.log(y)})},x=()=>{Xe({tweet_id:d.comment.post_id,comment_id:d.comment.id}).then(y=>{v.value=!v.value,v.value&&O.value&&(C.value--,O.value=!1)}).catch(y=>{console.log(y)})},b=y=>{w.value=y,y?setTimeout(()=>{var S;(S=g.value)==null||S.focus()},10):(c.value=!1,A.value="",l("reset"))},P=()=>{c.value=!0,Ze({comment_id:d.comment.id,at_user_id:d.atUserid,content:A.value}).then(y=>{b(!1),window.$message.success("评论成功"),l("reload")}).catch(y=>{c.value=!1})};return N({switchReply:b}),(y,S)=>{const s=J,h=Ut,B=ce,q=zt;return o(),_("div",ys,[p("div",ks,[p("span",ws,z(a(ve)(y.comment.created_on)),1),p("div",bs,[a(m).state.userLogined?u("",!0):(o(),_("div",$s,[t(s,{size:"medium"},{default:n(()=>[t(a(he))]),_:1}),p("span",Cs,z(C.value),1)])),a(m).state.userLogined?(o(),_("div",{key:1,class:"action-item hover",onClick:j(D,["stop"])},[t(s,{size:"medium"},{default:n(()=>[O.value?u("",!0):(o(),T(a(he),{key:0})),O.value?(o(),T(a(Se),{key:1,class:"show"})):u("",!0)]),_:1}),p("span",Is,z(C.value>0?C.value:"赞"),1)],8,xs)):u("",!0),a(m).state.userLogined?u("",!0):(o(),_("div",Ps,[t(s,{size:"medium"},{default:n(()=>[t(a(fe))]),_:1})])),a(m).state.userLogined?(o(),_("div",{key:3,class:"action-item hover",onClick:j(x,["stop"])},[t(s,{size:"medium"},{default:n(()=>[v.value?u("",!0):(o(),T(a(fe),{key:0})),v.value?(o(),T(a(Le),{key:1,class:"show"})):u("",!0)]),_:1})],8,Ts)):u("",!0),a(m).state.userLogined&&!w.value?(o(),_("span",{key:4,class:"show reply-btn",onClick:S[0]||(S[0]=F=>b(!0))}," 回复 ")):u("",!0),a(m).state.userLogined&&w.value?(o(),_("span",{key:5,class:"hide reply-btn",onClick:S[1]||(S[1]=F=>b(!1))}," 取消 ")):u("",!0)])]),w.value?(o(),_("div",Us,[t(q,null,{default:n(()=>[t(h,{ref_key:"inputInstRef",ref:g,size:"small",placeholder:d.atUsername?"@"+d.atUsername:"请输入回复内容..",maxlength:a(R),value:A.value,"onUpdate:value":S[2]||(S[2]=F=>A.value=F),"show-count":"",clearable:""},null,8,["placeholder","maxlength","value"]),t(B,{type:"primary",size:"small",ghost:"",loading:c.value,onClick:P},{default:n(()=>[U(" 回复 ")]),_:1},8,["loading"])]),_:1})])):u("",!0)])}}});const Rs=ue(zs,[["__scopeId","data-v-f9af7a93"]]),Ss={class:"comment-item"},Ls={class:"nickname-wrap"},Os={class:"username-wrap"},As={class:"opt-wrap"},Ds={class:"timestamp"},Ms=["innerHTML"],Es={class:"reply-wrap"},Ns=se({__name:"comment-item",props:{comment:{},postUserId:{}},emits:["reload"],setup(E,{emit:N}){const l=E,d=ie(),m=Ne(),g=r(0),w=r(""),A=r(),c=le(()=>{let b=Object.assign({texts:[],imgs:[]},l.comment);return b.contents.map(P=>{(+P.type==1||+P.type==2)&&b.texts.push(P),+P.type==3&&b.imgs.push(P)}),b}),R=(b,P)=>{let y=b.target;if(y.dataset.detail){const S=y.dataset.detail.split(":");S.length===2&&(d.commit("refresh"),S[0]==="tag"?window.$message.warning("评论内的无效话题"):m.push({name:"user",query:{s:S[1]}}))}},O=b=>{var P,y;g.value=b.user_id,w.value=((P=b.user)==null?void 0:P.username)||"",(y=A.value)==null||y.switchReply(!0)},v=()=>{N("reload")},C=()=>{g.value=0,w.value=""},D=()=>{et({id:c.value.id}).then(b=>{window.$message.success("删除成功"),setTimeout(()=>{v()},50)}).catch(b=>{})},x=()=>{tt({id:c.value.id}).then(b=>{c.value.is_essence=b.highlight_status,window.$message.success("操作成功"),setTimeout(()=>{v()},50)}).catch(b=>{})};return(b,P)=>{const y=ke,S=ye("router-link"),s=Ae,h=J,B=ce,q=Oe,F=Ee,V=Rs,K=gs,L=De;return o(),_("div",Ss,[t(L,{"content-indented":""},Ye({avatar:n(()=>[t(y,{round:"",size:30,src:c.value.user.avatar},null,8,["src"])]),header:n(()=>[p("span",Ls,[t(S,{onClick:P[0]||(P[0]=j(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{s:c.value.user.username}}},{default:n(()=>[U(z(c.value.user.nickname),1)]),_:1},8,["to"])]),p("span",Os," @"+z(c.value.user.username),1),c.value.is_essence==a(ee).YES?(o(),T(s,{key:0,class:"top-tag",type:"warning",size:"small",round:""},{default:n(()=>[U(" 精选 ")]),_:1})):u("",!0)]),"header-extra":n(()=>[p("div",As,[p("span",Ds,z(c.value.ip_loc),1),a(d).state.userInfo.id===b.postUserId?(o(),T(q,{key:0,"negative-text":"取消","positive-text":"确认",onPositiveClick:x},{trigger:n(()=>[t(B,{quaternary:"",circle:"",size:"tiny",class:"action-btn"},{icon:n(()=>[c.value.is_essence==a(ee).NO?(o(),T(h,{key:0},{default:n(()=>[t(a(mt))]),_:1})):(o(),T(h,{key:1},{default:n(()=>[t(a(vt))]),_:1}))]),_:1})]),default:n(()=>[U(" "+z(c.value.is_essence==a(ee).NO?"是否精选这条评论":"是否取消精选"),1)]),_:1})):u("",!0),a(d).state.userInfo.is_admin||a(d).state.userInfo.id===c.value.user.id?(o(),T(q,{key:1,"negative-text":"取消","positive-text":"确认",onPositiveClick:D},{trigger:n(()=>[t(B,{quaternary:"",circle:"",size:"tiny",class:"action-btn"},{icon:n(()=>[t(h,null,{default:n(()=>[t(a(Re))]),_:1})]),_:1})]),default:n(()=>[U(" 是否删除这条评论？ ")]),_:1})):u("",!0)])]),footer:n(()=>[c.value.imgs.length>0?(o(),T(F,{key:0,imgs:c.value.imgs},null,8,["imgs"])):u("",!0),t(V,{ref_key:"replyComposeRef",ref:A,comment:c.value,"at-userid":g.value,"at-username":w.value,onReload:v,onReset:C},null,8,["comment","at-userid","at-username"]),p("div",Es,[(o(!0),_(de,null,me(c.value.replies,I=>(o(),T(K,{key:I.id,reply:I,"tweet-id":c.value.post_id,onFocusReply:O,onReload:v},null,8,["reply","tweet-id"]))),128))])]),_:2},[c.value.texts.length>0?{name:"description",fn:n(()=>[(o(!0),_(de,null,me(c.value.texts,I=>(o(),_("span",{key:I.id,class:"comment-text",onClick:P[1]||(P[1]=j(W=>R(W,c.value.id),["stop"])),innerHTML:a(we)(I.content).content},null,8,Ms))),128))]),key:"0"}:void 0]),1024)])}}});const qs=ue(Ns,[["__scopeId","data-v-e1f04c6b"]]),Bs=E=>(Te("data-v-d9073453"),E=E(),Ue(),E),Hs={key:0,class:"compose-wrap"},js={class:"compose-line"},Fs={class:"compose-user"},Vs={class:"compose-line compose-options"},Ys={class:"attachment"},Js={class:"submit-wrap"},Ks={class:"attachment-list-wrap"},Ws={key:1,class:"compose-wrap"},Gs=Bs(()=>p("div",{class:"login-wrap"},[p("span",{class:"login-banner"}," 登录后，精彩更多")],-1)),Qs={key:0,class:"login-only-wrap"},Xs={key:1,class:"login-wrap"},Zs=se({__name:"compose-comment",props:{lock:{default:0},postId:{default:0}},emits:["post-success"],setup(E,{emit:N}){const l=E,d=ie(),m=r([]),g=r(!1),w=r(!1),A=r(!1),c=r(""),R=r(),O=r("public/image"),v=r([]),C=r([]),D=r("true".toLowerCase()==="true"),x=+"300",b="/v1/attachment",P=le(()=>"Bearer "+localStorage.getItem("PAOPAO_TOKEN")),y=Qt.debounce(f=>{st({k:f}).then(k=>{let $=[];k.suggest.map(e=>{$.push({label:e,value:e})}),m.value=$,w.value=!1}).catch(k=>{w.value=!1})},200),S=(f,k)=>{w.value||(w.value=!0,k==="@"&&y(f))},s=f=>{f.length>x?c.value=f.substring(0,x):c.value=f},h=f=>{O.value=f},B=f=>{for(let i=0;i<f.length;i++){var k=f[i].name,$=k.split(".").slice(0,-1).join("."),e=k.split(".").pop();$.length>30&&(f[i].name=$.substring(0,18)+"..."+$.substring($.length-9)+"."+e)}v.value=f},q=async f=>{var k,$;return O.value==="public/image"&&!["image/png","image/jpg","image/jpeg","image/gif"].includes((k=f.file.file)==null?void 0:k.type)?(window.$message.warning("图片仅允许 png/jpg/gif 格式"),!1):O.value==="image"&&(($=f.file.file)==null?void 0:$.size)>10485760?(window.$message.warning("图片大小不能超过10MB"),!1):!0},F=({file:f,event:k})=>{var $;try{let e=JSON.parse(($=k.target)==null?void 0:$.response);e.code===0&&O.value==="public/image"&&C.value.push({id:f.id,content:e.data.content})}catch{window.$message.error("上传失败")}},V=({file:f,event:k})=>{var $;try{let e=JSON.parse(($=k.target)==null?void 0:$.response);if(e.code!==0){let i=e.msg||"上传失败";e.details&&e.details.length>0&&e.details.map(M=>{i+=":"+M}),window.$message.error(i)}}catch{window.$message.error("上传失败")}},K=({file:f})=>{let k=C.value.findIndex($=>$.id===f.id);k>-1&&C.value.splice(k,1)},L=()=>{g.value=!0},I=()=>{var f;g.value=!1,(f=R.value)==null||f.clear(),v.value=[],c.value="",C.value=[]},W=()=>{if(c.value.trim().length===0){window.$message.warning("请输入内容哦");return}let{users:f}=we(c.value);const k=[];let $=100;k.push({content:c.value,type:2,sort:$}),C.value.map(e=>{$++,k.push({content:e.content,type:3,sort:$})}),A.value=!0,ot({contents:k,post_id:l.postId,users:Array.from(new Set(f))}).then(e=>{window.$message.success("发布成功"),A.value=!1,N("post-success"),I()}).catch(e=>{A.value=!1})},G=f=>{d.commit("triggerAuth",!0),d.commit("triggerAuthKey",f)};return(f,k)=>{const $=ke,e=Rt,i=J,M=ce,oe=St,Q=Lt,ne=Ot,ae=At,Y=Dt;return o(),_("div",null,[a(d).state.userInfo.id>0?(o(),_("div",Hs,[p("div",js,[p("div",Fs,[t($,{round:"",size:30,src:a(d).state.userInfo.avatar},null,8,["src"])]),t(e,{type:"textarea",size:"large",autosize:"",bordered:!1,options:m.value,prefix:["@"],loading:w.value,value:c.value,disabled:l.lock===1,"onUpdate:value":s,onSearch:S,onFocus:L,placeholder:l.lock===1?"泡泡已被锁定，回复功能已关闭":"快来评论两句吧..."},null,8,["options","loading","value","disabled","placeholder"])]),g.value?(o(),T(Y,{key:0,ref_key:"uploadRef",ref:R,abstract:"","list-type":"image",multiple:!0,max:9,action:b,headers:{Authorization:P.value},data:{type:O.value},"file-list":v.value,onBeforeUpload:q,onFinish:F,onError:V,onRemove:K,"onUpdate:fileList":B},{default:n(()=>[p("div",Vs,[p("div",Ys,[t(oe,{abstract:""},{default:n(({handleClick:te})=>[t(M,{disabled:v.value.length>0&&O.value==="public/video"||v.value.length===9,onClick:()=>{h("public/image"),te()},quaternary:"",circle:"",type:"primary"},{icon:n(()=>[t(i,{size:"20",color:"var(--primary-color)"},{default:n(()=>[t(a(ht))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1}),t(ne,{trigger:"hover",placement:"bottom"},{trigger:n(()=>[t(Q,{class:"text-statistic",type:"circle","show-indicator":!1,status:"success","stroke-width":10,percentage:c.value.length/a(x)*100},null,8,["percentage"])]),default:n(()=>[U(" "+z(c.value.length)+" / "+z(a(x)),1)]),_:1})]),p("div",Js,[t(M,{quaternary:"",round:"",type:"tertiary",class:"cancel-btn",size:"small",onClick:I},{default:n(()=>[U(" 取消 ")]),_:1}),t(M,{loading:A.value,onClick:W,type:"primary",secondary:"",size:"small",round:""},{default:n(()=>[U(" 发布 ")]),_:1},8,["loading"])])]),p("div",Ks,[t(ae)])]),_:1},8,["headers","data","file-list"])):u("",!0)])):(o(),_("div",Ws,[Gs,D.value?u("",!0):(o(),_("div",Qs,[t(M,{strong:"",secondary:"",round:"",type:"primary",onClick:k[0]||(k[0]=te=>G("signin"))},{default:n(()=>[U(" 登录 ")]),_:1})])),D.value?(o(),_("div",Xs,[t(M,{strong:"",secondary:"",round:"",type:"primary",onClick:k[1]||(k[1]=te=>G("signin"))},{default:n(()=>[U(" 登录 ")]),_:1}),t(M,{strong:"",secondary:"",round:"",type:"info",onClick:k[2]||(k[2]=te=>G("signup"))},{default:n(()=>[U(" 注册 ")]),_:1})])):u("",!0)]))])}}});const eo=ue(Zs,[["__scopeId","data-v-d9073453"]]),to={class:"username-wrap"},so={class:"options"},oo={key:0},no=["innerHTML"],ao={class:"timestamp"},lo={key:0},io={key:1},uo={class:"opts-wrap"},co=["onClick"],ro={class:"opt-item"},_o=["onClick"],po=["onClick"],mo=se({__name:"post-detail",props:{post:{}},emits:["reload"],setup(E,{emit:N}){const l=E,d="true".toLowerCase()==="true",m=ie(),g=Ne(),w=r(!1),A=r(!1),c=r(!1),R=r(!1),O=r(!1),v=r(!1),C=r(!1),D=r(!1),x=r(X.PUBLIC),b=r(!1),P=r({id:0,avatar:"",username:"",nickname:"",is_admin:!1,is_friend:!0,is_following:!1,created_on:0,follows:0,followings:0,status:1}),y=e=>{P.value=e,b.value=!0},S=()=>{b.value=!1},s=le({get:()=>{let e=Object.assign({texts:[],imgs:[],videos:[],links:[],attachments:[],charge_attachments:[]},l.post);return e.contents.map(i=>{(+i.type==1||+i.type==2)&&e.texts.push(i),+i.type==3&&e.imgs.push(i),+i.type==4&&e.videos.push(i),+i.type==6&&e.links.push(i),+i.type==7&&e.attachments.push(i),+i.type==8&&e.charge_attachments.push(i)}),e},set:e=>{l.post.upvote_count=e.upvote_count,l.post.comment_count=e.comment_count,l.post.collection_count=e.collection_count,l.post.is_essence=e.is_essence}}),h=e=>()=>Ce(J,null,{default:()=>Ce(e)}),B=le(()=>{var M;let e=[];if(!m.state.userInfo.is_admin&&m.state.userInfo.id!=l.post.user.id)return e.push({label:"私信",key:"whisper",icon:h(Ct)}),e;e.push({label:"删除",key:"delete",icon:h(xt)}),s.value.is_lock===0?e.push({label:"锁定",key:"lock",icon:h(It)}):e.push({label:"解锁",key:"unlock",icon:h(Pt)}),m.state.userInfo.is_admin&&(s.value.is_top===0?e.push({label:"置顶",key:"stick",icon:h(xe)}):e.push({label:"取消置顶",key:"unstick",icon:h(xe)})),s.value.is_essence===0?e.push({label:"设为亮点",key:"highlight",icon:h(Ie)}):e.push({label:"取消亮点",key:"unhighlight",icon:h(Ie)});let i;return s.value.visibility===X.PUBLIC?i={label:"公开",key:"vpublic",icon:h(re),children:[{label:"私密",key:"vprivate",icon:h(_e)},{label:"关注可见",key:"vfollowing",icon:h(pe)}]}:s.value.visibility===X.PRIVATE?i={label:"私密",key:"vprivate",icon:h(_e),children:[{label:"公开",key:"vpublic",icon:h(re)},{label:"关注可见",key:"vfollowing",icon:h(pe)}]}:d&&s.value.visibility===X.FRIEND?i={label:"好友可见",key:"vfriend",icon:h(Pe),children:[{label:"公开",key:"vpublic",icon:h(re)},{label:"私密",key:"vprivate",icon:h(_e)},{label:"关注可见",key:"vfollowing",icon:h(pe)}]}:i={label:"关注可见",key:"vfollowing",icon:h(pe),children:[{label:"公开",key:"vpublic",icon:h(re)},{label:"私密",key:"vprivate",icon:h(_e)}]},d&&s.value.visibility!==X.FRIEND&&((M=i.children)==null||M.push({label:"好友可见",key:"vfriend",icon:h(Pe)})),e.push(i),e}),q=e=>{g.push({name:"post",query:{id:e}})},F=(e,i)=>{if(e.target.dataset.detail){const M=e.target.dataset.detail.split(":");if(M.length===2){m.commit("refresh"),M[0]==="tag"?g.push({name:"home",query:{q:M[1],t:"tag"}}):g.push({name:"user",query:{s:M[1]}});return}}q(i)},V=e=>{switch(e){case"whisper":y(l.post.user);break;case"delete":c.value=!0;break;case"lock":case"unlock":R.value=!0;break;case"stick":case"unstick":O.value=!0;break;case"highlight":case"unhighlight":v.value=!0;break;case"vpublic":x.value=0,C.value=!0;break;case"vprivate":x.value=1,C.value=!0;break;case"vfriend":x.value=2,C.value=!0;break;case"vfollowing":x.value=3,C.value=!0;break}},K=()=>{lt({id:s.value.id}).then(e=>{window.$message.success("删除成功"),g.replace("/"),setTimeout(()=>{m.commit("refresh")},50)}).catch(e=>{D.value=!1})},L=()=>{it({id:s.value.id}).then(e=>{N("reload"),e.lock_status===1?window.$message.success("锁定成功"):window.$message.success("解锁成功")}).catch(e=>{D.value=!1})},I=()=>{ut({id:s.value.id}).then(e=>{N("reload"),e.top_status===1?window.$message.success("置顶成功"):window.$message.success("取消置顶成功")}).catch(e=>{D.value=!1})},W=()=>{ct({id:s.value.id}).then(e=>{s.value={...s.value,is_essence:e.highlight_status},e.highlight_status===1?window.$message.success("设为亮点成功"):window.$message.success("取消亮点成功")}).catch(e=>{D.value=!1})},G=()=>{rt({id:s.value.id,visibility:x.value}).then(e=>{N("reload"),window.$message.success("修改可见性成功")}).catch(e=>{D.value=!1})},f=()=>{_t({id:s.value.id}).then(e=>{w.value=e.status,e.status?s.value={...s.value,upvote_count:s.value.upvote_count+1}:s.value={...s.value,upvote_count:s.value.upvote_count-1}}).catch(e=>{console.log(e)})},k=()=>{pt({id:s.value.id}).then(e=>{A.value=e.status,e.status?s.value={...s.value,collection_count:s.value.collection_count+1}:s.value={...s.value,collection_count:s.value.collection_count-1}}).catch(e=>{console.log(e)})},$=()=>{Zt(`${window.location.origin}/#/post?id=${s.value.id}&share=copy_link&t=${new Date().getTime()}`),window.$message.success("链接已复制到剪贴板")};return ze(()=>{m.state.userInfo.id>0&&(nt({id:s.value.id}).then(e=>{w.value=e.status}).catch(e=>{console.log(e)}),at({id:s.value.id}).then(e=>{A.value=e.status}).catch(e=>{console.log(e)}))}),(e,i)=>{const M=ke,oe=ye("router-link"),Q=Ae,ne=ce,ae=Mt,Y=Et,te=Xt,be=Yt,qe=Ee,Be=Jt,He=Kt,$e=Nt,je=Me,Fe=De;return o(),_("div",{class:"detail-item",onClick:i[7]||(i[7]=H=>q(s.value.id))},[t(Fe,null,{avatar:n(()=>[t(M,{round:"",size:30,src:s.value.user.avatar},null,8,["src"])]),header:n(()=>[t(oe,{onClick:i[0]||(i[0]=j(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{s:s.value.user.username}}},{default:n(()=>[U(z(s.value.user.nickname),1)]),_:1},8,["to"]),p("span",to," @"+z(s.value.user.username),1),s.value.is_top?(o(),T(Q,{key:0,class:"top-tag",type:"warning",size:"small",round:""},{default:n(()=>[U(" 置顶 ")]),_:1})):u("",!0),s.value.visibility==a(X).PRIVATE?(o(),T(Q,{key:1,class:"top-tag",type:"error",size:"small",round:""},{default:n(()=>[U(" 私密 ")]),_:1})):u("",!0),s.value.visibility==a(X).FRIEND?(o(),T(Q,{key:2,class:"top-tag",type:"info",size:"small",round:""},{default:n(()=>[U(" 好友可见 ")]),_:1})):u("",!0)]),"header-extra":n(()=>[p("div",so,[t(ae,{placement:"bottom-end",trigger:"click",size:"small",options:B.value,onSelect:V},{default:n(()=>[t(ne,{quaternary:"",circle:""},{icon:n(()=>[t(a(J),null,{default:n(()=>[t(a(ft))]),_:1})]),_:1})]),_:1},8,["options"])]),t(Y,{show:c.value,"onUpdate:show":i[1]||(i[1]=H=>c.value=H),"mask-closable":!1,preset:"dialog",title:"提示",content:"确定删除该泡泡动态吗？","positive-text":"确认","negative-text":"取消",onPositiveClick:K},null,8,["show"]),t(Y,{show:R.value,"onUpdate:show":i[2]||(i[2]=H=>R.value=H),"mask-closable":!1,preset:"dialog",title:"提示",content:"确定"+(s.value.is_lock?"解锁":"锁定")+"该泡泡动态吗？","positive-text":"确认","negative-text":"取消",onPositiveClick:L},null,8,["show","content"]),t(Y,{show:O.value,"onUpdate:show":i[3]||(i[3]=H=>O.value=H),"mask-closable":!1,preset:"dialog",title:"提示",content:"确定"+(s.value.is_top?"取消置顶":"置顶")+"该泡泡动态吗？","positive-text":"确认","negative-text":"取消",onPositiveClick:I},null,8,["show","content"]),t(Y,{show:v.value,"onUpdate:show":i[4]||(i[4]=H=>v.value=H),"mask-closable":!1,preset:"dialog",title:"提示",content:"确定将该泡泡动态"+(s.value.is_essence?"取消亮点":"设为亮点")+"吗？","positive-text":"确认","negative-text":"取消",onPositiveClick:W},null,8,["show","content"]),t(Y,{show:C.value,"onUpdate:show":i[5]||(i[5]=H=>C.value=H),"mask-closable":!1,preset:"dialog",title:"提示",content:"确定将该泡泡动态可见度修改为"+(x.value==0?"公开":x.value==1?"私密":x.value==2?"好友可见":"关注可见")+"吗？","positive-text":"确认","negative-text":"取消",onPositiveClick:G},null,8,["show","content"]),t(te,{show:b.value,user:P.value,onSuccess:S},null,8,["show","user"])]),footer:n(()=>[t(be,{attachments:s.value.attachments},null,8,["attachments"]),t(be,{attachments:s.value.charge_attachments,price:s.value.attachment_price},null,8,["attachments","price"]),t(qe,{imgs:s.value.imgs},null,8,["imgs"]),t(Be,{videos:s.value.videos,full:!0},null,8,["videos"]),t(He,{links:s.value.links},null,8,["links"]),p("div",ao,[U(" 发布于 "+z(a(ve)(s.value.created_on))+" ",1),s.value.ip_loc?(o(),_("span",lo,[t($e,{vertical:""}),U(" "+z(s.value.ip_loc),1)])):u("",!0),!a(m).state.collapsedLeft&&s.value.created_on!=s.value.latest_replied_on?(o(),_("span",io,[t($e,{vertical:""}),U(" 最后回复 "+z(a(ve)(s.value.latest_replied_on)),1)])):u("",!0)])]),action:n(()=>[p("div",uo,[t(je,{justify:"space-between"},{default:n(()=>[p("div",{class:"opt-item hover",onClick:j(f,["stop"])},[t(a(J),{size:"20",class:"opt-item-icon"},{default:n(()=>[w.value?u("",!0):(o(),T(a(gt),{key:0})),w.value?(o(),T(a(yt),{key:1,color:"red"})):u("",!0)]),_:1}),U(" "+z(s.value.upvote_count),1)],8,co),p("div",ro,[t(a(J),{size:"20",class:"opt-item-icon"},{default:n(()=>[t(a(kt))]),_:1}),U(" "+z(s.value.comment_count),1)]),p("div",{class:"opt-item hover",onClick:j(k,["stop"])},[t(a(J),{size:"20",class:"opt-item-icon"},{default:n(()=>[A.value?u("",!0):(o(),T(a(wt),{key:0})),A.value?(o(),T(a(bt),{key:1,color:"#ff7600"})):u("",!0)]),_:1}),U(" "+z(s.value.collection_count),1)],8,_o),p("div",{class:"opt-item hover",onClick:j($,["stop"])},[t(a(J),{size:"20",class:"opt-item-icon"},{default:n(()=>[t(a($t))]),_:1}),U(" "+z(s.value.share_count),1)],8,po)]),_:1})])]),default:n(()=>[s.value.texts.length>0?(o(),_("div",oo,[(o(!0),_(de,null,me(s.value.texts,H=>(o(),_("span",{key:H.id,class:"post-text",onClick:i[6]||(i[6]=j(Ve=>F(Ve,s.value.id),["stop"])),innerHTML:a(we)(H.content).content},null,8,no))),128))])):u("",!0)]),_:1})])}}});const vo=E=>(Te("data-v-c5bf4463"),E=E(),Ue(),E),ho={key:0,class:"detail-wrap"},fo={key:1,class:"empty-wrap"},go={key:0,class:"comment-opts-wrap"},yo=vo(()=>p("span",{class:"comment-title-item"},"评论",-1)),ko={key:2},wo={key:0,class:"skeleton-wrap"},bo={key:1},$o={key:0,class:"empty-wrap"},Co={key:0,class:"load-more-spinner"},xo={key:1,class:"load-more-spinner"},Io={key:2,class:"load-more-spinner"},Po={key:3,class:"load-more-spinner"},To={key:4,class:"load-more-spinner"},Uo={key:5,class:"load-more-spinner"},Z=20,zo=se({__name:"Post",setup(E){const N=Wt(),l=r({}),d=r(!1),m=r(!1),g=r([]),w=le(()=>+N.query.id),A=r("default"),c=r(!0);let R={loading(){},loaded(){},complete(){},error(){}};const O=L=>{A.value=L,L==="default"&&(c.value=!0),V(R)},v=()=>{l.value={id:0},d.value=!0,dt({id:w.value}).then(L=>{d.value=!1,l.value=L,V(R)}).catch(L=>{d.value=!1})};let C=1;const D=r(!1),x=r([]),b=L=>{D.value||ge({id:l.value.id,style:"default",page:C,page_size:Z}).then(I=>{L!==null&&(R=L),I.list.length<Z?D.value=!0:C++,I.list.length>0&&(C===1?x.value=I.list:x.value.push(...I.list),g.value=x.value),R.loaded(),m.value=!1}).catch(I=>{m.value=!1,R.error()})};let P=1,y=r(!1);const S=r([]),s=L=>{y.value||ge({id:l.value.id,style:"hots",page:P,page_size:Z}).then(I=>{L!==null&&(R=L),I.list.length<Z?y.value=!0:P++,I.list.length>0&&(P===1?S.value=I.list:S.value.push(...I.list),g.value=S.value),R.loaded(),m.value=!1}).catch(I=>{m.value=!1,R.error()})};let h=1,B=r(!1);const q=r([]),F=L=>{B.value||ge({id:l.value.id,style:"newest",page:h,page_size:Z}).then(I=>{L!==null&&(R=L),I.list.length<Z?B.value=!0:h++,I.list.length>0&&(h===1?q.value=I.list:q.value.push(...I.list),g.value=q.value),R.loaded(),m.value=!1}).catch(I=>{m.value=!1,R.error()})},V=L=>{w.value<1||(g.value.length===0&&(m.value=!0),A.value==="default"?(g.value=x.value,b(L)):A.value==="hots"?(g.value=S.value,s(L)):(g.value=q.value,F(L)),m.value=!1)},K=()=>{C=1,D.value=!1,x.value=[],P=1,y.value=!1,S.value=[],h=1,B.value=!1,q.value=[],V(R)};return ze(()=>{v()}),Je(w,()=>{w.value>0&&N.name==="post"&&v()}),(L,I)=>{const W=es,G=mo,f=Bt,k=Ht,$=jt,e=Ft,i=Vt,M=eo,oe=Gt,Q=qs,ne=Me,ae=qt;return o(),_("div",null,[t(W,{title:"泡泡详情",back:!0}),t(ae,{class:"main-content-wrap",bordered:""},{default:n(()=>[t($,null,{default:n(()=>[t(k,{show:d.value},{default:n(()=>[l.value.id>1?(o(),_("div",ho,[t(G,{post:l.value,onReload:v},null,8,["post"])])):(o(),_("div",fo,[t(f,{size:"large",description:"暂无数据"})]))]),_:1},8,["show"])]),_:1}),l.value.id>0?(o(),_("div",go,[t(i,{type:"bar","justify-content":"end",size:"small","tab-style":"margin-left: -24px;",animated:"","onUpdate:value":O},{prefix:n(()=>[yo]),default:n(()=>[t(e,{name:"default",tab:"推荐"}),t(e,{name:"hots",tab:"热门"}),t(e,{name:"newest",tab:"最新"})]),_:1})])):u("",!0),l.value.id>0?(o(),T($,{key:1},{default:n(()=>[t(M,{lock:l.value.is_lock,"post-id":l.value.id,onPostSuccess:K},null,8,["lock","post-id"])]),_:1})):u("",!0),l.value.id>0?(o(),_("div",ko,[m.value?(o(),_("div",wo,[t(oe,{num:5})])):(o(),_("div",bo,[g.value.length===0?(o(),_("div",$o,[t(f,{size:"large",description:"暂无评论，快来抢沙发"})])):u("",!0),(o(!0),_(de,null,me(g.value,Y=>(o(),T($,{key:Y.id},{default:n(()=>[t(Q,{comment:Y,postUserId:l.value.user_id,onReload:K},null,8,["comment","postUserId"])]),_:2},1024))),128))]))])):u("",!0),g.value.length>=Z?(o(),T(ne,{key:3,justify:"center"},{default:n(()=>[t(a(ts),{class:"load-more",slots:{complete:"没有更多数据了",error:"加载出错"},onInfinite:V},{spinner:n(()=>[c.value&&D.value?(o(),_("span",Co)):u("",!0),!c.value&&a(y)?(o(),_("span",xo)):u("",!0),!c.value&&a(B)?(o(),_("span",Io)):u("",!0),c.value&&!D.value?(o(),_("span",Po,"加载评论")):u("",!0),!c.value&&!a(y)?(o(),_("span",To,"加载评论")):u("",!0),!c.value&&!a(B)?(o(),_("span",Uo,"加载评论")):u("",!0)]),_:1})]),_:1})):u("",!0)]),_:1})])}}});const _n=ue(zo,[["__scopeId","data-v-c5bf4463"]]);export{_n as default};
