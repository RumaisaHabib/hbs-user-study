var e,t={COOKIELET_DELIMITER:"^",NAME_VALUE_DELIMITER:"/",escapedValue:!0},i={COOKIELET_DELIMITER:"^",NAME_VALUE_DELIMITER:"/",bUseExp:!0,startDelim:"b"},n={COOKIELET_DELIMITER:"^",NAME_VALUE_DELIMITER:"=",escapedValue:!0,startDelim:"^"},o={reg:["dp1","reg"],recent_vi:["ebay","lvmn"],ebaysignin:["ebay","sin"],p:["dp1","p"],etfc:["dp1","etfc"],keepmesignin:["dp1","kms"],ItemList:["ebay","wl"],BackToList:["s","BIBO_BACK_TO_LIST"]},r={r:t,dp1:i,npii:i,ebay:n,reg:n,apcCookies:n,ds2:{COOKIELET_DELIMITER:"^",NAME_VALUE_DELIMITER:"/"}},a={readCookie:function(e,t){var i=this.readCookieObj(e,t).value;return i?decodeURIComponent(i):""},createDefaultCookieBean:function(e,t){var i={};return i.name=e,i.cookieletname=t,i.value="",i.maxage=0,i.rawcookievalue="",i.mode="",i},readCookieObj:function(e,t){var i=this.createDefaultCookieBean(e,t);this.update(),this.checkConversionMap(i),i.rawcookievalue=this.aCookies[i.name],i.name&&i.rawcookievalue?i.cookieletname?this.readCookieletInternal(i):this.readCookieInternal(i):i.value="";var n=t&&t.match(/guid$/),o=void 0!==i?i:"";return o&&n&&i.value.length>32&&(i.value=i.value.substring(0,32)),o},checkConversionMap:function(e){var t=o[e.name];t&&(e.mode=this.getMode(e.name),e.name=t[0],e.cookieletname=t[1])},readCookieInternal:function(e){},readCookieletInternal:function(e){var t=this.getCookielet(e.name,e.cookieletname,e.rawcookievalue),i=this.getFormat(e.name);if(t&&i.bUseExp){var n=t;t=t.substring(0,t.length-8),n.length>8&&(e.maxage=n.substring(n.length-8))}return e.value=t,"10"==e.mode&&(e.value=e.rawcookievalue),e},readMultiLineCookie:function(e,t){},writeCookie:function(e,t,i){},writeRawCookie:function(e,t,i){if(e&&void 0!==t&&(isNaN(t)&&t.length<4e3||(t+"").length<4e3)){"number"==typeof i&&(i=this.getExpDate(i));var n=i?new Date(i):new Date(this.getExpDate(730)),o=this.getFormat(e),r=this.sCookieDomain,a=document.domain;if(-1===a.indexOf(r)){var s=a.indexOf(".ebay.");s>0&&(this.sCookieDomain=a.substring(s))}document.cookie&&(document.cookie=e+"="+(t||"")+(i||o.bUseExp?"; expires="+n.toGMTString():"")+"; domain="+this.sCookieDomain+"; path=/")}},writeCookieEx:function(e,t,i){},writeCookielet:function(e,t,i,n,o){if(e&&t){if(this.update(),this.getFormat(e).bUseExp&&i){"number"==typeof n&&(n=this.getExpDate(n));var r=n?new Date(n):new Date(this.getExpDate(730)),a=Date.UTC(r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate(),r.getUTCHours(),r.getUTCMinutes(),r.getUTCSeconds());a=Math.floor(a/1e3),i+=parseInt(a,10).toString(16)}var s=this.createCookieValue(e,t,i);this.writeRawCookie(e,s,o)}},writeMultiLineCookie:function(e,t,i,n,r){},getBitFlagOldVersion:function(e,t){},setBitFlagOldVersion:function(e,t,i){},getBitFlag:function(e,t){},setBitFlag:function(e,t,i){},createCookieValue:function(e,t,i){var n,r=o[e],a=this.getFormat(e),s=this.getMode(e);if(n=!r||"00"!=s&&"01"!=s?this.aCookies[e]||"":this.readCookieObj(r[0],r[1]).value||"",a){var u=this.getCookieletArray(n,a);u[t]=i;var l="";for(var g in u)u.hasOwnProperty(g)&&(l+=g+a.NAME_VALUE_DELIMITER+u[g]+a.COOKIELET_DELIMITER);l&&a.startDelim&&(l=a.startDelim+l),n=l,a.escapedValue&&(n=encodeURIComponent(n))}return n},update:function(){var e=document.cookie.split("; ");this.aCookies={};for(var t=new RegExp('^"(.*)"$'),i=0;i<e.length;i++){var n=e[i].split("="),o=this.getFormat(n[0]),r=n[1],a=o.startDelim;a&&r&&0===r.indexOf(a)&&(n[1]=r.substring(a.length,r.length)),n[1]&&n[1].match(t)&&(n[1]=n[1].substring(1,n[1].length-1)),this.aCookies[n[0]]=n[1]}},getCookielet:function(e,t,i){var n=this.getFormat(e);return this.getCookieletArray(i,n)[t]||""},getFormat:function(e){return r[e]||t},getCookieletArray:function(e,t){var i=[],n=e||"";t.escapedValue&&(n=decodeURIComponent(n));for(var o=n.split(t.COOKIELET_DELIMITER),r=0;r<o.length;r++){var a=o[r].indexOf(t.NAME_VALUE_DELIMITER);a>0&&(i[o[r].substring(0,a)]=o[r].substring(a+1))}return i},getExpDate:function(e){var t;if("number"==typeof e&&e>=0){var i=new Date;i.setTime(i.getTime()+24*e*60*60*1e3),t=i.toGMTString()}return t},getMode:function(e){var t,i,n=this.readCookieObj("ebay","cv").value;if(!(e in o))return null;if(!n)return"";if(0===n)return"00";if(n&&"0"!=n){if(-1!==n.indexOf(".")){var r=n.split(".");for(i=0;i<r.length;i++)t=parseInt(r[i],16).toString(2)+t}else t=parseInt(n,16).toString(2);i=0;var a,s=t.length;for(var u in o){a=s-2*(i+1);var l=t.substring(a,a+2).toString(10);if(l=l||"00",e==u)return 1===l.length?"0"+l:l;i++}return null}return null},getMulti:function(e,t,i){},setMulti:function(e,t,i,n){},setJsCookie:function(){this.writeCookielet("ebay","js","1")}};e=function(){a.setJsCookie()},window.addEventListener?window.addEventListener("beforeunload",e):window.attachEvent&&window.attachEvent("onbeforeunload",e),"undefined"!=typeof jQuery&&"undefined"!=typeof $&&$(document).bind("ajaxSend",e),window["@ebay/cookies-browser"]=a,window["cookies-browser"]=a;