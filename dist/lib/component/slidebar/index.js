!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("react"),require("@babel/runtime/helpers/classCallCheck"),require("@babel/runtime/helpers/createClass"),require("@babel/runtime/helpers/possibleConstructorReturn"),require("@babel/runtime/helpers/getPrototypeOf"),require("@babel/runtime/helpers/inherits"));else if("function"==typeof define&&define.amd)define(["react","@babel/runtime/helpers/classCallCheck","@babel/runtime/helpers/createClass","@babel/runtime/helpers/possibleConstructorReturn","@babel/runtime/helpers/getPrototypeOf","@babel/runtime/helpers/inherits"],r);else{var t="object"==typeof exports?r(require("react"),require("@babel/runtime/helpers/classCallCheck"),require("@babel/runtime/helpers/createClass"),require("@babel/runtime/helpers/possibleConstructorReturn"),require("@babel/runtime/helpers/getPrototypeOf"),require("@babel/runtime/helpers/inherits")):r(e.react,e["@babel/runtime/helpers/classCallCheck"],e["@babel/runtime/helpers/createClass"],e["@babel/runtime/helpers/possibleConstructorReturn"],e["@babel/runtime/helpers/getPrototypeOf"],e["@babel/runtime/helpers/inherits"]);for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(window,(function(e,r,t,n,i,l){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var i in e)t.d(n,i,function(r){return e[r]}.bind(null,i));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=74)}({0:function(r,t){r.exports=e},1:function(e,t){e.exports=r},2:function(e,r){e.exports=t},3:function(e,r){e.exports=n},4:function(e,r){e.exports=i},5:function(e,r){e.exports=l},74:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return m}));var n=t(1),i=t.n(n),l=t(2),o=t.n(l),s=t(3),u=t.n(s),a=t(4),p=t.n(a),c=t(5),b=t.n(c),h=t(0),f=t.n(h),m=function(e){function r(){var e;return i()(this,r),(e=u()(this,p()(r).call(this))).id=Math.random().toString(36).substring(2),e}return b()(r,e),o()(r,[{key:"render",value:function(){var e=this;return f.a.createElement("div",null,this.props.labelName?f.a.createElement("div",{className:"s0",style:{width:this.props.labelWidth||"96px"}},f.a.createElement("label",{htmlFor:this.id},this.props.labelName)):null,f.a.createElement("div",{style:{width:this.props.width||"384px"}},f.a.createElement("input",{id:this.props.id||this.id||"",onChange:function(r){return e.props.onChange&&e.props.onChange(r.target.value)},style:{width:this.props.width||"384px"},value:this.props.value||"",placeholder:this.props.placeholder||"",type:"text",className:"input-normal",maxLength:this.props.maxLength||"100"}),f.a.createElement("div",{className:"fs12 c-fail p-a pt2"},this.props.error&&this.props.error())))}}]),r}(h.Component)}})}));