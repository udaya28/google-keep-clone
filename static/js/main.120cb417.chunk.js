(this["webpackJsonpgoogle-keep-clone"]=this["webpackJsonpgoogle-keep-clone"]||[]).push([[0],{49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var c=a(4),s=a(1),n=a.n(s),i=a(16),o=a.n(i),l=(a(49),a(24)),r=(a(50),a(86)),d=(a(51),a(85)),j=a(25),h=(a(52),a(54),j.a.initializeApp({apiKey:"AIzaSyCMNsOfzm04c2evU5C2BaUHpecMNZ2z7SU",authDomain:"keep-clone-udaya.firebaseapp.com",databaseURL:"https://keep-clone-udaya.firebaseio.com",projectId:"keep-clone-udaya",storageBucket:"keep-clone-udaya.appspot.com",messagingSenderId:"134603175107",appId:"1:134603175107:web:2a74da86da09ba7ab1de76",measurementId:"G-BT6KV4XHBC"})),m=new j.a.auth.GoogleAuthProvider;m.setCustomParameters({prompt:"select_account"});h.firestore();var u=j.a.auth(),g=j.a,b=(a(57),a(37)),p=a.p+"static/media/todo.7573c54b.svg",O=a.p+"static/media/notes.84ceea96.svg",x=a.p+"static/media/sync.350ed259.svg",f=a.p+"static/media/google-icon.9a7800d0.svg",v=a(83),N=function(){var e=Object(v.a)({root:{color:"#525252",background:"#ffffff",fontWeight:"700",textTransform:"none",borderRadius:"20px",width:"80%",marginTop:"15px"}})();return Object(c.jsx)("div",{className:"full",children:Object(c.jsx)(d.a,{maxWidth:"sm",className:"login-main",children:Object(c.jsxs)("div",{className:"login",children:[Object(c.jsx)("h1",{className:"head",children:"Google keep clone"}),Object(c.jsx)("div",{className:"slide-1",children:Object(c.jsxs)(b.Carousel,{showArrows:!1,showStatus:!1,showThumbs:!1,infiniteLoop:!0,interval:4e3,stopOnHover:!1,swipeable:!0,autoPlay:!0,children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{src:p,alt:"",className:"img img-first"}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("p",{className:"heading",children:"Plan your day"}),Object(c.jsx)("p",{className:"caption",children:"Stay on track and get things done by making Todo"})]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{src:O,alt:"",className:"img"}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("p",{className:"heading",children:"Stay on track"}),Object(c.jsx)("p",{className:"caption",children:"Quickly capture your thoughts anywhere by making Notes"})]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{src:x,alt:"",className:"img img-third"}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("p",{className:"heading",children:"Synchronization in milliseconds "}),Object(c.jsx)("p",{className:"caption",children:"Synchronization among sign in devices without reloading"})]})]})]})}),Object(c.jsx)(r.a,{variant:"contained",onClick:function(){try{u.signInWithPopup(m)}catch(e){console.log(e.message)}},startIcon:Object(c.jsx)("img",{src:f,alt:"",srcSet:"",className:"logo-g"}),className:e.root,children:"Sign in with Google"})]})})})},y=(a(67),function(e){var t=e.userData;return Object(c.jsxs)(d.a,{maxWidth:"sm",children:[Object(c.jsx)("h1",{children:t.displayName}),Object(c.jsx)("h2",{children:t.email}),Object(c.jsx)("h3",{children:t.uid}),Object(c.jsx)("img",{src:t.photoURL,alt:t.displayName})," ",Object(c.jsx)("br",{}),Object(c.jsx)(r.a,{variant:"contained",color:"primary",onClick:function(){return g.auth().signOut()},children:"Sign Out"})]})});var k=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],i=Object(s.useState)({}),o=Object(l.a)(i,2),r=o[0],d=o[1];return Object(s.useEffect)((function(){g.auth().onAuthStateChanged((function(e){if(e){var t=e.photoURL,a=e.uid,c=e.email,s=e.displayName;d({photoURL:t,uid:a,email:c,displayName:s}),n(!0),console.log("log in")}else d({}),n(!1),console.log("log out")}))}),[]),Object(s.useEffect)((function(){console.log(a,r)}),[a,r]),Object(c.jsx)("div",{className:"App",children:a?Object(c.jsx)(y,{userData:r}):Object(c.jsx)(N,{})})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,88)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};o.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),S()}},[[68,1,2]]]);
//# sourceMappingURL=main.120cb417.chunk.js.map