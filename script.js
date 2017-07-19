var size = {
  	width: window.innerWidth || document.body.clientWidth,
  	height: window.innerHeight || document.body.clientHeight
	}
var field = document.querySelector(".field");
var object = document.querySelector(".object");
field.style.height = size.height-180+"px"
var span = document.querySelector("span")
var randomSize=0;
var min = 100;
var max = 300;
var randCircle=0;
span.innerHTML = "";
var start=0;
var stop=0;
init()



$(".content").on("click",".object", function(event){
	tmp = new Date();
	stop = tmp;
	diff = ((stop-start)/1000)+"s";
	span.innerHTML = diff;
	this.style.display = "none";
	setTimeout(init, randomNumer(0, 1500))
});

function init(){
	tmp = new Date();
	start = tmp;
	object.style.display = "block";
	object.style.background = randomColor();
	randSize();
	randObject()
	randPosition()
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function randSize(){
	randomSize = randomNumer(min, max);
	object.style.height = randomSize+"px";
	object.style.width = randomSize+"px";
}

function randPosition(){
var maxWidth = size.width-randomSize;
var maxHeigth = (size.height-121)-randomSize;
object.style.marginLeft=randomNumer(0, maxWidth)+"px"
object.style.top=randomNumer(0, maxHeigth)+"px"
}

function randObject(){
	randCircle = randomNumer(0,51);
	object.style.borderRadius=randCircle+"%"
}

function randomNumer(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}