import{W as Fe}from"./whisper-add-friend-AzaEd2rf.js";import{_ as Ne}from"./whisper-eOJK7zKF.js";import{_ as Re,a as qe}from"./post-item.vue_vue_type_style_index_0_lang-ZiwC8_Kt.js";import{_ as Ge}from"./post-skeleton-7Ej5SbSK.js";import{d as ye,H as i,c as le,b as ke,e as r,f as k,bf as w,j as D,k as a,w as o,v as A,Z as g,y as he,t as fe,A as V,F as _e,x as ge,S as Oe,E as Se}from"./@vue-Hd4uXz5f.js";import{u as Ae}from"./vuex-qScXS-uk.js";import{l as we}from"./lodash-8cBkGte7.js";import{g as Pe,a as Me,c as Ye,b as Le,d as We,e as Ke,u as je,f as Qe,h as He,_ as Ze}from"./index-hCGTp9pQ.js";import{p as Je}from"./content-9A-T5SpY.js";import{V as q,P as X}from"./IEnum-u5OuruSk.js";import{I as Xe,V as $e,A as et,d as tt,E as st}from"./@vicons-V6UxFD2Y.js";import{o as be,v as at,j as nt,e as ze,w as ot,x as lt,y as it,z as rt,A as ut,B as ct,C as pt,a as Te,D as dt,E as vt,F as mt,G as ft,H as _t,l as gt,I as ht,J as wt,k as yt}from"./naive-ui-h5SFsZhx.js";import{_ as kt}from"./main-nav.vue_vue_type_style_index_0_lang-BjPLRZmS.js";import{b as At,u as bt}from"./vue-router-4Hko0_3l.js";import{W as zt}from"./v3-infinite-loading-9ocfqcSa.js";import{S as Tt}from"./@opentiny-dth6RzMU.js";import"./copy-to-clipboard-l6UqHK6O.js";import"./@babel-5-cIlDoe.js";import"./toggle-selection-fekekO1r.js";import"./axios-kMxbiGYq.js";import"./moment-jIwEdMgI.js";/* empty css               */import"./seemly-hKSMrbh9.js";import"./vueuc-xP2DxDTa.js";import"./evtd-9ZCiDXyn.js";import"./@css-render-oW_PeE7K.js";import"./vooks-v147mXjr.js";import"./vdirs-gz97tqc5.js";import"./@juggle--NVrOerG.js";import"./css-render-Adblu2bf.js";import"./@emotion-vV6BesBt.js";import"./lodash-es-KEIJqYRD.js";import"./treemate-hmrDCADh.js";import"./async-validator-BHjhHa7C.js";import"./date-fns-E8ESfRGG.js";import"./paopao-video-player-iTSRV7j7.js";import"./vue-VsGwIgVC.js";const Ct=$=>{const _=new FileReader,p=z=>["application/zip","application/x-zip","application/octet-stream","application/x-zip-compressed"].includes(z),h=()=>{const z=new Uint8Array(_.result).subarray(0,4);let d="";for(let b=0;b<z.length;b++)d+=z[b].toString(16);switch(d){case"504b0304":case"504b0506":case"504b0708":return p("application/zip");case"504b030414":return p("application/x-zip-compressed");case"504b0508":return p("application/x-zip");case"504b5370":return p("application/octet-stream");default:return!1}};return new Promise((z,d)=>{_.onloadend=()=>{const b=$.type;z(b===""||b==="application/octet-stream"?h():p(b))},_.readAsArrayBuffer($.slice(0,4))})},It={key:0,class:"compose-wrap"},Dt={class:"compose-line"},Bt={class:"compose-user"},Ut={class:"compose-line compose-options"},xt={class:"attachment"},Vt={class:"submit-wrap"},Et={class:"attachment-list-wrap"},Ft={key:0,class:"attachment-price-wrap"},Nt=D("span",null," 附件价格￥",-1),Rt={key:0,class:"eye-wrap"},qt={key:1,class:"link-wrap"},Gt={key:1,class:"compose-wrap"},Ot=D("div",{class:"login-wrap"},[D("span",{class:"login-banner"}," 登录后，精彩更多")],-1),St={key:0,class:"login-only-wrap"},Pt={key:1,class:"login-wrap"},Mt=ye({__name:"compose",emits:["post-success"],setup($,{emit:_}){const p=_,h=Ae(),z=i([]),d=i(!1),b=i(!1),N=i(!1),R=i(!1),E=i(""),W=i([]),B=i(),G=i(0),y=i("public/image"),T=i([]),C=i([]),U=i([]),O=i([]),P=i(q.PUBLIC),v=i(q.PUBLIC),x=i("true".toLowerCase()==="true"),K="/v1/attachment",M=le(()=>"Bearer "+localStorage.getItem("PAOPAO_TOKEN")),Q=le(()=>{let e=[{value:q.PUBLIC,label:"公开"},{value:q.PRIVATE,label:"私密"},{value:q.Following,label:"关注可见"}];return h.state.profile.useFriendship&&e.push({value:q.FRIEND,label:"好友可见"}),e}),H=()=>{N.value=!N.value,N.value&&R.value&&(R.value=!1)},ee=()=>{R.value=!R.value,R.value&&N.value&&(N.value=!1)},te=we.debounce(e=>{Pe({k:e}).then(t=>{let n=[];t.suggest.map(l=>{n.push({label:l,value:l})}),z.value=n,d.value=!1}).catch(t=>{d.value=!1})},200),ie=we.debounce(e=>{Me({k:e}).then(t=>{let n=[];t.suggest.map(l=>{n.push({label:l,value:l})}),z.value=n,d.value=!1}).catch(t=>{d.value=!1})},200),re=(e,t)=>{d.value||(d.value=!0,t==="@"?te(e):ie(e))},ue=e=>{e.length>h.state.profile.defaultTweetMaxLength?E.value=e.substring(0,h.state.profile.defaultTweetMaxLength):E.value=e},Z=e=>{y.value=e},se=e=>{for(let u=0;u<e.length;u++){var t=e[u].name,n=t.split(".").slice(0,-1).join("."),l=t.split(".").pop();n.length>30&&(e[u].name=n.substring(0,18)+"..."+n.substring(n.length-9)+"."+l)}T.value=e},ae=async e=>{var t,n,l,u,m;return y.value==="public/image"&&!["image/png","image/jpg","image/jpeg","image/gif"].includes((t=e.file.file)==null?void 0:t.type)?(window.$message.warning("图片仅允许 png/jpg/gif 格式"),!1):y.value==="image"&&((n=e.file.file)==null?void 0:n.size)>10485760?(window.$message.warning("图片大小不能超过10MB"),!1):y.value==="public/video"&&!["video/mp4","video/quicktime"].includes((l=e.file.file)==null?void 0:l.type)?(window.$message.warning("视频仅允许 mp4/mov 格式"),!1):y.value==="public/video"&&((u=e.file.file)==null?void 0:u.size)>104857600?(window.$message.warning("视频大小不能超过100MB"),!1):y.value==="attachment"&&!await Ct(e.file.file)?(window.$message.warning("附件仅允许 zip 格式"),!1):y.value==="attachment"&&((m=e.file.file)==null?void 0:m.size)>104857600?(window.$message.warning("附件大小不能超过100MB"),!1):!0},ne=({file:e,event:t})=>{var n;try{let l=JSON.parse((n=t.target)==null?void 0:n.response);l.code===0&&(y.value==="public/image"&&C.value.push({id:e.id,content:l.data.content}),y.value==="public/video"&&U.value.push({id:e.id,content:l.data.content}),y.value==="attachment"&&O.value.push({id:e.id,content:l.data.content}))}catch{window.$message.error("上传失败")}},oe=({file:e,event:t})=>{var n;try{let l=JSON.parse((n=t.target)==null?void 0:n.response);if(l.code!==0){let u=l.msg||"上传失败";l.details&&l.details.length>0&&l.details.map(m=>{u+=":"+m}),window.$message.error(u)}}catch{window.$message.error("上传失败")}},ce=({file:e})=>{let t=C.value.findIndex(n=>n.id===e.id);t>-1&&C.value.splice(t,1),t=U.value.findIndex(n=>n.id===e.id),t>-1&&U.value.splice(t,1),t=O.value.findIndex(n=>n.id===e.id),t>-1&&O.value.splice(t,1)},pe=()=>{if(E.value.trim().length===0){window.$message.warning("请输入内容哦");return}let{tags:e,users:t}=Je(E.value);const n=[];let l=100;n.push({content:E.value,type:X.TEXT,sort:l}),C.value.map(u=>{l++,n.push({content:u.content,type:X.IMAGEURL,sort:l})}),U.value.map(u=>{l++,n.push({content:u.content,type:X.VIDEOURL,sort:l})}),O.value.map(u=>{l++,n.push({content:u.content,type:X.ATTACHMENT,sort:l})}),W.value.length>0&&W.value.map(u=>{l++,n.push({content:u,type:X.LINKURL,sort:l})}),b.value=!0,Ye({contents:n,tags:Array.from(new Set(e)),users:Array.from(new Set(t)),attachment_price:+G.value*100,visibility:P.value}).then(u=>{var m;window.$message.success("发布成功"),b.value=!1,p("post-success",u),N.value=!1,R.value=!1,(m=B.value)==null||m.clear(),T.value=[],E.value="",W.value=[],C.value=[],U.value=[],O.value=[],P.value=v.value}).catch(u=>{b.value=!1})},Y=e=>{h.commit("triggerAuth",!0),h.commit("triggerAuthKey",e)};return ke(()=>{const e=h.state.profile.defaultTweetVisibility;h.state.profile.useFriendship&&e==="friend"?v.value=q.FRIEND:e==="following"?v.value=q.Following:e==="public"?v.value=q.PUBLIC:v.value=q.PRIVATE,P.value=v.value}),(e,t)=>{const n=be,l=at,u=nt,m=ze,J=ot,s=lt,c=it,S=rt,j=ut,F=ct,de=pt,ve=Te,me=dt,L=vt;return r(),k("div",null,[w(h).state.userInfo.id>0?(r(),k("div",It,[D("div",Dt,[D("div",Bt,[a(n,{round:"",size:30,src:w(h).state.userInfo.avatar},null,8,["src"])]),a(l,{type:"textarea",size:"large",autosize:"",bordered:!1,loading:d.value,value:E.value,prefix:["@","#"],options:z.value,onSearch:re,"onUpdate:value":ue,placeholder:"说说您的新鲜事..."},null,8,["loading","value","options"])]),a(F,{ref_key:"uploadRef",ref:B,abstract:"","list-type":"image",multiple:!0,max:9,action:K,headers:{Authorization:M.value},data:{type:y.value},"file-list":T.value,onBeforeUpload:ae,onFinish:ne,onError:oe,onRemove:ce,"onUpdate:fileList":se},{default:o(()=>[D("div",Ut,[D("div",xt,[a(J,{abstract:""},{default:o(({handleClick:f})=>[a(m,{disabled:T.value.length>0&&y.value==="public/video"||T.value.length===9,onClick:()=>{Z("public/image"),f()},quaternary:"",circle:"",type:"primary"},{icon:o(()=>[a(u,{size:"20",color:"var(--primary-color)"},{default:o(()=>[a(w(Xe))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1}),w(h).state.profile.allowTweetVideo?(r(),A(J,{key:0,abstract:""},{default:o(({handleClick:f})=>[a(m,{disabled:T.value.length>0&&y.value!=="public/video"||T.value.length===9,onClick:()=>{Z("public/video"),f()},quaternary:"",circle:"",type:"primary"},{icon:o(()=>[a(u,{size:"20",color:"var(--primary-color)"},{default:o(()=>[a(w($e))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1})):g("",!0),w(h).state.profile.allowTweetAttachment?(r(),A(J,{key:1,abstract:""},{default:o(({handleClick:f})=>[a(m,{disabled:T.value.length>0&&y.value==="public/video"||T.value.length===9,onClick:()=>{Z("attachment"),f()},quaternary:"",circle:"",type:"primary"},{icon:o(()=>[a(u,{size:"20",color:"var(--primary-color)"},{default:o(()=>[a(w(et))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1})):g("",!0),a(m,{quaternary:"",circle:"",type:"primary",onClick:he(H,["stop"])},{icon:o(()=>[a(u,{size:"20",color:"var(--primary-color)"},{default:o(()=>[a(w(tt))]),_:1})]),_:1}),x.value?(r(),A(m,{key:2,quaternary:"",circle:"",type:"primary",onClick:he(ee,["stop"])},{icon:o(()=>[a(u,{size:"20",color:"var(--primary-color)"},{default:o(()=>[a(w(st))]),_:1})]),_:1})):g("",!0)]),D("div",Vt,[a(c,{trigger:"hover",placement:"bottom"},{trigger:o(()=>[a(s,{class:"text-statistic",type:"circle","show-indicator":!1,status:"success","stroke-width":10,percentage:E.value.length/w(h).state.profile.defaultTweetMaxLength*100},null,8,["percentage"])]),default:o(()=>[V(" 已输入"+fe(E.value.length)+"字 ",1)]),_:1}),a(m,{loading:b.value,onClick:pe,type:"primary",secondary:"",round:""},{default:o(()=>[V(" 发布 ")]),_:1},8,["loading"])])]),D("div",Et,[a(S),O.value.length>0?(r(),k("div",Ft,[w(h).state.profile.allowTweetAttachmentPrice?(r(),A(j,{key:0,value:G.value,"onUpdate:value":t[0]||(t[0]=f=>G.value=f),min:0,max:1e5,placeholder:"请输入附件价格，0为免费附件"},{prefix:o(()=>[Nt]),_:1},8,["value"])):g("",!0)])):g("",!0)])]),_:1},8,["headers","data","file-list"]),R.value?(r(),k("div",Rt,[a(me,{value:P.value,"onUpdate:value":t[1]||(t[1]=f=>P.value=f),name:"radiogroup"},{default:o(()=>[a(ve,null,{default:o(()=>[(r(!0),k(_e,null,ge(Q.value,f=>(r(),A(de,{key:f.value,value:f.value,label:f.label},null,8,["value","label"]))),128))]),_:1})]),_:1},8,["value"])])):g("",!0),N.value?(r(),k("div",qt,[a(L,{value:W.value,"onUpdate:value":t[2]||(t[2]=f=>W.value=f),placeholder:"请输入以http(s)://开头的链接",min:0,max:3},{"create-button-default":o(()=>[V(" 创建链接 ")]),_:1},8,["value"])])):g("",!0)])):(r(),k("div",Gt,[Ot,w(h).state.profile.allowUserRegister?g("",!0):(r(),k("div",St,[a(m,{strong:"",secondary:"",round:"",type:"primary",onClick:t[3]||(t[3]=f=>Y("signin"))},{default:o(()=>[V(" 登录 ")]),_:1})])),w(h).state.profile.allowUserRegister?(r(),k("div",Pt,[a(m,{strong:"",secondary:"",round:"",type:"primary",onClick:t[4]||(t[4]=f=>Y("signin"))},{default:o(()=>[V(" 登录 ")]),_:1}),a(m,{strong:"",secondary:"",round:"",type:"info",onClick:t[5]||(t[5]=f=>Y("signup"))},{default:o(()=>[V(" 注册 ")]),_:1})])):g("",!0)]))])}}}),Yt="data:image/png;base64,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",Lt="/assets/discover-tweets-xonT1u91.jpeg",Wt="/assets/following-tweets-SqHyfFVA.jpeg",Kt={class:"slide-bar-item"},jt={class:"slide-bar-item-title slide-bar-user-link"},Qt={key:1,class:"style-wrap"},Ht={key:2,class:"skeleton-wrap"},Zt={key:0,class:"empty-wrap"},Jt={key:1},Xt={key:2},$t={class:"load-more-wrap"},es={class:"load-more-spinner"},ts=ye({__name:"Home",setup($){const _=Ae(),p=At(),h=bt(),z=mt(),d=i("newest"),b=()=>{d.value="newest",e(B.value[0],0)},N=()=>{d.value="hots",e(B.value[1],1)},R=()=>{d.value="following",e(B.value[2],2)},E=i(9),W=i(8),B=i([{title:"最新动态",style:1,username:"",avatar:Yt,show:!0},{title:"热门推荐",style:2,username:"",avatar:Lt,show:!1},{title:"正在关注",style:3,username:"",avatar:Wt,show:!1},{title:"",style:1,username:"",avatar:"",show:!0},{title:"",style:1,username:"",avatar:"",show:!0},{title:"",style:1,username:"",avatar:"",show:!0},{title:"",style:1,username:"",avatar:"",show:!0},{title:"",style:1,username:"",avatar:"",show:!0},{title:"",style:1,username:"",avatar:"",show:!0},{title:"",style:1,username:"",avatar:"",show:!0},{title:"",style:1,username:"",avatar:"",show:!0},{title:"",style:1,username:"",avatar:"",show:!0}]),G=Oe({id:0,avatar:"",username:"",nickname:"",is_admin:!1,is_friend:!1,is_following:!1,created_on:0,follows:0,followings:0,status:1}),y=i(null),T=i("泡泡广场"),C=i(!1),U=i(!1),O=i(1),P=i(""),v=i([]),x=i(1),K=i(20),M=i(0),Q=i(!1),H=i(!1),ee=i({id:0,avatar:"",username:"",nickname:"",is_admin:!1,is_friend:!0,is_following:!1,created_on:0,follows:0,followings:0,status:1}),te=s=>{ee.value=s,Q.value=!0},ie=()=>{Q.value=!1},re=()=>{H.value=!0},ue=s=>{z.warning({title:"删除好友",content:"将好友 “"+s.user.nickname+"” 删除，将同时删除 点赞/收藏 列表中关于该朋友的 “好友可见” 推文",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{He({user_id:G.id}).then(c=>{window.$message.success("操作成功"),s.user.is_friend=!1}).catch(c=>{})}})},Z=()=>{H.value=!1,y.value=null},se=s=>{y.value=s,G.id=s.user.id,G.username=s.user.username,G.nickname=s.user.nickname,s.user.is_friend?ue(s):re()},ae=s=>{z.success({title:"提示",content:"确定"+(s.user.is_following?"取消关注 @":"关注 @")+s.user.username+" 吗？",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{s.user.is_following?je({user_id:s.user.id}).then(c=>{window.$message.success("操作成功"),ne(s.user_id,!1)}).catch(c=>{}):Qe({user_id:s.user.id}).then(c=>{window.$message.success("关注成功"),ne(s.user_id,!0)}).catch(c=>{})}})};function ne(s,c){for(let S in v.value)v.value[S].user_id==s&&(v.value[S].user.is_following=c)}const oe=()=>{T.value="泡泡广场",p.query&&p.query.q&&(p.query.t&&p.query.t==="tag"?T.value="#"+decodeURIComponent(p.query.q):T.value="搜索: "+decodeURIComponent(p.query.q))},ce=le(()=>_.state.userInfo.id>0&&!_.state.profile.enableTrendsBar&&_.state.desktopModelShow),pe=le(()=>_.state.profile.useFriendship&&_.state.profile.enableTrendsBar&&_.state.desktopModelShow&&_.state.userInfo.id>0),Y=()=>{C.value=!1,U.value=!1,v.value=[],x.value=1,M.value=0},e=(s,c)=>{switch(Y(),O.value=s.style,p.query.q&&(p.query.q=null,oe()),s.style){case 1:n("newest");break;case 2:n("hots");break;case 3:p.query.q=null,n("following");break;case 21:P.value=s.username,l();break}B.value[c].show=!1},t=()=>{B.value=B.value.slice(0,3),!(!_.state.profile.useFriendship||!_.state.profile.enableTrendsBar||_.state.userInfo.id===0)&&Le({page:1,page_size:50}).then(s=>{var c=0;const S=s.list||[];let j=[];for(;c<S.length;c++){let F=S[c];j.push({title:F.nickname,style:21,username:F.username,avatar:F.avatar,show:F.is_fresh})}j.length>0&&(B.value=B.value.concat(j))}).catch(s=>{console.log(s)})},n=s=>{C.value=!0,We({query:p.query.q?decodeURIComponent(p.query.q):null,type:p.query.t,style:s,page:x.value,page_size:K.value}).then(c=>{C.value=!1,c.list.length===0&&(U.value=!0),x.value>1?v.value=v.value.concat(c.list):(v.value=c.list,window.scrollTo(0,0)),M.value=Math.ceil(c.pager.total_rows/K.value)}).catch(c=>{C.value=!1,x.value>1&&x.value--})},l=()=>{C.value=!0,Ke({username:P.value,style:"post",page:x.value,page_size:K.value}).then(s=>{C.value=!1,s.list.length===0&&(U.value=!0),x.value>1?v.value=v.value.concat(s.list):(v.value=s.list||[],window.scrollTo(0,0)),M.value=Math.ceil(s.pager.total_rows/K.value)}).catch(s=>{v.value=[],x.value>1&&x.value--,C.value=!1})},u=s=>{h.push({name:"post",query:{id:s.id}})},m=()=>{switch(O.value){case 1:n("newest");break;case 2:n("hots");break;case 3:n("following");break;case 21:p.query.q?n("search"):l();break}},J=()=>{x.value<M.value||M.value==0?(U.value=!1,x.value++,m()):U.value=!0};return ke(()=>{Y(),t(),n("newest")}),Se(()=>({path:p.path,query:p.query,refresh:_.state.refresh}),(s,c)=>{if(oe(),s.refresh!==c.refresh){Y(),setTimeout(()=>{t(),m()},0);return}c.path!=="/post"&&s.path==="/"&&(Y(),setTimeout(()=>{t(),m()},0))}),(s,c)=>{const S=kt,j=Mt,F=_t,de=be,ve=gt,me=ht,L=ze,f=Te,Ce=Ge,Ie=wt,De=Re,Be=qe,Ue=Ne,xe=Fe,Ve=ft,Ee=yt;return r(),k("div",null,[a(S,{title:T.value},null,8,["title"]),a(Ve,{class:"main-content-wrap",bordered:""},{default:o(()=>[a(F,null,{default:o(()=>[a(j,{onPostSuccess:u})]),_:1}),pe.value?(r(),A(F,{key:0},{default:o(()=>[a(w(Tt),{modelValue:B.value,"onUpdate:modelValue":c[0]||(c[0]=I=>B.value=I),"wheel-blocks":W.value,"init-blocks":E.value,onClick:e,tag:"div","sub-tag":"div"},{default:o(I=>[D("div",Kt,[a(ve,{value:"1",offset:[-4,48],dot:"",show:I.slotData.show},{default:o(()=>[a(de,{round:"",size:48,src:I.slotData.avatar,class:"slide-bar-item-avatar"},null,8,["src"])]),_:2},1032,["show"]),D("div",jt,[a(me,{"line-clamp":2},{default:o(()=>[V(fe(I.slotData.title),1)]),_:2},1024)])])]),_:1},8,["modelValue","wheel-blocks","init-blocks"])]),_:1})):ce.value?(r(),k("div",Qt,[a(f,null,{default:o(()=>[d.value!=="newest"?(r(),A(L,{key:0,size:"small",bordered:!1,onClick:b,class:"style-item",secondary:"",round:""},{default:o(()=>[V(" 全部 ")]),_:1})):g("",!0),d.value==="newest"?(r(),A(L,{key:1,size:"small",type:"success",bordered:!1,onClick:b,class:"style-item",secondary:"",round:""},{default:o(()=>[V(" 全部 ")]),_:1})):g("",!0),d.value!=="hots"?(r(),A(L,{key:2,size:"small",bordered:!1,onClick:N,class:"style-item",secondary:"",round:""},{default:o(()=>[V(" 热门推荐 ")]),_:1})):g("",!0),d.value==="hots"?(r(),A(L,{key:3,size:"small",type:"success",bordered:!1,onClick:N,class:"style-item",secondary:"",round:""},{default:o(()=>[V(" 热门推荐 ")]),_:1})):g("",!0),d.value!=="following"?(r(),A(L,{key:4,size:"small",bordered:!1,onClick:R,class:"style-item",secondary:"",round:""},{default:o(()=>[V(" 正在关注 ")]),_:1})):g("",!0),d.value==="following"?(r(),A(L,{key:5,size:"small",type:"success",bordered:!1,onClick:R,class:"style-item",secondary:"",round:""},{default:o(()=>[V(" 正在关注 ")]),_:1})):g("",!0)]),_:1})])):g("",!0),C.value&&v.value.length===0?(r(),k("div",Ht,[a(Ce,{num:K.value},null,8,["num"])])):g("",!0),D("div",null,[v.value.length===0?(r(),k("div",Zt,[a(Ie,{size:"large",description:"暂无数据"})])):g("",!0),w(_).state.desktopModelShow?(r(),k("div",Jt,[(r(!0),k(_e,null,ge(v.value,I=>(r(),A(F,{key:I.id},{default:o(()=>[a(De,{post:I,isOwner:w(_).state.userInfo.id==I.user_id,addFollowAction:!0,onSendWhisper:te,onHandleFollowAction:ae,onHandleFriendAction:se},null,8,["post","isOwner"])]),_:2},1024))),128))])):(r(),k("div",Xt,[(r(!0),k(_e,null,ge(v.value,I=>(r(),A(F,{key:I.id},{default:o(()=>[a(Be,{post:I,isOwner:w(_).state.userInfo.id==I.user_id,addFollowAction:!0,onSendWhisper:te,onHandleFollowAction:ae,onHandleFriendAction:se},null,8,["post","isOwner"])]),_:2},1024))),128))]))]),a(Ue,{show:Q.value,user:ee.value,onSuccess:ie},null,8,["show","user"]),a(xe,{show:H.value,user:G,onSuccess:Z},null,8,["show","user"])]),_:1}),M.value>0?(r(),A(f,{key:0,justify:"center"},{default:o(()=>[a(w(zt),{class:"load-more",slots:{complete:"没有更多泡泡了",error:"加载出错"},onInfinite:c[1]||(c[1]=I=>J())},{spinner:o(()=>[D("div",$t,[U.value?g("",!0):(r(),A(Ee,{key:0,size:14})),D("span",es,fe(U.value?"没有更多泡泡了":"加载更多"),1)])]),_:1})]),_:1})):g("",!0)])}}}),Os=Ze(ts,[["__scopeId","data-v-cc7d12d2"]]);export{Os as default};
