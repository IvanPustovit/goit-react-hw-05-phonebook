(this.webpackJsonph5=this.webpackJsonph5||[]).push([[0],{10:function(e,t,n){e.exports={form:"ContactForm_form__3bwAX","label-name":"ContactForm_label-name__1Lhv1"}},23:function(e,t,n){e.exports=n(42)},28:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(1),r=n.n(o),l=(n(28),n(16)),m=n(19),i=n(17),u=n(18),s=n(21),d=n(20),f=n(10),h=n.n(f),E=n(5),b=(n(15),function(e){var t=e.handleChangeName,n=e.nameValue,a=e.numberValue,o=e.handleChangeNumber,r=e.addToContacts,l=e.contactsId;return c.a.createElement("div",{className:h.a.form},c.a.createElement("form",null,c.a.createElement("label",{className:h.a["label-name"],htmlFor:l},"Name",c.a.createElement("input",{name:"name",id:l,type:"text",value:n,onChange:t})),c.a.createElement("label",{className:h.a["label-name"]},"Number",c.a.createElement("input",{name:"number",type:"text",value:a,onChange:o})),c.a.createElement("div",null,c.a.createElement("button",{type:"text",onClick:r},"Add contact"),c.a.createElement(E.a,null))))}),C=n(44),p=n(43),v=(n(31),function(e){var t=e.handleChangeNameFilter,n=e.contacts;return c.a.createElement(C.a,null,n.length>1&&c.a.createElement(p.a,{timeout:250,classNames:"filter",mountOnEnter:!0,unmountOnExit:!0},c.a.createElement("div",{className:"filter"},c.a.createElement("p",null,"Find contacts by name"),c.a.createElement("input",{name:"filter",type:"text",onChange:t}))))}),g=(n(32),function(e){var t=e.contacts,n=e.filterContacts,a=e.deleteContact;return c.a.createElement("div",null,c.a.createElement(C.a,{component:"ul"},n.length?n.map((function(e){return c.a.createElement(p.a,{key:e.name,classNames:"list-item",timeout:250,mountOnEnter:!0,unmountOnExit:!0},c.a.createElement("li",{className:"list-item"},c.a.createElement("p",null,e.name),c.a.createElement("p",null,e.number),c.a.createElement("button",{type:"button",id:e.id,className:"delete",onClick:function(){a(e.id)}},"X")))})):t.map((function(e){return c.a.createElement(p.a,{key:e.name,classNames:"list-item",timeout:250,mountOnEnter:!0,unmountOnExit:!0},c.a.createElement("li",{className:"list-item"},c.a.createElement("p",null,e.name),c.a.createElement("p",null,e.number),c.a.createElement("button",{type:"button",id:e.id,className:"delete",onClick:function(){a(e.id)}},"Delete")))}))))}),N=n(12),y=n.n(N),O=function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(n){throw new Error}},k=function(e){try{var t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(n){throw new Error}},w=(n(41),function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},e.notifyA=function(){return Object(E.b)("Enter name and number")},e.notifyB=function(){var t=e.state.name;Object(E.b)("".concat(t," is already in contacts"))},e.addToContacts=function(t){t.preventDefault();var n=e.state,a={name:n.name,number:n.number,id:y.a.generate()};e.state.contacts.find((function(t){return t.name===e.state.name}))?e.notifyB():e.setState((function(e){return{contacts:[].concat(Object(m.a)(e.contacts),[a])}})),e.setState({name:"",number:""})},e.inputHandlerContact=function(t){var n=t.target.name,a=t.target.value;e.setState(Object(l.a)({},n,a))},e.getFilterContacts=function(e,t){return t.filter((function(t){return t.name.toLocaleLowerCase().includes(e.toLocaleLowerCase())}))},e.deleteContact=function(t){var n=e.state.contacts.filter((function(e){return e.id!==t}));e.setState({contacts:n})},e.isContact=function(t){var n=e.state,a=n.name;return n.contacts.some((function(e){return e.name.toLocaleLowerCase()===a.toLocaleLowerCase()}))},e.contactsId=y.a.generate(),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=k("contacts");e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(e){e.contacts!==this.state.contacts&&O("contacts",this.state.contacts)}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=e.contacts,o=e.filter,r=this.getFilterContacts(this.state.filter,this.state.contacts);return c.a.createElement("div",null,c.a.createElement(p.a,{in:!0,classNames:"phonebook",timeout:500,mountOnEnter:!0,unmountOnExit:!0},c.a.createElement("div",{className:"phonebook"},c.a.createElement("h1",null,"Phonebook"))),c.a.createElement(b,{handleChangeName:this.inputHandlerContact,nameValue:t,numberValue:n,handleChangeNumber:this.inputHandlerContact,addToContacts:this.addToContacts,contactsId:this.contactsId,isContact:this.isContact}),c.a.createElement("h2",null,"Contacts"),c.a.createElement(v,{handleChangeNameFilter:this.inputHandlerContact,contacts:a,filter:o}),c.a.createElement(g,{contacts:a,filterContacts:r,deleteContact:this.deleteContact}))}}]),n}(a.Component));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(w,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.cd1029ab.chunk.js.map