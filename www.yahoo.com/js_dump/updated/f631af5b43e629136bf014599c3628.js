!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-form",[],t):"object"==typeof exports?exports["wafer-form"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-form"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r=window.webpackJsonpwafer_wafers_wafer_form;window.webpackJsonpwafer_wafers_wafer_form=function(t,n,o){};var n={},i={1:0,2:0};return t.e=function(e){},t.m=e,t.c=n,t.d=function(e,r,n){},t.n=function(e){},t.o=function(e,t){},t.p="https://s.yimg.com/aaq/wf/",t.oe=function(e){},t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,r){"use strict";function n(e,t){}function i(e,t){}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function e(t,r,n){},l=window.wafer,c=l.base,f=l.constants,d=l.utils,m=l.WaferBaseClass,h=f.ATTR_PREFIX,p=d.bindEvent,v=d.clearAndSetInnerHTML,b=d.convertNodeListToArray,g=d.fetchWithCache,y=d.findAncestor,w=d.getElementsByAttrValues,_=d.unbindEvent,E=d.urlify,A=["handleSubmit","handleOnChange","handleOnSubmit"],C=["action","focus"],O="wafer-form-boundary-error",j="function"==typeof document.createElement("input").checkValidity,k=function(e){function t(e){}return o(t,e),s(t,[{key:"removeInputEvents",value:function(){}},{key:"addInputEvents",value:function(){}},{key:"addEventListeners",value:function(){}},{key:"handleElementWithValue",value:function(e){}},{key:"focus",value:function(){}},{key:"_handleCustomValidation",value:function(e){}},{key:"submitForm",value:function(e){}},{key:"destroy",value:function(){}},{key:"stateDidUpdate",value:function(){}},{key:"handleInvalidInput",value:function(e){}},{key:"handleInputChange",value:function(e){}},{key:"handleOnChange",value:function(){}},{key:"handleOnSubmit",value:function(e){}},{key:"handleSubmit",value:function(){}},{key:"formValues",get:function(){}}]),t}(m);k.events={click:[["trigger-submit","handleSubmit"]]},t.default=k,e.exports=t.default},"./src/controller.js":function(e,t,r){"use strict";function n(){return u=i(r("./src/base.js"))}function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u,l=window.wafer.controllers.WaferBaseController,c=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.errorClass,i=void 0===r?"wafer-form-error":r,s=e.root,l=void 0===s?document:s,c=e.selector,f=void 0===c?".wafer-form":c,d=e.successClass,m=void 0===d?"wafer-form-complete":d;o(this,t);var h=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:l,selector:f,props:{errorClass:i,selector:f,successClass:m},WaferClass:(u||n()).default}));return h.sync(),h}return s(t,e),t}(l);t.default=c,e.exports=t.default},"./src/entry.js":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i;t.default=new((i||function(){return i=n(r("./src/controller.js"))}()).default)({selector:".wafer-form"}),e.exports=t.default}})});