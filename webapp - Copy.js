// JavaScript Document
//global variables
var armor = 0:
var metal = 0;
var wires = 0;
var plasma = 0;
var minerals = 0;
var water = 0;
var cc = 0;

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
var rnd = Math.ceil(Math.random() * 6);
	switch(rnd) {
		case 1: // metal
			metal+=5;
			document.getElementById("metal").value = metal;			
			break;
		case 2: // wires
			wires+=3;
			document.getElementById("wires").value = wires;			
			break;
		case 3: // plasma
			plasma+=1;
			document.getElementById("plasma").value = plasma;
			break;
		case 4: // minerals
			minerals+=2;
			document.getElementById("minerals").value = minerals;			
			break;
		case 5: // water
			water+=5;
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
		case "engine":
		case "space":
	}
}

function cooldown(time, button) {
	//http://stackoverflow.com/questions/36594962/using-settimeout-to-add-cooldown-time-to-a-button
	
}

function clearStartPage(duration) {
	switch duration 
	document.body.innerHTML = '' ;
	)
	
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
}