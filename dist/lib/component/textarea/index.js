!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("react"),require("@babel/runtime/helpers/classCallCheck"),require("@babel/runtime/helpers/createClass"),require("@babel/runtime/helpers/possibleConstructorReturn"),require("@babel/runtime/helpers/getPrototypeOf"),require("@babel/runtime/helpers/inherits"));else if("function"==typeof define&&define.amd)define(["react","@babel/runtime/helpers/classCallCheck","@babel/runtime/helpers/createClass","@babel/runtime/helpers/possibleConstructorReturn","@babel/runtime/helpers/getPrototypeOf","@babel/runtime/helpers/inherits"],r);else{var t="object"==typeof exports?r(require("react"),require("@babel/runtime/helpers/classCallCheck"),require("@babel/runtime/helpers/createClass"),require("@babel/runtime/helpers/possibleConstructorReturn"),require("@babel/runtime/helpers/getPrototypeOf"),require("@babel/runtime/helpers/inherits")):r(e.react,e["@babel/runtime/helpers/classCallCheck"],e["@babel/runtime/helpers/createClass"],e["@babel/runtime/helpers/possibleConstructorReturn"],e["@babel/runtime/helpers/getPrototypeOf"],e["@babel/runtime/helpers/inherits"]);for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(window,(function(e,r,t,n,o,i){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=92)}({0:function(r,t){r.exports=e},1:function(e,t){e.exports=r},2:function(e,r){e.exports=t},3:function(e,r){e.exports=n},4:function(e,r){e.exports=o},5:function(e,r){e.exports=i},92:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return m}));var n=t(1),o=t.n(n),i=t(2),u=t.n(i),s=t(3),l=t.n(s),a=t(4),p=t.n(a),c=t(5),b=t.n(c),f=t(0),h=t.n(f),m=function(e){function r(){var e;return o()(this,r),(e=l()(this,p()(r).call(this))).id=Math.random().toString(36).substring(2),e}return b()(r,e),u()(r,[{key:"render",value:function(){var e=this;return h.a.createElement("textarea",{id:this.props.id||this.id,cols:this.props.cols||50,rows:this.props.rows||6,className:"textarea",onChange:function(r){return e.props.onChange&&e.props.onChange(r)}})}}]),r}(f.Component)}})}));