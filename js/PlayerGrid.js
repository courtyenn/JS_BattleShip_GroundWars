
window.onload = function(){

	createShips();
	Draw();
	}

var sub, cruiser, carrier, battleShip, patrol;
var results = [], results2 = [];
var timer;
var playerTurn = false;
var temp2 ="";
var diffX, diffY;
var go = false;
var num = 0;
hShot = [];
mShot = [];
var playGame = false;
				
				var ships = [];
				var activeShip = 0;
var theme = get("theme");
function createShips()
{

	sub = new Object();  
	sub.location = "C6";
	sub.num = 0;
	sub.image = new Image();
	sub.imageXY  = {x: 225, y: 180};
	sub.image.src='../Image/'+ theme +'/ships1.png';
	sub.image2 = new Image();
	sub.image2.src='../Image/'+ theme +'/ships1_e.png';
	sub.image3 = new Image();
	sub.image3.src='../Image/'+ theme +'/ships1_s.png';
	sub.image4 = new Image();
	sub.image4.src='../Image/'+ theme +'/ships1_w.png';
	sub.image5 = new Image();
	sub.image5.src='../Image/'+ theme +'/ships1.png';
	sub.orientation = "DOWN";
	sub.typeOfShip = "Submarine";
	sub.locked = false;	
	sub.width = 45;
	sub.height = 135;
	ships[0] = sub;

	cruiser = new Object();
	cruiser.location = "C3";
	cruiser.num = 1;
	cruiser.image = new Image();
	cruiser.image.src='../Image/'+ theme +'/ships2.png';
	cruiser.image2 = new Image();
	cruiser.image2.src='../Image/'+ theme +'/ships2_e.png';
	cruiser.image3 = new Image();
	cruiser.image3.src='../Image/'+ theme +'/ships2_s.png';
	cruiser.image4 = new Image();
	cruiser.image4.src='../Image/'+ theme +'/ships2_w.png';
	cruiser.image5 = new Image();
	cruiser.image5.src='../Image/'+ theme +'/ships2.png';
	cruiser.orientation = "DOWN";
	cruiser.typeOfShip = "Cruiser";
	cruiser.locked = false;
	cruiser.height = 135;
	cruiser.width = 45;
	cruiser.imageXY  = {x: 550, y: 60};
	ships[1] = cruiser;

	carrier = new Object();
	carrier.num = 2;
	carrier.location ="B2";
	carrier.orientation = "DOWN";
	carrier.image = new Image();
	carrier.image.src='../Image/'+ theme +'/ships4.png';
	carrier.image2 = new Image();
	carrier.image2.src='../Image/'+ theme +'/ships4_e.png';
	carrier.image3 = new Image();
	carrier.image3.src='../Image/'+ theme +'/ships4_s.png';
	carrier.image4 = new Image();
	carrier.image4.src='../Image/'+ theme +'/ships4_w.png';
	carrier.image5 = new Image();
	carrier.image5.src='../Image/'+ theme +'/ships4.png';
	carrier.typeOfShip = "Carrier";
	carrier.locked = false;
	carrier.height = 225;
	carrier.width = 45;
	carrier.imageXY  = {x: 550, y: 250};
	ships[2] = carrier;

	battleShip = new Object();
	battleShip.location = "D7";
	battleShip.num = 3;
	battleShip.orientation = "DOWN";
	battleShip.image = new Image();
	battleShip.image.src='../Image/'+ theme +'/ships3.png';
	battleShip.image2 = new Image();
	battleShip.image2.src='../Image/'+ theme +'/ships3_e.png';
	battleShip.image3 = new Image();
	battleShip.image3.src='../Image/'+ theme +'/ships3_s.png';
	battleShip.image4 = new Image();
	battleShip.image4.src='../Image/'+ theme +'/ships3_w.png';
	battleShip.image5 = new Image();
	battleShip.image5.src='../Image/'+ theme +'/ships3.png';
	battleShip.typeOfShip = "Battleship";
	battleShip.height = 180;
	battleShip.width = 45;
	battleShip.imageXY = {x: 504, y: 250};
	battleShip.locked = false;
	ships[3] = battleShip;
	
	patrol = new Object();
	patrol.num = 4;
	patrol.location = "E4";
	patrol.orientation = "DOWN";
	patrol.image = new Image();
	patrol.image.src = '../Image/'+ theme +'/ships1.png';
	patrol.image2 = new Image();
	patrol.image2.src = '../Image/'+ theme +'/ships1_e.png';
	patrol.image3 = new Image();
	patrol.image3.src = '../Image/'+ theme +'/ships1_s.png';
	patrol.image4 = new Image();
	patrol.image4.src = '../Image/'+ theme +'/ships1_w.png';
	patrol.image5 = new Image();
	patrol.image5.src = '../Image/'+ theme +'/ships1.png';
	patrol.imageXY = {x: 504, y: 30};
	patrol.typeOfShip = "PatrolBoat";
	patrol.height = 90;
	patrol.width = 45;
	patrol.locked = false;
	ships[4] = patrol;
	
}

