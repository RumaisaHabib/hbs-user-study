$(document).ready(function(){oncopy();var title_artikel=document.querySelector('meta[property="og:title"]').content;var link_artikel=document.querySelector('meta[property="og:url"]').content;var site_artikel=document.querySelector('meta[property="og:site_name"]').content;var share_artikel='<br />Artikel ini telah tayang di <a href="'+site_artikel+'">'+site_artikel+'</a><br />dengan judul "'+title_artikel+'",<br />Klik untuk baca: <a href="'+link_artikel+'">'+link_artikel+"</a>. <br />"+'<br /> Download aplikasi <a href="https://www.okezone.com/">Okezone</a> Portal Berita Online Indonesia , Lengkap Cepat Beritanya:<br />Android: <a href="https://play.google.com/store/apps/details?id=linktone.okezone.android">https://play.google.com/store/apps/details?id=linktone.okezone.android</a><br/>iOS: <a href="https://apps.apple.com/us/app/okezone-com-news/id624468351">https://apps.apple.com/us/app/okezone-com-news/id624468351</a>';});function oncopy(){console.log('Copy RIght');document.oncopy=function(){var title=document.querySelector('meta[property="og:title"]').content;var link=document.querySelector('meta[property="og:url"]').content;var site=document.querySelector('meta[property="og:site_name"]').content;var t=title,e=link;var r,d=document.getElementsByTagName("body")[0],p='<br /><br />Artikel ini telah tayang di <a href="'+site+'">'+site+'</a><br />dengan judul "'+title+'",<br />Klik untuk baca: <a href="'+link+'">'+link+"</a>. <br />"+'<br /> Download aplikasi <a href="https://www.okezone.com/">Okezone</a> Portal Berita Online Indonesia , Lengkap Cepat Beritanya:<br />Android: <a href="https://play.google.com/store/apps/details?id=linktone.okezone.android">https://play.google.com/store/apps/details?id=linktone.okezone.android</a><br/>iOS: <a href="https://apps.apple.com/us/app/okezone-com-news/id624468351">https://apps.apple.com/us/app/okezone-com-news/id624468351</a>',s=document.createElement("div");(s.style.position="absolute"),(s.style.left="-99999px"),d.appendChild(s),(s.innerHTML=p),r.selectAllChildren(s),window.setTimeout(function(){d.removeChild(s);},0);};}