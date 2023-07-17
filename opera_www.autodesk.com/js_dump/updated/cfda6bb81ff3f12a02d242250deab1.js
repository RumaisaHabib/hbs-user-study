Array.prototype.filter||(Array.prototype.filter=function(t,e){}),Array.prototype.forEach||(Array.prototype.forEach=function(t){}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),Array.prototype.indexOf||(Array.prototype.indexOf=function(t,e){}),document.getElementsByClassName||(document.getElementsByClassName=function(t){}),document.querySelectorAll||(document.querySelectorAll=function(t){}),document.querySelector||(document.querySelector=function(t){}),Object.keys||(Object.keys=function(){}()),"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){}),String.prototype.replaceAll||(String.prototype.replaceAll=function(t,e){}),window.hasOwnProperty=window.hasOwnProperty||Object.prototype.hasOwnProperty;
if (typeof usi_commons === 'undefined') {
	usi_commons = {
		
		debug: location.href.indexOf("usidebug") != -1 || location.href.indexOf("usi_debug") != -1,
		
		log:function(msg) {
			if (usi_commons.debug) {
				try {
					if (msg instanceof Error) {
						console.log(msg.name + ': ' + msg.message);
					} else {
						console.log.apply(console, arguments);
					}
				} catch(err) {
					usi_commons.report_error_no_console(err);
				}
			}
		},
		log_error: function(msg) {},
		log_success: function(msg) {},
		dir:function(obj) {},
		log_styles: {
			error: 'color: red; font-weight: bold;',
			success: 'color: green; font-weight: bold;'
		},
		domain: "https://app.upsellit.com",
		cdn: "https://www.upsellit.com",
		is_mobile: (/iphone|ipod|ipad|android|blackberry|mobi/i).test(navigator.userAgent.toLowerCase()),
		device: (/iphone|ipod|ipad|android|blackberry|mobi/i).test(navigator.userAgent.toLowerCase()) ? 'mobile' : 'desktop',
		gup:function(name) {
			try {
				name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
				var regexS = "[\\?&]" + name + "=([^&#\\?]*)";
				var regex = new RegExp(regexS);
				var results = regex.exec(window.location.href);
				if (results == null) return "";
				else return results[1];
			} catch (e) {
				usi_commons.report_error(e);
			}
		},
		load_script:function(source, callback, nocache) {
			try {
				if (source.indexOf("//www.upsellit.com") == 0) source = "https:"+source; //upgrade non-secure requests
				var docHead = document.getElementsByTagName("head")[0];
				if (top.location != location) docHead = parent.document.getElementsByTagName("head")[0];
				var newScript = document.createElement('script');
				newScript.type = 'text/javascript';
				var usi_appender = "";
				if (!nocache && source.indexOf("/active/") == -1 && source.indexOf("_pixel.jsp") == -1 && source.indexOf("_throttle.jsp") == -1 && source.indexOf("metro") == -1 && source.indexOf("_suppress") == -1 && source.indexOf("product_recommendations.jsp") == -1 && source.indexOf("_pid.jsp") == -1 && source.indexOf("_zips") == -1) {
					usi_appender = (source.indexOf("?")==-1?"?":"&");
					if (source.indexOf("pv2.js") != -1) usi_appender = "%7C";
					usi_appender += "si=" + usi_commons.get_sess();
				}
				newScript.src = source + usi_appender;
				if (typeof callback == "function") {
					newScript.onload = function() {};
				}
				docHead.appendChild(newScript);
			} catch (e) {
				usi_commons.report_error(e);
			}
		},
		load_display:function(usiQS, usiSiteID, usiKey, callback) {},
		load_view:function(usiHash, usiSiteID, usiKey, callback) {},
		remove_loads:function() {},
		load:function(usiHash, usiSiteID, usiKey, callback){},
		load_precapture:function(usiQS, usiSiteID, callback) {},
		load_mail:function(qs, siteID, callback) {},
		load_products:function(options) {},
		send_prod_rec:function(siteID, info, real_time) {},
		report_error:function(err) {},
		report_error_no_console:function(err) {},
		gup_or_get_cookie: function(name, expireSeconds, forceCookie) {
			try {
				if (typeof usi_cookies === 'undefined') {
					usi_commons.log_error('usi_cookies is not defined');
					return;
				}
				expireSeconds = (expireSeconds || usi_cookies.expire_time.day);
				if (name == "usi_enable") expireSeconds = usi_cookies.expire_time.hour;
				var value = null;
				var qsValue = usi_commons.gup(name);
				if (qsValue !== '') {
					value = qsValue;
					usi_cookies.set(name, value, expireSeconds, forceCookie);
				} else {
					value = usi_cookies.get(name);
				}
				return (value || '');
			} catch (e) {
				usi_commons.report_error(e);
			}
		},
		get_sess: function() {
			var usi_si = null;
			if (typeof(usi_cookies) === "undefined") return "";
			try {
				if (usi_cookies.get('usi_si') == null) {
					var usi_rand_str = Math.random().toString(36).substring(2);
					if (usi_rand_str.length > 6) usi_rand_str = usi_rand_str.substring(0, 6);
					usi_si = usi_rand_str + "_" + Math.round((new Date()).getTime() / 1000);
					usi_cookies.set('usi_si', usi_si, 24*60*60);
					return usi_si;
				}
				if (usi_cookies.get('usi_si') != null) usi_si = usi_cookies.get('usi_si');
				usi_cookies.set('usi_si', usi_si, 24*60*60);
			} catch(err) {
				usi_commons.report_error(err);
			}
			return usi_si;
		},
		get_id: function(usi_append) {},
		load_session_data: function(extended) {
			try {
				if (usi_cookies.get_json("usi_session_data") == null) {
					usi_commons.load_script(usi_commons.domain + '/utility/session_data.jsp?extended=' + (extended?"true":"false"));
				} else {
					usi_app.session_data = usi_cookies.get_json("usi_session_data");
					if (typeof(usi_app.session_data_callback) !== "undefined") {
						usi_app.session_data_callback();
					}
				}
			} catch(err) {
				usi_commons.report_error(err);
			}
		}
	};
	setTimeout(function() {
		try {
			if (usi_commons.gup_or_get_cookie("usi_debug") != "") usi_commons.debug = true;
			if (usi_commons.gup_or_get_cookie("usi_qa") != "") {
				usi_commons.domain = usi_commons.cdn = "https://prod.upsellit.com";
			}
		} catch(err) {
			usi_commons.report_error(err);
		}
	}, 1000);
}
"undefined"==typeof usi_date&&(usi_date={},usi_date.PSTOffsetMinutes=480,usi_date.localOffsetMinutes=(new Date).getTimezoneOffset(),usi_date.offsetDeltaMinutes=usi_date.localOffsetMinutes-usi_date.PSTOffsetMinutes,usi_date.toPST=function(e){},usi_date.add_hours=function(e,t){},usi_date.add_minutes=function(e,t){},usi_date.add_seconds=function(e,t){},usi_date.get_week_number=function(e){},usi_date.is_date=function(e){},usi_date.is_date_within_range=function(e,t,a){},usi_date.is_after=function(e){try{usi_date.check_format(e);var t=usi_date.set_date(),a=new Date(e);return t.getTime()>a.getTime()}catch(e){"undefined"!=typeof usi_commons&&"function"==typeof usi_commons.report_error&&usi_commons.report_error(e)}return!1},usi_date.is_before=function(e){try{usi_date.check_format(e);var t=usi_date.set_date(),a=new Date(e);return t.getTime()<a.getTime()}catch(e){"undefined"!=typeof usi_commons&&"function"==typeof usi_commons.report_error&&usi_commons.report_error(e)}return!1},usi_date.is_between=function(e,t){return usi_date.check_format(e,t),usi_date.is_after(e)&&usi_date.is_before(t)},usi_date.check_format=function(e,t){(-1!=e.indexOf(" ")||t&&-1!=t.indexOf(" "))&&"undefined"!=typeof usi_commons&&"function"==typeof usi_commons.report_error&&usi_commons.report_error("Incorrect format: Use YYYY-MM-DDThh:mm:ss")},usi_date.is_date_after=function(e,t){},usi_date.is_date_before=function(e,t){},usi_date.string_to_date=function(e,t){},usi_date.set_date=function(){var e=new Date,t=usi_commons.gup("usi_force_date");if(""!==t){t=decodeURIComponent(t);var a=usi_date.string_to_date(t,!0);null!=a?(e=a,usi_cookies.set("usi_force_date",t,usi_cookies.expire_time.hour),usi_commons.log("Date forced to: "+e)):usi_cookies.del("usi_force_date")}else e=null!=usi_cookies.get("usi_force_date")?usi_date.string_to_date(usi_cookies.get("usi_force_date"),!0):new Date;return e},usi_date.diff=function(e,t,a,s){},usi_date.convert_units=function(e,t,a,s){},usi_date.get_units=function(e){});if("undefined"==typeof usi_cookies&&(usi_cookies={expire_time:{minute:60,hour:3600,two_hours:7200,four_hours:14400,day:86400,week:604800,two_weeks:1209600,month:2592e3,year:31536e3,never:31536e4},max_cookies_count:15,max_cookie_length:1e3,update_window_name:function(e,o,i){try{var n=-1;if(-1!=i){var t=new Date;t.setTime(t.getTime()+1e3*i),n=t.getTime()}var r=window.top||window,s=0;null!=o&&-1!=o.indexOf("=")&&(o=o.replace(new RegExp("=","g"),"USIEQLS")),null!=o&&-1!=o.indexOf(";")&&(o=o.replace(new RegExp(";","g"),"USIPRNS"));for(var a=r.name.split(";"),u="",c=0;c<a.length;c++){var l=a[c].split("=");3==l.length?(l[0]==e&&(l[1]=o,l[2]=n,s=1),null!=l[1]&&"null"!=l[1]&&(u+=l[0]+"="+l[1]+"="+l[2]+";")):""!=a[c]&&(u+=a[c]+";")}0==s&&(u+=e+"="+o+"="+n+";"),r.name=u}catch(e){}},flush_window_name:function(e){},get_from_window_name:function(e){try{for(var o,i=(window.top||window).name.split(";"),n=0;n<i.length;n++){var t=i[n].split("=");if(3==t.length){if(t[0]==e&&(-1!=(o=t[1]).indexOf("USIEQLS")&&(o=o.replace(new RegExp("USIEQLS","g"),"=")),-1!=o.indexOf("USIPRNS")&&(o=o.replace(new RegExp("USIPRNS","g"),";")),!("-1"!=t[2]&&usi_cookies.datediff(t[2])<0)))return[o,t[2]]}else if(2==t.length&&t[0]==e)return-1!=(o=t[1]).indexOf("USIEQLS")&&(o=o.replace(new RegExp("USIEQLS","g"),"=")),-1!=o.indexOf("USIPRNS")&&(o=o.replace(new RegExp("USIPRNS","g"),";")),[o,(new Date).getTime()+6048e5]}}catch(e){}return null},datediff:function(e){},count_cookies:function(e){},root_domain:function(){try{var e=document.domain.split("."),o=e[e.length-1];if("com"==o||"net"==o||"org"==o||"us"==o||"co"==o||"ca"==o)return e[e.length-2]+"."+e[e.length-1]}catch(e){}return document.domain},create_cookie:function(e,o,i){if(!1!==navigator.cookieEnabled){var n="";if(-1!=i){var t=new Date;t.setTime(t.getTime()+1e3*i),n="; expires="+t.toGMTString()}var r="samesite=none;";0==location.href.indexOf("https://")&&(r+="secure;");var s=usi_cookies.root_domain();"undefined"!=typeof usi_parent_domain&&-1!=document.domain.indexOf(usi_parent_domain)&&(s=usi_parent_domain),document.cookie=e+"="+encodeURIComponent(o)+n+"; path=/;domain="+s+"; "+r}},create_nonencoded_cookie:function(e,o,i){},read_cookie:function(e){if(!1===navigator.cookieEnabled)return null;var o=e+"=",i=[];try{i=document.cookie.split(";")}catch(e){}for(var n=0;n<i.length;n++){for(var t=i[n];" "==t.charAt(0);)t=t.substring(1,t.length);if(0==t.indexOf(o))return decodeURIComponent(t.substring(o.length,t.length))}return null},del:function(e){},get_ls:function(e){try{var o=localStorage.getItem(e);if(null!=o){if(0==o.indexOf("{")&&-1!=o.indexOf("usi_expires")){var i=JSON.parse(o);if((new Date).getTime()>i.usi_expires)return localStorage.removeItem(e),null;o=i.value}return decodeURIComponent(o)}}catch(e){}return null},get:function(e){var o=usi_cookies.read_cookie(e);if(null!=o)return o;try{if(null!=localStorage&&null!=(o=usi_cookies.get_ls(e)))return o;if(null!=sessionStorage&&null!=(o=sessionStorage.getItem(e)))return decodeURIComponent(o)}catch(e){}var i=usi_cookies.get_from_window_name(e);if(null!=i&&i.length>1)try{o=decodeURIComponent(i[0])}catch(e){return i[0]}return o},get_json:function(e){var o=null,i=usi_cookies.get(e);if(null==i)return null;try{o=JSON.parse(i)}catch(e){i=i.replace(/\\"/g,'"');try{o=JSON.parse(JSON.parse(i))}catch(e){try{o=JSON.parse(i)}catch(e){}}}return o},search_cookies:function(e){},set:function(e,o,i,n){"undefined"!=typeof usi_nevercookie&&(n=!1),void 0===i&&(i=-1);try{o=o.replace(/(\r\n|\n|\r)/gm,"")}catch(e){}"undefined"==typeof usi_windownameless&&usi_cookies.update_window_name(e+"",o+"",i);try{if(i>0&&null!=localStorage){var t={value:o,usi_expires:(new Date).getTime()+1e3*i};localStorage.setItem(e,JSON.stringify(t))}else null!=sessionStorage&&sessionStorage.setItem(e,o)}catch(e){}if(n||null==o){if(null!=o){if(null==usi_cookies.read_cookie(e))if(!n)if(usi_cookies.search_cookies("usi_").length+1>usi_cookies.max_cookies_count)return void usi_cookies.report_error('Set cookie "'+e+'" failed. Max cookies count is '+usi_cookies.max_cookies_count);if(o.length>usi_cookies.max_cookie_length)return void usi_cookies.report_error('Cookie "'+e+'" truncated ('+o.length+"). Max single-cookie length is "+usi_cookies.max_cookie_length)}usi_cookies.create_cookie(e,o,i)}},set_json:function(e,o,i,n){var t=JSON.stringify(o).replace(/^"/,"").replace(/"$/,"");usi_cookies.set(e,t,i,n)},flush:function(e){},print:function(){},value_exists:function(){var e,o;for(e=0;e<arguments.length;e++)if(""===(o=usi_cookies.get(arguments[e]))||null===o||"null"===o||"undefined"===o)return!1;return!0},report_error:function(e){}},"undefined"!=typeof usi_commons&&"function"==typeof usi_commons.gup&&"function"==typeof usi_commons.gup_or_get_cookie))try{""!=usi_commons.gup("usi_email_id")?usi_cookies.set("usi_email_id",usi_commons.gup("usi_email_id").split(".")[0],Number(usi_commons.gup("usi_email_id").split(".")[1]),!0):null==usi_cookies.read_cookie("usi_email_id")&&null!=usi_cookies.get_from_window_name("usi_email_id")&&(usi_commons.load_script("https://www.upsellit.com/launch/blank.jsp?usi_email_id_fix="+encodeURIComponent(usi_cookies.get_from_window_name("usi_email_id")[0])),usi_cookies.set("usi_email_id",usi_cookies.get_from_window_name("usi_email_id")[0],(usi_cookies.get_from_window_name("usi_email_id")[1]-(new Date).getTime())/1e3,!0)),""!=usi_commons.gup_or_get_cookie("usi_debug")&&(usi_commons.debug=!0),""!=usi_commons.gup_or_get_cookie("usi_qa")&&(usi_commons.domain=usi_commons.cdn="https://prod.upsellit.com")}catch(e){usi_commons.report_error(e)}
if (typeof usi_analytics === 'undefined') {
	usi_analytics = {
		cookie_length : 30,
		load_script:function(source) {
			var docHead = document.getElementsByTagName("head")[0];
			if (top.location != location) docHead = parent.document.getElementsByTagName("head")[0];
			var newScript = document.createElement('script');
			newScript.type = 'text/javascript';
			newScript.src = source;
			docHead.appendChild(newScript);
		},
		get_id:function() {
			var usi_id = null;
			try {
				if (usi_cookies.get('usi_analytics') == null && usi_cookies.get('usi_id') == null) {
					var usi_rand_str = Math.random().toString(36).substring(2);
					if (usi_rand_str.length > 6) usi_rand_str = usi_rand_str.substring(0, 6);
					usi_id = usi_rand_str + "_" + Math.round((new Date()).getTime() / 1000);
					usi_cookies.set('usi_id', usi_id, 30 * 86400, true);
					return usi_id;
				}
				if (usi_cookies.get('usi_analytics') != null) usi_id = usi_cookies.get('usi_analytics');
				if (usi_cookies.get('usi_id') != null) usi_id = usi_cookies.get('usi_id');
				usi_cookies.set('usi_id', usi_id, 30 * 86400, true);
			} catch(err) {
				usi_commons.report_error(err);
			}
			return usi_id;
		},
		send_page_hit:function(report_type, companyID, data1) {
			var qs = "";
			if (data1) qs += data1;
			usi_analytics.load_script(usi_commons.domain + "/analytics/hit.js?usi_a="+usi_analytics.get_id(companyID)+"&usi_t="+(Date.now())+"&usi_r="+report_type+"&usi_c="+companyID+qs+"&usi_u="+encodeURIComponent(location.href));
		}
	};
}"undefined"==typeof usi_dom&&(usi_dom={},usi_dom.get_elements=function(e,t){},usi_dom.count_elements=function(e,t){},usi_dom.get_nth_element=function(e,t,n){},usi_dom.get_first_element=function(e,t){},usi_dom.get_element_text_no_children=function(e,t){},usi_dom.clean_string=function(e){},usi_dom.encode=function(e){},usi_dom.get_closest=function(e,t){},usi_dom.get_classes=function(e){},usi_dom.add_class=function(e,t){},usi_dom.string_to_decimal=function(e){},usi_dom.string_to_integer=function(e){},usi_dom.get_currency_string_from_content=function(e){},usi_dom.get_absolute_url=function(){var e;return function(t){}}(),usi_dom.format_number=function(e,t){},usi_dom.format_currency=function(e,t,n){},usi_dom.to_decimal_places=function(e,t){},usi_dom.trim_string=function(e,t,n){},usi_dom.attach_event=function(e,t,n){},usi_dom.detach_event=function(e,t,n){},usi_dom.find_supported_element=function(e,t){},usi_dom.is_event_supported=function(e,t){},usi_dom.is_defined=function(e,t){},usi_dom.observe=function(e,t,n){var o=location.href,r=window.MutationObserver||window.WebkitMutationObserver;return t=t||{onUrlUpdate:!1,observerOptions:{childList:!0,subtree:!0}},function(e,n){}}(),usi_dom.params_to_object=function(e){},usi_dom.object_to_params=function(e){},usi_dom.interval_with_timeout=function(e,t,n,o){},usi_dom.load_external_stylesheet=function(e,t,n){},usi_dom.ready=function(e){void 0!==document.readyState&&"complete"===document.readyState?e():window.addEventListener?window.addEventListener("load",e,!0):window.attachEvent?window.attachEvent("onload",e):setTimeout(e,5e3)},usi_dom.fit_text=function(e,t){});
"undefined"==typeof usi_date&&(usi_date={},usi_date.PSTOffsetMinutes=480,usi_date.localOffsetMinutes=(new Date).getTimezoneOffset(),usi_date.offsetDeltaMinutes=usi_date.localOffsetMinutes-usi_date.PSTOffsetMinutes,usi_date.toPST=function(e){},usi_date.add_hours=function(e,t){},usi_date.add_minutes=function(e,t){},usi_date.add_seconds=function(e,t){},usi_date.get_week_number=function(e){},usi_date.is_date=function(e){},usi_date.is_date_within_range=function(e,t,a){},usi_date.is_after=function(e){},usi_date.is_before=function(e){},usi_date.is_between=function(e,t){},usi_date.check_format=function(e,t){},usi_date.is_date_after=function(e,t){},usi_date.is_date_before=function(e,t){},usi_date.string_to_date=function(e,t){},usi_date.set_date=function(){},usi_date.diff=function(e,t,a,s){},usi_date.convert_units=function(e,t,a,s){},usi_date.get_units=function(e){});
"undefined"==typeof usi_split_test&&(usi_split_test={split_test_name:"usi_dice_roll",split_group:"-1",split_siteID:"-1",split_test_cookie_length:3,get_split_var:function(t){},report_test:function(t,i){},get_group:function(t){},instantiate:function(t,i,s){}});

usi_parent_domain = document.domain.replace("store.", "").replace("cart.", "").replace("checkout.", "").replace("www.", "");
if (window.usi_app === undefined && window === window.parent) {
	try {
		if (typeof usi_cookies !== "undefined") {
			usi_cookies.max_cookies_count = 50;
		}
		usi_app = {};
		usi_app.is_storage_supported = function (type) {
			try {
				window[type].setItem('usi_' + type, '1');
				window[type].removeItem('usi_' + type);
				return true;
			} catch (e) {
				return false;
			}
		}
		
usi_app.encode_link = function (dest) {
	if (usi_app.locale == "en-MY") return encodeURIComponent(encodeURIComponent(dest + "&usi_pids=")) + encodeURIComponent("{{usi_pids}}");
  else return encodeURIComponent(encodeURIComponent("https://" + document.domain + dest + "&usi_pids=")) + encodeURIComponent("{{usi_pids}}");
};
usi_app.aff_links = {
	"en-GB": "https://www.dpbolvw.net/click-2681135-14068235",
	"en-UK": "https://www.dpbolvw.net/click-2681135-14068235",
	"en_SE": "https://www.dpbolvw.net/click-2681135-14535970",
	"en-MY": "https://www.kqzyfj.com/click-2681135-14065794",
	"en_MY": "https://www.kqzyfj.com/click-2681135-14065794",
	"en-SG": "https://www.anrdoezrs.net/click-2681135-14065798",
	"en_SG": "https://www.anrdoezrs.net/click-2681135-14065798",
	"en-NZ": "https://t.cfjump.com/12927/t/15672",
	"en-AU": "https://t.cfjump.com/12927/t/15672",
	"en_AU": "https://t.cfjump.com/12927/t/15672",
	"en-EU": "https://www.anrdoezrs.net/click-2681135-14068240",
	"en-CA": "https://www.jdoqocy.com/click-2681135-12797027",
	"en_CA": "https://www.jdoqocy.com/click-2681135-12797027",
	"en-US": "https://www.anrdoezrs.net/click-2681135-14065590",
	"en_US": "https://www.anrdoezrs.net/click-2681135-14065590",
	"en_IN": "https://www.jdoqocy.com/click-2681135-14065797",
	"es_AR": "https://www.dpbolvw.net/click-2681135-14065695",
	"es_MX": "https://www.anrdoezrs.net/click-2681135-14065692",
	"es-MX": "https://www.anrdoezrs.net/click-2681135-14065692",
	"es_MX": "https://www.anrdoezrs.net/click-2681135-14065692",
	"es-ES": "https://www.dpbolvw.net/click-2681135-14068238",
	"fr-FR": "https://www.dpbolvw.net/click-2681135-14068237",
	"fr-CH": "https://www.jdoqocy.com/click-2681135-14068259",
	"fr-CA": "https://www.jdoqocy.com/click-2681135-14065693",
	"fr_CA": "https://www.jdoqocy.com/click-2681135-14065693",
	"it-IT": "https://www.dpbolvw.net/click-2681135-14068239",
	"it-CH": "https://www.anrdoezrs.net/click-2681135-14068260",
	"pt_BR": "https://www.kqzyfj.com/click-2681135-14065694",
	"pt-PT": "https://www.anrdoezrs.net/click-2681135-14068256",
	"pl-PL": "https://www.jdoqocy.com/click-2681135-14068255",
	"de-DE": "https://www.anrdoezrs.net/click-2681135-14068236",
	"de-CH": "https://www.anrdoezrs.net/click-2681135-14068257",
	"no-NO": "https://www.tkqlhce.com/click-2681135-14068247",
	"nl-NL": "https://www.tkqlhce.com/click-2681135-14068249",
	"nl-BE": "https://www.tkqlhce.com/click-2681135-14068251",
	"fr-BE": "https://www.jdoqocy.com/click-2681135-14068252",
	"ru-RU": "https://www.dpbolvw.net/click-2681135-14068261",
	"tr-TR": "https://www.kqzyfj.com/click-2681135-14068262",
	"sv-SE": "https://www.jdoqocy.com/click-2681135-14068241",
	"ja_JP": "https://www.jdoqocy.com/click-2681135-14065795",
	"ja-JP": "https://www.jdoqocy.com/click-2681135-14065795",
	"ko_KR": "https://www.anrdoezrs.net/click-2681135-14065796",
	"fi-FI": "https://www.tkqlhce.com/click-2681135-14068243",
	"hu-HU": "https://www.dpbolvw.net/click-2681135-14068254",
	"cs-CZ": "https://www.jdoqocy.com/click-2681135-14068253",
	"da-DK": "https://www.anrdoezrs.net/click-2681135-14068244",
	"zh_CN": "https://www.jdoqocy.com/click-2681135-14065793"
}
// Deal Days campaigns
usi_app.deal_days_matrix = {
	"en_US": {
		copy: "Don't miss out on Autodesk Deal Days! Sign up to be the first to know when our deals go live.",
		cta: "Sign Up",
		email: "Enter Email",
		destination: "https://www.autodesk.com/promotions",
		eligible_pages: [
			'https://www.autodesk.com/',
			'https://www.autodesk.com/products',
			'https://www.autodesk.com/benefits/overview',
			'https://www.autodesk.com/benefits/subscription-discount',
			'https://www.autodesk.com/benefits/financing',
			'https://www.autodesk.com/benefits/sales-support',
			'https://www.autodesk.com/benefits/refund-policy',
			'https://www.autodesk.com/benefits/buy-online-securely',
			'https://www.autodesk.com/benefits/add-a-seat',
			'https://www.autodesk.com/benefits/referral-program',
			'https://www.autodesk.com/free-trials',
			'https://www.autodesk.com/viewers',
			'https://www.autodesk.com/promotions'
		],
		deliv_dsktp: "/chatskins/3614/Autodesk-LC-6-2023-PT1-english.png",
		deliv_mbl: "/chatskins/3614/Autodesk-LC-6-2023-mbl-PT1-english.png",
		disclaimer: "Yes, please add me to your list. I agree to receiving emails in accordance with your Privacy Policy."
	},
	"en_CA": {
		copy: "Don't miss out on Autodesk Deal Days! Sign up to be the first to know when our deals go live.",
		cta: "Sign Up",
		email: "Enter Email",
		destination: "https://www.autodesk.ca/en/promotions",
		eligible_pages: [
			"https://www.autodesk.ca/en/",
			"https://www.autodesk.ca/en/products",
			"https://www.autodesk.ca/en/promotions"
		],
		deliv_dsktp: "/chatskins/3614/Autodesk-LC-6-2023-PT1-english.png",
		deliv_mbl: "/chatskins/3614/Autodesk-LC-6-2023-mbl-PT1-english.png",
		disclaimer: "Yes, please add me to your list. I agree to receiving emails in accordance with your Privacy Policy."
	},
	"fr_CA": {
		copy: "Ne manquez pas les Journ\u00E9es Promo Autodesk! Inscrivez-vous pour \u00EAtre parmi les premiers au courant.",
		cta: "S'inscrire",
		email: "Saisir l\u2019e-mail",
		destination: "https://www.autodesk.ca/fr/promotions",
		eligible_pages: [
			"https://www.autodesk.ca/fr/",
			"https://www.autodesk.ca/fr/products",
			"https://www.autodesk.ca/fr/promotions"
		],
		deliv_dsktp: "/chatskins/3614/Autodesk-LC-6-2023-PT1-french.png",
		deliv_mbl: "/chatskins/3614/Autodesk-LC-6-2023-mbl-PT1-french.png",
		disclaimer: "Oui, ajoutez-moi \u00E0 votre liste. J\u2019accepte de recevoir des courriels conform\u00E9ment \u00E0 votre  Politique de confidentialit\u00E9."
	},
	"es_MX": {
		copy: "\u00A1No te pierda los D\u00EDas de Oferta de Autodesk! Reg\u00EDstrate para ser el primero en saber cu\u00E1ndo estar\u00E1n disponibles.",
		cta: "Inscribirse",
		email: "Indicar email",
		destination: "https://www.autodesk.mx/promotions",
		eligible_pages: [
			"https://www.autodesk.mx/",
			"https://www.autodesk.mx/products",
			"https://www.autodesk.mx/promotions"
		],
		deliv_dsktp: "/chatskins/3614/Autodesk-LC-6-2023-PT1-spanish.png",
		deliv_mbl: "/chatskins/3614/Autodesk-LC-6-2023-mbl-PT1-spanish.png",
		disclaimer: "S\u00ED, por favor a\u00F1adidme a vuestra lista. Acepto recibir correos electr\u00F3nicos de acuerdo con vuestra Pol\u00EDtica de Privacidad"
	},
	"es_AR": {
		copy: "\u00A1No te pierda los D\u00EDas de Oferta de Autodesk! Reg\u00EDstrate para ser el primero en saber cu\u00E1ndo estar\u00E1n disponibles.",
		cta: "Inscribirse",
		email: "Indicar email",
		destination: "https://latinoamerica.autodesk.com/promotions",
		eligible_pages: [
			"https://latinoamerica.autodesk.com/",
			"https://latinoamerica.autodesk.com/products",
			"https://latinoamerica.autodesk.com/promotions"
		],
		deliv_dsktp: "/chatskins/3614/Autodesk-LC-6-2023-PT1-spanish.png",
		deliv_mbl: "/chatskins/3614/Autodesk-LC-6-2023-mbl-PT1-spanish.png",
		disclaimer: "S\u00ED, por favor a\u00F1adidme a vuestra lista. Acepto recibir correos electr\u00F3nicos de acuerdo con vuestra Pol\u00EDtica de Privacidad"
	},
	"pt_BR": {
		copy: "N\u00E3o perca os Dias de Desconto Autodesk! Inscreva-se para ser o primeiro a saber.",
		cta: "Inscrever-se",
		email: "digite e-mail",
		destination: "https://www.autodesk.com.br/promotions",
		eligible_pages: [
			"https://www.autodesk.com.br/",
			"https://www.autodesk.com.br/products",
			"https://www.autodesk.com.br/promotions"
		],
		deliv_dsktp: "/chatskins/3614/Autodesk-LC-6-2023-PT1-portugese.png",
		deliv_mbl: "/chatskins/3614/Autodesk-LC-6-2023-mbl-PT1-portugese.png",
		disclaimer: "Sim, por favor, me adicione \u00E0 sua lista. Eu concordo em receber e-mails de acordo com sua Pol\u00EDtica de Privacidade."
	}
};
// Deal Days Real campaigns
usi_app.deal_days_real_matrix = {
	"en_US": {
		copy: "3 Days Only - Save 20% on AutoCAD, AutoCAD LT, 3ds Max, Maya, and Revit LT Suite CTA: Save now",
		cta: "Save Now",
		destination: "https://www.autodesk.com/promotions",
		eligible_pages: [
			'https://www.autodesk.com/products',
			'https://www.autodesk.com/buying/overview',
			'https://www.autodesk.com/buying/how-to-buy',
			'https://www.autodesk.com/buying/plans',
			'https://www.autodesk.com/buying/terms-payments',
			'https://www.autodesk.com/buying/flex',
			'https://www.autodesk.com/buying/account',
			'https://www.autodesk.com/buying/renewal',
			'https://www.autodesk.com/free-trials',
			'https://www.autodesk.com/viewers',
			'https://www.autodesk.com/products/autocad/overview?term=1-YEAR&tab=subscription',
			'https://www.autodesk.com/products/autocad-lt/overview?term=1-YEAR&tab=subscription',
			'https://www.autodesk.com/products/revit-lt/overview?term=1-YEAR&tab=subscription',
			'https://www.autodesk.com/products/3ds-max/overview?term=1-YEAR&tab=subscription',
			'https://www.autodesk.com/products/maya/overview?term=1-YEAR&tab=subscription'
		],
		deliv_dsktp: "/chatskins/3614/Autodesk-TT-6-2023-english.png",
		deliv_mbl: "/chatskins/3614/Autodesk-TT-6-2023-english-mbl.png"
	},
	"en_CA": {
		copy: "3 Days Only - Save 20% on AutoCAD, AutoCAD LT, 3ds Max, Maya, and Revit LT Suite",
		cta: "Save Now",
		destination: "https://www.autodesk.ca/en/promotions",
		eligible_pages: [
			'https://www.autodesk.ca/en/products',
			'https://www.autodesk.ca/en/products/autocad/overview',
			'https://www.autodesk.ca/en/products/autocad-lt/overview',
			'https://www.autodesk.ca/en/products/revit-lt/overview',
			'https://www.autodesk.ca/en/products/3ds-max/',
			'https://www.autodesk.ca/en/products/maya/overview'
		],
		deliv_dsktp: "/chatskins/3614/Autodesk-TT-6-2023-english.png",
		deliv_mbl: "/chatskins/3614/Autodesk-TT-6-2023-english-mbl.png"
	},
	"fr_CA": {
		copy: "3 Jours Seulement - \u00C9conomisez 20 % sur AutoCAD, AutoCAD LT, 3ds Max, Maya et Revit LT Suite",
		cta: "\u00C9CONOMISER MAINTENANT",
		destination: "https://www.autodesk.ca/fr/promotions",
		eligible_pages: [
			'https://www.autodesk.ca/fr/products',
			'https://www.autodesk.ca/fr/products/autocad/overview?term=1-YEAR&tab=subscription',
			'https://www.autodesk.ca/fr/products/autocad-lt/overview?term=1-YEAR&tab=subscription',
			'https://www.autodesk.ca/fr/products/revit-lt/overview?term=1-YEAR&tab=subscription',
			'https://www.autodesk.ca/fr/products/3ds-max/?term=1-YEAR&tab=subscription',
			'https://www.autodesk.ca/fr/products/maya/overview?term=1-YEAR&tab=subscription'
		],
		deliv_dsktp: "/chatskins/3614/Autodesk-TT-6-2023-french.png",
		deliv_mbl: "/chatskins/3614/Autodesk-TT-6-2023-french-mbl.png"
	},
	"es-MX": {
		copy: "S\u00F3lo Por 3 D\u00EDas - Ahorre un 20% en AutoCAD, AutoCAD LT, 3ds Max, Maya y Revit LT Suite",
		cta: "AHORRE AHORA",
		destination: "https://www.autodesk.mx/promotions",
		eligible_pages: [
			'https://www.autodesk.mx/products',
			'https://www.autodesk.mx/products/autocad/overview?term=1-YEAR&tab=subscription',
			'https://www.autodesk.mx/products/autocad-lt/overview?term=1-YEAR&tab=subscription',
			'https://www.autodesk.mx/products/revit-lt/overview?term=1-YEAR&tab=subscription',
			'https://www.autodesk.mx/products/3ds-max/?term=1-YEAR&tab=subscription',
			'https://www.autodesk.mx/products/maya/overview?term=1-YEAR&tab=subscription'
		],
		deliv_dsktp: "/chatskins/3614/Autodesk-TT-6-2023-spanish.png",
		deliv_mbl: "/chatskins/3614/Autodesk-TT-6-2023-spanish-mbl.png"
	},
	"es_AR": {
		copy: "S\u00F3lo Por 3 D\u00EDas - Ahorre un 20% en AutoCAD, AutoCAD LT, 3ds Max, Maya y Revit LT Suite",
		cta: "AHORRE AHORA",
		destination: "https://latinoamerica.autodesk.com/promotions",
		eligible_pages: [
			'https://latinoamerica.autodesk.com/products',
			'https://latinoamerica.autodesk.com/products/autocad/overview?term=1-YEAR&tab=subscription',
			'https://latinoamerica.autodesk.com/products/autocad-lt/overview?term=1-YEAR&tab=subscription',
			'https://latinoamerica.autodesk.com/products/revit-lt/overview?term=1-YEAR&tab=subscription',
			'https://latinoamerica.autodesk.com/products/3ds-max/overview?term=1-YEAR&tab=subscription',
			'https://latinoamerica.autodesk.com/products/maya/overview?term=1-YEAR&tab=subscription'
		],
		deliv_dsktp: "/chatskins/3614/Autodesk-TT-6-2023-spanish.png",
		deliv_mbl: "/chatskins/3614/Autodesk-TT-6-2023-spanish-mbl.png"
	},
	"pt_BR": {
		copy: "S\u00F3 3 Dias - conomize 20% no AutoCAD, AutoCAD LT, 3ds Max, Maya e no Revit LT Suite",
		cta: "POUPE AGORA",
		destination: "https://www.autodesk.com.br/promotions",
		eligible_pages: [
			'https://www.autodesk.com.br/products',
			'https://www.autodesk.com.br/products/autocad/overview?term=1-YEAR&tab=subscription',
			'https://www.autodesk.com.br/products/autocad-lt/overview?term=1-YEAR&tab=subscription',
			'https://www.autodesk.com.br/products/revit-lt/overview?term=1-YEAR&tab=subscription',
			'https://www.autodesk.com.br/products/3ds-max/overview?term=1-YEAR&tab=subscription',
			'https://www.autodesk.com.br/products/maya/overview?term=1-YEAR&tab=subscription'
		],
		deliv_dsktp: "/chatskins/3614/Autodesk-TT-6-2023-portugese.png",
		deliv_mbl: "/chatskins/3614/Autodesk-TT-6-2023-portugese-mbl.png"
	}
};
// Cloud products upsell
usi_app.cloud_products_upsell_matrix = {
	"en-SG": [{
		targets: ["MAYA", "3DSMAX"],
		upsell: "SGSUB",
		text: "Connect your team & scale workflows quickly in the cloud with Shotgrid.",
		cta: "ADD TO CART",
		region: "APAC"
	}, {
		targets: ["RVT", "CIV3D"],
		upsell: "COLLRP",
		text: "Collaborate anytime, anywhere securely in the cloud with BIM Collaborate Pro.",
		cta: "ADD TO CART",
		region: "APAC"
	}],
	"en-MY": [{
		targets: ["MAYA", "3DSMAX"],
		upsell: "SGSUB",
		text: "Connect your team & scale workflows quickly in the cloud with Shotgrid.",
		cta: "ADD TO CART",
		region: "APAC"
	}, {
		targets: ["RVT", "CIV3D"],
		upsell: "COLLRP",
		text: "Collaborate anytime, anywhere securely in the cloud with BIM Collaborate Pro.",
		cta: "ADD TO CART",
		region: "APAC"
	}],
	"en-AU": [{
		targets: ["MAYA", "3DSMAX"],
		upsell: "SGSUB",
		text: "Connect your team & scale workflows quickly in the cloud with Shotgrid.",
		cta: "ADD TO BASKET",
		region: "ANZ"
	}, {
		targets: ["RVT", "CIV3D"],
		upsell: "COLLRP",
		text: "Collaborate anytime, anywhere securely in the cloud with BIM Collaborate Pro.",
		cta: "ADD TO BASKET",
		region: "ANZ"
	}],
	"en-NZ": [{
		targets: ["MAYA", "3DSMAX"],
		upsell: "SGSUB",
		text: "Connect your team & scale workflows quickly in the cloud with Shotgrid.",
		cta: "ADD TO BASKET",
		region: "ANZ"
	}, {
		targets: ["RVT", "CIV3D"],
		upsell: "COLLRP",
		text: "Collaborate anytime, anywhere securely in the cloud with BIM Collaborate Pro.",
		cta: "ADD TO BASKET",
		region: "ANZ"
	}],
	"en_IN": [{
		targets: ["MAYA", "3DSMAX"],
		upsell: "SGSUB",
		text: "Connect your team & scale workflows quickly in the cloud with Shotgrid.",
		cta: "ADD TO BASKET",
		region: "APAC"
	}, {
		targets: ["RVT", "CIV3D"],
		upsell: "COLLRP",
		text: "Collaborate anytime, anywhere securely in the cloud with BIM Collaborate Pro.",
		cta: "ADD TO BASKET",
		region: "APAC"
	}],
	"ja-JP": [{
		targets: ["MAYA", "3DSMAX"],
		upsell: "SGSUB",
		text: "ShotGrid \u3067\u3001\u30AF\u30E9\u30A6\u30C9\u4E0A\u306E\u30C1\u30FC\u30E0\u9023\u643A\u3068\u3001\u30B9\u30E0\u30FC\u30BA\u306A\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u9032\u884C\u3092\u3002",
		cta: "\u30AB\u30FC\u30C8\u306B\u8FFD\u52A0",
		region: "APAC"
	}, {
		targets: ["RVT", "CIV3D"],
		upsell: "COLLRP",
		text: "BIM Collaborate Pro \u306A\u3089\u3001\u3044\u3064\u3067\u3082\u3001\u3069\u3053\u3067\u3082\u3001\u5B89\u5168\u306B\u30AF\u30E9\u30A6\u30C9\u4E0A\u3067\u30B3\u30E9\u30DC\u30EC\u30FC\u30B7\u30E7\u30F3\u3002",
		cta: "\u30AB\u30FC\u30C8\u306B\u8FFD\u52A0",
		region: "APAC"
	}],
	"ko_KR": [{
		targets: ["MAYA", "3DSMAX"],
		upsell: "SGSUB",
		text: "\uD074\uB77C\uC6B0\uB4DC \uAE30\uBC18\uC758 ShotGrid\uB97C \uCD94\uAC00\uD558\uC5EC \uD504\uB85C\uC81D\uD2B8 \uAD00\uB9AC\uC5D0 \uD6A8\uC728\uC131\uC744 \uB354\uD558\uC138\uC694.",
		cta: "\uC7A5\uBC14\uAD6C\uB2C8\uC5D0 \uB2F4\uAE30",
		region: "APAC"
	}, {
		targets: ["RVT", "CIV3D"],
		upsell: "COLLRP",
		text: "\uD074\uB77C\uC6B0\uB4DC \uAE30\uBC18\uC758BIM Collaborate Pro\uB97C \uD1B5\uD574 \uC5B8\uC81C \uC5B4\uB514\uC11C\uB098 \uD6A8\uACFC\uC801\uC73C\uB85C \uD611\uC5C5\uD558\uC138\uC694.",
		cta: "\uC7A5\uBC14\uAD6C\uB2C8\uC5D0 \uB2F4\uAE30",
		region: "APAC"
	}],
	"en-US": [{
		targets: ["F360"],
		upsell: "F36MEIA",
		text: "Amplify your Fusion 360 CAM capabilities with the Machining Extension.",
		cta: "ADD TO CART",
		region: "AMERICAS"
	}],
	"en-CA": [{
		targets: ["F360"],
		upsell: "F36MEIA",
		text: "Amplify your Fusion 360 CAM capabilities with the Machining Extension.",
		cta: "ADD TO CART",
		region: "AMERICAS"
	}],
	"fr-CA": [{
		targets: ["F360"],
		upsell: "F36MEIA",
		text: "Amplify your Fusion 360 CAM capabilities with the Machining Extension.",
		cta: "ADD TO CART",
		region: "AMERICAS"
	}],
	"de-DE": [{
		targets: ["F360"],
		upsell: "F36MEIA",
		text: "Bauen Sie den CAM-Funktionsumfang von Fusion 360 aus.",
		cta: "IN DEN WARENKORB LEGEN",
		region: "EMEA"
	}],
	"en-EU": [{
		targets: ["F360"],
		upsell: "F36MEIA",
		text: "Amplify your Fusion 360 CAM capabilities with the Machining Extension.",
		cta: "ADD TO BASKET",
		region: "EMEA"
	}],
	"it-IT": [{
		targets: ["F360"],
		upsell: "F36MEIA",
		text: "Amplia le funzionalit\u00E0 CAM di Fusion 360 con Machining Extension.",
		cta: "AGGIUNGI AL CARRELLO",
		region: "EMEA"
	}],
	"fr-FR": [{
		targets: ["F360"],
		upsell: "F36MEIA",
		text: "Avec Machining Extension, \u00E9largissez les capacit\u00E9s FAO de Fusion 360.",
		cta: "AJOUTER AU PANIER",
		region: "EMEA"
	}],
	"en-UK": [{
		targets: ["F360"],
		upsell: "F36MEIA",
		text: "Amplify your Fusion 360 CAM capabilities with the Machining Extension.",
		cta: "ADD TO BASKET",
		region: "UK"
	}],
	"en_SE": [{
		targets: ["F360"],
		upsell: "F36MEIA",
		text: "Amplify your Fusion 360 CAM capabilities with the Machining Extension.",
		cta: "ADD TO CART",
		region: "UK"
	}]
};
// Define bundle offers
usi_app.bundle_offers = {
	'ACDIST_en-US_1-year': {
		copy: 'Save 15% on AutoCAD when you buy a bundle of three - ',
		cta: 'Get the bundle',
		url: '"https://checkout.autodesk.com/en-US?priceIds=27150%5Bqty:3%5D&promoCodes=1yrACAD3pack&plc=ACDIST"',
		qty: ['2']
	},
	'ACDIST_en-US_3-year': {
		copy: 'Save 15% on AutoCAD when you buy a bundle of three - ',
		cta: 'Get the bundle',
		url: '"https://checkout.autodesk.com/en-US?priceIds=27152%5Bqty:3%5D&promoCodes=3yrACAD3pack&plc=ACDIST"',
		qty: ['2']
	},
	'ACDIST_en-CA_1-year': {
		copy: 'Save 15% on AutoCAD when you buy a bundle of three - ',
		cta: 'Get the bundle',
		url: '"https://checkout.autodesk.com/en-CA?priceIds=23998%5Bqty:3%5D&promoCodes=1yrACAD3pack&plc=ACDIST"',
		qty: ['2']
	},
	'ACDIST_en-CA_3-year': {
		copy: 'Save 15% on AutoCAD when you buy a bundle of three - ',
		cta: 'Get the bundle',
		url: '"https://checkout.autodesk.com/en-CA?priceIds=24000%5Bqty:3%5D&promoCodes=3yrACAD3pack&plc=ACDIST"',
		qty: ['2']
	},
	'ACDIST_fr-CA_1-an': {
		copy: '\u00C9conomisez 15 % sur vos abonnements lorsque vous en achetez trois \u00E0 la fois - ',
		cta: 'PROFITEZ DE L\u2019OFFRE',
		url: '"https://checkout.autodesk.com/fr-CA?priceIds=23998%5Bqty:3%5D&promoCodes=1yrACAD3pack&plc=ACDIST"',
		qty: ['2']
	},
	'ACDIST_fr-CA_3-ans': {
		copy: '\u00C9conomisez 15 % sur vos abonnements lorsque vous en achetez trois \u00E0 la fois - ',
		cta: 'PROFITEZ DE L\u2019OFFRE',
		url: '"https://checkout.autodesk.com/fr-CA?priceIds=24000%5Bqty:3%5D&promoCodes=3yrACAD3pack&plc=ACDIST"',
		qty: ['2']
	},
	'ACDLT_en-US_1-year': {
		copy: 'Get 5 subscriptions of AutoCAD LT for the price of 4 - ',
		cta: 'Get the bundle',
		url: '"https://checkout.autodesk.com/en-US?priceIds=24131%5Bqty:5%5D&promoCodes=1yrlt5pack&plc=ACDLT"',
		qty: ['2', '3', '4']
	},
	'ACDLT_en-US_3-year': {
		copy: 'Get 5 subscriptions of AutoCAD LT for the price of 4 - ',
		cta: 'Get the bundle',
		url: '"https://checkout.autodesk.com/en-US?priceIds=24147%5Bqty:5%5D&promoCodes=3yrlt5pack&plc=ACDLT"',
		qty: ['2', '3', '4']
	},
	'ACDLT_en-CA_1-year': {
		copy: 'Get 5 subscriptions of AutoCAD LT for the price of 4 - ',
		cta: 'Get the bundle',
		url: '"https://checkout.autodesk.com/en-CA?priceIds=24117%5Bqty:5%5D&promoCodes=1yrlt5pack&plc=ACDLT"',
		qty: ['2', '3', '4']
	},
	'ACDLT_en-CA_3-year': {
		copy: 'Get 5 subscriptions of AutoCAD LT for the price of 4 - ',
		cta: 'Get the bundle',
		url: '"https://checkout.autodesk.com/en-CA?priceIds=24133%5Bqty:5%5D&promoCodes=3yrlt5pack&plc=ACDLT"',
		qty: ['2', '3', '4']
	},
	'ACDLT_fr-CA_1-an': {
		copy: 'Obtenez 5 abonnements \u00E0 AutoCAD LT pour le prix de 4 - ',
		cta: 'PROFITEZ DE L\u2019OFFRE',
		url: '"https://checkout.autodesk.com/fr-CA?priceIds=24117%5Bqty:5%5D&promoCodes=1yrlt5pack&plc=ACDLT"',
		qty: ['2', '3', '4']
	},
	'ACDLT_fr-CA_3-ans': {
		copy: 'Obtenez 5 abonnements \u00E0 AutoCAD LT pour le prix de 4 - ',
		cta: 'PROFITEZ DE L\u2019OFFRE',
		url: '"https://checkout.autodesk.com/fr-CA?priceIds=24133%5Bqty:5%5D&promoCodes=3yrlt5pack&plc=ACDLT"',
		qty: ['2', '3', '4']
	},
	'ACDLT_en-NZ_1-year': {
		copy: 'Get 3 AutoCAD LT subscriptions and save 20%. - ',
		cta: 'BUY NOW',
		url: '"https://commerce.autodesk.com/en-NZ?pid=5532232800%5Bqty:3%5D&offerid=63431897920"',
		qty: ['2', '3']
	},
	'ACDLT_en-NZ_3-year': {
		copy: 'Get 3 AutoCAD LT subscriptions and save 20%. - ',
		cta: 'BUY NOW',
		url: '"https://commerce.autodesk.com/en-NZ?pid=5532232900%5Bqty:3%5D&offerid=63431897920"',
		qty: ['2', '3']
	},
	'ACDIST_en-NZ_3-year': {
		copy: 'Get 3 AutoCAD subscriptions and save 20%. - ',
		cta: 'BUY NOW',
		url: '"https://commerce.autodesk.com/en-NZ?pid=5654504900%5Bqty%3A3%5D&offerid=63437020720"',
		qty: ['2', '3']
	},
	'ACDIST_en-NZ_1-year': {
		copy: 'Get 3 AutoCAD subscriptions and save 20%. - ',
		cta: 'BUY NOW',
		url: '"https://commerce.autodesk.com/en-NZ?pid=5654504800%5Bqty%3A3%5D&offerid=63437020720"',
		qty: ['2', '3']
	},
	'ACDLT_en-AU_3-year': {
		copy: 'Get 3 AutoCAD LT subscriptions and save 20%. - ',
		cta: 'BUY NOW',
		url: '"https://checkout.autodesk.com/en-AU?priceIds=35775%5Bqty:3%5D&promoCodes=3YRLT3PACKAUS&plc=ACDLT"',
		qty: ['2', '3']
	},
	'ACDLT_en-AU_1-year': {
		copy: 'Get 3 AutoCAD LT subscriptions and save 20%. - ',
		cta: 'BUY NOW',
		url: '"https://checkout.autodesk.com/en-AU?priceIds=35715%5Bqty:3%5D&promoCodes=1YRLT3PACKAUS&plc=ACDLT"',
		qty: ['2', '3']
	},
	'ACDIST_en-AU_3-year': {
		copy: 'Get 3 AutoCAD subscriptions and save 20%. - ',
		cta: 'BUY NOW',
		url: '"https://checkout.autodesk.com/en-AU?priceIds=33344%5Bqty%3A3%5D&promoCodes=3YRACD3PACKAU&plc=ACDIST"',
		qty: ['2', '3']
	},
	'ACDIST_en-AU_1-year': {
		copy: 'Get 3 AutoCAD subscriptions and save 20%. - ',
		cta: 'BUY NOW',
		url: '"https://checkout.autodesk.com/en-AU?priceIds=27030%5Bqty%3A3%5D&promoCodes=1YRACD3PACKAU&plc=ACDIST"',
		qty: ['2', '3']
	},
	'ACDLT_en-MY_1-year': {
		copy: 'Online exclusive! Get 3 AutoCAD LT subscriptions and save 20%. - ',
		cta: 'BUY NOW',
		url: '"https://commerce.autodesk.com/en-MY?pid=5532232800%5Bqty:3%5D&offerid=63437020520"',
		qty: ['2', '3']
	},
	'ACDLT_en-MY_3-year': {
		copy: 'Online exclusive! Get 3 AutoCAD LT subscriptions and save 20%. - ',
		cta: 'BUY NOW',
		url: '"https://commerce.autodesk.com/en-MY?pid=5532232900%5Bqty:3%5D&offerid=63437020520"',
		qty: ['2', '3']
	},
	'ACDLT_en-SG_1-year': {
		copy: 'Online exclusive! Get 3 AutoCAD LT subscriptions and save 20%. - ',
		cta: 'BUY NOW',
		url: '"https://commerce.autodesk.com/en-SG?pid=5532232800%5Bqty:3%5D&offerid=63437020520"',
		qty: ['2', '3']
	},
	'ACDLT_en-SG_3-year': {
		copy: 'Online exclusive! Get 3 AutoCAD LT subscriptions and save 20%. - ',
		cta: 'BUY NOW',
		url: '"https://commerce.autodesk.com/en-SG?pid=5532232900%5Bqty:3%5D&offerid=63437020520"',
		qty: ['2', '3']
	},
	'ACDIST_ko_KR_1-year': {
		copy: 'AutoCAD \uC138 \uC2DC\uD2B8 \uB2F9 \uCD5C\uB300 20%* \uD560\uC778. - ',
		cta: '\uC9C0\uAE08 \uD560\uC778\uBC1B\uAE30',
		url: '"https://store.autodesk.co.kr/store/adskkr/ko_KR/buy/productID.5649910400/quantity.3/OfferID.63497997320/Currency.KRW"',
		qty: ['2', '3']
	},
	'ACDIST_ko_KR_3-year': {
		copy: 'AutoCAD \uC138 \uC2DC\uD2B8 \uB2F9 \uCD5C\uB300 20%* \uD560\uC778.  - ',
		cta: '\uC9C0\uAE08 \uD560\uC778\uBC1B\uAE30',
		url: '"https://store.autodesk.co.kr/store/adskkr/ko_KR/buy/productID.5649910500/quantity.3/OfferID.63497997320/Currency.KRW"',
		qty: ['2', '3']
	},
	'ACDLT_ko_KR_1-year': {
		copy: 'AutoCAD LT \uC138 \uC2DC\uD2B8 \uB2F9 \uCD5C\uB300 20%* \uD560\uC778. - ',
		cta: '\uC9C0\uAE08 \uD560\uC778\uBC1B\uAE30',
		url: '"https://store.autodesk.co.kr/store/adskkr/ko_KR/buy/productID.5644220200/quantity.3/OfferID.63412857720/Currency.KRW"',
		qty: ['2', '3']
	},
	'ACDLT_ko_KR_3-year': {
		copy: 'AutoCAD LT \uC138 \uC2DC\uD2B8 \uB2F9 \uCD5C\uB300 20%* \uD560\uC778. - ',
		cta: '\uC9C0\uAE08 \uD560\uC778\uBC1B\uAE30',
		url: '"https://store.autodesk.co.kr/store/adskkr/ko_KR/buy/productID.5644220400/quantity.3/OfferID.63412857720/Currency.KRW"',
		qty: ['2', '3']
	},
};
usi_app.deals_copy = {
	"en": {
		"head": "SAVE {{price}} NOW!",
		"subhead": "Special online deal: Save 25% on a 3-year subscription of {{name}}",
		"cta": "SAVE NOW",
		"close": "No, thanks"
	},
	"fr": {
		"head": "\u00C9CONOMISEZ {{price}} MAINTENANT!",
		"subhead": "Offre sp\u00E9ciale en ligne: \u00E9conomisez 25% sur un abonnement de 3 ans \u00E0 {{name}}",
		"cta": "\u00C9CONOMISEZ MAINTENANT",
		"close": "Non merci"
	},
	"es": {
		"head": "AHORRA {{price}}",
		"subhead": "Oferta especial en Linea: Ahorre 25% en una suscripci\u00F3n de 3 a\u00F1os de {{name}}",
		"cta": "AHORRA HOY",
		"close": "No, gracias"
	},
	"en_special": {
		"head": "Special offer!",
		"subhead": "Upgrade to a {{type}} subscription and save {{discount}}. Limited time only.",
		"cta": "SAVE NOW",
		"close": "No, thanks",
		"terms": "Terms & Conditions"
	},
	"en_25": {
		"head": "Special offer!",
		"subhead": "Upgrade to a {{type}} subscription and save 25%. Limited time only.",
		"cta": "SAVE NOW",
		"close": "No, thanks",
		"terms": "Terms & Conditions"
	},
	"en_20": {
		"head": "Special offer!",
		"subhead": "Upgrade to a 3-year plan and save 20% instantly. Don\u2019t miss this one-time offer.",
		"cta": "SAVE NOW",
		"close": "No, thanks",
		"terms": "Terms & Conditions"
	},
	"au_20": {
		"head": "Special offer!",
		"subhead": "Don't miss 20% in savings. Upgrade to a Revit 3-year plan and save $1,933 AUD instantly.",
		"cta": "SAVE NOW",
		"close": "No, thanks",
		"terms": "Terms & Conditions"
	},
	"nz_20": {
		"head": "Special offer!",
		"subhead": "Don't miss 20% in savings. Upgrade to a Revit 3-year plan and save $2,010 NZD instantly.",
		"cta": "SAVE NOW",
		"close": "No, thanks",
		"terms": "Terms & Conditions"
	},
	"en_lto": {
		"head": "Limited Time Offer",
		"subhead": "Upgrade to a {{type}} subscription and save up to 25%*.",
		"cta": "SAVE NOW",
		"close": "No, thanks",
		"terms": "Terms & Conditions"
	},
	"kr": {
		"head": "\uAE30\uAC04 \uD55C\uC815 \uD560\uC778",
		"subhead": "3\uB144 \uC11C\uBE0C\uC2A4\uD06C\uB9BD\uC158\uC73C\uB85C 20% \uD560\uC778\uC744 \uBC1B\uC73C\uC138\uC694.",
		"cta": "\uC9C0\uAE08 \uD560\uC778 \uBC1B\uAE30",
		"close": "\uC544\uB2C8\uC694, \uAD1C\uCC2E\uC2B5\uB2C8\uB2E4.",
		"terms": "\uC774\uC6A9 \uC57D\uAD00 \uBCF4\uAE30"
	},
	"zh": {
		"head": "<span style=\"font-size: 0.75em;\">\u9650\u65F6\u7279\u60E0</span>",
		"subhead": "\u5347\u7EA7\u81F3\u4E09\u5E74\u671F\u6709\u673A\u4F1A\u7ACB\u4EAB8\u6298*\u4F18\u60E0",
		"cta": "\u7ACB\u5373\u70B9\u51FB\u8BA2\u8D2D",
		"close": "\u4E0D\u9700\u8981\uFF0C\u8C22\u8C22",
		"terms": "\u8BF7\u53C2\u89C1\u6761\u6B3E\u548C\u6761\u4EF6"
	}
};
usi_app.deals = {
	"en-US": {
		"ACDLT": {
			"name": "AutoCAD LT",
			"price": "$280",
			"link": "https://checkout.autodesk.com/en-US?priceIds=24147[qty:1]&promoCodes=LIGHTNING3Y25&plc=ACDLT",
			"start": "2020-08-18",
			"end": "2020-08-21",
			"copy": usi_app.deals_copy.en
		},
		"ACDIST": {
			"name": "AutoCAD",
			"price": "$1,140",
			"link": "https://checkout.autodesk.com/en-US?priceIds=24042[qty:1]&promoCodes=LIGHTNING3Y25&plc=ACDIST",
			"start": "2020-08-18",
			"end": "2020-08-21",
			"copy": usi_app.deals_copy.en
		},
		"MAYA": {
			"name": "Maya",
			"price": "$1,090",
			"link": "https://checkout.autodesk.com/en-US?priceIds=24567[qty:1]&promoCodes=LIGHTNING3Y25&plc=MAYA",
			"start": "2020-08-18",
			"end": "2020-08-21",
			"copy": usi_app.deals_copy.en
		},
		"3DSMAX": {
			"name": "3ds Max",
			"price": "$1,090",
			"link": "https://checkout.autodesk.com/en-US?priceIds=23772[qty:1]&promoCodes=LIGHTNING3Y25&plc=3DSMAX",
			"start": "2020-08-18",
			"end": "2020-08-21",
			"copy": usi_app.deals_copy.en
		}
	},
	"fr-CA": {
		"ACDLT": {
			"name": "AutoCAD LT",
			"price": "$365.00",
			"link": "https://checkout.autodesk.com/fr-CA?priceIds=24133[qty:1]&promoCodes=LIGHTNING3Y25&plc=ACDLT",
			"start": "2020-08-18",
			"end": "2020-08-21",
			"copy": usi_app.deals_copy.fr
		},
		"ACDIST": {
			"name": "AutoCAD",
			"price": "$1,480",
			"link": "https://checkout.autodesk.com/fr-CA?priceIds=24000[qty:1]&promoCodes=LIGHTNING3Y25&plc=ACDIST",
			"start": "2020-08-18",
			"end": "2020-08-21",
			"copy": usi_app.deals_copy.fr
		},
		"MAYA": {
			"name": "Maya",
			"price": "$1,420",
			"link": "https://checkout.autodesk.com/fr-CA?priceIds=24525[qty:1]&promoCodes=LIGHTNING3Y25&plc=MAYA",
			"start": "2020-08-18",
			"end": "2020-08-21",
			"copy": usi_app.deals_copy.fr
		},
		"3DSMAX": {
			"name": "3ds Max",
			"price": "$1,420",
			"link": "https://checkout.autodesk.com/fr-CA?priceIds=23784[qty:1]&promoCodes=LIGHTNING3Y25&plc=3DSMAX",
			"start": "2020-08-18",
			"end": "2020-08-21",
			"copy": usi_app.deals_copy.fr
		}
	},
	"en-CA": {
		"ACDLT": {
			"name": "AutoCAD LT",
			"price": "$365.00",
			"link": "https://checkout.autodesk.com/en-CA?priceIds=24133[qty:1]&promoCodes=LIGHTNING3Y25&plc=ACDLT",
			"start": "2020-08-18",
			"end": "2020-08-21",
			"copy": usi_app.deals_copy.en
		},
		"ACDIST": {
			"name": "AutoCAD",
			"price": "$1,480",
			"link": "https://checkout.autodesk.com/en-CA?priceIds=24000[qty:1]&promoCodes=LIGHTNING3Y25&plc=ACDIST",
			"start": "2020-08-18",
			"end": "2020-08-21",
			"copy": usi_app.deals_copy.en
		},
		"MAYA": {
			"name": "Maya",
			"price": "$1,420",
			"link": "https://checkout.autodesk.com/en-CA?priceIds=24525[qty:1]&promoCodes=LIGHTNING3Y25&plc=MAYA",
			"start": "2020-08-18",
			"end": "2020-08-21",
			"copy": usi_app.deals_copy.en
		},
		"3DSMAX": {
			"name": "3ds Max",
			"price": "$1,420",
			"link": "https://checkout.autodesk.com/en-CA?priceIds=23784[qty:1]&promoCodes=LIGHTNING3Y25&plc=3DSMAX",
			"start": "2020-08-18",
			"end": "2020-08-21",
			"copy": usi_app.deals_copy.en
		}
	},
	"es_AR": {
		"ACDLT": {
			"name": "AutoCAD LT",
			"price": "25%",
			"link": "",
			"start": "2020-08-18",
			"end": "2020-08-21",
			"copy": usi_app.deals_copy.es
		},
		"ACDIST": {
			"name": "AutoCAD",
			"price": "25%",
			"link": "",
			"start": "2020-08-18",
			"end": "2020-08-21",
			"copy": usi_app.deals_copy.es
		}
	},
	"en-AU": {
		"RVT": {
			"name": "Revit",
			"price": "",
			"link": "https://checkout.autodesk.com/en-AU?priceIds=27108[qty:1]&promoCodes=LIGHTNINGRVT20&plc=RVT",
			"terms": "https://www.autodesk.com.au/campaigns/upsell-offer-terms-conditions",
			"copy": usi_app.deals_copy.au_20,
			"upsell_pid": "27108",
			"orig_pid": "27107",
			"modal_pid": "27108"
		}
	},
	"en-NZ": {
		"RVT": {
			"name": "Revit",
			"price": "",
			"link": "https://commerce.autodesk.com/en-NZ?pid=5537281700&offerid=63227835410",
			"terms": "https://www.autodesk.co.nz/campaigns/upsell-offer-terms-conditions",
			"copy": usi_app.deals_copy.nz_20,
			"upsell_pid": "5537281700",
			"orig_pid": "5342419400",
			"modal_pid": "5342419500"
		}
	},
	"ko_KR": {
		"ACDLT": {
			"name": "AutoCAD LT",
			"price": "",
			"link": "http://store.autodesk.co.kr/store/adskkr/ko_KR/buy/productID.5467231600/quantity.1/OfferID.63227865810/Currency.KRW",
			"terms": "https://www.autodesk.co.kr/campaigns/upsell-offer-terms-conditions",
			"copy": usi_app.deals_copy.kr,
			"upsell_pid": "5467231600",
			"orig_pid": "334570800",
			"modal_pid": "334571000"
		}
	},
	"en-SG": {
		"3DSMAX": {
			"name": "3ds Max",
			"price": "",
			"link": "https://commerce.autodesk.com/en-SG?pid=5433761700&offerid=62997195410",
			"terms": "https://www.autodesk.com.sg/campaigns/upsell-offer-terms-conditions",
			"start": "2020-08-24 9:00:00",
			"end": "2020-09-03 9:00:00",
			"copy": usi_app.deals_copy.en_25
		},
		"MAYA": {
			"name": "Maya",
			"price": "",
			"link": "https://commerce.autodesk.com/en-SG?pid=5433762300&offerid=62997195410",
			"terms": "https://www.autodesk.com.sg/campaigns/upsell-offer-terms-conditions",
			"start": "2020-08-24 9:00:00",
			"end": "2020-09-03 9:00:00",
			"copy": usi_app.deals_copy.en_25
		}
	},
	"en-MY": {
		"3DSMAX": {
			"name": "3ds Max",
			"price": "",
			"link": "https://commerce.autodesk.com/en-MY?pid=5433761700&offerid=62997195410",
			"terms": "https://asean.autodesk.com/campaigns/upsell-offer-terms-conditions",
			"start": "2020-08-24 9:00:00",
			"end": "2020-09-03 9:00:00",
			"copy": usi_app.deals_copy.en_25
		},
		"MAYA": {
			"name": "Maya",
			"price": "",
			"link": "https://commerce.autodesk.com/en-MY?pid=5433762300&offerid=62997195410",
			"terms": "https://asean.autodesk.com/campaigns/upsell-offer-terms-conditions",
			"start": "2020-08-24 9:00:00",
			"end": "2020-09-03 9:00:00",
			"copy": usi_app.deals_copy.en_25
		}
	},
	"zh_CN": {
		"3DSMAX": {
			"name": "3ds Max",
			"price": "",
			"link": "http://store.autodesk.com.cn/store/adskcn/zh_CN/buy/productID.5433334400/quantity.1/OfferID.62996167810/Currency.CNY/",
			"terms": "https://www.autodesk.com.cn/campaigns/upsell-offer-terms-conditions",
			"start": "2020-08-24 9:00:00",
			"end": "2020-09-03 9:00:00",
			"copy": usi_app.deals_copy.zh
		},
		"MAYA": {
			"name": "Maya",
			"price": "",
			"link": "http://store.autodesk.com.cn/store/adskcn/zh_CN/buy/productID.5433334700/quantity.1/OfferID.62996167810/Currency.CNY/",
			"terms": "https://www.autodesk.com.cn/campaigns/upsell-offer-terms-conditions",
			"start": "2020-08-24 9:00:00",
			"end": "2020-09-03 9:00:00",
			"copy": usi_app.deals_copy.zh
		}
	},
	"en_IN": {
		"3DSMAX": {
			"name": "3ds Max",
			"price": "",
			"link": "http://store.autodesk.com/store/adskin/en_IN/buy/productID.5433335100/quantity.1/OfferID.62996168010/Currency.INR/",
			"terms": "https://www.autodesk.in/campaigns/upsell-offer-terms-conditions",
			"start": "2020-08-24 11:30:00",
			"end": "2020-09-03 11:30:00",
			"copy": usi_app.deals_copy.en_lto
		},
		"MAYA": {
			"name": "Maya",
			"price": "",
			"link": "http://store.autodesk.com/store/adskin/en_IN/buy/productID.5433335400/quantity.1/OfferID.62996168010/Currency.INR/",
			"terms": "https://www.autodesk.in/campaigns/upsell-offer-terms-conditions",
			"start": "2020-08-24 11:30:00",
			"end": "2020-09-03 11:30:00",
			"copy": usi_app.deals_copy.en_lto
		}
	}
};
usi_app.email_info = {
	"es_AR": {
		"link": usi_app.aff_links["es_AR"] + "?url=" + usi_app.encode_link("/store?Action=DisplayPage&Locale=es_AR&SiteID=adsk&id=QuickBuyCartPage&mktvar002=afc_la_usi_email&Currency=USD"),
		"from_name": "Equipo de atenci\u00F3n al cliente de Autodesk",
		"optin_head": "\u00BFTienes Prisa?",
		"optin_desc": "Quiero recibir por email el contenido de mi carrito.",
		"optin_ok": "Enviar ahora",
		"tt_head": "Cree. Gestione. Colabore.<br />Todo en uno.",
		"tt_btn": "Compre ahora"
	},
	"en-GB": {
		"link": usi_app.aff_links["en-GB"] + "?url=" + usi_app.encode_link("/en-GB?mktvar002=afc_gb_usi_email"),
		"from_name": "Autodesk Support",
		"optin_head": "In A Hurry?",
		"optin_desc": "Please email me the contents of my cart.",
		"optin_ok": "OK",
		"tt_head": "Create. Manage. Collaborate.<br />All in one place.",
		"tt_btn": "CONTINUE CHECKOUT"
	},
	"en-UK": {
		"link": usi_app.aff_links["en-UK"] + "?url=" + usi_app.encode_link("/en-GB?mktvar002=afc_gb_usi_email"),
		"from_name": "Autodesk Support",
		"optin_head": "In A Hurry?",
		"optin_desc": "Please email me the contents of my cart.",
		"optin_ok": "OK",
		"tt_head": "Create. Manage. Collaborate.<br />All in one place.",
		"tt_btn": "CONTINUE CHECKOUT"
	},
	"en_SE": {
		"link": usi_app.aff_links["en_SE"] + "?url=" + usi_app.encode_link("/store?Action=DisplayPage&Locale=en_SE&SiteID=adsk&id=QuickBuyCartPage&mktvar002=afc_ae_usi_email&usi_var002=afc_ae_usi_email"),
		"from_name": "Autodesk Support",
		"optin_head": "In A Hurry?",
		"optin_desc": "Please email me the contents of my cart.",
		"optin_ok": "OK",
		"tt_head": "Create. Manage. Collaborate.<br />All in one place.",
		"tt_btn": "CONTINUE CHECKOUT"
	},
	"en-MY": {
		"link": usi_app.aff_links["en-MY"] + "?url=" + usi_app.encode_link("/store?Action=DisplayPage&Locale=en_MY&SiteID=adskjp&id=QuickBuyCartPage&mktvar002=afc_my_usi_email"),
		"link2": usi_app.aff_links["en_MY"] + "?url=" + encodeURIComponent("https://asean.autodesk.com/benefits/multi-year-subscriptions?mktvar002=afc_my_upsellit_cartabandonmentemail"),
		"link3": usi_app.aff_links["en_MY"] + "?url=" + encodeURIComponent("https://asean.autodesk.com/benefits/buy-online-securely?mktvar002=afc_my_upsellit_cartabandonmentemail"),
		"link4": usi_app.aff_links["en_MY"] + "?url=" + encodeURIComponent("https://asean.autodesk.com/benefits/refund-policy?mktvar002=afc_my_upsellit_cartabandonmentemail"),
		"from_name": "Autodesk Support",
		"optin_head": "In A Hurry?",
		"optin_desc": "Please email me the contents of my cart.",
		"optin_ok": "OK",
		"tt_head": "Create. Manage. Collaborate.<br />All in one place.",
		"tt_btn": "CONTINUE CHECKOUT"
	},
	"en_MY": {
		"link": usi_app.aff_links["en_MY"] + "?url=" + usi_app.encode_link("/store?Action=DisplayPage&Locale=en_MY&SiteID=adskjp&id=QuickBuyCartPage&mktvar002=afc_my_usi_email&usi_var002=afc_my_usi_email"),
		"link2": usi_app.aff_links["en_MY"] + "?url=" + encodeURIComponent("https://asean.autodesk.com/benefits/multi-year-subscriptions?mktvar002=afc_my_upsellit_cartabandonmentemail"),
		"link3": usi_app.aff_links["en_MY"] + "?url=" + encodeURIComponent("https://asean.autodesk.com/benefits/buy-online-securely?mktvar002=afc_my_upsellit_cartabandonmentemail"),
		"link4": usi_app.aff_links["en_MY"] + "?url=" + encodeURIComponent("https://asean.autodesk.com/benefits/refund-policy?mktvar002=afc_my_upsellit_cartabandonmentemail"),
		"from_name": "Autodesk Support",
		"optin_head": "In A Hurry?",
		"optin_desc": "Please email me the contents of my cart.",
		"optin_ok": "OK",
		"tt_head": "Create. Manage. Collaborate.<br />All in one place.",
		"tt_btn": "CONTINUE CHECKOUT"
	},
	"en-SG": {
		"link": usi_app.aff_links["en-SG"] + "?url=" + usi_app.encode_link("/en-SG?mktvar002=afc_sg_usi_email"),
		"link2": usi_app.aff_links["en-SG"] + "?url=" + encodeURIComponent("https://www.autodesk.com.sg/benefits/multi-year-subscriptions?mktvar002=afc_sg_upsellit_cartabandonmentemail"),
		"link3": usi_app.aff_links["en-SG"] + "?url=" + encodeURIComponent("https://www.autodesk.com.sg/benefits/buy-online-securely?mktvar002=afc_sg_upsellit_cartabandonmentemail"),
		"link4": usi_app.aff_links["en-SG"] + "?url=" + encodeURIComponent("https://www.autodesk.com.sg/benefits/refund-policy?mktvar002=afc_sg_upsellit_cartabandonmentemail"),
		"from_name": "Autodesk Support",
		"optin_head": "In A Hurry?",
		"optin_desc": "Please email me the contents of my cart.",
		"optin_ok": "OK",
		"tt_head": "Create. Manage. Collaborate.<br />All in one place.",
		"tt_btn": "CONTINUE CHECKOUT"
	},
	"en_SG": {
		"link": usi_app.aff_links["en_SG"] + "?url=" + usi_app.encode_link("/store?Action=DisplayPage&Locale=en_SG&SiteID=adsk&id=QuickBuyCartPage&mktvar002=afc_sg_usi_email"),
		"link2": usi_app.aff_links["en_SG"] + "?url=" + encodeURIComponent("https://www.autodesk.com.sg/benefits/multi-year-subscriptions?mktvar002=afc_sg_upsellit_cartabandonmentemail"),
		"link3": usi_app.aff_links["en_SG"] + "?url=" + encodeURIComponent("https://www.autodesk.com.sg/benefits/buy-online-securely?mktvar002=afc_sg_upsellit_cartabandonmentemail"),
		"link4": usi_app.aff_links["en_SG"] + "?url=" + encodeURIComponent("https://www.autodesk.com.sg/benefits/refund-policy?mktvar002=afc_sg_upsellit_cartabandonmentemail"),
		"from_name": "Autodesk Support",
		"optin_head": "In A Hurry?",
		"optin_desc": "Please email me the contents of my cart.",
		"optin_ok": "OK",
		"tt_head": "Create. Manage. Collaborate.<br />All in one place.",
		"tt_btn": "CONTINUE CHECKOUT"
	},
	"en-NZ": {
		"link": usi_app.aff_links["en-NZ"] + "?url=" + usi_app.encode_link("/en-NZ?mktvar002=afc_nz_usi_email&usi_var002=afc_nz_usi_email"),
		"link2": usi_app.aff_links["en-NZ"] + "?url=" + encodeURIComponent("https://www.autodesk.co.nz/benefits/multi-year-subscriptions?mktvar002=afc_nz_upsellit_cartabandonmentemail"),
		"link3": usi_app.aff_links["en-NZ"] + "?url=" + encodeURIComponent("https://www.autodesk.co.nz/benefits/buy-online-securely?mktvar002=afc_nz_upsellit_cartabandonmentemail"),
		"link4": usi_app.aff_links["en-NZ"] + "?url=" + encodeURIComponent("https://www.autodesk.co.nz/benefits/refund-policy?mktvar002=afc_nz_upsellit_cartabandonmentemail"),
		"from_name": "Autodesk Support",
		"optin_head": "In A Hurry?",
		"optin_desc": "Please email me the contents of my cart.",
		"optin_ok": "OK",
		"tt_head": "Create. Manage. Collaborate.<br />All in one place.",
		"tt_btn": "CONTINUE CHECKOUT"
	},
	"en-AU": {
		"link": usi_app.aff_links["en-AU"] + "?url=" + usi_app.encode_link("/en-AU?mktvar002=afc_aus_usi_email&usi_var002=afc_aus_usi_email"),
		"link2": usi_app.aff_links["en-AU"] + "?url=" + encodeURIComponent("https://www.autodesk.com.au/benefits/multi-year-subscriptions?mktvar002=afc_aus_upsellit_cartabandonmentemail"),
		"link3": usi_app.aff_links["en-AU"] + "?url=" + encodeURIComponent("https://www.autodesk.com.au/benefits/buy-online-securely?mktvar002=afc_aus_upsellit_cartabandonmentemail"),
		"link4": usi_app.aff_links["en-AU"] + "?url=" + encodeURIComponent("https://www.autodesk.com.au/benefits/refund-policy?mktvar002=afc_aus_upsellit_cartabandonmentemail"),
		"from_name": "Autodesk Support",
		"optin_head": "In A Hurry?",
		"optin_desc": "Please email me the contents of my cart.",
		"optin_ok": "OK",
		"tt_head": "Create. Manage. Collaborate.<br />All in one place.",
		"tt_btn": "CONTINUE CHECKOUT"
	},
	"en_AU": {
		"link": usi_app.aff_links["en_AU"] + "?url=" + usi_app.encode_link("/store?Action=DisplayPage&Locale=en_AU&SiteID=adsk&id=QuickBuyCartPage&mktvar002=afc_aus_usi_email&usi_var002=afc_aus_usi_email"),
		"link2": usi_app.aff_links["en_AU"] + "?url=" + encodeURIComponent("https://www.autodesk.com.au/benefits/multi-year-subscriptions?mktvar002=afc_aus_upsellit_cartabandonmentemail"),
		"link3": usi_app.aff_links["en_AU"] + "?url=" + encodeURIComponent("https://www.autodesk.com.au/benefits/buy-online-securely?mktvar002=afc_aus_upsellit_cartabandonmentemail"),
		"link4": usi_app.aff_links["en_AU"] + "?url=" + encodeURIComponent("https://www.autodesk.com.au/benefits/refund-policy?mktvar002=afc_aus_upsellit_cartabandonmentemail"),
		"from_name": "Autodesk Support",
		"optin_head": "In A Hurry?",
		"optin_desc": "Please email me the contents of my cart.",
		"optin_ok": "OK",
		"tt_head": "Create. Manage. Collaborate.<br />All in one place.",
		"tt_btn": "CONTINUE CHECKOUT"
	},
	"en-EU": {
		"link": usi_app.aff_links["en-EU"] + "?url=" + usi_app.encode_link("/europe?mktvar002=afc_eu_usi_email"),
		"from_name": "Autodesk Support",
		"optin_head": "In A Hurry?",
		"optin_desc": "Please email me the contents of my cart.",
		"optin_ok": "OK",
		"tt_head": "Create. Manage. Collaborate.<br />All in one place.",
		"tt_btn": "CONTINUE CHECKOUT"
	},
	"en-CA": {
		"link": usi_app.aff_links["en-CA"] + "?url=" + usi_app.encode_link("/en-CA?mktvar002=afc_ca_usi_email"),
		"from_name": "Autodesk Support",
		"optin_head": "In A Hurry?",
		"optin_desc": "Please email me the contents of my cart.",
		"optin_ok": "OK",
		"tt_head": "Create. Manage. Collaborate.<br />All in one place.",
		"tt_btn": "CONTINUE CHECKOUT"
	},
	"en-US": {
		"link": usi_app.aff_links["en-US"] + "?url=" + usi_app.encode_link("/en-US?mktvar002=afc_us_usi_email"),
		"from_name": "Autodesk Support",
		"optin_head": "In A Hurry?",
		"optin_desc": "Please email me the contents of my cart.",
		"optin_ok": "OK",
		"tt_head": "Create. Manage. Collaborate.<br />All in one place.",
		"tt_btn": "CONTINUE CHECKOUT"
	},
	"en_IN": {
		"link": usi_app.aff_links["en_IN"] + "?url=" + usi_app.encode_link("/store?Action=DisplayPage&Locale=en_IN&SiteID=adskin&id=QuickBuyCartPage&mktvar002=afc_in_usi_email"),
		"link2": usi_app.aff_links["en_IN"] + "?url=" + encodeURIComponent("https://www.autodesk.in/benefits/multi-year-subscriptions?mktvar002=afc_in_upsellit_cartabandonmentemail"),
		"link3": usi_app.aff_links["en_IN"] + "?url=" + encodeURIComponent("https://www.autodesk.in/benefits/buy-online-securely?mktvar002=afc_in_upsellit_cartabandonmentemail"),
		"link4": usi_app.aff_links["en_IN"] + "?url=" + encodeURIComponent("https://www.autodesk.in/benefits/refund-policy?mktvar002=afc_in_upsellit_cartabandonmentemail"),
		"from_name": "Autodesk Support",
		"optin_head": "In A Hurry?",
		"optin_desc": "Please email me the contents of my cart.",
		"optin_ok": "OK",
		"tt_head": "Create. Manage. Collaborate.<br />All in one place.",
		"tt_btn": "CONTINUE CHECKOUT"
	},
	"es-MX": {
		"link": usi_app.aff_links["es-MX"] + "?url=" + usi_app.encode_link("/es-MX?mktvar002=afc_mx_usi_email"),
		"from_name": "Equipo de atenci\u00F3n al cliente de Autodesk",
		"optin_head": "\u00BFTienes Prisa?",
		"optin_desc": "Quiero recibir por email el contenido de mi carrito.",
		"optin_ok": "Enviar ahora",
		"tt_head": "Cree. Gestione. Colabore. <br />Todo en uno.",
		"tt_btn": "COMPRE AHORA"
	},
	"es_MX": {
		"link": usi_app.aff_links["es_MX"] + "?url=" + usi_app.encode_link("/store?Action=DisplayPage&Locale=es_MX&SiteID=adsk&id=QuickBuyCartPage&mktvar002=afc_mx_usi_email"),
		"from_name": "Equipo de atenci\u00F3n al cliente de Autodesk",
		"optin_head": "\u00BFTienes Prisa?",
		"optin_desc": "Quiero recibir por email el contenido de mi carrito.",
		"optin_ok": "Enviar ahora",
		"tt_head": "Cree. Gestione. Colabore. <br />Todo en uno.",
		"tt_btn": "COMPRE AHORA"
	},
	"es-ES": {
		"link": usi_app.aff_links["es-ES"] + "?url=" + usi_app.encode_link("/es-ES?mktvar002=afc_es_usi_email"),
		"from_name": "Autodesk tienda online",
		"optin_head": "\u00BFTienes Prisa?",
		"optin_desc": "Quiero recibir por email el contenido de mi carrito.",
		"optin_ok": "Enviar ahora",
		"tt_head": "Cree. Gestione. Colabore. <br />Todo en uno.",
		"tt_btn": "COMPRE AHORA"
	},
	"fr-FR": {
		"link": usi_app.aff_links["fr-FR"] + "?url=" + usi_app.encode_link("/fr-FR?mktvar002=afc_fr_usi_email"),
		"from_name": "Autodesk Boutique en ligne",
		"optin_head": "Vous \u00EAtes press\u00E9?",
		"optin_desc": "Nous pouvons vous envoyer le contenu de votre panier par e-mail.",
		"optin_ok": "OK",
		"tt_head": "Cr\u00E9er. G\u00E9rer. Collaborer.<br /> De mani\u00E8re centralis\u00E9e",
		"tt_btn": "CONTINUER LA COMMANDE"
	},
	"fr-CH": {
		"link": usi_app.aff_links["fr-CH"] + "?url=" + usi_app.encode_link("/fr-CH?mktvar002=afc_frch_usi_email"),
		"from_name": "Autodesk Boutique en ligne",
		"optin_head": "Vous \u00EAtes press\u00E9?",
		"optin_desc": "Nous pouvons vous envoyer le contenu de votre panier par e-mail.",
		"optin_ok": "OK",
		"tt_head": "Cr\u00E9er. G\u00E9rer. Collaborer.<br /> De mani\u00E8re centralis\u00E9e",
		"tt_btn": "CONTINUER LA COMMANDE"
	},
	"fr-CA": {
		"link": usi_app.aff_links["fr-CA"] + "?url=" + usi_app.encode_link("/fr-CA?mktvar002=afc_frca_usi_email"),
		"from_name": "Autodesk Boutique en ligne",
		"optin_head": "Vous \u00EAtes press\u00E9?",
		"optin_desc": "Nous pouvons vous envoyer le contenu de votre panier par e-mail.",
		"optin_ok": "OK",
		"tt_head": "Cr\u00E9er. G\u00E9rer. Collaborer.<br /> De mani\u00E8re centralis\u00E9e",
		"tt_btn": "CONTINUER LA COMMANDE"
	},
	"it-IT": {
		"link": usi_app.aff_links["it-IT"] + "?url=" + usi_app.encode_link("/it-IT?mktvar002=afc_it_usi_email"),
		"from_name": "Autodesk negozio online",
		"optin_head": "Hai fretta?",
		"optin_desc": "Inviami il contenuto del carrello tramite e-mail.",
		"optin_ok": "OK",
		"tt_head": "Creare. Amministrare. Collaborare.<br />Tutto nello stesso posto",
		"tt_btn": "PROCEDI ALL\u2019ACQUISTO"
	},
	"it-CH": {
		"link": usi_app.aff_links["it-CH"] + "?url=" + usi_app.encode_link("/it-CH?mktvar002=afc_itch_usi_email"),
		"from_name": "Autodesk negozio online",
		"optin_head": "Hai fretta?",
		"optin_desc": "Inviami il contenuto del carrello tramite e-mail.",
		"optin_ok": "OK",
		"tt_head": "Creare. Amministrare. Collaborare.<br />Tutto nello stesso posto",
		"tt_btn": "PROCEDI ALL\u2019ACQUISTO"
	},
	"pt_BR": {
		"link": usi_app.aff_links["pt_BR"] + "?url=" + usi_app.encode_link("/store?Action=DisplayPage&Locale=pt_BR&SiteID=adskbr&id=QuickBuyCartPage&mktvar002=afc_br_usi_email"),
		"from_name": "Autodesk Support",
		"optin_head": "Precisa de mais tempo?",
		"optin_desc": "Envie os itens do carrinho para o seu email.",
		"optin_ok": "OK",
		"tt_head": "Crie. Gerencie. Colabore. <br />Tudo em um s\u00F3 lugar.",
		"tt_btn": "PROSSIGA CHECKOUT"
	},
	"pt-PT": {
		"link": usi_app.aff_links["pt-PT"] + "?url=" + usi_app.encode_link("/pt-PT?mktvar002=afc_pt_usi_email"),
		"from_name": "Suporte Autodesk",
		"optin_head": "Est\u00E1 com pressa?",
		"optin_desc": "Por favor, enviem-me por e-mail o conte\u00FAdo do meu carrinho.",
		"optin_ok": "OK",
		"tt_head": "Crie. Gerencie. Colabore. <br />Tudo em um s\u00F3 lugar.",
		"tt_btn": "PROSSIGA CHECKOUT"
	},
	"pl-PL": {
		"link": usi_app.aff_links["pl-PL"] + "?url=" + usi_app.encode_link("/pl-PL?mktvar002=afc_pl_usi_email"),
		"from_name": "Pomoc techniczna Autodesk",
		"optin_head": "\u015Apieszysz si\u0119?",
		"optin_desc": "Prosz\u0119 wys\u0142a\u0107 mi zawarto\u015B\u0107 koszyka w wiadomo\u015Bci e-mail.",
		"optin_ok": "OK",
		"tt_head": "Tw\u00F3rz. Zarz\u0105dzaj. Wsp\u00F3\u0142pracuj. <br />Wszystko w jednym miejscu.",
		"tt_btn": "KONTYNUUJ ZAM\u00D3WIENIE"
	},
	"de-DE": {
		"link": usi_app.aff_links["de-DE"] + "?url=" + usi_app.encode_link("/de-DE?mktvar002=afc_de_usi_email"),
		"from_name": "Autodesk Online-Shop",
		"optin_head": "Ben\u00F6tigen Sie mehr Zeit?",
		"optin_desc": "Bitte schicken Sie mir den Inhalt meines Einkaufswagens per E-Mail.",
		"optin_ok": "OK",
		"tt_head": "Gemeinsam gestalten und alles <br />zentral verwalten",
		"tt_btn": "MIT KAUF FORTFAHREN"
	},
	"de-CH": {
		"link": usi_app.aff_links["de-CH"] + "?url=" + usi_app.encode_link("/de-CH?mktvar002=afc_de_usi_email"),
		"from_name": "Autodesk Online-Shop",
		"optin_head": "Ben\u00F6tigen Sie mehr Zeit?",
		"optin_desc": "Bitte schicken Sie mir den Inhalt meines Einkaufswagens per E-Mail.",
		"optin_ok": "OK",
		"tt_head": "Gemeinsam gestalten und alles <br />zentral verwalten",
		"tt_btn": "MIT KAUF FORTFAHREN"
	},
	"no-NO": {
		"link": usi_app.aff_links["no-NO"] + "?url=" + usi_app.encode_link("/no-NO?mktvar002=afc_no_usi_email"),
		"from_name": "Autodesk-st\u00F8tte",
		"optin_head": "Har det travelt?",
		"optin_desc": "Send meg en e-post om innholdet i handlevognen min.",
		"optin_ok": "OK",
		"tt_head": "SKAP. ADMINISTRER. SAMARBEID.<br /> ALT P\u00C5 ETT STED.",
		"tt_btn": "FORTSETT TIL KASSEN"
	},
	"nl-NL": {
		"link": usi_app.aff_links["nl-NL"] + "?url=" + usi_app.encode_link("/nl-NL?mktvar002=afc_nl_usi_email"),
		"from_name": "Autodesk-helpdesk",
		"optin_head": "Heeft u haast?",
		"optin_desc": "E-mail mij de inhoud van mijn winkelwagentje.",
		"optin_ok": "OK",
		"tt_head": "Samen ontwerpen en alles <br />centraal beheren",
		"tt_btn": "BESTELLING AFRONDEN"
	},
	"nl-BE": {
		"link": usi_app.aff_links["nl-BE"] + "?url=" + usi_app.encode_link("/nl-BE?mktvar002=afc_nlbe_usi_email"),
		"from_name": "Autodesk-helpdesk",
		"optin_head": "Heeft u haast?",
		"optin_desc": "E-mail mij de inhoud van mijn winkelwagentje.",
		"optin_ok": "OK",
		"tt_head": "Samen ontwerpen en alles <br />centraal beheren",
		"tt_btn": "BESTELLING AFRONDEN"
	},
	"fr-BE": {
		"link": usi_app.aff_links["fr-BE"] + "?url=" + usi_app.encode_link("/fr-BE?mktvar002=afc_frbe_usi_email"),
		"from_name": "Autodesk Boutique en ligne",
		"optin_head": "Vous \u00EAtes press\u00E9?",
		"optin_desc": "Nous pouvons vous envoyer le contenu de votre panier par e-mail.",
		"optin_ok": "OK",
		"tt_head": "Cr\u00E9er. G\u00E9rer. Collaborer.<br /> De mani\u00E8re centralis\u00E9e",
		"tt_btn": "CONTINUER LA COMMANDE"
	},
	"ru-RU": {
		"link": usi_app.aff_links["ru-RU"] + "?url=" + usi_app.encode_link("/ru-RU?mktvar002=afc_ru_usi_email"),
		"from_name": "\u0421\u043B\u0443\u0436\u0431\u0430 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 Autodesk",
		"optin_head": "\u041D\u0443\u0436\u043D\u043E \u0431\u043E\u043B\u044C\u0448\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u0438?",
		"optin_desc": "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430 \u043F\u043E\u0448\u043B\u0438\u0442\u0435 \u043C\u043D\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u043C\u043E\u0435\u0439 \u043A\u043E\u0440\u0437\u0438\u043D\u044B",
		"optin_ok": "\u0414\u0410",
		"tt_head": "\u0421\u041E\u0417\u0414\u0410\u0412\u0410\u0419\u0422\u0415. \u0423\u041F\u0420\u0410\u0412\u041B\u042F\u0419\u0422\u0415. \u041E\u0411\u042A\u0415\u0414\u0418\u041D\u042F\u0419\u0422\u0415\u0421\u042C. <br />\u0412\u0421\u0415 \u0412 \u041E\u0414\u041D\u041E\u041C \u041C\u0415\u0421\u0422\u0415.",
		"tt_btn": "\u041F\u0420\u041E\u0414\u041E\u041B\u0416\u0418\u0422\u042C \u041F\u041E\u041A\u0423\u041F\u041A\u0418"
	},
	"tr-TR": {
		"link": usi_app.aff_links["tr-TR"] + "?url=" + usi_app.encode_link("/store?Action=DisplayPage&Locale=tr_TR&SiteID=adsk&id=QuickBuyCartPage&mktvar002=afc_tr_usi_email"),
		"from_name": "Autodesk m\u00FC\u015Fteri hizmetleri ekibi",
		"optin_head": "Daha fazla zamana ihtiyac\u0131m\u0131z var?",
		"optin_desc": "Sepetin i\u00E7eri\u011Finideki ileri e-postaya g\u00F6nderin l\u00FCtfen",
		"optin_ok": "Tamam",
		"tt_head": "YARATIN. Y\u00D6NETIN. BIRLIKTE \u00C7ALI\u015EIN. <br />T\u00DCM\u00DC SADECE BIR YERDE.",
		"tt_btn": "\u00D6DEMEYE DEVAM"
	},
	"sv-SE": {
		"link": usi_app.aff_links["sv-SE"] + "?url=" + usi_app.encode_link("/sv-SE?mktvar002=afc_se_usi_email"),
		"from_name": "Autodesk Support",
		"optin_head": "Har du br\u00E5ttom?",
		"optin_desc": "Mejla mig inneh\u00E5llet i min kundvagn.",
		"optin_ok": "OK",
		"tt_head": "SKAPA. HANTERA. SAMMARBETA. <br />ALLT P\u00C5 ETT ST\u00C4LLE.",
		"tt_btn": "FORTS\u00C4TT TILL KASSAN"
	},
	"ja-JP": {
		"link": usi_app.aff_links["ja-JP"] + "?url=" + usi_app.encode_link("/ja-JP?mktvar002=afc_jp_usi_email"),
		"link2": usi_app.aff_links["ja-JP"] + "?url=" + encodeURIComponent("https://www.autodesk.co.jp/benefits/multi-year-subscriptions?mktvar002=afc_jp_upsellit_cartabandonmentemail"),
		"link3": usi_app.aff_links["ja-JP"] + "?url=" + encodeURIComponent("https://www.autodesk.co.jp/benefits/buy-online-securely?mktvar002=afc_jp_upsellit_cartabandonmentemail"),
		"link4": usi_app.aff_links["ja-JP"] + "?url=" + encodeURIComponent("https://www.autodesk.co.jp/benefits/refund-policy?mktvar002=afc_jp_upsellit_cartabandonmentemail"),
		"from_name": "\u30AA\u30FC\u30C8\u30C7\u30B9\u30AF\u30B9\u30C8\u30A2\u30AB\u30B9\u30BF\u30DE\u30FC\u30B5\u30DD\u30FC\u30C8",
		"optin_head": "\u3054\u6C7A\u5B9A\u306B\u3082\u3063\u3068\u6642\u9593\u304C\u5FC5\u8981\u3067\u3059\u304B\uFF1F",
		"optin_desc": "\u6CE8\u6587\u5185\u5BB9\u306B\u3064\u3044\u3066\u30E1\u30FC\u30EB\u3092\u9001\u3063\u3066\u4E0B\u3055\u3044\u3002",
		"optin_ok": "\u306F\u3044",
		"tt_head": "\u5275\u9020\u3002\u7BA1\u7406\u3002\u5354\u50CD\u3002<br />\u3059\u3079\u3066\u304C\u4E00\u3064\u306E\u5834\u6240\u306B\u3002",
		"tt_btn": "\u8CFC\u5165\u624B\u7D9A\u304D\u3092\u7D9A\u3051\u308B"
	},
	"ko_KR": {
		"link": usi_app.aff_links["ko_KR"] + "?url=" + usi_app.encode_link("/store?Action=DisplayPage&Locale=ko_KR&SiteID=adskkr&id=QuickBuyCartPage&mktvar002=afc_kr_usi_email"),
		"link2": usi_app.aff_links["ko_KR"] + "?url=" + encodeURIComponent("https://www.autodesk.co.kr/benefits/multi-year-subscriptions?mktvar002=afc_kr_upsellit_cartabandonmentemail"),
		"link3": usi_app.aff_links["ko_KR"] + "?url=" + encodeURIComponent("https://www.autodesk.co.kr/benefits/buy-online-securely?mktvar002=afc_kr_upsellit_cartabandonmentemail"),
		"link4": usi_app.aff_links["ko_KR"] + "?url=" + encodeURIComponent("https://www.autodesk.co.kr/benefits/refund-policy?mktvar002=afc_kr_upsellit_cartabandonmentemail"),
		"from_name": "\uC624\uD1A0\uB370\uC2A4\uD06C \uC2A4\uD1A0\uC5B4",
		"optin_head": "\uC2DC\uAC04\uC774 \uB354 \uD544\uC694\uD558\uC2E0\uAC00\uC694?",
		"optin_desc": "\uC7A5\uBC14\uAD6C\uB2C8 \uB0B4\uC5ED\uC744 \uC774\uBA54\uC77C\uB85C \uBC1B\uB294\uB370 \uB3D9\uC758\uD569\uB2C8\uB2E4.",
		"optin_ok": "\uC644\uB8CC",
		"tt_head": "\uCC3D\uC870. \uAD00\uB9AC. \uD611\uB825.<br />\uBAA8\uB450 \uD55C\uACF3\uC5D0\uC11C.",
		"tt_btn": "\uACB0\uC81C \uC9C4\uD589\uD558\uAE30"
	},
	"ko-KR": {
		"link": usi_app.aff_links["ko_KR"] + "?url=" + usi_app.encode_link("/store?Action=DisplayPage&Locale=ko_KR&SiteID=adskkr&id=QuickBuyCartPage&mktvar002=afc_kr_usi_email"),
		"link2": usi_app.aff_links["ko_KR"] + "?url=" + encodeURIComponent("https://www.autodesk.co.kr/benefits/multi-year-subscriptions?mktvar002=afc_kr_upsellit_cartabandonmentemail"),
		"link3": usi_app.aff_links["ko_KR"] + "?url=" + encodeURIComponent("https://www.autodesk.co.kr/benefits/buy-online-securely?mktvar002=afc_kr_upsellit_cartabandonmentemail"),
		"link4": usi_app.aff_links["ko_KR"] + "?url=" + encodeURIComponent("https://www.autodesk.co.kr/benefits/refund-policy?mktvar002=afc_kr_upsellit_cartabandonmentemail"),
		"from_name": "\uC624\uD1A0\uB370\uC2A4\uD06C \uC2A4\uD1A0\uC5B4",
		"optin_head": "\uC2DC\uAC04\uC774 \uB354 \uD544\uC694\uD558\uC2E0\uAC00\uC694?",
		"optin_desc": "\uC7A5\uBC14\uAD6C\uB2C8 \uB0B4\uC5ED\uC744 \uC774\uBA54\uC77C\uB85C \uBC1B\uB294\uB370 \uB3D9\uC758\uD569\uB2C8\uB2E4.",
		"optin_ok": "\uC644\uB8CC",
		"tt_head": "\uCC3D\uC870. \uAD00\uB9AC. \uD611\uB825.<br />\uBAA8\uB450 \uD55C\uACF3\uC5D0\uC11C.",
		"tt_btn": "\uACB0\uC81C \uC9C4\uD589\uD558\uAE30"
	},
	"fi-FI": {
		"link": usi_app.aff_links["fi-FI"] + "?url=" + usi_app.encode_link("/fi-FI?mktvar002=afc_fi_usi_email{{usi_pids}}"),
		"from_name": "Autodesk-tuki",
		"optin_head": "Onko sinulla kiire?",
		"optin_desc": "L\u00E4het\u00E4 minulle ostoskorini sis\u00E4lt\u00F6 s\u00E4hk\u00F6postilla.",
		"optin_ok": "OK",
		"tt_head": "LUO. K\u00C4SITTELE. TEE YHTEISTY\u00D6T\u00C4. <br />KAIKKI SAMASSA PAIKASSA.",
		"tt_btn": "JATKA TILAUKSEN L\u00C4HETYKSEEN"
	},
	"hu-HU": {
		"link": usi_app.aff_links["hu-HU"] + "?url=" + usi_app.encode_link("/hu-HU?mktvar002=afc_hu_usi_email"),
		"from_name": "Autodesk t\u00E1mogat\u00E1s",
		"optin_head": "Siet?",
		"optin_desc": "K\u00E9rem, k\u00FCldj\u00E9k el e-mailben a kosaram tartalm\u00E1t.",
		"optin_ok": "OK",
		"tt_head": "ALKOSSON. IR\u00C1NY\u00CDTSON. M\u0170K\u00D6DJ\u00D6N EGY\u00DCTT. <br />MINDEN EGY HELYEN.",
		"tt_btn": "TOV\u00C1BB A KASSZ\u00C1RA"
	},
	"cs-CZ": {
		"link": usi_app.aff_links["cs-CZ"] + "?url=" + usi_app.encode_link("/cs-CZ?mktvar002=afc_cz_usi_email"),
		"from_name": "Podpora spole\u010Dnosti Autodesk",
		"optin_head": "M\u00E1te nasp\u011Bch?",
		"optin_desc": "Za\u0161lete mi e-mailem obsah ko\u0161\u00EDku.",
		"optin_ok": "OK",
		"tt_head": "Tvo\u0159te. Spravujte. Spolupracujte.<br />V\u0161echno na jednom m\u00EDst\u011B.",
		"tt_btn": "POKRA\u010CUJTE V PLATB\u011A"
	},
	"da-DK": {
		"link": usi_app.aff_links["da-DK"] + "?url=" + usi_app.encode_link("/da-DK?mktvar002=afc_dk_usi_email"),
		"from_name": "Autodesk Support",
		"optin_head": "Har du travlt?",
		"optin_desc": "Email mig venligst indholdet i min kurv.",
		"optin_ok": "OK",
		"tt_head": "OPRET. ADMINISTR\u00C9R. SAMARBEJDE. <br />ALT SAMLET P\u00C5 \u00C9T STED",
		"tt_btn": "FORTS\u00C6T BETALING"
	},
	"zh_CN": {
		"link": usi_app.aff_links["zh_CN"] + "?url=" + usi_app.encode_link("/store?Action=DisplayPage&Locale=zh_CN&SiteID=adskcn&id=QuickBuyCartPage&mktvar002=afc_cn_usi_email"),
		"link2": usi_app.aff_links["zh_CN"] + "?url=" + encodeURIComponent("https://www.autodesk.com.cn/benefits/multi-year-subscriptions?mktvar002=afc_cn_upsellit_cartabandonmentemail"),
		"link3": usi_app.aff_links["zh_CN"] + "?url=" + encodeURIComponent("https://www.autodesk.com.cn/benefits/buy-online-securely?mktvar002=afc_cn_upsellit_cartabandonmentemail"),
		"link4": usi_app.aff_links["zh_CN"] + "?url=" + encodeURIComponent("https://www.autodesk.com.cn/benefits/buy-online-securely?mktvar002=afc_cn_upsellit_cartabandonmentemail"),
		"from_name": "\u6B27\u7279\u514B\u5BA2\u670D",
		"optin_head": "\u8D76\u65F6\u95F4\u5417\uFF1F",
		"optin_desc": "\u628A\u8D2D\u7269\u8F66\u5185\u5BB9\u53D1\u5230\u6211\u7684\u90AE\u7BB1\u3002",
		"optin_ok": "\u597D\u7684",
		"tt_head": "\u521B\u9020 \u7BA1\u7406 \u534F\u4F5C<br />\u4E00\u7AD9\u5F0F\u8F6F\u4EF6\u4EA7\u54C1",
		"tt_btn": "\u70B9\u51FB\u7EE7\u7EED"
	}
};
usi_app.upsell_list = {
	"ACDIST": {
		5175204500: 5175204700,
		5175178900: 5175179100,
		5175203600: 5175203800,
		5265851400: 5265851600,
		24016: 24026,
		24015: 24025,
		24014: 24024,
		24013: 24023,
		24012: 24022,
		24034: 24036,
		24040: 24042,
		23998: 24000
	},
	"ACDLT": {
		334624900: 334625100,
		5064672900: 5064673100,
		334805700: 334805900,
		24124: 24140,
		24127: 24143,
		24126: 24142,
		24123: 24139,
		24125: 24141,
		24129: 24145,
		24131: 24147,
		24117: 24133
	},
	"ACDLTM": {
		5343030900: 5343031000,
		21827: 21811,
		21830: 21813,
		21829: 21814,
		21826: 21816,
		21828: 21817,
		21831: 21812,
		21818: 21815,
		22131: 22133
	},
	"MAYA": {
		5282211400: 5276772200,
		5026767800: 5026768000,
		5064675600: 5064675800,
		332331300: 332331700,
		5342460100: 5342460200,
		24542: 24551,
		24545: 24553,
		24544: 24554,
		24541: 24555,
		24543: 24561,
		24559: 24552,
		24565: 24567,
		24523: 24525
	},
	"MAYALT": {
		5343130400: 5343130500,
		5023725400: 5023725600,
		5109132800: 5109133000,
		325558800: 4426974500,
		24579: 24590,
		24580: 24591,
		24581: 24592,
		24582: 24593,
		24583: 24597,
		24595: 24589,
		24601: 24602,
		24571: 24573
	},
	"RVT": {
		5282506000: 5282505900,
		5342419400: 5342419500,
		334478800: 334479000,
		5106958300: 5106958500,
		5250171200: 5250171400,
		24918: 24928,
		24916: 24926,
		24914: 24924,
		24917: 24927,
		24915: 24925,
		24932: 24934,
		24938: 24940,
		24896: 24898
	},
	"RVTLT": {
		5343022500: 5343022600,
		334576200: 334576400,
		5146831400: 5146831600,
		5145960000: 5145960200,
		24963: 24973,
		24966: 24976,
		24965: 24975,
		24962: 24972,
		24964: 24974,
		24980: 24982,
		24984: 24986,
		24944: 24946
	},
	"3DSMAX": {
		5342420600: 5342420700,
		334495200: 334495400,
		5064674700: 5064674900,
		335051800: 335052000,
		23746: 23778,
		23747: 23779,
		23748: 23780,
		23749: 23781,
		23750: 23782,
		23738: 23770,
		23740: 23772,
		23752: 23784
	},
	"AECCOL": {
		5342419700: 5342419800,
		23970: 23980,
		23973: 23983,
		23972: 23982,
		23969: 23979,
		23971: 23981,
		23987: 23989,
		23993: 23995,
		23951: 23953,
		5282507500: 5282507400,
		5056161400: 5056161600,
		5064643100: 5064643300,
		5056951700: 5056951900
	},
	"PDCOLL": {
		5282507800: 5282507700,
		5056953400: 5056953600,
		24843: 24854,
		24844: 24855,
		24845: 24856,
		24846: 24857,
		24847: 24863,
		24861: 24853,
		5342521500: 5342521600,
		5056163100: 5056163300,
		5064644000: 5064644200,
		24867: 24869,
		24825: 24827
	},
	"MECOLL": {
		5342420000: 5342420100,
		5282508200: 5282508100,
		5056164800: 5056165000,
		5064644900: 5064645100,
		5056159500: 5056159700
	},
	"CIV3D": {
		5342421200: 5342421300,
		5282505700: 5282505600,
		334627700: 334627900,
		5064676500: 5064676700,
		334803200: 334803400,
		24250: 24260,
		24253: 24263,
		24252: 24262,
		24249: 24259,
		24251: 24261,
		24267: 24269,
		24273: 24275,
		24231: 24233
	}
}

usi_app.upsell_pids_list = {
	"18179": 21889,
	"18181": 21892,
	"18183": 21895,
	"18185": 21898,
	"18187": 21904,
	"18191": 21907,
	"23498": 23514,
	"23499": 23515,
	"23500": 23516,
	"23501": 23517,
	"23502": 23518,
	"23503": 23519,
	"23504": 23520,
	"23505": 23521,
	"23807": 23809,
	"23821": 23831,
	"23822": 23804,
	"23823": 23832,
	"23824": 23833,
	"23825": 23834,
	"23842": 23844,
	"23848": 23850,
	"24072": 24082,
	"24073": 24083,
	"24074": 24084,
	"24075": 24085,
	"24076": 24086,
	"24094": 24096,
	"24447": 24457,
	"24448": 24458,
	"24449": 24459,
	"24450": 24460,
	"24451": 24461,
	"24463": 24465,
	"24781": 24783,
	"24799": 24809,
	"24800": 24810,
	"24801": 24811,
	"24802": 24812,
	"24803": 24813,
	"24815": 24817,
	"24819": 24821,
	"25220": 25221,
	"25227": 25234,
	"25228": 25235,
	"25229": 25236,
	"25230": 25232,
	"25231": 25233,
	"25238": 25239,
	"25241": 25242,
	"25480": 25481,
	"25486": 26018,
	"25501": 25502,
	"25512": 25513,
	"25553": 25554,
	"25750": 25756,
	"25752": 25758,
	"25753": 25759,
	"25882": 25888,
	"25884": 25890,
	"25885": 25891,
	"25936": 25942,
	"25938": 25944,
	"25939": 25945,
	"25972": 25978,
	"25974": 25980,
	"25975": 25981,
	"26173": 26179,
	"26175": 26181,
	"26176": 26182,
	"26387": 26388,
	"26409": 26410,
	"26418": 26419,
	"26424": 26425,
	"26481": 26184,
	"26594": 26595,
	"26616": 26617,
	"26625": 26626,
	"26631": 26632,
	"26660": 26183,
	"26899": 26900,
	"26906": 26913,
	"26907": 26914,
	"26908": 26915,
	"26909": 26911,
	"26910": 26912,
	"26917": 26918,
	"26920": 26921,
	"26923": 26924,
	"26930": 26935,
	"26932": 26937,
	"26933": 26938,
	"26934": 26939,
	"26941": 26942,
	"27018": 27019,
	"27021": 27022,
	"27024": 27025,
	"27027": 27028,
	"27030": 27031,
	"27034": 27035,
	"27037": 27038,
	"27042": 27043,
	"27045": 27046,
	"27048": 27049,
	"27050": 27051,
	"27053": 27054,
	"27055": 27056,
	"27066": 27067,
	"27068": 27069,
	"27070": 27071,
	"27072": 27073,
	"27075": 27076,
	"27078": 27079,
	"27082": 27083,
	"27085": 27086,
	"27088": 27089,
	"27090": 27091,
	"27093": 27094,
	"27096": 27097,
	"27099": 27100,
	"27102": 27103,
	"27104": 27105,
	"27107": 27108,
	"27110": 27111,
	"27112": 27113,
	"27115": 27116,
	"27118": 27119,
	"27121": 27122,
	"27127": 27129,
	"27132": 27134,
	"27138": 27140,
	"27145": 27147,
	"27150": 27152,
	"27157": 27159,
	"27162": 27164,
	"27171": 27172,
	"27174": 27175,
	"27177": 27178,
	"27179": 27180,
	"27184": 27186,
	"27190": 27192,
	"27210": 27211,
	"27212": 27213,
	"27214": 27216,
	"27218": 27220,
	"27223": 27224,
	"27228": 27230,
	"27235": 27237,
	"27239": 27240,
	"27245": 27247,
	"27248": 27250,
	"27255": 27257,
	"27261": 27263,
	"27270": 27272,
	"27274": 27275,
	"27277": 27278,
	"27281": 27284,
	"27288": 27290,
	"27291": 27293,
	"27298": 27300,
	"27304": 27306,
	"27310": 27312,
	"27317": 27319,
	"27322": 27324,
	"27328": 27330,
	"27335": 27337,
	"27340": 27342,
	"27349": 27351,
	"27352": 27354,
	"27361": 27362,
	"27363": 27364,
	"27366": 27367,
	"27368": 27369,
	"27373": 27375,
	"27377": 27379,
	"27397": 27398,
	"27399": 27400,
	"27401": 27403,
	"27405": 27407,
	"27410": 27411,
	"27415": 27417,
	"27422": 27424,
	"27426": 27428,
	"27432": 27434,
	"27435": 27437,
	"27442": 27444,
	"27454": 27456,
	"27458": 27459,
	"27460": 27461,
	"27465": 27467,
	"27471": 27473,
	"27474": 27476,
	"27481": 27483,
	"27485": 27487,
	"27491": 27493,
	"27514": 27524,
	"27515": 27525,
	"27516": 27526,
	"27517": 27527,
	"27518": 27528,
	"27539": 27549,
	"27541": 27551,
	"27543": 27553,
	"27545": 27555,
	"27547": 27557,
	"27569": 27579,
	"27571": 27581,
	"27573": 27583,
	"27575": 27585,
	"27577": 27587,
	"27604": 27614,
	"27605": 27615,
	"27606": 27616,
	"27607": 27617,
	"27608": 27618,
	"27629": 27639,
	"27630": 27640,
	"27631": 27641,
	"27632": 27642,
	"27633": 27643,
	"27664": 27674,
	"27665": 27675,
	"27666": 27676,
	"27667": 27677,
	"27668": 27678,
	"27679": 27689,
	"27680": 27690,
	"27681": 27691,
	"27682": 27692,
	"27683": 27693,
	"27724": 27731,
	"27725": 27732,
	"27726": 27733,
	"27727": 27729,
	"27728": 27730,
	"27739": 27746,
	"27740": 27747,
	"27741": 27748,
	"27742": 27744,
	"27743": 27745,
	"27754": 27761,
	"27755": 27762,
	"27756": 27763,
	"27757": 27759,
	"27758": 27760,
	"27764": 27771,
	"27765": 27772,
	"27766": 27773,
	"27767": 27769,
	"27768": 27770,
	"27789": 27799,
	"27790": 27800,
	"27791": 27801,
	"27792": 27802,
	"27793": 27803,
	"27809": 27819,
	"27810": 27820,
	"27811": 27821,
	"27812": 27822,
	"27813": 27823,
	"27909": 27916,
	"27910": 27917,
	"27911": 27918,
	"27912": 27914,
	"27913": 27915,
	"27919": 27926,
	"27920": 27927,
	"27921": 27928,
	"27922": 27924,
	"27923": 27925,
	"27929": 27939,
	"27930": 27940,
	"27931": 27941,
	"27933": 27943,
	"27949": 27959,
	"27950": 27960,
	"27951": 27961,
	"27952": 27962,
	"27953": 27963,
	"27974": 27979,
	"27975": 27980,
	"27976": 27981,
	"27977": 27982,
	"27978": 27983,
	"27999": 28009,
	"28000": 28010,
	"28001": 28011,
	"28002": 28012,
	"28003": 28013,
	"28034": 28044,
	"28035": 28045,
	"28036": 28046,
	"28037": 28047,
	"28038": 28048,
	"28054": 28064,
	"28055": 28065,
	"28056": 28066,
	"28057": 28067,
	"28058": 28068,
	"28084": 28094,
	"28085": 28095,
	"28086": 28096,
	"28087": 28097,
	"28088": 28098,
	"28099": 28109,
	"28101": 28111,
	"28103": 28113,
	"28105": 28115,
	"28107": 28117,
	"28134": 28144,
	"28135": 28145,
	"28136": 28146,
	"28137": 28147,
	"28138": 28148,
	"28164": 28174,
	"28165": 28175,
	"28166": 28176,
	"28167": 28177,
	"28168": 28178,
	"28194": 28204,
	"28195": 28205,
	"28196": 28206,
	"28197": 28207,
	"28198": 28208,
	"28214": 28221,
	"28215": 28222,
	"28216": 28223,
	"28217": 28219,
	"28218": 28220,
	"28229": 28234,
	"28230": 28235,
	"28231": 28236,
	"28232": 28237,
	"28233": 28238,
	"28254": 28264,
	"28255": 28265,
	"28258": 28268,
	"28274": 28284,
	"28275": 28285,
	"28276": 28286,
	"28277": 28287,
	"28278": 28288,
	"28299": 28309,
	"28301": 28311,
	"28303": 28313,
	"28305": 28315,
	"28307": 28317,
	"28334": 28344,
	"28335": 28345,
	"28336": 28346,
	"28337": 28347,
	"28338": 28348,
	"28364": 28374,
	"28365": 28375,
	"28366": 28376,
	"28367": 28377,
	"28368": 28378,
	"28394": 28404,
	"28395": 28405,
	"28396": 28406,
	"28397": 28407,
	"28398": 28408,
	"28413": 28415,
	"28418": 28420,
	"28424": 28426,
	"28431": 28433,
	"28436": 28438,
	"28445": 28447,
	"28450": 28452,
	"28459": 28460,
	"28461": 28462,
	"28464": 28465,
	"28471": 28473,
	"28475": 28477,
	"28494": 28496,
	"28498": 28499,
	"28500": 28502,
	"28504": 28506,
	"28509": 28510,
	"28514": 28516,
	"28521": 28523,
	"28525": 28527,
	"28531": 28533,
	"28534": 28536,
	"28541": 28543,
	"28546": 28548,
	"28553": 28555,
	"28557": 28558,
	"28559": 28560,
	"28564": 28566,
	"28570": 28572,
	"28573": 28575,
	"28580": 28582,
	"28586": 28588,
	"28592": 28594,
	"30314": 30320,
	"30316": 30322,
	"30317": 30323,
	"30318": 30324,
	"30319": 30325,
	"30332": 30338,
	"30334": 30340,
	"30335": 30341,
	"30336": 30342,
	"30337": 30343,
	"30350": 30356,
	"30352": 30358,
	"30353": 30359,
	"30354": 30360,
	"30355": 30361,
	"30368": 30374,
	"30370": 30376,
	"30371": 30377,
	"30372": 30378,
	"30373": 30379,
	"30386": 30392,
	"30388": 30394,
	"30389": 30395,
	"30390": 30396,
	"30391": 30397,
	"30403": 30409,
	"30405": 30411,
	"30406": 30412,
	"30407": 30413,
	"30408": 30414,
	"30421": 30427,
	"30423": 30429,
	"30424": 30430,
	"30425": 30431,
	"30426": 30432,
	"30439": 30445,
	"30441": 30447,
	"30442": 30448,
	"30443": 30449,
	"30444": 30450,
	"30469": 30475,
	"30471": 30477,
	"30472": 30478,
	"30473": 30479,
	"30474": 30480,
	"30487": 30493,
	"30489": 30495,
	"30490": 30496,
	"30491": 30497,
	"30492": 30498,
	"30505": 30511,
	"30507": 30513,
	"30508": 30514,
	"30509": 30515,
	"30510": 30516,
	"30517": 30523,
	"30519": 30525,
	"30520": 30526,
	"30521": 30527,
	"30522": 30528,
	"30535": 30541,
	"30537": 30543,
	"30538": 30544,
	"30539": 30545,
	"30540": 30546,
	"30552": 30558,
	"30554": 30560,
	"30555": 30561,
	"30556": 30562,
	"30557": 30563,
	"30618": 30624,
	"30620": 30626,
	"30621": 30627,
	"30622": 30628,
	"30623": 30629,
	"30634": 30641,
	"30635": 30642,
	"30637": 30640,
	"30638": 30644,
	"30639": 30645,
	"30646": 30652,
	"30648": 30654,
	"30649": 30655,
	"30650": 30656,
	"30651": 30657,
	"30658": 30664,
	"30660": 30666,
	"30661": 30667,
	"30662": 30668,
	"30663": 30669,
	"30676": 30682,
	"30678": 30684,
	"30679": 30685,
	"30680": 30686,
	"30681": 30687,
	"30694": 30700,
	"30696": 30702,
	"30697": 30703,
	"30698": 30704,
	"30699": 30705,
	"30718": 30724,
	"30720": 30726,
	"30721": 30727,
	"30722": 30728,
	"30723": 30729,
	"30736": 30742,
	"30738": 30744,
	"30739": 30745,
	"30740": 30746,
	"30741": 30747,
	"30754": 30760,
	"30756": 30762,
	"30757": 30763,
	"30758": 30764,
	"30759": 30765,
	"30770": 30776,
	"30772": 30778,
	"30773": 30779,
	"30774": 30780,
	"30775": 30781,
	"30788": 30794,
	"30790": 30796,
	"30791": 30797,
	"30792": 30798,
	"30793": 30799,
	"30806": 30812,
	"30808": 30814,
	"30809": 30815,
	"30810": 30816,
	"30811": 30817,
	"30824": 30830,
	"30826": 30832,
	"30827": 30833,
	"30828": 30834,
	"30829": 30835,
	"30842": 30848,
	"30844": 30850,
	"30845": 30851,
	"30846": 30852,
	"30847": 30853,
	"30859": 30865,
	"30861": 30867,
	"30862": 30868,
	"30863": 30869,
	"30864": 30870,
	"30877": 30883,
	"30879": 30885,
	"30880": 30886,
	"30881": 30887,
	"30882": 30888,
	"30894": 30900,
	"30896": 30902,
	"30897": 30903,
	"30898": 30904,
	"30899": 30905,
	"30911": 30917,
	"30913": 30919,
	"30914": 30920,
	"30915": 30921,
	"30916": 30922,
	"30929": 30935,
	"30931": 30937,
	"30932": 30938,
	"30933": 30939,
	"30934": 30940,
	"30947": 30953,
	"30949": 30955,
	"30950": 30956,
	"30951": 30957,
	"30952": 30958,
	"30965": 30971,
	"30967": 30973,
	"30968": 30974,
	"30969": 30975,
	"30970": 30976,
	"31171": 31216,
	"31174": 31217,
	"31178": 31219,
	"31190": 31221,
	"31191": 31222,
	"31192": 31223,
	"31193": 31224,
	"31194": 31225,
	"31202": 31231,
	"31210": 31233,
	"31211": 31234,
	"31212": 31235,
	"31213": 31236,
	"31214": 31237,
	"31215": 31238,
	"31267": 31268,
	"31270": 31271,
	"31273": 31274,
	"31276": 31277,
	"31279": 31280,
	"31283": 31284,
	"31286": 31287,
	"31289": 31290,
	"31292": 31293,
	"31295": 31296,
	"31298": 31299,
	"31301": 31302,
	"31304": 31305,
	"31308": 31309,
	"31310": 31311,
	"31312": 31313,
	"31314": 31315,
	"31317": 31318,
	"31320": 31321,
	"31329": 31330,
	"31332": 31333,
	"31334": 31335,
	"31336": 31337,
	"31338": 31340,
	"31342": 31343,
	"31346": 31347,
	"31349": 31350,
	"31352": 31353,
	"31355": 31356,
	"31358": 31359,
	"31361": 31362,
	"31364": 31365,
	"31367": 31368,
	"31370": 31371,
	"31373": 31374,
	"31376": 31377,
	"31379": 31380,
	"31382": 31383,
	"31385": 31386,
	"320236000": 320236200,
	"325558800": 4426974500,
	"332331300": 332331700,
	"332902900": 332903100,
	"333863000": 333863200,
	"334506000": 334506200,
	"334508800": 334509000,
	"334509600": 334509800,
	"334570800": 334571000,
	"334602100": 334602300,
	"334602900": 334603100,
	"334605700": 334605900,
	"334612600": 334612800,
	"334613400": 334613600,
	"334614300": 334614500,
	"334803200": 334803400,
	"334805700": 334805900,
	"334808100": 334808300,
	"334818600": 334818800,
	"334819400": 334819600,
	"334820200": 334820400,
	"334821000": 334821200,
	"335051800": 335052000,
	"335075100": 335075300,
	"1703520900": 1703521100,
	"2957206500": 2957206700,
	"3411569100": 3411569300,
	"27448": 27450,
	"27932": 27942,
	"28256": 28266,
	"5342418900": 5342419000,
	"5342460100": 5342460200,
	"5342419400": 5342419500,
	"5342419700": 5342419800,
	"5342420000": 5342420100,
	"5342420300": 5342420400,
	"5342420600": 5342420700,
	"5342420900": 5342421000,
	"5342421200": 5342421300,
	"5342521500": 5342521600,
	"5343021700": 5343021800,
	"5343023300": 5343023400,
	"5343023700": 5343023800,
	"5343024500": 5343024600,
	"5343129700": 5343129800,
	"5343026500": 5343026600,
	"5343026900": 5343027000,
	"5343027300": 5343027400,
	"5350614700": 5350614800,
	"5343028100": 5343028200,
	"5343028900": 5343029000,
	"5343029300": 5343029400,
	"5343030100": 5343030200,
	"5343030500": 5343030600,
	"5343063500": 5343063600,
	"5343063900": 5343064000,
	"5343064300": 5343064400,
	"5343064700": 5343064800,
	"5343130400": 5343130500,
	"5350615100": 5350615200,
	"5361225400": 5361225500,
	"5403743200": 5403743300,
	"5470242000": 5470242100,
	"5476961700": 5476961800,
	"5476962100": 5476962200,
	"5476962500": 5476962600,
	"5476962900": 5476963000,
	"5476963300": 5476963400,
	"5518111900": 5518112000,
	"5343022500": 5343022600,
	"5343025700": 5343025800,
	"5365151600": 5365151700,
	"5365152000": 5365152100,
	"5512493500": 5512493600,
	"5354508700": 5354508800,
	"5355291600": 5355291700,
	"5355292000": 5355292100,
	"5355292400": 5355292500,
	"5355292800": 5355292900,
	"5355293200": 5355293300,
	"5355294000": 5355294100,
	"5355294400": 5355294500,
	"5355294800": 5355294900,
	"5355295200": 5355295300,
	"5355338600": 5355338700,
	"5355339000": 5355339100,
	"5355339400": 5355339500,
	"5355339800": 5355339900,
	"5355341000": 5355341100,
	"5362831900": 5362832000,
	"5458662100": 5458662200,
	"5476471900": 5476472000,
	"5476472300": 5476472400,
	"5476472700": 5476472800,
	"5477212500": 5477212600,
	"5476473100": 5476473200,
	"5502121600": 5502121700,
	"5502122000": 5502122100,
	"5507001800": 5507001900,
	"5506981600": 5506981700,
	"5505021600": 5505021700,
	"5518873200": 5518873300,
	"5109491100": 5109491200,
	"5109491700": 5109491800,
	"5056508900": 5056509700,
	"5056511000": 5056511800,
	"5056512200": 5056512400,
	"5057001300": 5057001500,
	"5056971800": 5056972000,
	"5057003200": 5057003400,
	"5062041000": 5062041200,
	"5078233900": 5078234100,
	"5094063600": 5094063800,
	"5102021100": 5102713900,
	"5130211300": 5130211500,
	"5130211800": 5130212000,
	"5175204900": 5175205400,
	"5228007900": 5228008100,
	"5266342300": 5266342500,
	"5271518300": 5271518500,
	"5361224100": 5361224300,
	"5470362500": 5470362700,
	"5476474600": 5476474800,
	"5476475100": 5476475300,
	"5476475600": 5476475800,
	"5477713100": 5477713300,
	"5476477500": 5476477600,
	"5518792600": 5518792800,
	"5343024900": 5343025000,
	"5265851400": 5265851600,
	"5276772300": 5276772200,
	"5282211400": 5282211300,
	"5282505700": 5282505600,
	"5282506000": 5282505900,
	"5282506300": 5282506200,
	"5282506600": 5282506500,
	"5282506900": 5282506800,
	"5282507200": 5282507100,
	"5282507500": 5282507400,
	"5282507800": 5282507700,
	"5282508200": 5282508100,
	"5394892000": 5394891900,
	"5320061200": 5320061300,
	"5322801900": 5322802000,
	"5322802200": 5322802300,
	"5322802500": 5322802600,
	"5322802800": 5322802900,
	"5322803100": 5322803200,
	"5322803700": 5322803800,
	"5322804000": 5322804100,
	"5322804600": 5322804700,
	"5322804900": 5322805000,
	"5322805200": 5322805300,
	"5322806100": 5322806200,
	"5322806400": 5322806500,
	"5322806700": 5322806800,
	"5322807000": 5322807100,
	"5322807300": 5322807400,
	"5322807600": 5322807700,
	"5334481500": 5334481600,
	"5334481800": 5334481900,
	"5334482100": 5334482200,
	"5334482400": 5334482500,
	"5336683600": 5336683700,
	"5336683900": 5336684000,
	"5340676800": 5340676900,
	"5347507100": 5347507200,
	"5347507400": 5347507500,
	"5361225700": 5361225800,
	"5398223300": 5398223400,
	"5477051500": 5477051600,
	"5477051800": 5477051900,
	"5477052100": 5477052200,
	"5477211800": 5477211900,
	"5477052400": 5477052500,
	"5518873800": 5518873900,
	"5507461400": 5507461500,
	"5507441400": 5507441500,
	"4318736500": 4318736700,
	"5056159500": 5056159700,
	"5056951700": 5056951900,
	"5056953400": 5056953600,
	"5059471200": 5059471400,
	"5078626600": 5078626800,
	"5101750700": 5105052300,
	"5123431800": 5123432000,
	"5125261200": 5125261400,
	"5145960000": 5145960200,
	"5175203600": 5175203800,
	"5250171200": 5250171400,
	"5361222500": 5361222600,
	"5448052200": 5448052400,
	"5466101900": 5466102100,
	"5518794100": 5518794300,
	"5509331600": 5509331700,
	"5509332000": 5509332100,
	"5509332400": 5509332500,
	"5509332800": 5509332900,
	"5509333200": 5509333300,
	"5509333600": 5509333700,
	"5509334000": 5509334100,
	"5509334400": 5509334500,
	"5509334800": 5509334900,
	"5509335200": 5509335300,
	"5509335600": 5509335700,
	"5509336000": 5509336100,
	"5509336400": 5509336500,
	"5509336800": 5509336900,
	"5520212100": 5520212200
};

usi_app.upsell_pids_list_monthly = {
	"16171": 27248,
	"16186": 28534,
	"18162": 24066,
	"18208": 27155,
	"23482": 23498,
	"23488": 23504,
	"25269": 27212,
	"27273": 27274,
	"28556": 28557,
	"31172": 31174,
	"31200": 31202,
	"31240": 27171,
	"31241": 28459,
	"31249": 27177,
	"31250": 28464,
	"31257": 28461,
	"31259": 27174,
	"32368": 23807,
	"32369": 27184,
	"32375": 28424,
	"32405": 28471,
	"32419": 23848,
	"32427": 27138,
	"32432": 28498,
	"32434": 28443,
	"32453": 27298,
	"32469": 27255,
	"32485": 27203,
	"32493": 28559,
	"32496": 28580,
	"32497": 28457,
	"32512": 28488,
	"32531": 27277,
	"32543": 27169,
	"32545": 28541,
	"32555": 28509,
	"32561": 27223,
	"32568": 26899,
	"32574": 27195,
	"32587": 28480,
	"32606": 28531,
	"32608": 26920,
	"32610": 28450,
	"32616": 28586,
	"32655": 27304,
	"32672": 27162,
	"32676": 28413,
	"32684": 27310,
	"32689": 28445,
	"32699": 27157,
	"32702": 27245,
	"32716": 28592,
	"32726": 28570,
	"32727": 31456,
	"32750": 27127,
	"32753": 28514,
	"32768": 31436,
	"32804": 27228,
	"32805": 27288,
	"32808": 27132,
	"32818": 28564,
	"32828": 28418,
	"32850": 24064,
	"32856": 27281,
	"32859": 28546,
	"32870": 25220,
	"32877": 31156,
	"32878": 25241,
	"32910": 31128,
	"32930": 28431,
	"32931": 27261,
	"32946": 27207,
	"32950": 28492,
	"32964": 27145,
	"32969": 28521,
	"32972": 27235,
	"32986": 28436,
	"33011": 27150,
	"33017": 28553,
	"33019": 27210,
	"33021": 27270,
	"33047": 28494,
	"33052": 27239,
	"33058": 28525,
	"33924": 33962,
	"33941": 33948,
	"33970": 34008,
	"33987": 33994
}
		usi_app.main = function () {
			try {

				// Suppress all USI solutions
				if (usi_commons.gup_or_get_cookie("usi_suppress_all", usi_cookies.expire_time.minute * 10, true)) {
					usi_commons.log('[ main ] Suppressing all USI code...');
					return;
				}

				// Suppress on invalid docs
				if (typeof window['document'] === "undefined") {
					usi_commons.log('[ main ] Suppressing due to invalid window object...');
					return;
				}

				// Suppress on invalid session storage
				if (!usi_app.is_storage_supported('sessionStorage')) {
					usi_commons.log('[ main ] Suppressing due to invalid session storage...');
					return;
				}

				// General
				usi_app.company_id = "3614";
				usi_app.recommendation_site_product = "42917";
				usi_app.url = location.href.toLowerCase();
				usi_app.product_page_data = {};
				usi_app.products = [];
				usi_app.pids_in_cart = "";
				usi_app.plcs_in_cart = [];
				usi_app.cart_reference = "";
				usi_app.loading = 0;
				usi_app.upsell_inpage = {};
				usi_app.plc = '';
				usi_app.upsell_plcs = ['3DSMAX', 'AECCOL', 'ACD', 'ACDIST', 'ACDLT', 'ACDLTM', 'RVTLTS', 'CIV3D', 'MAYA', 'MAYALT', 'MECOLL', 'PDCOLL', 'RVT', 'RVTLT'];
				usi_app.upsell_plcs_monthly = ['3DSMAX', 'AECCOL', 'ACD', 'ACDIST', 'ACDLT', 'ACDLTM', 'RVTLTS', 'CIV3D', 'MAYA', 'MAYALT', 'MECOLL', 'PDCOLL', 'RVT', 'RVTLT'];
				usi_app.upsell_key = '';

				// Check KR CJ Suppressions
				usi_app.kr_pid_suppressions = ['100407173', '100407533', '100407518', '100407533', '100407521', '100407499', '100408074', '100408167', '100407449', '5813072', '100408056', '100435345', '5809536', '100407445', '5819192', '100415360', '100431256', '100431260', '100431261', '100431262', '100431265', '100431266', '100431267', '5810411', '100407173', '100435891', '100435905', '5815207', '100415282', '100431247', '100431251', '100431252', '5812054', '100407495', '100445865', '100445867', '100445868', '100445869', '5812221', '100407518', '100434019', '100434022', '100434023', '5812033', '100407533', '100431263', '100435364', '100435365', '100435366', '100435367', '5809348', '100407521', '100431326', '5812036', '100407499', '5812303', '100408074', '5815382', '100417119', '100432005', '5915879', '100477338', '100480086', '100480089', '100480090', '100480097', '5909077', '100472462', '5813123', '100408167', '5901938', '100468771', '100477373', '5949385', '100498922', '100498924', '5812231', '100415381', '5812038', '100407449', '5920717', '100480010', '5914746', '100476550'];
				usi_app.url_pid = usi_commons.gup('pid') || usi_commons.gup('PID');
				if (usi_app.url_pid && usi_app.kr_pid_suppressions.indexOf(usi_app.url_pid) !== -1) {
					usi_cookies.set('usi_suppress_kr', '1', usi_cookies.expire_time.week, true);
				}

				// Flags
				usi_app.suppress_delay_load = false;
				usi_app.is_enabled = usi_commons.gup_or_get_cookie("usi_enable", usi_cookies.expire_time.hour, true) != "";
				usi_app.is_forced = usi_commons.gup_or_get_cookie("usi_force", usi_cookies.expire_time.hour, true) != "";
				usi_app.force_group = usi_commons.gup_or_get_cookie('usi_force_group');
				usi_app.should_rebuild = usi_cookies.get("usi_redirect_happened") == null && usi_commons.gup("usi_pids") != "" && document.querySelector(".dr_emptyCart, .empty-cart-copy, .checkout--empty-cart--text") != null;
				usi_app.clear_cart_in_progress = false;

				// Regions
				usi_app.americas = ["en-US", "en-CA", "fr-CA", "es-MX", "es_MX", "pt_BR", "es_AR"];
				usi_app.northamerica = ["en-US", "en-CA", "fr-CA", "es-MX", "es_MX"];
				usi_app.emea = ["fr-BE", "nl-BE", "cs-CZ", "da-DK", "fi-FI", "fr-FR", "de-DE", "hu-HU", "it-IT", "nl-NL", "no-NO", "pl-PL", "ru-RU", "pt-PT", "es-ES", "sv-SE", "de-CH", "it-CH", "fr-CH", "tr-TR", "en-EU"];
				usi_app.emea_uk = ["fr-BE", "nl-BE", "cs-CZ", "da-DK", "fi-FI", "fr-FR", "de-DE", "hu-HU", "it-IT", "nl-NL", "no-NO", "pl-PL", "ru-RU", "pt-PT", "es-ES", "sv-SE", "de-CH", "it-CH", "fr-CH", "tr-TR", "en-EU", "en-UK"];
				usi_app.anz = ["en-NZ", "en-AU"];
				usi_app.uk = ["en-UK", "en_SE"]; // en_SE is Middle East (new)
				usi_app.apac = ["en-MY", "en-SG", "ja-JP", "ko-KR", "ko_KR", "en_IN", "zh_CN"];
				usi_app.latinamerica = ["es_MX", "es-MX", "pt_BR", "es_AR"]; // Latin America locales are included in Americas

				// Special copy
				usi_app.is_in_promo_time = false;
				usi_app.is_cn_promo_time = false;
				usi_app.lightning_deal = undefined;

				// Pages & cart types
				usi_app.is_product_page = usi_app.url.match("/products/") != null;
				usi_app.is_renewal_cart_page = location.href.indexOf("adskeren") != -1;
				usi_app.is_confirmation_page = usi_app.url.indexOf("order-confirmation") != -1;
				usi_app.efulfilment = document.getElementsByClassName("dr_legalResellerStatement")[0] != null && document.getElementsByClassName("dr_legalResellerStatement")[0].textContent.toLowerCase().indexOf("efulfilment") != -1;
				usi_app.guac_cart = usi_app.url.indexOf("checkout.autodesk.com/") != -1 || usi_app.url.indexOf("commerce.autodesk.com/") != -1 || usi_app.url.indexOf("commerce-stg.autodesk.com/") != -1 || usi_app.url.indexOf("checkout-pt.autodesk") != -1;
				usi_app.dr_cart = usi_app.url.indexOf("action=displaypage") != -1 && usi_app.url.indexOf("thankyoupage") == -1;
				usi_app.dr_cart_available = document.getElementsByClassName('product-row').length > 0;
				usi_app.is_checkout_page = usi_app.url.indexOf("checkout.autodesk") != -1 || usi_app.url.indexOf("commerce.autodesk") != -1 || usi_app.url.indexOf("store.autodesk") != -1 || usi_app.url.indexOf("checkout-pt.autodesk") != -1;
				usi_app.is_first_checkout_page = typeof window['utag'] != 'undefined' && typeof window['utag']['data'] != 'undefined' && typeof window['utag']['data']['page_name'] != 'undefined' && window['utag']['data']['page_name'].indexOf('cart details') != -1;

				if (document.referrer.indexOf("autodesk.com") == -1) {
					if ((/cjevent/i).test(location.href) || (/cfclick/i).test(location.href)) {
						usi_cookies.set("usi_aff_suppress", "1", usi_cookies.expire_time.two_weeks, true);
					}
				}

				// Settings
				usi_app.locale = usi_app.get_locale();
				usi_app.set_mk_vars();

				// Collect product page data
				if (usi_app.is_product_page) {
					usi_app.product_page_data = usi_app.scrape_product_page();
					if (usi_app.product_page_data.name && usi_app.product_page_data.pid && usi_app.product_page_data.extra) {
						usi_commons.log('[ main ] product_page_data:', usi_app.product_page_data);
						usi_commons.send_prod_rec(usi_app.recommendation_site_product, usi_app.product_page_data, (usi_app.locale));
					}
				}

				// Suppress other solutions on renewal page
				if (usi_app.is_renewal_cart_page) {
					usi_app.init_renewal_cart();
					return;
				}

				// Look for locale prompt modal
				if (usi_app.is_checkout_page) usi_app.look_for_locale_modal();

				// Record last plc and term shown in url
				if (usi_commons.gup('plc')) {
					usi_commons.log('[ main ] PCL found in url:', usi_commons.gup('plc'));
					usi_cookies.set('usi_last_plc', usi_commons.gup('plc'), usi_cookies.expire_time.week);
				}
				if (usi_commons.gup('term')) {
					usi_commons.log('[ main ] Term found in url:', usi_commons.gup('term'));
					usi_cookies.set('usi_last_term', usi_commons.gup('term'), usi_cookies.expire_time.week);
				}

				// Scrape carts
				usi_app.rescrape_cart();

				// Idle modal suppression
				usi_app.close_on_idle_modal();

				// Save products
				if (usi_app.products && usi_app.products.length == 0 && usi_cookies.value_exists("usi_app_products")) {
					usi_app.products = usi_cookies.get_json("usi_app_products");
				} else if (usi_app.products && usi_app.products.length > 0) {
					usi_cookies.set_json("usi_app_products", usi_app.products, usi_cookies.expire_time.day);
				}
				usi_app.save_sale_notes();

				// Check suppressions
				usi_app.check_url_suppressions();
				if (usi_cookies.value_exists("usi_suppress")) {
					usi_commons.log("[ main ] Suppression cookie exists");
					return;
				}

				if(usi_commons.gup("plc") == "FLEXACCESS" || location.href.indexOf("benefits/flex") > -1){
					usi_commons.log("[USI] Suppressing on flex pdp");
					return;
				}

				// Rebuild carts
				if (usi_app.should_rebuild) {
					if (usi_app.dr_cart) {
						setTimeout(usi_app.rebuild_dr_cart, 1500);
					} else if (usi_app.guac_cart) {
						setTimeout(usi_app.rebuild_guac_cart, 1500);
					}
					return;
				}

				// Apply event listener on category pages
				if (location.href.indexOf('/products') !== -1 && !usi_app.events_bound) {
					usi_app.apply_event_listener_recheck_cart('.wp-product-card-box a.wp-add-to-cart', 'click');
				}

				// Load campaigns
				usi_app.load();
			} catch (err) {
				usi_commons.report_error(err);
			}
		};

		usi_app.scrape_product_page = function () {};

		usi_app.update_plc_map = function (plc, ids) {};

		usi_app.apply_event_listener_recheck_cart = function (target, action) {};

		usi_app.rescrape_cart = function () {
			try {
				usi_commons.log("[USI] rescrape_cart()");
				if (!usi_app.is_confirmation_page) {
					if (usi_app.guac_cart) {
						usi_app.find_cart_reference();
						usi_app.products = usi_app.set_rescrape(usi_app.scrape_guac_cart, true);
					} else if (usi_app.dr_cart && usi_app.dr_cart_available) {
						usi_app.products = usi_app.set_rescrape(usi_app.scrape_dr_cart, true);
						usi_app.upsells_dr();
					}
					usi_app.extract_plcs();
				}
			} catch (err) {
				usi_commons.report_error(err);
			}
		};

		usi_app.extract_plcs = function () {
			try {
				if (usi_app.products && usi_app.products.length > 0) {
					var plc_map = usi_cookies.get_json('usi_plc_map') || {};
					usi_app.plcs_in_cart = [];
					usi_app.products.forEach(function (prod) {});
				}
				usi_commons.log('[ extract_plcs ] products:', usi_app.products);
				usi_commons.log('[ extract_plcs ] plcs_in_cart:', usi_app.plcs_in_cart);
			} catch (err) {
				usi_commons.report_error(err);
			}
		};

		usi_app.url_check = function(url_list) {
			try {
				var bool = false;
				var origin = location.href.replace(location.search, "");
				url_list.forEach(function(url) {
					if (url.indexOf("?") != -1) {
						var params = url.split("?")[1];
						var main = url.split("?")[0];
					}
					if (origin == url) bool = true;
					if (params != null && main != null && location.href.indexOf(params) != -1 && location.href.indexOf(main) != -1) bool = true;
				});

				return bool;
			} catch(err) {
				usi_commons.report_error(err);
			}
		};

		usi_app.load = function () {
			try {
				// Clean up previous solutions
				if (typeof usi_js !== 'undefined' && typeof usi_js.cleanup === 'function') {
					usi_js.cleanup();
				}

				if (typeof usi_app.deal_days_matrix[usi_app.locale] != "undefined" && usi_app.url_check(usi_app.deal_days_matrix[usi_app.locale].eligible_pages) && usi_date.is_between('2023-07-05T00:00', '2023-07-09T23:59:59')) {
					// Inboxed Incentive | Pre-Deal Days
					var key = usi_commons.device + "_";
					usi_commons.load_view("E5VS26zEmcMCPb2MIPvVCTg", "47557", (key += usi_app.locale));
				} else if (typeof usi_app.deal_days_real_matrix[usi_app.locale] != "undefined" && usi_app.url_check(usi_app.deal_days_real_matrix[usi_app.locale].eligible_pages) && usi_date.is_between('2023-07-10T00:01', '2023-07-12T23:59:59')) {
					// Inboxed Incentive | Deal Days Promo
					var key = usi_commons.device + "_";
					usi_commons.load_view("627fL1tJraFIFgBx0VkFvFR", "47601", (key += usi_app.locale));
				}

				if (usi_app.is_enabled && (/\/fusion-360\/overview/i).test(location.href) && (usi_app.locale == "en_AU" || usi_app.locale == "ja_JP") && usi_date.is_between('2023-08-09T08:00', '2023-08-31T07:59:59')) {
					// APAC - Survey | Overview Abandon
					usi_commons.load_view("YPLPa388s90W3r2UbIHB2YN", "42084", usi_commons.device + '_' + usi_app.locale);
				}

				// Suppress Fusion products in UK, DE, US
				usi_app.suppressf360 = false;
				var fusion_suppressed_locales = ["en-US", "de-DE", "en-UK"];
				if (fusion_suppressed_locales.indexOf(usi_app.locale) !== -1) {
					if (location.href.indexOf("checkout.autodesk") !== -1) {
						if (usi_app.products.length == 0) {
							usi_commons.log("[ load ] Delaying till all products are in the cart (so we can check for Fusion)");
							return;
						}
						for (var i = 0; i < usi_app.products.length; i++) {
							if (usi_app.products[i].name.toLowerCase().indexOf("fusion") != -1) {
								usi_commons.log("[ load ] Suppression Fusion product in cart");
								usi_app.suppressf360 = true;
							}
						}
					} else if (location.href.indexOf("F360") !== -1 || location.href.indexOf("fusion") !== -1) {
						usi_commons.log("[ load ] Suppression Fusion URL");
						usi_app.suppressf360 = true;
					}
				}

				// Init cart page
				if (usi_app.guac_cart) {
					// 30159, 30149
					usi_app.monitor_for_guac_payment_page();
				} else if (usi_app.is_enabled && usi_app.is_first_checkout_page && ["zh_CN"].indexOf(usi_app.locale) != -1){
					//Surround with this if statement when going live: if(usi_app.is_within_china_business_hours()){
					if (usi_commons.is_mobile) usi_commons.load_view("VaTh5jw8Yqu4cmDkcwerSec", "30157", usi_app.locale + "_phone");
					else usi_commons.load_view("q6S0CfQIIS8p5t9KLFJWU6q", "30147", usi_app.locale + "_phone");
				} else if (usi_app.dr_cart && (usi_app.dr_cart_available || usi_app.efulfilment)) {
					//30153, 30143
					usi_app.monitor_for_dr_payment_page();
				}

				// Init PCs
				if (!usi_app.suppressf360) {
					usi_app.load_email();
				}
			} catch (err) {
				usi_commons.report_error(err);
			}
		};

		usi_app.look_for_locale_modal = function () {};

		usi_app.close_on_idle_modal = function () {
			try {
				var idle_modal = document.getElementById("checkout--liveagent--modal");
				if (idle_modal != null) {
					var observer = new MutationObserver(function () {});
					observer.observe(idle_modal, {attributes: true});
				}
			} catch (err) {
				usi_commons.report_error(err);
			}
		};

		usi_app.check_all_for_suppression = function(prod_array){}

		usi_app.get_upsell_info_dynamic = function (prod, cb) {};

		usi_app.get_json_extra = function (prod, cb) {};

		usi_app.load_product_data = function (options) {};

		usi_app.load_upsell = function (options, prod, monthly) {};

		//used in 43739
		usi_app.campaign_persist_callback = function (element, load_function, sid) {}
		usi_app.campaign_persist = function(element, load_function, sid) {};

		usi_app.remove_bar = function () {};

		usi_app.add_loading_graphic = function (message) {};

		usi_app.remove_loading_graphic = function () {};

		usi_app.link = function (options) {}

		usi_app.place_css = function (css) {};

		usi_app.check_collections_upgrade = function () {};

		// ------------------------------------------------------------------------------------------------
		// ------------------------------------- Upsell Methods (Guac) ------------------------------------
		// ------------------------------------------------------------------------------------------------
		usi_app.upsells_guac = function () {};

		usi_app.remove_item = function (pid, hide_loading) {};

		usi_app.link_switch_item = function (options) {};

		usi_app.check_for_empty_cart = function (cb) {};

		usi_app.switch_items_guac = function (pid_from, pid_to) {};

		usi_app.switch_items_guac_monthly = function (pid_from, pid_to) {};

		usi_app.add_prod_guac = function () {};

		usi_app.check_cloud_upsells = function () {};

		usi_app.process_cloud_upsells = function () {};

		usi_app.load_cloud_upsell = function () {};

		usi_app.add_cloud_upsell_item = function () {};

		usi_app.apply_bundle_guac = function (url, key, pid, sid) {};

		usi_app.load_js = function(js_url) {}

		// ------------------------------------------------------------------------------------------------
		// -------------------------------------- Upsell Methods (DR) -------------------------------------
		// ------------------------------------------------------------------------------------------------
		usi_app.upsells_dr = function () {};

		usi_app.switch_items_dr = function (pid_from, pid_to, pid_qty, lightning, callback) {};

		usi_app.add_prod_dr = function (callback) {};

		usi_app.upsell_text_setter_monthly = function (options) {};

		usi_app.upsell_text_setter = function () {};

		usi_app.get_mvar = function (id) {};

		usi_app.get_plc = function (id) {};

		usi_app.has_monthly = function () {
			try {
				if (usi_app.products && usi_app.products.length > 0) {
					for (var i = 0; i < usi_app.products.length; i++) {
						var type = usi_app.products[i].type;
						usi_commons.log('[ has_monthly ] type:', type);
						if (type && usi_app.has_monthly_keyword(type)) {
							return true;
						}
					}
				}
				return false;
			} catch (err) {
				usi_commons.report_error(err);
			}
		};

		usi_app.has_monthly_keyword = function (type) {};

		usi_app.load_email = function () {
			try {
				if (usi_cookies.value_exists("usi_suppress_pc")) return;
				if(usi_app.products.filter(function(v){}).length > 0) return;
				var monthly = usi_app.has_monthly();
				usi_commons.log('[ load_email ] monthly:', monthly);

				// GUAC
				if (usi_app.locale == "en-US") {
					if (monthly) {
						usi_commons.load_precapture("w5BJKn3z1WAjYMYgD37VxZ3", "39318");
					} else {
						usi_commons.load_precapture("I4TiwTxZ4ksFu6rBhJFhWus", "38524");
					}
				} else if (usi_app.locale == "en-CA") {
					if (monthly) {
						usi_commons.load_precapture("QmXJ9XyYQwXHXyU94ddjA62", "39320");
					} else {
						usi_commons.load_precapture("GDPAK9DgSAis76ZbbzoIqJ6", "38526");
					}
				} else if (usi_app.locale == "fr-CA") {
					if (monthly) {
						usi_commons.load_precapture("JAbZBmcypLZ8gd6VF3Zl0up", "39322");
					} else {
						usi_commons.load_precapture("78qQ7iKExSByA4OHUR5Z5Pp", "38528");
					}
				} else if (usi_app.locale == "en-EU") {
					usi_commons.load_precapture("E8bGUH1VkPoAc7TFhMNE5N9", "38590");
				} else if (usi_app.locale == "en-UK") {
					usi_commons.load_precapture("rlEHcpBCoglucZnPcGngjlt", "38482");
				} else if (usi_app.locale == "fr-FR") {
					usi_commons.load_precapture("3ghEu26zH6mthi935Wdi4iu", "38588");
				} else if (usi_app.locale == "de-DE") {
					usi_commons.load_precapture("G7C7Np8JTwqrOJqB3u6vMdI", "38586");
				} else if (usi_app.locale == "it-IT") {
					usi_commons.load_precapture("NGP4vhqQbinMNWPWRpSY4pt", "38550");
				} else if (usi_app.locale == "es-ES") {
					usi_commons.load_precapture("VQZjzBCKzDoujyMWQWkBGpY", "38580");
				} else if (usi_app.locale == "nl-NL") {
					usi_commons.load_precapture("jhpcoRkCasRMzEvAAVwpomP", "38572");
				} else if (usi_app.locale == "pt-PT") {
					usi_commons.load_precapture("MFsFYGUcGPtJgof85lyyLAw", "38568");
				} else if (usi_app.locale == "fi-FI") {
					usi_commons.load_precapture("YrxTN5FIsNSgchu8PVPXjtt", "38574");
				} else if (usi_app.locale == "hu-HU") {
					usi_commons.load_precapture("6US3hR66j0efmcg2ZZGhUGx", "38570");
				} else if (usi_app.locale == "fr-BE") {
					usi_commons.load_precapture("7IbMBiaKbFzTEcRf9cOVqVD", "38556");
				} else if (usi_app.locale == "nl-BE") {
					usi_commons.load_precapture("h8ykCZ9XXox2HsHzgAVFjfH", "38554");
				} else if (usi_app.locale == "en-NZ") {
					usi_commons.load_precapture("xPvEHH139qNyARgocRfHFzH", "38522");
				} else if (usi_app.locale == "de-CH") {
					usi_commons.load_precapture("i5UtZoMZKocY9h1RxtBrhgt", "38552");
				} else if (usi_app.locale == "it-CH") {
					usi_commons.load_precapture("OT1a0eifYz6ze3qrC9TL1jZ", "38584");
				} else if (usi_app.locale == "fr-CH") {
					usi_commons.load_precapture("6Mpf78iyv2CJKzslySC7MFQ", "38548");
				} else if (usi_app.locale == "pl-PL") {
					usi_commons.load_precapture("TUmmg9dJVCY0SwS3ICxwecL", "38564");
				} else if (usi_app.locale == "no-NO") {
					usi_commons.load_precapture("BpGjjCDRWLa4QGYO3W4F5X3", "38558");
				} else if (usi_app.locale == "ru-RU") {
					usi_commons.load_precapture("nqGNEvnQQvqYqyWAa2brElY", "38578");
				} else if (usi_app.locale == "tr-TR") {
					usi_commons.load_precapture("oJanosyxvzBtqz0yJw7NHkr", "38576");
				} else if (usi_app.locale == "sv-SE") {
					usi_commons.load_precapture("j2NFPwe6nLX4mHwOE1Q5m0O", "38566");
				} else if (usi_app.locale == "cs-CZ") {
					usi_commons.load_precapture("iwnexxOIiyl0c4wPiG1Fr7t", "38560");
				} else if (usi_app.locale == "da-DK") {
					usi_commons.load_precapture("db6nc8pRzzmUR30bNHos658", "38562");
				} else if (usi_app.locale == "en-AU") {
					usi_commons.load_precapture("dLwDplwhWR2X6pb9k1sKsAI", "38520");
				} else if (usi_app.locale == "ja-JP") {
					var payment_select = document.querySelector("#paymentOptionSelect");
					if (payment_select != null) {
						usi_commons.load_precapture("WMM0bXqSf4pBMsc9YW0gP5S", "38542", function(){});
					}
				} else if (usi_app.locale == "es-MX") {
					if (monthly) {
						usi_commons.load_precapture("9NdDObTJlVXeVq2j6aDzYvI", "39324");
					} else {
						usi_commons.load_precapture("u1fiev1Gxper6YDsNGmwNrs", "38530");
					}
				} else if (usi_app.locale == "en-MY") {
					usi_commons.load_precapture("KGyo2AS5IlePToEUsYnMTvy", "38538");
				} else if (usi_app.locale == "en-SG") {
					usi_commons.load_precapture("HkBJlsPa3TdpMg2VMpI6MbN", "38540");
				}
				// DR
				 else if (usi_app.locale == "en_IN") {
					usi_commons.load_precapture("u1fiev1Gxper6YDsNGmwNrs", "38536");
				} else if (usi_app.locale == "ko_KR") {
					if (!usi_cookies.value_exists('usi_suppress_kr')) usi_commons.load_precapture("igQ8Ek3Ky7bByFKWH8I9HaC", "38544");
				} else if (usi_app.locale == "pt_BR") {
					if (monthly) {
						usi_commons.load_precapture("KvB3lUrhyHORkR9yImW63Vw", "39326");
					} else {
						usi_commons.load_precapture("II7jbtjsGoRpgsVwTUJlOq9", "38532");
					}
				} else if (usi_app.locale == "zh_CN") {
					usi_commons.load_precapture("3b6ZU2VJ1aTgy8ja4pBwcdv", "38546");
				} else if (usi_app.locale == "es_AR") {
					if (monthly) {
						usi_commons.load_precapture("FqVtg7vTCDFpLEPk9k0zlP2", "39328");
					} else {
						usi_commons.load_precapture("Vm1ZH21W8EvgYR531jbS7Qo", "38534");
					}
				} else if (usi_app.locale == "en_SE") {
					usi_commons.load_precapture("md2BNUG8WSbvaiC6BvGyfmD", "38484");
				}
			} catch (err) {
				usi_commons.report_error(err);
			}
		};

		usi_app.monitor_for_dr_payment_page = function () {};

		usi_app.perform_actions_for_dr_payment_page = function (skip_survey) {};

		usi_app.get_locale_redirect_key = function () {};

		usi_app.monitor_for_guac_payment_page = function () {};

		usi_app.perform_actions_for_guac_payment_page = function () {};

		usi_app.guac_delay_load = function (skip_survey) {};

		//used in campaign 32829
		usi_app.get_promo_text = function () {};

		//used in campaign 30141 & 32829
		usi_app.cart_has_promo = function () {};

		usi_app.set_mk_vars = function () {
			if (usi_commons.gup("usi_var002") != "") {
				try {
					window['analytics']['callback']['setExternalCampaign'](usi_commons.gup("usi_var002"));
				} catch (err) {
					usi_commons.report_error(err);
				}
			}
		};

		usi_app.rebuild_dr_cart = function () {};

		usi_app.rebuild_guac_cart = function () {};

		usi_app.get_locale = function () {
			try {
				var temp_locale = "";
				if (document.getElementById("cartLink") != null) {
					var locale = document.getElementById("cartLink").href;
					if (locale.indexOf("commerce") != -1 || locale.indexOf("checkout") != -1) {
						locale = locale.substring(locale.lastIndexOf("/") + 1, locale.indexOf("?"));
					} else {
						locale = locale.substring(0, locale.indexOf("/buy"));
						locale = locale.substring(locale.lastIndexOf("/") + 1);
					}
					temp_locale = locale;
				} else if (usi_app.guac_cart) {
					return utag_data.locale;
				} else if (sessionStorage.getItem("locale") != null) {
					var usi_locale = sessionStorage.getItem("locale");
					var usi_language = sessionStorage.getItem("language");
					if (usi_locale == "en-CA" || (usi_locale == "undefined" && sessionStorage.getItem("currency") == "CAD")) {
						usi_locale = "en-CA";
					} else if (usi_locale == "EU" && ["pt-PT", "hu-HU", "nl-NL", "fi-FI"].indexOf(usi_language) != -1) {
						usi_locale = usi_language.split("-")[1];
					}
					if (usi_locale == "NAMER") usi_locale = "en-US";
					else if (["IT", "ES", "FR", "DE"].indexOf(usi_locale) != -1) usi_locale = usi_locale.toLowerCase() + "-" + usi_locale;
					return usi_locale;
				} else if (window['utag_data'] && window['utag_data']['locale']) {
					temp_locale = window['utag_data']['locale'];
				} else if (usi_commons.gup("Locale") != "") {
					temp_locale = usi_commons.gup("Locale");
				} else if (window['locale']) {
					temp_locale = window['locale'];
				} else if (location.href.indexOf('https://www.autodesk.ae/') !== -1) {
					temp_locale = "en_SE";
				} else if (location.href.indexOf('https://www.autodesk.co.kr/') !== -1) {
					temp_locale = "ko_KR";
				} else if (location.href.indexOf('https://www.autodesk.co.jp/') !== -1) {
					return "ja-JP";
				}else if (location.href.indexOf('https://www.autodesk.com.sg/') !== -1) {
					return "en-SG";
				}
				if (temp_locale == "es-LATAM") {
					temp_locale = "es_AR";
				} else if (temp_locale == "en-MENA" || temp_locale == "en_MENA" || temp_locale == "en_AE") {
					temp_locale = "en_SE";
				}

				if (temp_locale.indexOf("-") != -1 && (temp_locale != "en-MY" && temp_locale != "tr-TR" && temp_locale != "en-SG" && temp_locale != "es-MX")) {
					temp_locale = temp_locale.replace("-", "_");
				}

				return temp_locale;
			} catch (err) {
				usi_commons.report_error(err);
			}
			return "";
		};

		usi_app.find_cart_reference = function () {};

		usi_app.set_rescrape = function (func, first) {};

		usi_app.scrape_dr_cart = function () {};

		usi_app.scrape_guac_cart = function () {};

		usi_app.save_sale_notes = function () {
			try {
				if (usi_app.products == undefined) return;
				var usi_sale_notes = usi_app.products.map(function (p) {}).join(",");
				if (usi_sale_notes == "") return;
				usi_cookies.set("usi_sale_notes", usi_sale_notes, usi_cookies.expire_time.month, true);
			} catch (err) {
				usi_commons.report_error(err);
			}
		};

		usi_app.suppress = function () {};

		usi_app.check_url_suppressions = function () {
			try {
				var pidNumbers = [
					'8893445', '8890613', '8880927', '8842542', '8886404', '8860130', '8880856', '8861616',
					'8861693', '8882190', '8863947', '8882999', '8749940', '8863381', '8866677', '8866630',
					'8860033', '8860104', '8846724', '8442273', '8475898', '8817986', '8846242', '8848999',
					'8855374', '8858119', '8858221', '8859430', '8859541', '7803497', '8142680', '8341671',
					'8343167', '8343485', '8350241', '8351753', '8354768', '8355758', '8358074', '8365102',
					'8376097', '8378891', '8753226', '8753338', '8755861', '8769452', '8810802', '8842002', '8843095'
				];
				var idNumbers = [
					'49507', '50107', '50183', '50185', '50181', '49421'
				];
				var aid_suppress = idNumbers.filter(function (id) {
					return location.href.toLowerCase().indexOf('aid=' + id) !== -1;
				}).length > 0;
				var pid_suppress = pidNumbers.filter(function (id) {
					return location.href.toLowerCase().indexOf('pid=' + id) !== -1;
				}).length > 0;
				if (aid_suppress || pid_suppress) {
					usi_app.suppress();
				}
			} catch (err) {
				usi_commons.report_error(err);
			}
		};

		usi_app.init_renewal_cart = function () {};

		usi_app.check_for_not_review_page = function (cb) {};

		usi_app.scrape_renewal_cart_items = function () {};

		usi_app.is_payment_page = function () {};

		
		// noinspection JSUnusedGlobalSymbols
		var usi_custom_monitor = {
			get_locale: function () {},
			send_data: function (value, name) {},
			send_utf8: function (value, name) {},
			send_cart_type: function () {},
			send_products: function () {},
			send_locale_data: function (info) {},
			show_opt_in: function (info) {},
			init: function () {}
		};

		//--------------------------------------
		// functions for survey campaigns 30989
		// ------------------------------------
		usi_app.question_id = 1;
		usi_app.next_question = function () {};

		usi_app.print_multiple_choice = function () {};

		usi_app.print_rank_choice = function () {};

		usi_app.rank_blur = function(direction,i){}

		usi_app.end_survey = function () {};

		usi_app.survey_post = function(data) {};

		//---------------------------------------
		// end of functions for survey campaigns
		// -------------------------------------

		usi_app.encode_unicode = function (str) {};

		/**
		 * Remove all items from the user's cart, execute callback upon completion
		 * @param cb
		 */
		usi_app.clear_cart = function (cb) {};
		usi_app.monitor_for_aff_pixels = function () {
			try {
				var cj1 = "";
				try {
					var usi_imgs = document.getElementsByTagName("img");
					for (var i = 0; i < usi_imgs.length; i++) {
						if (usi_imgs[i].src.indexOf("emjcd.com") != -1) {
							cj1 = usi_imgs[i].src;
						}
					}
				} catch (err) {
					usi_commons.report_error(err);
				}
				var cfjump = "";
				try {
					var usi_scripts = document.getElementsByTagName("script");
					for (var i = 0; i < usi_scripts.length; i++) {
						if (usi_scripts[i].src.indexOf("https://cfjump.autodesk.com/track") == 0) {
							cfjump = usi_scripts[i].src;
						}
					}
				} catch (err) {
					usi_commons.report_error(err);
				}
				if (cj1 != "" || cfjump != "") {
					if (cj1 != "") {
						usi_commons.load_script("https://www.upsellit.com/launch/blank.jsp?autodesk_cj=" + encodeURIComponent(cj1) + "&url=" + encodeURIComponent(location.href));
					} else {
						usi_commons.load_script("https://www.upsellit.com/launch/blank.jsp?cfjump=" + encodeURIComponent(cfjump) + "&url=" + encodeURIComponent(location.href));
					}
					usi_commons.load_script("https://www.upsellit.com/active/autodesk_new_pixel.jsp");
				} else {
					setTimeout(usi_app.monitor_for_aff_pixels, 2000);
				}
			} catch (err) {
				usi_commons.report_error(err);
			}
		};
		usi_app.is_within_china_business_hours = function (){};
		usi_app.monitor_for_aff_pixels();

		usi_app.session_data_callback = function () {
			usi_app.country = usi_app.session_data.country;
			usi_app.main();
		};

		usi_app.monitor_for_analytics = function() {
			try {
				if (typeof(usi_app.last_url) === "undefined" || usi_app.last_url != location.href) {
					usi_app.last_url = location.href;
					usi_analytics.send_page_hit("VIEW", "3614");
				}
				setTimeout(usi_app.monitor_for_analytics, 2000);
			} catch(err) {
				usi_commons.report_error(err);
			}
		};
		usi_app.monitor_for_analytics();

		usi_dom.ready(function () {
			try {
				setTimeout(usi_commons.load_session_data, 2000);
			} catch (err) {
				usi_commons.report_error(err);
			}
		});

	} catch (err) {
		usi_commons.report_error(err);
	}
}