var count = 1;

var handlekeydown=function(e){
if(e.keyCode == 32){
if(count == 1){                  
ships[activeShip].image.src = ships[activeShip].image2.src;
temp = ships[activeShip].height;
ships[activeShip].width = temp ;
ships[activeShip].height = 45;
ships[activeShip].orientation = "RIGHT";
count = 2;

placeShip();
Draw();
}

else if(count == 2){
ships[activeShip].image.src = ships[activeShip].image3.src;
temp = ships[activeShip].width;
ships[activeShip].width = 45;
ships[activeShip].height = temp;
ships[activeShip].orientation = "UP";
count = 3;

placeShip();
Draw();
}
else if(count == 3){
ships[activeShip].image.src = ships[activeShip].image4.src;
temp = ships[activeShip].height;
ships[activeShip].width = temp;
ships[activeShip].height = 45;
ships[activeShip].orientation = "LEFT";
count = 4;

placeShip();
Draw();
}
else if(count == 4){
temp = ships[activeShip].width;
ships[activeShip].image.src = ships[activeShip].image5.src;
ships[activeShip].width = 45;
ships[activeShip].height = temp;
ships[activeShip].orientation = "DOWN";
count = 1;

placeShip();
Draw();
}
}
};
		var grid;
		var canvas2=document.getElementById("playerBoard");
		canvas2.addEventListener("mousedown", doMouseDown2, false);
		canvas2.addEventListener('keydown', handlekeydown, false);
		var context2 = canvas2.getContext('2d');
		var c = canvas2.getContext('2d');
	
function doMouseDown2(event)
{
canvas2.setAttribute('tabindex','0');
canvas2.focus();

if(event.pageX > 710 && event.pageY > 757){
canvas_x = (event.pageX- canvas2.offsetLeft);
canvas_y = (event.pageY - canvas2.offsetTop);
// drawOverlay(canvas_x, canvas_y);
translate(canvas_x, canvas_y);
}
}
		
 translate = function(x, y)
 {
	var coordinate;
	if(x < 90)coordinate = "A";
	else if(x < 135)coordinate = "B";
	else if(x < 180)coordinate = "C";
	else if(x < 225)coordinate = "D";
	else if(x < 270)coordinate = "E";
	else if(x < 315)coordinate = "F";
	else if(x < 360)coordinate = "G";
	else if(x < 405)coordinate = "H";
	else if(x < 450)coordinate = "I";
	else if(x < 495)coordinate = "J";
	 
	if(y < 90) coordinate += "1";
	else if(y < 135) coordinate += "2";
	else if(y < 180) coordinate += "3";
	else if(y < 225) coordinate += "4";
	else if(y < 270) coordinate += "5";
	else if(y < 315) coordinate += "6";
	else if(y < 360) coordinate += "7";
	else if(y < 405) coordinate += "8";
	else if(y < 450) coordinate += "9";
	else if(y < 495) coordinate += "10";

	// console.log(coordinate);
	return coordinate;
	}


