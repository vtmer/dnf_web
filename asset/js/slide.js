$(function(){
	$(".slide0 img").hover(
		function(){$(".search0").css("display","block")},
		function(){$(".search0").css("display","none")}
		) 	
})
$(function(){
	$(".slide1 img").hover(
		function(){$(".search1").css("display","block")},
		function(){$(".search1").css("display","none")}
		)
})
$(function(){
	$(".slide2 img").hover(
		function(){$(".search2").css("display","block")},
		function(){$(".search2").css("display","none")}
		)
})
$(function(){
	$(".slide3 img").hover(
		function(){$(".search3").css("display","block")},
		function(){$(".search3").css("display","none")}
		)
})
$(function(){
	$(".slide4 img").hover(
		function(){$(".search4").css("display","block")},
		function(){$(".search4").css("display","none")}
		)
})
$(function(){
	$(".slide5 img").hover(
		function(){$(".search5").css("display","block")},
		function(){$(".search5").css("display","none")}
		)
})
$(function(){
	$(".slide6 img").hover(
		function(){$(".search6").css("display","block")},
		function(){$(".search6").css("display","none")}
		)
})
$(function(){
	$(".slide7 img").hover(
		function(){$(".search7").css("display","block")},
		function(){$(".search7").css("display","none")}
		)
})
$(function(){
	$(".slide8 img").hover(
		function(){$(".search8").css("display","block")},
		function(){$(".search8").css("display","none")}
		)
})
$(function(){
	$(".slide9 img").hover(
		function(){$(".search9").css("display","block")},
		function(){$(".search9").css("display","none")}
		)
})
$(function(){
	$(".slide10 img").hover(
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
$(function(){
	$("#course").hover(
		function(){ $("#course").animate({opacity:"0.2"},300)},
		function(){ $("#course").animate({opacity:"1"},300)}
		);
	$("#blog").hover(
		function(){ $("#blog").animate({opacity:"0.2"},300)},
		function(){ $("#blog").animate({opacity:"1"},300)}
		);
	$("#product").hover(
		function(){ $("#product").animate({opacity:"0.5"},300)},
		function(){ $("#product").animate({opacity:"1"},300)}
		);
	$("#us").hover(
	function(){ $("#us").animate({opacity:"0.2"},300)},
	function(){ $("#us").animate({opacity:"1"},300)}
	);
})
$(document).ready(function(){
 $("#person1").hide();
 $(".teammember4 a").hover(function(){$("#person1").slideToggle(800)});
})
$(document).ready(function(){
 $("#person2").hide();
 $(".teammember1 a").hover(function(){$("#person2").slideToggle(800)});
})
$(document).ready(function(){
 $("#person3").hide();
 $(".teammember2 a").hover(function(){$("#person3").slideToggle(800)});
})
$(document).ready(function(){
 $("#person4").hide();
 $(".teammember3 a").hover(function(){$("#person4").slideToggle(800)});
})
$(document).ready(function(){
 $("#person5").hide();
 $(".teammember5 a").hover(function(){$("#person5").slideToggle(800)});
})
$(document).ready(function(){
 $("#person6").hide();
 $(".teammember6 a").hover(function(){$("#person6").slideToggle(800)});
})
$(document).ready(function(){
 $("#person7").hide();
 $(".teammember7 a").hover(function(){$("#person7").slideToggle(800)});
})
$(document).ready(function(){
 $("#person8").hide();
 $(".teammember8 a").hover(function(){$("#person8").slideToggle(800)});
})
$(document).ready(function(){
 $("#person9").hide();
 $(".teammember9 a").hover(function(){$("#person9").slideToggle(800)});
})
$(document).ready(function(){
 $("#person10").hide();
 $(".teammember13 a").hover(function(){$("#person10").slideToggle(800)});
})
$(document).ready(function(){
 $("#person11").hide();
 $(".teammember14 a").hover(function(){$("#person11").slideToggle(800)});
})
$(document).ready(function(){
 $("#person12").hide();
 $(".teammember21 a").hover(function(){$("#person12").slideToggle(800)});
})


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

