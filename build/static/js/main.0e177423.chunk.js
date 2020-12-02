(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},32:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(2),r=c.n(n),j=(c(23),c(11)),s=c.n(j),i=(c(27),c(7)),o=(c(28),c(48)),l=c(49),h=c(50),b=c(51),d=c(44),u=c(47),O=c(42),x=c(43),p="";switch(window.location.hostname){case"localhost":p="http://localhost:5432";break;case"edk-character-creator-client.herokuapp.com":p="https://edk-character-creator.herokuapp.com"}var m=p,f=function(e){return Object(a.jsxs)("div",{className:"tableContainer",children:[Object(a.jsx)("h3",{children:"Characters"}),Object(a.jsx)("hr",{}),Object(a.jsx)("div",{className:"characters",children:Object(a.jsxs)(x.a,{striped:!0,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"ID"}),Object(a.jsx)("th",{children:"Project Name"}),Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("th",{children:"Age"}),Object(a.jsx)("th",{children:"Race"}),Object(a.jsx)("th",{children:"Gender"}),Object(a.jsx)("th",{children:"Description"}),Object(a.jsx)("th",{children:"Background"}),Object(a.jsx)("th",{children:"Image"})]})}),Object(a.jsx)("tbody",{children:e.characters.map((function(t,c){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"row",children:t.id}),Object(a.jsx)("td",{children:t.project_name}),Object(a.jsx)("td",{children:t.name}),Object(a.jsx)("td",{children:t.age}),Object(a.jsx)("td",{children:t.race}),Object(a.jsx)("td",{children:t.gender}),Object(a.jsx)("td",{children:t.character_description}),Object(a.jsx)("td",{children:t.background}),Object(a.jsx)("td",{children:void(null!=t.image&&t.image)}),Object(a.jsxs)("td",{children:[Object(a.jsx)(O.a,{className:"editBtn",onClick:function(){e.editUpdateCharacter(t),e.updateOn()},children:"Edit"}),Object(a.jsx)(O.a,{className:"deleteBtn",onClick:function(){!function(t){fetch("".concat(m,"/character/").concat(t.id),{method:"DELETE",headers:new Headers({"Content-Type":"appliction/json",Authorization:e.token})}).then((function(){return e.fetchCharacters()}))}(t)},children:"Delete"})]})]},c)}))})]})})]})},g=c(14),v=c.n(g),C=c(19),k=c(45),S=c(46),y=function(e){var t=Object(n.useState)(""),c=Object(i.a)(t,2),r=c[0],j=c[1],s=Object(n.useState)(""),o=Object(i.a)(s,2),l=o[0],h=o[1],b=Object(n.useState)(),x=Object(i.a)(b,2),p=x[0],f=x[1],g=Object(n.useState)(""),y=Object(i.a)(g,2),N=y[0],T=y[1],w=Object(n.useState)(""),F=Object(i.a)(w,2),E=F[0],H=F[1],D=Object(n.useState)(""),U=Object(i.a)(D,2),_=U[0],P=U[1],B=Object(n.useState)(""),I=Object(i.a)(B,2),L=I[0],A=I[1],R=Object(n.useState)({preview:"",raw:""}),J=Object(i.a)(R,2),z=J[0],G=J[1],M=function(t){t.preventDefault(),fetch("".concat(m,"/character/create"),{method:"POST",body:JSON.stringify({character:{project_name:r,name:l,age:p,race:N,gender:E,character_description:_,background:L,image:z}}),headers:new Headers({"Content-Type":"application/json",Authorization:e.token})}).then((function(e){return e.json()})).then((function(t){console.log(t),j(""),h(""),f(""),T(""),H(""),P(""),A(""),e.fetchCharacters()}))},W=function(){var e=Object(C.a)(v.a.mark((function e(t){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(c=new FormData).append("image",z.raw),e.next=5,fetch("".concat(m,"/character/create"),{method:"POST",headers:{"Content-Type":"multipart/form-data"},body:c});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"createContainer",children:[Object(a.jsx)("h3",{children:"Create a Character!"}),Object(a.jsxs)(d.a,{onSubmit:M,children:[Object(a.jsxs)(k.a,{children:[Object(a.jsx)(S.a,{htmlFor:"project_name",children:"Project Name:"}),Object(a.jsx)("br",{}),Object(a.jsx)(u.a,{name:"project_name",type:"text",value:r,onChange:function(e){return j(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)(S.a,{htmlFor:"name",children:"Name:"}),Object(a.jsx)("br",{}),Object(a.jsx)(u.a,{type:"text",name:"name",value:l,onChange:function(e){return h(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)(S.a,{htmlFor:"age",children:"Age:"}),Object(a.jsx)("br",{}),Object(a.jsx)(u.a,{type:"text",name:"age",value:p,onChange:function(e){return f(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)(S.a,{htmlFor:"race",children:"Race:"}),Object(a.jsx)("br",{}),Object(a.jsxs)(u.a,{type:"select",name:"race",value:N,onChange:function(e){return T(e.target.value.toString())},children:[Object(a.jsx)("option",{value:"null",children:"Please pick a Race"}),Object(a.jsx)("option",{value:"Human",children:"Human"}),Object(a.jsx)("option",{value:"High Elf",children:"High Elf"}),Object(a.jsx)("option",{value:"Dark Elf",children:"Dark Elf"}),Object(a.jsx)("option",{value:"Wood Elf",children:"Wood Elf"}),Object(a.jsx)("option",{value:"Dwarf",children:"Dwarf"}),Object(a.jsx)("option",{value:"Tiefling",children:"Tiefling"}),Object(a.jsx)("option",{value:"Half Orc",children:"Half Orc"}),Object(a.jsx)("option",{value:"Hobbit",children:"Hobbit"})]})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)(S.a,{htmlFor:"gender",children:"Gender:"}),Object(a.jsx)("br",{}),Object(a.jsxs)(u.a,{type:"select",name:"gender",value:E,onChange:function(e){return H(e.target.value.toString())},children:[Object(a.jsx)("option",{value:"null",children:"Please pick a Gender"}),Object(a.jsx)("option",{value:"Male",children:"Male"}),Object(a.jsx)("option",{value:"Female",children:"Female"}),Object(a.jsx)("option",{value:"Nonbinary",children:"Nonbinary"}),Object(a.jsx)("option",{value:"Other",children:"Other"})]})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)(S.a,{htmlFor:"character_description",children:"Character Description:"}),Object(a.jsx)("br",{}),Object(a.jsx)(u.a,{type:"textarea",name:"character_description",value:_,onChange:function(e){return P(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)(S.a,{htmlFor:"background",children:"Character Background:"}),Object(a.jsx)("br",{}),Object(a.jsx)(u.a,{type:"textarea",name:"background",value:L,onChange:function(e){return A(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsx)(O.a,{type:"submit",onSubmit:M,children:"Create"}),Object(a.jsx)("label",{htmlFor:"upload-button",children:z.preview?Object(a.jsx)("img",{src:z.preview,alt:"dummy",width:"300",height:"300"}):Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("span",{className:"fa-stack fa-2x mt-3 mb-2",children:[Object(a.jsx)("i",{className:"fas fa-circle fa-stack-2x"}),Object(a.jsx)("i",{className:"fas fa-store fa-stack-1x fa-inverse"})]})})}),Object(a.jsx)("input",{type:"file",id:"upload-button",style:{display:"none"},onChange:function(e){e.target.files.length&&G({preview:URL.createObjectURL(e.target.files[0]),raw:e.target.files[0]})}}),Object(a.jsx)(O.a,{onClick:W,children:"Upload Image"})]})]})},N=function(e){return Object(a.jsx)("div",{className:"parent",children:Object(a.jsxs)(o.a,{light:!0,expand:"md",children:[Object(a.jsxs)(l.a,{className:"mr-auto",children:[Object(a.jsx)(h.a,{children:Object(a.jsx)(b.a,{className:"blue",href:"/",children:"EPIC  CHARACTER CREATOR"})}),Object(a.jsx)(h.a,{children:Object(a.jsx)(b.a,{className:"invite",to:"/invite",children:"Invite Friends"})})]}),Object(a.jsx)("div",{className:"search",children:Object(a.jsxs)(d.a,{inline:!0,children:[Object(a.jsx)(u.a,{type:"text",placeholder:"Search Character",className:"mr-sm-2"}),Object(a.jsx)(O.a,{className:"infoBtn",outline:!0,color:"info",children:"Search "})]})}),Object(a.jsx)("br",{}),Object(a.jsx)(O.a,{className:"logoutBtn",size:"lg",onClick:e.clickLogout,children:"Logout"})]})})},T=function(e){var t=Object(n.useState)(""),c=Object(i.a)(t,2),r=c[0],j=c[1],s=Object(n.useState)(""),o=Object(i.a)(s,2),l=o[0],h=o[1],b=Object(n.useState)(""),x=Object(i.a)(b,2),p=x[0],f=x[1],g=Object(n.useState)(""),v=Object(i.a)(g,2),C=v[0],y=v[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Sign Up"}),Object(a.jsxs)(d.a,{onSubmit:function(t){t.preventDefault(),fetch("".concat(m,"/user/create"),{method:"POST",body:JSON.stringify({user:{firstName:p,lastName:C,username:r,password:l}}),headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(t){e.updateToken(t.sessionToken)}))},children:[Object(a.jsxs)(k.a,{children:[Object(a.jsx)(S.a,{htmlFor:"firstName",children:"First Name"}),Object(a.jsx)(u.a,{onChange:function(e){return f(e.target.value)},name:"firstName",value:p})]}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)(S.a,{htmlFor:"lastName",children:"Last Name"}),Object(a.jsx)(u.a,{onChange:function(e){return y(e.target.value)},name:"lastName",value:C})]}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)(S.a,{htmlFor:"username",children:"Username"}),Object(a.jsx)(u.a,{onChange:function(e){return j(e.target.value)},name:"username",value:r})]}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)(S.a,{htmlFor:"password",children:"Password"}),Object(a.jsx)(u.a,{onChange:function(e){return h(e.target.value)},type:"password",name:"password",value:l})]}),Object(a.jsx)(O.a,{className:"signupBtn",type:"submit",children:"Signup"})]})]})},w=function(e){var t=Object(n.useState)(""),c=Object(i.a)(t,2),r=c[0],j=c[1],s=Object(n.useState)(""),o=Object(i.a)(s,2),l=o[0],h=o[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Login"}),Object(a.jsxs)(d.a,{onSubmit:function(t){t.preventDefault(),fetch("".concat(m,"/user/login"),{method:"POST",body:JSON.stringify({user:{username:r,password:l}}),headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(t){e.updateToken(t.sessionToken)}))},children:[Object(a.jsxs)(k.a,{children:[Object(a.jsx)(S.a,{htmlFor:"username",children:"Username"}),Object(a.jsx)(u.a,{onChange:function(e){return j(e.target.value)},name:"username",value:r})]}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)(S.a,{htmlFor:"password",children:"Password"}),Object(a.jsx)(u.a,{onChange:function(e){return h(e.target.value)},type:"password",name:"password",value:l})]}),Object(a.jsx)(O.a,{className:"loginBtn",type:"submit",children:"Login"})]})]})},F=c(52),E=c(53),H=c(54),D=(c(32),function(e){return console.log(e),Object(a.jsx)(F.a,{className:"auth-container",children:Object(a.jsxs)(E.a,{children:[Object(a.jsx)(H.a,{md:"5",className:"signup-col",children:Object(a.jsx)(T,{updateToken:e.updateToken})}),Object(a.jsx)(H.a,{md:"1"}),Object(a.jsx)(H.a,{md:"5",className:"login-col",children:Object(a.jsx)(w,{updateToken:e.updateToken})})]})})}),U=c(57),_=c(55),P=c(56),B=function(e){var t=Object(n.useState)(e.characterToUpdate.project_name),c=Object(i.a)(t,2),r=c[0],j=c[1],s=Object(n.useState)(e.characterToUpdate.name),o=Object(i.a)(s,2),l=o[0],h=o[1],b=Object(n.useState)(e.characterToUpdate.age),x=Object(i.a)(b,2),p=x[0],f=x[1],g=Object(n.useState)(e.characterToUpdate.race),v=Object(i.a)(g,2),C=v[0],y=v[1],N=Object(n.useState)(e.characterToUpdate.gender),T=Object(i.a)(N,2),w=T[0],F=T[1],E=Object(n.useState)(e.characterToUpdate.character_description),H=Object(i.a)(E,2),D=H[0],B=H[1],I=Object(n.useState)(e.characterToUpdate.background),L=Object(i.a)(I,2),A=L[0],R=L[1];return Object(a.jsx)("div",{children:Object(a.jsxs)(U.a,{isOpen:!0,children:[Object(a.jsx)(_.a,{children:"Edit Your Character"}),Object(a.jsx)(P.a,{children:Object(a.jsxs)(d.a,{onSubmit:function(t,c){t.preventDefault(),fetch("".concat(m,"/character/").concat(e.characterToUpdate.id),{method:"PUT",body:JSON.stringify({character:{project_name:r,name:l,age:p,race:C,gender:w,character_description:D,background:A}}),headers:new Headers({"Content-Type":"application/json",Authorization:e.token})}).then((function(t){e.fetchCharacters(),e.updateOff()}))},children:[Object(a.jsxs)(k.a,{children:[Object(a.jsx)(S.a,{htmlFor:"project_name",children:"Edit Project Name"}),Object(a.jsx)(u.a,{name:"project_name",value:r,onChange:function(e){return j(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)(S.a,{htmlFor:"name",children:"Edit Name:"}),Object(a.jsx)(u.a,{type:"text",name:"name",value:l,onChange:function(e){return h(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)(S.a,{htmlFor:"age",children:"Edit Age:"}),Object(a.jsx)(u.a,{type:"text",name:"age",value:p,onChange:function(e){return f(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)(S.a,{htmlFor:"race",children:"Edit Race:"}),Object(a.jsxs)(u.a,{type:"select",name:"race",value:C,onChange:function(e){return y(e.target.value)},children:[Object(a.jsx)("option",{value:"Human",children:"Human"}),Object(a.jsx)("option",{value:"HighElf",children:"High Elf"}),Object(a.jsx)("option",{value:"DarkElf",children:"Dark Elf"}),Object(a.jsx)("option",{value:"WoodElf",children:"Wood Elf"}),Object(a.jsx)("option",{value:"Dwarf",children:"Dwarf"}),Object(a.jsx)("option",{value:"Tiefling",children:"Tiefling"}),Object(a.jsx)("option",{value:"HalfOrc",children:"Half Orc"}),Object(a.jsx)("option",{value:"Hobbit",children:"Hobbit"})]})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)(S.a,{htmlFor:"gender",children:"Edit Gender:"}),Object(a.jsxs)(u.a,{type:"select",name:"gender",value:w,onChange:function(e){return F(e.target.value)},children:[Object(a.jsx)("option",{value:"Male",children:"Male"}),Object(a.jsx)("option",{value:"Female",children:"Female"}),Object(a.jsx)("option",{value:"Nonbinary",children:"Nonbinary"}),Object(a.jsx)("option",{value:"Other",children:"Other"})]})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)(S.a,{htmlFor:"character_description",children:"Edit Character Description:"}),Object(a.jsx)(u.a,{type:"textarea",name:"character_description",value:D,onChange:function(e){return B(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)(S.a,{htmlFor:"background",children:"Edit Character Background:"}),Object(a.jsx)(u.a,{type:"textarea",name:"background",value:A,onChange:function(e){return R(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsx)(O.a,{type:"submit",children:"Submit Edited Character"})]})})]})})},I=function(e){var t=Object(n.useState)([]),c=Object(i.a)(t,2),r=c[0],j=c[1],s=Object(n.useState)(!1),o=Object(i.a)(s,2),l=o[0],h=o[1],b=Object(n.useState)({}),d=Object(i.a)(b,2),u=d[0],O=d[1],x=function(){fetch("".concat(m,"/character"),{method:"GET",headers:new Headers({"Content-Type":"application/json",Authorization:e.token})}).then((function(e){return e.json()})).then((function(e){j(e)}))};return Object(n.useEffect)((function(){x()}),[]),Object(a.jsx)("div",{className:"indexContainer",children:Object(a.jsxs)(F.a,{children:[Object(a.jsx)(E.a,{children:Object(a.jsx)(f,{characters:r,editUpdateCharacter:function(e){O(e),console.log(e)},updateOn:function(){h(!0)},fetchCharacters:x,token:e.token})}),Object(a.jsx)(E.a,{children:Object(a.jsx)(y,{fetchCharacters:x,token:e.token})}),l?Object(a.jsx)(B,{characterToUpdate:u,updateOff:function(){h(!1)},token:e.token,fetchCharacters:x}):Object(a.jsx)(a.Fragment,{})]})})};c(40);var L=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],r=t[1];Object(n.useEffect)((function(){localStorage.getItem("token")&&r(localStorage.getItem("token"))}),[]);var j=function(e){localStorage.setItem("token",e),r(e),console.log(c)};return Object(a.jsxs)("div",{children:[Object(a.jsx)(N,{clickLogout:function(){localStorage.clear(),r("")},sessionToken:c}),c===localStorage.getItem("token")?Object(a.jsx)(I,{token:c}):Object(a.jsx)(D,{updateToken:j})]})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,58)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,j=t.getTTFB;c(e),a(e),n(e),r(e),j(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)("div",{className:"reactOverride",children:Object(a.jsx)(L,{})})}),document.getElementById("root")),A()}},[[41,1,2]]]);
//# sourceMappingURL=main.0e177423.chunk.js.map