function Draw ()
{

    canvas2.width = canvas2.width
	context2.strokeStyle = "rgb(255, 255, 255)"; 

	var dim = 45;
	context2.beginPath();
	for(x = 0; x< 11; x++)
	{
		for(y = 0; y < 11; y++)
		{

			if(x ==0 && y == 0)
			{
				if(!playGame){
				var img = new Image();
				img.src = '../Image/' + theme +'/graylight.png';
				c.drawImage(img, 0,0, 45, 45);
			}
			else{
				drawLight();
			}
			}
			else if(x == 0 || y == 0)
			{
				context2.strokeStyle = "rgb(0, 0, 0)";
				context2.fillStyle='yellow';
				context2.fillRect(y*dim, x*dim, dim,dim);
				context2.strokeRect(y*dim, x*dim, dim, dim);
			}
			else{
				context2.lineWidth = 1;
				context2.fillRect(y*dim, x*dim, 0,0);
				context2.strokeRect(y*dim, x*dim, dim, dim);
				}

			context2.fillStyle='green';
			context2.font="34pt Calibri";
			context2.textAlign = "right";
			context2.textBaseline = "bottom";
			context2.fillText("A", 80, 48);
			context2.fillText("B", 127, 48);
			context2.fillText("C", 168, 48);
			context2.fillText("D", 215, 48);
			context2.fillText("E", 260, 48);
			context2.fillText("F", 305, 48);
			context2.fillText("G", 350, 48);
			context2.fillText("H", 395, 48);
			context2.fillText("I", 430, 48);
			context2.fillText("J", 480, 48);
			context2.fillText("1", 32, 93);
			context2.fillText("2", 32, 140);
			context2.fillText("3", 32, 180);
			context2.fillText("4", 32, 230);
			context2.fillText("5", 32, 270);
			context2.fillText("6", 32, 320);
			context2.fillText("7", 32, 365);
			context2.fillText("8", 32, 410);
			context2.fillText("9", 32, 450);
			context2.fillText("10", 44, 495);
		}
	}	

		context2.globalAlpha = .5;
		context2.drawImage(ships[0].image, ships[0].imageXY.x, ships[0].imageXY.y, ships[0].width, ships[0].height);
		context2.drawImage(ships[1].image, ships[1].imageXY.x, ships[1].imageXY.y, ships[1].width, ships[1].height);
		context2.drawImage(ships[2].image, ships[2].imageXY.x, ships[2].imageXY.y, ships[2].width, ships[2].height);
		context2.drawImage(ships[3].image, ships[3].imageXY.x, ships[3].imageXY.y, ships[3].width, ships[3].height);
		context2.drawImage(ships[4].image, ships[4].imageXY.x, ships[4].imageXY.y, ships[4].width, ships[4].height);
	if(playGame){
		c.globalAlpha = 1.0;
		c.drawImage(ships[0].image, ships[0].imageXY.x, ships[0].imageXY.y, ships[0].width, ships[0].height);
		c.drawImage(ships[1].image, ships[1].imageXY.x, ships[1].imageXY.y, ships[1].width, ships[1].height);
		c.drawImage(ships[2].image, ships[2].imageXY.x, ships[2].imageXY.y, ships[2].width, ships[2].height);
		c.drawImage(ships[3].image, ships[3].imageXY.x, ships[3].imageXY.y, ships[3].width, ships[3].height);
		c.drawImage(ships[4].image, ships[4].imageXY.x, ships[4].imageXY.y, ships[4].width, ships[4].height);
	}
	else{
	for(var i = 0; i < ships.length; i++){
	
	if(ships[i].num == activeShip){
	c.globalAlpha = 1.0;
	c.drawImage(ships[activeShip].image, ships[activeShip].imageXY.x, ships[activeShip].imageXY.y, ships[activeShip].width, ships[activeShip].height);
	break;

	}
	}
	}

 }
 

