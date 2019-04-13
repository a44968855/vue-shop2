(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a6a6d4b8"],{"0384":function(t,e,r){t.exports=r("41f9")},"09df":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-8 pb-5"},[r("h2",{staticClass:"h1 py-3 font-weight-bold"},[t._v("購物車清單")]),r("span",{staticClass:"pb-5"},[t._v("購物車內還沒有商品喔。趕緊搶購!!")]),0!==t.carts.total?r("table",{staticClass:"table"},[t._m(0),r("tbody",t._l(t.carts.carts,function(e,a){return r("tr",{key:a},[r("td",[r("a",{staticClass:"text-danger",attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),t.removeCart(e.id)}}},[t.status===e.id?r("i",{staticClass:"fas fa-spinner fa-spin"}):r("i",{staticClass:"fas fa-trash-alt"})])]),r("td",[t._v("\n                "+t._s(e.product.title)+"\n                "),e.coupon?r("div",{staticClass:"text-success"},[t._v("已套用優惠券")]):t._e()]),r("td",[t._v(t._s(e.qty))]),r("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.total)))])])}),0),r("tfoot",[r("tr",[r("td",{staticClass:"text-right h4",attrs:{colspan:"3"}},[t._v("總計")]),r("td",{staticClass:"text-right h4"},[t._v(t._s(t._f("currency")(t.carts.total)))])]),t.carts.final_total!==t.carts.total?r("tr",[r("td",{staticClass:"text-right h4",attrs:{colspan:"3"}},[t._v("打折後")]),r("td",{staticClass:"text-right h4 text-success"},[t._v(t._s(t._f("currency")(t.carts.final_total)))])]):t._e()])]):t._e(),0!==t.carts.total?r("div",{staticClass:"input-group mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼","aria-label":"Recipient's username","aria-describedby":"basic-addon2"},domProps:{value:t.coupon_code},on:{input:function(e){e.target.composing||(t.coupon_code=e.target.value)}}}),r("div",{staticClass:"input-group-append"},[r("button",{staticClass:"btn input-group-text",attrs:{id:"basic-addon2"},on:{click:t.addCouponCode}},[t._v("套用優惠碼")])])]):t._e()])]),0!==t.carts.total?r("div",{staticClass:"my-5 row justify-content-center"},[r("form",{staticClass:"col-md-6",on:{submit:function(e){return e.preventDefault(),t.createdOrder(e)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"useremail"}},[t._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",attrs:{type:"email",name:"email",id:"useremail",placeholder:"請輸入 Email"},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),t.errors.has("email")?r("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("email")))]):t._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"username"}},[t._v("收件人姓名")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("name")},attrs:{type:"text",name:"name",id:"username",placeholder:"輸入姓名"},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),t.errors.has("name")?r("span",{staticClass:"text-danger"},[t._v("姓名必須輸入")]):t._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"usertel"}},[t._v("收件人電話")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",attrs:{type:"tel",id:"usertel",placeholder:"請輸入電話"},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"useraddress"}},[t._v("收件人地址")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("address")},attrs:{type:"text",name:"address",id:"useraddress",placeholder:"請輸入地址"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),t.errors.has("address")?r("span",{staticClass:"text-danger"},[t._v("地址欄位不得留空")]):t._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"comment"}},[t._v("留言")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"comment",cols:"30",rows:"10"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),t._m(1)])]):t._e()])],1)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("td"),r("td",[t._v("品名")]),r("td",[t._v("數量")]),r("td",{staticClass:"text-right"},[t._v("價錢")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-right"},[r("button",{staticClass:"btn btn-danger"},[t._v("送出訂單")])])}],s=r("800b"),o=r("863f"),i=(r("9062"),{data:function(){return{isLoading:!1,coupon_code:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getCart:function(){this.$store.dispatch("getCart")},createdOrder:function(){var t=this;this.$validator.validate().then(function(e){e?t.$store.dispatch("createdOrder",t.form):t.$bus.$emit("alertmessage","欄位不完整!!","danger")})},removeCart:function(t){this.$store.dispatch("removeCart",t)},addCouponCode:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("casual","/coupon");t.isLoading=!0;var r={code:t.coupon_code};t.$http.post(e,{data:r}).then(function(e){t.isLoading=!1,e.data.success?(t.getCart(),t.$bus.$emit("alertmessage","已成功套用優惠券","success")):t.$bus.$emit("alertmessage","優惠碼輸入錯誤!!","danger")})}},computed:Object(s["a"])({},Object(o["b"])(["status","carts"])),created:function(){this.getCart()}}),c=i,u=(r("e809"),r("4410")),l=Object(u["a"])(c,a,n,!1,null,null,null);e["default"]=l.exports},"0b73":function(t,e,r){r("1063"),t.exports=r("0ce3").Object.keys},"0f03":function(t,e,r){var a=r("a44e"),n=r("0ce3"),s=r("5e21"),o=r("9a3a"),i=r("163f").f;t.exports=function(t){var e=n.Symbol||(n.Symbol=s?{}:a.Symbol||{});"_"==t.charAt(0)||t in e||i(e,t,{value:o.f(t)})}},1063:function(t,e,r){var a=r("26ec"),n=r("6496");r("46ca")("keys",function(){return function(t){return n(a(t))}})},"14d9":function(t,e,r){var a=r("8b19");a(a.S+a.F*!r("c4fb"),"Object",{defineProperty:r("163f").f})},"20e0":function(t,e){e.f=Object.getOwnPropertySymbols},"41f9":function(t,e,r){r("14d9");var a=r("0ce3").Object;t.exports=function(t,e,r){return a.defineProperty(t,e,r)}},"46ca":function(t,e,r){var a=r("8b19"),n=r("0ce3"),s=r("362a");t.exports=function(t,e){var r=(n.Object||{})[t]||Object[t],o={};o[t]=e(r),a(a.S+a.F*s(function(){r(1)}),"Object",o)}},"4ece":function(t,e,r){r("6baa"),t.exports=r("0ce3").Object.getOwnPropertySymbols},"591a":function(t,e,r){t.exports=r("0b73")},"6baa":function(t,e,r){"use strict";var a=r("a44e"),n=r("f56f"),s=r("c4fb"),o=r("8b19"),i=r("579e"),c=r("538c").KEY,u=r("362a"),l=r("9bdd"),f=r("b008"),d=r("8115"),m=r("ec1e"),p=r("9a3a"),v=r("0f03"),b=r("6db7"),h=r("2338"),g=r("ac38"),y=r("9e54"),_=r("c5f5"),C=r("40ef"),w=r("3d88"),x=r("09b3"),O=r("afdb"),S=r("acf5"),j=r("163f"),P=r("6496"),$=S.f,N=j.f,E=O.f,k=a.Symbol,q=a.JSON,F=q&&q.stringify,D="prototype",J=m("_hidden"),L=m("toPrimitive"),I={}.propertyIsEnumerable,T=l("symbol-registry"),M=l("symbols"),W=l("op-symbols"),A=Object[D],G="function"==typeof k,K=a.QObject,Q=!K||!K[D]||!K[D].findChild,R=s&&u(function(){return 7!=x(N({},"a",{get:function(){return N(this,"a",{value:7}).a}})).a})?function(t,e,r){var a=$(A,e);a&&delete A[e],N(t,e,r),a&&t!==A&&N(A,e,a)}:N,Y=function(t){var e=M[t]=x(k[D]);return e._k=t,e},z=G&&"symbol"==typeof k.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof k},B=function(t,e,r){return t===A&&B(W,e,r),g(t),e=C(e,!0),g(r),n(M,e)?(r.enumerable?(n(t,J)&&t[J][e]&&(t[J][e]=!1),r=x(r,{enumerable:w(0,!1)})):(n(t,J)||N(t,J,w(1,{})),t[J][e]=!0),R(t,e,r)):N(t,e,r)},H=function(t,e){g(t);var r,a=b(e=_(e)),n=0,s=a.length;while(s>n)B(t,r=a[n++],e[r]);return t},U=function(t,e){return void 0===e?x(t):H(x(t),e)},V=function(t){var e=I.call(this,t=C(t,!0));return!(this===A&&n(M,t)&&!n(W,t))&&(!(e||!n(this,t)||!n(M,t)||n(this,J)&&this[J][t])||e)},X=function(t,e){if(t=_(t),e=C(e,!0),t!==A||!n(M,e)||n(W,e)){var r=$(t,e);return!r||!n(M,e)||n(t,J)&&t[J][e]||(r.enumerable=!0),r}},Z=function(t){var e,r=E(_(t)),a=[],s=0;while(r.length>s)n(M,e=r[s++])||e==J||e==c||a.push(e);return a},tt=function(t){var e,r=t===A,a=E(r?W:_(t)),s=[],o=0;while(a.length>o)!n(M,e=a[o++])||r&&!n(A,e)||s.push(M[e]);return s};G||(k=function(){if(this instanceof k)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(r){this===A&&e.call(W,r),n(this,J)&&n(this[J],t)&&(this[J][t]=!1),R(this,t,w(1,r))};return s&&Q&&R(A,t,{configurable:!0,set:e}),Y(t)},i(k[D],"toString",function(){return this._k}),S.f=X,j.f=B,r("cced").f=O.f=Z,r("8547").f=V,r("20e0").f=tt,s&&!r("5e21")&&i(A,"propertyIsEnumerable",V,!0),p.f=function(t){return Y(m(t))}),o(o.G+o.W+o.F*!G,{Symbol:k});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;et.length>rt;)m(et[rt++]);for(var at=P(m.store),nt=0;at.length>nt;)v(at[nt++]);o(o.S+o.F*!G,"Symbol",{for:function(t){return n(T,t+="")?T[t]:T[t]=k(t)},keyFor:function(t){if(!z(t))throw TypeError(t+" is not a symbol!");for(var e in T)if(T[e]===t)return e},useSetter:function(){Q=!0},useSimple:function(){Q=!1}}),o(o.S+o.F*!G,"Object",{create:U,defineProperty:B,defineProperties:H,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),q&&o(o.S+o.F*(!G||u(function(){var t=k();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))})),"JSON",{stringify:function(t){var e,r,a=[t],n=1;while(arguments.length>n)a.push(arguments[n++]);if(r=e=a[1],(y(e)||void 0!==t)&&!z(t))return h(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!z(e))return e}),a[1]=e,F.apply(q,a)}}),k[D][L]||r("21ef")(k[D],L,k[D].valueOf),f(k,"Symbol"),f(Math,"Math",!0),f(a.JSON,"JSON",!0)},"6db7":function(t,e,r){var a=r("6496"),n=r("20e0"),s=r("8547");t.exports=function(t){var e=a(t),r=n.f;if(r){var o,i=r(t),c=s.f,u=0;while(i.length>u)c.call(t,o=i[u++])&&e.push(o)}return e}},7709:function(t,e,r){t.exports=r("cd75")},"800b":function(t,e,r){"use strict";var a=r("7709"),n=r.n(a),s=r("c475"),o=r.n(s),i=r("591a"),c=r.n(i),u=r("0384"),l=r.n(u);function f(t,e,r){return e in t?l()(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},a=c()(r);"function"===typeof o.a&&(a=a.concat(o()(r).filter(function(t){return n()(r,t).enumerable}))),a.forEach(function(e){f(t,e,r[e])})}return t}r.d(e,"a",function(){return d})},8547:function(t,e){e.f={}.propertyIsEnumerable},"9a3a":function(t,e,r){e.f=r("ec1e")},acf5:function(t,e,r){var a=r("8547"),n=r("3d88"),s=r("c5f5"),o=r("40ef"),i=r("f56f"),c=r("61f7"),u=Object.getOwnPropertyDescriptor;e.f=r("c4fb")?u:function(t,e){if(t=s(t),e=o(e,!0),c)try{return u(t,e)}catch(r){}if(i(t,e))return n(!a.f.call(t,e),t[e])}},afdb:function(t,e,r){var a=r("c5f5"),n=r("cced").f,s={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(t){try{return n(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==s.call(t)?i(t):n(a(t))}},b357:function(t,e,r){var a=r("c5f5"),n=r("acf5").f;r("46ca")("getOwnPropertyDescriptor",function(){return function(t,e){return n(a(t),e)}})},c475:function(t,e,r){t.exports=r("4ece")},cced:function(t,e,r){var a=r("e541"),n=r("5ca5").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,n)}},cd75:function(t,e,r){r("b357");var a=r("0ce3").Object;t.exports=function(t,e){return a.getOwnPropertyDescriptor(t,e)}},e7b4:function(t,e,r){},e809:function(t,e,r){"use strict";var a=r("e7b4"),n=r.n(a);n.a}}]);
//# sourceMappingURL=chunk-a6a6d4b8.a6aad557.js.map