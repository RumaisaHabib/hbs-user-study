!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-lightbox",[],t):"object"==typeof exports?exports["wafer-lightbox"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-lightbox"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var l=o[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,n){},t.n=function(e){},t.o=function(e,t){},t.p="https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,o){"use strict";function n(e,t,o){}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){},i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),c=window.wafer,u=c.base,h=c.constants,p=c.features,f=c.utils,d=c.WaferBaseClass,b=f.bindEvent,w=f.findAncestor,y=f.getFocusableElems,g=f.getTemplateContent,v=f.removeTransition,m=f.setTimeout,_=f.setTransition,x=f.unbindEvent,C=p.mutationObserver,E=p.transformProperty,k=["handleClick","handleKeyDown","handleSwipeUp","handleTouchEnd","handleTouchMove","handleTouchStart"],O=[],T=h.ATTR_PREFIX,S=document,j=S.body,M=function(e){function t(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=o.errorClass,s=o.lightboxConfig,i=o.selector,c=o.successClass,u=o.wrapperMap;l(this,t);var h=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{errorClass:n,selector:i,successClass:c},{STATE_ATTRS:O})),p=e.getAttribute(T+"boundary"),f=e.getAttribute(T+"lightbox-target"),d=e.getAttribute(T+"lightbox-key"),b=e.getAttribute(T+"lightbox-trigger")||"click",w=e.getAttribute(T+"lightbox-delay"),y=e.getAttribute(T+"lightbox-close-delay"),g=e.getAttribute(T+"lightbox-close-on-swipe"),v=e.getAttribute(T+"lightbox-close-on-swipe-down"),m=s.pageTarget;return h._util={boundary:p,closeDelay:null===y||void 0===y?0:Number(y),closeOnSwipe:null===g||void 0===g?0:Number(g),closeOnSwipeDown:null===v||void 0===v?0:Number(v),elem:e,errorClass:n,delay:null===w||void 0===w?0:Number(w),key:d,selector:i,successClass:c,target:f,trigger:b,wrapperMap:u},m&&(h._util.pageTarget=document.querySelector(m)),h._state=a({contentObserver:null,firstFocusableElem:null,lastFocusableElem:null,touchendY:0,touchstartY:0,willClose:null},h._state),k.forEach(function(e){h[e]=h[e].bind(h)}),h.addEventListeners(),"onLoad"===b&&h.open(),h}return s(t,e),i(t,[{key:"destroy",value:function(){}},{key:"open",value:function(){}},{key:"close",value:function(){}},{key:"handleKeyDown",value:function(e){}},{key:"handleClick",value:function(){}},{key:"handleTouchStart",value:function(e){}},{key:"handleTouchMove",value:function(e){}},{key:"handleTouchEnd",value:function(e){}},{key:"handleSwipeUp",value:function(){}},{key:"setFocusableElements",value:function(){}},{key:"templateText",get:function(){}}]),t}(d);M.events={click:[["wafer-lightbox","handleClick"]]},t.default=M,e.exports=t.default},"./src/controller.js":function(e,t,o){"use strict";function n(){return i=l(o("./src/base.js"))}function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,c=Object.assign||function(e){},u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),h=function e(t,o,n){},p=window.wafer.features.isTouchSafariDevice,f=["_handleCloseClick","_handleBgCloseClick","_handleContentScroll","_handleKeyDown"],d={background:"rgba(255 , 255, 255 ,0.8)",bottom:"0",display:"none",height:"100%",left:"0",position:"fixed",right:"0",top:"0",width:"100%"},b=window.wafer.utils,w=b.bindEvent,y=b.getConfigFromJSONScriptNode,g=b.getTemplateContent,v=b.setTimeout,m=b.throttle,_=b.unbindEvent,x=window.wafer.base,C=window.wafer.controllers.WaferBaseController,E=document,k=E.body,O=E.documentElement,T="scroll"===window.getComputedStyle(document.body).overflowY?k:O,S=void 0,j=void 0,M=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.containerClass,l=void 0===o?null:o,a=e.root,u=void 0===a?document:a,h=e.selector,d=e.src,b=void 0===d?"data-wf-lightbox":d,w=e.successClass,g=void 0===w?"wafer-lightbox-loaded":w,v=e.scrollDelay,_=void 0===v?25:v;r(this,t);var x=y(document.getElementById("wafer-lightbox-config")),C=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:u,selector:h,WaferClass:(i||n()).default}));C._options=c({},C._options,{props:{lightboxConfig:x},container:!!l&&u.getElementsByClassName(l),src:b,successClass:g}),f.forEach(function(e){C[e]=C[e].bind(C)}),C._handleContentScrollWithThrottle=m(function(){},_,C),C._state=c({},C._state,{closeElem:null,currentInstance:null,lastScrollY:0,open:!1});var E=C;return(i||n()).default.prototype.willOpen=function(){},(i||n()).default.prototype.handleSwipeClose=function(){},C._renderLightBoxWrapper(),C.sync(),C}return a(t,e),u(t,[{key:"_close",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.source,n=void 0===o?"closeClick":o,l=t.scrollRestore,r=void 0===l||l;if(this._state.open){this._state.open=!1;var s=this._options.props.wrapperMap,a=s.contentElem,i=s.elem,c=s.wrapperElem,u=this._state.currentInstance,h=u._util,f=h.closeDelay,d=h.elem,b=h.key,w=h.pageTarget;c.classList.add("wafer-lightbox-close-in-progress"),k.classList.add("wafer-lightbox-close-in-progress"),v(function(){},f)}}},{key:"_handleCloseClick",value:function(e){}},{key:"_handleBgCloseClick",value:function(e){}},{key:"_handleContentScroll",value:function(){}},{key:"_handleKeyDown",value:function(e){}},{key:"handleEvent",value:function(e,o,n){}},{key:"willDestroy",value:function(e){var t=this._options.props.wrapperMap;if(t&&e===k){var o=t.wrapperElem,n=t.closeElem,l=t.contentElem,r=window.getComputedStyle(o),s="none"!==r.overflow?o:l;_(s,"scroll",this._handleContentScrollWithThrottle),n&&_(n,"click",this._handleCloseClick),_(o,"keydown",this._handleKeyDown),_(o,"click",this._handleBgCloseClick)}}},{key:"_renderLightBoxWrapper",value:function(){var e=document.createElement("div"),t=document.getElementById("wafer-lightbox-wrapper-template"),o=void 0;t&&(o=g(t),e.className=t.className),o||(o='\n<div class="wafer-lightbox-wrapper" tabindex="-1">\n    <div class="wafer-lightbox-content"/>\n</div>\n'),e.classList.add("wafer-lightbox-overlay"),Object.assign(e.style,d),e.innerHTML=o;var n=e.getElementsByClassName("wafer-lightbox-wrapper")[0],l=e.getElementsByClassName("wafer-lightbox-content")[0],r=e.getElementsByClassName("wafer-lightbox-close")[0];this._state.closeButton=r,k.appendChild(e),r&&w(r,"click",this._handleCloseClick,{passive:!1});var s=window.getComputedStyle(n),a="hidden"!==s.overflow?n:l;a.classList.add("wafer-lightbox-element-to-scroll"),w(n,"keydown",this._handleKeyDown),w(a,"scroll",this._handleContentScrollWithThrottle),w(n,"click",this._handleBgCloseClick),this._options.props=c({},this._options.props,{wrapperMap:{elem:e,contentElem:l,elementToScroll:a,wrapperElem:n}})}}]),t}(C);t.default=M,e.exports=t.default},"./src/entry.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l;t.default=new((l||function(){return l=n(o("./src/controller.js"))}()).default)({selector:"wafer-lightbox"}),e.exports=t.default}})});