canvas2.onmousedown = function (e)
{
    var mouseXY = RGraph.getMouseXY(e); //this gets the mouse coordinates relative to the canvas
    state2.mousedown = true;
    state2.canvas    = e.target;
	
	if(playGame){
	
	}
	else{
    if (   mouseXY[0] > ships[activeShip].imageXY.x
        && mouseXY[0] < (ships[activeShip].imageXY.x + ships[activeShip].width)
        && mouseXY[1] > ships[activeShip].imageXY.y
        && mouseXY[1] < (ships[activeShip].imageXY.y + ships[activeShip].height)) 
		{
        
        state2.dragging       = true;
        state2.originalMouseX = 45;
        state2.originalMouseY = 45;
        state2.offsetX         = mouseXY[0] - ships[activeShip].imageXY.x;
        state2.offsetY         = mouseXY[1] - ships[activeShip].imageXY.y;
		}
		// Draw();
		}
}

canvas2.onmousemove = function (e)
{
    if (state2.mousedown && state2.dragging) {

        state2.canvas = e.target;
        var mouseXY = RGraph.getMouseXY(e);

        // Work how far the mouse has moved since the mousedon event was triggered
        diffX = mouseXY[0] - state2.originalMouseX;
        diffY = mouseXY[1] - state2.originalMouseY;
    
        ships[activeShip].imageXY.x = state2.originalMouseX + diffX - state2.offsetX;
        ships[activeShip].imageXY.y = state2.originalMouseY + diffY - state2.offsetY;
        Draw();
        // drawLight();
    }
    Draw();

}

window.onmouseup = function (e)
{

	var area = 45;
	
	if(playGame){
	
	// drawLight();
	Draw();
	}
	else{
     state2.mousedown = false;
       
	if(state2.dragging == true){
	ships[activeShip].imageXY.x = ((Math.floor((ships[activeShip].imageXY.x)/area))*area);
	ships[activeShip].imageXY.y = (Math.floor((ships[activeShip].imageXY.y)/area))*area;
	state2.dragging  = false;
	Draw();
	}
	else if(ships[activeShip].imageXY.x > 495){
	ships[activeShip].imageXY.x = 225;
	ships[activeShip].imageXY.y = 180;
	Draw();
	}

	placeShip();
	}
	Draw();
	// drawLight();
	
}

function placeShip(){
	var area = 45;
	if(playGame){}
	else{
			if(ships[activeShip].imageXY.x < area || ships[activeShip].imageXY.y < area 
	|| (ships[activeShip].imageXY.y + ships[activeShip].height) > 495
	|| (ships[activeShip].imageXY.x + ships[activeShip].width) > 495
	){
		ships[activeShip].imageXY.x = (Math.floor((state2.originalMouseX + state2.offsetX)/area))*area;
		ships[activeShip].imageXY.y = (Math.floor((state2.originalMouseY + state2.offsetY)/area))*area;
	}
}
}
var placedShips = 0;
function doYouWantTo(){
 doIt=confirm('Place the ship? (no other changes can be made)');
  if(doIt){
	// console.log("You push confirm..");
		sendPlaceRequest((translate(ships[activeShip].imageXY.x, ships[activeShip].imageXY.y)), 
			ships[activeShip].orientation, ships[activeShip].typeOfShip);

			}
  else{
		console.log("says u didnt push do it");
  }

}

function sendPlaceRequest(coordinates, orientation, ship){
	send(placeShipURL, (createPlaceShipXML(coordinates, orientation, ship)), sendPlaceRequestCallback);
}

function sendPlaceRequestCallback(xmlhttp){
console.log(xmlhttp);

	if(xmlhttp.status == 200)
	{
	var results = getElements(xmlhttp, "result");
		if(results.length > 0)
		{
		ships[activeShip].locked = true;
			activeShip++;
			count = 1;
			placedShips++;
			Draw();
			if(placedShips == 5)
			{
			document.getElementById("myButton").disabled = true;
			playGame = true;
			Draw();
			}
		}
		}
	else{
		console.log("server isn't up");
	}
}

