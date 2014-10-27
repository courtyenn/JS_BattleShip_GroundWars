
window.onload=function(){
Draw1();
Draw();
}
var playerTurn = false;
var diffX, diffY;

var theme = get("theme");

		var grid;
		var canvas1=document.getElementById("opponentBoard");
		var context1 = canvas1.getContext('2d');

var dim = 45;
function Draw1 ()
{

    canvas1.width = canvas1.width
	context1.strokeStyle = "rgb(255, 255, 255)"; 

	
	context1.beginPath();
	for(x = 0; x< 11; x++)
	{
		for(y = 0; y < 11; y++)
		{
		
			if(x ==0 && y == 0)
			{
				var img3 = new Image();
				img3.src = ('../Image/' + theme +'/graylight.png');
				context1.drawImage(img3, 0,0, 45, 45);

			}
			else if(x == 0 || y == 0)
			{
				context1.strokeStyle = "rgb(0, 0, 0)";
				context1.fillStyle='yellow';
				context1.fillRect(y*dim, x*dim, dim,dim);
				context1.strokeRect(y*dim, x*dim, dim, dim);
			}
			else{
				context1.lineWidth = 1;
				context1.fillRect(y*dim, x*dim, 0,0);
				context1.strokeRect(y*dim, x*dim, dim, dim);
				}

			context1.fillStyle='green';
			context1.font="34pt Calibri";
			context1.textAlign = "right";
			context1.textBaseline = "bottom";
			context1.fillText("A", 80, 48);
			context1.fillText("B", 127, 48);
			context1.fillText("C", 168, 48);
			context1.fillText("D", 215, 48);
			context1.fillText("E", 260, 48);
			context1.fillText("F", 305, 48);
			context1.fillText("G", 350, 48);
			context1.fillText("H", 395, 48);
			context1.fillText("I", 430, 48);
			context1.fillText("J", 480, 48);
			context1.fillText("1", 32, 93);
			context1.fillText("2", 32, 140);
			context1.fillText("3", 32, 180);
			context1.fillText("4", 32, 230);
			context1.fillText("5", 32, 270);
			context1.fillText("6", 32, 320);
			context1.fillText("7", 32, 365);
			context1.fillText("8", 32, 410);
			context1.fillText("9", 32, 450);
			context1.fillText("10", 44, 495);
		}
	}
	// drawLight();

 }
 
 function drawGreenLight2(){
		var img = new Image();
				img.src = ('../Image/' + theme +'/greenlight.png');
				context1.drawImage(img, 0,0, 45, 45);
 }
 
 function drawRedLight2(){
 	var img = new Image();
				img.src = ('../Image/' + theme +'/redlight.png');
				context1.drawImage(img, 0,0, 45, 45);
 }


function drawOverlay2(coordinates, result){

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
	
	// console.log(x_shot + " kk " +  y_shot);

			context1.strokeStyle="#FF0000";
			context1.fillStyle='red';
			context1.fillRect(x_shot, y_shot, 44, 44);

			}
	else if(result == "Miss")
	{
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
	
			context1.strokeStyle="#FF0000";
			context1.fillStyle = "white";
			context1.fillRect(x_shot, y_shot, 44, 44);
	}
	
}

  var grid;
  
    function prepareCanvasGrid()
    {
        var cnv = document.getElementById("opponentBoard");
		cnv.addEventListener("mousedown", doMouseDown, false);

		// canvas_x = (event.pageX- canvas1.offsetLeft);
		// canvas_y = (event.pageY - canvas1.offsetTop);

		canvas_x = (cnv.offsetLeft);
		canvas_y = (cnv.offsetTop);

		console.log(canvas_x + " is X");
		console.log(canvas_y + " is Y");
        grid = new CanvasGrid(cnv.getContext("2d"),canvas_x, canvas_y);
    }
	
	function doMouseDown(event)
{
canvas_x = (event.pageX- canvas1.offsetLeft);
canvas_y = (event.pageY - canvas1.offsetTop);
translate(canvas_x, canvas_y);
}

     function CanvasGrid(context,x,y) {
        this.sq = [];
        this.dirty = [];
        this.ctx = context;
        this.x = x;
        this.y = y;
		
        this.init = function(){
            for(var x = dim; x < 495; x += dim) {
                for(var y = dim; y < 495; y += dim) {
                    var s = new square(x,y, context);
                    this.sq.push(s);
                }
            }
        }
		 
		 this.translate = function(x, y){

		 	console.log("x is " + x + " y is: " + y)
		var coordinate;
	if(x < 90)coordinate = "A";
	else if(x < 135)coordinate = "B";
	else if(x < 180)coordinate = "C";
	else if(x < 225)coordinate = "D";
	else if(x < 270)coordinate = "E";
	else if(x < 315)coordinate = "F";
	else if(x < 360)coordinate = "G";
	else if(x < 405)coordinate = "H";
	else if(x < 350)coordinate = "I";
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
		 
        this.clean = function(){
            for(var i=0; i < this.dirty.length; i++)
                // this.dirty[i].draw();
            this.dirty = [];
        }

        this.over = function(ex,ey){
            ex = ex;
            ey = ey;
			// alert("x: " + ex + "y :" + ey);
			this.translate(ex, ey);
            for(var i=0; i < this.sq.length; i++) {
                if(this.sq[i].eleAtPoint(ex,ey)){
                    this.clean(); // clean up
                    this.dirty.push(this.sq[i]);
                    // this.sq[i].over();
					
                    break;
                }
             }
        }

        this.init();
        // this.draw();
    }
	
	 function square(x,y, ctx, color)

	{
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.h = 44;
        this.w = 44;

        this.over = function() {
			this.ctx.strokeStyle='black';
            this.ctx.fillStyle = color;
			// sendFireRequest((this.translate(this.x, this. y)))
            this.ctx.fillRect(this.x, this.y, this.w, this.w);
        }

        this.eleAtPoint = function(ex,ey){

            if(ex < this.x + this.w && ex > this.x 
                && ey > this.y && ey < this.y + this.h) {
				if(playerTurn){
				playerTurn = false;
				sendFireRequest(translate(this.x, this.y));
                return true;
				}
				drawGreenLight2();
				console.log("Don't draw if I get here");
				return false;
				}
            return false;
        }
    }

    function over(){
        var e = window.event;

        canvas_x = (e.pageX - canvas1.offsetLeft);
		canvas_y = (e.pageY - canvas1.offsetTop);

		// canvas_x = (e.clientX);
		// canvas_y = (e.clientY);

        console.log(canvas_x + " is X");
		console.log(canvas_y + " is Y");

        grid.over(canvas_x, canvas_y);
    }

    prepareCanvasGrid();


Draw1();
