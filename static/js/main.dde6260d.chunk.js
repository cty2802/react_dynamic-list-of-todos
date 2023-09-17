(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var a=c(5),s=c.n(a),n=c(2),l=c(1),i=(c(10),c(11),c(4)),o=c.n(i),d=c(0),r=function(e){var t=e.todos,c=e.onClickHandlerOpenModal,a=void 0===c?function(){}:c,s=e.viewCounter,i=Object(l.useState)(void 0),r=Object(n.a)(i,2),j=r[0],u=r[1];return Object(l.useEffect)((function(){j&&u(void 0)}),[s]),Object(d.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(d.jsx)("td",{className:"is-vcentered",children:e.id}),Object(d.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(d.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("td",{className:"is-vcentered is-expanded",children:Object(d.jsx)("p",{className:o()("has-text-success",{"has-text-danger":!e.completed}),children:e.title})}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){a(e),u(e)},children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:o()({"far fa-eye":j!==e},{"far fa-eye-slash":j===e})})})})})]},e.id)}))})]})},j=function(e){var t=e.onChangeQuery,c=void 0===t?function(){}:t,a=e.onChangeSelectOption,s=void 0===a?function(){}:a,i=Object(l.useState)(""),o=Object(n.a)(i,2),r=o[0],j=o[1],u=Object(l.useState)(),b=Object(n.a)(u,2),h=b[0],O=b[1];return Object(d.jsxs)("form",{className:"field has-addons",children:[Object(d.jsx)("p",{className:"control",children:Object(d.jsx)("span",{className:"select",children:Object(d.jsxs)("select",{"data-cy":"statusSelect",id:"select",value:h,onChange:function(e){var t,c;O(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value),s(null===e||void 0===e||null===(c=e.target)||void 0===c?void 0:c.value)},children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"active",children:"Active"}),Object(d.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(d.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(d.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:r,onChange:function(e){c(e.target.value),j(e.target.value)}}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-magnifying-glass"})}),r&&Object(d.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(d.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){c(""),j("")}})})]})]})};function u(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(13);var b=function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})},h=function(e){var t=e.onclickHandlerCloseModal,c=void 0===t?function(){}:t,a=e.selectedTodo,s=Object(l.useState)(),i=Object(n.a)(s,2),o=i[0],r=i[1],j=a.title,h=a.id,O=a.userId,m=a.completed;return Object(l.useEffect)((function(){(function(e){return u("/users/".concat(e))})(O).then(r)}),[]),Object(d.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(d.jsx)("div",{className:"modal-background"}),o?Object(d.jsxs)("div",{className:"modal-card",children:[Object(d.jsxs)("header",{className:"modal-card-head",children:[Object(d.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(h)}),Object(d.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(d.jsxs)("div",{className:"modal-card-body",children:[Object(d.jsx)("p",{className:"block","data-cy":"modal-title",children:j}),Object(d.jsxs)("p",{className:"block","data-cy":"modal-user",children:[m?Object(d.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(d.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(d.jsx)("a",{href:"mailto:".concat(null===o||void 0===o?void 0:o.name),children:null===o||void 0===o?void 0:o.name})]})]})]}):Object(d.jsx)(b,{})]})};var O=function(){var e,t=Object(l.useState)([]),c=Object(n.a)(t,2),a=c[0],s=c[1],i=Object(l.useState)(!1),o=Object(n.a)(i,2),O=o[0],m=o[1],x=Object(l.useState)(""),f=Object(n.a)(x,2),v=f[0],p=f[1],N=Object(l.useState)(null!==(e=a[0])&&void 0!==e?e:{}),y=Object(n.a)(N,2),g=y[0],C=y[1],k=Object(l.useState)(!0),S=Object(n.a)(k,2),w=S[0],T=S[1],E=Object(l.useState)(""),_=Object(n.a)(E,2),H=_[0],L=_[1],M=Object(l.useState)(0),B=Object(n.a)(M,2),I=B[0],A=B[1];Object(l.useEffect)((function(){u("/todos").then((function(e){s(e),T(!1)}))}),[]);var J=function(e,t,c){return t||c?e.filter((function(e){return function(e,t){var c=t.trim().toLowerCase();return e.toLowerCase().includes(c)}(e.title,t)&&function(e,t){return!t||"all"===t||("active"===t?!e.completed:e.completed)}(e,c)})):e}(a,v,H);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h1",{className:"title",children:"Todos:"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(j,{onChangeQuery:function(e){p(e)},onChangeSelectOption:function(e){L(e)}})}),Object(d.jsxs)("div",{className:"block",children:[w&&Object(d.jsx)(b,{}),!w&&Object(d.jsx)(r,{todos:J,onClickHandlerOpenModal:function(e){m(!0),C(e)},viewCounter:I})]})]})})}),!0===O&&Object(d.jsx)(h,{onclickHandlerCloseModal:function(){m(!1),A((function(e){return e+1}))},selectedTodo:g})]})};s.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.dde6260d.chunk.js.map