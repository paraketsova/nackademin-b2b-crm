(this["webpackJsonpnackademin-b2b-crm"]=this["webpackJsonpnackademin-b2b-crm"]||[]).push([[0],{31:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(1),a=t.n(c),o=t(22),i=t.n(o),s=(t(31),t(4)),l=t(9),u=t(2),d=t(3),b={mediumSeaGreen:"#1FB163",flame:"#DC542E",earieBlack:"#222222",floralWhite:"#FEFDF4",paleCerulean:"#9FC3DD",greenBlueCrayola:"#3F88C5",carrotOrange:"#ED9B40",lightGrey:"#f8f8f8",blackCoral:"#5E6973"};function j(){var e=Object(u.a)(["\n  span {\n    color: ",";\n  }\n"]);return j=function(){return e},e}var m=d.b.h1(j(),b.carrotOrange);function h(){var e=Object(u.a)(["\n    background-color: ",";\n  "]);return h=function(){return e},e}function f(){var e=Object(u.a)(["\n    background-color: ",";\n    width: auto;\n    height: auto;\n    border-radius: 5px;\n    padding: 5px 10px;\n    margin-right: 1rem;\n  "]);return f=function(){return e},e}function O(){var e=Object(u.a)(["\n  cursor: pointer;\n  border-radius: 10px;\n  padding: 15px 15px;\n  border: none;\n  font-weight: 500;\n  transition: .3s;\n  background-color: ",";\n  font-size: 0.9rem;\n  color: white;\n  text-decoration: none;\n  \n  &:hover, &:focus {\n    color: ",";\n    transform: scale(1.1);\n    outline: none;\n  }\n\n  ","\n\n  ","\n"]);return O=function(){return e},e}var p=d.b.button(O(),b.carrotOrange,b.floralWhite,(function(e){return e.small&&Object(d.a)(f(),b.greenBlueCrayola)}),(function(e){return e.danger&&Object(d.a)(h(),b.flame)}));function x(){var e=Object(s.f)();return Object(r.jsx)(p,{small:!0,onClick:function(){localStorage.removeItem("token"),localStorage.removeItem("email"),localStorage.removeItem("firstName"),localStorage.removeItem("lastName"),e.push("/nackademin-b2b-crm/")},children:"Log Out"})}var g=a.a.createContext({});function v(){var e=Object(u.a)(["\n  display: block;\n  color: ",";\n  padding-right: 3rem;\n\n  p {\n    font-size: 0.7rem;\n  }\n"]);return v=function(){return e},e}var k=d.b.div(v(),b.carrotOrange);function y(){var e=Object(c.useContext)(g);return Object(r.jsxs)(k,{children:["\ud83d\udc64 ",e.firstName," ",e.lastName,Object(r.jsxs)("p",{children:[" ",e.email," "]}),Object(r.jsx)(x,{})]})}function C(){var e=Object(u.a)(["\n  background: ",";\n  color: ",";\n  display: flex;\n  justify-content: space-between;\n  padding: 0.7rem 1.2rem;\n  align-items: center;\n  height: 90px;\n"]);return C=function(){return e},e}var w=d.b.header(C(),b.earieBlack,b.floralWhite);function N(){var e={firstName:localStorage.getItem("firstName"),lastName:localStorage.getItem("lastName"),email:localStorage.getItem("email")};return Object(r.jsx)(g.Provider,{value:e,children:Object(r.jsxs)(w,{children:[Object(r.jsxs)(m,{children:["B2B",Object(r.jsx)("span",{children:"customer"}),"service"]}),Object(r.jsx)(y,{})]})})}function S(){var e=Object(u.a)(["\n  width: 20vw; \n  align-content: center;\n  justify-content: center;\n  align-items: center;\n  padding: 1.2rem;\n"]);return S=function(){return e},e}var T=d.b.section(S()),E=t(6);function B(e){var n=e.id;return Object(r.jsx)(E.b,{to:"/customers/".concat(n,"/edit"),children:Object(r.jsx)(p,{small:!0,children:"Edit Customer"})})}function I(e){var n=e.deleteCustomer;return Object(r.jsx)(p,{small:!0,danger:!0,onClick:n,children:"Delete Customer"})}function z(){var e=Object(u.a)(["\n  table {\n    width: 30rem;\n    margin-bottom: 1.5rem;\n    border-spacing: 0;\n\n    th, td {\n      text-align: left;\n      padding: 0.3rem 0;\n    }\n  }\n"]);return z=function(){return e},e}var P=d.b.div(z());function A(e){var n=e.data,t=e.deleteCustomer;return n?Object(r.jsxs)(P,{children:[Object(r.jsx)("h1",{children:n.name}),Object(r.jsx)("table",{children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Organisatioin Number"}),Object(r.jsx)("td",{children:n.organisationNr})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"VAT Number"}),Object(r.jsx)("td",{children:n.vatNr})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Reference"}),Object(r.jsx)("td",{children:n.reference})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Payment Term"}),Object(r.jsx)("td",{children:n.paymentTerm})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Website"}),Object(r.jsx)("td",{children:Object(r.jsx)("a",{href:n.website,target:"_blank",rel:"noreferrer",children:n.website})})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Email"}),Object(r.jsx)("td",{children:Object(r.jsx)("a",{href:"mailto:".concat(n.email),children:n.email})})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Phone Number"}),Object(r.jsx)("td",{children:n.phoneNumber})]})]})}),Object(r.jsx)(B,{id:n.id,children:"Edit Customer"}),Object(r.jsx)(I,{deleteCustomer:t})]}):Object(r.jsx)("p",{children:"Laddar data..."})}function D(){return Object(r.jsx)(E.b,{to:"/nackademin-b2b-crm/",children:Object(r.jsx)(p,{children:"\u2190 Back to home"})})}function F(){var e=Object(u.a)(["\n  display: flex;\n  padding-bottom: 3rem;\n"]);return F=function(){return e},e}var W=d.b.div(F());function L(e){var n=e.match.params.id,t=Object(c.useState)(null),a=Object(l.a)(t,2),o=a[0],i=a[1],u=Object(s.f)();return Object(c.useEffect)((function(){!function(){var e="https://frebi.willandskill.eu/api/v1/customers/".concat(n,"/"),t=localStorage.getItem("token");fetch(e,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).then((function(e){return i(e)}))}()}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)(N,{}),Object(r.jsxs)(W,{children:[Object(r.jsx)(T,{children:Object(r.jsx)(D,{})}),Object(r.jsx)(A,{data:o,deleteCustomer:function(){if(confirm("Are you sure you want to delete this customer?")){var e="https://frebi.willandskill.eu/api/v1/customers/".concat(n,"/"),t=localStorage.getItem("token");fetch(e,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(){return u.push("/nackademin-b2b-crm/")}))}}})]})]})}var J=t(12),V=t(11);function G(e){if(!e.vatNr)return"Error: VAT Number is empty";var n=e.vatNr.slice(0,2),t=e.vatNr.slice(2);return"SE"!==n||10!==t.length||!0!==/^\d+$/.test(t)?'Error: VAT Number has an incorrect format (must be "SE" with 10 digits)':e.paymentTerm?e.paymentTerm<1?"Error: Payment Term must be a positive integer":null:"Error: Payment Term is empty"}function R(){var e=Object(u.a)(["\n  color: ",";\n  background-color: #fee; \n  padding: 1rem; \n  margin-bottom: 1rem;\n"]);return R=function(){return e},e}var M=d.b.div(R(),b.flame);function U(){var e=Object(u.a)(["\n  display: flex;\n  padding-bottom: 3rem;\n\n  table {\n    width: 40rem;\n    margin-bottom: 1.5rem;\n    border-spacing: 0;\n\n    th, td {\n      text-align: left;\n      padding: 0.3rem 0;\n    }\n  }\n"]);return U=function(){return e},e}var X=d.b.div(U());function Y(){var e=Object(c.useState)({}),n=Object(l.a)(e,2),t=n[0],a=n[1],o=Object(c.useState)(),i=Object(l.a)(o,2),u=i[0],d=i[1],b=Object(s.f)();function j(e){var n=e.target.name,r=e.target.value,c=Object(V.a)(Object(V.a)({},t),{},Object(J.a)({},n,r));a(c),d(null)}function m(e,n,t){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:n}),Object(r.jsx)("td",{children:Object(r.jsx)("input",{type:t||"text",name:e,size:50,onChange:j})})]})}return Object(r.jsxs)("div",{children:[Object(r.jsx)(N,{}),Object(r.jsxs)(X,{children:[Object(r.jsx)(T,{children:Object(r.jsx)(D,{})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Create Customer"}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=G(t);if(n)d(n);else{var r=localStorage.getItem("token");fetch("https://frebi.willandskill.eu/api/v1/customers/",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}}).then((function(e){e.ok?e.json().then((function(e){return b.push("/")})):e.json().then((function(e){return d("Server error: "+e.detail)}))}))}},children:[Object(r.jsx)("table",{children:Object(r.jsxs)("tbody",{children:[m("name","Customer Name"),m("organisationNr","Organisation Number"),m("vatNr","Vat Number"),m("reference","Reference"),m("paymentTerm","Payment Term","number"),m("website","Website","url"),m("email","Customer Email","email"),m("phoneNumber","Phone Number","tel")]})}),u&&Object(r.jsx)(M,{children:u}),Object(r.jsx)(p,{small:!0,type:"submit",children:"Create Customer"})]})]})]})]})}function $(){var e=Object(u.a)(["\n  display: flex;\n  padding-bottom: 3rem;\n\n  table {\n    width: 40rem;\n    margin-bottom: 1.5rem;\n    border-spacing: 0;\n\n    th, td {\n      text-align: left;\n      padding: 0.3rem 0;\n    }\n  }\n"]);return $=function(){return e},e}var _=d.b.div($());function q(e){var n=e.match.params.id,t=Object(c.useState)({}),a=Object(l.a)(t,2),o=a[0],i=a[1],u=Object(c.useState)(),d=Object(l.a)(u,2),b=d[0],j=d[1],m=Object(s.f)();function h(e){var n=e.target.name,t=e.target.value,r=Object(V.a)(Object(V.a)({},o),{},Object(J.a)({},n,t));i(r),j(null)}function f(e,n,t){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:n}),Object(r.jsx)("td",{children:Object(r.jsx)("input",{type:t||"text",name:e,value:o[e]||"",size:50,onChange:h})})]})}return Object(c.useEffect)((function(){!function(){var e="https://frebi.willandskill.eu/api/v1/customers/".concat(n,"/"),t=localStorage.getItem("token");fetch(e,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).then((function(e){return i(e)}))}()}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)(N,{}),Object(r.jsxs)(_,{children:[Object(r.jsx)(T,{children:Object(r.jsx)(D,{})}),o.id?Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Edit Customer"}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=G(o);if(t)j(t);else{var r="https://frebi.willandskill.eu/api/v1/customers/".concat(n,"/"),c=localStorage.getItem("token");fetch(r,{method:"PUT",body:JSON.stringify(o),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c)}}).then((function(e){return e.json()})).then((function(){return m.push("/customers/".concat(n))}))}},children:[Object(r.jsx)("table",{children:Object(r.jsxs)("tbody",{children:[f("name","Customer Name"),f("organisationNr","Organisation Number"),f("vatNr","Vat Number"),f("reference","Reference"),f("paymentTerm","Payment Term","number"),f("website","Website","url"),f("email","Customer Email","email"),f("phoneNumber","Phone Number","tel")]})}),b&&Object(r.jsx)("div",{style:{color:"red",padding:"1rem",backgroundColor:"#fee",marginBottom:"1rem"},children:b}),Object(r.jsx)(p,{small:!0,type:"submit",children:"Update Customer"}),Object(r.jsx)(E.b,{to:"/customers/".concat(n),children:"Cancel"})]})]}):Object(r.jsx)("p",{children:"Laddar data..."})]})]})}function H(){var e=Object(u.a)(["\n  a {\n    text-decoration: none;\n    color: ",";\n    font-size: 1.2rem;\n    padding: 0.5rem;\n    display: block;\n\n    :hover {\n      background-color: ",";\n      color: ",";\n    }\n  }\n"]);return H=function(){return e},e}var K=d.b.div(H(),b.blackCoral,b.lightGrey,b.carrotOrange);function Q(e){var n=e.customerData;return Object(r.jsx)(K,{children:Object(r.jsx)(E.b,{to:"/customers/".concat(n.id),children:n.name})})}function Z(){var e=Object(u.a)(["\n  width: 40vw;    \n  text-decoration: none;\n  align-content: center;\n  justify-content: center;\n\n  h1 {\n    color: ",";\n    margin-top: 1rem;\n    padding: 0.5rem;\n  }\n"]);return Z=function(){return e},e}var ee=d.b.div(Z(),b.earieBlack);function ne(e){var n=e.items;return Object(r.jsxs)(ee,{children:[Object(r.jsx)("h1",{children:"Customer List"}),n.map((function(e,n){return Object(r.jsx)(Q,{customerData:e},e.id)}))]})}function te(){return Object(r.jsx)(E.b,{to:"/customers/create",children:Object(r.jsx)(p,{children:"Create Customer"})})}function re(){var e=Object(u.a)(["\n  display: flex;\n  padding-bottom: 3rem;\n"]);return re=function(){return e},e}var ce=d.b.div(re());function ae(){var e=Object(c.useState)([]),n=Object(l.a)(e,2),t=n[0],a=n[1];return Object(c.useEffect)((function(){!function(){var e="https://frebi.willandskill.eu/api/v1/customers",n=localStorage.getItem("token");fetch(e,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()})).then((function(e){return a(e.results)}))}()}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)(N,{}),Object(r.jsxs)(ce,{children:[Object(r.jsx)(T,{children:Object(r.jsx)(te,{})}),Object(r.jsx)(ne,{items:t})]})]})}function oe(){var e=Object(u.a)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translateY(-50%) translateX(-50%);\n  width: 30rem;\n  border-radius: 3px;\n  background-color: #272E38;\n  line-height: 1.4;\n  font-size: 0.8em;\n  \n  font-family: arial, helvetica, sans-serif;\n  box-sizing: border-box;\n  overflow: hidden;\n  .denied & {\n    animation: shake 0.35s normal forwards ease-in-out;\n  }\n\n  header {\n    background-color: #202731;\n    color: #C5C6C8;\n    display: block;\n    padding: 1.5em;\n    text-align: center;\n    color: ",";\n  }\n\n  div {\n    position: relative;\n    display: block;\n    margin: 2em auto;\n    border-bottom: 1px solid ",";;\n    border-radius: 3px;\n    width: 20rem;\n    padding-left: 20px;\n\n    input {\n      width: 100%;\n      color: ",';\n      font-size: 0.4rem\n      line-height: 2;\n      background-color: transparent;\n      border: none;\n      padding: .6em .5em;\n      outline: 0;\n      &::-webkit-input-placeholder, &::-moz-placeholder, &:-ms-input-placeholder {\n        color: #9EA2AB;\n      }\n    }\n\n    &:before {\n      font-family: FontAwesome;\n      position: absolute;\n      display: inline-block;\n      top: 9px;\n      left: 8px;\n      font-size: 10px;\n      color: #FC7148;\n    }\n    &:nth-child(1):before {\n      content: "\ud83d\udc64";\n    }\n    &:nth-child(2):before {\n      content: "\ud83d\udd12";\n    }\n  }\n\n  button {\n    cursor: pointer;\n    outline: 0;\n    font-size: 1em;\n    font-weight: bold;\n    letter-spacing: 0.1em;\n    background-color: ',";\n    color: ",";\n    border: none;\n    border-radius: 3px;\n    width: 200px;\n    padding: 1.2em 0;\n    margin: 4em auto;\n    display: block;\n    border-top: 2px solid transparent;\n    border-bottom: 2px solid transparent;\n    transition: .3s;\n    vertical-align: middle;\n\n  &:hover, &:focus {\n    background-color: ",";\n    \n    transform: scale(1.1);\n    outline: none;\n  }\n\n\n  \n  \n\n\n  "]);return oe=function(){return e},e}var ie=d.b.div(oe(),b.floralWhite,b.carrotOrange,b.floralWhite,b.carrotOrange,b.floralWhite,b.carrotOrange);function se(){var e=Object(c.useState)({email:"Mariia.Paraketsova@yh.nackademin.se",password:"javascriptoramverk"}),n=Object(l.a)(e,2),t=n[0],a=n[1],o=Object(s.f)();function i(e){var n=e.target.name,r=e.target.value,c=Object(V.a)(Object(V.a)({},t),{},Object(J.a)({},n,r));a(c)}return Object(r.jsx)("div",{children:Object(r.jsxs)(ie,{children:[Object(r.jsx)("header",{children:Object(r.jsxs)(m,{children:["B2B",Object(r.jsx)("span",{children:"customer"}),"service"]})}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e){return fetch("https://frebi.willandskill.eu/api-token-auth/",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){void 0!==e.token&&localStorage.setItem("token",e.token)}))}({email:t.email,password:t.password}).then((function(){return function(){var e="https://frebi.willandskill.eu/api/v1/me/",n=localStorage.getItem("token");return fetch(e,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()})).then((function(e){localStorage.setItem("email",e.email),localStorage.setItem("firstName",e.firstName),localStorage.setItem("lastName",e.lastName)}))}().then((function(){return o.push("/nackademin-b2b-crm/")}))}))},children:[Object(r.jsx)("div",{children:Object(r.jsx)("input",{name:"email",value:t.email,onChange:i})}),Object(r.jsx)("div",{children:Object(r.jsx)("input",{name:"password",value:t.password,onChange:i})}),Object(r.jsx)("button",{type:"submit",children:"LOG IN"})]})]})})}function le(){var e=localStorage.getItem("token");return Object(r.jsx)("div",{children:e?Object(r.jsx)(ae,{}):Object(r.jsx)(se,{})})}var ue=function(){return Object(r.jsxs)(s.c,{children:[Object(r.jsx)(s.a,{exact:!0,path:"/nackademin-b2b-crm/",component:le}),Object(r.jsx)(s.a,{exact:!0,path:"/nackademin-b2b-crm/customers/create",component:Y}),Object(r.jsx)(s.a,{exact:!0,path:"/nackademin-b2b-crm/customers/:id",component:L}),Object(r.jsx)(s.a,{exact:!0,path:"/nackademin-b2b-crm/customers/:id/edit",component:q})]})},de=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,39)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,o=n.getTTFB;t(e),r(e),c(e),a(e),o(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(E.a,{children:Object(r.jsx)(ue,{})})}),document.getElementById("root")),de()}},[[38,1,2]]]);
//# sourceMappingURL=main.0b868d0a.chunk.js.map