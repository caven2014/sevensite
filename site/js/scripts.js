/*!
 *
 * Angle - Bootstrap Admin App
 *
 * Version: 3.7.5
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 *
 */
!function(e){"use strict";if(void 0===e)throw new Error("This site's JavaScript requires jQuery");var o=e(window),t=e(document),n=e("body");NProgress.start(),e("#header").waitForImages(function(){NProgress.done(),n.addClass("site-loaded")}),window.modeRTL=!1,modeRTL=!!e.localStorage.get("modeRTL"),console.log("Site is in "+(modeRTL?"RTL":"LTR")+" mode.");var a;matchMedia("(min-width: 992px), (max-width: 767px)").matches&&(a=function(){(document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop)>40?e(".navbar-sticky").stop().animate({top:"0"}):e(".navbar-sticky").stop().animate({top:"-80"})}),matchMedia("(min-width: 768px) and (max-width: 991px)").matches&&(a=function(){(document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop)>40?e(".navbar-sticky").stop().animate({top:"0"}):e(".navbar-sticky").stop().animate({top:"-120"})}),t.ready(a),o.scroll(a),e(function(){e(".main-navbar").onePageNav({scrollThreshold:.25,filter:":not(.external)",changeHash:!0,scrollSpeed:750})}),e(function(){if(!e.browser.mobile){var o=e('<div id="video-container"/>').prependTo(n);new e.backgroundVideo(o,{align:"centerXY",width:1280,height:720,path:"video/",filename:"video",types:["webm","mp4"]}).$videoEl.on("loadeddata",function(){e("#header").removeClass("novideo")})}});var s=e("html, body");e(function(){e(".scrollto").on("click.smoothscroll",function(o){o.preventDefault();var t=this.hash;s.stop().animate({scrollTop:e(t).offset().top},1200,"easeInOutExpo",function(){window.location.hash=t})})}),e(function(){var o=e("#navbar-main"),t=e(".navbar-toggle");o.on("click","a",null,function(){t.is(":visible")&&o.collapse("hide")})}),window.wow=new WOW({mobile:!1}).init(),e(function(){e("#feedback-carousel").owlCarousel({rtl:window.modeRTL,responsiveClass:!0,responsive:{0:{items:1,nav:!1}}}),e("#appshots").owlCarousel({rtl:window.modeRTL,margin:10,responsiveClass:!0,responsive:{0:{items:1,nav:!1},500:{items:2,nav:!1},1e3:{items:4,nav:!1,loop:!1}}})}),e(function(){e("#appshots a").nivoLightbox({effect:"fadeScale",theme:"default",keyboardNav:!0})})}(window.jQuery),function(e){"use strict";function o(o){var t="autoloaded-stylesheet",n=e("#"+t).attr("id",t+"-old");return e("head").append(e("<link/>").attr({id:t,rel:"stylesheet",href:o})),n.length&&n.remove(),e("#"+t)}var t=e(".settings");e(".settings-ctrl").on("click",function(){t.toggleClass("show")});var n=e("[data-load-css]");n.on("click",function(t){var a=e(this);n.removeClass("checked"),a.addClass("checked"),a.is("a")&&t.preventDefault();var s=a.data("loadCss");s?o(s)||e.error("Error creating stylesheet link element."):e.error("No stylesheet location defined.")});var a=e("#stylescss"),s=e("#rtlswitch");e(function(){var e=modeRTL?"css/styles-rtl.css":"css/styles.css";a.attr("href",e),s[0].checked=modeRTL}),s.on("change",function(){var o=this.checked;e.localStorage.set("modeRTL",o),window.location.reload()})}(window.jQuery);