function drawOverlay(coordinates, result){

// var co = canvas2.getContext('2d');
// co.globalAlpha = .1;

	var x_shot;
	var y_shot;
	if(coordinates.length == 3){
	var xcoord = coordinates.substring(0, 1);
	var ycoord = coordinates.substring(1, 3);
	}
	else{
	var xcoord = coordinates.substring(0, 1);
	var ycoord = coordinates.substring(1, 2);
	}
	
	if(result == "Hit" || result == "Sunk"){
	
	if(xcoord == "A")x_shot = 45;
	else if(xcoord == "B")x_shot = 90;
	else if(xcoord == "C")x_shot = 135;
	else if(xcoord == "D")x_shot = 180;
	else if(xcoord == "E")x_shot = 225;
	else if(xcoord == "F")x_shot = 270;
	else if(xcoord == "G")x_shot = 315;
	else if(xcoord == "H")x_shot = 360;
	else if(xcoord == "I")x_shot = 405;
	else if(xcoord == "J")x_shot = 450;
	 
	if(ycoord == "1") y_shot = 45;
	else if(ycoord == "2") y_shot = 90;
	else if(ycoord == "3") y_shot = 135;
	else if(ycoord == "4") y_shot = 180;
	else if(ycoord == "5") y_shot = 225;
	else if(ycoord == "6") y_shot = 270;
	else if(ycoord == "7") y_shot = 315;
	else if(ycoord == "8") y_shot = 360;
	else if(ycoord == "9") y_shot = 405;
	else if(ycoord == "10") y_shot = 450;
	
	var rect2 = new squares(x_shot, y_shot, c, "red");
	hShot.push(rect2);
	for(var i = 0; i < hShot.length; i++){
	hShot[i].draw();
	}
	for(var i = 0; i < mShot.length; i++){
	mShot[i].draw();
	}
}
	
	else if(result == "Miss"){
		if(xcoord == "A")x_shot = 45;
	else if(xcoord == "B")x_shot = 90;
	else if(xcoord == "C")x_shot = 135;
	else if(xcoord == "D")x_shot = 180;
	else if(xcoord == "E")x_shot = 225;
	else if(xcoord == "F")x_shot = 270;
	else if(xcoord == "G")x_shot = 315;
	else if(xcoord == "H")x_shot = 360;
	else if(xcoord == "I")x_shot = 405;
	else if(xcoord == "J")x_shot = 450;
	 
	if(ycoord == "1") y_shot = 45;
	else if(ycoord == "2") y_shot = 90;
	else if(ycoord == "3") y_shot = 135;
	else if(ycoord == "4") y_shot = 180;
	else if(ycoord == "5") y_shot = 225;
	else if(ycoord == "6") y_shot = 270;
	else if(ycoord == "7") y_shot = 315;
	else if(ycoord == "8") y_shot = 360;
	else if(ycoord == "9") y_shot = 405;
	else if(ycoord == "10") y_shot = 450;
	
	var rect = new squares(x_shot, y_shot, c, "white");
	mShot.push(rect);
	for(var i = 0; i < mShot.length; i++){
	mShot[i].draw();
	}
	for(var i = 0; i < hShot.length; i++){
	hShot[i].draw();
	}
	Draw();
	}

}

function squares(x, y, ctx, color){
	this.ctx = ctx;
	this.x = x;
	this.y = y;
	this.h = 43;
	this.w = 43;
	
	this.draw = function(){
	this.ctx.strokeStyle ="rgb(0, 0, 0)";
	this.ctx.fillStyle = color;
	this.ctx.fillRect(this.x, this.y, this.w, this.w);
	ctx.save();
	}
}

function sendFireRequest(coordinates){

	var callback = function(xmlhttp){
	console.log(xmlhttp);
		if(xmlhttp.status == 200){
			var results = getElements(xmlhttp, "result");
			
			if(results.length > 0){
				var result = results[0].childNodes[0].nodeValue;
				if(result == "Miss" || result == "Hit" || result == "Sunk"){
					// drawLight();
				if(result == "Sunk"){
				alert("Their " + getElements(xmlhttp, "ship")[0].childNodes[0].nodeValue + " was sunk!");
				}
					drawOverlay2(coordinates, result);
					}
				}
			else{
				console.log("something went wrong even though xml is valid");
				var error = getElements(xmlhttp, "error");
				// deal with errors later
			}
		}
		else{
			console.log("something went wrong");
		}
	}
	
	var request = function(){
		send(fireURL, createFireXML(coordinates), callback);
	};
	request();
}


