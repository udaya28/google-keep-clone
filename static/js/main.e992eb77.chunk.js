(this["webpackJsonpgoogle-keep-clone"]=this["webpackJsonpgoogle-keep-clone"]||[]).push([[0],{47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var c=a(4),n=a(1),i=a.n(n),o=a(16),s=a.n(o),r=(a(47),a(24)),l=(a(48),a(81)),u=(a(49),a(80)),j=a(25),d=(a(50),a(52),j.a.initializeApp({apiKey:"AIzaSyCMNsOfzm04c2evU5C2BaUHpecMNZ2z7SU",authDomain:"keep-clone-udaya.firebaseapp.com",databaseURL:"https://keep-clone-udaya.firebaseio.com",projectId:"keep-clone-udaya",storageBucket:"keep-clone-udaya.appspot.com",messagingSenderId:"134603175107",appId:"1:134603175107:web:2a74da86da09ba7ab1de76",measurementId:"G-BT6KV4XHBC"})),h=new j.a.auth.GoogleAuthProvider;h.setCustomParameters({prompt:"select_account"});d.firestore();var p=j.a.auth(),b=j.a,m=(a(55),a(36)),O=a.p+"static/media/xy.99662ffa.svg",g=function(){return Object(c.jsx)(u.a,{maxWidth:"sm",children:Object(c.jsxs)("div",{className:"login",children:[Object(c.jsx)("div",{children:Object(c.jsxs)(m.Carousel,{showArrows:!1,showStatus:!1,showThumbs:!1,infiniteLoop:!0,interval:2e3,stopOnHover:!1,swipeable:!0,autoPlay:!0,children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{src:O,alt:""}),Object(c.jsx)("h1",{children:"hello"})]}),Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:O,alt:""})}),Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:O,alt:""})})]})}),Object(c.jsx)(l.a,{variant:"contained",color:"primary",onClick:function(){try{p.signInWithPopup(h)}catch(e){console.log(e.message)}},children:"SignUp"})]})})},f=(a(65),function(e){var t=e.userData;return Object(c.jsxs)(u.a,{maxWidth:"sm",children:[Object(c.jsx)("h1",{children:t.displayName}),Object(c.jsx)("h2",{children:t.email}),Object(c.jsx)("h3",{children:t.uid}),Object(c.jsx)("img",{src:t.photoURL,alt:t.displayName})," ",Object(c.jsx)("br",{}),Object(c.jsx)(l.a,{variant:"contained",color:"primary",onClick:function(){return b.auth().signOut()},children:"Sign Out"})]})});var x=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)({}),s=Object(r.a)(o,2),l=s[0],u=s[1];return Object(n.useEffect)((function(){b.auth().onAuthStateChanged((function(e){if(e){var t=e.photoURL,a=e.uid,c=e.email,n=e.displayName;u({photoURL:t,uid:a,email:c,displayName:n}),i(!0),console.log("log in")}else u({}),i(!1),console.log("log out")}))}),[]),Object(n.useEffect)((function(){console.log(a,l)}),[a,l]),Object(c.jsx)("div",{className:"App",children:a?Object(c.jsx)(f,{userData:l}):Object(c.jsx)(g,{})})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,82)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),c(e),n(e),i(e),o(e)}))};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),v()}},[[66,1,2]]]);
//# sourceMappingURL=main.e992eb77.chunk.js.map