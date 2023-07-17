!function(){"use strict";var i,e;(e=i=i||{})[e.Error=0]="Error",e[e.Warning=1]="Warning",e[e.Debug=2]="Debug";var a=["color: #fff;","background: #ff8f1c;","display: inline-block;","padding: 1px 4px;","border-radius: 3px;"].join(" "),h=(s.Log=function(e,t){if(!(s.LOGLEVEL<e)){var o=i[e].toUpperCase(),n=window.navigator.userAgent,r=0<n.indexOf("MSIE ")||0<n.indexOf("Trident/");window.console&&(r?console.log("[PubTag] "+o+": "+t):console.log("%cPubTag",a,o+": "+t))}},s.Debug=function(e){s.Log(i.Debug,e)},s.Warning=function(e){s.Log(i.Warning,e)},s.Error=function(e){},s.LOGLEVEL=i.Error,s);function s(){}var c=(t.getHighestAccessibleWindow=function(e){var t=e,o=!1;try{for(;t.parent.document!==t.document;){if(!t.parent.document){o=!0;break}t=t.parent}}catch(e){o=!0}return{topFrame:t,err:o}},t.getHighestAccessibleUrl=function(e){var t=e.topFrame;if(!e.err)return t.location.href;try{var o=t.top.location.href;if(o)return o}catch(e){}try{var n=t.location.ancestorOrigins;if(n)return n[n.length-1]}catch(e){}return t.document.referrer},t.inIframe=function(){},t);function t(){}function r(e){}var u=(o.prototype.getCMPFrame=function(){},o.prototype.hasCallerFunctionInWindow=function(){return"function"==typeof this.currentWindow.__uspapi},o.prototype.readyToRetrieve=function(){return this.hasCallerFunctionInWindow()||void 0!==this.getCMPFrame()},o.prototype.retrieveConsent=function(o){var n=this,r=!1,i=window.setTimeout(function(){},this.timeout);this.executeCommand("getUSPData",1,function(e,t){r||(clearTimeout(i),t?(n.logger("CCPA consent retrieved"),n.processResponseData(e,o)):(n.logger("Error retrieving CCPA consent data from CMP"),o(void 0)))})},o.prototype.processResponseData=function(e,t){e?t(e):(this.logger("Unable to read CCPA consent data from CMP"),t(void 0))},o.prototype.executeCommand=function(e,t,o){var i=this;if(!this.hasCallerFunctionInWindow()){this.logger("No CCPA CMP defined on current frame");var a=this.getCMPFrame();this.currentWindow.__uspapi=function(e,t,o){},this.currentWindow.addEventListener("message",function(e){},!1)}this.currentWindow.__uspapi(e,t,o)},o.prototype.hasUserOptOut=function(e){return!(!e||!e.uspString||"1YNY"===e.uspString.toUpperCase()||"1YNN"===e.uspString.toUpperCase()||"1YN-"===e.uspString.toUpperCase()||"1-N-"===e.uspString.toUpperCase()||"1---"===e.uspString)},o);function o(e,t,o){void 0===o&&(o=function(e){}),this.uspapiCallbacks={},this.currentWindow=e,this.timeout=t.uspApiTimeout,this.logger=o}var l=(n.prototype.getReadyToRetrieveProvider=function(){return this.tcfv2ConsentProvider.hasCallerFunctionInFrame()?this.tcfv2ConsentProvider:this.tcfv1ConsentProvider.hasCallerFunctionInFrame()?this.tcfv1ConsentProvider:void 0!==this.tcfv2ConsentProvider.getCMPFrame()?this.tcfv2ConsentProvider:void 0!==this.tcfv1ConsentProvider.getCMPFrame()?this.tcfv1ConsentProvider:void 0},n.prototype.retrieveConsentForPassback=function(e){},n.prototype.retrieveConsent=function(e){var t=this.getReadyToRetrieveProvider();void 0===t&&(this.logger("No compatible GDPR privacy provider found"),e(void 0)),null==t||t.retrieveConsent(e)},n.prototype.readyToRetrieve=function(){return this.tcfv2ConsentProvider.readyToRetrieve()||this.tcfv1ConsentProvider.readyToRetrieve()},n);function n(e,t,o){void 0===o&&(o=function(e){}),this.tcfv1ConsentProvider=e,this.tcfv2ConsentProvider=t,this.logger=o}var p=(d.prototype.getCMPFrame=function(){},d.prototype.hasCallerFunctionInFrame=function(){},d.prototype.readyToRetrieve=function(){},d.prototype.pingWithTimeout=function(n,e,t,o){},d.prototype.retrieveConsent=function(e){},d.prototype.retrieveConsentForPassback=function(e){},d.prototype.executeRetrieveConsent=function(e,t,o){},d.prototype.processConsentData=function(e,t){},d.prototype.executeCommand=function(e,t,o){},d);function d(e,t,o){void 0===o&&(o=function(e){}),this.cmpCallbacks={},this.currentWindow=e,this.timeout=t.tcfTimeout,this.pingTimeout=t.tcfPingTimeout,this.pingDelay=t.tcfPingDelay,this.cmpAutoDetect=t.cmpAutoDetect,this.logger=o}var f=(m.prototype.getCMPFrame=function(){},m.prototype.hasCallerFunctionInFrame=function(){return"function"==typeof this.currentWindow.__tcfapi},m.prototype.readyToRetrieve=function(){return this.hasCallerFunctionInFrame()||void 0!==this.getCMPFrame()},m.prototype.pingWithTimeout=function(o,e,t,n){function r(e,t){}var i=this;return window.setTimeout(function(){},t)},m.prototype.retrieveConsent=function(o){var n=this,r=!1,i=window.setTimeout(function(){},this.timeout),a=!1!==this.cmpAutoDetect?this.pingWithTimeout(i,this.pingTimeout,this.pingDelay,function(){}):void 0;this.executeCommand("getTCData",2,function(e,t){clearTimeout(a),r||(clearTimeout(i),t?(n.logger("TCFv2 consent retrieved in ms"),n.processResponseData(e,o)):(n.logger("Error retrieving TCFv2 consent data from CMP"),o(void 0)))},[91])},m.prototype.processResponseData=function(e,t){var o,n;if(e){var r={};void 0!==e.tcString&&(r.consentData=e.tcString),void 0!==e.gdprApplies&&(r.gdprApplies=!!e.gdprApplies),r.version=e.tcfPolicyVersion?e.tcfPolicyVersion:2,r.purposes=null===(o=null==e?void 0:e.purpose)||void 0===o?void 0:o.consents,r.vendorConsents=null===(n=null==e?void 0:e.vendor)||void 0===n?void 0:n.consents,t(r)}else this.logger("Unable to read GDPR consent data from CMP"),t(void 0)},m.prototype.executeCommand=function(e,t,o,n){var a=this;if(!this.hasCallerFunctionInFrame()){this.logger("No TCFv2 CMP defined on current frame");var s=this.getCMPFrame();this.currentWindow.__tcfapi=function(e,t,o,n){},this.currentWindow.addEventListener("message",function(e){},!1)}this.currentWindow.__tcfapi(e,t,o,n)},m);function m(e,t,o){void 0===o&&(o=function(e){}),this.cmpCallbacks={},this.currentWindow=e,this.timeout=t.tcfTimeout,this.pingTimeout=t.tcfPingTimeout,this.pingDelay=t.tcfPingDelay,this.cmpAutoDetect=t.cmpAutoDetect,this.logger=o}var g=(v.prototype.getCMPFrame=function(){},v.prototype.hasCallerFunctionInFrame=function(){return"function"==typeof this.currentWindow.__gpp},v.prototype.readyToRetrieve=function(){return this.hasCallerFunctionInFrame()||void 0!==this.getCMPFrame()},v.prototype.pingWithTimeout=function(o,e,t,n){function r(e,t){i.logger(t),clearTimeout(e),n()}var i=this;return window.setTimeout(function(){var t=window.setTimeout(function(){r(o,"Timeout: Unable to get GPP ping return after "+e+"ms")},e);i.executeCommand("ping",function(e){})},t)},v.prototype.retrieveConsent=function(o){var n=this,r=!1,i=window.setTimeout(function(){},this.timeout),a=!1!==this.cmpAutoDetect?this.pingWithTimeout(i,this.pingTimeout,this.pingDelay,function(){r=!0,n.logger("Timeout: Unable to ping GPP after "+n.pingTimeout+"ms"),o(void 0)}):void 0;this.executeCommand("getGPPData",function(e,t){})},v.prototype.processResponseData=function(e,t){},v.prototype.executeCommand=function(e,t,o){var i=this;if(!this.hasCallerFunctionInFrame()){this.logger("No GPP CMP defined on current frame");var a=this.getCMPFrame();this.currentWindow.__gpp=function(e,t,o){},this.currentWindow.addEventListener("message",function(e){},!1)}this.currentWindow.__gpp(e,t,o)},v);function v(e,t,o){void 0===o&&(o=function(e){}),this.cmpCallbacks={},this.currentWindow=e,this.timeout=t.gppTimeout,this.pingTimeout=t.gppPingTimeout,this.pingDelay=t.gppPingDelay,this.cmpAutoDetect=t.cmpAutoDetect,this.logger=o}var y=(C.prototype.checkLocalStorage=function(e){if(!this.localStorage)return!1;var t=this.CHECK_STORAGE_KEY;try{return this.checkTcfPurposeOne(e)?(this.localStorage.setItem(t,t),this.localStorage.removeItem(t),!0):(h.Debug("Purpose One not granted"),!1)}catch(e){return!1}},C.prototype.checkTcfPurposeOne=function(e){return!(e&&e.gdprConsent&&e.gdprConsent.purposes)||!0===e.gdprConsent.purposes[1]},C.prototype.removeItem=function(e){},C.prototype.getItem=function(e,t){if(!this.localStorageEnabled)return null;var o=(new Date).getTime(),n=this.localStorage.getItem(e+this.EXPIRE_SUFFIX),r=n?parseInt(n,10):-1;return-1!==r&&r<o||t&&(-1===r||t<r-o)?(this.removeItem(e),null):this.localStorage.getItem(e)},C.prototype.setItem=function(e,t,o){if(this.localStorageEnabled)try{if(this.localStorage.setItem(e,t),o){var n=(new Date).getTime()+o;this.localStorage.setItem(e+this.EXPIRE_SUFFIX,n.toString())}}catch(e){}},C.prototype.getAllItemsByPrefix=function(e){},C);function C(e,t){this.EXPIRE_SUFFIX="_expires",this.CHECK_STORAGE_KEY="criteo_localstorage_check",this.localStorage=function(e){try{return e.localStorage}catch(e){return}}(e||window),this.localStorageEnabled=this.checkLocalStorage(t)}var _=(w.prototype.checkTcfPurposeOne=function(e){return!(e&&(null==e?void 0:e.gdprConsent)&&e.gdprConsent.purposes)||!0===e.gdprConsent.purposes[1]},w.prototype.setCookie=function(e,t,o,n,r){void 0===r&&(r=!1);var i=n||document,a=i.location.hostname,s=new Date;s.setTime(s.getTime()+60*o*60*1e3);var c="expires="+s.toUTCString();if(!r)return this.setCookieString(e,t,c,void 0,i),a;for(var u=a.split("."),l=1;l<u.length;++l){var p=u.slice(u.length-l-1,u.length).join(".");if(!(-1<this.publicTopTlds.indexOf(p)))try{this.setCookieString(e,t,c,p,i);var d=this.getCookie(e,n);if(d&&d===t)return p}catch(e){}}return a},w.prototype.deleteCookie=function(e,t,o){void 0===o&&(o=!1),this.setCookie(e,"",0,t,o)},w.prototype.getCookie=function(e,t){if(this.cookiesEnabled)for(var o=0,n=(t||document).cookie.split(";");o<n.length;o++){var r=n[o],i=r.substr(0,r.indexOf("=")).replace(/^\s+|\s+$/g,""),a=r.substr(r.indexOf("=")+1);if(i===e)return decodeURIComponent(a)}},w.prototype.setCookieString=function(e,t,o,n,r){if(this.cookiesEnabled){var i=e+"="+encodeURIComponent(t)+";"+o+";";n&&""!==n&&(i+="domain=."+n+";"),r.cookie=i+"path=/"}},w);function w(e){this.publicTopTlds=["co.id","co.il","co.jp","co.kr","co.nz","co.th","co.uk","com.au","com.br","com.mx","com.my","com.pl","com.sg","com.tr","com.vn"],this.cookiesEnabled=this.checkTcfPurposeOne(e)}var T=(I.isChrome=function(){return-1!=navigator.userAgent.indexOf("Chrome")},I.addOneTrialTokenInDocument=function(e){},I.addTrialTokens=function(){this.isChrome()&&(this.addOneTrialTokenInDocument(I.CRITEO_NET_TOKEN),this.addOneTrialTokenInDocument(I.CRITEO_COM_TOKEN))},I.CRITEO_NET_TOKEN="A/vXSuiuvzsL+Db89QNS/YzqK5Wmzx9oASGHZVMjcaWfVdbB6eUJrJGNr7uhrsmiGhryVjVALd72agYzELDTMAgAAACAeyJvcmlnaW4iOiJodHRwczovL2NyaXRlby5uZXQ6NDQzIiwiZmVhdHVyZSI6IlByaXZhY3lTYW5kYm94QWRzQVBJcyIsImV4cGlyeSI6MTY2OTc2NjM5OSwiaXNTdWJkb21haW4iOnRydWUsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=",I.CRITEO_COM_TOKEN="A0KGawWMfAygakxUO+Z3rulPwK2j0AqkLneiEt4pAI951GYaafeHNV9Ya+PAn7s0y12QSrfTjc9LdOUU+QfkdQwAAACAeyJvcmlnaW4iOiJodHRwczovL2NyaXRlby5jb206NDQzIiwiZmVhdHVyZSI6IlByaXZhY3lTYW5kYm94QWRzQVBJcyIsImV4cGlyeSI6MTY2OTc2NjM5OSwiaXNTdWJkb21haW4iOnRydWUsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=",I);function I(){}var S=(P.prototype.initializeServices=function(){var o=this;this.initializing=!0,this.retrievePrivacyConsent(function(e){var t={localStorageHelper:new y(o.topFrame,e),privacies:e,ccpaConsentProvider:o.ccpaConsentProvider,gppConsentProvider:o.gppConsentProvider,cookieHelper:new _(e)};o.services=t,o.initialized=!0,o.initializing=!1,o.postInitiliazeServicesCallbacks.forEach(function(e){e(t)})})},P.prototype.getServicesAsync=function(e){this.initialized?e(this.services):(this.postInitiliazeServicesCallbacks.push(e),this.initializing||this.initializeServices())},P.prototype.retrievePrivacyConsent=function(t){var e=this.tcfCompatibleConsentProvider.readyToRetrieve(),o=this.ccpaConsentProvider.readyToRetrieve(),n=this.gppConsentProvider.readyToRetrieve();e||o||n||t(void 0);var r=[];e&&r.push(l),o&&r.push(u),n&&r.push(g);var i={};e&&this.tcfCompatibleConsentProvider.retrieveConsent(function(e){i.gdprConsent=e,r.splice(r.indexOf(l),1),0===r.length&&t(i)}),o&&this.ccpaConsentProvider.retrieveConsent(function(e){i.ccpaIabConsent=e,r.splice(r.indexOf(u),1),0===r.length&&t(i)}),n&&this.gppConsentProvider.retrieveConsent(function(e){i.gppConsent=e,r.splice(r.indexOf(g),1),0===r.length&&t(i)})},P);function P(e,t,o,n,r){this.initializing=!1,this.initialized=!1,this.postInitiliazeServicesCallbacks=[],this.topFrame=e||window,T.addTrialTokens();var i,a=(i=r,{uspApiTimeout:parseInt("50",10),tcfTimeout:parseInt("10000",10),tcfPingTimeout:Math.min(parseInt("10000",10),parseInt("50",10)),tcfPingDelay:Math.min(parseInt("10000",10),parseInt("1000",10)),gppTimeout:parseInt("10000",10),gppPingTimeout:Math.min(parseInt("10000",10),parseInt("50",10)),gppPingDelay:Math.min(parseInt("10000",10),parseInt("1000",10)),cmpAutoDetect:null==i?void 0:i.cmpAutoDetect});this.ccpaConsentProvider=t||new u(window,a,h.Warning);var s=new p(window,a,h.Warning),c=new f(window,a,h.Warning);this.tcfCompatibleConsentProvider=o||new l(s,c,h.Warning),this.gppConsentProvider=n||new g(window,a,h.Warning),this.initializeServices()}function b(t,o){}var E=function(e,t){return(E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){}||function(e,t){})(e,t)};function D(e,t){function o(){this.constructor=e}E(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}var A,R,O,k;(R=A=A||{})[R.None=0]="None",R[R.Cookie=1]="Cookie",R[R.LocalStorage=2]="LocalStorage",R[R.Delegation=4]="Delegation",(k=O=O||{})[k.Unknown=0]="Unknown",k[k.Deactivated=1]="Deactivated",k[k.Activated=2]="Activated";var M=(F.prototype.getSid=function(){},F.prototype.getIdCpy=function(){},F.prototype.getLocalWebId=function(){},F.prototype.getOptOut=function(){},F.prototype.getBundle=function(){return this.userDataHandlers.bundle().fromAllStorages()},F);function F(e){this.userDataHandlers=e}var U=(L.fromUserIdentificationData=function(e){},L.fromValue=function(e){},L.prototype.hasValue=function(){},L);function L(e,t){this.value=e,this.origin=t}var N,W=(D(H,N=U),H.prototype.hasValue=function(){return""!==String(this.value)&&null!==this.value&&void 0!==this.value},H.prototype.saveOnAllStorages=function(){if(this.hasValue()){var e="boolean"==typeof this.value?this.value?"1":"0":String(this.value);this.storageAdapter.writeToAllStorages(this.storageKey,e,this.expirationTimeHours)}},H.prototype.toJSON=function(){return{value:this.value,origin:this.origin}},H);function H(e,t,o,n,r){var i=N.call(this,o,n)||this;return i.storageKey=e,i.expirationTimeHours=t,i.storageAdapter=r,i}var G=(x.prototype.sid=function(){return this.createGuid(x.SID_COOKIE_NAME)},x.prototype.idCpy=function(){return this.createGuid(x.IDCPY_COOKIE_NAME)},x.prototype.localWebId=function(){return this.createGuid(x.LWID_COOKIE_NAME)},x.prototype.optOut=function(){return new V(Boolean,x.OPTOUT_COOKIE_NAME,x.OPTOUT_RETENTION_TIME_HOUR,this.storageAdapter)},x.prototype.bundle=function(){return this.createGuid(x.BUNDLE_COOKIE_NAME)},x.prototype.createGuid=function(e){return new V(String,e,x.GUID_RETENTION_TIME_HOUR,this.storageAdapter)},x.SID_COOKIE_NAME="cto_sid",x.IDCPY_COOKIE_NAME="cto_idcpy",x.LWID_COOKIE_NAME="cto_lwid",x.OPTOUT_COOKIE_NAME="cto_optout",x.BUNDLE_COOKIE_NAME="cto_bundle",x.GUID_RETENTION_TIME_HOUR=9360,x.OPTOUT_RETENTION_TIME_HOUR=43200,x);function x(e){this.storageAdapter=e}var V=(B.prototype.fromAllStorages=function(){var e=this.storageAdapter.readFromAllStorages(this.storageKey),t="boolean"==typeof(new this.type).valueOf()?"1"===e.value:e.value;return this.create(t,e.origin)},B.prototype.fromValue=function(e){return this.create(e,A.None)},B.prototype.removeFromAllStorages=function(){},B.prototype.create=function(e,t){return new W(this.storageKey,this.expirationTimeHours,e,t,this.storageAdapter)},B);function B(e,t,o,n){this.type=e,this.storageKey=t,this.expirationTimeHours=o,this.storageAdapter=n}var q=(K.prototype.getSyncframeListener=function(o,n){var r=this;return function(e){if(!r.discardMessageFromOtherFrames(e)||r.window.criteo_syncframe_state.ForceSyncframeMessageHandling){var t=e.data;(null==t?void 0:t.requestId)===o&&(e.stopImmediatePropagation(),r.handleSyncframeResponse(t,n),r.window.criteo_syncframe_state.firstSyncframeCompleted=!0,r.window.criteo_syncframe_state.syncframeRequested=!1,r.tryUnqueueAppendSyncframeRequests())}}},K.prototype.userBundleHasAlreadyBeenRetrieved=function(){return this.userDataHandlers.bundle().fromAllStorages().hasValue()},K.prototype.canDropSyncframe=function(){return!this.window.criteo_syncframe_state.syncframeRequested},K.prototype.discardMessageFromOtherFrames=function(e){return!e.data||e.origin!=this.syncframeOrigin},K.prototype.appendGumIframeIfDoesNotExist=function(e,t,o){var n,r=this;!0===(null===(n=this.window.criteo_syncframe_state)||void 0===n?void 0:n.firstSyncframeCompleted)||this.userBundleHasAlreadyBeenRetrieved()||this.canDropSyncframe()?this.appendGumIframe(e,t,o):this.queueAppendSyncframeRequest(function(){})},K.prototype.doOnCompletedDom=function(e){},K.prototype.appendGumIframe=function(e,t,o){t();var n=e();if(this.consentAllowsSyncframeToBeDropped(n.consent)){this.window.addEventListener("message",this.getSyncframeListener(n.requestId,o),!0);var r=this.createIFrame(n);this.document.body.appendChild(r),this.window.criteo_syncframe_state.syncframeRequested=!0}else this.handleSyncframeResponse({},o)},K.prototype.consentAllowsSyncframeToBeDropped=function(e){var t;return 2!==(null==e?void 0:e.gdprVersion)||!0!==(null==e?void 0:e.gdprApplies)||!0===(null===(t=null==e?void 0:e.vendorConsents)||void 0===t?void 0:t[this.criteoGlobalVendorListId])},K.prototype.queueAppendSyncframeRequest=function(e){},K.prototype.tryUnqueueAppendSyncframeRequests=function(){for(var e,t,o=null===(e=this.window.criteo_syncframe_state.appendSyncframeRequestQueue)||void 0===e?void 0:e.shift();void 0!==o;)o(),o=null===(t=this.window.criteo_syncframe_state.appendSyncframeRequestQueue)||void 0===t?void 0:t.shift()},K.prototype.createIFrame=function(e){var t,o=this.document.createElement("iframe"),n={uid:e.uid,lwid:e.localWebId,bundle:e.bundle,optout:e.optoutCookie,sid:e.secureIdCookie,tld:e.topLevelDomain,topUrl:e.topUrl,version:"string"==typeof e.version?null===(t=e.version)||void 0===t?void 0:t.replace(/\./g,"_"):e.version,cw:e.canWriteCookie,lsw:e.canWriteLocalStorage,origin:e.origin,pm:e.privateMode,rtusCallerId:e.rtusCallerId,requestId:e.requestId},r=[];return r.push("origin="+e.origin),r.push("topUrl="+e.topUrl),e.consent&&(void 0!==e.consent.gdprApplies&&r.push("gdpr="+(e.consent.gdprApplies?1:0)),void 0!==e.consent.consentData&&r.push("gdpr_consent="+e.consent.consentData),void 0!==e.consent.uspString&&r.push("us_privacy="+e.consent.uspString)),e.isDebug&&r.push("debug=1"),o.src=this.syncframeEndpoint+"?"+r.join("&")+"#"+JSON.stringify(n),o.width="0",o.height="0",o.frameBorder="0",o.style.borderWidth="0px",o.style.margin="0px",o.style.display="none",o.title="Criteo GUM iframe",o},K);function K(e,t,o){this.criteoGlobalVendorListId=91,this.window=e,this.document=e.document,this.userDataHandlers=new G(t),o=null!=o?o:"gum.criteo.com",this.syncframeOrigin="https://"+o,this.syncframeEndpoint="https://"+o+"/syncframe",this.window.criteo_syncframe_state||(this.window.criteo_syncframe_state={syncframeRequested:!1}),this.window.criteo_syncframe_state.appendSyncframeRequestQueue||(this.window.criteo_syncframe_state.appendSyncframeRequestQueue=[])}var z,j=(D(Y,z=q),Y.prototype.handleSyncframeResponse=function(e,t){var o;if(e.optout)this.userDataHandlers.idCpy().removeFromAllStorages(),this.userDataHandlers.sid().removeFromAllStorages(),this.userDataHandlers.bundle().removeFromAllStorages(),this.userDataHandlers.optOut().fromValue(!0).saveOnAllStorages(),null===(o=null==t?void 0:t.resolve)||void 0===o||o.call(t,"");else{if(e.uid&&this.userDataHandlers.idCpy().fromValue(e.uid).saveOnAllStorages(),e.callbacks)for(var n=0,r="string"==typeof e.callbacks?[e.callbacks]:e.callbacks;n<r.length;n++){var i=r[n],a=this.document.createElement("img");a.style.display="none",a.width=1,a.height=1,a.setAttribute("data-owner","criteo-tag"),a.src=i}else e.bundle&&this.userDataHandlers.bundle().fromValue(e.bundle).saveOnAllStorages();e.removeSid?this.userDataHandlers.sid().removeFromAllStorages():e.sid&&this.userDataHandlers.sid().fromValue(e.sid).saveOnAllStorages(),(null==t?void 0:t.resolve)&&t.resolve(e.bundle?e.bundle:"")}},Y.prototype.appendGumIFrameOnCompletedDomIfItDoesNotExist=function(e,t){function o(){return n.appendGumIframeIfDoesNotExist(function(){return n.createSyncframeRequest(e(),r)},function(){},{resolve:t})}var n=this,r=Math.random().toString();this.adapter.isPubTagIds?o():this.doOnCompletedDom(o)},Y.prototype.createSyncframeRequest=function(e,t){return{uid:this.userDataHandlers.idCpy().fromAllStorages().toJSON(),localWebId:this.userDataHandlers.localWebId().fromAllStorages().toJSON(),bundle:this.userDataHandlers.bundle().fromAllStorages().toJSON(),optoutCookie:this.userDataHandlers.optOut().fromAllStorages().toJSON(),secureIdCookie:this.userDataHandlers.sid().fromAllStorages().toJSON(),topLevelDomain:e.topLevelDomain,topUrl:e.topUrl,version:e.version,canWriteCookie:e.canWriteCookie,canWriteLocalStorage:e.canWriteLocalStorage,origin:this.adapter.isPubTagIds?"publishertagids":"publishertag",privateMode:void 0,consent:e.consent,rtusCallerId:void 0,isDebug:this.adapter.isDebug,requestId:t}},Y.prototype.fetchUserData=function(){return new M(this.userDataHandlers)},Y);function Y(e,t,o){void 0===o&&(o=!1);var n=z.call(this,t,e.storageAdapter,o?"gumi.criteo.com":"gum.criteo.com")||this;return n.adapter=e,n}var J=(X.prototype.synchronizeCriteoUid=function(e,t){var o=this,n=null==e?void 0:e.gdprConsent,r=null==e?void 0:e.ccpaIabConsent;this.syncframe.appendGumIFrameOnCompletedDomIfItDoesNotExist(function(){return{topLevelDomain:o.getTld(),topUrl:encodeURIComponent((e=o.topUrl,(t=document.createElement("a")).href=e,{protocol:t.protocol,host:t.host,hostname:t.hostname,pathname:"/"===t.pathname[0]?t.pathname.slice(1):t.pathname,search:t.search,href:t.href}).hostname),version:137,canWriteCookie:o.canWriteCookies,canWriteLocalStorage:o.localStorageHelper.localStorageEnabled,consent:{gdprApplies:null==n?void 0:n.gdprApplies,consentData:null==n?void 0:n.consentData||"",gdprVersion:null==n?void 0:n.version,vendorConsents:null==n?void 0:n.vendorConsents,uspString:null==r?void 0:r.uspString,ccpaVersion:null==r?void 0:r.version}};var e,t},t)},X.prototype.checkCookiesAreWriteable=function(){var e="cto_writeable";this.cookieHelper.setCookie(e,"1",1,this.topDoc,!0);var t="1"===this.cookieHelper.getCookie(e,this.topDoc);return this.cookieHelper.deleteCookie(e,this.topDoc,!0),t},X.prototype.writeOnAllStorages=function(e,t,o){this.localStorageHelper.setItem(e,t),this.cookieHelper.setCookie(e,t,o,this.topDoc,!0)},X.prototype.getFromAllStorages=function(e){var t=this.cookieHelper.getCookie(e,this.topDoc),o=this.localStorageHelper.getItem(e)||void 0;return{value:t||o,origin:(t&&A.Cookie)|(o&&A.LocalStorage)}},X.prototype.deleteFromAllStorage=function(e){},X.prototype.getTld=function(){var e=this.cookieHelper.setCookie(X.TLD_TEST_COOKIE_NAME,"test",1,this.topDoc,!0);return this.cookieHelper.deleteCookie(X.TLD_TEST_COOKIE_NAME,this.topDoc,!0),e},X.prototype.fetchUserData=function(){return this.syncframe.fetchUserData()},X.TLD_TEST_COOKIE_NAME="cto_pub_test_tld",X);function X(e,t,o,n,r,i){var a=this;this.topDoc=o.document,this.cookieHelper=e,this.localStorageHelper=t,this.canWriteCookies=this.checkCookiesAreWriteable(),this.topUrl=r;var s=!1;try{s=JSON.parse("false")}catch(e){}this.syncframe=new j({storageAdapter:{readFromAllStorages:function(e){var t=a.getFromAllStorages(e);return{value:t.value,origin:t.origin}},writeToAllStorages:function(e,t,o){a.writeOnAllStorages(e,t,o)},removeFromAllStorages:function(e){}},isPubTagIds:null!=i&&i,isDebug:n},o,s)}function Q(e){}var Z,$,ee=(te.generateCacheBuster=function(){},te);function te(){}($=Z=Z||{})[$.Unspecified=0]="Unspecified",$[$.AMP=1]="AMP";var oe=(ne.prototype.buildUrl=function(e,t,o,n,r){},ne.prototype.buildErrorUrl=function(){},ne.prototype.buildCsmEventsUrl=function(){},ne.prototype.buildCsmCountersUrl=function(){},ne.prototype.appendCommonParameters=function(e,t,o,n){},ne.prototype.getHandlerPath=function(){},ne.CRITEO_BIDDER_URL="https://bidder.criteo.com/",ne.CRITEO_BIDDER_HANDLER="cdb",ne.CRITEO_CSM_HANDLER="csm",ne.CRITEO_CSM_EVENTS_HANDLER="csm/events",ne.CRITEO_CSM_COUNTERS_HANDLER="csm/counters",ne.CRITEO_ERROR_HANDLER="error",ne.CRITEO_BIDDER_AUDIT_HANDLER="prebid/audit",ne);function ne(e){void 0===e&&(e=!1),this.auditMode=e}var re=(ie.prototype.sendEventsToBeacon=function(e,t){},ie);function ie(){this.urlBuilder=new oe}var ae=(se.CreateRunning=function(){},se.CreateWithStartTime=function(e){},se.TimeSincePageLoad=function(){if(window.performance){if(window.performance.now)return window.performance.now();if(window.performance.timing&&window.performance.timing.navigationStart)return(new Date).getTime()-performance.timing.navigationStart}return 0},se.prototype.start=function(){},se.prototype.elapsed=function(){},se);function se(e){}var ce,ue=(D(le,ce=re),le.prototype.sendSetTagLoadedTime=function(){this.sendEvents({eventId:"TagLoaded",elapsed:ae.TimeSincePageLoad()})},le.prototype.sendSetEspPromiseTime=function(){},le.prototype.sendReturnEspPromiseToGptTime=function(){},le.prototype.sendResolveEspPromiseTime=function(){},le.prototype.sendEvents=function(e){var t={events:[e],domain:this.topFrame.location.hostname,requestId:this.requestId};this.isEligibleForCsmEvents&&this.sendEventsToBeacon(t,this.urlBuilder.buildCsmEventsUrl())},le);function le(e,t){var o=ce.call(this)||this;return o.topFrame=e,o.isEligibleForCsmEvents=t,o.requestId=crypto.randomUUID(),o}var pe=(de.prototype.isEligibleForCsmEvents=function(){return this.sessionRandomId%100==0},de.VERSION=137,de);function de(e,u,t,o){var n;void 0===e&&(e=null===(n=window.Criteo_identitytag_137||window.Criteo)||void 0===n?void 0:n.config),void 0===o&&(o=(new Date).getUTCMilliseconds()),this.sessionRandomId=o;var l=c.getHighestAccessibleWindow(window),p=c.getHighestAccessibleUrl(l),d=new ue(l.topFrame,this.isEligibleForCsmEvents());d.sendSetTagLoadedTime();var r,f="1"===function(e){var t={},o=e.split("?");if(1<o.length)for(var n=0,r=o[1].split("&");n<r.length;n++){var i=r[n].split("=");t[b(i[0])]=b(i[1])}return t}(p).pbt_debug||!1;f&&(r=i.Debug,h.LOGLEVEL=r),(t||new S(l.topFrame,void 0,void 0,void 0,e)).getServicesAsync(function(e){var t,o,n,r,i;if(!(null===(t=e.ccpaConsentProvider)||void 0===t?void 0:t.hasUserOptOut(null===(o=e.privacies)||void 0===o?void 0:o.ccpaIabConsent))){var a=(null==u?void 0:u())||new J(e.cookieHelper,e.localStorageHelper,l.topFrame,f,p,!0),s=a.fetchUserData().getBundle();if(s.hasValue()&&""!==s.value){var c=new Promise(function(e,t){});n=c,r=function(){},i=function(){},Q(function(){})}a.synchronizeCriteoUid(e.privacies)}}),h.Debug("Publisher Tag loaded")}var fe="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var he,me=(function(e,t){var o;o=function(){function c(e){}var o=Array.isArray?Array.isArray:function(e){},n=0,t=void 0,r=void 0,a=function(e,t){};var e="undefined"!=typeof window?window:void 0,i=e||{},s=i.MutationObserver||i.WebKitMutationObserver,u="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),l="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function p(){}var d=new Array(1e3);function f(){}var h,m,g,v,y=void 0;function C(e,t){}function _(e){}y=u?function(){}:s?(m=0,g=new s(f),v=document.createTextNode(""),g.observe(v,{characterData:!0}),function(){}):l?((h=new MessageChannel).port1.onmessage=f,function(){}):(void 0===e?function(){}:p)();var w=Math.random().toString(36).substring(2);function T(){}var I=void 0,S=1,P=2;function b(e,n,r){}function E(e,t,o){}function D(t,e){}function A(e){}function R(e,t){}function O(e,t){}function k(e,t,o,n){}function M(e){}function F(e,t,o,n){}var U=0;function L(e){}var N=(W.prototype._enumerate=function(e){},W.prototype._eachEntry=function(t,e){},W.prototype._settledAt=function(e,t,o){},W.prototype._willSettleAt=function(e,t){},W);function W(e,t){}var H=(G.prototype.catch=function(e){},G.prototype.finally=function(t){},G);function G(e){}return H.prototype.then=C,H.all=function(e){},H.race=function(r){},H.resolve=_,H.reject=function(e){},H._setScheduler=function(e){},H._setAsap=function(e){},H._asap=a,H.polyfill=function(){},H.Promise=H},e.exports=o()}(he={exports:{}},he.exports),he.exports).polyfill,ge=(ve.LoadPolyfills=function(){ve.DefineIsArray(),ve.DefineIndexOf(),ve.DefineFilter(),ve.DefinePromise()},ve.DefinePromise=function(){window.Promise||me()},ve.DefineIsArray=function(){Array.isArray||(Array.isArray=function(e){})},ve.DefineIndexOf=function(){Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){})},ve.DefineFilter=function(){Array.prototype.filter||(Array.prototype.filter=function(e){})},ve);function ve(){}window.criteo_pubtag||(ge.LoadPolyfills(),window.criteo_pubtag=new pe,window.criteo_identitytag_137=window.criteo_pubtag),window.Criteo=window.Criteo||{},window.Criteo_identitytag_137=window.Criteo}();