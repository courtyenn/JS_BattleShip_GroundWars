
	window.onload = function(){
		
  var canvas=document.getElementById("canvas");
	var context=canvas.getContext("2d");
	  context.strokeStyle = "rgb(255, 255, 255)"; 

context.beginPath();
for(x = 0; x< 11; x++){
for(y = 0; y < 11; y++){

if(x ==0 && y == 0){

context.fillRect(y*31, x*31, 31,31);
context.strokeRect(y*31, x*31, 31, 31);
}
else if(x == 0 || y == 0){
context.strokeStyle = "rgb(0, 0, 0)";
context.fillStyle='yellow';
context.fillRect(y*31, x*31, 31,31);
context.strokeRect(y*31, x*31, 31, 31);
}
else{
context.lineWidth = 1;
context.fillRect(y*31, x*31, 0,0);
context.strokeRect(y*31, x*31, 30, 30);
}

context.fillStyle='green';
context.font="20pt Calibri";
context.textAlign = "right";
context.textBaseline = "bottom";
context.fillText("A", 55, 30);
context.fillText("B", 85, 30);
context.fillText("C", 115, 30);
context.fillText("D", 145, 30);
context.fillText("E", 175, 30);
context.fillText("F", 205, 30);
context.fillText("G", 235, 30);
context.fillText("H", 265, 30);
context.fillText("I", 295, 30);
context.fillText("J", 325, 30);
context.fillText("1", 20, 60);
context.fillText("2", 20, 90);
context.fillText("3", 20, 120);
context.fillText("4", 20, 150);
context.fillText("5", 20, 180);
context.fillText("6", 20, 210);
context.fillText("7", 20, 250);
context.fillText("8", 20, 280);
context.fillText("9", 20, 310);
context.fillText("10", 30, 340);
}
}


}
	 function over(){
        var e = window.event;
        grid.over(e.clientX  ,e.clientY);
    }
	 
    var grid;
    function prepareCanvasGrid()
    {
        var cnv = document.getElementById("canvas");
        grid = new CanvasGrid(cnv.getContext("2d"),cnv.offsetLeft, cnv.offsetTop);
    }

    function CanvasGrid(context,x,y) {
        this.sq = [];
        this.dirty = [];
        this.ctx = context;
        this.x = x;
        this.y = y;
        this.init = function(){
            for(var x = 31; x < 330; x += 31) {
                for(var y = 31; y < 330; y += 31) {
                    var s = new square(x,y, context);
                    this.sq.push(s);
                }
            }
        }

        this.draw = function(){
            this.ctx.clearRect(0,0,350,350);
            for(var i=0; i < this.sq.length; i++)
                this.sq[i].draw();
         }

        this.clean = function(){
            for(var i=0; i < this.dirty.length; i++)
                this.dirty[i].draw();
            this.dirty = [];
        }

        this.over = function(ex,ey){
            ex = ex - this.x;
            ey = ey - this.y;
            for(var i=0; i < this.sq.length; i++) {
                if(this.sq[i].eleAtPoint(ex,ey)){
                    this.clean(); // clean up
                    this.dirty.push(this.sq[i]);
                    this.sq[i].over();
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
        this.h = 30;
        this.w = 30;

        this.draw = function(){
            this.ctx.strokeStyle = "#eee";
            this.ctx.strokeRect(this.x, this.y, this.w, this.w);
            this.ctx.fillStyle = "#fff";
            this.ctx.fillRect(this.x, this.y, this.w, this.w);
        }

        // this.over = function() {
            // this.ctx.fillStyle = "red";
            // this.ctx.fillRect(this.x, this.y, this.w, this.w);
        // }

        this.eleAtPoint = function(ex,ey){
            if(ex < this.x + this.w && ex > this.x 
                && ey > this.y && ey < this.y + this.h) 
                return true;
            return false;
        }
    }


  

    prepareCanvasGrid();
	
