// /* 轮播背景图片 */
// $(function () {
// 	$.backstretch([
//           "https://cdn.jsdelivr.net/gh/KiLien/Pics/wallhaven/wallhaven-vgwvy5.jpg",
// 		  "https://cdn.jsdelivr.net/gh/KiLien/Pics/wallhaven/wallhaven-odkykm.jpg",
// 		  "https://cdn.jsdelivr.net/gh/KiLien/Pics/wallhaven/wallhaven-yjk6ml.jpg"
// 	], { duration: 60000, fade: 1500 });
// });
/* 风铃🎐回到顶部或底部按钮 */
$(function() {
	$("#right-wind-chimes .wind-chimes-img").eq(0).click(function() {
		$("html,body").animate({scrollTop:$(document).height()},800);
		return false;
	});
	$("#left-wind-chimes .wind-chimes-img").eq(0).click(function() {
		$("html,body").animate({scrollTop:0},800);
		return false;
	});
});
/* 顶部阅读进度条 */
$(function() {
    $(window).scroll(function(){
      $(".top-scroll-bar").attr("style", "width: " + ($(this).scrollTop() / ($(document).height() - $(this).height()) * 100) + "%; display: block;");
    });
  }); 

/* 评论 */
<script src="https://sdk.jinrishici.com/v2/browser/jinrishici.js" charset="utf-8"></script>
jinrishici.load(function(result) {
	var sentence = document.querySelector(".poem_sentence")
	var info = document.querySelector(".poem_info")
	sentence.innerHTML = result.data.content
	info.innerHTML = '——' + result.data.origin.author
});
