(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54e7c3ba"],{"2eb8":function(s,e,t){},dd31:function(s,e,t){"use strict";t.r(e);var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",[t("form",{staticClass:"form-signin",on:{submit:function(e){return e.preventDefault(),s.singnin(e)}}},[t("h1",{staticClass:"h3 mb-3 font-weight-normal"},[s._v("Please sign in")]),t("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[s._v("Email address")]),t("input",{directives:[{name:"model",rawName:"v-model",value:s.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:s.user.username},on:{input:function(e){e.target.composing||s.$set(s.user,"username",e.target.value)}}}),t("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[s._v("Password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:s.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:s.user.password},on:{input:function(e){e.target.composing||s.$set(s.user,"password",e.target.value)}}}),s._m(0),t("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[s._v("Sign in")]),t("p",{staticClass:"mt-5 mb-3 text-muted"},[s._v("© 2017-2018")])])])},n=[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"checkbox mb-3"},[t("label",[t("input",{attrs:{type:"checkbox",value:"remember-me"}}),s._v(" Remember me\n      ")])])}],r={data:function(){return{user:{username:"",password:""}}},methods:{singnin:function(){var s="".concat("https://vue-course-api.hexschool.io","/admin/signin"),e=this;e.$http.post(s,e.user).then(function(s){console.log(s.data),s.data.success&&e.$router.push("admin/products")})}}},o=r,i=(t("f5aa"),t("4410")),u=Object(i["a"])(o,a,n,!1,null,"48890d68",null);e["default"]=u.exports},f5aa:function(s,e,t){"use strict";var a=t("2eb8"),n=t.n(a);n.a}}]);
//# sourceMappingURL=chunk-54e7c3ba.d5689061.js.map