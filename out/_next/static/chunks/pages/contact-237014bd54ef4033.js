(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[364],{9260:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return s(5004)}])},5302:(e,t,s)=>{"use strict";s.d(t,{A:()=>m});var r=s(4848),a=s(6540);let l={_origin:"https://api.emailjs.com"},n=(e,t,s)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class i{constructor(e){this.status=e.status,this.text=e.responseText}}let c=(e,t,s={})=>new Promise((r,a)=>{let n=new XMLHttpRequest;n.addEventListener("load",({target:e})=>{let t=new i(e);200===t.status||"OK"===t.text?r(t):a(t)}),n.addEventListener("error",({target:e})=>{a(new i(e))}),n.open("POST",l._origin+e,!0),Object.keys(s).forEach(e=>{n.setRequestHeader(e,s[e])}),n.send(t)}),o=e=>{let t;if(!(t="string"==typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},d={sendForm:(e,t,s,r)=>{let a=r||l._userID,i=o(s);n(a,e,t);let d=new FormData(i);return d.append("lib_version","3.2.0"),d.append("service_id",e),d.append("template_id",t),d.append("user_id",a),c("/api/v1.0/email/send-form",d)}};function m(){let e=(0,a.useRef)(null);return(0,r.jsxs)("form",{ref:e,onSubmit:t=>{t.preventDefault(),e.current&&d.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",e.current,"YOUR_USER_ID").then(e=>{console.log(e.text)},e=>{console.log(e.text)})},className:"flex flex-col space-y-4 w-full max-w-lg",children:[(0,r.jsxs)("label",{className:"w-full",children:["Name",(0,r.jsx)("input",{type:"text",name:"user_name",className:"border p-2 rounded w-full",required:!0})]}),(0,r.jsxs)("label",{className:"w-full",children:["Email",(0,r.jsx)("input",{type:"email",name:"user_email",className:"border p-2 rounded w-full",required:!0})]}),(0,r.jsxs)("label",{className:"w-full",children:["Message",(0,r.jsx)("textarea",{name:"message",className:"border p-2 rounded w-full",required:!0})]}),(0,r.jsx)("button",{type:"submit",className:"bg-blue-500 text-white px-4 py-2 rounded",children:"Send"})]})}},6176:(e,t,s)=>{"use strict";s.d(t,{A:()=>i});var r=s(4848),a=s(1106),l=s.n(a),n=s(6540);function i(){let[e,t]=(0,n.useState)(new Date().toLocaleTimeString()),[s,a]=(0,n.useState)("FR/IDF");return(0,n.useEffect)(()=>{let e=setInterval(()=>{t(new Date().toLocaleTimeString())},1e3);return()=>clearInterval(e)},[]),(0,r.jsx)("nav",{className:"bg-gradient-to-r from-blue-500 to-purple-500 text-white fixed top-0 w-full z-50",children:(0,r.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"flex justify-between items-center h-16",children:[(0,r.jsx)("div",{className:"flex items-center space-x-4",children:(0,r.jsx)("span",{className:"text-sm font-medium",children:s})}),(0,r.jsxs)("div",{className:"hidden md:flex space-x-4 flex-grow justify-center",children:[(0,r.jsx)(l(),{href:"/",className:"hover:text-blue-400",children:"Home"}),(0,r.jsx)(l(),{href:"/about",className:"hover:text-blue-400",children:"\xc0 propos"}),(0,r.jsx)(l(),{href:"/projects",className:"hover:text-blue-400",children:"Projets"}),(0,r.jsx)(l(),{href:"/contact",className:"hover:text-blue-400",children:"Contact"}),(0,r.jsx)(l(),{href:"/memoire",className:"hover:text-blue-400",children:"M\xe9moire"})]}),(0,r.jsx)("div",{className:"text-right",children:e})]})})})}},5004:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(4848),a=s(6176),l=s(5302);function n(){return(0,r.jsxs)("div",{className:"min-h-screen",children:[(0,r.jsx)(a.A,{}),(0,r.jsxs)("div",{className:"min-h-screen flex flex-col items-center justify-center",children:[(0,r.jsx)("h1",{className:"text-3xl font-bold text-gray-800",children:"Contactez-moi"}),(0,r.jsx)(l.A,{})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[106,636,593,792],()=>t(9260)),_N_E=e.O()}]);