function drawLight(){
	var img = new Image();
	img.src = ('../Image/' + theme +'/greenlight.png');
	
	var img2 = new Image();
	img2.src = ('../Image/' + theme +'/redlight.png');

if(playGame){
	if(playerTurn){

		c.drawImage(img, 0,0, 45, 45);
		drawRedLight2();
	}
	else{
	c.drawImage(img2, 0, 0, 45, 45);
	drawGreenLight2();
	}

}
else{}
}

function drawOverlayOnPlayerGrid(coordinates, result){

	drawOverlay(coordinates, result);

}

function sendUpdateRequest(){

	send(updateURL, createUpdateXML(), updateCallback);
}

function updateCallback(xmlhttp){
// console.log(xmlhttp);
	// drawLight();
	if(xmlhttp.status == 200)
	{
		results = getElements(xmlhttp, "last");
		results2 = getElements(xmlhttp, "turn")[0].childNodes[0].nodeValue;
		
		if(results2.length > 0)
		{
		results2[0] = getElements(xmlhttp, "playerID")[0].childNodes[0].nodeValue;
		// console.log(xmlhttp);
			if(results2 == queries[1].value){
			playerTurn = true;
			// drawLight();
			}
			else{
			// drawLight();
			playerTurn = false;
			console.log("get here whe nnot player turn");
			drawLight();
			}
		}
		if(results.length > 0)
		{
			results = [];
			results[0] = getElements(xmlhttp, "coordinate")[0].childNodes[0].nodeValue;
			results[1] = getElements(xmlhttp, "status")[0].childNodes[0].nodeValue;
			results[2] = getElements(xmlhttp, "playerID")[0].childNodes[0].nodeValue;	
			
		if(results[1] == "Sunk" && results2 == queries[1].value)
		{
				var gameOver = getElements(xmlhttp, "winner");
				if(gameOver.length > 0){
					drawOverlayOnPlayerGrid(results[0], results[1]);
					alert(gameOver[0].childNodes[0].nodeValue + " is the winner!");
					document.location.href = "ThemePage.html";
				}
			drawOverlayOnPlayerGrid(results[0], results[1]);
			if(temp2 == getElements(xmlhttp, "ship")[0].childNodes[0].nodeValue){
			
			}
			else{
			alert("Your " + getElements(xmlhttp, "ship")[0].childNodes[0].nodeValue + " was sunk!");
			temp2 = getElements(xmlhttp, "ship")[0].childNodes[0].nodeValue;
			}
		}
		if(results[1] == "Sunk" && results2 != queries[1].value){
			var num = 0;
			var gameOver = getElements(xmlhttp, "winner");
			
			if(gameOver.length > 0){
			for(; num <= 1; num++){
					drawOverlayOnPlayerGrid(results[0], results[1]);
					alert(gameOver[0].childNodes[0].nodeValue + " is the winner!");
					}
					document.location.href = "ThemePage.html";
				}
		}
		if(results[1] == "Hit" || results[1] == "Miss")
		{
				if(results2 == queries[1].value){
				// drawLight();
				drawOverlayOnPlayerGrid(results[0], results[1]);
				}
				else{}
		}
			
		else
		{
			if(getElements(xmlhttp, "error").length > 0){
				console.log("something went wrong");
			}
		}
	}
	}
	else{
		console.log("Something went wrong");
	}
	// drawLight();
	Draw();
		for(var i = 0; i < hShot.length; i++){
	hShot[i].draw();
	}
	for(var i = 0; i < mShot.length; i++){
	mShot[i].draw();
	}
}


state2 = {}
state2.mousedown = false;
state2.dragging  = false;
state2.offsetX   = 0;
state2.offsetY   = 0;
createShips();
Draw();
// drawLight();

setInterval(sendUpdateRequest, 200);