(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var a,n=c(8),s=c.n(n),r=c(4),l=c(16),o=c(7),i=c(14),d=c(15),u=function(e){return{type:"currentTodo/SET",payload:e}},j=function(){return{type:"currentTodo/REMOVE"}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},h=c(5);!function(e){e.all="all",e.active="active",e.completed="completed"}(a||(a={}));var O={query:"",status:a.all},f=function(e){return{type:"query/ADD",payload:e}},m=function(){return{type:"query/DELETE"}},x=function(e){return{type:"status/SET",payload:e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"query/ADD":return Object(h.a)(Object(h.a)({},e),{},{query:t.payload});case"query/DELETE":return Object(h.a)(Object(h.a)({},e),{},{query:""});case"status/SET":return Object(h.a)(Object(h.a)({},e),{},{status:t.payload});default:return e}},v=function(e){return{type:"todos/ADD",payload:e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/ADD"===t.type?t.payload:e},N=Object(o.combineReducers)({currentTodo:b,filter:p,todos:y}),g=Object(o.createStore)(N,Object(i.composeWithDevTools)(Object(o.applyMiddleware)(d.a))),w=c(9),E=c(3),T=c(6),k=c.n(T),D=c(0),S=(c(25),c(26),r.b,r.c),q=c(1),C=function(){var e=S((function(e){return e.todos})),t=Object(r.b)(),c=S((function(e){return e.currentTodo})),n=S((function(e){return e.filter})),s=n.query,l=n.status,o=Object(D.useState)(e),i=Object(E.a)(o,2),d=i[0],j=i[1];return Object(D.useEffect)((function(){var t=e.filter((function(e){return e.title.toLowerCase().includes(s.toLowerCase())})).filter((function(e){switch(l){case a.active:return!e.completed;case a.completed:return e.completed;default:return e}}));j(t)}),[l,s]),Object(q.jsx)(q.Fragment,{children:0===d.length&&(l.length>0||s!==a.all)?Object(q.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}):Object(q.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(q.jsx)("thead",{children:Object(q.jsxs)("tr",{children:[Object(q.jsx)("th",{children:"#"}),Object(q.jsx)("th",{children:Object(q.jsx)("span",{className:"icon",children:Object(q.jsx)("i",{className:"fas fa-check"})})}),Object(q.jsx)("th",{children:"Title"}),Object(q.jsx)("th",{children:" "})]})}),Object(q.jsx)("tbody",{children:d.map((function(e){var a=e.id,n=e.title,s=e.completed;return Object(q.jsxs)("tr",{"data-cy":"todo",className:c&&a===c.id?"has-background-info-light":"",children:[Object(q.jsx)("td",{className:"is-vcentered",children:a}),s?Object(q.jsx)("td",{className:"is-vcentered",children:Object(q.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(q.jsx)("i",{className:"fas fa-check"})})}):Object(q.jsx)("td",{className:"is-vcentered"}),Object(q.jsx)("td",{className:"is-vcentered is-expanded",children:Object(q.jsx)("p",{className:s?"has-text-success":"has-text-danger",children:n})}),Object(q.jsx)("td",{className:"has-text-right is-vcentered",children:Object(q.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(e){t(u(e))}(e)},children:Object(q.jsx)("span",{className:"icon",children:Object(q.jsx)("i",{className:c&&a!==c.id||!c?"far fa-eye":"far fa-eye-slash"})})})})]},a)}))})]})})},A=function(){var e=Object(r.b)(),t=S((function(e){return e.filter}));return Object(q.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(q.jsx)("p",{className:"control",children:Object(q.jsx)("span",{className:"select",children:Object(q.jsxs)("select",{"data-cy":"statusSelect",value:t.status,onChange:function(t){var c=t.target.value;e(x(c))},children:[Object(q.jsx)("option",{value:a.all,children:"All"}),Object(q.jsx)("option",{value:a.active,children:"Active"}),Object(q.jsx)("option",{value:a.completed,children:"Completed"})]})})}),Object(q.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(q.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t.query,onChange:function(t){var c=t.target.value;e(f(c))}}),Object(q.jsx)("span",{className:"icon is-left",children:Object(q.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(q.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t.query.length>0&&Object(q.jsx)("button",{"aria-label":"Mute volume","data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){e(m())}})})]})]})};function L(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var M=function(e){return L("/users/".concat(e))},_=(c(28),function(){return Object(q.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(q.jsx)("div",{className:"Loader__content"})})}),B=function(){var e=Object(r.b)(),t=S((function(e){return e.currentTodo})),c=Object(D.useState)(!1),a=Object(E.a)(c,2),n=a[0],s=a[1],l=Object(D.useState)(null),o=Object(E.a)(l,2),i=o[0],d=o[1],u=t,b=u.id,h=u.title,O=u.completed,f=u.userId,m=function(){var e=Object(w.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,M(f);case 4:t=e.sent,d(t),s(!1),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),new Error("error");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();Object(D.useEffect)((function(){m()}),[]);return Object(q.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(q.jsx)("div",{className:"modal-background"}),n?Object(q.jsx)(_,{}):Object(q.jsxs)("div",{className:"modal-card",children:[Object(q.jsxs)("header",{className:"modal-card-head",children:[Object(q.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(b)}),Object(q.jsx)("button",{type:"button","aria-label":"Mute volume",className:"delete","data-cy":"modal-close",onClick:function(){e(j())}})]}),Object(q.jsxs)("div",{className:"modal-card-body",children:[Object(q.jsx)("p",{className:"block","data-cy":"modal-title",children:h}),Object(q.jsxs)("p",{className:"block","data-cy":"modal-user",children:[O?Object(q.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(q.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",i&&Object(q.jsx)("a",{href:"mailto:".concat(null===i||void 0===i?void 0:i.email),children:null===i||void 0===i?void 0:i.name})]})]})]})]})},F=function(){var e=Object(D.useState)(!1),t=Object(E.a)(e,2),c=t[0],a=t[1],n=Object(r.b)(),s=S((function(e){return e.todos})),l=S((function(e){return e.currentTodo})),o=function(){var e=Object(w.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.prev=1,e.next=4,L("/todos");case 4:t=e.sent,n(v(t)),a(!1),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),new Error("error");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return Object(D.useEffect)((function(){o()}),[]),Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("div",{className:"section",children:Object(q.jsx)("div",{className:"container",children:Object(q.jsxs)("div",{className:"box",children:[c&&Object(q.jsx)(_,{}),s.length>0&&Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("h1",{className:"title",children:"Todos:"}),Object(q.jsx)("div",{className:"block",children:Object(q.jsx)(A,{})}),Object(q.jsx)("div",{className:"block",children:Object(q.jsx)(C,{})})]})]})})}),l&&Object(q.jsx)(B,{})]})},I=function(){return Object(q.jsx)(r.a,{store:g,children:Object(q.jsx)(l.a,{children:Object(q.jsx)(F,{})})})};s.a.render(Object(q.jsx)(I,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.78295ab4.chunk.js.map