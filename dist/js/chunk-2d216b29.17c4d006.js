(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216b29"],{c424:function(t,s,r){"use strict";r.r(s);var e=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",[r("div",{staticClass:"container"},[r("div",{staticClass:"my-5 row justify-content-center"},[r("form",{staticClass:"col-md-6",on:{submit:function(s){return s.preventDefault(),t.payOrder(s)}}},[r("table",{staticClass:"table"},[t._m(0),r("tbody",t._l(t.order.products,function(s){return r("tr",{key:s.id},[r("td",{staticClass:"align-middle"},[t._v(t._s(s.product.title))]),r("td",{staticClass:"align-middle"},[t._v(t._s(s.qty)+"/"+t._s(s.product.unit))]),r("td",{staticClass:"align-middle text-right"},[t._v(t._s(t._f("currency")(s.final_total)))])])}),0),r("tfoot",[r("tr",[r("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("總計")]),r("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.order.total)))])])])]),r("table",{staticClass:"table"},[r("tbody",[r("tr",[r("th",{attrs:{width:"100"}},[t._v("Email")]),r("td",[t._v(t._s(t.order.user.email))])]),r("tr",[r("th",[t._v("姓名")]),r("td",[t._v(t._s(t.order.user.name))])]),r("tr",[r("th",[t._v("收件人電話")]),r("td",[t._v(t._s(t.order.user.tel))])]),r("tr",[r("th",[t._v("收件人地址")]),r("td",[t._v(t._s(t.order.user.address))])]),r("tr",[r("th",[t._v("付款狀態")]),r("td",[t.order.is_paid?r("span",{staticClass:"text-success"},[t._v("付款完成")]):r("span",[t._v("尚未付款")])])])])]),!1===t.order.is_paid?r("div",{staticClass:"text-right"},[r("button",{staticClass:"btn btn-danger"},[t._v("確認付款去")])]):r("div",{staticClass:"text-right"},[r("router-link",{staticClass:"btn btn-success",attrs:{to:"/productOrder"}},[t._v("繼續逛逛")])],1)])])])])},a=[function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("thead",[r("th",[t._v("品名")]),r("th",[t._v("數量")]),r("th",[t._v("單價")])])}],i={data:function(){return{orderId:""}},methods:{getOrder:function(){this.$store.dispatch("getOrder",this.orderId)},payOrder:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("casual","/pay/").concat(t.orderId);t.$http.post(s).then(function(s){s.data.success?(t.getOrder(),t.$bus.$emit("alertmessage","付款完成","success")):t.$bus.$emit("alertmessage","請在嘗試一次","danger")})}},computed:{order:function(){return this.$store.state.order}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder()}},d=i,c=r("2877"),n=Object(c["a"])(d,e,a,!1,null,null,null);s["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d216b29.17c4d006.js.map