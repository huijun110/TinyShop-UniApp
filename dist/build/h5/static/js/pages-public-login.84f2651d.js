(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-public-login"],{"4f30":function(e,t,i){"use strict";var n=i("85c4"),a=i.n(n);a.a},"5d16":function(e,t,i){"use strict";var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("8e6e"),i("ac6a"),i("456d");var a=n(i("bd86"));i("96cf");var o=n(i("3b8d")),r=i("7ded"),s=n(i("5028"));function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function d(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(Object(i),!0).forEach((function(t){(0,a.default)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var l={data:function(){return{loginParams:{mobile:"",code:"",password:""},reqBody:{},codeSeconds:0,loginByPass:!0,smsCodeBtnDisabled:!0,userInfo:null}},onLoad:function(){var e=(0,s.default)().valueOf()/1e3-uni.getStorageSync("loginSmsCodeTime");e<60&&e>0?(this.codeSeconds=this.$mConstDataConfig.sendCodeTime-parseInt(e,10),this.handleSmsCodeTime(this.codeSeconds)):(this.codeSeconds=this.$mConstDataConfig.sendCodeTime,this.smsCodeBtnDisabled=!1,uni.removeStorageSync("loginSmsCodeTime")),this.userInfo=uni.getStorageSync("wechatUserInfo")},methods:{loginTest:function(e,t){this.loginParams.mobile=e,this.loginParams.password=t},getSmsCode:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(){var t,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.reqBody["mobile"]=this.loginParams["mobile"],t=this.$mGraceChecker.check(this.reqBody,this.$mFormRule.sendCodeRule),t){e.next=5;break}return this.$mHelper.toast(this.$mGraceChecker.error),e.abrupt("return");case 5:return e.next=7,this.$http.post(r.smsCode,{mobile:this.loginParams.mobile,usage:"login"}).then((function(e){i.$mHelper.toast("验证码发送成功, 验证码是".concat(e.data)),i.smsCodeBtnDisabled=!0,uni.setStorageSync("loginSmsCodeTime",e.timestamp),i.handleSmsCodeTime(59)}));case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleSmsCodeTime:function(e){var t=this,i=setInterval((function(){0===e?(clearInterval(i),t.smsCodeBtnDisabled=!1):(t.codeSeconds=e,t.smsCodeBtnDisabled=!0,e--)}),1e3)},blurMobileChange:function(e){this.mobile=e.detail.value},showLoginBySmsCode:function(){this.loginByPass=!this.loginByPass},navBack:function(){this.$mRouter.back()},navTo:function(e){this.$mRouter.push({route:e})},toHome:function(){this.$mRouter.reLaunch({route:"/pages/index/index"})},toLogin:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(){var t,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.reqBody["mobile"]=this.loginParams["mobile"],this.loginByPass?(i=r.loginByPass,this.reqBody["password"]=this.loginParams["password"],t=this.$mGraceChecker.check(this.reqBody,this.$mFormRule.loginByPassRule)):(this.reqBody["code"]=this.loginParams["code"],i=r.loginBySmsCode,t=this.$mGraceChecker.check(this.reqBody,this.$mFormRule.loginByCodeRule)),t){e.next=5;break}return this.$mHelper.toast(this.$mGraceChecker.error),e.abrupt("return");case 5:this.reqBody.group="tinyShopH5",this.handleLogin(this.reqBody,i);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleLogin:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(t,i){var n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.post(i,t).then((function(e){if(n.$mHelper.toast("恭喜您，登录成功！"),n.$mStore.commit("login",e.data),n.userInfo){var t={oauth_client:"wechat"},i=JSON.parse(n.userInfo);n.$http.post(r.authLogin,d({},i,{},t,{gender:i.sex||i.gender,oauth_client_user_id:i.openid||i.openId,head_portrait:i.headimgurl||i.avatarUrl}))}n.$mPayment.wxConfigH5();var a=uni.getStorageSync("backToPage");if(a)return-1!==a.indexOf("/pages/user/user")||-1!==a.indexOf("/pages/cart/cart")||-1!==a.indexOf("/pages/index/index")||-1!==a.indexOf("/pages/category/category")?n.$mRouter.reLaunch(JSON.parse(a)):n.$mRouter.redirectTo(JSON.parse(a)),uni.removeStorageSync("backToPage"),void uni.removeStorageSync("wechatUserInfo");n.$mRouter.reLaunch({route:"/pages/user/user"})}));case 2:case"end":return e.stop()}}),e,this)})));function t(t,i){return e.apply(this,arguments)}return t}()}};t.default=l},"628b":function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"container"},[i("v-uni-text",{staticClass:"back-btn iconfont iconzuojiantou-up",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navBack.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"right-top-sign"}),i("v-uni-view",{staticClass:"wrapper"},[i("v-uni-view",{staticClass:"left-top-sign"},[e._v("LOGIN")]),i("v-uni-view",{staticClass:"welcome"},[e._v("欢迎回来！")]),i("v-uni-view",{staticClass:"input-content"},[i("v-uni-view",{staticClass:"input-item"},[i("v-uni-text",{staticClass:"tit"},[e._v("手机号码")]),i("v-uni-input",{attrs:{type:"number",name:"mobile",placeholder:"请输入手机号码",maxlength:"11"},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e.blurMobileChange.apply(void 0,arguments)}},model:{value:e.loginParams.mobile,callback:function(t){e.$set(e.loginParams,"mobile",t)},expression:"loginParams.mobile"}})],1),e.loginByPass?i("v-uni-view",{staticClass:"input-item"},[i("v-uni-text",{staticClass:"tit"},[e._v("密码")]),i("v-uni-input",{attrs:{name:"password",type:"password",placeholder:"请输入密码",maxlength:"20"},model:{value:e.loginParams.password,callback:function(t){e.$set(e.loginParams,"password",t)},expression:"loginParams.password"}})],1):e._e(),e.loginByPass?e._e():i("v-uni-view",{staticClass:"input-item input-item-sms-code"},[i("v-uni-view",{staticClass:"input-wrapper"},[i("v-uni-view",{staticClass:"rf-input-wrapper"},[i("v-uni-view",{staticClass:"tit"},[e._v("验证码")]),i("v-uni-input",{attrs:{type:"number",placeholder:"请输入验证码",maxlength:"4","data-key":"mobile"},model:{value:e.loginParams.code,callback:function(t){e.$set(e.loginParams,"code",t)},expression:"loginParams.code"}})],1),i("v-uni-view",{staticClass:"sms-code-btn",attrs:{disabled:e.smsCodeBtnDisabled},on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.getSmsCode.apply(void 0,arguments)}}},[e.smsCodeBtnDisabled?i("v-uni-text",{staticClass:"sms-code-resend"},[e._v(e._s("重新发送 ("+e.codeSeconds+")"))]):i("v-uni-text",[e._v("获取验证码")])],1)],1)],1),i("v-uni-button",{staticClass:"confirm-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toLogin.apply(void 0,arguments)}}},[e._v("登录")])],1),i("v-uni-view",{staticClass:"forget-section",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showLoginBySmsCode.apply(void 0,arguments)}}},[e._v(e._s(e.loginByPass?"验证码登录":"密码登录"))]),i("v-uni-view",{staticClass:"forget-section",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navTo("/pages/public/password")}}},[e._v("忘记密码?")])],1),i("v-uni-view",{staticClass:"register-section"},[e._v("还没有账号?"),i("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navTo("/pages/public/register")}}},[e._v("马上注册")]),e._v("或者"),i("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toHome.apply(void 0,arguments)}}},[e._v("返回主页")])],1)],1)},o=[]},"85c4":function(e,t,i){var n=i("f2be");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("0558ccbb",n,!0,{sourceMap:!1,shadowMode:!1})},dece:function(e,t,i){"use strict";i.r(t);var n=i("5d16"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},e334:function(e,t,i){"use strict";i.r(t);var n=i("628b"),a=i("dece");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("4f30");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"e23e78fa",null,!1,n["a"],r);t["default"]=c.exports},f2be:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'uni-page-body[data-v-e23e78fa]{background:#fff}.container[data-v-e23e78fa]{padding-top:115px;position:relative;width:100vw;height:100vh;overflow:hidden;background:#fff}.wrapper[data-v-e23e78fa]{position:relative;z-index:90;background:#fff;padding-bottom:%?40?%}.back-btn[data-v-e23e78fa]{position:absolute;left:%?40?%;z-index:9999;padding-top:0;top:%?40?%;font-size:%?40?%;color:#303133}.left-top-sign[data-v-e23e78fa]{font-size:%?120?%;color:#f8f8f8;position:relative;left:%?-16?%}.right-top-sign[data-v-e23e78fa]{position:absolute;top:%?80?%;right:%?-30?%;z-index:95}.right-top-sign[data-v-e23e78fa]:before,.right-top-sign[data-v-e23e78fa]:after{display:block;content:"";width:%?400?%;height:%?80?%;background:#b4f3e2}.right-top-sign[data-v-e23e78fa]:before{-webkit-transform:rotate(50deg);transform:rotate(50deg);border-radius:0 50px 0 0}.right-top-sign[data-v-e23e78fa]:after{position:absolute;right:%?-198?%;top:0;-webkit-transform:rotate(-50deg);transform:rotate(-50deg);border-radius:50px 0 0 0}.left-bottom-sign[data-v-e23e78fa]{position:absolute;left:%?-270?%;bottom:%?-320?%;border:%?100?% solid #d0d1fd;border-radius:50%;padding:%?180?%}.welcome[data-v-e23e78fa]{position:relative;left:%?50?%;top:%?-90?%;font-size:%?46?%;color:#555;text-shadow:1px 0 1px rgba(0,0,0,.3)}.input-content[data-v-e23e78fa]{padding:0 %?60?%}.input-item[data-v-e23e78fa]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0 %?30?%;background:#f8f6fc;height:%?120?%;border-radius:4px;margin-bottom:%?50?%}.input-item[data-v-e23e78fa]:last-child{margin-bottom:0}.input-item .tit[data-v-e23e78fa]{height:%?50?%;line-height:%?56?%;font-size:%?26?%;color:#606266}.input-item uni-input[data-v-e23e78fa]{height:%?60?%;font-size:%?30?%;color:#303133;width:100%}.input-item-sms-code[data-v-e23e78fa]{position:relative;width:100%}.input-item-sms-code .sms-code-btn[data-v-e23e78fa]{position:absolute;color:#111;right:%?20?%;bottom:%?20?%;font-size:%?28?%}.input-item-sms-code .sms-code-resend[data-v-e23e78fa]{color:#999}.input-item-sms-code .sms-code-btn[data-v-e23e78fa]:after{border:none;background-color:initial}.confirm-btn[data-v-e23e78fa]{width:%?630?%;height:%?76?%;line-height:%?76?%;border-radius:50px;margin-top:%?70?%;background:#fa436a;color:#fff;font-size:%?32?%}.confirm-btn[data-v-e23e78fa]:after{border-radius:100px}.forget-section[data-v-e23e78fa]{font-size:%?26?%;color:#4399fc;text-align:center;margin-top:%?40?%}.register-section[data-v-e23e78fa]{margin:%?30?% 0 %?50?% 0;width:100%;font-size:%?26?%;color:#606266;text-align:center}.register-section uni-text[data-v-e23e78fa]{color:#4399fc;margin-left:%?10?%}.register-section uni-text[data-v-e23e78fa]:first-child{margin-right:%?10?%}.btn-group[data-v-e23e78fa]{display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:%?20?%}body.?%PAGE?%[data-v-e23e78fa]{background:#fff}',""]),e.exports=t}}]);