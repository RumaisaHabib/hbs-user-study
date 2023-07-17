(function(e){if(typeof exports==="object"&&exports&&typeof module==="object"&&module&&module.exports===exports){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})((function(e){var i=f();var t=86400;var r={am:"am",pm:"pm",AM:"AM",PM:"PM",decimal:".",mins:"mins",hr:"hr",hrs:"hrs"};var a={init:function(i){},show:function(i){},hide:function(i){},option:function(i,t){},getSecondsFromMidnight:function(){},getTime:function(e){},setTime:function(e){},remove:function(){}};function s(e){}function n(i){}function l(i){}function o(i,t){}function c(i,t){}function u(e,i){}function f(){return new Date(1970,1,1,0,0,0)}function m(i){}function p(e){}function d(i,t,r){}function h(e,i){}function v(i,t){}function g(e){}function k(e,i,t){}function T(i){}function b(i){}function y(e){}function w(e,i){}function x(a,s){}function C(e,i){}function H(e){}e.fn.timepicker=function(i){};e.fn.timepicker.defaults={className:null,minTime:null,maxTime:null,durationTime:null,step:30,showDuration:false,showOnFocus:true,timeFormat:"g:ia",scrollDefault:null,selectOnBlur:false,disableTouchKeyboard:false,forceRoundTime:false,appendTo:"body",orientation:"ltr",disableTimeRanges:[],closeOnWindowScroll:false,typeaheadHighlight:true,noneOption:false}}));
/**
 * Timeago is a jQuery plugin that makes it easy to support automatically
 * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
 *
 * @name timeago
 * @version 1.5.2
 * @requires jQuery v1.2.3+
 * @author Ryan McGeary
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * For usage and examples, visit:
 * http://timeago.yarp.com/
 *
 * Copyright (c) 2008-2015, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
 */
(function(t){if(typeof define==="function"&&define.amd){define(["jquery"],t)}else if(typeof module==="object"&&typeof module.exports==="object"){t(require("jquery"))}else{t(jQuery)}})((function(t){t.timeago=function(e){};var e=t.timeago;t.extend(t.timeago,{settings:{refreshMillis:6e4,allowPast:true,allowFuture:false,localeTitle:false,cutoff:0,autoDispose:true,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",inPast:"any moment now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(e){},parse:function(e){},datetime:function(i){},isTime:function(e){}});var i={init:function(){},update:function(i){},updateFromDOM:function(){},dispose:function(){}};t.fn.timeago=function(t,e){};function a(){}function r(i){}function n(t){}function o(t){}document.createElement("abbr");document.createElement("time")}));
!function(t){t((function(){"use strict";t.support.transition=function(){var t=function(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},i;for(i in e){if(t.style[i]!==undefined){return e[i]}}}();return t&&{end:t}}()}))}(window.jQuery);!function(t){"use strict";var e=function(e,i){this.options=i;this.$element=t(e).delegate('[data-dismiss="modal"]',"click.dismiss.modal",t.proxy(this.hide,this))};e.prototype={constructor:e,toggle:function(){},show:function(){},hide:function(e){}};function i(){}function n(t){}function s(e){}function o(){}function a(){}t.fn.modal=function(i){return this.each((function(){var n=t(this),s=n.data("modal"),o=t.extend({},t.fn.modal.defaults,n.data(),typeof i=="object"&&i);if(!s)n.data("modal",s=new e(this,o));if(typeof i=="string")s[i]();else if(o.show)s.show()}))};t.fn.modal.defaults={backdrop:true,keyboard:true,show:true};t.fn.modal.Constructor=e;t((function(){t("body").on("click.modal.data-api",'[data-toggle="modal"]',(function(e){}))}))}(window.jQuery);!function(t){"use strict";var e='[data-toggle="dropdown"]',i=function(e){};i.prototype={constructor:i,toggle:function(e){}};function n(){t(e).parent().removeClass("open")}t.fn.dropdown=function(e){};t.fn.dropdown.Constructor=i;t((function(){t("html").on("click.dropdown.data-api",n);t("body").on("click.dropdown",".dropdown form",(function(t){})).on("click.dropdown.data-api",e,i.prototype.toggle)}))}(window.jQuery);!function(t){"use strict";function e(e,i){}e.prototype={constructor:e,refresh:function(){},process:function(){},activate:function(e){}};t.fn.scrollspy=function(i){};t.fn.scrollspy.Constructor=e;t.fn.scrollspy.defaults={offset:10};t((function(){t('[data-spy="scroll"]').each((function(){}))}))}(window.jQuery);!function(t){"use strict";var e=function(e){};e.prototype={constructor:e,show:function(){},activate:function(e,i,n){}};t.fn.tab=function(i){};t.fn.tab.Constructor=e;t((function(){t("body").on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',(function(e){}))}))}(window.jQuery);!function(t){"use strict";var e=function(t,e){};e.prototype={constructor:e,init:function(e,i,n){},getOptions:function(e){},enter:function(e){},leave:function(e){},show:function(){},isHTML:function(t){},setContent:function(){},hide:function(){},fixTitle:function(){},hasContent:function(){},getPosition:function(e){},getTitle:function(){},tip:function(){},validate:function(){},enable:function(){},disable:function(){},toggleEnabled:function(){},toggle:function(){}};t.fn.tooltip=function(i){return this.each((function(){}))};t.fn.tooltip.Constructor=e;t.fn.tooltip.defaults={animation:true,placement:"top",selector:false,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover",title:"",delay:0}}(window.jQuery);!function(t){"use strict";var e=function(t,e){};e.prototype=t.extend({},t.fn.tooltip.Constructor.prototype,{constructor:e,setContent:function(){},hasContent:function(){},getContent:function(){},tip:function(){}});t.fn.popover=function(i){};t.fn.popover.Constructor=e;t.fn.popover.defaults=t.extend({},t.fn.tooltip.defaults,{placement:"right",content:"",template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'})}(window.jQuery);!function(t){"use strict";var e='[data-dismiss="alert"]',i=function(i){};i.prototype.close=function(e){};t.fn.alert=function(e){};t.fn.alert.Constructor=i;t((function(){t("body").on("click.alert.data-api",e,i.prototype.close)}))}(window.jQuery);!function(t){"use strict";var e=function(e,i){};e.prototype.setState=function(t){};e.prototype.toggle=function(){};t.fn.button=function(i){};t.fn.button.defaults={loadingText:"loading..."};t.fn.button.Constructor=e;t((function(){t("body").on("click.button.data-api","[data-toggle^=button]",(function(e){}))}))}(window.jQuery);!function(t){"use strict";var e=function(e,i){};e.prototype={constructor:e,dimension:function(){},show:function(){},hide:function(){},reset:function(t){},transition:function(e,i,n){},toggle:function(){}};t.fn.collapse=function(i){};t.fn.collapse.defaults={toggle:true};t.fn.collapse.Constructor=e;t((function(){t("body").on("click.collapse.data-api","[data-toggle=collapse]",(function(e){}))}))}(window.jQuery);!function(t){"use strict";var e=function(e,i){};e.prototype={cycle:function(e){},to:function(e){},pause:function(t){},next:function(){},prev:function(){},slide:function(e,i){}};t.fn.carousel=function(i){};t.fn.carousel.defaults={interval:5e3,pause:"hover"};t.fn.carousel.Constructor=e;t((function(){t("body").on("click.carousel.data-api","[data-slide]",(function(e){}))}))}(window.jQuery);
/*!
 * Datepicker for Bootstrap v1.6.1 (https://github.com/eternicode/bootstrap-datepicker)
 *
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */
(function(t){if(typeof define==="function"&&define.amd){define(["jquery"],t)}else if(typeof exports==="object"){t(require("jquery"))}else{t(jQuery)}})((function(t,e){function i(){}function a(){}function s(t,e){}function n(t){return function(){}}function r(t){}var o=function(){var e={get:function(t){},contains:function(t){},remove:function(t){},replace:function(e){},clear:function(){},copy:function(){}};return function(){}}();var h=function(e,i){};h.prototype={constructor:h,_resolveViewName:function(t,i){},_check_template:function(i){},_process_options:function(e){},_events:[],_secondaryEvents:[],_applyEvents:function(t){},_unapplyEvents:function(t){},_buildEvents:function(){},_attachEvents:function(){},_detachEvents:function(){},_attachSecondaryEvents:function(){},_detachSecondaryEvents:function(){},_trigger:function(e,i){},show:function(){},hide:function(){},destroy:function(){},paste:function(e){},_utc_to_local:function(t){},_local_to_utc:function(t){},_zero_time:function(t){},_zero_utc_time:function(t){},getDates:function(){},getUTCDates:function(){},getDate:function(){},getUTCDate:function(){},clearDates:function(){},setDates:function(){},setUTCDates:function(){},setDate:n("setDates"),setUTCDate:n("setUTCDates"),remove:n("destroy"),setValue:function(){},getFormattedDate:function(i){},getStartDate:function(){},setStartDate:function(t){},getEndDate:function(){},setEndDate:function(t){},setDaysOfWeekDisabled:function(t){},setDaysOfWeekHighlighted:function(t){},setDatesDisabled:function(t){},place:function(){},_allow_update:true,update:function(){},fillDow:function(){},fillMonths:function(){},setRange:function(e){},getClassNames:function(e){},_fill_yearsView:function(i,a,s,n,r,o,h,l){},fill:function(){},updateNavArrows:function(){},click:function(e){},_toggle_multidate:function(t){},_setDate:function(t,e){},moveDay:function(t,e){},moveWeek:function(t,e){},moveMonth:function(t,e){},moveYear:function(t,e){},moveAvailableDate:function(t,e,i){},weekOfDateIsDisabled:function(e){},dateIsDisabled:function(e){},dateWithinRange:function(t){},keydown:function(t){},showMode:function(t){}};var l=function(e,i){};l.prototype={updateDates:function(){},updateRanges:function(){},dateUpdated:function(e){},remove:function(){}};function d(e,i){}function f(e){}var u=t.fn.datepicker;var c=function(i){var a=Array.apply(null,arguments);a.shift();var s;this.each((function(){}));if(s===e||s instanceof h||s instanceof l)return this;if(this.length>1)throw new Error("Using only allowed for the collection of a single element ("+i+" function)");else return s};t.fn.datepicker=c;var p=t.fn.datepicker.defaults={assumeNearbyYear:false,autoclose:false,beforeShowDay:t.noop,beforeShowMonth:t.noop,beforeShowYear:t.noop,beforeShowDecade:t.noop,beforeShowCentury:t.noop,calendarWeeks:false,clearBtn:false,toggleActive:false,daysOfWeekDisabled:[],daysOfWeekHighlighted:[],datesDisabled:[],endDate:Infinity,forceParse:true,format:"mm/dd/yyyy",keyboardNavigation:true,language:"en",minViewMode:0,maxViewMode:4,multidate:false,multidateSeparator:",",orientation:"auto",rtl:false,startDate:-Infinity,startView:0,todayBtn:false,todayHighlight:false,weekStart:0,disableTouchKeyboard:false,enableOnReadonly:true,showOnFocus:true,zIndexOffset:10,container:"body",immediateUpdates:false,title:"",templates:{leftArrow:"&laquo;",rightArrow:"&raquo;"}};var g=t.fn.datepicker.locale_opts=["format","rtl","weekStart"];t.fn.datepicker.Constructor=h;var D=t.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM yyyy"}};var v={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10},{clsName:"decades",navFnc:"FullDecade",navStep:100},{clsName:"centuries",navFnc:"FullCentury",navStep:1e3}],isLeapYear:function(t){},getDaysInMonth:function(t,e){},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,parseFormat:function(t){},parseDate:function(s,n,r,o){},formatDate:function(e,i,a){},headTemplate:"<thead>"+"<tr>"+'<th colspan="7" class="datepicker-title"></th>'+"</tr>"+"<tr>"+'<th class="prev">&laquo;</th>'+'<th colspan="5" class="datepicker-switch"></th>'+'<th class="next">&raquo;</th>'+"</tr>"+"</thead>",contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:"<tfoot>"+"<tr>"+'<th colspan="7" class="today"></th>'+"</tr>"+"<tr>"+'<th colspan="7" class="clear"></th>'+"</tr>"+"</tfoot>"};v.template='<div class="datepicker">'+'<div class="datepicker-days">'+'<table class="table-condensed">'+v.headTemplate+"<tbody></tbody>"+v.footTemplate+"</table>"+"</div>"+'<div class="datepicker-months">'+'<table class="table-condensed">'+v.headTemplate+v.contTemplate+v.footTemplate+"</table>"+"</div>"+'<div class="datepicker-years">'+'<table class="table-condensed">'+v.headTemplate+v.contTemplate+v.footTemplate+"</table>"+"</div>"+'<div class="datepicker-decades">'+'<table class="table-condensed">'+v.headTemplate+v.contTemplate+v.footTemplate+"</table>"+"</div>"+'<div class="datepicker-centuries">'+'<table class="table-condensed">'+v.headTemplate+v.contTemplate+v.footTemplate+"</table>"+"</div>"+"</div>";t.fn.datepicker.DPGlobal=v;t.fn.datepicker.noConflict=function(){};t.fn.datepicker.version="1.6.1";t(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',(function(e){}));t((function(){c.call(t('[data-provide="datepicker-inline"]'))}))}));
(function(t){var a=function(t){};var e=$(".nav-tabs, .nav-pills"),r=e.children("li"),i=e.find('[data-toggle="tab"], [data-toggle="pill"]');if(i){e.attr("role","tablist");r.attr("role","presentation");i.attr("role","tab")}i.each((function(t){}));$.fn.tab.Constructor.prototype.keydown=function(t){};$(document).on("keydown.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',$.fn.tab.Constructor.prototype.keydown);var l=$.fn.tab.Constructor.prototype.activate;$.fn.tab.Constructor.prototype.activate=function(t,a,e){}})(this);
(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})((function(e,t){var n=6,i=e.event.add,a=e.event.remove,o=function(t,n,i){},r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,t){}}(),u={textarea:true,input:true,select:true},c={move:"mousemove",cancel:"mouseup dragstart",end:"mouseup"},d={move:"touchmove",cancel:"touchend",end:"touchend"};function f(e){}function m(){}function s(){}function v(e){}function p(e){}function g(e){return e.which===1&&!e.ctrlKey&&!e.altKey}function l(e,t){var n,i;if(e.identifiedTouch){return e.identifiedTouch(t)}n=-1;i=e.length;while(++n<i){if(e[n].identifier===t){return e[n]}}}function h(e,t){}function X(e){var t;if(!g(e)){return}t={target:e.target,startX:e.pageX,startY:e.pageY,timeStamp:e.timeStamp};i(document,c.move,Y,t);i(document,c.cancel,w,t)}function Y(e){}function w(e){y()}function y(){a(document,c.move,Y);a(document,c.cancel,y)}function T(e){var t,n;if(u[e.target.tagName.toLowerCase()]){return}t=e.changedTouches[0];n={target:t.target,startX:t.pageX,startY:t.pageY,timeStamp:e.timeStamp,identifier:t.identifier};i(document,d.move+"."+t.identifier,S,n);i(document,d.cancel+"."+t.identifier,k,n)}function S(e){}function k(e){var t=e.data,n=l(e.changedTouches,t.identifier);if(!n){return}_(t.identifier)}function _(e){a(document,"."+e,S);a(document,"."+e,k)}function q(e,t,i,a){}function A(){}function D(e){}function F(e,t,n,i,a,r){}function R(e){}function x(e){}function j(e){}function C(e){}function K(e){}function L(e){}function N(e,t,n,i){}function O(e,t,n){}function b(e,t,n){}function z(e){}e.event.special.movestart={setup:b,teardown:z,_default:function(e){}};e.event.special.move={setup:function(){},teardown:function(){}};e.event.special.moveend={setup:function(){},teardown:function(){}};i(document,"mousedown.move",X);i(document,"touchstart.move",T);if(typeof Array.prototype.indexOf==="function"){(function(e,t){var n=["changedTouches","targetTouches"],i=n.length;while(i--){if(e.event.props.indexOf(n[i])===-1){e.event.props.push(n[i])}}})(e)}}));
(function(t){"use strict";t.fn.twentytwenty=function(e){var e=t.extend({default_offset_pct:.5},e);return this.each((function(){}))}})(jQuery);$((function(){"use strict";$('[data-embed-type="comparison"]').twentytwenty();if(typeof tinymce!=="undefined"){tinymce.onAddEditor.add((function(t,e){}))}}));
(function(t){t.fn.unveil=function(e,i){}})(window.jQuery||window.Zepto);
/*!
 * jQuery.scrollTo
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler ○ gmail • com | http://flesler.blogspot.com
 * Licensed under MIT
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * @projectDescription Lightweight, cross-browser and highly customizable animated scrolling with jQuery
 * @author Ariel Flesler
 * @version 2.1.2
 */
(function(e){"use strict";if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof module!=="undefined"&&module.exports){module.exports=e(require("jquery"))}else{e(jQuery)}})((function(e){"use strict";var t=e.scrollTo=function(t,n,o){};t.defaults={axis:"xy",duration:0,limit:true};function n(t){return!t.nodeName||e.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"])!==-1}e.fn.scrollTo=function(i,r,s){if(typeof r==="object"){s=r;r=0}if(typeof s==="function"){s={onAfter:s}}if(i==="max"){i=9e9}s=e.extend({},t.defaults,s);r=r||s.duration;var f=s.queue&&s.axis.length>1;if(f){r/=2}s.offset=o(s.offset);s.over=o(s.over);return this.each((function(){if(i===null)return;var u=n(this),a=u?this.contentWindow||window:this,l=e(a),c=i,d={},m;switch(typeof c){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(c)){c=o(c);break}c=u?e(c):e(c,a);case"object":if(c.length===0)return;if(c.is||c.style){m=(c=e(c)).offset()}}var p=e.isFunction(s.offset)&&s.offset(a,c)||s.offset;e.each(s.axis.split(""),(function(e,n){}));h(s.onAfter);function h(t){}}))};t.max=function(t,o){};function o(t){return e.isFunction(t)||e.isPlainObject(t)?t:{top:t,left:t}}e.Tween.propHooks.scrollLeft=e.Tween.propHooks.scrollTop={get:function(t){},set:function(t){}};return t}));
var StringMunger=function(){return{munge:function(r,n,e){},unmunge:function(r,n,e){}}}();
(function(e,n){if(typeof define==="function"&&define.amd){define([],n)}else if(typeof module!=="undefined"&&module.exports){module.exports=n()}else{e.lscache=n()}})(this,(function(){var e="lscache-";var n="-cacheexpiration";var t=10;var r=60*1e3;var i=Math.floor(864e13/r);var o;var a;var u="";var f=false;function c(){var e="__lscachetest__";var n=e;if(o!==undefined){return o}try{if(!localStorage){return false}}catch(e){return false}try{p(e,n);m(e);o=true}catch(e){if(l(e)&&localStorage.length){o=true}else{o=false}}return o}function l(e){}function s(){}function h(e){}function d(e){return e+n}function v(){}function g(n){return localStorage.getItem(e+u+n)}function p(n,t){localStorage.removeItem(e+u+n);localStorage.setItem(e+u+n,t)}function m(n){localStorage.removeItem(e+u+n)}function w(t){}function y(e){var n=d(e);m(e);m(n)}function S(e){var n=d(e);var r=g(n);if(r){var i=parseInt(r,t);if(v()>=i){m(e);m(n);return true}}}function E(e,n){}var x={set:function(e,n,r){},get:function(e){if(!c())return null;if(S(e)){return null}var n=g(e);if(!n||!s()){return n}try{return JSON.parse(n)}catch(e){return n}},remove:function(e){if(!c())return;y(e)},supported:function(){return c()},flush:function(){},flushExpired:function(){},setBucket:function(e){},resetBucket:function(){},enableWarnings:function(e){}};return x}));
/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function(e){var n;if(typeof define==="function"&&define.amd){define(e);n=true}if(typeof exports==="object"){module.exports=e();n=true}if(!n){var t=window.Cookies;var r=window.Cookies=e();r.noConflict=function(){}}})((function(){function e(){}function n(t){function r(n,o,i){}r.set=r;r.get=function(e){};r.getJSON=function(e){};r.remove=function(n,t){};r.defaults={};r.withConverter=n;return r}return n((function(){}))}));