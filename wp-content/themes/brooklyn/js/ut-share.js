(function(a){a(document).ready(function(){a(document).on("click",".ut-share-link",function(b){switch(a(this).data("social")){case "utsharetwitter":window.open("http://twitter.com/intent/tweet?text="+a(".page-title").text()+" "+window.location,"Twitter","width=650,height=350");break;case "utsharefacebook":window.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(location.href),"facebook","width=650,height=350");break;case "utsharegoogle":window.open("https://plus.google.com/share?url="+ encodeURIComponent(location.href),"googleWindow","width=500,height=500");break;case "utsharelinkedin":window.open("http://www.linkedin.com/shareArticle?mini=true&url="+encodeURIComponent(location.href)+"$title="+a(".page-title").text(),"linkedinWindow","width=650,height=450, resizable=1");break;case "utsharepinterest":window.open("http://pinterest.com/pin/create/bookmarklet/?media="+a(".entry-content img").first().attr("src")+"&description="+jQuery(".page-title").text()+" "+encodeURIComponent(location.href), "pinterestWindow","width=750,height=430, resizable=1");break;case "utsharexing":window.open("https://www.xing-share.com/app/user?op=share;sc_p=xing-share;url="+encodeURIComponent(location.href),"deliciousWindow","width=550,height=550, resizable=1")}b.preventDefault()})})})(jQuery);