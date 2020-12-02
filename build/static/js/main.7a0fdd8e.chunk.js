(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(2),r=c.n(n),j=(c(24),c(12)),s=c.n(j),i=(c(28),c(7)),o=(c(29),c(45)),l=c(48),b=c(43),h=c(49),d=c(50),u=c(51),O=c(52),x=c(53),p=c(54),m=c(44),f="";switch(window.location.hostname){case"localhost":f="http://localhost:5432";break;case"edk-character-creator-client.herokuapp.com/":f="https://edk-character-creator.herokuapp.com"}var g=f,v=function(e){return Object(a.jsxs)("div",{className:"tableContainer",children:[Object(a.jsx)("h3",{children:"Characters"}),Object(a.jsx)("hr",{}),Object(a.jsx)("div",{className:"characters",children:Object(a.jsxs)(m.a,{striped:!0,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"ID"}),Object(a.jsx)("th",{children:"Project Name"}),Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("th",{children:"Age"}),Object(a.jsx)("th",{children:"Race"}),Object(a.jsx)("th",{children:"Gender"}),Object(a.jsx)("th",{children:"Description"}),Object(a.jsx)("th",{children:"Background"}),Object(a.jsx)("th",{children:"Image"})]})}),Object(a.jsx)("tbody",{children:void(e.characters&&e.characters.map((function(t,c){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"row",children:t.id}),Object(a.jsx)("td",{children:t.project_name}),Object(a.jsx)("td",{children:t.name}),Object(a.jsx)("td",{children:t.age}),Object(a.jsx)("td",{children:t.race}),Object(a.jsx)("td",{children:t.gender}),Object(a.jsx)("td",{children:t.character_description}),Object(a.jsx)("td",{children:t.background}),Object(a.jsx)("td",{children:void(null!=t.image&&t.image)}),Object(a.jsxs)("td",{children:[Object(a.jsx)(b.a,{color:"warning",onClick:function(){e.editUpdateCharacter(t),e.updateOn()},children:"Edit"}),Object(a.jsx)(b.a,{color:"danger",onClick:function(){!function(t){fetch("".concat(g,"/character").concat(t.id),{method:"DELETE",headers:new Headers({"Content-Type":"appliction/json",Authorization:e.token})}).then((function(){return e.fetchCharacter()}))}(t)},children:"Delete"})]})]},c)})))})]})})]})},k=c(15),C=c.n(k),S=c(20),y=c(46),T=c(47),N=function(e){var t=Object(n.useState)(""),c=Object(i.a)(t,2),r=c[0],j=c[1],s=Object(n.useState)(""),h=Object(i.a)(s,2),d=h[0],u=h[1],O=Object(n.useState)(),x=Object(i.a)(O,2),p=x[0],m=x[1],f=Object(n.useState)(""),v=Object(i.a)(f,2),k=v[0],N=v[1],w=Object(n.useState)(""),F=Object(i.a)(w,2),E=F[0],H=F[1],D=Object(n.useState)(""),U=Object(i.a)(D,2),_=U[0],P=U[1],I=Object(n.useState)(""),L=Object(i.a)(I,2),A=L[0],R=L[1],B=Object(n.useState)({preview:"",raw:""}),J=Object(i.a)(B,2),z=J[0],M=J[1],G=function(t){t.preventDefault(),fetch("".concat(g,"/character/create"),{method:"POST",body:JSON.stringify({character:{project_name:r,name:d,age:p,race:k,gender:E,character_description:_,background:A,image:z}}),headers:new Headers({"Content-Type":"application/json",Authorization:e.token})}).then((function(e){return e.json()})).then((function(t){console.log(t),j(""),u(""),m(),N(""),H(""),P(""),R(""),e.fetchCharacters()}))},W=function(){var e=Object(S.a)(C.a.mark((function e(t){var c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(c=new FormData).append("image",z.raw),e.next=5,fetch("https://the-epic-character-creator.herokuapp.com/character/",{method:"POST",headers:{"Content-Type":"multipart/form-data"},body:c});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"createContainer",children:[Object(a.jsx)("h3",{children:"Create a Character!"}),Object(a.jsxs)(o.a,{onSubmit:G,children:[Object(a.jsxs)(y.a,{children:[Object(a.jsx)(T.a,{htmlFor:"project_name",children:"Project Name:"}),Object(a.jsx)("br",{}),Object(a.jsx)(l.a,{name:"project_name",type:"text",value:r,onChange:function(e){return j(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(y.a,{children:[Object(a.jsx)(T.a,{htmlFor:"name",children:"Name:"}),Object(a.jsx)("br",{}),Object(a.jsx)(l.a,{type:"text",name:"name",value:d,onChange:function(e){return u(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(y.a,{children:[Object(a.jsx)(T.a,{htmlFor:"age",children:"Age:"}),Object(a.jsx)("br",{}),Object(a.jsx)(l.a,{type:"text",name:"age",value:p,onChange:function(e){return m(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(y.a,{children:[Object(a.jsx)(T.a,{htmlFor:"race",children:"Race:"}),Object(a.jsx)("br",{}),Object(a.jsxs)(l.a,{type:"select",name:"race",value:k,onChange:function(e){return N(e.target.value)},children:[Object(a.jsx)("option",{value:"Human",children:"Human"}),Object(a.jsx)("option",{value:"HighElf",children:"High Elf"}),Object(a.jsx)("option",{value:"DarkElf",children:"Dark Elf"}),Object(a.jsx)("option",{value:"WoodElf",children:"Wood Elf"}),Object(a.jsx)("option",{value:"Dwarf",children:"Dwarf"}),Object(a.jsx)("option",{value:"Tiefling",children:"Tiefling"}),Object(a.jsx)("option",{value:"HalfOrc",children:"Half Orc"}),Object(a.jsx)("option",{value:"Hobbit",children:"Hobbit"})]})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(y.a,{children:[Object(a.jsx)(T.a,{htmlFor:"gender",children:"Gender:"}),Object(a.jsx)("br",{}),Object(a.jsxs)(l.a,{type:"select",name:"gender",value:E,onChange:function(e){return H(e.target.value)},children:[Object(a.jsx)("option",{value:"Male",children:"Male"}),Object(a.jsx)("option",{value:"Female",children:"Female"}),Object(a.jsx)("option",{value:"Nonbinary",children:"Nonbinary"}),Object(a.jsx)("option",{value:"Other",children:"Other"})]})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(y.a,{children:[Object(a.jsx)(T.a,{htmlFor:"character_description",children:"Character Description:"}),Object(a.jsx)("br",{}),Object(a.jsx)(l.a,{type:"textarea",name:"character_description",value:_,onChange:function(e){return P(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(y.a,{children:[Object(a.jsx)(T.a,{htmlFor:"background",children:"Character Background:"}),Object(a.jsx)("br",{}),Object(a.jsx)(l.a,{type:"textarea",name:"background",value:A,onChange:function(e){return R(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsx)(b.a,{type:"submit",onSubmit:G,children:"Create"}),Object(a.jsx)("label",{htmlFor:"upload-button",children:z.preview?Object(a.jsx)("img",{src:z.preview,alt:"dummy",width:"300",height:"300"}):Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("span",{className:"fa-stack fa-2x mt-3 mb-2",children:[Object(a.jsx)("i",{className:"fas fa-circle fa-stack-2x"}),Object(a.jsx)("i",{className:"fas fa-store fa-stack-1x fa-inverse"})]})})}),Object(a.jsx)("input",{type:"file",id:"upload-button",style:{display:"none"},onChange:function(e){e.target.files.length&&M({preview:URL.createObjectURL(e.target.files[0]),raw:e.target.files[0]})}}),Object(a.jsx)(b.a,{onClick:W,children:"Upload Image"})]})]})},w=function(e){var t=Object(n.useState)(!1),c=Object(i.a)(t,2),r=c[0],j=c[1],s=Object(n.useState)(!1),m=Object(i.a)(s,2);m[0],m[1];return Object(a.jsx)("div",{className:"parent",children:Object(a.jsxs)(h.a,{light:!0,expand:"md",children:[Object(a.jsx)(d.a,{onClick:function(){j(!r),j(!r)}}),Object(a.jsxs)(u.a,{isOpen:r,navbar:!0,children:[Object(a.jsxs)(O.a,{className:"mr-auto",children:[Object(a.jsx)(x.a,{children:Object(a.jsx)(p.a,{className:"blue",href:"/",children:"EPIC  CHARACTER CREATOR"})}),Object(a.jsx)(x.a,{children:Object(a.jsx)(p.a,{className:"invite",to:"/invite",children:"Invite Friends"})})]}),Object(a.jsx)("div",{className:"search",children:void(e.sessionToken===localStorage.getItem("token")&&(o.a,l.a,b.a))}),Object(a.jsx)("br",{}),Object(a.jsx)(b.a,{className:"logoutBtn",size:"lg",onClick:e.clickLogout,children:"Logout"})]})]})})},F=function(e){var t=Object(n.useState)(""),c=Object(i.a)(t,2),r=c[0],j=c[1],s=Object(n.useState)(""),h=Object(i.a)(s,2),d=h[0],u=h[1],O=Object(n.useState)(""),x=Object(i.a)(O,2),p=x[0],m=x[1],f=Object(n.useState)(""),v=Object(i.a)(f,2),k=v[0],C=v[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Sign Up"}),Object(a.jsxs)(o.a,{onSubmit:function(t){t.preventDefault(),fetch("".concat(g,"/user/create"),{method:"POST",body:JSON.stringify({user:{firstName:p,lastName:k,username:r,password:d}}),headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(t){e.updateToken(t.sessionToken)}))},children:[Object(a.jsxs)(y.a,{children:[Object(a.jsx)(T.a,{htmlFor:"firstName",children:"First Name"}),Object(a.jsx)(l.a,{onChange:function(e){return m(e.target.value)},name:"firstName",value:p})]}),Object(a.jsxs)(y.a,{children:[Object(a.jsx)(T.a,{htmlFor:"lastName",children:"Last Name"}),Object(a.jsx)(l.a,{onChange:function(e){return C(e.target.value)},name:"lastName",value:k})]}),Object(a.jsxs)(y.a,{children:[Object(a.jsx)(T.a,{htmlFor:"username",children:"Username"}),Object(a.jsx)(l.a,{onChange:function(e){return j(e.target.value)},name:"username",value:r})]}),Object(a.jsxs)(y.a,{children:[Object(a.jsx)(T.a,{htmlFor:"password",children:"Password"}),Object(a.jsx)(l.a,{onChange:function(e){return u(e.target.value)},type:"password",name:"password",value:d})]}),Object(a.jsx)(b.a,{className:"signupBtn",type:"submit",children:"Signup"})]})]})},E=function(e){var t=Object(n.useState)(""),c=Object(i.a)(t,2),r=c[0],j=c[1],s=Object(n.useState)(""),h=Object(i.a)(s,2),d=h[0],u=h[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Login"}),Object(a.jsxs)(o.a,{onSubmit:function(t){t.preventDefault(),fetch("".concat(g,"/user/login"),{method:"POST",body:JSON.stringify({user:{username:r,password:d}}),headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(t){e.updateToken(t.sessionToken)}))},children:[Object(a.jsxs)(y.a,{children:[Object(a.jsx)(T.a,{htmlFor:"username",children:"Username"}),Object(a.jsx)(l.a,{onChange:function(e){return j(e.target.value)},name:"username",value:r})]}),Object(a.jsxs)(y.a,{children:[Object(a.jsx)(T.a,{htmlFor:"password",children:"Password"}),Object(a.jsx)(l.a,{onChange:function(e){return u(e.target.value)},type:"password",name:"password",value:d})]}),Object(a.jsx)(b.a,{className:"loginBtn",type:"submit",children:"Login"})]})]})},H=c(55),D=c(56),U=c(57),_=(c(40),function(e){return console.log(e),Object(a.jsx)(H.a,{className:"auth-container",children:Object(a.jsxs)(D.a,{children:[Object(a.jsx)(U.a,{md:"5",className:"signup-col",children:Object(a.jsx)(F,{updateToken:e.updateToken})}),Object(a.jsx)(U.a,{md:"1"}),Object(a.jsx)(U.a,{md:"5",className:"login-col",children:Object(a.jsx)(E,{updateToken:e.updateToken})})]})})}),P=c(60),I=c(58),L=c(59),A=function(e){var t=Object(n.useState)(e.characterToUpdate.project_name),c=Object(i.a)(t,2),r=c[0],j=c[1],s=Object(n.useState)(e.characterToUpdate.name),h=Object(i.a)(s,2),d=h[0],u=h[1],O=Object(n.useState)(e.characterToUpdate.age),x=Object(i.a)(O,2),p=x[0],m=x[1],f=Object(n.useState)(e.characterToUpdate.race),v=Object(i.a)(f,2),k=v[0],C=v[1],S=Object(n.useState)(e.characterToUpdate.gender),N=Object(i.a)(S,2),w=N[0],F=N[1],E=Object(n.useState)(e.characterToUpdate.character_description),H=Object(i.a)(E,2),D=H[0],U=H[1],_=Object(n.useState)(e.characterToUpdate.background),A=Object(i.a)(_,2),R=A[0],B=A[1];return Object(a.jsx)("div",{children:Object(a.jsxs)(P.a,{isOpen:!0,children:[Object(a.jsx)(I.a,{children:"Edit Your Character"}),Object(a.jsx)(L.a,{children:Object(a.jsxs)(o.a,{onSubmit:function(t,c){t.preventDefault(),fetch("".concat(g,"/character").concat(e.characterToUpdate.id),{method:"PUT",body:JSON.stringify({character:{project_name:r,name:d,age:p,race:k,gender:w,character_description:D,background:R}}),headers:new Headers({"Content-Type":"application/json",Authorization:e.token})}).then((function(t){e.fetchCharacters(),e.updateOff()}))},children:[Object(a.jsxs)(y.a,{children:[Object(a.jsx)(T.a,{htmlFor:"project_name",children:"Edit Project Name"}),Object(a.jsx)(l.a,{name:"project_name",value:r,onChange:function(e){return j(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(y.a,{children:[Object(a.jsx)(T.a,{htmlFor:"name",children:"Edit Name:"}),Object(a.jsx)(l.a,{type:"text",name:"name",value:d,onChange:function(e){return u(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(y.a,{children:[Object(a.jsx)(T.a,{htmlFor:"age",children:"Edit Age:"}),Object(a.jsx)(l.a,{type:"text",name:"age",value:p,onChange:function(e){return m(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(y.a,{children:[Object(a.jsx)(T.a,{htmlFor:"race",children:"Edit Race:"}),Object(a.jsxs)(l.a,{type:"select",name:"race",value:k,onChange:function(e){return C(e.target.value)},children:[Object(a.jsx)("option",{value:"Human",children:"Human"}),Object(a.jsx)("option",{value:"HighElf",children:"High Elf"}),Object(a.jsx)("option",{value:"DarkElf",children:"Dark Elf"}),Object(a.jsx)("option",{value:"WoodElf",children:"Wood Elf"}),Object(a.jsx)("option",{value:"Dwarf",children:"Dwarf"}),Object(a.jsx)("option",{value:"Tiefling",children:"Tiefling"}),Object(a.jsx)("option",{value:"HalfOrc",children:"Half Orc"}),Object(a.jsx)("option",{value:"Hobbit",children:"Hobbit"})]})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(y.a,{children:[Object(a.jsx)(T.a,{htmlFor:"gender",children:"Edit Gender:"}),Object(a.jsxs)(l.a,{type:"select",name:"gender",value:w,onChange:function(e){return F(e.target.value)},children:[Object(a.jsx)("option",{value:"Male",children:"Male"}),Object(a.jsx)("option",{value:"Female",children:"Female"}),Object(a.jsx)("option",{value:"Nonbinary",children:"Nonbinary"}),Object(a.jsx)("option",{value:"Other",children:"Other"})]})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(y.a,{children:[Object(a.jsx)(T.a,{htmlFor:"character_description",children:"Edit Character Description:"}),Object(a.jsx)(l.a,{type:"textarea",name:"character_description",value:D,onChange:function(e){return U(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(y.a,{children:[Object(a.jsx)(T.a,{htmlFor:"background",children:"Edit Character Background:"}),Object(a.jsx)(l.a,{type:"textarea",name:"background",value:R,onChange:function(e){return B(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsx)(b.a,{type:"submit",children:"Submit Edited Character"})]})})]})})},R=function(e){var t=Object(n.useState)([]),c=Object(i.a)(t,2),r=c[0],j=c[1],s=Object(n.useState)(!1),o=Object(i.a)(s,2),l=o[0],b=o[1],h=Object(n.useState)({}),d=Object(i.a)(h,2),u=d[0],O=d[1],x=function(){fetch("".concat(g,"/character"),{method:"GET",headers:new Headers({"Content-Type":"application/json",Authorization:e.token})}).then((function(e){return e.json()})).then((function(e){j(e)}))};return Object(n.useEffect)((function(){x()}),[]),Object(a.jsx)("div",{className:"indexContainer",children:Object(a.jsx)(H.a,{children:Object(a.jsxs)(D.a,{children:[Object(a.jsx)(U.a,{md:"8",children:Object(a.jsx)(v,{characters:r,editUpdateCharacter:function(e){O(e),console.log(e)},updateOn:function(){b(!0)},fetchCharacters:x,token:e.token})}),Object(a.jsx)(U.a,{md:"4",children:Object(a.jsx)(N,{fetchCharacters:x,token:e.token})}),l?Object(a.jsx)(A,{characterToUpdate:u,updateOff:function(){b(!1)},token:e.token,fetchCharacters:x}):Object(a.jsx)(a.Fragment,{})]})})})};c(41);var B=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],r=t[1];Object(n.useEffect)((function(){localStorage.getItem("token")&&r(localStorage.getItem("token"))}),[]);var j=function(e){localStorage.setItem("token",e),r(e),console.log(c)};return Object(a.jsxs)("div",{children:[Object(a.jsx)(w,{clickLogout:function(){localStorage.clear(),r("")},sessonToken:c}),c===localStorage.getItem("token")?Object(a.jsx)(R,{token:c}):Object(a.jsx)(_,{updateToken:j})]})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,61)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,j=t.getTTFB;c(e),a(e),n(e),r(e),j(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)("div",{className:"reactOverride",children:Object(a.jsx)(B,{})})}),document.getElementById("root")),J()}},[[42,1,2]]]);
//# sourceMappingURL=main.7a0fdd8e.chunk.js.map