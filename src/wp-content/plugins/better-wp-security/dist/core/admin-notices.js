(globalThis.itsecWebpackJsonP=globalThis.itsecWebpackJsonP||[]).push([[101],{24691:(e,t,n)=>{"use strict";n.r(t);var o=n(6293),i=n(95122),s=n(25993),c=n.n(s),r=n(54761),a=n(20070),l=n(64893),u=(n(97157),n(94184)),d=n.n(u),m=n(12614),p=n(48015),h=n(71930),w=n(3967);function b(){const[e,t]=(0,o.useState)(!1),{notices:n,noticesLoaded:s}=(0,p.useSelect)((e=>({notices:e("ithemes-security/admin-notices").getNotices(),noticesLoaded:e("ithemes-security/admin-notices").areNoticesLoaded()})));return(0,o.createElement)(m.a,{theme:h.U1},(0,o.createElement)(l.Button,{id:"itsec-admin-notices-toolbar-trigger",className:d()("ab-item ab-empty-item",{"itsec-admin-notices-toolbar--has-notices":n.length>0}),onClick:()=>t(!e),"aria-expanded":e},(0,o.createElement)("span",{className:"it-icon-itsec"}),(0,o.createElement)("span",{className:"itsec-toolbar-text"},(0,i.__)("Security","better-wp-security")),n.length>0&&(0,o.createElement)("span",{className:"itsec-admin-notices-toolbar-bubble"},(0,o.createElement)("span",{className:"itsec-admin-notices-toolbar-bubble__count"},n.length))),e&&(0,o.createElement)(l.Popover,{className:"itsec-admin-notices-toolbar__popover",noArrow:!0,expandOnMobile:!0,focusOnMount:"container",position:"bottom center",headerTitle:(0,i.__)("Security","better-wp-security"),onClose:()=>t(!1),onFocusOutside:()=>t(!1)},(0,o.createElement)(w.Z,{notices:n,loaded:s,close:()=>t(!1)})))}const f=function({portalEl:e}){return(0,o.createElement)(l.SlotFillProvider,null,(0,o.createPortal)((0,o.createElement)(l.Popover.Slot,null),e),(0,o.createElement)(b,null))};n.p=window.itsecWebpackPublicPath,(0,i.setLocaleData)({"":{}},"better-wp-security"),c()((()=>{const e=document.getElementById("wp-admin-bar-itsec_admin_bar_menu"),t=document.getElementById("itsec-admin-notices-root");return(0,o.render)((0,o.createElement)(f,{portalEl:t}),e)})),(0,r.addAction)("ithemes-security.admin-notices.triggerAction","ithemes-security/admin-notices/solid-welcome",(function(e,t,n){if("welcome-solidwp"!==t||"open"!==n)return;const i=document.createElement("div");i.classList.add("solid-welcome-container"),document.body.appendChild(i),(0,o.render)((0,o.createElement)(a.App,{onClose:()=>{i.remove()}}),i)}))},97157:e=>{e.exports=function(){return this.itsec.core["admin-notices-api"]}()},20070:e=>{e.exports=function(){return this.itsec.core["solid-welcome"]}()},31600:e=>{e.exports=function(){return this.itsec.packages.data}()},64893:e=>{e.exports=function(){return this.wp.components}()},9576:e=>{e.exports=function(){return this.wp.compose}()},48015:e=>{e.exports=function(){return this.wp.data}()},82521:e=>{e.exports=function(){return this.wp.date}()},25993:e=>{e.exports=function(){return this.wp.domReady}()},6293:e=>{e.exports=function(){return this.wp.element}()},54761:e=>{e.exports=function(){return this.wp.hooks}()},95122:e=>{e.exports=function(){return this.wp.i18n}()},81834:e=>{e.exports=function(){return this.wp.isShallowEqual}()},81019:e=>{e.exports=function(){return this.wp.keycodes}()},14776:e=>{e.exports=function(){return this.wp.primitives}()},73470:e=>{e.exports=function(){return this.wp.url}()},99196:e=>{"use strict";e.exports=window.React},92819:e=>{"use strict";e.exports=window.lodash}},e=>{e.O(0,[7271,1930,5307,5257,1511,976,6179,5896],(()=>(24691,e(e.s=24691))));var t=e.O();((window.itsec=window.itsec||{}).core=window.itsec.core||{})["admin-notices"]=t}]);