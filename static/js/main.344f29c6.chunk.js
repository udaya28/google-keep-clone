(this["webpackJsonpgoogle-keep-clone"]=this["webpackJsonpgoogle-keep-clone"]||[]).push([[0],{43:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(6),c=a(1),r=a.n(c),s=a(17),i=a.n(s),o=(a(43),a(24)),u=(a(44),a(29)),p=a.n(u),l=a(32),d=a(72),j=(a(46),a(71)),h=a(25),b=(a(47),a(49),h.a.initializeApp({apiKey:"AIzaSyCMNsOfzm04c2evU5C2BaUHpecMNZ2z7SU",authDomain:"keep-clone-udaya.firebaseapp.com",databaseURL:"https://keep-clone-udaya.firebaseio.com",projectId:"keep-clone-udaya",storageBucket:"keep-clone-udaya.appspot.com",messagingSenderId:"134603175107",appId:"1:134603175107:web:2a74da86da09ba7ab1de76",measurementId:"G-BT6KV4XHBC"})),m=new h.a.auth.GoogleAuthProvider;m.setCustomParameters({prompt:"select_account"});b.firestore();var f=h.a.auth(),g=(h.a,function(e){e.userData;var t=e.setUserData,a=e.setLoggedIn,c=function(){var e=Object(l.a)(p.a.mark((function e(){var n,c,r,s,i,o,u,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=!1,r="",e.prev=1,e.next=4,f.signInWithPopup(m);case 4:n=e.sent,console.log(n.user),c=n.user.emailVerified,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),r=e.t0.message;case 12:if(e.prev=12,!c){e.next=20;break}return s=n.user,i=s.photoURL,o=s.uid,u=s.email,l=s.displayName,e.next=17,t({photoURL:i,uid:o,email:u,displayName:l});case 17:a(!0),e.next=21;break;case 20:console.log(r);case 21:return e.finish(12);case 22:case"end":return e.stop()}}),e,null,[[1,9,12,22]])})));return function(){return e.apply(this,arguments)}}();return Object(n.jsx)(j.a,{maxWidth:"sm",children:Object(n.jsx)("div",{className:"login",children:Object(n.jsx)(d.a,{variant:"contained",color:"primary",onClick:c,children:"SignUp"})})})}),x=(a(56),function(e){var t=e.userData;return Object(n.jsxs)(j.a,{maxWidth:"sm",children:[Object(n.jsx)("h1",{children:t.displayName}),Object(n.jsx)("h2",{children:t.email}),Object(n.jsx)("h3",{children:t.uid}),Object(n.jsx)("img",{src:t.photoURL,alt:t.displayName})]})});var O=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)({}),i=Object(o.a)(s,2),u=i[0],p=i[1];return Object(c.useEffect)((function(){return console.log(a,u),function(){}}),[a,u]),Object(n.jsx)("div",{className:"App",children:a?Object(n.jsx)(x,{userData:u}):Object(n.jsx)(g,{userData:u,setUserData:p,setLoggedIn:r})})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,73)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),v()}},[[57,1,2]]]);
//# sourceMappingURL=main.344f29c6.chunk.js.map