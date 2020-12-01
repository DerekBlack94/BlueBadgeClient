(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{58:function(e,t,c){},59:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(2),r=c.n(n),j=(c(54),c(21)),s=c.n(j),i=(c(58),c(9)),o=(c(59),c(23)),l=c(12),b=c(94),h=c(95),O=c(96),d=c(97),u=c(98),x=c(99),p=c(100),m=c(108),g=c(109),f=c(101),v=c(90),C=c(93),S=c(48),k=c(89),y="";switch(window.location.hostname){case"localhost":y="http://localhost:5432";break;case"character-client.herokuapp.com/":y="https://character-client.herokuapp.com/"}var T=y,N=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Character Display"}),Object(a.jsx)("hr",{}),Object(a.jsxs)(k.a,{striped:!0,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"ID"}),Object(a.jsx)("th",{children:"Project Name"}),Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("th",{children:"Age"}),Object(a.jsx)("th",{children:"Race"}),Object(a.jsx)("th",{children:"Gender"}),Object(a.jsx)("th",{children:"Description"}),Object(a.jsx)("th",{children:"Background"})]})}),Object(a.jsx)("tbody",{children:e.characters.map((function(e,t){e.id,e.project_name,e.name,e.age,e.race,e.gender,e.character_description,e.background,S.a,S.a}))})]})]})},F=c(91),E=c(92),w=function(e){var t=Object(n.useState)(""),c=Object(i.a)(t,2),r=c[0],j=c[1],s=Object(n.useState)(""),o=Object(i.a)(s,2),l=o[0],b=o[1],h=Object(n.useState)(),O=Object(i.a)(h,2),d=O[0],u=O[1],x=Object(n.useState)(""),p=Object(i.a)(x,2),m=p[0],g=p[1],f=Object(n.useState)(""),k=Object(i.a)(f,2),y=k[0],N=k[1],w=Object(n.useState)(""),H=Object(i.a)(w,2),D=H[0],_=H[1],U=Object(n.useState)(""),P=Object(i.a)(U,2),A=P[0],I=P[1],B=function(t){t.preventDefault(),fetch("".concat(T,"/character/create"),{method:"POST",body:JSON.stringify({character:{project_name:r,name:l,age:d,race:m,gender:y,character_description:D,background:A}}),headers:new Headers({"Content-Type":"application/json",Authorization:e.token})}).then((function(e){return e.json()})).then((function(t){console.log(t),j(""),b(""),u(),g(""),N(""),_(""),I(""),e.fetchCharacters()}))};return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Create a Character!"}),Object(a.jsxs)(v.a,{onSubmit:B,children:[Object(a.jsxs)(F.a,{children:[Object(a.jsx)(E.a,{htmlFor:"project_name",children:"Project Name:"}),Object(a.jsx)("br",{}),Object(a.jsx)(C.a,{name:"project_name",type:"text",value:r,onChange:function(e){return j(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(F.a,{children:[Object(a.jsx)(E.a,{htmlFor:"name",children:"Name:"}),Object(a.jsx)("br",{}),Object(a.jsx)(C.a,{type:"text",name:"name",value:l,onChange:function(e){return b(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(F.a,{children:[Object(a.jsx)(E.a,{htmlFor:"age",children:"Age:"}),Object(a.jsx)("br",{}),Object(a.jsx)(C.a,{type:"text",name:"age",value:d,onChange:function(e){return u(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(F.a,{children:[Object(a.jsx)(E.a,{htmlFor:"race",children:"Race:"}),Object(a.jsx)("br",{}),Object(a.jsxs)(C.a,{type:"select",name:"race",value:m,onChange:function(e){return g(e.target.value)},children:[Object(a.jsx)("option",{value:"Human",children:"Human"}),Object(a.jsx)("option",{value:"HighElf",children:"High Elf"}),Object(a.jsx)("option",{value:"DarkElf",children:"Dark Elf"}),Object(a.jsx)("option",{value:"WoodElf",children:"Wood Elf"}),Object(a.jsx)("option",{value:"Dwarf",children:"Dwarf"}),Object(a.jsx)("option",{value:"Tiefling",children:"Tiefling"}),Object(a.jsx)("option",{value:"HalfOrc",children:"Half Orc"}),Object(a.jsx)("option",{value:"Hobbit",children:"Hobbit"})]})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(F.a,{children:[Object(a.jsx)(E.a,{htmlFor:"gender",children:"Gender:"}),Object(a.jsx)("br",{}),Object(a.jsxs)(C.a,{type:"select",name:"gender",value:y,onChange:function(e){return N(e.target.value)},children:[Object(a.jsx)("option",{value:"Male",children:"Male"}),Object(a.jsx)("option",{value:"Female",children:"Female"}),Object(a.jsx)("option",{value:"Nonbinary",children:"Nonbinary"}),Object(a.jsx)("option",{value:"Other",children:"Other"})]})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(F.a,{children:[Object(a.jsx)(E.a,{htmlFor:"character_description",children:"Character Description:"}),Object(a.jsx)("br",{}),Object(a.jsx)(C.a,{type:"textarea",name:"character_description",value:D,onChange:function(e){return _(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(F.a,{children:[Object(a.jsx)(E.a,{htmlFor:"background",children:"Character Background:"}),Object(a.jsx)("br",{}),Object(a.jsx)(C.a,{type:"textarea",name:"background",value:A,onChange:function(e){return I(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsx)(S.a,{type:"submit",onSubmit:B,children:"Create"})]})]})},H=function(e){var t=Object(n.useState)(!1),c=Object(i.a)(t,2),r=c[0],j=c[1],s=Object(n.useState)(!1),k=Object(i.a)(s,2),y=k[0],T=k[1];return Object(a.jsxs)("div",{className:"parent",children:[Object(a.jsxs)(b.a,{color:"dark",light:!0,expand:"md",children:[Object(a.jsx)(h.a,{onClick:function(){j(!r),j(!r)}}),Object(a.jsxs)(O.a,{isOpen:r,navbar:!0,children:[Object(a.jsxs)(d.a,{className:"mr-auto",children:[Object(a.jsx)(u.a,{children:Object(a.jsx)(x.a,{className:"blue",href:"/",children:"EPIC  CHARACTER CREATOR"})}),Object(a.jsx)("div",{className:"dropdown",children:Object(a.jsx)(o.a,{children:Object(a.jsx)("div",{className:"styling",children:Object(a.jsx)(u.a,{children:Object(a.jsxs)(p.a,{className:"charDropdown",nav:!0,isOpen:y,toggle:function(){return T(!y)},children:[Object(a.jsx)(m.a,{nav:!0,caret:!0,children:"Characters"}),Object(a.jsxs)(g.a,{children:[Object(a.jsx)(f.a,{header:!0,children:"Character Options"}),Object(a.jsx)(f.a,{children:Object(a.jsx)(o.b,{to:"/characters",children:"Browse Characters"})}),Object(a.jsx)(f.a,{children:Object(a.jsx)(o.b,{to:"/charactercreate",children:"Create Character"})}),Object(a.jsx)(f.a,{divider:!0}),Object(a.jsx)(f.a,{children:"Close"})]})]})})})})}),Object(a.jsx)(u.a,{children:Object(a.jsx)(x.a,{className:"invite",to:"/invite",children:"Invite Friends"})})]}),Object(a.jsxs)(v.a,{inline:!0,children:[Object(a.jsx)(C.a,{type:"text",placeholder:"Search Character",className:"mr-sm-2"}),Object(a.jsx)(S.a,{className:"infoBtn",outline:!0,color:"info",children:"Search "})]}),Object(a.jsx)("br",{}),Object(a.jsx)(S.a,{className:"logoutBtn",size:"lg",color:"danger",onClick:e.clickLogout,children:"Logout"})]})]}),Object(a.jsx)(o.a,{children:Object(a.jsx)("div",{className:"navRoute",children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/characters",children:Object(a.jsx)(N,{})}),Object(a.jsx)(l.a,{exact:!0,path:"/charactercreate",children:Object(a.jsx)(w,{})})]})})})]})},D=c(104),_=c(105),U=c(106),P=c(107),A=c(102),I=c(103),B=function(e){var t=Object(n.useState)(e.characterToUpdate.project_name),c=Object(i.a)(t,2),r=c[0],j=c[1],s=Object(n.useState)(e.characterToUpdate.name),o=Object(i.a)(s,2),l=o[0],b=o[1],h=Object(n.useState)(e.characterToUpdate.age),O=Object(i.a)(h,2),d=O[0],u=O[1],x=Object(n.useState)(e.characterToUpdate.race),p=Object(i.a)(x,2),m=p[0],g=p[1],f=Object(n.useState)(e.characterToUpdate.gender),k=Object(i.a)(f,2),y=k[0],N=k[1],w=Object(n.useState)(e.characterToUpdate.character_description),H=Object(i.a)(w,2),D=H[0],_=H[1],U=Object(n.useState)(e.characterToUpdate.background),B=Object(i.a)(U,2),L=B[0],R=B[1];return Object(a.jsx)("div",{children:Object(a.jsxs)(P.a,{isOpen:!0,children:[Object(a.jsx)(A.a,{children:"Edit Your Character"}),Object(a.jsx)(I.a,{children:Object(a.jsxs)(v.a,{onSubmit:function(t,c){t.preventDefault(),fetch("".concat(T,"/character").concat(e.characterToUpdate.id),{method:"PUT",body:JSON.stringify({character:{project_name:r,name:l,age:d,race:m,gender:y,character_description:D,background:L}}),headers:new Headers({"Content-Type":"application/json",Authorization:e.token})}).then((function(t){e.fetchCharacters(),e.updateOff()}))},children:[Object(a.jsxs)(F.a,{children:[Object(a.jsx)(E.a,{htmlFor:"project_name",children:"Edit Project Name"}),Object(a.jsx)(C.a,{name:"project_name",value:r,onChange:function(e){return j(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(F.a,{children:[Object(a.jsx)(E.a,{htmlFor:"name",children:"Edit Name:"}),Object(a.jsx)(C.a,{type:"text",name:"name",value:l,onChange:function(e){return b(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(F.a,{children:[Object(a.jsx)(E.a,{htmlFor:"age",children:"Edit Age:"}),Object(a.jsx)(C.a,{type:"text",name:"age",value:d,onChange:function(e){return u(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(F.a,{children:[Object(a.jsx)(E.a,{htmlFor:"race",children:"Edit Race:"}),Object(a.jsxs)(C.a,{type:"select",name:"race",value:m,onChange:function(e){return g(e.target.value)},children:[Object(a.jsx)("option",{value:"Human",children:"Human"}),Object(a.jsx)("option",{value:"HighElf",children:"High Elf"}),Object(a.jsx)("option",{value:"DarkElf",children:"Dark Elf"}),Object(a.jsx)("option",{value:"WoodElf",children:"Wood Elf"}),Object(a.jsx)("option",{value:"Dwarf",children:"Dwarf"}),Object(a.jsx)("option",{value:"Tiefling",children:"Tiefling"}),Object(a.jsx)("option",{value:"HalfOrc",children:"Half Orc"}),Object(a.jsx)("option",{value:"Hobbit",children:"Hobbit"})]})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(F.a,{children:[Object(a.jsx)(E.a,{htmlFor:"gender",children:"Edit Gender:"}),Object(a.jsxs)(C.a,{type:"select",name:"gender",value:y,onChange:function(e){return N(e.target.value)},children:[Object(a.jsx)("option",{value:"Male",children:"Male"}),Object(a.jsx)("option",{value:"Female",children:"Female"}),Object(a.jsx)("option",{value:"Nonbinary",children:"Nonbinary"}),Object(a.jsx)("option",{value:"Other",children:"Other"})]})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(F.a,{children:[Object(a.jsx)(E.a,{htmlFor:"character_description",children:"Edit Character Description:"}),Object(a.jsx)(C.a,{type:"textarea",name:"character_description",value:D,onChange:function(e){return _(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(F.a,{children:[Object(a.jsx)(E.a,{htmlFor:"background",children:"Edit Character Background:"}),Object(a.jsx)(C.a,{type:"textarea",name:"background",value:L,onChange:function(e){return R(e.target.value)}})]}),Object(a.jsx)("br",{}),Object(a.jsx)(S.a,{type:"submit",children:"Submit Edited Character"})]})})]})})},L=function(e){var t=Object(n.useState)([]),c=Object(i.a)(t,2),r=(c[0],c[1]),j=Object(n.useState)(!1),s=Object(i.a)(j,2),o=s[0],l=s[1],b=Object(n.useState)({}),h=Object(i.a)(b,2),O=h[0],d=(h[1],function(){fetch("".concat(T,"/character"),{method:"GET",headers:new Headers({"Content-Type":"application/json",Authorization:e.token})}).then((function(e){return e.json()})).then((function(e){r(e)}))});return Object(n.useEffect)((function(){d()}),[]),Object(a.jsx)("div",{children:Object(a.jsx)(D.a,{children:Object(a.jsxs)(_.a,{children:[Object(a.jsx)(U.a,{md:"6",children:Object(a.jsx)(w,{fetchCharacters:d,token:e.token})}),Object(a.jsx)(U.a,{md:"9"}),o?Object(a.jsx)(B,{characterToUpdate:O,updateOff:function(){l(!1)},token:e.token,fetchCharacters:d}):Object(a.jsx)(a.Fragment,{})]})})})},R=function(e){var t=Object(n.useState)(""),c=Object(i.a)(t,2),r=c[0],j=c[1],s=Object(n.useState)(""),o=Object(i.a)(s,2),l=o[0],b=o[1],h=Object(n.useState)(""),O=Object(i.a)(h,2),d=O[0],u=O[1],x=Object(n.useState)(""),p=Object(i.a)(x,2),m=p[0],g=p[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Sign Up"}),Object(a.jsxs)(v.a,{onSubmit:function(t){t.preventDefault(),fetch("".concat(T,"/user/create"),{method:"POST",body:JSON.stringify({user:{firstName:d,lastName:m,username:r,password:l}}),headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(t){e.updateToken(t.sessionToken)}))},children:[Object(a.jsxs)(F.a,{children:[Object(a.jsx)(E.a,{htmlFor:"firstName",children:"First Name"}),Object(a.jsx)(C.a,{onChange:function(e){return u(e.target.value)},name:"firstName",value:d})]}),Object(a.jsxs)(F.a,{children:[Object(a.jsx)(E.a,{htmlFor:"lastName",children:"Last Name"}),Object(a.jsx)(C.a,{onChange:function(e){return g(e.target.value)},name:"lastName",value:m})]}),Object(a.jsxs)(F.a,{children:[Object(a.jsx)(E.a,{htmlFor:"username",children:"Username"}),Object(a.jsx)(C.a,{onChange:function(e){return j(e.target.value)},name:"username",value:r})]}),Object(a.jsxs)(F.a,{children:[Object(a.jsx)(E.a,{htmlFor:"password",children:"Password"}),Object(a.jsx)(C.a,{onChange:function(e){return b(e.target.value)},name:"password",value:l})]}),Object(a.jsx)(S.a,{type:"submit",children:"Signup"})]})]})},J=function(e){var t=Object(n.useState)(""),c=Object(i.a)(t,2),r=c[0],j=c[1],s=Object(n.useState)(""),o=Object(i.a)(s,2),l=o[0],b=o[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Login"}),Object(a.jsxs)(v.a,{onSubmit:function(t){t.preventDefault(),fetch("".concat(T,"/user/login"),{method:"POST",body:JSON.stringify({user:{username:r,password:l}}),headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(t){e.updateToken(t.sessionToken)}))},children:[Object(a.jsxs)(F.a,{children:[Object(a.jsx)(E.a,{htmlFor:"username",children:"Username"}),Object(a.jsx)(C.a,{onChange:function(e){return j(e.target.value)},name:"username",value:r})]}),Object(a.jsxs)(F.a,{children:[Object(a.jsx)(E.a,{htmlFor:"password",children:"Password"}),Object(a.jsx)(C.a,{onChange:function(e){return b(e.target.value)},name:"password",value:l})]}),Object(a.jsx)(S.a,{type:"submit",children:"Login"})]})]})},M=function(e){return console.log(e),Object(a.jsx)(D.a,{className:"auth-container",children:Object(a.jsxs)(_.a,{children:[Object(a.jsx)(U.a,{md:"6",children:Object(a.jsx)(R,{updateToken:e.updateToken})}),Object(a.jsx)(U.a,{md:"6",className:"login-col",children:Object(a.jsx)(J,{updateToken:e.updateToken})})]})})};var z=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],r=t[1];Object(n.useEffect)((function(){localStorage.getItem("token")&&r(localStorage.getItem("token"))}),[]);var j=function(e){localStorage.setItem("token",e),r(e),console.log(c)};return Object(a.jsxs)("div",{children:[Object(a.jsx)(H,{clickLogout:function(){localStorage.clear(),r("")}}),Object(a.jsx)(M,{updateToken:j}),c===localStorage.getItem("token")?Object(a.jsx)(L,{token:c}):Object(a.jsx)(M,{updateToken:j}),Object(a.jsx)(L,{token:c})]})},G=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,110)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,j=t.getTTFB;c(e),a(e),n(e),r(e),j(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(z,{})}),document.getElementById("root")),G()}},[[88,1,2]]]);
//# sourceMappingURL=main.779a674b.chunk.js.map