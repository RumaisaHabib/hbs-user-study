"use strict";var Dell;(Dell=window.Dell||{}).UnifiedCommunication=Dell.UnifiedCommunication||{},Dell.UnifiedCommunication.Common=Dell.UnifiedCommunication.Common||{},function(e,n){(function(){var t={},i=/^[a-z]+$/;function o(){t.targetId="ucTarget",t.country&&t.language&&t.segment&&t.pageId&&(void 0===Dell.Metrics.sc.showcontactdrawer||"true"===Dell.Metrics.sc.showcontactdrawer||!0===Dell.Metrics.sc.showcontactdrawer)&&(function(){t.targetId="ucTarget";var e=function(){var e=n.getElementById("unified-masthead"),i=n.createElement("aside");i.setAttribute("id",t.targetId),e&&e.parentNode&&e.nextSibling?e.parentNode.insertBefore(i,e.nextSibling):n.getElementsByTagName("body")[0].appendChild(i);return i}();e.classList.add("uc-div"),e.setAttribute("component","uc")}(),function(){var i=function(){var t=n.getElementById("unified-communication-script");if(e.location.hostname.lastIndexOf("pcf.dell.com")>0&&0===e.location.hostname.indexOf("unified-communication")){if(null!==t){var i=t.src;if(null!==i&&""!==i){var o=i.split("/");if(o.length>2)return i=o[0]+"//"+o[2]}}return console.warn("unable to find test env, falling back to prod"),"https://www.dell.com"}return e.location.hostname.lastIndexOf("pcf.dell.com")>0&&e.location.hostname.indexOf("-stage.")>0||e.location.hostname.lastIndexOf("uat.delltechnologies.com")>=0?"https://unified-communication-web-stage.g5p.pcf.dell.com":0==e.location.hostname.indexOf("test-stage")?"https://test-stage.dell.com":t&&t.src&&t.src.indexOf("localhost")>0?e.location.origin:0==e.location.hostname.indexOf("www-wip")?"https://www-wip.dell.com":"https://www.dell.com"}();if(void 0===i)return void console.error("unified communication api endpoint is undefined");"/"===i.slice(-1)&&(i=i.slice(0,-1));var o=i+"/csbapi/unified-communication/contact/"+t.domain+"/"+t.country+"/"+t.language+"/"+t.segment+"/"+t.pageId,a=new XMLHttpRequest;a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE&&200===a.status){if(null==a.responseText||0===a.responseText.length)return;var i=a.responseText;e.dellNonce&&(i=i.replaceAll("{dellNonce}",e.dellNonce)),n.getElementById(t.targetId).innerHTML=i;var o=function(e,t){t||(t=n.getElementById("uc-panel"));if(t.hasAttribute(e))return t.getAttribute(e);return""}("data-unified-domainSrc");""!==o&&(l=o,c=function(){Dell.UnifiedCommunication.Domain.Init()},(r=n.createElement("script")).src=l,r.type="text/javascript",r.onload=function(){c(r)},n.getElementsByTagName("body")[0].appendChild(r))}var l,c,r},a.open("GET",o,!0),a.send()}())}function a(e,n){return e&&e.replace(/\s/g,"").length===n&&e.replace(/\s/g,"").toLowerCase().match(i)}this.Init=function(e){t=e,o()},this.ValidMetrics=function(e,n){return a(e,n)},this.GetCountry=function(e){return a((n=e).country,2)?n.country.replace(/\s/g,"").toLowerCase():"";var n},this.GetLanguage=function(e){return a((n=e).language,2)?n.language.replace(/\s/g,"").toLowerCase():"";var n}}).call(Dell.UnifiedCommunication.Common)}(window,document),(Dell=window.Dell||{}).UnifiedCommunication=Dell.UnifiedCommunication||{},function(){var e={};!function(){if(Dell&&Dell.Metrics&&Dell.Metrics.sc){var n=Dell.Metrics.sc;e.country=Dell.UnifiedCommunication.Common.GetCountry(n),e.language=Dell.UnifiedCommunication.Common.GetLanguage(n),e.segment=function(e){return e.segment&&"gen"==e.segment.toLowerCase()?"corp":e.segment&&(Dell.UnifiedCommunication.Common.ValidMetrics(e.segment,3)||Dell.UnifiedCommunication.Common.ValidMetrics(e.segment,4))?e.segment.toLowerCase():""}(n),e.pageId=function(e){var n="";try{return e.wacontroller&&e.waapplicationname&&(n=e.waapplicationname+"-"+e.wacontroller),n?n.toLowerCase().replace(/[^a-zA-Z0-9-_]/g,""):"default"}catch(e){return console.error(e),"default"}}(n),e.domain="stp",Dell.UnifiedCommunication.Common.Init(e)}}()}.call(Dell.UnifiedCommunication);