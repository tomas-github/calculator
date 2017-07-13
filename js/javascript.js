var display = document.getElementById("display"); 
var buttons = document.getElementsByTagName('button'); 


function addButtons() {
	for (var i = 0; i < buttons.length; i++){
	
	buttons[i].addEventListener("click", function() {
		var val = this.value;
		display.innerHTML += val;

		if (display.innerHTML.length > 9) {
			display.innerHTML = 'Error: too many digits';
			setTimeout(func, 1500);
				function func() {
    		display.innerHTML = '';
			}
			
		}
	});	
}
}

addButtons();

function displayOn(){
	display.innerHTML = "";
	display.style.backgroundColor = "#42f4c5";
	
}

function evaluate() {
	x = display.innerHTML;
	y = eval(x);
	y.toPrecision(8);
	display.innerHTML = y;
}

function sqroot() {
	x = display.innerHTML;
	y = eval(x);
	y.toPrecision(7);
	display.innerHTML = Math.sqrt(y);

}

var on = document.getElementById("on");

on.addEventListener("click", displayOn);
	
var del = document.getElementById("del"); //clear display

del.addEventListener("click", function() {
		display.innerHTML = "";
}); 

var off = document.getElementById("off");

off.addEventListener("click", function() {
	display.innerHTML = "";
	display.style.backgroundColor = "black";
}); 

var answer = document.getElementById("=");

answer.addEventListener("click", evaluate);
	
var sqrt = document.getElementById("sqrt");

sqrt.addEventListener("click", sqroot);