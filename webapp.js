
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
var gas =0;
var drill = 0;
var well = 0;
var farm = 0;
var bp = 0;


window.onload = onLoadHandler;

function onLoadHandler() {
	// load_cookies();
	update();
}

function coolDown(btn_id, sec) {
	document.getElementById(btn_id).disabled = true;
	setTimeout(function() {
		document.getElementById(btn_id).disabled = false;
	}, sec);
}

    //add clicker for resource
function scavenge() {
	coolDown("scavenge", 0);
	var rnd = Math.ceil(Math.random() * 7);
    switch(rnd) {
        
        case 1: // metal
            metal+=3;
            break;
            
        case 2: // wires
            wires+=3;
            break;
            
        case 3: // food
            food+=1;
            break;
            
        case 4: // minerals
            minerals+=2;         
            break;
            
        case 5: // water
            water+=3;                    
            break;
            
        case 6: // cc
            cc+=1;                        
            break;
            
        case 7: // o2
            o2+=1;
            break;
    
    }
	update();
}

//shop start


function update() {
	document.getElementById("metal").value = metal;
	document.getElementById("drill").value = drill;
	document.getElementById("well").value = well;
	document.getElementById("farm").value = farm;
	document.getElementById("bp").value = bp;
	document.getElementById("gas").value = gas;
    document.getElementById("wires").value = wires;
    document.getElementById("o2").value = o2;     
	document.getElementById("metal").value = metal; 
	document.getElementById("food").value = food;     
	document.getElementById("water").value = water;    
	document.getElementById("minerals").value = minerals;   
	document.getElementById("cc").value = cc;
}

function shop(sel) {
    switch(sel) {
		
        case "Cdrill":
            alert("trying to build a drill...");
			alert("metal: " + metal);
			if( metal >= 10 ) {
                metal-=10;
				drill++;
				update();
				alert("successful!");
				}
			else {
				alert("Computer: Error, 10 metal required!!");
			}
			break;
			
			
			
			
			
		    case "Cwell":
            alert("trying to build a well...");
			alert("minerals:" + minerals + " drill:" + drill);
			if( minerals >= 10, drill > 0 ) {
                minerals-=10;
				well++;
				update();
				alert("successful!");
				}
			else {
				alert("Computer: Error, 10 metal required!");
			}
			break;
	}
}




//shop end