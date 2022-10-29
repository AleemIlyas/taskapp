"use strict";(self.webpackChunkTask_app=self.webpackChunkTask_app||[]).push([[34],{3943:function(e,t,a){a.d(t,{Z:function(){return i}});a(2791);var n={Button:"Button_Button__gr25a",Success:"Button_Success__bQa0I",Danger:"Button_Danger__A5JK0"},r=a(184);function i(e){return(0,r.jsxs)("button",{className:[n.Button,n[e.type]].join(" "),disabled:!e.disable,children:[" ",e.children," "]})}},2385:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(1413),r=(a(2791),{Label:"Input_Label__gL+xR",Input:"Input_Input__7IJ8I",InputElement:"Input_InputElement__X1yVd",Invalid:"Input_Invalid__csHbb",textArea:"Input_textArea__JyqzH"}),i=a(184);function l(e){var t="";switch(e.type){case"text":case"number":default:t=(0,i.jsx)("input",(0,n.Z)((0,n.Z)({onChange:e.change,className:r.Input},e.eleconfig),{},{value:e.value}));break;case"textarea":t=(0,i.jsx)("textarea",(0,n.Z)((0,n.Z)({onChange:e.change,className:r.textArea},e.eleconfig),{},{value:e.value}));break;case"select":t=(0,i.jsx)("select",{onChange:e.change,className:r.InputElement,value:e.value,children:e.eleconfig.Options.map((function(e){return(0,i.jsx)("option",{className:r.Option,value:e.value,children:e.displayValue},e.value)}))})}return(0,i.jsxs)("div",{className:r.Input,children:[(0,i.jsx)("label",{className:r.Label,children:e.label}),t]})}},6034:function(e,t,a){a.r(t),a.d(t,{default:function(){return Z}});var n=a(4942),r=a(5671),i=a(3144),l=a(9340),s=a(2882),o=a(2791),u=a(2385),c=a(3943),d="Login_form__e403M",f="Login_btn__SM8Zy",p="Login_Error__9YRzi",v=a(9266),m=a(8756),h=a(3452),g=a(7721),_=a(6871),x=a(1011),b=a(184),I=function(e){(0,l.Z)(a,e);var t=(0,s.Z)(a);function a(){var e;(0,r.Z)(this,a);for(var i=arguments.length,l=new Array(i),s=0;s<i;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={formdata:{email:{type:"text",eleConfig:{type:"text",placeholder:"johndoe@email.com"},value:"",validation:{required:!0,isemail:!0},valid:!1},password:{type:"text",eleConfig:{type:"text",placeholder:"password"},value:"",validation:{required:!0,min:5,max:25},valid:!1}},formIsValid:!1},e.submitHandler=function(t){t.preventDefault();var a={};for(var n in e.state.formdata)a[n]=e.state.formdata[n].value;e.props.login(a)},e.changeHandler=function(t,a){var r=(0,v.Z)(e.state.formdata,(0,n.Z)({},a,(0,v.Z)(e.state.formdata[a],{value:t.target.value,valid:(0,m.Z)(t.target.value,e.state.formdata[a].validation)}))),i=!0;for(var l in e.state.formdata)i=e.state.formdata[l].valid&&i;e.setState({formdata:r,formIsValid:i})},e}return(0,i.Z)(a,[{key:"componentWillUnmount",value:function(){this.props.reset()}},{key:"render",value:function(){var e=this,t=[];for(var a in this.state.formdata)t.push({key:a,label:a,config:this.state.formdata[a]});var n=null;this.props.redirect&&(n=(0,b.jsx)(_.Fg,{to:"/",replace:!0}));var r=(0,b.jsxs)("div",{className:d,children:[(0,b.jsx)("h1",{children:"LOG IN!"}),(0,b.jsx)("p",{className:p,children:this.props.error}),(0,b.jsxs)("form",{onSubmit:function(t){return e.submitHandler(t)},children:[t.map((function(t){return(0,b.jsx)(u.Z,{type:t.config.type,eleconfig:t.config.eleConfig,value:t.config.value,label:t.label,change:function(a){e.changeHandler(a,t.key)}},t.key)})),(0,b.jsx)(c.Z,{type:"Success",disable:this.state.formIsValid,children:" LOG IN! "})]}),(0,b.jsxs)("p",{children:[" Don't have a account ",(0,b.jsx)("span",{className:f,onClick:function(){return e.props.navigate("/SignUP")},children:"SIGN Up!"})," "]}),n]});return this.props.loading&&(r=(0,b.jsx)(x.Z,{})),r}}]),a}(o.Component),Z=(0,h.$j)((function(e){return{loading:e.user.loading,error:e.user.error,redirect:e.user.redirect}}),(function(e){return{login:function(t){return e(g.x4(t))},reset:function(){return e(g.AG())}}}))(I)},9266:function(e,t,a){var n=a(1413);t.Z=function(e,t){return(0,n.Z)((0,n.Z)({},e),t)}},8756:function(e,t,a){var n=a(2570),r=a.n(n);t.Z=function(e,t){return(!t.required||""!==e.trim(""))&&(!(t.isemail&&!r().isEmail(e))&&(!(e.length<t.min)&&!(e.length>t.max)))}}}]);
//# sourceMappingURL=34.435b66a5.chunk.js.map