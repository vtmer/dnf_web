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



