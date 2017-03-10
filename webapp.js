
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
			alert("metal:" + metal + " wires:" + wires);
			if( metal >= 10 + wires >= 10) {
               metal-=10;
				wires-=10;
				drill++;
				update();
				alert("successful!");
				}
			else {
				alert("Computer: Error, 10 metal and 10 wires required.");
			}
			break;
			
			
			
		    case "Cwell":
            alert("trying to build a water filter...");
			alert("minerals:" + minerals + " drill:" + drill);
			if( minerals >= 9 + drill >= 1 ) {
                minerals-=10;
				well++;
				update();
				alert("successful!");
				}
			else {
				alert("Computer: Error, 10 minerals and 1 drill required.");
			}
			break;
			
			
			
		case "Cfarm":
            alert("trying to build a farm...");
			alert("wells:" + well + " minerals:" + minerals + " wires:" + wires + " metal:" + metal);
			if( minerals >= 10 + well >=1 + wires >=10 + metal >=5 ) {
                minerals-=10;
				metal-=5;
				wires-=10;
				farm++;
				update();
				alert("successful!");
				}
			else {
				alert("Computer: Error, 10 minerals, 1 water filter, 10 wires, and 5 metal required.");
			}
			break;
			
			
			case "Cgas":
            alert("trying to build a gas compounder...");
			alert("metal: " + metal + " computer chips:" + cc + " wires:" + wires);
			if( metal >= 10 + cc >=2 + wires >=15 ) {
                metal-=10;
				wires-=15;
				cc-=2;
				drill++;
				update();
				alert("successful!");
				}
			else {
				alert("Computer: Error, 10 metal, 2 computer chips, and 15 wires required.");
			}
			break;
			
			
			case "Cbp":
            alert("trying to build a blue printer...");
			alert("metal:" + metal + " Computer chips:" + cc + "wires:" + wires);
			if( metal >= 10 + cc >= 4 + wires >= 10 ) {
                metal-=10;
				cc-=4;
				wires-=10;
				drill++;
				update();
				alert("successful!");
				}
			else {
				alert("Computer: Error, 10 metal, 4 computer chips, and 10 wires required.");
			}
			break;



	}
}




//shop end