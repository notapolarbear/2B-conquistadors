// JavaScript Document
var name = "";
//$(document).ready(function() { document.getElementById("spaceship").addEventListener("click", function()alert("You gained 3 items!"))};
function spaceship(room) {
	switch(room) {
		case "galley":
	
			break;
		case "cockpit":
			alert("this is the cockpit");
			break;
			
		case "engine":
			alert("this is the engine room");
			break;
	}
//story mode
}
function s(part) {
switch(part) {
	case "a":
	name = prompt("On this journey, our hero is stranded in their ship, the S.S. Galaxis. Every story needs a beginning, and every beginning needs a name. What is your name?");
	break;
	
}
}

//name
function n() {
	alert("Your name is " + name)
}

	//add intervals
	var metal;

function myStartFunction() {
    metal = setInterval(function(){ alertFunc("First parameter", "Second parameter"); }, 2000);
}

function alertFunc(param1, param2) {
    document.getElementById("demo").innerHTML += "Hello ";

    document.getElementById("demo2").innerHTML = "Parameters passed to alertFunc(): <br>" 
    + param1 + "<br>" + param2 + "<br>";
}

