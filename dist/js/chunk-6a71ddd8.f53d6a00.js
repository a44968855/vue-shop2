(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a71ddd8"],{"0384":function(t,e,n){t.exports=n("41f9")},"0b73":function(t,e,n){n("1063"),t.exports=n("0ce3").Object.keys},"0f03":function(t,e,n){var r=n("a44e"),a=n("0ce3"),i=n("5e21"),o=n("9a3a"),s=n("163f").f;t.exports=function(t){var e=a.Symbol||(a.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:o.f(t)})}},1063:function(t,e,n){var r=n("26ec"),a=n("6496");n("46ca")("keys",function(){return function(t){return a(r(t))}})},"14d9":function(t,e,n){var r=n("8b19");r(r.S+r.F*!n("c4fb"),"Object",{defineProperty:n("163f").f})},"20e0":function(t,e){e.f=Object.getOwnPropertySymbols},"41f9":function(t,e,n){n("14d9");var r=n("0ce3").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},"46ca":function(t,e,n){var r=n("8b19"),a=n("0ce3"),i=n("362a");t.exports=function(t,e){var n=(a.Object||{})[t]||Object[t],o={};o[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",o)}},"4ece":function(t,e,n){n("6baa"),t.exports=n("0ce3").Object.getOwnPropertySymbols},"591a":function(t,e,n){t.exports=n("0b73")},"6baa":function(t,e,n){"use strict";var r=n("a44e"),a=n("f56f"),i=n("c4fb"),o=n("8b19"),s=n("579e"),c=n("538c").KEY,l=n("362a"),u=n("9bdd"),f=n("b008"),d=n("8115"),p=n("ec1e"),m=n("9a3a"),v=n("0f03"),b=n("6db7"),g=n("2338"),h=n("ac38"),y=n("9e54"),_=n("c5f5"),O=n("40ef"),C=n("3d88"),w=n("09b3"),x=n("afdb"),P=n("acf5"),S=n("163f"),j=n("6496"),k=P.f,E=S.f,N=x.f,$=r.Symbol,L=r.JSON,D=L&&L.stringify,F="prototype",M=p("_hidden"),J=p("toPrimitive"),I={}.propertyIsEnumerable,T=u("symbol-registry"),W=u("symbols"),q=u("op-symbols"),A=Object[F],G="function"==typeof $,K=r.QObject,Q=!K||!K[F]||!K[F].findChild,Y=i&&l(function(){return 7!=w(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=k(A,e);r&&delete A[e],E(t,e,n),r&&t!==A&&E(A,e,r)}:E,z=function(t){var e=W[t]=w($[F]);return e._k=t,e},B=G&&"symbol"==typeof $.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof $},H=function(t,e,n){return t===A&&H(q,e,n),h(t),e=O(e,!0),h(n),a(W,e)?(n.enumerable?(a(t,M)&&t[M][e]&&(t[M][e]=!1),n=w(n,{enumerable:C(0,!1)})):(a(t,M)||E(t,M,C(1,{})),t[M][e]=!0),Y(t,e,n)):E(t,e,n)},R=function(t,e){h(t);var n,r=b(e=_(e)),a=0,i=r.length;while(i>a)H(t,n=r[a++],e[n]);return t},U=function(t,e){return void 0===e?w(t):R(w(t),e)},V=function(t){var e=I.call(this,t=O(t,!0));return!(this===A&&a(W,t)&&!a(q,t))&&(!(e||!a(this,t)||!a(W,t)||a(this,M)&&this[M][t])||e)},X=function(t,e){if(t=_(t),e=O(e,!0),t!==A||!a(W,e)||a(q,e)){var n=k(t,e);return!n||!a(W,e)||a(t,M)&&t[M][e]||(n.enumerable=!0),n}},Z=function(t){var e,n=N(_(t)),r=[],i=0;while(n.length>i)a(W,e=n[i++])||e==M||e==c||r.push(e);return r},tt=function(t){var e,n=t===A,r=N(n?q:_(t)),i=[],o=0;while(r.length>o)!a(W,e=r[o++])||n&&!a(A,e)||i.push(W[e]);return i};G||($=function(){if(this instanceof $)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===A&&e.call(q,n),a(this,M)&&a(this[M],t)&&(this[M][t]=!1),Y(this,t,C(1,n))};return i&&Q&&Y(A,t,{configurable:!0,set:e}),z(t)},s($[F],"toString",function(){return this._k}),P.f=X,S.f=H,n("cced").f=x.f=Z,n("8547").f=V,n("20e0").f=tt,i&&!n("5e21")&&s(A,"propertyIsEnumerable",V,!0),m.f=function(t){return z(p(t))}),o(o.G+o.W+o.F*!G,{Symbol:$});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)p(et[nt++]);for(var rt=j(p.store),at=0;rt.length>at;)v(rt[at++]);o(o.S+o.F*!G,"Symbol",{for:function(t){return a(T,t+="")?T[t]:T[t]=$(t)},keyFor:function(t){if(!B(t))throw TypeError(t+" is not a symbol!");for(var e in T)if(T[e]===t)return e},useSetter:function(){Q=!0},useSimple:function(){Q=!1}}),o(o.S+o.F*!G,"Object",{create:U,defineProperty:H,defineProperties:R,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),L&&o(o.S+o.F*(!G||l(function(){var t=$();return"[null]"!=D([t])||"{}"!=D({a:t})||"{}"!=D(Object(t))})),"JSON",{stringify:function(t){var e,n,r=[t],a=1;while(arguments.length>a)r.push(arguments[a++]);if(n=e=r[1],(y(e)||void 0!==t)&&!B(t))return g(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!B(e))return e}),r[1]=e,D.apply(L,r)}}),$[F][J]||n("21ef")($[F],J,$[F].valueOf),f($,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},"6db7":function(t,e,n){var r=n("6496"),a=n("20e0"),i=n("8547");t.exports=function(t){var e=r(t),n=a.f;if(n){var o,s=n(t),c=i.f,l=0;while(s.length>l)c.call(t,o=s[l++])&&e.push(o)}return e}},7709:function(t,e,n){t.exports=n("cd75")},"7cf7":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{attrs:{"aria-label":"Page navigation example"}},[n("ul",{staticClass:"pagination"},[n("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_pre}},[n("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.getProducts(t.pagination.current_page-1)}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),n("span",{staticClass:"sr-only"},[t._v("Previous")])])]),t._l(t.pagination.total_pages,function(e){return n("li",{key:e,staticClass:"page-item",class:{active:t.pagination.current_page===e},on:{click:function(n){return n.preventDefault(),t.getProducts(e)}}},[n("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v(t._s(e))])])}),n("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_next},on:{click:function(e){return e.preventDefault(),t.getProducts(t.pagination.current_page+1)}}},[t._m(0)])],2)])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),n("span",{staticClass:"sr-only"},[t._v("Next")])])}],i={name:"Pagination",props:["pagination"],methods:{getProducts:function(t){this.$emit("getpagination",t)}}},o=i,s=n("4410"),c=Object(s["a"])(o,r,a,!1,null,null,null);e["a"]=c.exports},"800b":function(t,e,n){"use strict";var r=n("7709"),a=n.n(r),i=n("c475"),o=n.n(i),s=n("591a"),c=n.n(s),l=n("0384"),u=n.n(l);function f(t,e,n){return e in t?u()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=c()(n);"function"===typeof o.a&&(r=r.concat(o()(n).filter(function(t){return a()(n,t).enumerable}))),r.forEach(function(e){f(t,e,n[e])})}return t}n.d(e,"a",function(){return d})},8547:function(t,e){e.f={}.propertyIsEnumerable},"9a3a":function(t,e,n){e.f=n("ec1e")},acf5:function(t,e,n){var r=n("8547"),a=n("3d88"),i=n("c5f5"),o=n("40ef"),s=n("f56f"),c=n("61f7"),l=Object.getOwnPropertyDescriptor;e.f=n("c4fb")?l:function(t,e){if(t=i(t),e=o(e,!0),c)try{return l(t,e)}catch(n){}if(s(t,e))return a(!r.f.call(t,e),t[e])}},afdb:function(t,e,n){var r=n("c5f5"),a=n("cced").f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return a(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==i.call(t)?s(t):a(r(t))}},b357:function(t,e,n){var r=n("c5f5"),a=n("acf5").f;n("46ca")("getOwnPropertyDescriptor",function(){return function(t,e){return a(r(t),e)}})},c475:function(t,e,n){t.exports=n("4ece")},cced:function(t,e,n){var r=n("e541"),a=n("5ca5").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,a)}},cd75:function(t,e,n){n("b357");var r=n("0ce3").Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}},def9:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("table",{staticClass:"table mt-4"},[t._m(0),n("tbody",t._l(t.orderList,function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(t._f("timedate")(e.create_at)))]),n("td",{staticClass:"text-center"},[t._v(t._s(e.id))]),n("td",[e.user?n("div",{staticClass:"text-center"},[t._v(t._s(e.user.name))]):t._e()]),n("td",{staticClass:"text-center"},t._l(e.products,function(e){return n("ul",{key:e.id,staticStyle:{"list-style":"none"}},[n("li",[t._v(t._s(e.product.title)+" 數量："+t._s(e.qty)+t._s(e.product.unit))])])}),0),n("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.total)))]),n("td",[e.is_paid?n("span",{staticClass:"text-success"},[t._v("已付款")]):n("span",{staticClass:"text-danger"},[t._v("尚未付款")])])])}),0)]),n("div",{staticClass:"modal fade",attrs:{id:"orderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[n("div",{staticClass:"modal-content border-0"},[t._m(1),n("div",{staticClass:"modal-body"},[n("div",{staticClass:"form-row"},[n("div",{staticClass:"form-group col-md-6"},[n("label",{attrs:{for:"create"}},[t._v("建立日期")]),n("input",{staticClass:"form-control",attrs:{type:"text",id:"create",placeholder:"建立日期",disabled:""},domProps:{value:t._f("timedate")(t.tempOrder.create_at)}})])]),n("div",{staticClass:"form-row"},[n("div",{staticClass:"form-group col-md-6"},[n("label",{attrs:{for:"origin_price"}},[t._v("訂單價錢")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.tempOrder.total,expression:"tempOrder.total"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"請輸入原價"},domProps:{value:t.tempOrder.total},on:{input:function(e){e.target.composing||t.$set(t.tempOrder,"total",e.target.value)}}})])]),n("hr"),n("h6",{staticClass:"h6"},[t._v("訂購人資訊")]),t.tempOrder.user?n("div",[n("div",{staticClass:"form-row"},[n("div",{staticClass:"form-group col-md-6"},[n("label",{attrs:{for:"description"}},[t._v("姓名")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.tempOrder.user.name,expression:"tempOrder.user.name"}],staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"請輸入訂購人資訊"},domProps:{value:t.tempOrder.user.name},on:{input:function(e){e.target.composing||t.$set(t.tempOrder.user,"name",e.target.value)}}})])])]):t._e()]),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),n("button",{staticClass:"btn btn-dark",attrs:{type:"button"},on:{click:function(e){return t.editOrder(t.tempOrder.id)}}},[t._v("確認")])])])])]),n("pagination",{staticClass:"d-flex justify-content-center",attrs:{pagination:t.pagination},on:{getpagination:t.getOrderList}})],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("td",[t._v("訂購日期")]),n("td",{staticClass:"text-center"},[t._v("訂單編號")]),n("td",{staticClass:"text-center"},[t._v("客戶姓名")]),n("td",{staticClass:"text-center"},[t._v("購買項目")]),n("td",{staticClass:"text-right"},[t._v("金額")]),n("td",[t._v("是否付款")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-header bg-dark text-white"},[n("h5",{staticClass:"modal-title d-flex w-100",attrs:{id:"exampleModalLabel"}},[n("span",[t._v("明細")]),n("span",{staticClass:"ml-auto"})]),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],i=n("800b"),o=n("9062"),s=n.n(o),c=n("7cf7"),l={data:function(){return{orderList:{products:{}},pagination:{},tempOrder:{}}},methods:{getOrderList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("casual","/admin/orders?page=").concat(t),n=this;n.$http.get(e).then(function(t){console.log(t),n.orderList=t.data.orders,n.pagination=t.data.pagination})},openModal:function(t){var e=this;console.log(t),e.tempOrder=Object(i["a"])({},t),s()("#orderModal").modal("show")},editOrder:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("casual","/admin/order/").concat(t.tempOrder.id);console.log("api_url",e),this.$http.put(e,{data:t.tempOrder}).then(function(t){console.log("api res:",t)})}},created:function(){this.getOrderList()},components:{pagination:c["a"]}},u=l,f=n("4410"),d=Object(f["a"])(u,r,a,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-6a71ddd8.f53d6a00.js.map