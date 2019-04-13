(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3dd1a473"],{"0384":function(t,e,a){t.exports=a("41f9")},"09d0":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"text-right mt-4"},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.openModal("newData")}}},[t._v("建立新產品")])]),a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.products,function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.category))]),a("td",[t._v(t._s(e.title))]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.origin_price)))]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.price)))]),a("td",[e.is_enabled?a("span",{staticClass:"text-success"},[t._v("啟用")]):a("span",[t._v("未啟用")])]),a("td",[a("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.openModal("edit",e)}}},[t._v("編輯")])]),a("td",[a("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(a){return t.delModal("delData",e)}}},[t._v("刪除")])])])}),0)]),a("pagination",{attrs:{pagination:t.pagination},on:{getpagination:t.getProducts}}),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(1),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl,expression:"tempProduct.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.imageUrl},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"imageUrl",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customFile"}},[t._v("\n                  或 上傳圖片\n                  "),t.fileUploading?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e()]),a("input",{ref:"files",staticClass:"form-control",attrs:{type:"file",id:"customFile"},on:{change:t.uploadFile}})]),a("img",{staticClass:"img-fluid",attrs:{img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80",alt:"",src:t.tempProduct.imageUrl}})]),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"請輸入分類"},domProps:{value:t.tempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"category",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{type:"unit",id:"unit",placeholder:"請輸入單位"},domProps:{value:t.tempProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"unit",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"origin_price",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("產品描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"請輸入產品描述"},domProps:{value:t.tempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("說明內容")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"請輸入產品說明內容"},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.is_enabled,expression:"tempProduct.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"is_enabled","true-value":1,"false-value":0},domProps:{checked:Array.isArray(t.tempProduct.is_enabled)?t._i(t.tempProduct.is_enabled,null)>-1:t._q(t.tempProduct.is_enabled,1)},on:{change:function(e){var a=t.tempProduct.is_enabled,o=e.target,r=o.checked?1:0;if(Array.isArray(a)){var i=null,n=t._i(a,i);o.checked?n<0&&t.$set(t.tempProduct,"is_enabled",a.concat([i])):n>-1&&t.$set(t.tempProduct,"is_enabled",a.slice(0,n).concat(a.slice(n+1)))}else t.$set(t.tempProduct,"is_enabled",r)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("是否啟用")])])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updataProduct}},[t._v("確認")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),a("div",{staticClass:"modal-body"},[t._v("\n          是否刪除\n          "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempProduct.title))]),t._v(" 商品(刪除後將無法恢復)。\n        ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.updataProduct}},[t._v("確認刪除")])])])])])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"120"}},[t._v("分類")]),a("th",[t._v("產品名稱")]),a("th",{attrs:{width:"120"}},[t._v("原價")]),a("th",{attrs:{width:"120"}},[t._v("售價")]),a("th",{attrs:{width:"100"}},[t._v("是否啟用")]),a("th",{attrs:{width:"80"}},[t._v("編輯")]),a("th",{attrs:{width:"80"}},[t._v("刪除")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("新增產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("刪除產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],i=a("800b"),n=a("9062"),s=a.n(n),c=a("7cf7"),l={data:function(){return{products:[],tempProduct:{},isNew:"",isLoading:!1,fileUploading:!1,pagination:{}}},methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("casual","/admin/products?page=").concat(t),a=this;a.isLoading=!0,a.$http.get(e).then(function(t){console.log(t.data),a.isLoading=!1,a.products=t.data.products,a.pagination=t.data.pagination})},openModal:function(t,e){var a=this;"newData"===t?(a.tempProduct={},a.isNew="newData"):"edit"===t&&(a.tempProduct=Object(i["a"])({},e),a.isNew="edit"),s()("#productModal").modal("show")},delModal:function(t,e){this.isNew=t,this.tempProduct=Object(i["a"])({},e),s()("#delProductModal").modal("show")},updataProduct:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("casual","/admin/product"),e=this,a="post";"edit"===e.isNew?(a="put",t="".concat("https://vue-course-api.hexschool.io","/api/").concat("casual","/admin/product/").concat(e.tempProduct.id)):"delData"===e.isNew&&(a="delete",t="".concat("https://vue-course-api.hexschool.io","/api/").concat("casual","/admin/product/").concat(e.tempProduct.id)),e.$http[a](t,{data:e.tempProduct}).then(function(t){console.log(t.data),s()("#productModal").modal("hide"),s()("#delProductModal").modal("hide"),e.getProducts()})},uploadFile:function(){var t=this,e=this.$refs.files.files[0],a=new FormData,o=this;a.append("file-to-upload",e);var r="".concat("https://vue-course-api.hexschool.io","/api/").concat("casual","/admin/upload");o.fileUploading=!0,this.$http.post(r,a,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){o.fileUploading=!1,e.data.success?(t.$set(o.tempProduct,"imageUrl",e.data.imageUrl),t.$bus.$emit("alertmessage","上傳成功","success")):t.$bus.$emit("alertmessage",e.data.message,"danger")})}},created:function(){this.getProducts()},components:{pagination:c["a"]}},u=l,d=a("4410"),p=Object(d["a"])(u,o,r,!1,null,null,null);e["default"]=p.exports},"0b73":function(t,e,a){a("1063"),t.exports=a("0ce3").Object.keys},"0f03":function(t,e,a){var o=a("a44e"),r=a("0ce3"),i=a("5e21"),n=a("9a3a"),s=a("163f").f;t.exports=function(t){var e=r.Symbol||(r.Symbol=i?{}:o.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:n.f(t)})}},1063:function(t,e,a){var o=a("26ec"),r=a("6496");a("46ca")("keys",function(){return function(t){return r(o(t))}})},"14d9":function(t,e,a){var o=a("8b19");o(o.S+o.F*!a("c4fb"),"Object",{defineProperty:a("163f").f})},"20e0":function(t,e){e.f=Object.getOwnPropertySymbols},"41f9":function(t,e,a){a("14d9");var o=a("0ce3").Object;t.exports=function(t,e,a){return o.defineProperty(t,e,a)}},"46ca":function(t,e,a){var o=a("8b19"),r=a("0ce3"),i=a("362a");t.exports=function(t,e){var a=(r.Object||{})[t]||Object[t],n={};n[t]=e(a),o(o.S+o.F*i(function(){a(1)}),"Object",n)}},"4ece":function(t,e,a){a("6baa"),t.exports=a("0ce3").Object.getOwnPropertySymbols},"591a":function(t,e,a){t.exports=a("0b73")},"6baa":function(t,e,a){"use strict";var o=a("a44e"),r=a("f56f"),i=a("c4fb"),n=a("8b19"),s=a("579e"),c=a("538c").KEY,l=a("362a"),u=a("9bdd"),d=a("b008"),p=a("8115"),f=a("ec1e"),m=a("9a3a"),v=a("0f03"),g=a("6db7"),b=a("2338"),h=a("ac38"),_=a("9e54"),y=a("c5f5"),P=a("40ef"),C=a("3d88"),w=a("09b3"),x=a("afdb"),O=a("acf5"),k=a("163f"),$=a("6496"),S=O.f,N=k.f,j=x.f,M=o.Symbol,D=o.JSON,E=D&&D.stringify,F="prototype",U=f("_hidden"),L=f("toPrimitive"),J={}.propertyIsEnumerable,A=u("symbol-registry"),I=u("symbols"),T=u("op-symbols"),W=Object[F],q="function"==typeof M,Q=o.QObject,B=!Q||!Q[F]||!Q[F].findChild,G=i&&l(function(){return 7!=w(N({},"a",{get:function(){return N(this,"a",{value:7}).a}})).a})?function(t,e,a){var o=S(W,e);o&&delete W[e],N(t,e,a),o&&t!==W&&N(W,e,o)}:N,H=function(t){var e=I[t]=w(M[F]);return e._k=t,e},K=q&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},Y=function(t,e,a){return t===W&&Y(T,e,a),h(t),e=P(e,!0),h(a),r(I,e)?(a.enumerable?(r(t,U)&&t[U][e]&&(t[U][e]=!1),a=w(a,{enumerable:C(0,!1)})):(r(t,U)||N(t,U,C(1,{})),t[U][e]=!0),G(t,e,a)):N(t,e,a)},z=function(t,e){h(t);var a,o=g(e=y(e)),r=0,i=o.length;while(i>r)Y(t,a=o[r++],e[a]);return t},R=function(t,e){return void 0===e?w(t):z(w(t),e)},V=function(t){var e=J.call(this,t=P(t,!0));return!(this===W&&r(I,t)&&!r(T,t))&&(!(e||!r(this,t)||!r(I,t)||r(this,U)&&this[U][t])||e)},X=function(t,e){if(t=y(t),e=P(e,!0),t!==W||!r(I,e)||r(T,e)){var a=S(t,e);return!a||!r(I,e)||r(t,U)&&t[U][e]||(a.enumerable=!0),a}},Z=function(t){var e,a=j(y(t)),o=[],i=0;while(a.length>i)r(I,e=a[i++])||e==U||e==c||o.push(e);return o},tt=function(t){var e,a=t===W,o=j(a?T:y(t)),i=[],n=0;while(o.length>n)!r(I,e=o[n++])||a&&!r(W,e)||i.push(I[e]);return i};q||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(a){this===W&&e.call(T,a),r(this,U)&&r(this[U],t)&&(this[U][t]=!1),G(this,t,C(1,a))};return i&&B&&G(W,t,{configurable:!0,set:e}),H(t)},s(M[F],"toString",function(){return this._k}),O.f=X,k.f=Y,a("cced").f=x.f=Z,a("8547").f=V,a("20e0").f=tt,i&&!a("5e21")&&s(W,"propertyIsEnumerable",V,!0),m.f=function(t){return H(f(t))}),n(n.G+n.W+n.F*!q,{Symbol:M});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),at=0;et.length>at;)f(et[at++]);for(var ot=$(f.store),rt=0;ot.length>rt;)v(ot[rt++]);n(n.S+n.F*!q,"Symbol",{for:function(t){return r(A,t+="")?A[t]:A[t]=M(t)},keyFor:function(t){if(!K(t))throw TypeError(t+" is not a symbol!");for(var e in A)if(A[e]===t)return e},useSetter:function(){B=!0},useSimple:function(){B=!1}}),n(n.S+n.F*!q,"Object",{create:R,defineProperty:Y,defineProperties:z,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),D&&n(n.S+n.F*(!q||l(function(){var t=M();return"[null]"!=E([t])||"{}"!=E({a:t})||"{}"!=E(Object(t))})),"JSON",{stringify:function(t){var e,a,o=[t],r=1;while(arguments.length>r)o.push(arguments[r++]);if(a=e=o[1],(_(e)||void 0!==t)&&!K(t))return b(e)||(e=function(t,e){if("function"==typeof a&&(e=a.call(this,t,e)),!K(e))return e}),o[1]=e,E.apply(D,o)}}),M[F][L]||a("21ef")(M[F],L,M[F].valueOf),d(M,"Symbol"),d(Math,"Math",!0),d(o.JSON,"JSON",!0)},"6db7":function(t,e,a){var o=a("6496"),r=a("20e0"),i=a("8547");t.exports=function(t){var e=o(t),a=r.f;if(a){var n,s=a(t),c=i.f,l=0;while(s.length>l)c.call(t,n=s[l++])&&e.push(n)}return e}},7709:function(t,e,a){t.exports=a("cd75")},"7cf7":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.getProducts(t.pagination.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),a("span",{staticClass:"sr-only"},[t._v("Previous")])])]),t._l(t.pagination.total_pages,function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pagination.current_page===e},on:{click:function(a){return a.preventDefault(),t.getProducts(e)}}},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v(t._s(e))])])}),a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_next},on:{click:function(e){return e.preventDefault(),t.getProducts(t.pagination.current_page+1)}}},[t._m(0)])],2)])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),a("span",{staticClass:"sr-only"},[t._v("Next")])])}],i={name:"Pagination",props:["pagination"],methods:{getProducts:function(t){this.$emit("getpagination",t)}}},n=i,s=a("4410"),c=Object(s["a"])(n,o,r,!1,null,null,null);e["a"]=c.exports},"800b":function(t,e,a){"use strict";var o=a("7709"),r=a.n(o),i=a("c475"),n=a.n(i),s=a("591a"),c=a.n(s),l=a("0384"),u=a.n(l);function d(t,e,a){return e in t?u()(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},o=c()(a);"function"===typeof n.a&&(o=o.concat(n()(a).filter(function(t){return r()(a,t).enumerable}))),o.forEach(function(e){d(t,e,a[e])})}return t}a.d(e,"a",function(){return p})},8547:function(t,e){e.f={}.propertyIsEnumerable},"9a3a":function(t,e,a){e.f=a("ec1e")},acf5:function(t,e,a){var o=a("8547"),r=a("3d88"),i=a("c5f5"),n=a("40ef"),s=a("f56f"),c=a("61f7"),l=Object.getOwnPropertyDescriptor;e.f=a("c4fb")?l:function(t,e){if(t=i(t),e=n(e,!0),c)try{return l(t,e)}catch(a){}if(s(t,e))return r(!o.f.call(t,e),t[e])}},afdb:function(t,e,a){var o=a("c5f5"),r=a("cced").f,i={}.toString,n="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return r(t)}catch(e){return n.slice()}};t.exports.f=function(t){return n&&"[object Window]"==i.call(t)?s(t):r(o(t))}},b357:function(t,e,a){var o=a("c5f5"),r=a("acf5").f;a("46ca")("getOwnPropertyDescriptor",function(){return function(t,e){return r(o(t),e)}})},c475:function(t,e,a){t.exports=a("4ece")},cced:function(t,e,a){var o=a("e541"),r=a("5ca5").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,r)}},cd75:function(t,e,a){a("b357");var o=a("0ce3").Object;t.exports=function(t,e){return o.getOwnPropertyDescriptor(t,e)}}}]);
//# sourceMappingURL=chunk-3dd1a473.602fe702.js.map