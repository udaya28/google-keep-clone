(this["webpackJsonpgoogle-keep-clone"]=this["webpackJsonpgoogle-keep-clone"]||[]).push([[0],{49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(1),s=a.n(c),i=a(16),o=a.n(i),r=(a(49),a(24)),l=(a(50),a(51),a(86)),d=a(85),u=a(83),h=a(25),m=(a(52),a(54),h.a.initializeApp({apiKey:"AIzaSyCMNsOfzm04c2evU5C2BaUHpecMNZ2z7SU",authDomain:"keep-clone-udaya.firebaseapp.com",databaseURL:"https://keep-clone-udaya.firebaseio.com",projectId:"keep-clone-udaya",storageBucket:"keep-clone-udaya.appspot.com",messagingSenderId:"134603175107",appId:"1:134603175107:web:2a74da86da09ba7ab1de76",measurementId:"G-BT6KV4XHBC"})),j=new h.a.auth.GoogleAuthProvider;j.setCustomParameters({prompt:"select_account"});m.firestore();var g=h.a.auth(),b=h.a,p=(a(57),a(37)),O=a.p+"static/media/todo.7573c54b.svg",f=a.p+"static/media/notes.84ceea96.svg",x=a.p+"static/media/sync.350ed259.svg",v=a.p+"static/media/google-icon.9a7800d0.svg",y=Object(u.a)({root:{color:"#525252",background:"#ffffff",fontWeight:"700",textTransform:"none",borderRadius:"20px",width:"80%",marginTop:"15px","&:hover":{backgroundColor:"white"}}}),N=function(){var e=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:e.img,alt:"",className:e.className}),Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("p",{className:"heading",children:e.head}),Object(n.jsx)("p",{className:"caption",children:e.content})]})]})},t=y();return Object(n.jsx)("div",{className:"full",children:Object(n.jsx)(d.a,{maxWidth:"sm",className:"login-main",children:Object(n.jsxs)("div",{className:"login",children:[Object(n.jsx)("h1",{className:"head",children:"JARVIS\ud83e\udd0d"}),Object(n.jsx)("div",{className:"slide-1",children:Object(n.jsxs)(p.Carousel,{showArrows:!1,showStatus:!1,showThumbs:!1,infiniteLoop:!0,interval:4e3,stopOnHover:!1,swipeable:!0,autoPlay:!0,children:[Object(n.jsx)(e,{img:O,className:"img img-first",head:"Plan your day",content:"Stay on track and get things done by making Todo"}),Object(n.jsx)(e,{img:f,className:"img",head:"Stay on track",content:"Quickly capture your thoughts anywhere by making Notes"}),Object(n.jsx)(e,{img:x,className:"img img-third",head:"Synchronization in milliseconds",content:"Synchronization among sign in devices without reloading"})]})}),Object(n.jsx)(l.a,{variant:"contained",onClick:function(){try{g.signInWithPopup(j)}catch(e){console.log(e.message)}},startIcon:Object(n.jsx)("img",{src:v,alt:"",srcSet:"",className:"logo-g"}),className:"".concat(t.root," sign-in-button"),children:"Sign in with Google"})]})})})},k=(a(67),function(e){var t=e.userData;return Object(n.jsxs)(d.a,{maxWidth:"sm",children:[Object(n.jsx)("h1",{children:t.displayName}),Object(n.jsx)("h2",{children:t.email}),Object(n.jsx)("h3",{children:t.uid}),Object(n.jsx)("img",{src:t.photoURL,alt:t.displayName})," ",Object(n.jsx)("br",{}),Object(n.jsx)(l.a,{variant:"contained",color:"primary",onClick:function(){return b.auth().signOut()},children:"Sign Out"})]})});var S=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)({}),o=Object(r.a)(i,2),l=o[0],d=o[1];return Object(c.useEffect)((function(){b.auth().onAuthStateChanged((function(e){if(e){var t=e.photoURL,a=e.uid,n=e.email,c=e.displayName;d({photoURL:t,uid:a,email:n,displayName:c}),s(!0),console.log("log in")}else d({}),s(!1),console.log("log out")}))}),[]),Object(c.useEffect)((function(){console.log(a,l)}),[a,l]),Object(n.jsx)("div",{className:"App",children:a?Object(n.jsx)(k,{userData:l}):Object(n.jsx)(N,{})})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,88)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root")),w()}},[[68,1,2]]]);
//# sourceMappingURL=main.9b5435c3.chunk.js.map