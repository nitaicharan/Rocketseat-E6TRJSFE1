(this.webpackJsonprocketseate6trjsfe1=this.webpackJsonprocketseate6trjsfe1||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n.n(r),s=n(28),i=n.n(s),a=n(14),o=n(6),u=n(5),d=n.n(u),l=n(8),j=n(9),b=n(15);n(37),n(39);b.a.initializeApp({apiKey:"AIzaSyDmJt1jpfVZDxxxlR2gc6ajVb3maJQopFk",authDomain:"rocketseate6trjsfe1.firebaseapp.com",databaseURL:"https://rocketseate6trjsfe1-default-rtdb.firebaseio.com",projectId:"rocketseate6trjsfe1",storageBucket:"rocketseate6trjsfe1.appspot.com",messagingSenderId:"80829958581",appId:"1:80829958581:web:6077545766890c5bf931fc"});var h=b.a.auth(),p=b.a.database(),f=n(1),m=Object(r.createContext)({});function x(e){var t=Object(r.useState)(),n=Object(j.a)(t,2),c=n[0],s=n[1];function i(){return(i=Object(l.a)(d.a.mark((function e(){var t,n,r,c,i,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new b.a.auth.GoogleAuthProvider,e.next=3,h.signInWithPopup(t);case 3:if(!(n=e.sent).user){e.next=9;break}if(r=n.user,c=r.displayName,i=r.photoURL,a=r.uid,c&&i){e.next=8;break}throw new Error("Missing information from Google Account.");case 8:s({id:a,name:c,avatar:i});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){var e=h.onAuthStateChanged((function(e){if(e){var t=e.displayName,n=e.photoURL,r=e.uid;if(!t||!n)throw new Error("Missing information from Google Account.");s({id:r,name:t,avatar:n})}}));return function(){e()}}),[]),Object(f.jsx)(m.Provider,{value:{user:c,signInWithGoogle:function(){return i.apply(this,arguments)}},children:e.children})}var O=n.p+"static/media/delete.22ba6e00.svg",v=n.p+"static/media/check.5dfa6ed6.svg",g=n.p+"static/media/answer.4502a8d5.svg",k=n.p+"static/media/logo.a88331cb.svg",w=n(19),y=n(31);n(44);function C(e){var t=e.isOutlined,n=void 0!==t&&t,r=Object(y.a)(e,["isOutlined"]);return Object(f.jsx)("button",Object(w.a)({className:"button ".concat(n?"outlined":"")},r))}var q=n(29),A=n.n(q);n(45);function L(e){var t=e.content,n=e.author,r=e.children,c=e.isAnswered,s=void 0!==c&&c,i=e.isHighLighted,a=void 0!==i&&i;return Object(f.jsxs)("div",{className:A()("question",{answered:s},{highlighted:a&&!s}),children:[Object(f.jsx)("p",{children:t}),Object(f.jsxs)("footer",{children:[Object(f.jsxs)("div",{className:"user-info",children:[Object(f.jsx)("img",{src:n.avatar,alt:n.name}),Object(f.jsx)("span",{children:n.name})]}),Object(f.jsx)("div",{children:r})]})]})}var N=n.p+"static/media/copy.2f36f99e.svg";n(46);function S(e){return Object(f.jsxs)("button",{className:"room-code",onClick:function(){navigator.clipboard.writeText(e.code)},children:[Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:N,alt:"Copy room code"})}),Object(f.jsxs)("span",{children:["Room #",e.code]})]})}function I(){return Object(r.useContext)(m)}function H(e){var t=I().user,n=Object(r.useState)([]),c=Object(j.a)(n,2),s=c[0],i=c[1],a=Object(r.useState)(""),o=Object(j.a)(a,2),u=o[0],d=o[1];return Object(r.useEffect)((function(){var n=p.ref("rooms/".concat(e));return n.on("value",(function(e){var n,r=e.val(),c=null!==(n=r.questions)&&void 0!==n?n:{},s=Object.entries(c).map((function(e){var n,r,c,s=Object(j.a)(e,2),i=s[0],a=s[1];return Object(w.a)(Object(w.a)({},a),{},{id:i,likeCount:Object.values(null!==(n=a.likes)&&void 0!==n?n:{}).length,likeId:null===(r=Object.entries(null!==(c=a.likes)&&void 0!==c?c:{}).find((function(e){var n=Object(j.a)(e,2);n[0];return n[1].authorId===(null===t||void 0===t?void 0:t.id)})))||void 0===r?void 0:r[0]})}));d(r.title),i(s)})),function(){n.off("value")}}),[e,null===t||void 0===t?void 0:t.id]),{questions:s,title:u}}n(25);function R(){var e=Object(o.f)(),t=Object(o.g)().id,n=H(t),r=n.questions,c=n.title;function s(){return(s=Object(l.a)(d.a.mark((function n(){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:p.ref("rooms/".concat(t)).update({endedAt:new Date}),e.push("/");case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function i(){return(i=Object(l.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want delete this question?")){e.next=3;break}return e.next=3,p.ref("rooms/".concat(t,"/questions/").concat(n)).remove();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function a(){return(a=Object(l.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.ref("rooms/".concat(t,"/questions/").concat(n)).update({isAnswered:!0});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=Object(l.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.ref("rooms/".concat(t,"/questions/").concat(n)).update({isHighLighted:!0});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(f.jsxs)("div",{id:"page-room",children:[Object(f.jsx)("header",{children:Object(f.jsxs)("div",{className:"content",children:[Object(f.jsx)("img",{src:k,alt:"Letmeask"}),Object(f.jsxs)("div",{children:[Object(f.jsx)(S,{code:t}),Object(f.jsx)(C,{onClick:function(){return s.apply(this,arguments)},isOutlined:!0,children:"Delete room"})]})]})}),Object(f.jsxs)("main",{children:[Object(f.jsxs)("div",{className:"room-title",children:[Object(f.jsxs)("h1",{children:["Room ",c]}),r.length>0&&Object(f.jsxs)("span",{children:[r.length," question(s)"]})]}),Object(f.jsx)("div",{className:"question-list",children:r.map((function(e){return Object(f.jsxs)(L,{content:e.content,author:e.author,isAnswered:e.isAnswered,isHighLighted:e.isHighLighted,children:[!e.isAnswered&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("button",{type:"button",onClick:function(){return function(e){return a.apply(this,arguments)}(e.id)},children:Object(f.jsx)("img",{src:v,alt:"Check question as answered"})}),Object(f.jsx)("button",{type:"button",onClick:function(){return function(e){return u.apply(this,arguments)}(e.id)},children:Object(f.jsx)("img",{src:g,alt:"Highlight question"})})]}),Object(f.jsx)("button",{type:"button",onClick:function(){return function(e){return i.apply(this,arguments)}(e.id)},children:Object(f.jsx)("img",{src:O,alt:"Remover question"})})]},e.id)}))})]})]})}var D=n.p+"static/media/google-icon.df15d8e5.svg",E=n.p+"static/media/illustration.ae7276f0.svg";n(27);function G(){var e=Object(o.f)(),t=I(),n=t.user,c=t.signInWithGoogle,s=Object(r.useState)(""),i=Object(j.a)(s,2),a=i[0],u=i[1];function b(){return(b=Object(l.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=3;break}return t.next=3,c();case 3:e.push("/rooms/new");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(){return(h=Object(l.a)(d.a.mark((function t(n){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!==a.trim()){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,p.ref("rooms/".concat(a)).get();case 5:if((r=t.sent).exists()){t.next=9;break}return alert("Room does not exists."),t.abrupt("return");case 9:if(!r.val().endedAt){t.next=12;break}return alert("Room already closed."),t.abrupt("return");case 12:e.push("/rooms/".concat(a));case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(f.jsxs)("div",{id:"page-auth",children:[Object(f.jsxs)("aside",{children:[Object(f.jsx)("img",{src:E,alt:"Symbolic illustration referring questions and answers"}),Object(f.jsx)("strong",{children:"Create Q&A rooms in live"}),Object(f.jsx)("p",{children:"Take out the audience doubts in real time"})]}),Object(f.jsx)("main",{children:Object(f.jsxs)("div",{className:"main-content",children:[Object(f.jsx)("img",{src:k,alt:"Let me ask"}),Object(f.jsxs)("button",{onClick:function(){return b.apply(this,arguments)},className:"create-room",children:[Object(f.jsx)("img",{src:D,alt:"Google Logo"}),"Create a room with Google account"]}),Object(f.jsx)("div",{className:"separator",children:"or get into a room"}),Object(f.jsxs)("form",{onSubmit:function(e){return h.apply(this,arguments)},children:[Object(f.jsx)("input",{onChange:function(e){return u(e.target.value)},value:a,type:"text",placeholder:"Enter with a room code"}),Object(f.jsx)(C,{type:"submit",children:"Enter in the room"})]})]})})]})}function M(){var e=I().user,t=Object(o.f)(),n=Object(r.useState)(""),c=Object(j.a)(n,2),s=c[0],i=c[1];function u(){return(u=Object(l.a)(d.a.mark((function n(r){var c,i;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),s.trim()){n.next=3;break}return n.abrupt("return");case 3:return c=p.ref("rooms"),n.next=6,c.push({title:s,authorId:null===e||void 0===e?void 0:e.id});case 6:i=n.sent,t.push("/rooms/".concat(i.key));case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(f.jsxs)("div",{id:"page-auth",children:[Object(f.jsxs)("aside",{children:[Object(f.jsx)("img",{src:E,alt:"Symbolic illustration referring questions and answers"}),Object(f.jsx)("strong",{children:"Create Q&A rooms in live"}),Object(f.jsx)("p",{children:"Take out the audience doubts in real time"})]}),Object(f.jsx)("main",{children:Object(f.jsxs)("div",{className:"main-content",children:[Object(f.jsx)("img",{src:k,alt:"Let me ask"}),Object(f.jsx)("h2",{children:"Create a new room"}),Object(f.jsxs)("form",{onSubmit:function(e){return u.apply(this,arguments)},children:[Object(f.jsx)("input",{onChange:function(e){return i(e.target.value)},value:s,type:"text",placeholder:" Room name"}),Object(f.jsx)(C,{type:"submit",children:"Create new room"})]}),Object(f.jsxs)("p",{children:["Would you like to access a created room? ",Object(f.jsx)(a.b,{to:"/",children:"Click here"})]})]})})]})}function W(){var e=I().user,t=Object(o.g)(),n=Object(r.useState)(""),c=Object(j.a)(n,2),s=c[0],i=c[1],a=t.id,u=H(a),b=u.questions,h=u.title;function m(){return(m=Object(l.a)(d.a.mark((function t(n){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!==s.trim()){t.next=3;break}return t.abrupt("return");case 3:if(e){t.next=5;break}throw new Error("You must be logged in");case 5:return r={content:s,author:{name:e.name,avatar:e.avatar},isHightLighted:!1,isAnswered:!1},t.next=8,p.ref("rooms/".concat(a,"/questions")).push(r);case 8:i("");case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(){return(x=Object(l.a)(d.a.mark((function t(n,r){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=5;break}return t.next=3,p.ref("rooms/".concat(a,"/questions/").concat(n,"/likes/").concat(r)).remove();case 3:t.next=7;break;case 5:return t.next=7,p.ref("rooms/".concat(a,"/questions/").concat(n,"/likes")).push({authorId:null===e||void 0===e?void 0:e.id});case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(f.jsxs)("div",{id:"page-room",children:[Object(f.jsx)("header",{children:Object(f.jsxs)("div",{className:"content",children:[Object(f.jsx)("img",{src:k,alt:"Letmeask"}),Object(f.jsx)(S,{code:a})]})}),Object(f.jsxs)("main",{children:[Object(f.jsxs)("div",{className:"room-title",children:[Object(f.jsxs)("h1",{children:["Room ",h]}),b.length>0&&Object(f.jsxs)("span",{children:[b.length," question(s)"]})]}),Object(f.jsxs)("form",{onSubmit:function(e){return m.apply(this,arguments)},children:[Object(f.jsx)("textarea",{onChange:function(e){return i(e.target.value)},value:s,placeholder:"What you want to ask?"}),Object(f.jsxs)("div",{className:"form-footer",children:[e?Object(f.jsxs)("div",{className:"user-info",children:[Object(f.jsx)("img",{src:e.avatar,alt:e.name}),Object(f.jsx)("span",{children:e.name})]}):Object(f.jsxs)("span",{children:[Object(f.jsx)("button",{children:"Log in"})," to make a question."]}),Object(f.jsx)(C,{disabled:!e,type:"submit",children:"Send question"})]})]}),Object(f.jsx)("div",{className:"question-list",children:b.map((function(e){return Object(f.jsx)(L,{content:e.content,author:e.author,isAnswered:e.isAnswered,isHighLighted:e.isHighLighted,children:!e.isAnswered&&Object(f.jsxs)("button",{onClick:function(){return function(e,t){return x.apply(this,arguments)}(e.id,e.likeId)},className:"like-button ".concat(e.likeId?"liked":""),type:"button","aria-label":"Mark  as liked",children:[e.likeCount>0&&Object(f.jsx)("span",{children:e.likeCount}),Object(f.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(f.jsx)("path",{d:"M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z",stroke:"#737380",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})},e.id)}))})]})]})}var V=function(){return Object(f.jsx)(a.a,{children:Object(f.jsx)(x,{children:Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{path:"/",exact:!0,component:G}),Object(f.jsx)(o.a,{path:"/rooms/new",component:M}),Object(f.jsx)(o.a,{path:"/rooms/:id",component:W}),Object(f.jsx)(o.a,{path:"/admin/rooms/:id",component:R})]})})})};n(51);i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(V,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.02e3882f.chunk.js.map