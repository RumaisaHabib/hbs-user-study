(window.webpackJsonp=window.webpackJsonp||[]).push([[1,4],{355:function(t,e,n){var i,a;i=[n(124),n(53),n(44),n(52),n(67),n(0),n(180),n(2),n(4),n(123),n(366),n(45),n(46),n(13),n(42)],void 0===(a=function(o,r,s,u,l,c,p,d,f,E,v){"use strict";function h(t){"@babel/helpers - typeof";return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i=[n(124),n(53),n(44),n(52),n(67),n(0),n(180),n(2),n(4),n(123),n(366)],void 0===(a=function(){var t={SWC_CORE_READY_EVENT:"swc:core:ready"},e={SKYPE_RECENT_SELECTOR:".skype-recents",SWC_SEARCH_INPUT:".skype-recents .searchContactsInput",SWC_FOOTER_MESSAGE:".skype-recents .footer .message",CHAT_WRAPPER_PLACEHOLDER:".chat-wrapper",SKYPE_CHAT_SELECTOR:".skypeChat",SKYPE_CHAT_TOOLTIP_SELECTOR:".skypeChat .tooltip",SKYPE_CHAT_ICON_SELECTOR:"#skypeIcon",SWC_RECENT_CONTACTS_ITEMS:"#swc-recents-contacts .item",UHF_MORE_NAV_ITEM:"#uhfMore",UNREAD_COUNTER:"#unreadCounter",UNREAD_WRAPPER:"#unreadWrapper",APP_BANNER:"#appBanner",UHF_COOKIE_ALERT:"#uhfCookieAlert",UHF_EDGE_NOTIFICATION:"#epb",UHF_EDGE_NOTIFICATION_ID:"epb",LOGIN_MENU_WRAPPER:"nav .signInDropdownWrapper",LOGIN_MENU:"nav .signInDropdownWrapper [data-element-type='subMenu']"},n={ProviderId:"swc.chat",IsVirtual:!0,ParallelView:!0,CanCollapse:!0,Style:f.pluck(r,"swcChat","style")||"outlook",Locale:"en-US"},i={notStarted:"notStarted",inProgress:"inProgress",finished:"finished"},a=f.pluck(r,"swcChat","disable"),C=E.create({lazyInitStatus:i.notStarted,recentsInitStatus:i.notStarted}),m=function(t){swc.API.triggerEvent(t)},S=function(){var t=c(e.SKYPE_RECENT_SELECTOR),n=c(e.SKYPE_CHAT_SELECTOR);"visible"===t.attr("data-status")&&(t.attr("data-status","invisible"),n.attr("data-bi-scn","open"),m("recentsHidden"),t.attr("aria-hidden","true"))},g=function(t,n,i){if(t.hasClass("hover")&&(t.removeClass("hover"),n.attr("aria-expanded","false")),"visible"===i.attr("data-status"))i.attr("data-status","invisible"),i.attr("aria-hidden","true"),m("recentsHidden");else{var a=c(e.UHF_EDGE_NOTIFICATION).height(),o=c(e.APP_BANNER).height(),r=c(e.UHF_COOKIE_ALERT).height();i.css("margin-top",a+o+r),i.attr("data-status","visible"),i.attr("aria-hidden","false"),m("recentsShown")}c(e.SKYPE_CHAT_SELECTOR).attr("data-bi-scn",function(t){return"open"===t.attr("data-bi-scn")?"close":"open"}(c(e.SKYPE_CHAT_SELECTOR)))},y=function(t){function n(t){var n=c(e.LOGIN_MENU_WRAPPER),o=c(e.LOGIN_MENU);a||(C.get("recentsInitStatus")===i.notStarted&&(d.isNullOrUndefined(f.pluck(window,"swc","module"))||(C.update({recentsInitStatus:i.inProgress}),window.swc.module.create("recents",{},document.querySelector(e.SKYPE_RECENT_SELECTOR)),C.update({recentsInitStatus:i.finished}))),C.get("recentsInitStatus")===i.finished&&g(n,o,t))}!function(t){var n=document.getElementById(e.UHF_EDGE_NOTIFICATION_ID);n&&n.addEventListener("animationend",function(){var n=c(e.UHF_EDGE_NOTIFICATION).height();t.css("margin-top",n)})}(t),c(e.SKYPE_CHAT_SELECTOR).attr("href",null),c(e.SKYPE_CHAT_SELECTOR).on("click touchstart",function(e){a?location.href="https://web.skype.com":(e.stopImmediatePropagation(),n(t))}),c(e.SKYPE_CHAT_SELECTOR).on("keydown",function(i){i.keyCode===u.TAB&&(i.shiftKey?c(e.UHF_MORE_NAV_ITEM).length>0&&(i.preventDefault(),c(e.UHF_MORE_NAV_ITEM).focus()):c(e.SWC_SEARCH_INPUT).length>0&&"visible"===t.attr("data-status")&&(i.preventDefault(),c(e.SWC_SEARCH_INPUT).focus())),i.keyCode===u.ENTER&&(a?location.href="https://web.skype.com":(i.preventDefault(),n(t)))}),_(t)},_=function(t){window.addEventListener("keydown",function(n){n.stopPropagation(),n.keyCode===u.ESCAPE&&"visible"===t.attr("data-status")&&(t.attr("data-status","invisible"),c(e.SKYPE_CHAT_SELECTOR).attr("data-bi-scn","open")),n.keyCode===u.TAB&&c(e.SWC_RECENT_CONTACTS_ITEMS).length>0&&"visible"===t.attr("data-status")&&(c(e.SWC_RECENT_CONTACTS_ITEMS).attr("tabindex","0").attr("aria-label","message"),"undefined"===h(c(e.SWC_FOOTER_MESSAGE).attr("tabindex"))&&(c(e.SWC_FOOTER_MESSAGE).attr("tabindex","0").attr("aria-label","message"),function(t){c(e.SWC_FOOTER_MESSAGE).on("keydown",function(n){n.keyCode===u.TAB&&(t.attr("data-status","invisible"),c(e.SKYPE_CHAT_SELECTOR).attr("data-bi-scn","open"),c(e.SKYPE_CHAT_SELECTOR).focus())})}(t))),n.keyCode===u.TAB&&c(e.SWC_RECENT_CONTACTS_ITEMS).length>0&&"invisible"===t.attr("data-status")&&("0"===c(e.SWC_RECENT_CONTACTS_ITEMS).attr("tabindex")&&c(e.SWC_RECENT_CONTACTS_ITEMS).removeAttr("tabindex").removeAttr("aria-label"),"0"===c(e.SWC_FOOTER_MESSAGE).attr("tabindex")&&c(e.SWC_FOOTER_MESSAGE).removeAttr("tabindex").removeAttr("aria-label"))})};var T=function(){return window.swc.API.registerEvent("unreadConversationsUpdate",function(t){var n=document.querySelector(e.SKYPE_CHAT_SELECTOR),i=document.querySelector(e.SKYPE_CHAT_TOOLTIP_SELECTOR);n.ariaLabel=n.ariaLabel.replace("${UNREAD_COUNT}",t||0),i.innerHTML=i.innerHTML.replace("${UNREAD_COUNT}",t||0),document.querySelector(e.UNREAD_COUNTER).innerText=t,document.querySelector(e.UNREAD_WRAPPER).style.display=t>0?"block":"none"}),window.swc.module.create("chat",n,document.querySelector(e.CHAT_WRAPPER_PLACEHOLDER)),window.swc.API.registerEvent("proxy:keyboard:sendOnEscape",function(t){S(),c(e.SKYPE_CHAT_SELECTOR).focus()}),Promise.resolve()};var b=function(n){if(n){var a=c(e.SKYPE_RECENT_SELECTOR);!function(t){l.on(l.RESIZE,function(){l.isMobile()&&"visible"===t.attr("data-status")&&!p.isV2()?(t.attr("data-status","invisible"),c(e.SKYPE_CHAT_SELECTOR).attr("data-bi-scn","open")):l.isMobileUHF()&&"visible"===t.attr("data-status")&&p.isV2()&&(t.attr("data-status","invisible"),c(e.SKYPE_CHAT_SELECTOR).attr("data-bi-scn","open"))})}(a),function(t){t.on("keydown",function(n){n.keyCode===u.TAB&&n.target===this&&n.shiftKey&&(n.preventDefault(),c(e.SKYPE_CHAT_SELECTOR).focus(),t.attr("data-status","invisible"),c(e.SKYPE_CHAT_SELECTOR).attr("data-bi-scn","open"))})}(a),y(a),c("html").on("click touchstart",function(t){var e,n,i=t.target,a=document.getElementById("main-recentlist"),o=document.getElementById("swc-recents-chats");a&&i&&(e=a.contains(i)),o&&i&&(n=o.contains(i)),e?n&&S():S()});var r=function(t){return function(t){return null===window.swc||void 0===window.swc?Promise.reject("SWC Chat is not loaded properly"):window.swc.init(null,{tokenProvider:t,toLoadUnreadConversationsCount:!0}).then(T)}(function(){return Promise.resolve(t)}).catch(function(){return Promise.reject()})},s=function(t){l.isMobile()&&!p.isV2()||l.isMobileUHF()&&p.isV2()?l.on(l.RESIZE,function(){C.get("lazyInitStatus")===i.inProgress||C.get("lazyInitStatus")===i.finished||l.isMobile()||l.isMobileUHF()||function(t){C.update({lazyInitStatus:i.inProgress}),r(t).then(function(){C.update({lazyInitStatus:i.finished})})}(t)}):r(t)};o.on(t.SWC_CORE_READY_EVENT,function(){s(n)})}};return f.pluck(r,"swcChat","chat")&&function(){var t=f.pluck(r,"swcChat","sdkUrl"),e=f.pluck(r,"swcChat","environment");s.on(s.EVENTS.READY,function(n){var i=n.skypetoken;t&&v.loadScriptTags([{src:t,data:{"data-manual-boot":!0,"data-environment":e}}],function(){b(i)})})}(),{closeRecentChats:S,CONSTS:t}}.apply(e,i))||(t.exports=a)}.apply(e,i))||(t.exports=a)},358:function(t,e,n){var i,a;i=[n(8),n(48),n(42),n(6),n(33)],void 0===(a=function(){"use strict";function o(t){"@babel/helpers - typeof";return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i=[n(0),n(355),n(53),n(22),n(67),n(92),n(125),n(367),n(2),n(180),n(11)],void 0===(a=function(t,e,n,i,a,r,s,u,l,c){var p={swcChatMenuItem:"#skypeStatus",logoutSelectors:["#uhfJoin","[data-link-type=logout]"]},d={sticky:!1,showLinks:!0,showButtons:!1,accountLink:"/",logoutLink:"/"},f={},E=function(){var e=i.getLocationHref(),n=v.call(this),a=!1;return t.each(n,function(t,n){if(null!==e.match(n))return a=!0,!1}),a},v=function(){var e=t(this).attr("href"),n=t(this).data("urls"),i=[h(e)];return n&&t.each(n.split(","),function(e,n){i.push(h(t.trim(n)))}),i},h=function(t){if(!t)return t;var e=t.replace(/^(https|http):\/\//,"").replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&");return new RegExp(e,"ig")};function C(){c.isV2()&&c.uhfMoreRender(),c.addAriaHiddenUhf()}var m=function(){var i=t("#customMeControl"),a=t("nav #skypeStatus"),c=t("nav .signInDropdownWrapper [data-element-type='menuDropdownToggle']"),d=c.find(".avatarReal"),E=c.find(".avatarDummy"),v=t("nav .signInDropdownWrapper [data-element-type='subMenu']"),h=c.find("a.usernameBtn");i.length>0&&v.length>0&&(t("html").on("click touchstart",function(e){t("nav").find(".hover").removeClass("hover"),v.attr("aria-expanded",!1),h.each(function(){t(this).attr("data-expanded",!1)})}),v.on("touchstart",function(t){t.stopPropagation()}),c.click(function(n){n.stopPropagation(),i.toggleClass("hover"),i.toggleClass(u.OPEN_SUBMENU_CLASS);var a="false"===v.attr("aria-expanded");v.attr("aria-expanded",a),c.each(function(){t(this).attr("data-expanded",a),t(this).attr("aria-expanded",a)}),e.closeRecentChats()}),d.on("load",function(){d.addClass("ready")}),r.initialize(),r.on(r.PROFILE_READY,function(e){e&&(l.isNullOrUndefined(e.username)||p.logoutSelectors.map(function(e){t(e).attr("href",f.header.logoutLink)}),l.isNullOrUndefined(e.avatarUrl)||(e.avatarUrl==r.DEFAULT_AVATAR?setTimeout(function(){E.addClass("ready")},0):d.attr("src",e.avatarUrl),"true"===n.swcChat.chat&&function(t){null!=t&&"object"===o(t)&&t.removeClass("hidden")}(a),C()))}),r.on(r.PROFILE_ERROR,function(t){var e=t.status||"";c.addClass("noAvatar"),s.trackCustomImpressionEvent("nav","profile_loading_failed_"+e)}),S())},S=function(){a.on(a.RESIZE,C)};!function(){var e=d;n.navigation&&n.navigation.header&&(e=t.extend(d,n.navigation.header)),f.header=e}(),f.header.sticky&&t("#nav-wrapper").addClass("stickyDesktop"),f.header.showLinks&&t("nav").addClass("showLinks"),f.header.showButtons&&t("nav").addClass("showButtons"),t("ul.navigationBar li.mainMenuItem a[data-urls]").each(function(){if(!0===E.call(this))return t(this).parent("li.mainMenuItem").addClass("active"),!1}),m()}.apply(e,i))||(t.exports=a)}.apply(e,i))||(t.exports=a)},359:function(t,e,n){var i,a;void 0===(a=function(){"use strict";i=[n(88),n(22),n(373),n(125),n(11)],void 0===(a=function(t,e,n,i){var a="skype-app-banner",o={path:"/",domain:"."+e.getDomainName(),expiry:864e5,secure:!0};function r(){i.trackElementImpression(n.jQElement)}function s(e){e.stopPropagation(),t.createSingleValue(a,1).store(o)}!t.exists(a)&&n.jQElement.length>0&&(n.on(n.OPEN,r),n.on(n.CLOSE,s),n.show())}.apply(e,i))||(t.exports=a)}.apply(e,i=[]))||(t.exports=a)},360:function(t,e,n){var i,a;i=[n(1),n(6)],void 0===(a=function(){"use strict";i=[n(374),n(370),n(88),n(53),n(125),n(11)],void 0===(a=function(t,e,n,i,a){var o="cookiePolicy",r="skype-cookie-policy",s="at,be,bg,hr,cy,cz,dk,ee,fi,fr,de,gr,hu,ie,it,lv,lt,lu,mt,nl,pl,pt,ro,sk,si,es,se,gb,is,li,no",u=7776e6,l=null,c={Advertising:[],Analytics:[],SocialMedia:[]};function p(t,i,a){a!=i&&t.forEach(function(t){i||function(t){n.exists(t)&&e.setCookie(t,-1)}(t)})}function d(){l=window.siteConsent.getConsent(),window.siteConsent.onConsentChanged(function(t){!function(t){var e=t.Analytics,n=t.Advertising,i=t.SocialMedia;l&&(p(c.Analytics,e,l.Analytics),p(c.Advertising,n,l.Advertising),p(c.SocialMedia,i,l.SocialMedia)),l=window.siteConsent.getConsent()}(t)})}e.shouldBeDisplayed(o,r,u,s)&&t.jQElement.length&&(t.open(),a.trackElementImpression(t.jQElement),e.setCookie(r,u)),function(){if(window.siteConsent);else var t=setInterval(function(){if(window.siteConsent)return d(),void clearInterval(t)},200)}(),i&&i.cookies&&(c={Advertising:i.cookies.advertisingsCookies.split(","),Analytics:i.cookies.analyticsCookies.split(","),SocialMedia:i.cookies.socialMediaCookies.split(",")})}.apply(e,i))||(t.exports=a)}.apply(e,i))||(t.exports=a)},366:function(t,e,n){var i,a;i=[n(1),n(12),n(43)],void 0===(a=function(){"use strict";i=[n(368)],void 0===(a=function(t){var e=t.sanitizeUrl;function n(t,e){return Object.keys(e).map(function(n){t.setAttribute(n,e[n])}),t}return{loadScriptTags:function(t,i){t.map(function(t){var i=document.createElement("script");i.className="apolloLoader",i.src=e(t.src),i.async=!0,n(i,t.data),document.head.appendChild(i)}),i&&"function"==typeof i&&i()},setAttr:n}}.apply(e,i))||(t.exports=a)}.apply(e,i))||(t.exports=a)},367:function(t,e,n){var i,a;i=[n(8)],void 0===(a=function(){"use strict";i=[n(52),n(31),n(0),n(122),n(18),n(126),n(2),n(34)],void 0===(a=function(t,e,n,i,a,o,r,s){var u=function(t){this.jQElement=n(t)};n("body").on("click.signinDropdown",function(t){!n(t.target).hasClass(".usernameBtn")&&n(".usernameBtn").is("[data-expanded ='true']")&&(n(".usernameBtn").attr("data-expanded",!1),n(".usernameBtn").attr("aria-expanded",!1),n(".usernameBtn").parents(".mainMenuItem").removeClass("submenu-open"))}),u.prototype.attachNavigationLinkEventHandlers=function(){var t=this;t.jQElement.off("keydown.keyboardNavigation").on("keydown.keyboardNavigation",function(e){t.getKeycodeEventHandlerAndInvoke(e)}),t.jQElement.off("click").on("click",function(e){if(!t.jQElement.hasClass("hostMeetingClass")&&(e.stopImmediatePropagation(),t.click))return t.click(e)}),this.jQElement.hasClass("activeStatus")&&this.jQElement.find("a").off("focus").on("focus",function(){t.jQElement.hasClass("hover")||(i.removeHover(),t.jQElement.addClass("hover"))}),this.jQElement.hasClass("signInDropdownWrapper")&&this.jQElement.find(".usernameBtn").attr("tabindex","0")},u.prototype.getKeycodeEventHandler=function(e){var n=e.which;return function(e){return e===t.ENTER}(n)||(e.stopImmediatePropagation(),n===t.TAB&&e.shiftKey&&(n=t.SHIFT_TAB)),this[n]},u.prototype.getKeycodeEventHandlerAndInvoke=function(t){var e,n=this.getKeycodeEventHandler(t);return n&&(e=n.call(this,t)),e},u.prototype.focus=function(){i.removeHover();var t=n(".skype-recents"),e=p(this.jQElement),a=e?this.jQElement.parents(".mainMenuItem"):this.jQElement,o=a.find("[role='menu']");o.length>0&&(a.addClass("submenu-open"),o.attr("aria-expanded",!0),a.find(".usernameBtn").each(function(){n(this).attr("data-expanded",!0),n(this).attr("aria-expanded",!0)})),e&&(a.addClass("hover"),"visible"===t.attr("data-status")&&(t.attr("data-status","invisible"),n(".skypeChat").attr("data-bi-scn","open"))),this.jQElement.addClass("hover").find("a:visible").first().focus()},u.prototype.hasSubMenu=function(){return c(this.jQElement)},u.prototype.isParent=function(){return l(this.jQElement)},u.prototype.toggleUserSubmenu=function(t){this.jQElement=n(t);var e=!this.jQElement.hasClass("hover");this.jQElement.toggleClass("hover"),this.jQElement.toggleClass("submenu-open"),this.jQElement.find("[role='menu']").attr("aria-expanded",e),n(".usernameBtn").attr("data-expanded",e),n(".usernameBtn").attr("aria-expanded",e)},u.prototype[t.ENTER]=function(t){c(t.target)&&(t.preventDefault(),this.toggleUserSubmenu(this.jQElement))},u.prototype[t.TAB]=function(t){if(!this.jQElement.hasClass("hostMeetingClass")){t.preventDefault();var e=p(this.jQElement)?this.jQElement.parents(".mainMenuItem"):this.jQElement;if(!this.jQElement.hasClass("openMenu")&&e.hasClass("submenu-open")){var n=this.getNextVisible();n?(n.hasSubMenu()&&(n=n.getNext()),n.focus()):i.transferFocusToContentAfterNavigation()}else i.transferFocusToContentAfterNavigation()}},u.prototype[t.SHIFT_TAB]=function(t){var e=this.getPreviousVisible();e?(t.preventDefault(),e.focus()):r.isNullOrUndefinedOrEmpty(i.transferFocusToContentBeforeNavigation())||t.preventDefault()},u.prototype.getNext=function(t){var e=this.jQElement;t=t||1;for(var n=0;n<t;++n)if(c(e))e=e.find(".subMenu li:first");else{var i=e.next("li");if(i.length&&!this.isVisible(i)&&(i=i.next("li"),n+=1),i.length)e=i;else{if(t>1)break;if(!p(e)){e=void 0;break}if(!(i=e.parents(".mainMenuItem").next("li")).length){e=void 0;break}e=i}}return e?new u(e):void 0},u.prototype.getPrevious=function(t){var e=this.jQElement;t=t||1;for(var n=0;n<t;++n){var i=e.prev("li");if(i.length&&!this.isVisible(i)&&(i=i.prev("li"),n+=1),!i.length){if(t>1)break;if(p(e)){var a=e.parents(".mainMenuItem");if(e.length>0){e=a;break}e=void 0;break}e=void 0;break}e=c(i)?i.find(".subMenu li:last"):i}return e?new u(e):void 0},u.prototype.focusNext=function(t){var e=this.getNext(t);e&&e.focus()},u.prototype.focusPrevious=function(t){var e=this.getPrevious(t);e&&e.focus()},u.prototype.getNextTopLevelNavigationLink=function(){var t=this.jQElement;return p(t)&&(t=t.parents(".mainMenuItem")),(t=t.next("li")).length?new u(t):void 0},u.prototype.getNextVisibleTopLevelNavigationLink=function(){for(var t=this.getNextTopLevelNavigationLink();t&&!t.isVisibleInCurrentResponsiveState();)t=t.getNextTopLevelNavigationLink();return t},u.prototype.getPreviousTopLevelNavigationLink=function(){var t=this.jQElement;return(t=p(t)?t.parents(".mainMenuItem"):t.prev("li")).length?new u(t):void 0},u.prototype.getTopLevelNavigationLink=function(){var t=this.jQElement;return(t=p(t)?t.parents(".mainMenuItem"):t.closest("li")).length?new u(t):void 0},u.prototype.getPreviousVisibleTopLevelNavigationLink=function(){for(var t=this.getPreviousTopLevelNavigationLink();t&&!t.isVisibleInCurrentResponsiveState();)t=t.getPreviousTopLevelNavigationLink();return t},u.prototype.getPreviousVisible=function(){for(var t=this.getPrevious();t&&!t.isVisibleInCurrentResponsiveState();)t=t.getPrevious();return t},u.prototype.getNextVisible=function(){var t=void 0;for(t=this.getNext();t&&!t.isVisibleInCurrentResponsiveState();)t=t.getNext();return t},u.prototype.isVisibleInCurrentResponsiveState=function(){var t=e.isVisible(this.jQElement);return t&&d(this.jQElement)&&(t=this.jQElement.is(":visible")),t},u.prototype.isVisible=function(t){var e=t||this.jQElement;return!!e.length&&e.is(":visible")},u.onHashChangeEventHandler=function(t){if("endNavigation"===t){a.clearHash();var e=i.transferFocusToContentAfterNavigation();e&&function(t){var e=t.offset().top,n=document.getElementById("s4lHeader");i.isSticky()&&(e-=i.height()),s.scrollTo(0,e),null!==n&&(n.style.position="static")}(e)}};var l=function(t){return c(t)},c=function(t){return n(t).is("[data-expanded ='false']")||n(t).is("[aria-haspopup='true']")},p=function(t){return!!n(t).parents(".mainMenuItem").length},d=function(t){var e=n(t);return e.hasClass("account")||e.hasClass("mainMenuButton")};return o.on("change init",u.onHashChangeEventHandler),u.OPEN_MENU_CLASS="openMenu",u.CLOSE_MENU_CLASS="closeMenu",u.HOVER_CLASS="hover",u.OPEN_SUBMENU_CLASS="submenu-open",u}.apply(e,i))||(t.exports=a)}.apply(e,i))||(t.exports=a)},368:function(t,e,n){var i,a;i=[n(33),n(42)],void 0===(a=function(){"use strict";void 0===(a=function(){var t=/^(%20|\s)*(javascript|data)/im,e=/[^\x20-\x7E]/gim,n=/^([^:]+):/gm,i=[".","/"];return{sanitizeUrl:function(a){var o,r,s=a.replace(e,"");return function(t){return i.indexOf(t[0])>-1}(s)?s:(r=s.match(n))?(o=r[0],t.test(o)?"about:blank":s):"about:blank"}}}.call(e,n,e,t))||(t.exports=a)}.apply(e,i))||(t.exports=a)},370:function(t,e,n){var i,a;i=[n(8)],void 0===(a=function(){"use strict";i=[n(7),n(22),n(88),n(22),n(18),n(182),n(11)],void 0===(a=function(t,e,n,i,a,o){var r={path:"/",domain:"."+e.getDomainName(),expiry:7776e6},s={};return s.init=function(e){s.closeButtonJqElement=e.find(".closeButton"),e.length>0&&(t.create(s),function(t){s.closeButtonJqElement.on("click",function(e){e.preventDefault(),s.close(t,e)}),o.watchResponsivity(t)}(e))},s.open=function(t,e){o.openBanner(t),t.trigger("open",e).removeClass("hiddenFocus")},s.close=function(t,e){o.closeBanner(t),t.trigger("close",e).addClass("hiddenFocus")},s.setCookie=function(t,e){var i=n.createSingleValue(t,1),a=function(t){var e=r;return e.expiry=t,e.secure=!0,e}(e);i.store(a)},s.shouldBeDisplayed=function(t,i,o,r){return!function(t,e,n){var i=!1;return a.hasQuery(t)&&(s.setCookie(e,n),i=!0),i}(t,i,o)&&!n.exists(i)&&function(t){var n;return null==t||void 0===(n=e.getRegion())||0===n.length||t.indexOf(n.toLowerCase())>-1}(r)},s.INIT="init",s.OPEN="open",s.CLOSE="close",s}.apply(e,i))||(t.exports=a)}.apply(e,i))||(t.exports=a)},373:function(t,e,n){var i,a;i=[n(8)],void 0===(a=function(){"use strict";i=[n(7),n(182),n(0),n(11)],void 0===(a=function(t,e,n){var i=n("html"),a=function(){s.appBannerCloseButtonJQElement.on("click",function(t){t.preventDefault(),t.stopPropagation(),o(t)})},o=function(t){e.closeBanner(s.jQElement),r("close",t)},r=function(t,e){s.jQElement.trigger(t,e)},s={OPEN:"open",CLOSE:"close",getCloseButton:function(){return s.appBannerCloseButtonJQElement},show:function(){i.addClass("app-banner"),e.openBanner(s.jQElement),r("open")},close:o};return s.jQElement=n("#appBanner"),s.appBannerCloseButtonJQElement=s.jQElement.find(".closeButton"),t.create(s),s.jQElement.length>0&&a(),s}.apply(e,i))||(t.exports=a)}.apply(e,i))||(t.exports=a)},374:function(t,e,n){var i,a;void 0===(a=function(){"use strict";i=[n(370),n(0),n(11)],void 0===(a=function(t,e){var n={};return n.open=function(e){t.open(n.jQElement,e)},n.jQElement=e("#cookiePolicy"),t.init(n.jQElement),n}.apply(e,i))||(t.exports=a)}.apply(e,i=[]))||(t.exports=a)}}]);