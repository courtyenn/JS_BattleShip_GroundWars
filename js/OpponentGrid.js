 
 var context1;
 var context2;
 
 window.onload = function(){
		
var canvas=document.getElementById("opponentBoard");
var context1=canvas.getContext("2d");
context1.strokeStyle = "rgb(255, 255, 255)"; 
var dim = 45;
context1.beginPath();

	for(x = 0; x< 11; x++)
	{
		for(y = 0; y < 11; y++)
		{

		if(x ==0 && y == 0)
		{
			context.fillRect(y*dim, x*dim, dim,dim);
			context.strokeRect(y*dim, x*dim, dim, dim);
		}
		else if(x == 0 || y == 0)
		{
			context.strokeStyle = "rgb(0, 0, 0)";
			context.fillStyle='yellow';
			context.fillStyle='yellow';
			context.fillRect(y*dim, x*dim, dim,dim);
			context.strokeRect(y*dim, x*dim, dim, dim);
		}
		else
		{
		context.lineWidth = 1;
		context.fillRect(y*dim, x*dim, 0,0);
		context.strokeRect(y*dim, x*dim, dim, dim);
		}

			context.fillStyle='green';
			context.font="34pt Calibri";
			context.textAlign = "right";
			context.textBaseline = "bottom";
			context.fillText("A", 80, 48);
			context.fillText("B", 127, 48);
			context.fillText("C", 168, 48);
			context.fillText("D", 215, 48);
			context.fillText("E", 260, 48);
			context.fillText("F", 305, 48);
			context.fillText("G", 350, 48);
			context.fillText("H", 395, 48);
			context.fillText("I", 430, 48);
			context.fillText("J", 480, 48);
			context.fillText("1", 32, 93);
			context.fillText("2", 32, 140);
			context.fillText("3", 32, 180);
			context.fillText("4", 32, 230);
			context.fillText("5", 32, 270);
			context.fillText("6", 32, 320);
			context.fillText("7", 32, 365);
			context.fillText("8", 32, 410);
			context.fillText("9", 32, 450);
			// context.fillText("10", 44, 495);
		}
	}
}
	 
	 var handlefocus=function(e){
  if(e.type=='mouseover'){
    cnv.focus();
    return false;
  }else if(e.type=='mouseout'){
    cnv.blur();
    return false;
  }
  return true;
};

    var grid;
    function prepareCanvasGrid()
    {
        var cnv = document.getElementById("opponentBoard");
		cnv.addEventListener("mousedown", doMouseDown, false);
        grid = new CanvasGrid(cnv.getContext("2d"),cnv.offsetLeft, cnv.offsetTop);
    }
	
	function doMouseDown(event)
{
canvas_x = (event.pageX- canvas1.offsetLeft);
canvas_y = (event.pageY - canvas1.offsetTop);
// drawOverlay(canvas_x, canvas_y);
translate(canvas_x, canvas_y);
}

    function CanvasGrid(context,x,y) {
        this.sq = [];
        this.dirty = [];
        this.ctx = context;
        this.x = x;
        this.y = y;
		
        this.init = function()
		{
            for(var x = 45; x < 490; x += 45) 
			{
                for(var y = 45; y < 490; y += 45) 
				{
                    var s = new square(x,y, this.ctx);
                    this.sq.push(s);
                }
            }
        }

        this.draw = function(){
            // this.ctx.clearRect(0,0,350,350);
            for(var i=0; i < this.sq.length; i++)
                this.sq[i].draw();
         }
		 
		 this.translate = function(x, y){
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

	console.log(coordinate);
	return coordinate;
		 }

        this.over = function(ex,ey){
		// alert("x before: " + ex + " y before: " + ey);
            ex = ex - this.x;
            ey = ey - this.y;
			for(var i=0; i < this.sq.length; i++) {
				if(this.sq[i].eleAtPoint(ex,ey)){
					var execute = function(color){
						this.sq[i].over(color);
					}
					sendFireRequest(this.translate(ex, ey), execute);
					break;
				}
			}
        }

        this.init();
        this.draw();
    }

    function square(x,y, ctx){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.h = 45;
        this.w = 45;

        this.draw = function(){
            this.ctx.strokeStyle = "#000";
            this.ctx.strokeRect(this.x, this.y, this.w, this.w);
        }

        this.over = function(color) {
			this.ctx.fillStyle = color;
			translate(this.x, this.y);
			this.ctx.fillRect(this.x, this.y, this.w, this.w);
        }

        this.eleAtPoint = function(ex,ey){
            if(ex < this.x + this.w 
			&& ex > this.x 
            && ey > this.y 
			&& ey < this.y + this.w) 
                return true;
            return false;
        }
    }

    function over(){
        var e = window.event;
        grid.over(e.clientX  ,e.clientY);
    }

    prepareCanvasGrid();
	
	//drawBackground -- draw background image
	//drawGrid() -- overlay background image with a grid
	//drw Ships() uses a 2d array to iterate through and place ships ??
	//drawOverlay() is a overlay that goes through a 2d array
