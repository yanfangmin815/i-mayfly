!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("@babel/runtime/helpers/classCallCheck"),require("@babel/runtime/helpers/createClass"));else if("function"==typeof define&&define.amd)define(["@babel/runtime/helpers/classCallCheck","@babel/runtime/helpers/createClass"],t);else{var r="object"==typeof exports?t(require("@babel/runtime/helpers/classCallCheck"),require("@babel/runtime/helpers/createClass")):t(e["@babel/runtime/helpers/classCallCheck"],e["@babel/runtime/helpers/createClass"]);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,(function(e,t){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=121)}({1:function(t,r){t.exports=e},121:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return a}));var n=r(1),i=r.n(n),s=r(2),u=r.n(s),a=function(){function e(){i()(this,e),this.config={},this.result={},this.data={}}return u()(e,[{key:"validate",value:function(e){for(var t in console.log(e),console.log(this.config),this.data=e,this.result={},e)if(e.hasOwnProperty(t)){var r=e[t],n=this.validateItem(t,r);n&&(this.result[t]=n)}return console.log(this.result),this.result}},{key:"validateItem",value:function(t,r){var n=this.config[t];if(!n)return!1;for(var i={key:t,isValid:!0,message:[]},s=0;s<n.length;s++){var u=n[s];if(!e.types[u].validate.call(this,r)){var a=e.types[u].instruction;i.isValid=!1,i.message.push(a)}}return i}},{key:"isSubmit",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;for(var t in console.log("Debug",this.result,e),e&&this.validate(e),this.data)if(void 0!==this.result[t]&&!this.result[t].isValid)return!1;return!0}},{key:"formatRes",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",";return this.result[e]&&this.result[e].message.join(t)}},{key:"clear",value:function(){this.result={}}}]),e}();a.types={},a.types.isEmpty={validate:function(e){return""!==e},instruction:"不能为空"},a.types.isArrayEmpty={validate:function(e){return 0!==e.length},instruction:"请作出合适的选择"},a.types.isSDK={validate:function(e){return/^\w*.jar*$/.test(e)},instruction:"文件不合法，仅传jar"},a.types.isInt={validate:function(e){return/^[1-9]\d*$/.test(e)},instruction:"必须为整数"},a.types.isName={validate:function(e){return/^[\u4E00-\u9FA5A-Za-z0-9_]{1,10}$/.test(e)},instruction:"十个字以内，不能包含特殊字符"},a.types.isEmail={validate:function(e){return/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e)},instruction:"邮箱格式不正确"},a.types.isPw={validate:function(e){return/^[!@#$%^&*_A-Za-z0-9]{8,15}$/.test(e)},instruction:"由数组，字母，_@#$等组成，不少于8位"},a.types.isPwAgain={validate:function(e){return console.log(this),!!this.data.password&&this.data.password===e},instruction:"重复输入的密码不相同"},a.types.isValidString={validate:function(e){return!isNaN(e)},instruction:"invail Number value"}},2:function(e,r){e.exports=t}})}));