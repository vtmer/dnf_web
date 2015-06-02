function shake(a){
var items = document.getElementsByClassName(a); 
document.getElementById(a).addEventListener('mousemove', function (evt){ 
var x = evt.clientX; 
var y = evt.clientY; 
//console.log(x); 
var winWidth = window.innerWidth; 
var winHeight = window.innerHeight; 
var halfWidth = winWidth / 2; 
var halfHeight = winHeight / 2; 
var rx = x - halfWidth; 
var ry = halfHeight - y; 
var length = items.length; 
var max = -15; 
for (var i = 0 ; i < length ; i++) { 
var dx = (items[i].getBoundingClientRect().width/max)*(rx / -halfWidth); 
var dy = (items[i].getBoundingClientRect().height/max)*(ry / halfHeight); 
items[i].style['transform'] = items[i].style['-webkit-transform'] = 'translate('+dx+'px,'+dy+'px)'; 
} 
}, false); 
}
<!--=================首页banner随着鼠标移动小范围内移动======================-->
function JumpObj(elem, range, startFunc, endFunc) {
	var curMax = range = range || 6;
   	startFunc = startFunc || function(){};
	endFunc = endFunc || function(){};
	var drct = 0;
	var step = 1;

	init();

	function init() { elem.style.position = 'relative';active() }
	function active() { elem.onmouseover = function(e) {if(!drct)jump()} }
	function deactive() { elem.onmouseover = null }

	function jump() {
		 var t = parseInt(elem.style.top);
		if (!drct) motionStart();
		else {
			var nextTop = t - step * drct;
			if (nextTop >= -curMax && nextTop <= 0) elem.style.top = nextTop + 'px';
			else if(nextTop < -curMax) drct = -1;
		   else {
				var nextMax = curMax / 2;
				if (nextMax < 1) {motionOver();return;}
				curMax = nextMax;
				drct = 1;
			}
		}
		setTimeout(function(){jump()}, 200 / (curMax+3) + drct * 3);
	 }
	function motionStart() {
		startFunc.apply(this);
		elem.style.top='0';
		drct = 1;
	}
	  function motionOver() {
		endFunc.apply(this);
		curMax = range;
		drct = 0;
		elem.style.top = '0';
	}

	this.jump = jump;
	this.active = active;
	this.deactive = deactive;
}
<!--=================首页banner上下晃动======================-->
