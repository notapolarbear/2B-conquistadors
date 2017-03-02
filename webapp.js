// JavaScript Document
//global variables
var metal = 0;
var wires = 0;
var food = 20;
var minerals = 0;
var water = 10;
var cc = 0;
var o2 = 1;
var drill = 0;
var well = 0;
var farm = 0;
var bp = 0;

function move(room) {
	switch(room) {
		case "galley":
			document.getElementById("spaceship").setAttribute("src", "images/galley.jpeg");
			break;
		case "cockpit":
			document.getElementById("spaceship").setAttribute("src", "images/cockpit.jpg");
			break;
		case "engine":
			document.getElementById("spaceship").setAttribute("src", "images/Engine_Room.png");
			break;
		case "space":
			document.getElementById("spaceship").setAttribute("src", "images/Dolphin.jpg");
			break;
	}
}

	//add clicker for resource
function scavenge() {
var rnd = Math.ceil(Math.random() * 7);
	switch(rnd) {
		case 1: // metal
			metal+=5;
			document.getElementById("metal").value = metal;			
			break;
		case 2: // wires
			wires+=3;
			document.getElementById("wires").value = wires;			
			break;
		case 3: // food
			food+=1;
			document.getElementById("food").value = food;
			break;
		case 4: // minerals
			minerals+=2;
			document.getElementById("minerals").value = minerals;			
			break;
		case 5: // water
			water+=3;
			document.getElementById("water").value = water;			
			break;
			case 6: // cc
			cc+=1;
			document.getElementById("cc").value = cc;			
			break;
	
	}
	
}

function move(loc) {
	switch(loc) {
		case "cockpit":
			// change image for cockpit
			document.getElementById("spaceship").setAttribute("src", "images/cockpit.jpg");
			// change image map for cockpit
			document.getElementById("spaceship").setAttribute("usemap", "#CockpitMap");
			break;
		case "galley":
			document.getElementById("spaceship").setAttribute("src","images/galley.jpeg");
			break;
		case "engine":
		case "space":
	}
}

function disable() {
	if(minerals >=20 ) {
		document.getElementById("gas").disabled = false;
	else {
		document.getElementById("gas").disabled = true;
}
/*function cooldown(time, button) {
	//http://stackoverflow.com/questions/36594962/using-settimeout-to-add-cooldown-time-to-a-button
	
}

function shop(sel) {
	switch(sel) {
		case "hovercraft":
			// check if you have enough resources
			if( metal > 10 ) {
				// purchase
				exoskeleton = true;
				// display image
				// display: none;
				document.getElementById("exoskeleton").style.display = "inline";
			}
			break;
		case "armor":
			break;
	}
} */