!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("@babel/runtime/helpers/classCallCheck"),require("@babel/runtime/helpers/createClass"),require("@babel/runtime/helpers/possibleConstructorReturn"),require("@babel/runtime/helpers/getPrototypeOf"),require("@babel/runtime/helpers/inherits"),require("@babel/runtime/helpers/toConsumableArray"),require("@babel/runtime/helpers/defineProperty"),require("react-dom"),require("@babel/runtime/helpers/assertThisInitialized"));else if("function"==typeof define&&define.amd)define(["react","@babel/runtime/helpers/classCallCheck","@babel/runtime/helpers/createClass","@babel/runtime/helpers/possibleConstructorReturn","@babel/runtime/helpers/getPrototypeOf","@babel/runtime/helpers/inherits","@babel/runtime/helpers/toConsumableArray","@babel/runtime/helpers/defineProperty","react-dom","@babel/runtime/helpers/assertThisInitialized"],t);else{var r="object"==typeof exports?t(require("react"),require("@babel/runtime/helpers/classCallCheck"),require("@babel/runtime/helpers/createClass"),require("@babel/runtime/helpers/possibleConstructorReturn"),require("@babel/runtime/helpers/getPrototypeOf"),require("@babel/runtime/helpers/inherits"),require("@babel/runtime/helpers/toConsumableArray"),require("@babel/runtime/helpers/defineProperty"),require("react-dom"),require("@babel/runtime/helpers/assertThisInitialized")):t(e.react,e["@babel/runtime/helpers/classCallCheck"],e["@babel/runtime/helpers/createClass"],e["@babel/runtime/helpers/possibleConstructorReturn"],e["@babel/runtime/helpers/getPrototypeOf"],e["@babel/runtime/helpers/inherits"],e["@babel/runtime/helpers/toConsumableArray"],e["@babel/runtime/helpers/defineProperty"],e["react-dom"],e["@babel/runtime/helpers/assertThisInitialized"]);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,(function(e,t,r,n,i,s,a,l,o,u){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=89)}({0:function(t,r){t.exports=e},1:function(e,r){e.exports=t},11:function(e,t){e.exports=u},2:function(e,t){e.exports=r},3:function(e,t){e.exports=n},4:function(e,t){e.exports=i},5:function(e,t){e.exports=s},7:function(e,t){e.exports=a},8:function(e,t){e.exports=l},89:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return k}));var n=r(7),i=r.n(n),s=r(1),a=r.n(s),l=r(2),o=r.n(l),u=r(3),c=r.n(u),p=r(4),b=r.n(p),f=r(11),d=r.n(f),m=r(5),h=r.n(m),y=r(8),v=r.n(y),C=r(0),x=r.n(C),g=r(9),q=r.n(g),P="",k=function(e){function t(){var e;return a()(this,t),e=c()(this,b()(t).apply(this,arguments)),v()(d()(e),"add",(function(t){var r=t.title,n=t.content,s=t.status;if(e.state.list.length>5){var a=e.state.list;a.shift(),e.setState({list:a})}e.timer||(e.timer=setInterval((function(){var t=e.state.list;t.shift(),e.setState({list:t}),t.length||(e.timer=clearInterval(e.timer))}),3e3)),e.isStop||e.setState({list:[].concat(i()(e.state.list),[{title:r,content:n,status:s}])})})),e.state={list:[],toggle:!1},e.createPortalContainer(),e.timer=void 0,e.isStop=!1,e}return h()(t,e),o()(t,[{key:"stop",value:function(){this.isStop=!0}},{key:"goon",value:function(){this.isStop=!1}},{key:"handleClose",value:function(e){var t=this.state.list;t.splice(e,1),this.setState({list:t})}},{key:"createPortalContainer",value:function(){var e=window.document;this.node=e.createElement("div"),e.body.appendChild(this.node)}},{key:"clearPortalContainer",value:function(){window.document.body.removeChild(this.node)}},{key:"handleMapStatus",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"success";switch(e){case"success":return"c-success";case"warn":return"c-warn";case"fail":return"c-fail";default:return"c-success"}}},{key:"handleMapTitle",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"success";switch(e){case"success":return"成功";case"warn":return"警告";case"fail":return"重试";default:return!1}}},{key:"render",value:function(){var e=this;return Object(g.createPortal)(x.a.createElement("div",{className:"toastlists-normalize-box"},this.state.list.map((function(t,r){return x.a.createElement("div",{className:"toastlist",key:r},x.a.createElement("div",{className:"toast-item paper p-r"},x.a.createElement("span",{onClick:function(){return e.handleClose(r)},className:"p-a",style:{top:4,right:"8px",cursor:"pointer"}},"x"),x.a.createElement("div",{className:["pb8",e.handleMapStatus(t.status)].join(" "),style:{minWidth:"256px"}},t.title||e.handleMapTitle(t.status)),x.a.createElement("div",{className:""},t.content)))}))),this.node)}},{key:"componentWillUnmount",value:function(){this.clearPortalContainer()}}]),t}(x.a.Component);k.add=function(e){var t=e.title,r=e.content,n=e.status;if(!document.getElementById("slucky_toast")){P=x.a.createRef();var i=x.a.createElement(k,{ref:P}),s=document.createElement("div");s.id="slucky_toast",document.body.append(s),q.a.render(i,s)}P.current.add({title:t,content:r,status:n})},k.success=function(e){k.add({title:"成功",content:e,status:"success"})},k.error=function(e){k.add({title:"错误",content:e,status:"fail"})},k.warn=function(e){k.add({title:"提示",content:e,status:"warn"})},k.stop=function(){P.current.stop()},k.goon=function(){P.current.goon()}},9:function(e,t){e.exports=o}})}));