(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(5),s=a.n(r),i=(a(12),a(4)),u=a.n(i),j=a(6),l=a(2),o=a(0),b=function(e){var t=e.setIsError;return Object(o.jsxs)("div",{className:"error",children:["Unable to get Gifs, please try again later",Object(o.jsx)("button",{type:"button",className:"close","aria-label":"Close",onClick:function(){t(!1)},children:Object(o.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})};var h=function(e){var t=e.gif;return Object(o.jsx)("div",{className:"item",children:Object(o.jsx)("img",{src:t.images.fixed_height.url,alt:""})})},f=a(7);var d=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"loader",children:Object(o.jsx)(f.a,{size:100})})})};var p=function(e){var t=e.pageNumber,a=e.currentPage,c=e.pageIndex,n=e.setCurrentPage,r=e.fetchGifs,s=e.offsetArr,i="page-item ";return t===a&&(i+="active"),Object(o.jsx)("li",{className:i,onClick:function(){n(t),r(s[c])},children:Object(o.jsx)("a",{href:"#",className:"page-link",children:t})})};var O=function(e){var t=e.handleSubmit,a=e.value,c=e.handleChange;return Object(o.jsxs)("form",{onSubmit:t,children:[Object(o.jsx)("input",{type:"text",value:a,onChange:c,placeholder:"Search gifs",required:!0,pattern:"\\S+.*"}),Object(o.jsx)("button",{children:"Search"})]})};var x=function(){for(var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)("forest"),s=Object(l.a)(r,2),i=s[0],f=s[1],x=Object(c.useState)(!1),v=Object(l.a)(x,2),g=v[0],m=v[1],S=Object(c.useState)(!1),N=Object(l.a)(S,2),k=(N[0],N[1]),y=Object(c.useState)(1),C=Object(l.a)(y,2),w=C[0],G=C[1],A=Object(c.useState)(10),E=Object(l.a)(A,2),I=E[0],P=(E[1],Object(c.useState)(0)),U=Object(l.a)(P,2),M=U[0],q=U[1],B=[],F=[0],J=1;J<=Math.ceil(M/I);J++)B.push(J),F.push(I*J);var R=function(){var e=Object(j.a)(u.a.mark((function e(t){var a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),k(!1),e.prev=2,e.next=5,fetch("https://api.giphy.com/v1/gifs/search?api_key=tAEFUgagRjRNkU24orQdFB8EHMcNTUSe&limit=".concat(I,"&offset=").concat(t,"&q=").concat(i));case 5:if(!(a=e.sent).ok){e.next=15;break}return console.log({offsetNumber:t}),e.next=10,a.json();case 10:c=e.sent,n(c.data),q(100),e.next=16;break;case 15:throw new b(a.status);case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(2),k(!0),console.log(e.t0);case 22:m(!1);case 23:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{className:"header",children:"Gif Generator v2"}),Object(o.jsx)(O,{handleSubmit:function(e){e.preventDefault(),R(0)},value:i,handleChange:function(e){f(e.target.value)}}),Object(o.jsx)("nav",{children:Object(o.jsx)("ul",{children:B.map((function(e,t){return Object(o.jsx)(p,{pageNumber:e,currentPage:w,pageIndex:t,setCurrentPage:G,fetchGifs:R,offsetArr:F},t)}))})}),g&&Object(o.jsx)(d,{}),Object(o.jsx)("div",{className:"results",children:a.map((function(e){return Object(o.jsx)(h,{gif:e},e.id)}))})]})};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.411d4dab.chunk.js.map