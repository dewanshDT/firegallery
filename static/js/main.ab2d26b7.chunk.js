(this.webpackJsonpfiregallery=this.webpackJsonpfiregallery||[]).push([[0],{22:function(e,t,r){},26:function(e,t,r){"use strict";r.r(t);var c=r(3),n=r.n(c),a=r(16),s=r.n(a),i=(r(22),r(2)),l=function(){return Object(i.jsxs)("div",{className:"title",children:[Object(i.jsx)("h1",{children:"FireGallery"}),Object(i.jsx)("h2",{children:"Your Pictures"}),Object(i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})},o=r(8),u=r(12),j=r.n(u),d=r(17),b=r(10);r(27),r(28);b.a.initializeApp({apiKey:"AIzaSyAcOkJv-jY0Y0TYM9tS5yFwUhQnSD-hMEc",authDomain:"dew-firegallry.firebaseapp.com",projectId:"dew-firegallry",storageBucket:"dew-firegallry.appspot.com",messagingSenderId:"650316873168",appId:"1:650316873168:web:7eb134ebd58b4b97edcdd5"});var f=b.a.storage(),p=b.a.firestore(),O=b.a.firestore.FieldValue.serverTimestamp,g=function(e){var t=Object(c.useState)(0),r=Object(o.a)(t,2),n=r[0],a=r[1],s=Object(c.useState)(null),i=Object(o.a)(s,2),l=i[0],u=i[1],b=Object(c.useState)(null),g=Object(o.a)(b,2),m=g[0],h=g[1];return Object(c.useEffect)((function(){var t=f.ref(e.name),r=p.collection("images");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;a(t)}),(function(e){u(e)}),Object(d.a)(j.a.mark((function e(){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:c=e.sent,r.add({url:c,createdAt:O()}),h(c);case 5:case"end":return e.stop()}}),e)}))))}),[e]),{progress:n,error:l,url:m}},m=function(e){var t=e.file,r=e.setfile,n=g(t),a=n.url,s=n.progress;return console.log(a,s),Object(c.useEffect)((function(){a&&r(null)}),[a,r]),Object(i.jsx)("div",{className:"progress-bar",style:{width:s+"%"}})},h=function(){var e=["image/png","image/jpeg","image/jpg"],t=Object(c.useState)(null),r=Object(o.a)(t,2),n=r[0],a=r[1],s=Object(c.useState)(""),l=Object(o.a)(s,2),u=l[0],j=l[1];return Object(i.jsxs)("form",{children:[Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{type:"file",onChange:function(t){var r=t.target.files[0];r&&e.includes(r.type)?(a(r),j("")):(a(null),j("please select an image file."))}}),Object(i.jsx)("span",{children:"+"})]}),u&&Object(i.jsx)("div",{className:"error",children:u}),n&&Object(i.jsx)("div",{children:n.name}),n&&Object(i.jsx)(m,{file:n,setfile:a})]})},v=r(14),x=function(e){var t=Object(c.useState)([]),r=Object(o.a)(t,2),n=r[0],a=r[1];return Object(c.useEffect)((function(){var t=p.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(v.a)(Object(v.a)({},e.data()),{},{id:e.id}))})),a(t)}));return function(){return t()}}),[e]),{docs:n}},y=function(){var e=x("images").docs;return console.log(e),Object(i.jsx)("div",{className:"img-grid",children:e&&e.map((function(e){return Object(i.jsx)("div",{className:"img-wrap",children:Object(i.jsx)("img",{src:e.url,alt:"uploaded pic"})},e.id)}))})};var w=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(l,{}),Object(i.jsx)(h,{}),Object(i.jsx)(y,{})]})};s.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(w,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.ab2d26b7.chunk.js.map