(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{19:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(2),u=n(14),r=n.n(u),o=(n(19),n(3)),a=n(4),i=n.n(a),l="https://p3-phonebook-backend.herokuapp.com/api/persons",s=function(){return i.a.get(l)},j=function(e){return i.a.post(l,e)},b=function(e){return i.a.delete("".concat(l,"/").concat(e))},h=n(0),p=function(e){var t=e.filterText,n=e.persons,c=e.handleDelete;return Object(h.jsx)("ul",{children:n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e,t){return Object(h.jsx)(d,{person:e,handleDelete:c},t)}))})},d=function(e){var t=e.person,n=e.handleDelete;return Object(h.jsxs)("li",{children:[t.name," ",t.phonenumber," ",Object(h.jsx)("button",{onClick:function(){return n(t.id)},children:"delete"})]})},f=function(e){var t=e.text;return null===t?null:Object(h.jsx)("div",{className:"changeText",children:t})},x=function(e){var t=e.text;return null===t?null:Object(h.jsx)("div",{className:"errorText",children:t})},O=function(e){return Object(h.jsxs)("div",{children:[e.text," ",Object(h.jsx)("input",{value:e.inputText,onChange:e.onChange})]})},m=function(e){var t=e.inputTypes;return Object(h.jsx)("form",{children:t.map((function(e,t){return Object(h.jsx)(v,{inputInfo:e},t)}))})},v=function(e){var t=e.inputInfo;return Object(h.jsxs)(h.Fragment,{children:[t.inputName,": ",Object(h.jsx)("input",{value:t.inputValue,placeholder:t.placeHolder,onChange:t.onChange}),Object(h.jsx)("br",{})]})},g=function(e){var t=e.buttonInfo;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("button",{type:t.type,onClick:t.onClick,children:t.text})})},C=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],u=t[1],r=Object(c.useState)(""),a=Object(o.a)(r,2),i=a[0],l=a[1],d=Object(c.useState)(""),v=Object(o.a)(d,2),C=v[0],k=v[1],T=Object(c.useState)(""),w=Object(o.a)(T,2),y=w[0],D=w[1],N=Object(c.useState)(null),S=Object(o.a)(N,2),I=S[0],E=S[1],F=Object(c.useState)(null),H=Object(o.a)(F,2),V=H[0],A=H[1];Object(c.useEffect)((function(){s().then((function(e){u(e.data)}))}),[]);var J=function(){s().then((function(e){return u(e.data)}))},L=[{inputName:"name",inputValue:i,placeHolder:"Enter new name",onChange:function(e){return l(e.target.value)}},{inputName:"phone",inputValue:C,placeHolder:"Enter phonenumber",onChange:function(e){return k(e.target.value)}}];return Object(h.jsxs)("div",{className:"phonebook",children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(f,{text:I}),Object(h.jsx)(x,{text:V}),Object(h.jsx)(O,{text:"Filter shown with",inputText:y,onChange:function(e){return D(e.target.value)}}),Object(h.jsx)("h3",{children:"Add a new"}),Object(h.jsx)(m,{inputTypes:L}),Object(h.jsx)(g,{buttonInfo:{type:"submit",text:"add",onClick:function(e){e.preventDefault(),j({name:i,phonenumber:C}).then((function(e){E("".concat(e.data.name," Added successfully")),J(),setTimeout((function(){E(null)}),2e3)})).catch((function(e){A(e.response.data.error),setTimeout((function(){A(null)}),2e3)}))}}}),Object(h.jsx)("h3",{children:"Numbers"}),Object(h.jsx)(p,{filterText:y,persons:n,handleDelete:function(e){var t=n.find((function(t){return t.id===e}));window.confirm("Delete ".concat(t.name," ?"))&&(b(e).then((function(){return J()})),E("Deleted ".concat(t.name)),setTimeout((function(){E(null)}),2e3))}})]})};r.a.render(Object(h.jsx)(C,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.f8738c6f.chunk.js.map