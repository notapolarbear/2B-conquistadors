
//global variables
//rescources
var metal = 0;
var wires = 0;
var food = 20;
var minerals = 0;
var water = 10;
var cc = 0;
var o2 = 5;
var mesh = 0;
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
	document.getElementById("mesh").value = mesh;
}

function shop(sel) {
    switch(sel) {
		
        case "Cdrill":
            alert("trying to build a DRILL...");
			alert("metal:" + metal);
			if( metal >= 10 ) {
               metal-=10;
				drill++;
				update();
				alert("successful!");
				document.getElementById("image").innerHTML="<img src=images/drill.jpeg>"
				
				}
			else {
				alert("COMPUTER: Error, 10 metal required.");
			}
			break;
			
			
			
			
			
		    case "Cwell":
            alert("trying to build a WATER FILTER...");
			alert("minerals:" + minerals + " drills:" + drill + " mesh:" + mesh);
			if( minerals >= 9 && drill >= 1 && mesh >= 3 ) {
                minerals-=10;
				mesh-=3;
				well++;
				update();
				alert("successful!");
				}
			else {
				alert("COMPUTER: Error, 10 minerals, 3 mesh, and 1 drill required.");
			}
			break;
			
			
			
			case "Cfarm":
            alert("trying to build an AUTOMATED FARM...");
			alert("mesh:" + mesh + " Computer chips:" + cc + " wires:" + wires + " wells:" + well);
			if( mesh >= 10 && cc >= 2 && wires >= 5 && well >= 1 ) {
               mesh-=10;
				cc-=2;
				wires-=5;
				farm++;
				update();
				alert("successful!");
				}
			else {
				alert("COMPUTER: Error, 10 mesh, 2 computer chips, 1 well, and 5 wires required.");
			}
			break;
			
			
			
			
			case "Cgas":
            alert("trying to build a GAS COMPOUNDER...");
			alert("metal:" + metal + " wires:" + wires + " minerals:" + minerals + " oxygen tanks:" + o2 );
			if( metal >= 10 && wires >= 15 && o2 >= 2 && minerals >=11 ) {
               metal-=10;
			    wires-=15;
				o2-=2;
				minerals-=11;
				gas++;
				update();
				alert("successful!");
				}
			else {
				alert("COMPUTER: Error, 10 metal, 15 wires, 2 oxygen tanks, and 11 minerals required.");
			}
			break;
			
			
			
			case "Cbp":
            alert("trying to build a BLUE PRINTER...");
			alert("metal:" + metal + " wires:" + wires + " computer ships:" + cc );
			if( metal >= 10 && wires >= 30 && cc >= 5 ) {
               metal-=10;
			    wires-=30;
		 	    cc-=5;
				bp++;
				update();
				alert("successful!");
				}
			else {
				alert("COMPUTER: Error, 10 metal, 20 sires, and 5 computer chips required.");
			}
			break;
			
			
			
			case "Cmesh":
            alert("trying to make MESH...");
			alert("metal:" + metal + " wires:" + wires );
			if( metal >= 3 && wires >=4 ) {
               metal-=3;
			    wires-=4;
				mesh++;
				update();
				alert("successful!");
				}
			else {
				alert("COMPUTER: Error, 3 metal and 4 wires required.");
			}
			break;
	}
}


setInterval(function() {
    bonusCalc();
},60000);

function bonusCalc() {
	// drills
   var drillBonus = 0;
   drillBonus += drill * 3;
   metal += drillBonus;
    var mineralBonus = 0;
   mineralBonus += drill * 1;
   minerals += mineralBonus;
   // water filters
   var waterBonus = 0;
   waterBonus += well * 2;
   water += waterBonus;
   // farm
   var farmBonus = 0;
   farmBonus += farm *2;
   food += farmBonus;
   // bp
   var bpBonus = 0;
   bpBonus += bp * 1;
   cc += bpBonus;
   var gasBonus = 0;
   gasBonus += gas * 1;
   o2 += gasBonus ;
   update();
}
//shop end

//supply deplete
setInterval(decay,300000);
function decay() {
  water-=Math.ceil(Math.random()*3);
  o2-=1;
  food-=Math.ceil(Math.random()*5);
  update();
}

