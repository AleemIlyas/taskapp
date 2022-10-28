"use strict";(self.webpackChunkTask_app=self.webpackChunkTask_app||[]).push([[842],{3943:function(e,n,t){t.d(n,{Z:function(){return i}});t(2791);var a={Button:"Button_Button__gr25a",Success:"Button_Success__bQa0I",Danger:"Button_Danger__A5JK0"},r=t(184);function i(e){return(0,r.jsxs)("button",{className:[a.Button,a[e.type]].join(" "),disabled:!e.disable,children:[" ",e.children," "]})}},2385:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(1413),r=(t(2791),{Label:"Input_Label__gL+xR",Input:"Input_Input__7IJ8I",InputElement:"Input_InputElement__X1yVd",Invalid:"Input_Invalid__csHbb",textArea:"Input_textArea__JyqzH"}),i=t(184);function u(e){var n="";switch(e.type){case"text":case"number":default:n=(0,i.jsx)("input",(0,a.Z)((0,a.Z)({onChange:e.change,className:r.Input},e.eleconfig),{},{value:e.value}));break;case"textarea":n=(0,i.jsx)("textarea",(0,a.Z)((0,a.Z)({onChange:e.change,className:r.textArea},e.eleconfig),{},{value:e.value}));break;case"select":n=(0,i.jsx)("select",{onChange:e.change,className:r.InputElement,value:e.value,children:e.eleconfig.Options.map((function(e){return(0,i.jsx)("option",{className:r.Option,value:e.value,children:e.displayValue},e.value)}))})}return(0,i.jsxs)("div",{className:r.Input,children:[(0,i.jsx)("label",{className:r.Label,children:e.label}),n]})}},3875:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(5671),r=t(3144),i=t(9340),u=t(2882),l=t(2791),s="toast_Toast__7dqUI",o=t(184),c=function(e){(0,i.Z)(t,e);var n=(0,u.Z)(t);function t(){return(0,a.Z)(this,t),n.apply(this,arguments)}return(0,r.Z)(t,[{key:"render",value:function(){return(0,o.jsx)("div",{className:s,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"},children:this.props.children})}}]),t}(l.Component)},2842:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var a=t(4942),r=t(885),i=t(2791),u="createTask_form__10uk5",l=t(2385),s=t(3943),o=t(1011),c=t(9266),d=t(8756),p=t(3452),v=t(3875),f=t(7721),h=t(184);var g=(0,p.$j)((function(e){return{task:e.task.tasks,error:e.task.error,loading:e.task.loading}}),(function(e){return{saveTask:function(n){return e(f.F9(n))}}}))((function(e){var n=(0,i.useState)({title:{type:"text",eleConfig:{type:"text",placeholder:"Add task"},value:"",validation:{required:!0},valid:!1},description:{type:"textarea",eleConfig:{type:"textarea",placeholder:"Task description"},value:"",validation:{required:!0},valid:!1},complete:{type:"select",eleConfig:{Options:[{value:"True",displayValue:"True"},{value:"false",displayValue:"false"}]},value:"true",validation:{},valid:!0}}),t=(0,r.Z)(n,2),p=t[0],f=t[1],g=(0,i.useState)(!1),_=(0,r.Z)(g,2),m=_[0],x=_[1],Z=(0,i.useState)(!1),b=(0,r.Z)(Z,2),k=b[0],y=b[1],I=[];for(var j in p)I.push({id:j,label:j,config:p[j]});var C=(0,h.jsx)("div",{className:u,children:(0,h.jsxs)("form",{onSubmit:function(n){return function(n){n.preventDefault();var t={};for(var a in p)t[a]=p[a].value;e.saveTask(t),y(!0),setTimeout((function(){y(!1)}),2e3)}(n)},children:[I.map((function(e){return(0,h.jsx)(l.Z,{type:e.config.type,eleconfig:e.config.eleConfig,value:e.config.value,label:e.label,change:function(n){return function(e,n){var t=(0,c.Z)(p,(0,a.Z)({},n,(0,c.Z)(p[n],{value:e.target.value,valid:(0,d.Z)(e.target.value,p[n].validation)}))),r=!0;for(var i in p)r=p[i].valid&&r;x(r),f(t)}(n,e.id)}},e.id)})),(0,h.jsx)(s.Z,{type:"Success",disable:m,children:"ADD"})]})});return e.loading&&(C=(0,h.jsx)(o.Z,{})),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(v.Z,{show:k,children:e.error?"Something Went Wrong!":"Work added Successfully"}),C]})}))},9266:function(e,n,t){var a=t(1413);n.Z=function(e,n){return(0,a.Z)((0,a.Z)({},e),n)}},8756:function(e,n,t){var a=t(2570),r=t.n(a);n.Z=function(e,n){return(!n.required||""!==e.trim(""))&&(!(n.isemail&&!r().isEmail(e))&&(!(e.length<n.min)&&!(e.length>n.max)))}}}]);
//# sourceMappingURL=842.7e5b1c94.chunk.js.map