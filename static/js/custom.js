/* 轮播背景图片 */
$(function () {
	$.backstretch([
          "https://cdn.jsdelivr.net/gh/KiLien/Pics/wallhaven/wallhaven-vgwvy5.jpg",
		  "https://cdn.jsdelivr.net/gh/KiLien/Pics/wallhaven/wallhaven-odkykm.jpg",
		  "https://cdn.jsdelivr.net/gh/KiLien/Pics/wallhaven/wallhaven-yjk6ml.jpg"
	], { duration: 60000, fade: 1500 });
});
/* 拉姆蕾姆回到顶部或底部按钮 */
$(function() {
	$("#lamu img").eq(0).click(function() {
		$("html,body").animate({scrollTop:$(document).height()},800);
		return false;
	});
	$("#leimu img").eq(0).click(function() {
		$("html,body").animate({scrollTop:0},800);
		return false;
	});
});
