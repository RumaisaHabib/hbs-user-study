(function(){var e=window,f="push",k="length",l="prototype",q=function(a){if(a.get&&a.set){this.clear();var d=a.get("buildHitTask");a.set("buildHitTask",n(this,d));a.set("_rlt",p(this,a.get("_rlt")))}},r={action:"pa",promoAction:"promoa",id:"ti",affiliation:"ta",revenue:"tr",tax:"tt",shipping:"ts",coupon:"tcc",step:"cos",label:"col",option:"col",options:"col",list:"pal",listSource:"pls"},t={id:"id",name:"nm",brand:"br",category:"ca",variant:"va",position:"ps",price:"pr",quantity:"qt",coupon:"cc","dimension(\\d+)":"cd",
"metric(\\d+)":"cm"},u={id:"id",name:"nm",creative:"cr",position:"ps"},v=function(a,d){},w="detail checkout checkout_option click add remove purchase refund".split(" ");q[l].clear=function(){this.b=void 0;this.f=[];this.a=[];this.g=[];this.d=void 0};q[l].h=function(a,d){};q[l].j=function(a){};
q[l].i=function(a){};q[l].c=function(a){};var y=function(a,d,b){};
q[l].data=function(a){};
var n=function(a,d){return function(b){var c,g,h;a.b&&z(r,a.b,b,"&");for(c=0;c<a.f[k];c++)g="&pr"+(c+1),z(t,a.f[c],b,g);for(c=0;c<a.a[k];c++){h=a.a[c];g="&il"+(c+1);h.name&&b.set(g+"nm",h.name,!0);h.source&&b.set(g+"ls",h.source,!0);for(var m=0;m<h.e[k];m++)z(t,h.e[m],b,g+"pi"+(m+1))}for(c=0;c<a.g[k];c++)g="&promo"+(c+1),z(u,a.g[c],b,g);a.d&&b.set("&cu",a.d,!0);a.clear();return d(b)}},p=function(a,d){return function(b){var c=a.b&&a.b.action;if("purchase"!=c&&"refund"!=c)return d(b)}},x=function(a){},z=function(a,d,b,c){};
(function(){e.gaplugins=e.gaplugins||{};e.gaplugins.EC=q;q[l].setAction=q[l].h;q[l].addProduct=q[l].j;q[l].addImpression=q[l].i;q[l].addPromo=q[l].c;q[l].clear=q[l].clear;q[l].data=q[l].data;var a=e.GoogleAnalyticsObject||"ga";e[a]=e[a]||function(){};e[a]("provide","ec",q)})();})();
