
$(document).ready(function(){
 $(".search0").hide();
 $(".slide0",this).hover(function(){$(".search0").stop().slideToggle(600)});
})
$(document).ready(function(){
 $(".search1").hide();
 $(".slide1",this).hover(function(){$(".search1").stop().slideToggle(600)});
})
$(document).ready(function(){
 $(".search2").hide();
 $(".slide2",this).hover(function(){$(".search2").stop().slideToggle(600)});
})
$(document).ready(function(){
 $(".search3").hide();
 $(".slide3",this).hover(function(){$(".search3").stop().slideToggle(600)});
})
$(document).ready(function(){
 $(".search4").hide();
 $(".slide4",this).hover(function(){$(".search4").stop().slideToggle(600)});
})
$(document).ready(function(){
 $(".search5").hide();
 $(".slide5",this).hover(function(){$(".search5").stop().slideToggle(600)});
})
$(document).ready(function(){
 $(".search6").hide();
 $(".slide6",this).hover(function(){$(".search6").stop().slideToggle(600)});
})
$(document).ready(function(){
 $(".search7").hide();
 $(".slide7",this).hover(function(){$(".search7").stop().slideToggle(600)});
})
$(document).ready(function(){
 $(".search8").hide();
 $(".slide8",this).hover(function(){$(".search8").stop().slideToggle(600)});
})
$(document).ready(function(){
 $(".search9").hide();
 $(".slide9",this).hover(function(){$(".search9").stop().slideToggle(600)});
})
$(document).ready(function(){
 $(".search10").hide();
 $(".slide10",this).hover(function(){$(".search10").stop().slideToggle(600)});
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
		function(){ $(".courseline").stop().animate({opacity:"0.5"},300)},
		function(){ $(".courseline").stop().animate({opacity:"1"},300)}
		);
	$(".blogline").hover(
		function(){ $(".blogline").stop().animate({opacity:"0.5"},300)},
		function(){ $(".blogline").stop().animate({opacity:"1"},300)}
		);
	$(".productline").hover(
		function(){ $(".productline").stop().animate({opacity:"0.5"},300)},
		function(){ $(".productline").stop().animate({opacity:"1"},300)}
		);
	$(".usline").hover(
	function(){ $(".usline").stop().animate({opacity:"0.5"},300)},
	function(){ $(".usline").stop().animate({opacity:"1"},300)}
	);
})
<!--=================首页导航栏鼠标移过字体效果======================-->
$(document).ready(function(){
 $("#person1").hide();
 $(".teammember4",this).hover(function(){$("#person1").stop().slideToggle(600)});
})
$(document).ready(function(){
 $("#person2").hide();
 $(".teammember1",this).hover(function(){$("#person2").stop().slideToggle(600)});
})
$(document).ready(function(){
 $("#person3").hide();
 $(".teammember2",this).hover(function(){$("#person3").stop().slideToggle(600)});
})
$(document).ready(function(){
 $("#person4").hide();
 $(".teammember3",this).hover(function(){$("#person4").stop().slideToggle(600)});
})
$(document).ready(function(){
 $("#person5").hide();
 $(".teammember5",this).hover(function(){$("#person5").stop().slideToggle(600)});
})
$(document).ready(function(){
 $("#person6").hide();
 $(".teammember6",this).hover(function(){$("#person6").stop().slideToggle(600)});
})
$(document).ready(function(){
 $("#person7").hide();
 $(".teammember7",this).hover(function(){$("#person7").stop().slideToggle(600)});
})
$(document).ready(function(){
 $("#person8").hide();
 $(".teammember8",this).hover(function(){$("#person8").stop().slideToggle(600)});
})
$(document).ready(function(){
 $("#person9").hide();
 $(".teammember9",this).hover(function(){$("#person9").stop().slideToggle(600)});
})
$(document).ready(function(){
 $("#person10").hide();
 $(".teammember13",this).hover(function(){$("#person10").stop().slideToggle(600)});
})
$(document).ready(function(){
 $("#person11").hide();
 $(".teammember14",this).hover(function(){$("#person11").stop().slideToggle(600)});
})
$(document).ready(function(){
 $("#person12").hide();
 $(".teammember21",this).hover(function(){$("#person12").stop().slideToggle(600)});
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
			var left=e.pageX-x+hx<4?4:(e.pageX-x+hx>=(maxlen-4)?(maxlen-4):e.pageX-x+hx);
			handle.css({
				left:left
			});
			mover.animate({
				left:-left/maxlen*(c-w)*1.8		
			},{duration:0, queue:false});
			return false;
		});
		$(document).bind("mouseup",function(){
			$(this).unbind("mousemove");
		})
	})
	
	document.oncontextmenu=function(){return true;}
	document.ondragstart=function(){return false;}
	document.onselectstart=function(){return false;}
});
<!--=================优秀作品部分鼠标控制图片移动======================-->
$(function(){
	$("#dowebok").fullpage({
		"navigation": true,
		"verticalCentered":false,
		"continuousVertical":false,
		"resize":false,
	});
});
<!--=================彩蛋效果，控制页面的滚动，navigation：是否显示项目导航，verticalCentered：内容是否垂直居中，continuousVertical：是否循环滚动======================-->
$(function(){
	$(document).keydown(function(e){
				if(e==null){
					keycode=event.keyCode;
				}else{
					keycode=e.which;
				}
				var handle=$(".widget");
				var dragbar=$(".scrollcontrol");
				var maxlen=parseInt(dragbar.width())-parseInt(handle.outerWidth());
				var hx=parseInt(handle.css("left"));
				var left=hx<12?12:(hx>=(maxlen-12)?(maxlen-12):hx);
					switch(keycode){
						case 37:    //键盘中左键(←)
	                		$(".widget").css({left:left-8});
	                		break;
	            		case 39:    //键盘中右键(→)
	                		$(".widget").css({left:left+8});
	                		break;
					}
				var hx=parseInt(handle.css("left"));
				var mover=$(".sliders");
				var container=$("slider-container");
				var w=container.width();
				var c=mover.width();
				mover.animate({
				left:-hx/maxlen*(c-w)*1.8		
			    },{duration:0, queue:false});
			})
}
)
<!--=================优秀作品部分键盘控制图片移动======================-->
$(function(){
	$("#scrollcontrol").bind("mousedown",function(e){
				var handle=$(".widget");
				var dragbar=$(".scrollcontrol");
				var maxlen=parseInt(dragbar.width())-parseInt(handle.outerWidth());
				var dx=parseInt(dragbar.css("left"));
				var x=e.offsetX;
				var left=x<4?4:(x>=(maxlen-4)?(maxlen-4):x);
				handle.animate({
				left:left		
			    },{duration:0, queue:false});
				var hx=parseInt(handle.css("left"));
				var mover=$(".sliders");
				var container=$("slider-container");
				var w=container.width();
				var c=mover.width();
				mover.animate({
				left:-hx/maxlen*(c-w)*1.8		
			    },{duration:0, queue:false});
	})
}
)

$(function(){
	 $("#banner img").each(function(k,img){
		new JumpObj(img,10);
		//第一个参数代表元素对象
		//第二个参数代表抖动幅度
	});
});
<!--=================首页banner上下晃动======================-->
