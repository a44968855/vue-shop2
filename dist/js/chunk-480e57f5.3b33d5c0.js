(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-480e57f5"],{1553:function(t,a,s){"use strict";s.r(a);var r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"container"},[s("div",{staticClass:"row py-4"},[s("div",{staticClass:"col-md-6 px-0"},[s("div",[s("div",{staticClass:"bg-cover",staticStyle:{height:"380px"},style:{backgroundImage:"url("+t.product.imageUrl+")"}})])]),s("div",{staticClass:"col-md-6 pl-5"},[s("div",[s("h1",{staticClass:"mt-4"},[t._v(t._s(t.product.title))]),s("h4",{staticClass:"mt-3"},[t._v(t._s(t._f("currency")(t.product.price))+"/"+t._s(t.product.unit))]),s("hr"),s("p",{staticClass:"h5"},[t._v(t._s(t.product.content))]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.count,expression:"count"}],staticClass:"form-control mt-3",attrs:{name:""},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){var a="_value"in t?t._value:t.value;return a});t.count=a.target.multiple?s:s[0]}}},t._l(10,function(a){return s("option",{key:a,domProps:{value:a}},[t._v("選購 "+t._s(a)+" "+t._s(t.product.unit))])}),0),s("div",{staticClass:"modal-footer"},[s("div",{staticClass:"text-muted text-nowrap mr-3"},[t._v("\n              小計\n              "),s("strong",[t._v(t._s(t.count*t.product.price))]),t._v(" 元\n            ")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.addtoCart(t.product.id,t.product.num)}}},[t.status===t.product.id?s("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n              加到購物車\n            ")])])])])]),t._m(0),s("div",{staticClass:"row pb-3"},t._l(t.randomp,function(a,r){return s("div",{key:r,staticClass:"like col-3"},[s("router-link",{staticClass:"product-card card border-0 shadow-sm h-100",attrs:{to:"/product/"+a.id}},[s("div",{staticStyle:{height:"200px","background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+a.imageUrl+")"}}),s("div",{staticClass:"card-body text-center"},[s("h5",{staticClass:"card-title"},[s("a",{staticClass:"text-dark",attrs:{href:"#"}},[t._v(t._s(a.title))])]),s("div",{staticClass:"d-flex justify-content-center"},[a.price?s("div",{staticClass:"h5"},[t._v("NT "+t._s(t._f("currency")(a.price)))]):t._e()])])])],1)}),0)]),s("drop",{ref:"drop"})],1)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"h4 text-primary line pt-5"},[s("i",{staticClass:"fas fa-mug-hot mr-3"}),s("span",{staticClass:"text-dark h2 font-weight-bold"},[t._v("猜你喜歡")])])}],i=(s("4c33"),s("2af8")),c={data:function(){return{id:"",product:{},cart:{},loaddingfile:"",products:[],randomp:[],count:1}},methods:{getProduct:function(t){var a=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("casual","/product/").concat(t);a.$http.get(s).then(function(t){a.product=t.data.product})},addtoCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.$store.dispatch("addtoCart",{id:t,qty:a})},getRandom:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("casual","/products"),s=this;s.$http.get(a).then(function(a){a.data.products.forEach(function(t){1===t.is_enabled&&s.products.push(t)});var r=0;for(r=0;r<4;r++){var e=Math.floor(Math.random()*"".concat(t.products.length));s.randomp.push(s.products[e])}})}},computed:{status:function(){return this.$store.state.status.loaddingFile}},watch:{$route:function(t){var a=this;a.id=t.params.id,a.getProduct(a.id),a.count=1}},created:function(){this.id=this.$route.params.id,this.getProduct(this.id),this.getRandom()},components:{drop:i["a"]}},o=c,n=(s("4ef0"),s("4410")),d=Object(n["a"])(o,r,e,!1,null,null,null);a["default"]=d.exports},"2af8":function(t,a,s){"use strict";var r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"drop"},[s("button",{staticClass:"bag btn",attrs:{type:"button","data-toggle":"modal","data-target":"#cartsModal"}},[s("i",{staticClass:"text-primary fas fa-mug-hot fa-5x"}),s("span",{staticClass:"drop_badge badge-pill badge-danger"},[t._v(t._s(t.carts.carts.length))])])]),s("div",{staticClass:"modal",attrs:{id:"cartsModal",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0),s("div",{staticClass:"modal-body"},[s("table",{staticClass:"table"},[t._m(1),s("tbody",t._l(t.carts.carts,function(a,r){return s("tr",{key:r},[s("td",[s("a",{staticClass:"text-danger",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.removeCart(a.id)}}},[t.status===a.id?s("i",{staticClass:"fas fa-spinner fa-spin"}):s("i",{staticClass:"fas fa-trash-alt"})])]),s("td",[t._v(t._s(a.product.title))]),s("td",[t._v(t._s(a.qty))]),s("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(a.total)))])])}),0),s("tfoot",[s("tr",[s("td",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("總計")]),s("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.carts.final_total)))])])])])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("繼續選購")]),s("router-link",{staticClass:"btn btn-success",attrs:{type:"button",to:"/customerorder","data-dismiss":"modal"}},[t._v("前往付款")])],1)])])])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title font-weight-bold"},[t._v("購 物 車")]),s("button",{staticClass:"close",attrs:{"data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("td"),s("td",[t._v("品名")]),s("td",[t._v("數量")]),s("td",{staticClass:"text-right"},[t._v("價錢")])])])}],i={data:function(){return{}},methods:{getCart:function(){this.$store.dispatch("getCart")},removeCart:function(t){this.$store.dispatch("removeCart",t)}},computed:{carts:function(){return this.$store.state.carts},status:function(){return this.$store.state.status.loaddingFile}},created:function(){this.getCart()}},c=i,o=(s("4cbe"),s("4410")),n=Object(o["a"])(c,r,e,!1,null,null,null);a["a"]=n.exports},"4cbe":function(t,a,s){"use strict";var r=s("9ca0"),e=s.n(r);e.a},"4ef0":function(t,a,s){"use strict";var r=s("9e0a"),e=s.n(r);e.a},"9ca0":function(t,a,s){},"9e0a":function(t,a,s){}}]);
//# sourceMappingURL=chunk-480e57f5.3b33d5c0.js.map