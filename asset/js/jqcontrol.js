$(function(){
	$(".slide0").hover(
		function(){$(".search0").css("display","block")},
		function(){$(".search0").css("display","none")}
		) 	
})
$(function(){
	$(".slide1").hover(
		function(){$(".search1").css("display","block")},
		function(){$(".search1").css("display","none")}
		)
})
$(function(){
	$(".slide2").hover(
		function(){$(".search2").css("display","block")},
		function(){$(".search2").css("display","none")}
		)
})
$(function(){
	$(".slide3").hover(
		function(){$(".search3").css("display","block")},
		function(){$(".search3").css("display","none")}
		)
})
$(function(){
	$(".slide4").hover(
		function(){$(".search4").css("display","block")},
		function(){$(".search4").css("display","none")}
		)
})
$(function(){
	$(".slide5").hover(
		function(){$(".search5").css("display","block")},
		function(){$(".search5").css("display","none")}
		)
})
$(function(){
	$(".slide6").hover(
		function(){$(".search6").css("display","block")},
		function(){$(".search6").css("display","none")}
		)
})
$(function(){
	$(".slide7").hover(
		function(){$(".search7").css("display","block")},
		function(){$(".search7").css("display","none")}
		)
})
$(function(){
	$(".slide8").hover(
		function(){$(".search8").css("display","block")},
		function(){$(".search8").css("display","none")}
		)
})
$(function(){
	$(".slide9").hover(
		function(){$(".search9").css("display","block")},
		function(){$(".search9").css("display","none")}
		)
})
$(function(){
	$(".slide10").hover(
		function(){$(".search10").css("display","block")},
		function(){$(".search10").css("display","none")}
		)
})
$(function(){
	$("#gray").hover(
		function(){$("#gray"),find("span").css("display","block")},
		function(){$("#gray"),find("span").css("display","none")}
		)
})
<!--=================优秀作品部分鼠标移过图片呈现提示层======================-->
$(function(){
	$(".courseline").hover(
		function(){ $(".courseline").animate({opacity:"0.2"},300)},
		function(){ $(".courseline").animate({opacity:"1"},300)}
		);
	$(".blogline").hover(
		function(){ $(".blogline").animate({opacity:"0.2"},300)},
		function(){ $(".blogline").animate({opacity:"1"},300)}
		);
	$(".productline").hover(
		function(){ $(".productline").animate({opacity:"0.5"},300)},
		function(){ $(".productline").animate({opacity:"1"},300)}
		);
	$(".usline").hover(
	function(){ $(".usline").animate({opacity:"0.2"},300)},
	function(){ $(".usline").animate({opacity:"1"},300)}
	);
})
<!--=================首页导航栏鼠标移过字体效果======================-->
$(document).ready(function(){
 $("#person1").hide();
 $(".teammember4",this).hover(function(){$("#person1").slideToggle(800)});
})
$(document).ready(function(){
 $("#person2").hide();
 $(".teammember1",this).hover(function(){$("#person2").slideToggle(800)});
})
$(document).ready(function(){
 $("#person3").hide();
 $(".teammember2",this).hover(function(){$("#person3").slideToggle(800)});
})
$(document).ready(function(){
 $("#person4").hide();
 $(".teammember3",this).hover(function(){$("#person4").slideToggle(800)});
})
$(document).ready(function(){
 $("#person5").hide();
 $(".teammember5",this).hover(function(){$("#person5").slideToggle(800)});
})
$(document).ready(function(){
 $("#person6").hide();
 $(".teammember6",this).hover(function(){$("#person6").slideToggle(800)});
})
$(document).ready(function(){
 $("#person7").hide();
 $(".teammember7",this).hover(function(){$("#person7").slideToggle(800)});
})
$(document).ready(function(){
 $("#person8").hide();
 $(".teammember8",this).hover(function(){$("#person8").slideToggle(800)});
})
$(document).ready(function(){
 $("#person9").hide();
 $(".teammember9",this).hover(function(){$("#person9").slideToggle(800)});
})
$(document).ready(function(){
 $("#person10").hide();
 $(".teammember13",this).hover(function(){$("#person10").slideToggle(800)});
})
$(document).ready(function(){
 $("#person11").hide();
 $(".teammember14",this).hover(function(){$("#person11").slideToggle(800)});
})
$(document).ready(function(){
 $("#person12").hide();
 $(".teammember21",this).hover(function(){$("#person12").slideToggle(800)});
})
<!--=================我们的团队部分，鼠标移过出现层提示======================-->
$(function(){
	var mover=$(".sliders");
	var container=$("slider-container");
	var w=container.width();
	var c=mover.width();
	var handle=$(".widget");
	var dragbar=$(".scrollcontrol");
	var maxlen=parseInt(dragbar.width())-parseInt(handle.outerWidth());
	handle.bind("mousedown",function(e){
		var x=e.pageX;
		var hx=parseInt(handle.css("left"));
		$(document).bind("mousemove",function(e){
			var left=e.pageX-x+hx<8?8:(e.pageX-x+hx>=(maxlen-8)?(maxlen-8):e.pageX-x+hx);
			handle.css({
				left:left
			});
			mover.animate({
				left:-left/maxlen*(c-w)*1.8		
			},{duration:800, queue:false});
			return false;
		});
		$(document).bind("mouseup",function(){
			$(this).unbind("mousemove");
		})
	})
	
	document.oncontextmenu=function(){return false;}
	document.ondragstart=function(){return false;}
	document.onselectstart=function(){return false;}
});
<!--=================优秀作品部分拉条控制图片移动======================-->
$(function(){
	$("#dowebok").fullpage({
		"navigation": true,
		"verticalCentered":false,
		"continuousVertical":true,
		"resize":true,
	});
});
<!--=================彩蛋效果，控制页面的滚动，navigation：是否显示项目导航，verticalCentered：内容是否垂直居中，continuousVertical：是否循环滚动======================-->

