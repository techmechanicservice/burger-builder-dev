(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{100:function(e,a,t){},107:function(e,a,t){},108:function(e,a,t){"use strict";t(100);var r=t(0),n=t.n(r);a.a=function(e){var a=e.identity,t=e.type,r=e.formik,s=e.children,i=function(e){return r.touched[e]&&r.errors[e]?{errorMessage:n.a.createElement("span",{className:"form-input__toolkit"},r.errors[e]),errorClass:" form-input__field--invalid"}:{errorMessage:null,errorClass:""}};return n.a.createElement("div",{className:"form-input"},n.a.createElement("label",{className:"form-input__label",htmlFor:a},s," ",i(a).errorMessage),n.a.createElement("input",Object.assign({type:t,className:"form-input__field".concat(i(a).errorClass),name:a},r.getFieldProps(a))))}},152:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(4),i=t(14),o=(t(26),t(107),t(100),t(15)),l=t(108),c=t(136),m=t(135);a.default=function(e){var a=Object(s.c)(),t=Object(s.d)((function(e){return e.signup.isSignupComplete})),r=Object(s.d)((function(e){return e.signup.loading})),u=Object(s.d)((function(e){return e.signup.error})),p=Object(c.a)({initialValues:{nickname:"",address:"",email:"",password:""},validationSchema:m.a({email:m.b().email("is invalid").required("is required"),password:m.b().required("is required").min(6,"must be 6 characters atleast")}),onSubmit:function(e){a(i.j(e))}}),d=Object.keys(p.errors).length,f=n.a.createElement(n.a.Fragment,null,function(e,a){return e?n.a.createElement("p",{className:"form__toolkit"},"Creating your account"):a?n.a.createElement("p",{className:"form__error"},a.message.replace(/_/g," ")+" :("):n.a.createElement("p",{className:"form__toolkit"},"Please provide account info")}(r,u),r?n.a.createElement(o.a,null):n.a.createElement("form",{className:"form__form",onSubmit:p.handleSubmit},n.a.createElement(l.a,{formik:p,identity:"email",type:"email"},"Email"),n.a.createElement(l.a,{formik:p,identity:"password",type:"password"},"Password"),n.a.createElement("button",{disabled:!d<=0,type:"submit",className:"button--success form__submit"},"Submit")));return t&&(f=n.a.createElement("p",null,"Account successfully created! You may now login")),n.a.createElement("div",{className:"form"},f)}}}]);
//# sourceMappingURL=6.6658f28f.chunk.js.map