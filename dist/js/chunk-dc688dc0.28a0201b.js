(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dc688dc0"],{"014b":function(t,e,n){"use strict";var a=n("e53d"),r=n("07e3"),s=n("8e60"),i=n("63b6"),o=n("9138"),c=n("ebfd").KEY,u=n("294c"),l=n("dbdb"),f=n("45f2"),d=n("62a0"),b=n("5168"),p=n("ccb9"),h=n("6718"),v=n("47ee"),m=n("9003"),g=n("e4ae"),y=n("f772"),_=n("36c3"),C=n("1bc3"),w=n("aebd"),x=n("a159"),O=n("0395"),S=n("bf0b"),j=n("d9f6"),k=n("c3a1"),P=S.f,E=j.f,$=O.f,F=a.Symbol,N=a.JSON,J=N&&N.stringify,D="prototype",M=b("_hidden"),I=b("toPrimitive"),T={}.propertyIsEnumerable,q=l("symbol-registry"),W=l("symbols"),Q=l("op-symbols"),z=Object[D],A="function"==typeof F,B=a.QObject,G=!B||!B[D]||!B[D].findChild,H=s&&u(function(){return 7!=x(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(t,e,n){var a=P(z,e);a&&delete z[e],E(t,e,n),a&&t!==z&&E(z,e,a)}:E,K=function(t){var e=W[t]=x(F[D]);return e._k=t,e},U=A&&"symbol"==typeof F.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof F},Y=function(t,e,n){return t===z&&Y(Q,e,n),g(t),e=C(e,!0),g(n),r(W,e)?(n.enumerable?(r(t,M)&&t[M][e]&&(t[M][e]=!1),n=x(n,{enumerable:w(0,!1)})):(r(t,M)||E(t,M,w(1,{})),t[M][e]=!0),H(t,e,n)):E(t,e,n)},L=function(t,e){g(t);var n,a=v(e=_(e)),r=0,s=a.length;while(s>r)Y(t,n=a[r++],e[n]);return t},R=function(t,e){return void 0===e?x(t):L(x(t),e)},V=function(t){var e=T.call(this,t=C(t,!0));return!(this===z&&r(W,t)&&!r(Q,t))&&(!(e||!r(this,t)||!r(W,t)||r(this,M)&&this[M][t])||e)},X=function(t,e){if(t=_(t),e=C(e,!0),t!==z||!r(W,e)||r(Q,e)){var n=P(t,e);return!n||!r(W,e)||r(t,M)&&t[M][e]||(n.enumerable=!0),n}},Z=function(t){var e,n=$(_(t)),a=[],s=0;while(n.length>s)r(W,e=n[s++])||e==M||e==c||a.push(e);return a},tt=function(t){var e,n=t===z,a=$(n?Q:_(t)),s=[],i=0;while(a.length>i)!r(W,e=a[i++])||n&&!r(z,e)||s.push(W[e]);return s};A||(F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===z&&e.call(Q,n),r(this,M)&&r(this[M],t)&&(this[M][t]=!1),H(this,t,w(1,n))};return s&&G&&H(z,t,{configurable:!0,set:e}),K(t)},o(F[D],"toString",function(){return this._k}),S.f=X,j.f=Y,n("6abf").f=O.f=Z,n("355d").f=V,n("9aa9").f=tt,s&&!n("b8e3")&&o(z,"propertyIsEnumerable",V,!0),p.f=function(t){return K(b(t))}),i(i.G+i.W+i.F*!A,{Symbol:F});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)b(et[nt++]);for(var at=k(b.store),rt=0;at.length>rt;)h(at[rt++]);i(i.S+i.F*!A,"Symbol",{for:function(t){return r(q,t+="")?q[t]:q[t]=F(t)},keyFor:function(t){if(!U(t))throw TypeError(t+" is not a symbol!");for(var e in q)if(q[e]===t)return e},useSetter:function(){G=!0},useSimple:function(){G=!1}}),i(i.S+i.F*!A,"Object",{create:R,defineProperty:Y,defineProperties:L,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),N&&i(i.S+i.F*(!A||u(function(){var t=F();return"[null]"!=J([t])||"{}"!=J({a:t})||"{}"!=J(Object(t))})),"JSON",{stringify:function(t){var e,n,a=[t],r=1;while(arguments.length>r)a.push(arguments[r++]);if(n=e=a[1],(y(e)||void 0!==t)&&!U(t))return m(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!U(e))return e}),a[1]=e,J.apply(N,a)}}),F[D][I]||n("35e8")(F[D],I,F[D].valueOf),f(F,"Symbol"),f(Math,"Math",!0),f(a.JSON,"JSON",!0)},"038b":function(t,e,n){"use strict";var a=n("a906"),r=n.n(a);r.a},"0395":function(t,e,n){var a=n("36c3"),r=n("6abf").f,s={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return r(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==s.call(t)?o(t):r(a(t))}},"268f":function(t,e,n){t.exports=n("fde4")},"32a6":function(t,e,n){var a=n("241e"),r=n("c3a1");n("ce7e")("keys",function(){return function(t){return r(a(t))}})},"355d":function(t,e){e.f={}.propertyIsEnumerable},"454f":function(t,e,n){n("46a7");var a=n("584a").Object;t.exports=function(t,e,n){return a.defineProperty(t,e,n)}},"46a7":function(t,e,n){var a=n("63b6");a(a.S+a.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"47ee":function(t,e,n){var a=n("c3a1"),r=n("9aa9"),s=n("355d");t.exports=function(t){var e=a(t),n=r.f;if(n){var i,o=n(t),c=s.f,u=0;while(o.length>u)c.call(t,i=o[u++])&&e.push(i)}return e}},"53e0":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"drop"},[n("button",{staticClass:"bag btn",attrs:{type:"button","data-toggle":"modal","data-target":"#cartsModal"}},[n("i",{staticClass:"text-primary fas fa-mug-hot fa-5x"}),n("span",{staticClass:"drop_badge badge-pill badge-danger"},[t._v(t._s(t.carts.carts.length))])])]),n("div",{staticClass:"modal",attrs:{id:"cartsModal",tabindex:"-1",role:"dialog"}},[n("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[t._m(0),n("div",{staticClass:"modal-body"},[n("table",{staticClass:"table"},[t._m(1),n("tbody",t._l(t.carts.carts,function(e,a){return n("tr",{key:a},[n("td",[n("button",{staticClass:"btn text-danger disabled",attrs:{href:"#",disabled:t.status===e.id},on:{click:function(n){return n.preventDefault(),t.removeCart(e.id)}}},[t.status===e.id?n("i",{staticClass:"fas fa-spinner fa-spin"}):n("i",{staticClass:"fas fa-trash-alt"})])]),n("td",[t._v(t._s(e.product.title))]),n("td",[t._v(t._s(e.qty))]),n("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.total)))])])}),0),n("tfoot",[n("tr",[n("td",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("總計")]),n("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.carts.final_total)))])])])])]),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("繼續選購")]),n("router-link",{staticClass:"btn btn-success",attrs:{to:"/customerorder","data-dismiss":"modal"}},[t._v("前往付款")])],1)])])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title font-weight-bold"},[t._v("購 物 車")]),n("button",{staticClass:"close",attrs:{"data-dismiss":"modal","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("td"),n("td",[t._v("品名")]),n("td",[t._v("數量")]),n("td",{staticClass:"text-right"},[t._v("價錢")])])])}],s={data:function(){return{}},methods:{getCart:function(){this.$store.dispatch("getCart")},removeCart:function(t){this.$store.dispatch("removeCart",t)}},computed:{carts:function(){return this.$store.state.carts},status:function(){return this.$store.state.status.loaddingFile}},created:function(){this.getCart()}},i=s,o=(n("038b"),n("2877")),c=Object(o["a"])(i,a,r,!1,null,null,null);e["a"]=c.exports},6718:function(t,e,n){var a=n("e53d"),r=n("584a"),s=n("b8e3"),i=n("ccb9"),o=n("d9f6").f;t.exports=function(t){var e=r.Symbol||(r.Symbol=s?{}:a.Symbol||{});"_"==t.charAt(0)||t in e||o(e,t,{value:i.f(t)})}},"6abf":function(t,e,n){var a=n("e6f3"),r=n("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,r)}},"85f2":function(t,e,n){t.exports=n("454f")},"8aae":function(t,e,n){n("32a6"),t.exports=n("584a").Object.keys},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols},a4bb:function(t,e,n){t.exports=n("8aae")},a906:function(t,e,n){},bb51:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"container"},[t._m(0),n("div",{staticClass:"row mt-4"},t._l(t.products,function(e,a){return n("div",{key:a,staticClass:"col-md-4 mb-4"},[a<3&e.is_enabled?n("div",{staticClass:"card border-0 shadow-sm h-100"},[n("div",{staticStyle:{height:"150px","background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+e.imageUrl+")"}}),n("div",{staticClass:"card-body"},[n("span",{staticClass:"badge badge-secondary float-right ml-2"},[t._v(t._s(e.category))]),n("h5",{staticClass:"card-title"},[n("p",{staticClass:"text-dark font-weight-bold"},[t._v(t._s(e.title))])]),n("p",{staticClass:"card-text"},[t._v(t._s(e.content))]),n("div",{},[e.price?n("div",{staticClass:"h4 text-danger text-right"},[t._v("售價 NT"+t._s(t._f("currency")(e.price))+"/"+t._s(e.unit))]):t._e()])]),n("div",{staticClass:"card-footer d-flex"},[n("router-link",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{to:"/product/"+e.id}},[t.loddingFile===e.id?n("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n              查看更多\n            ")]),n("button",{staticClass:"btn btn-outline-danger btn-sm ml-auto",class:{disabled:t.status===e.id},attrs:{type:"button",disabled:t.status===e.id},on:{click:function(n){return t.addtoCart(e.id,e.num)}}},[t.status===e.id?n("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n              加到購物車\n            ")])],1)]):t._e()])}),0)]),n("div",{staticClass:"container my-5"},[n("div",{staticClass:"form-row"},[t._m(1),n("div",{staticClass:"col-md-6"},[t._m(2),n("div",{staticClass:"h-100"},[n("h2",{staticClass:"text-center font-weight-bold mt-4"},[t._v("歡慶開幕")]),t._m(3),n("router-link",{staticClass:"btn btn-primary coupon_btn",attrs:{to:"/productorder"}},[t._v("前往選購")])],1)])])]),n("drop",{ref:"drop"})],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h4 text-primary line pt-2"},[n("i",{staticClass:"fas fa-mug-hot mr-3"}),n("span",{staticClass:"text-dark h2 font-weight-bold"},[t._v("主廚推薦 Menu")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"bg-cover",staticStyle:{"background-image":"url(https://images.unsplash.com/photo-1519656919827-59c35dd3ce77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=681&q=80)",height:"380px"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h4 text-primary font-weight-bold d-flex line mt-2"},[n("i",{staticClass:"fas fa-mug-hot mr-3"}),n("span",{staticClass:"text-dark"},[t._v("最新消息 News")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"h5 mx-4 coupon_text"},[t._v("\n            歡慶開幕，本周全館商品只要輸入優惠碼皆可享有5折優惠。\n            "),n("br"),t._v("優惠碼 : open\n          ")])}],s=n("cebc"),i=n("2f62"),o=n("53e0"),c={data:function(){return{loddingFile:""}},methods:{getProducts:function(){this.$store.dispatch("getProducts")},addtoCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.$store.dispatch("addtoCart",{id:t,qty:e})}},computed:Object(s["a"])({},Object(i["b"])(["products","status"])),created:function(){this.getProducts()},components:{drop:o["a"]}},u=c,l=n("2877"),f=Object(l["a"])(u,a,r,!1,null,null,null);e["default"]=f.exports},bf0b:function(t,e,n){var a=n("355d"),r=n("aebd"),s=n("36c3"),i=n("1bc3"),o=n("07e3"),c=n("794b"),u=Object.getOwnPropertyDescriptor;e.f=n("8e60")?u:function(t,e){if(t=s(t),e=i(e,!0),c)try{return u(t,e)}catch(n){}if(o(t,e))return r(!a.f.call(t,e),t[e])}},bf90:function(t,e,n){var a=n("36c3"),r=n("bf0b").f;n("ce7e")("getOwnPropertyDescriptor",function(){return function(t,e){return r(a(t),e)}})},ccb9:function(t,e,n){e.f=n("5168")},ce7e:function(t,e,n){var a=n("63b6"),r=n("584a"),s=n("294c");t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],i={};i[t]=e(n),a(a.S+a.F*s(function(){n(1)}),"Object",i)}},cebc:function(t,e,n){"use strict";var a=n("268f"),r=n.n(a),s=n("e265"),i=n.n(s),o=n("a4bb"),c=n.n(o),u=n("85f2"),l=n.n(u);function f(t,e,n){return e in t?l()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=c()(n);"function"===typeof i.a&&(a=a.concat(i()(n).filter(function(t){return r()(n,t).enumerable}))),a.forEach(function(e){f(t,e,n[e])})}return t}n.d(e,"a",function(){return d})},e265:function(t,e,n){t.exports=n("ed33")},ed33:function(t,e,n){n("014b"),t.exports=n("584a").Object.getOwnPropertySymbols},fde4:function(t,e,n){n("bf90");var a=n("584a").Object;t.exports=function(t,e){return a.getOwnPropertyDescriptor(t,e)}}}]);
//# sourceMappingURL=chunk-dc688dc0.28a0201b.js.map