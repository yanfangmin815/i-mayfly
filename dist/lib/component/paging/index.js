!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("@babel/runtime/helpers/classCallCheck"),require("@babel/runtime/helpers/createClass"),require("@babel/runtime/helpers/possibleConstructorReturn"),require("@babel/runtime/helpers/getPrototypeOf"),require("@babel/runtime/helpers/inherits"));else if("function"==typeof define&&define.amd)define(["react","@babel/runtime/helpers/classCallCheck","@babel/runtime/helpers/createClass","@babel/runtime/helpers/possibleConstructorReturn","@babel/runtime/helpers/getPrototypeOf","@babel/runtime/helpers/inherits"],t);else{var n="object"==typeof exports?t(require("react"),require("@babel/runtime/helpers/classCallCheck"),require("@babel/runtime/helpers/createClass"),require("@babel/runtime/helpers/possibleConstructorReturn"),require("@babel/runtime/helpers/getPrototypeOf"),require("@babel/runtime/helpers/inherits")):t(e.react,e["@babel/runtime/helpers/classCallCheck"],e["@babel/runtime/helpers/createClass"],e["@babel/runtime/helpers/possibleConstructorReturn"],e["@babel/runtime/helpers/getPrototypeOf"],e["@babel/runtime/helpers/inherits"]);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,(function(e,t,n,r,a,i){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=63)}({0:function(t,n){t.exports=e},1:function(e,n){e.exports=t},2:function(e,t){e.exports=n},3:function(e,t){e.exports=r},4:function(e,t){e.exports=a},5:function(e,t){e.exports=i},63:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var r=n(1),a=n.n(r),i=n(2),s=n.n(i),o=n(3),l=n.n(o),u=n(4),h=n.n(u),c=n(5),f=n.n(c),p=n(0),g=n.n(p),b=function(e){function t(e){var n;return a()(this,t),(n=l()(this,h()(t).call(this,e))).start=1,n.maxWidth=5,n.minWidth="",n.end="",n.state={pageInfo:{total:n.props.pageInfo.total||0,maxToShow:n.props.pageInfo.maxToShow||0,currentPage:n.props.pageInfo.currentPage||1},viewBox:{width:"",list:[],before:!1,after:!1,currentPage:""}},n}return f()(t,e),s()(t,[{key:"componentDidMount",value:function(){this.init()}},{key:"componentWillReceiveProps",value:function(e){var t=this;this.setState({pageInfo:{total:e.pageInfo.total||0,maxToShow:e.pageInfo.maxToShow||0,currentPage:e.pageInfo.currentPage||1},viewBox:{width:"",list:[],before:!1,after:!1,currentPage:""}},(function(){e.pageInfo.currentPage&&t.state.viewBox?t.init((function(){return t.handleResizeViewBox(e.pageInfo.currentPage)})):t.init()}))}},{key:"init",value:function(e){var t=this.state.pageInfo;this.end=Math.ceil(t.total/t.maxToShow),this.end>0?this.end:this.end=1,this.minWidth=this.end-2;var n=this.maxWidth>this.minWidth?this.minWidth:this.maxWidth;this.setState({viewBox:{width:n,list:function(e){for(var t=[],n=1;n<=e;n++){var r=n;t.push(++r)}return t}(n),before:!1,after:this.maxWidth<this.minWidth,currentPage:t.currentPage||1}},(function(){e&&e()}))}},{key:"handleChangePage",value:function(e){!(arguments.length>1&&void 0!==arguments[1])||arguments[1];var t=parseInt(e);t<this.start&&(t=this.start),t>this.end&&(t=this.end),this.props.isSingleDataFlow&&this.handleResizeViewBox(t),this.props.onAction&&this.props.onAction(t)}},{key:"handleResizeViewBox",value:function(e){var t=parseInt(e);t<this.start&&(t=this.start),t>this.end&&(t=this.end),this.handleViewBox(t)}},{key:"handleChangePageLeft",value:function(){this.handleChangePage(--this.state.viewBox.currentPage)}},{key:"handleChangePageRight",value:function(){this.handleChangePage(++this.state.viewBox.currentPage)}},{key:"handleViewBox",value:function(e){var t=this.state.viewBox.width;if(this.end-2>=this.maxWidth){if(e<this.start+Math.floor(t/2)){for(var n=[],r=this.start+1;r<this.start+1+t;r++)n.push(r);this.setState({viewBox:Object.assign(this.state.viewBox,{list:n,currentPage:e,before:!1,after:!0})},(function(){}))}if(e>this.end-Math.ceil(t/2)){for(var a=[],i=this.end-t;i<this.end;i++)a.push(i);this.setState({viewBox:Object.assign(this.state.viewBox,{list:a,currentPage:e,before:!0,after:!1})},(function(){}))}if(e>=this.start+Math.floor(t/2)&&e<=this.end-Math.ceil(t/2)){var s=[],o=e-Math.floor(t/2);for(o<2&&(o=2),o>this.end-t&&(o=this.end-t);t--;)s.push(o++);this.setState({viewBox:Object.assign(this.state.viewBox,{list:s,currentPage:e,before:!0,after:!0})},(function(){}))}}else this.setState({viewBox:Object.assign(this.state.viewBox,{currentPage:e,before:!1,after:!1})},(function(){}))}},{key:"render",value:function(){var e=this,t=this.state.pageInfo;return g.a.createElement("div",null,g.a.createElement("div",{className:["d-f ac jc-b",this.props.style||"paging-normal"].join(" ")},g.a.createElement("div",{className:"fs12"},"共",g.a.createElement("strong",{className:"plr4"},t.total),"条，每页",g.a.createElement("strong",{className:"plr4"},t.maxToShow),"条"),g.a.createElement("div",{className:"paging-viewbox"},g.a.createElement("span",{className:"btn-paging arrow-left",onClick:function(){return e.handleChangePageLeft()}}),g.a.createElement("span",{onClick:function(){return e.handleChangePage(e.start)},className:["btn-paging",this.start===this.state.viewBox.currentPage?"btn-active":""].join(" ")},this.start),this.state.viewBox.before?g.a.createElement("span",{className:"mr8"},"..."):null,this.state.viewBox.list.map((function(t,n){return g.a.createElement("span",{key:n,onClick:function(){return e.handleChangePage(t)},className:["btn-paging",t===e.state.viewBox.currentPage?"btn-active":""].join(" ")},t)})),this.state.viewBox.after?g.a.createElement("span",{className:"mr8"},"..."):null,this.state.viewBox.width>=0?g.a.createElement("span",{onClick:function(){return e.handleChangePage(e.end)},className:["btn-paging",this.end===this.state.viewBox.currentPage?"btn-active":""].join(" ")},this.end):null,g.a.createElement("span",{className:"btn-paging arrow-right",onClick:function(){return e.handleChangePageRight()}}))))}}]),t}(p.Component)}})}));