(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-account-integral"],{"1af6":function(A,e,t){var a=t("63b6");a(a.S,"Array",{isArray:t("9003")})},"1f5f":function(A,e,t){"use strict";var a=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("8e6e"),t("ac6a"),t("456d");var i=a(t("75fc")),r=a(t("bd86"));t("96cf");var n=a(t("3b8d"));t("6b54");var o=t("802d"),d=a(t("f97d")),s=a(t("8f09"));function l(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,a)}return t}function c(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){(0,r.default)(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}var u={name:"Integral",components:{rfLoadMore:d.default},data:function(){return{navList:[{name:"分值明细"},{name:"分值提升"}],current:0,integralList:[],loadingType:"more",page:1,userInfo:{},loading:!0}},onLoad:function(){this.initData()},filters:{time:function(A){return(0,s.default)(1e3*A).format("YYYY-MM-DD HH:mm:ss")},numFilter:function(A){return A>=0?"+".concat(A.toString()):A}},onReachBottom:function(){this.page++,this.getIntegralListList()},methods:{toCategory:function(){uni.reLaunch({url:"/pages/category/category"})},nav:function(A){this.loading=!0,this.current=A,this.page=1,this.integralList.length=0,this.getIntegralListList()},initData:function(){this.token=uni.getStorageSync("accessToken")||void 0,this.userInfo=uni.getStorageSync("userInfo")||void 0,this.token&&this.getIntegralListList()},getIntegralListList:function(){var A=(0,n.default)(regeneratorRuntime.mark((function A(){var e,t=this;return regeneratorRuntime.wrap((function(A){while(1)switch(A.prev=A.next){case 0:return e={},e.page=this.page,A.next=4,this.$get("".concat(o.creditsLogList),c({},e)).then((function(A){t.loading=!1,t.loadingType=10===A.data.length?"more":"nomore",t.integralList=[].concat((0,i.default)(t.integralList),(0,i.default)(A.data))})).catch((function(){t.loading=!1}));case 4:case"end":return A.stop()}}),A,this)})));function e(){return A.apply(this,arguments)}return e}()}};e.default=u},"1fda":function(A,e,t){var a=t("a99d");"string"===typeof a&&(a=[[A.i,a,""]]),a.locals&&(A.exports=a.locals);var i=t("4f06").default;i("1e05774e",a,!0,{sourceMap:!1,shadowMode:!1})},"20fd":function(A,e,t){"use strict";var a=t("d9f6"),i=t("aebd");A.exports=function(A,e,t){e in A?a.f(A,e,i(0,t)):A[e]=t}},"26a2":function(A,e,t){"use strict";var a=t("1fda"),i=t.n(a);i.a},"3c6b":function(A,e,t){var a=t("a89e");"string"===typeof a&&(a=[[A.i,a,""]]),a.locals&&(A.exports=a.locals);var i=t("4f06").default;i("28f754ce",a,!0,{sourceMap:!1,shadowMode:!1})},"549b":function(A,e,t){"use strict";var a=t("d864"),i=t("63b6"),r=t("241e"),n=t("b0dc"),o=t("3702"),d=t("b447"),s=t("20fd"),l=t("7cd6");i(i.S+i.F*!t("4ee1")((function(A){Array.from(A)})),"Array",{from:function(A){var e,t,i,c,u=r(A),v="function"==typeof this?this:Array,f=arguments.length,b=f>1?arguments[1]:void 0,p=void 0!==b,m=0,g=l(u);if(p&&(b=a(b,f>2?arguments[2]:void 0,2)),void 0==g||v==Array&&o(g))for(e=d(u.length),t=new v(e);e>m;m++)s(t,m,p?b(u[m],m):u[m]);else for(c=g.call(u),t=new v;!(i=c.next()).done;m++)s(t,m,p?n(c,b,[i.value,m],!0):i.value);return t.length=m,t}})},"54a1":function(A,e,t){t("6c1c"),t("1654"),A.exports=t("95d5")},6857:function(A,e){A.exports="data:image/jpeg;base64,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"},6872:function(A,e,t){"use strict";t.r(e);var a=t("b9cb"),i=t.n(a);for(var r in a)"default"!==r&&function(A){t.d(e,A,(function(){return a[A]}))}(r);e["default"]=i.a},"75fc":function(A,e,t){"use strict";t.r(e);var a=t("a745"),i=t.n(a);function r(A){if(i()(A)){for(var e=0,t=new Array(A.length);e<A.length;e++)t[e]=A[e];return t}}var n=t("774e"),o=t.n(n),d=t("c8bb"),s=t.n(d);function l(A){if(s()(Object(A))||"[object Arguments]"===Object.prototype.toString.call(A))return o()(A)}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(A){return r(A)||l(A)||c()}t.d(e,"default",(function(){return u}))},"774e":function(A,e,t){A.exports=t("d2d5")},"802d":function(A,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.orderCustomerRefundClose=e.orderCustomerRefundApply=e.orderCustomerSalesReturn=e.rechargeConfigIndex=e.thirdPartyAuthDelete=e.thirdPartyAuthList=e.opinionDetail=e.opinionCreate=e.opinionList=e.uploadBase64Image=e.uploadImage=e.orderInvoiceList=e.invoiceDel=e.invoiceDefault=e.invoiceDetail=e.invoiceUpdate=e.invoiceCreate=e.invoiceList=e.evaluateAgain=e.evaluateCreate=e.creditsLogList=e.collectList=e.footPrintDel=e.footPrintList=e.couponReceive=e.orderTakeDelivery=e.orderDelete=e.orderDetail=e.orderProductSalesReturn=e.closeOrderRefundApply=e.orderRefundApply=e.orderList=e.couponDetail=e.couponClear=e.myCouponList=e.couponList=e.addressDelete=e.addressUpdate=e.addressDetail=e.addressDefault=e.addressCreate=e.addressList=e.memberUpdate=e.memberInfo=void 0;var a=t("3e3e"),i="/tiny-shop/v1/member/member/index";e.memberInfo=i;var r="/tiny-shop/v1/member/member/update";e.memberUpdate=r;var n="/tiny-shop/v1/member/address/index";e.addressList=n;var o="/tiny-shop/v1/member/address/default";e.addressDefault=o;var d="/tiny-shop/v1/member/address/view";e.addressDetail=d;var s="/tiny-shop/v1/member/address/create";e.addressCreate=s;var l="/tiny-shop/v1/member/address/update";e.addressUpdate=l;var c="/tiny-shop/v1/member/address/delete";e.addressDelete=c;var u="/tiny-shop/v1/marketing/coupon-type/index";e.couponList=u;var v="/tiny-shop/v1/member/coupon/index";e.myCouponList=v;var f="/tiny-shop/v1/marketing/coupon-type/view";e.couponDetail=f;var b="/tiny-shop/v1/marketing/coupon-type/create";e.couponReceive=b;var p="/tiny-shop/v1/member/coupon/clear";e.couponClear=p;var m="/tiny-shop/v1/member/order/index";e.orderList=m;var g="/tiny-shop/v1/member/order/take-delivery";e.orderTakeDelivery=g;var h="/tiny-shop/v1/member/order-product/refund-apply";e.orderRefundApply=h;var y="/tiny-shop/v1/member/order-product/refund-sales-return";e.orderProductSalesReturn=y;var w="/tiny-shop/v1/member/order-product/refund-close";e.closeOrderRefundApply=w;var x="/tiny-shop/v1/member/order/view";e.orderDetail=x;var k="/tiny-shop/v1/member/order/delete";e.orderDelete=k;var C="/tiny-shop/v1/member/footprint/index";e.footPrintList=C;var B="/tiny-shop/v1/member/footprint/delete";e.footPrintDel=B;var I="/tiny-shop/v1/member/collect/index";e.collectList=I;var Q="/tiny-shop/v1/member/credits-log/index";e.creditsLogList=Q;var U="/tiny-shop/v1/member/evaluate/create";e.evaluateCreate=U;var D="/tiny-shop/v1/member/evaluate/again";e.evaluateAgain=D;var L="/tiny-shop/v1/member/invoice/index";e.invoiceList=L;var R="/tiny-shop/v1/member/invoice/create";e.invoiceCreate=R;var E="/tiny-shop/v1/member/invoice/update";e.invoiceUpdate=E;var F="/tiny-shop/v1/member/invoice/view";e.invoiceDetail=F;var K="/tiny-shop/v1/member/invoice/default";e.invoiceDefault=K;var _="/tiny-shop/v1/member/invoice/delete";e.invoiceDel=_;var j="/tiny-shop/v1/member/order-invoice/index";e.orderInvoiceList=j;var S="/tiny-shop/v1/member/opinion/index";e.opinionList=S;var G="/tiny-shop/v1/member/opinion/create";e.opinionCreate=G;var M="/tiny-shop/v1/member/opinion/view";e.opinionDetail=M;var X="/tiny-shop/v1/member/auth/index";e.thirdPartyAuthList=X;var P="/tiny-shop/v1/member/auth/delete";e.thirdPartyAuthDelete=P;var O="/tiny-shop/v1/member/recharge-config/index";e.rechargeConfigIndex=O;var N="/tiny-shop/v1/member/order-customer/apply";e.orderCustomerRefundApply=N;var z="/tiny-shop/v1/member/order-customer/sales-return";e.orderCustomerSalesReturn=z;var Y="/tiny-shop/v1/member/order-customer/close";e.orderCustomerRefundClose=Y;var H="".concat(a.baseUrl,"/tiny-shop/v1/common/file/images");e.uploadImage=H;var Z="".concat(a.baseUrl,"/tiny-shop/v1/common/file/base64");e.uploadBase64Image=Z},"8bcf":function(A,e,t){"use strict";var a=function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("v-uni-view",{staticClass:"integral"},[t("v-uni-view",{staticClass:"header"},[t("v-uni-view",{staticClass:"title"},[A._v("当前积分")]),t("v-uni-text",{staticClass:"num"},[A._v(A._s(A.userInfo&&A.userInfo.account&&A.userInfo.account.user_integral||"0"))]),t("v-uni-view",{staticClass:"line"}),t("v-uni-view",{staticClass:"nav"},[t("v-uni-view",{staticClass:"item"},[t("v-uni-text",{staticClass:"num"},[A._v(A._s(A.userInfo&&A.userInfo.account&&A.userInfo.account.accumulate_integral||"0"))]),t("v-uni-text",{staticClass:"title"},[A._v("累计积分")])],1),t("v-uni-view",{staticClass:"item"},[t("v-uni-text",{staticClass:"num"},[A._v(A._s(-(A.userInfo&&A.userInfo.account&&A.userInfo.account.consume_integral)||"0"))]),t("v-uni-text",{staticClass:"title"},[A._v("累计消费")])],1),t("v-uni-view",{staticClass:"item"},[t("v-uni-text",{staticClass:"num"},[A._v(A._s(A.userInfo&&A.userInfo.frozen_integral&&A.userInfo.account.frozen_integral||"0"))]),t("v-uni-text",{staticClass:"title"},[A._v("冻结积分")])],1)],1),t("v-uni-view",{staticClass:"tab"},A._l(A.navList,(function(e,a){return t("v-uni-view",{key:a,staticClass:"item",class:A.current===a?"on":"",on:{click:function(e){e=A.$handleEvent(e),A.nav(a)}}},[A._v(A._s(e.name))])})),1)],1),t("v-uni-view",{staticClass:"wrapper"},[t("v-uni-view",{staticClass:"list1",attrs:{hidden:0!==A.current}},[t("v-uni-view",{staticClass:"tip acea-row row-middle"},[t("span",{staticClass:"iconfont icon-shuoming"}),A._v("提示：积分可用来兑换指定商品")]),A._l(A.integralList,(function(e,a){return t("v-uni-view",{key:a,staticClass:"list b-b"},[t("v-uni-view",{staticClass:"wrapper"},[t("v-uni-view",{staticClass:"address-box"},[A._v(A._s(e.remark))]),t("v-uni-view",{staticClass:"u-box"},[A._v(A._s(A._f("time")(e.created_at)))])],1),t("v-uni-text",{staticClass:"change-num",class:parseFloat(e.num)>=0?"change-num-add":"change-num-reduce"},[A._v(A._s(A._f("numFilter")(e.num)))])],1)})),t("rf-load-more",{staticClass:"load-more",attrs:{status:A.loadingType}})],2),t("v-uni-view",{staticClass:"list2",attrs:{hidden:1!==A.current}},[t("v-uni-view",{staticClass:"item"},[t("v-uni-view",{staticClass:"pictrue"},[t("v-uni-image",{attrs:{src:"/static/score.png",mode:"aspectFill"}})],1),t("v-uni-text",{staticClass:"name"},[A._v("购买商品可获得积分奖励")]),t("v-uni-view",{staticClass:"earn",on:{click:function(e){e=A.$handleEvent(e),A.toCategory(e)}}},[A._v("赚积分")])],1)],1)],1),A.loading?t("rf-loading"):A._e()],1)},i=[];t.d(e,"a",(function(){return a})),t.d(e,"b",(function(){return i}))},"91c7":function(A,e,t){"use strict";t.r(e);var a=t("8bcf"),i=t("f0fa");for(var r in i)"default"!==r&&function(A){t.d(e,A,(function(){return i[A]}))}(r);t("cd05");var n=t("2877"),o=Object(n["a"])(i["default"],a["a"],a["b"],!1,null,"52b9ad43",null);e["default"]=o.exports},"95d5":function(A,e,t){var a=t("40c3"),i=t("5168")("iterator"),r=t("481b");A.exports=t("584a").isIterable=function(A){var e=Object(A);return void 0!==e[i]||"@@iterator"in e||r.hasOwnProperty(a(e))}},a745:function(A,e,t){A.exports=t("f410")},a89e:function(A,e,t){var a=t("24fb"),i=t("1de5"),r=t("6857");e=a(!1);var n=i(r);e.push([A.i,"uni-page-body[data-v-52b9ad43]{background-color:#fff}.integral .header[data-v-52b9ad43]{background-image:url("+n+");background-repeat:no-repeat;background-size:100% 100%;width:100%;height:%?420?%;font-size:%?28?%;color:#fff;padding:%?20?% 0;text-align:center;position:relative}.integral .header .title[data-v-52b9ad43]{font-size:%?24?%;margin:%?10?% 0}.integral .header .num[data-v-52b9ad43]{font-size:%?52?%;font-weight:lighter;line-height:1}.integral .header .line[data-v-52b9ad43]{width:10%;height:%?3?%;background-color:#fff;margin:%?20?% auto %?30?%}.integral .header .nav[data-v-52b9ad43]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex}.integral .header .nav .item[data-v-52b9ad43]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.integral .header .nav .item .num[data-v-52b9ad43]{font-size:%?36?%;display:block;line-height:1}.integral .header .tab[data-v-52b9ad43]{position:absolute;bottom:%?-2?%;display:-webkit-box;display:-webkit-flex;display:flex;width:80%;margin:0 10%;border-radius:%?20?% %?20?% 0 0;background-color:#f7f7f7;height:%?80?%;line-height:%?80?%;font-size:%?28?%;color:#bbb}.integral .header .tab .item[data-v-52b9ad43]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;line-height:%?80?%}.integral .header .tab .on[data-v-52b9ad43]{background-color:#fff;color:#e93323;font-weight:700;border-radius:%?20?% 0 0 0}.integral .header .tab .on[data-v-52b9ad43]:last-child{border-radius:0 %?20?% 0 0}.wrapper .list1[data-v-52b9ad43]{background-color:#fff;padding:%?30?% %?20?%}.wrapper .list1 .tip[data-v-52b9ad43]{font-size:%?24?%;width:90%;margin:0 5%;height:%?64?%;line-height:%?64?%;border-radius:%?30?%;background-color:#fff5e2;border:1px solid #ffeac1;color:#c8a86b;text-align:center}.wrapper .list1 .list[data-v-52b9ad43]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?% %?36?%;background:#fff;position:relative}.wrapper .list1 .list .wrapper[data-v-52b9ad43]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1}.wrapper .list1 .list .wrapper .address-box[data-v-52b9ad43]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;color:#303133}.wrapper .list1 .list .wrapper .u-box[data-v-52b9ad43]{color:#909399;font-size:%?24?%}.wrapper .list1 .list .change-num[data-v-52b9ad43]{font-size:%?36?%;color:#606266;font-weight:lighter}.wrapper .list1 .list .change-num-add[data-v-52b9ad43]{color:#16ac57}.wrapper .list1 .list .change-num-reduce[data-v-52b9ad43]{color:#fc4141}.wrapper .list2[data-v-52b9ad43]{width:100%;margin:%?20?% 0}.wrapper .list2 .item[data-v-52b9ad43]{background-image:-webkit-linear-gradient(left,#fff7e7,#fffdf9);background-image:linear-gradient(90deg,#fff7e7 0,#fffdf9);width:90%;margin:%?10?% 5%;height:%?120?%;line-height:%?120?%;position:relative;border-radius:%?20?%;padding:0 %?20?%;display:-webkit-box;display:-webkit-flex;display:flex}.wrapper .list2 .item .pictrue[data-v-52b9ad43]{width:%?60?%;height:%?100?%;margin:%?20?% 0}.wrapper .list2 .item .pictrue uni-image[data-v-52b9ad43]{width:80%;height:80%}.wrapper .list2 .item .name[data-v-52b9ad43]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?24?%;font-weight:700;color:#c8a86b;margin:0 %?20?%}.wrapper .list2 .item .earn[data-v-52b9ad43]{font-size:%?24?%;color:#c8a86b;border:%?2?% solid #c8a86b;text-align:center;height:%?48?%;margin:%?36?% 0;width:%?120?%;border-radius:%?10?%}body.?%PAGE?%[data-v-52b9ad43]{background-color:#fff}",""]),A.exports=e},a99d:function(A,e,t){var a=t("24fb");e=a(!1),e.push([A.i,".rf-load-more[data-v-dfbb99a2]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center\n\t/*position: fixed;*/\n\t/*bottom: 5upx;*/\n\t/*text-align: center;*/}.rf-load-more__text[data-v-dfbb99a2]{font-size:%?28?%;color:#999}.rf-load-more__img[data-v-dfbb99a2]{height:24px;width:24px;margin-right:10px}.rf-load-more__img>uni-view[data-v-dfbb99a2]{position:absolute}.rf-load-more__img>uni-view uni-view[data-v-dfbb99a2]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-dfbb99a2 1.56s ease infinite;animation:load-data-v-dfbb99a2 1.56s ease infinite}.rf-load-more__img>uni-view uni-view[data-v-dfbb99a2]:first-child{-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.rf-load-more__img>uni-view uni-view[data-v-dfbb99a2]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.rf-load-more__img>uni-view uni-view[data-v-dfbb99a2]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.rf-load-more__img>uni-view uni-view[data-v-dfbb99a2]:nth-child(4){top:11px;left:0}.load1[data-v-dfbb99a2],.load2[data-v-dfbb99a2],.load3[data-v-dfbb99a2]{height:24px;width:24px}.load2[data-v-dfbb99a2]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-dfbb99a2]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-dfbb99a2]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-dfbb99a2]:first-child{-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-dfbb99a2]:first-child{-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-dfbb99a2]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-dfbb99a2]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-dfbb99a2]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-dfbb99a2]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-dfbb99a2]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-dfbb99a2]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-dfbb99a2]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-dfbb99a2]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-dfbb99a2]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-dfbb99a2{0%{opacity:1}to{opacity:.2}}",""]),A.exports=e},b9cb:function(A,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"rf-load-more",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{}}}},data:function(){return{}}};e.default=a},c8bb:function(A,e,t){A.exports=t("54a1")},cd05:function(A,e,t){"use strict";var a=t("3c6b"),i=t.n(a);i.a},d2d5:function(A,e,t){t("1654"),t("549b"),A.exports=t("584a").Array.from},f0fa:function(A,e,t){"use strict";t.r(e);var a=t("1f5f"),i=t.n(a);for(var r in a)"default"!==r&&function(A){t.d(e,A,(function(){return a[A]}))}(r);e["default"]=i.a},f410:function(A,e,t){t("1af6"),A.exports=t("584a").Array.isArray},f57d:function(A,e,t){"use strict";var a=function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("v-uni-view",{staticClass:"rf-load-more"},["loading"===A.status&&A.showIcon?t("v-uni-view",{staticClass:"rf-load-more__img"},[t("v-uni-view",{staticClass:"load1"},[t("v-uni-view",{style:{background:A.color}}),t("v-uni-view",{style:{background:A.color}}),t("v-uni-view",{style:{background:A.color}}),t("v-uni-view",{style:{background:A.color}})],1),t("v-uni-view",{staticClass:"load2"},[t("v-uni-view",{style:{background:A.color}}),t("v-uni-view",{style:{background:A.color}}),t("v-uni-view",{style:{background:A.color}}),t("v-uni-view",{style:{background:A.color}})],1),t("v-uni-view",{staticClass:"load3"},[t("v-uni-view",{style:{background:A.color}}),t("v-uni-view",{style:{background:A.color}}),t("v-uni-view",{style:{background:A.color}}),t("v-uni-view",{style:{background:A.color}})],1)],1):A._e(),t("v-uni-view",{staticClass:"cu-load",class:"more"===A.status?"loading":"over"})],1)},i=[];t.d(e,"a",(function(){return a})),t.d(e,"b",(function(){return i}))},f97d:function(A,e,t){"use strict";t.r(e);var a=t("f57d"),i=t("6872");for(var r in i)"default"!==r&&function(A){t.d(e,A,(function(){return i[A]}))}(r);t("26a2");var n=t("2877"),o=Object(n["a"])(i["default"],a["a"],a["b"],!1,null,"dfbb99a2",null);e["default"]=o.exports}}]);