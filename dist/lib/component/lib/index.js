!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("@babel/runtime/helpers/classCallCheck"));else if("function"==typeof define&&define.amd)define(["@babel/runtime/helpers/classCallCheck"],t);else{var n="object"==typeof exports?t(require("@babel/runtime/helpers/classCallCheck")):t(e["@babel/runtime/helpers/classCallCheck"]);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,(function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=59)}({1:function(t,n){t.exports=e},59:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var r=n(1),o=n.n(r),i=function e(){o()(this,e)},u={Bytes:1,Kb:1024,M:1048576,G:1073741824,T:1099511627776};i.toThousands=function(e){for(var t=(e||0).toString(),n="";t.length>3;)n=","+t.slice(-3)+n,t=t.slice(0,t.length-3);return t&&(n=t+n),n},i.transfer2UnitAuto=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;for(var n in u)if(u.hasOwnProperty(n)){var r=u[n],o=(e/r).toFixed(0).length<=4;if(o){var i=(e/r).toFixed(t),l=!!parseInt(i.slice(-t));return l?"".concat(i).concat(n):"".concat((e/r).toFixed(0)).concat(n)}}var c=(e/u.T).toFixed(t),a=!!parseInt(c.slice(-t));return a?"".concat(c,"T"):(e/u.T).toFixed(0)},i.transfer2Unit=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"G",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return e?u[t]?(e/u[t]).toFixed(n)+(r?t:""):e+(r?"Bytes":""):e+t}}})}));