var ye=Object.defineProperty;var xe=(e,n,t)=>n in e?ye(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var $=(e,n,t)=>(xe(e,typeof n!="symbol"?n+"":n,t),t);import{W as ge,X as Ie,r as p,Y,Z as q,_ as X,$ as A,a0 as Pe,e as ie,a1 as L,j as d,a2 as K,a3 as U,U as we,h as be,a4 as oe,z as je,a5 as ve,a6 as ke,a7 as D,a8 as Ee,a9 as H,aa as _e,ab as Se,ac as Ce,ad as Re,ae as Te,af as De,ag as $e,ah as Le,ai as ze,aj as le,ak as Me,al as R,i as V,am as B,an as F,C as N,a as de,H as Ne,S as J,T as _,k as Q,n as O,ao as ue,ap as Oe,aq as Ae,ar as Ve,as as Be,at as We,y as ee,F as te,au as He,av as Fe,aw as ne,ax as Z,ay as Ge,az as Ke,aA as Ue,aB as Je,aC as ce,aD as Ye,aE as qe,aF as Xe,aG as Ze,aH as Qe,aI as z,aJ as et,aK as tt,aL as nt,aM as at}from"./sanity-53b5ef22.js";function rt(){return ge(function(e,n){var t,s=!1;e.subscribe(Ie(n,function(r){var o=t;t=r,s&&n.next([o,r]),s=!0}))})}const st=[];function it(e){const{children:n,flatIndex:t,index:s,params:r,payload:o,siblingIndex:a}=e,{navigate:i,navigateIntent:l,resolvePathFromState:f}=Y(),u=q(),{panes:m,expand:y}=Re(),c=p.useMemo(()=>(u==null?void 0:u.panes)||st,[u==null?void 0:u.panes]),h=p.useMemo(()=>m==null?void 0:m[m.length-2],[m]),I=s-1,j=p.useCallback(x=>{const P=c[I]||[],b=P[a],S=x(P,b),fe=[...c.slice(0,I),S,...c.slice(I+1)];return{...u||{},panes:fe}},[I,c,u,a]),w=p.useCallback(x=>{const P=j(x);return setTimeout(()=>i(P),0),P},[j,i]),v=p.useCallback(x=>{const P=j((b,S)=>[...b.slice(0,a),{...S,params:x},...b.slice(a+1)]);return f(P)},[j,f,a]),g=p.useCallback(x=>{w((P,b)=>[...P.slice(0,a),{...b,payload:x},...P.slice(a+1)])},[w,a]),E=p.useCallback(x=>{w((P,b)=>[...P.slice(0,a),{...b,params:x},...P.slice(a+1)])},[w,a]),k=p.useCallback(({id:x,parentRefPath:P,type:b,template:S})=>{i({panes:[...c.slice(0,I+1),[{id:x,params:{template:S.id,parentRefPath:Te(P),type:b},payload:S.params}]]})},[I,i,c]),C=p.useMemo(()=>({index:t,groupIndex:I,siblingIndex:a,payload:o,params:r,hasGroupSiblings:c[I]?c[I].length>1:!1,groupLength:c[I]?c[I].length:0,routerPanesState:c,ChildLink:De,BackLink:t?$e:void 0,ReferenceChildLink:Le,handleEditReference:k,ParameterizedLink:ze,replaceCurrent:(x={})=>{w(()=>[{id:x.id||"",payload:x.payload,params:x.params||{}}])},closeCurrent:()=>{w((x,P)=>x.length>1?x.filter(b=>b!==P):x)},closeCurrentAndAfter:(x=!0)=>{x&&h&&y(h.element),i({panes:[...c.slice(0,I)]})},duplicateCurrent:x=>{w((P,b)=>{const S={...b,payload:(x==null?void 0:x.payload)||b.payload,params:(x==null?void 0:x.params)||b.params};return[...P.slice(0,a),S,...P.slice(a)]})},setView:x=>{const P=le(r,"view");return E(x?{...P,view:x}:P)},setParams:E,setPayload:g,createPathWithParams:v,navigateIntent:l}),[t,I,a,o,r,c,k,E,g,v,l,w,h,i,y]);return d.jsx(Me.Provider,{value:C,children:n})}class T extends Error{constructor({message:t,context:s,helpId:r,cause:o}){super(t);$(this,"cause");$(this,"context");$(this,"helpId");this.name="PaneResolutionError",this.context=s,this.helpId=r,this.cause=o}}const ae=new WeakMap;function W(e){const n=ae.get(e);if(n)return n;const t=tt();return ae.set(e,t),t}const ot=e=>!!e&&typeof(e==null?void 0:e.then)=="function",lt=e=>X(e)?typeof e.serialize=="function":!1,dt=e=>(n,t,s)=>{try{return e(n,t,s)}catch(r){throw r instanceof T?r:new T({message:typeof(r==null?void 0:r.message)=="string"?r.message:"",context:t,cause:r})}},ut=e=>(...n)=>e(...n).pipe(nt(1),at());function pe(e){const n=dt(ut(e((t,s,r)=>{if(!t)throw new T({message:"Pane returned no child",context:s,helpId:"structure-item-returned-no-child"});return ot(t)||Ze(t)?Qe(t).pipe(Z(o=>n(o,s,r))):lt(t)?n(t.serialize(s),s,r):typeof t=="function"?n(t(s.id,s),s,r):z(t)})));return n}const re=new WeakMap;function he(e,n){const t=re.get(e)||new Map;if(t){const o=t.get(n);if(o)return o}const s=e[n];if(typeof s!="function")throw new Error(`Expected property \`${n}\` to be a function but got ${typeof s} instead.`);const r=s.bind(e);return t.set(n,r),re.set(e,t),r}async function ct(e){const n=new Map,t=pe(a=>(i,l,f)=>{const u=i&&`${W(i)}-${l.path.join("__")}`,m=u&&n.get(u);if(m)return m;const y=a(i,l,f);return u&&n.set(u,y),y}),s=[[{id:`__edit__${e.params.id}`,params:{...le(e.params,["id"]),type:e.params.type},payload:e.payload}]];async function r({currentId:a,flatIndex:i,intent:l,params:f,parent:u,path:m,payload:y,unresolvedPane:c,levelIndex:h,structureContext:I}){var E;if(!c)return[];const{id:j,type:w,...v}=f,g=await ce(t(c,{id:a,splitIndex:0,parent:u,path:m,index:i,params:{},payload:void 0,structureContext:I},i));return g.type==="document"&&g.id===j?[{panes:[...m.slice(0,m.length-1).map(k=>[{id:k}]),[{id:j,params:v,payload:y}]],depthIndex:m.length,levelIndex:h}]:(E=g.canHandleIntent)!=null&&E.call(g,l,f,{pane:g,index:i})||g.type==="documentList"&&g.schemaTypeName===w&&g.options.filter==="_type == $type"?[{panes:[...m.map(k=>[{id:k}]),[{id:f.id,params:v,payload:y}]],depthIndex:m.length,levelIndex:h}]:g.type==="list"&&g.child&&g.items?(await Promise.all(g.items.map((k,C)=>k.type==="divider"?Promise.resolve([]):r({currentId:k._id||k.id,flatIndex:i+1,intent:l,params:f,parent:g,path:[...m,k.id],payload:y,unresolvedPane:typeof g.child=="function"?he(g,"child"):g.child,levelIndex:C,structureContext:I})))).flat():[]}const o=(await r({currentId:"root",flatIndex:0,levelIndex:0,intent:e.intent,params:e.params,parent:null,path:[],payload:e.payload,unresolvedPane:e.rootPaneNode,structureContext:e.structureContext})).sort((a,i)=>a.depthIndex===i.depthIndex?a.levelIndex-i.levelIndex:a.depthIndex-i.depthIndex)[0];return o?o.panes:s}const pt=(e,n)=>{const t=e.replace(/^__edit__/,""),{params:s,payload:r,structureContext:{resolveDocumentNode:o}}=n,{type:a,template:i}=s;if(!a)throw new Error(`Document type for document with ID ${t} was not provided in the router params.`);let l=o({schemaType:a,documentId:t}).id("editor");return i&&(l=l.initialValueTemplate(i,r)),l.serialize()};function ht(e){var n,t;return`contextHash(${JSON.stringify({id:e.id,parentId:parent&&W(parent),path:e.path,index:e.index,splitIndex:e.splitIndex,serializeOptionsIndex:(n=e.serializeOptions)==null?void 0:n.index,serializeOptionsPath:(t=e.serializeOptions)==null?void 0:t.path})})`}const se=e=>{const n={type:e.type,id:e.routerPaneSibling.id,params:e.routerPaneSibling.params||{},payload:e.routerPaneSibling.payload||null,flatIndex:e.flatIndex,groupIndex:e.groupIndex,siblingIndex:e.siblingIndex,path:e.path,paneNode:e.type==="resolvedMeta"?W(e.paneNode):null};return`metaHash(${JSON.stringify(n)})`};function M({unresolvedPane:e,flattenedRouterPanes:n,parent:t,path:s,resolvePane:r,structureContext:o}){const[a,...i]=n,l=i[0],f={id:a.routerPaneSibling.id,splitIndex:a.siblingIndex,parent:t,path:[...s,a.routerPaneSibling.id],index:a.flatIndex,params:a.routerPaneSibling.params||{},payload:a.routerPaneSibling.payload,structureContext:o};try{return r(e,f,a.flatIndex).pipe(Z(u=>{const m={type:"resolvedMeta",...a,paneNode:u,path:f.path},y=i.map((h,I)=>({type:"loading",path:[...f.path,...i.slice(I).map((j,w)=>`[${h.flatIndex+w}]`)],paneNode:null,...h}));if(!i.length)return z([m]);let c;return l!=null&&l.routerPaneSibling.id.startsWith("__edit__")?c=M({unresolvedPane:pt,flattenedRouterPanes:i,parent:t,path:f.path,resolvePane:r,structureContext:o}):a.groupIndex===(l==null?void 0:l.groupIndex)?c=M({unresolvedPane:e,flattenedRouterPanes:i,parent:t,path:s,resolvePane:r,structureContext:o}):c=M({unresolvedPane:typeof u.child=="function"?he(u,"child"):u.child,flattenedRouterPanes:i,parent:u,path:f.path,resolvePane:r,structureContext:o}),et(z([m,...y]),c.pipe(R(h=>[m,...h])))}))}catch(u){if(u instanceof T&&(u.context&&console.warn(`Pane resolution error at index ${u.context.index}${u.context.splitIndex>0?` for split pane index ${u.context.splitIndex}`:""}: ${u.message}${u.helpId?` - see ${ue(u.helpId)}`:""}`,u),u.helpId==="structure-item-returned-no-child"))return z([]);throw u}}function mt({routerPanesStream:e,rootPaneNode:n,initialCacheState:t={cacheKeysByFlatIndex:[],flattenedRouterPanes:[],resolvedPaneCache:new Map,resolvePane:()=>Ke},structureContext:s}){return e.pipe(R(r=>[[{id:"root"}],...r]),R(r=>r.flatMap((o,a)=>o.map((i,l)=>({routerPaneSibling:i,groupIndex:a,siblingIndex:l}))).map((o,a)=>({...o,flatIndex:a}))),Fe([]),rt(),R(([r,o])=>{for(let a=0;a<o.length;a++){const i=r[a],l=o[a];if(!U(i,l))return{flattenedRouterPanes:o,diffIndex:a}}return{flattenedRouterPanes:o,diffIndex:o.length}}),ne((r,o)=>{const{cacheKeysByFlatIndex:a,resolvedPaneCache:i}=r,{flattenedRouterPanes:l,diffIndex:f}=o,u=a.slice(0,f+1),m=a.slice(f+1),y=new Set(u.flatMap(h=>Array.from(h))),c=m.flatMap(h=>Array.from(h)).filter(h=>!y.has(h));for(const h of c)i.delete(h);return{flattenedRouterPanes:l,cacheKeysByFlatIndex:a,resolvedPaneCache:i,resolvePane:pe(h=>(I,j,w)=>{const v=I&&`${W(I)}-${ht(j)}`,g=v&&i.get(v);if(g)return g;const E=h(I,j,w);if(!v)return E;const k=a[w]||new Set;return k.add(v),a[w]=k,i.set(v,E),E})}},t),Z(({flattenedRouterPanes:r,resolvePane:o})=>M({unresolvedPane:n,flattenedRouterPanes:r,parent:null,path:[],resolvePane:o,structureContext:s}))).pipe(ne((r,o)=>o.map((a,i)=>{const l=r[i];return!l||a.type!=="loading"?a:l.routerPaneSibling.id===a.routerPaneSibling.id?l:a}),[]),Ge((r,o)=>{if(r.length!==o.length)return!1;for(let a=0;a<o.length;a++){const i=r[a],l=o[a];if(se(i)!==se(l))return!1}return!0}))}function ft(){const e=p.useMemo(()=>new Ue(1),[]),n=p.useMemo(()=>e.asObservable().pipe(R(s=>(s==null?void 0:s.panes)||[])),[e]),{state:t}=Y();return p.useEffect(()=>{e.next(t)},[t,e]),n}function yt(){const[e,n]=p.useState();if(e)throw e;const{structureContext:t,rootPaneNode:s}=A(),[r,o]=p.useState({paneDataItems:[],resolvedPanes:[],routerPanes:[]}),a=ft();return p.useEffect(()=>{const i=mt({rootPaneNode:s,routerPanesStream:a,structureContext:t}).pipe(R(l=>{const f=l.reduce((y,c)=>{const h=y[c.groupIndex]||[];return h[c.siblingIndex]=c.routerPaneSibling,y[c.groupIndex]=h,y},[]),u=f.length,m=l.map(y=>{const{groupIndex:c,flatIndex:h,siblingIndex:I,routerPaneSibling:j,path:w}=y,v=j.id,g=f[c+1];return{active:c===u-2,childItemId:(g==null?void 0:g[0].id)??null,index:h,itemId:j.id,groupIndex:c,key:`${y.type==="loading"?"unknown":y.paneNode.id}-${v}-${I}`,pane:y.type==="loading"?D:y.paneNode,params:j.params||{},path:w.join(";"),payload:j.payload,selected:h===l.length-1,siblingIndex:I}});return{paneDataItems:m,routerPanes:f,resolvedPanes:m.map(y=>y.pane)}})).subscribe({next:l=>o(l),error:l=>n(l)});return()=>i.unsubscribe()},[s,a,t]),r}async function xt(e,n,t){if(n&&t)return{id:n,type:t};if(!n&&t)return{id:Je(),type:t};if(n&&!t){const s=await ce(e.resolveTypeForDocument(n));return{id:n,type:s}}throw new T({message:"Neither document `id` or `type` was provided when trying to resolve intent."})}const gt={},It=p.memo(function(){const{navigate:e}=Y(),n=q(p.useCallback(i=>{const l=typeof i.intent=="string"?i.intent:void 0;return l?{intent:l,params:X(i.params)?i.params:gt,payload:i.payload}:void 0},[])),{rootPaneNode:t,structureContext:s}=A(),r=Pe(),[o,a]=p.useState(null);if(o)throw o;return p.useEffect(()=>{if(n){const{intent:i,params:l,payload:f}=n;let u=!1;async function m(){const{id:y,type:c}=await xt(r,typeof l.id=="string"?l.id:void 0,typeof l.type=="string"?l.type:void 0);if(u)return;const h=await ct({intent:i,params:{...l,id:y,type:c},payload:f,rootPaneNode:t,structureContext:s});u||e({panes:h},{replace:!0})}return m().catch(a),()=>{u=!0}}},[r,n,e,t,s]),null}),Pt=ie.span`
  &:not(:last-child)::after {
    content: ' ➝ ';
    opacity: 0.5;
  }
`;function wt(e){return e.replace(/\(\.\.\.\)\./g,`(...)
  .`).replace(/__WEBPACK_IMPORTED_MODULE_\d+_+/g,"").replace(/___default\./g,".").replace(new RegExp(` \\(https?:\\/\\/${window.location.host}`,"g")," (")}function bt({error:e}){if(!(e instanceof T))throw e;const{cause:n}=e,{t}=V(B),s=(n==null?void 0:n.stack)||e.stack,r=s&&!(n instanceof F)&&!e.message.includes("Module build failed:"),o=n instanceof F?n.path:[],a=n instanceof F&&n.helpId||e.helpId,i=p.useCallback(()=>{window.location.reload()},[]);return d.jsx(N,{height:"fill",overflow:"auto",padding:4,sizing:"border",tone:"critical",children:d.jsxs(de,{children:[d.jsx(Ne,{as:"h2",children:t("structure-error.header.text")}),d.jsxs(N,{marginTop:4,padding:4,radius:2,overflow:"auto",shadow:1,tone:"inherit",children:[o.length>0&&d.jsxs(J,{space:2,children:[d.jsx(_,{size:1,weight:"medium",children:t("structure-error.structure-path.label")}),d.jsx(Q,{children:o.slice(1).map((l,f)=>d.jsx(Pt,{children:l},`${l}-${f}`))})]}),d.jsxs(J,{marginTop:4,space:2,children:[d.jsx(_,{size:1,weight:"medium",children:t("structure-error.error.label")}),d.jsx(Q,{children:r?wt(s):e.message})]}),a&&d.jsx(O,{marginTop:4,children:d.jsx(_,{children:d.jsx("a",{href:ue(a),rel:"noopener noreferrer",target:"_blank",children:t("structure-error.docs-link.text")})})}),d.jsx(O,{marginTop:4,children:d.jsx(Oe,{text:t("structure-error.reload-button.text"),icon:Ae,tone:"primary",onClick:i})})]})]})})}function jt(e){const{isSelected:n,pane:t,paneKey:s}=e,r=X(t)&&t.type||null,{t:o}=V(B);return d.jsxs(Ve,{id:s,selected:n,children:[d.jsx(Be,{title:o("panes.unknown-pane-type.title")}),d.jsx(We,{children:d.jsx(O,{padding:4,children:typeof r=="string"?d.jsx(_,{as:"p",muted:!0,children:d.jsx(ee,{t:o,i18nKey:"panes.unknown-pane-type.unknown-type.text",values:{type:r}})}):d.jsx(_,{as:"p",muted:!0,children:d.jsx(ee,{t:o,i18nKey:"panes.unknown-pane-type.missing-type.text"})})})})]})}const vt={component:p.lazy(()=>L(()=>import("./index-04dac565.js"),["static/index-04dac565.js","static/sanity-53b5ef22.js"])),document:p.lazy(()=>L(()=>import("./sanity-53b5ef22.js").then(e=>e.b1),[]).then(function(e){return e.pane})),documentList:p.lazy(()=>L(()=>import("./sanity-53b5ef22.js").then(e=>e.b1),[]).then(function(e){return e.pane$1})),list:p.lazy(()=>L(()=>import("./index2-75e90c22.js"),["static/index2-75e90c22.js","static/sanity-53b5ef22.js"]))},kt=p.memo(function(e){const{active:n,childItemId:t,groupIndex:s,index:r,itemId:o,pane:a,paneKey:i,params:l,payload:f,path:u,selected:m,siblingIndex:y}=e,c=vt[a.type]||jt;return d.jsx(it,{flatIndex:r,index:s,params:l,payload:f,siblingIndex:y,children:d.jsx(p.Suspense,{fallback:d.jsx(K,{paneKey:i,path:u,selected:m}),children:d.jsx(c,{childItemId:t||"",index:r,itemId:o,isActive:n,isSelected:m,paneKey:i,pane:a})})})},({params:e={},payload:n=null,...t},{params:s={},payload:r=null,...o})=>{if(!U(e,s)||!U(n,r))return!1;const a=new Set([...Object.keys(t),...Object.keys(o)]);for(const i of a)if(t[i]!==o[i])return!1;return!0});function Et(){const{t:e}=V(B);return d.jsx(N,{height:"fill",children:d.jsx(te,{align:"center",height:"fill",justify:"center",padding:4,sizing:"border",children:d.jsx(de,{width:0,children:d.jsx(N,{padding:4,radius:2,shadow:1,tone:"caution",children:d.jsxs(te,{children:[d.jsx(O,{children:d.jsx(_,{size:1,children:d.jsx(He,{})})}),d.jsxs(J,{flex:1,marginLeft:3,space:3,children:[d.jsx(_,{as:"h1",size:1,weight:"medium",children:e("no-document-types-screen.title")}),d.jsx(_,{as:"p",muted:!0,size:1,children:e("no-document-types-screen.subtitle")}),d.jsx(_,{as:"p",muted:!0,size:1,children:d.jsx("a",{href:"https://www.sanity.io/docs/create-a-schema-and-configure-sanity-studio",target:"_blank",rel:"noreferrer",children:e("no-document-types-screen.link-text")})})]})]})})})})})}const _t=e=>{const{documentId:n,documentType:t}=e,s=Ye(n,t),r=oe(),{t:o}=V(B),a=!(s!=null&&s.published)&&!(s!=null&&s.draft),i=(s==null?void 0:s.draft)||(s==null?void 0:s.published),l=r.get(t),{value:f,isLoading:u}=qe({enabled:!0,schemaType:l,value:i}),m=a?o("browser-document-title.new-document",{schemaType:(l==null?void 0:l.title)||(l==null?void 0:l.name)}):(f==null?void 0:f.title)||o("browser-document-title.untitled-document"),y=s.ready&&!u,c=me(m);return p.useEffect(()=>{y&&(document.title=c)},[m,y,c]),null},G=e=>{const{title:n}=e,t=me(n);return p.useEffect(()=>{document.title=t},[t,n]),null},St=e=>{const{resolvedPanes:n}=e;if(!(n!=null&&n.length))return null;const t=n[n.length-1];return Rt(t)?d.jsx(G,{}):Ct(t)?t!=null&&t.title?d.jsx(G,{title:t.title}):d.jsx(_t,{documentId:t.options.id,documentType:t.options.type}):d.jsx(G,{title:t==null?void 0:t.title})};function me(e){const n=A().structureContext.title;return[e,n].filter(t=>t).join(" | ")}function Ct(e){return e!==D&&e.type==="document"}function Rt(e){return e===D}const Tt=ie(Xe)`
  min-height: 100%;
  min-width: 320px;
`,Dt=we("mod+s"),$t=p.memo(function({onPaneChange:e}){var c;const{push:n}=be(),t=oe(),{layoutCollapsed:s,setLayoutCollapsed:r}=A(),{paneDataItems:o,resolvedPanes:a}=yt(),i=q(p.useCallback(h=>typeof h.intent=="string",[])),{sanity:{media:l}}=je(),[f,u]=p.useState(null),m=p.useCallback(()=>r(!0),[r]),y=p.useCallback(()=>r(!1),[r]);return p.useEffect(()=>{a.length&&e(a)},[e,a]),p.useEffect(()=>{const h=I=>{Dt(I)&&(I.preventDefault(),n({closable:!0,id:"auto-save-message",status:"info",title:"Your work is automatically saved!",duration:4e3}))};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[n]),(c=t._original)!=null&&c.types.some(ve)?d.jsxs(ke,{element:f||null,children:[d.jsxs(Tt,{flex:1,height:s?void 0:"fill",minWidth:l[1],onCollapse:m,onExpand:y,children:[o.map(({active:h,childItemId:I,groupIndex:j,itemId:w,key:v,pane:g,index:E,params:k,path:C,payload:x,siblingIndex:P,selected:b})=>d.jsx(p.Fragment,{children:g===D?d.jsx(K,{paneKey:v,path:C,selected:b}):d.jsx(kt,{active:h,groupIndex:j,index:E,pane:g,childItemId:I,itemId:w,paneKey:v,params:k,payload:x,path:C,selected:b,siblingIndex:P})},`${g===D?"loading":g.type}-${E}`)),o.length<=1&&i&&d.jsx(K,{paneKey:"intent-resolver"})]}),d.jsx(St,{resolvedPanes:a}),d.jsx("div",{"data-portal":"",ref:u})]}):d.jsx(Et,{})});function Mt({tool:{options:e}}){const{unstable_sources:n}=Ee(),[t]=n,{source:s,defaultDocumentNode:r,structure:o}=e||{};p.useEffect(()=>(H([]),()=>H([])),[]);const[{error:a},i]=p.useState({error:null});return a?d.jsx(bt,{error:a}):d.jsx(_e,{onCatch:i,children:d.jsx(Se,{name:s||t.name,children:d.jsxs(Ce,{defaultDocumentNode:r,structure:o,children:[d.jsx($t,{onPaneChange:H}),d.jsx(It,{})]})})})}export{Mt as default};
