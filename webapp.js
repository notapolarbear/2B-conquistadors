// JavaScript Document
//global variables
//rescources
var metal = 0;
var wires = 0;
var food = 20;
var minerals = 0;
var water = 10;
var cc = 0;
var o2 = 5;
//tools
var gas =0:
var drill = 0;
var well = 0;
var farm = 0;
var bp = 0;


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
            
        case 7: // o2
            o2+=1;
            document.getElementById("o2").value = o2;            
            break;
    
    }
    
}

function disable() {
    if(minerals >=20 ) {
        document.getElementById("gas").disabled = false;
    else {
        document.getElementById("gas").disabled = true;
        }
    }
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