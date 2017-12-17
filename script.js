var canvas = document.querySelector("#canvas");
if(canvas.getContext) {
	var ctx = canvas.getContext("2d");
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

function Triangle(inInitPosX, inInitPosY, inPosX, inPosY, inTriSide, inDistance, inColor) {
    this.x1 = inInitPosX;
    this.y1 = inInitPosY;
    this.x2 = inPosX;
    this.y2 = inPosY;
    this.triSide = inTriSide;
    this.distance = inDistance;
    this.color = inColor;
}

Triangle.prototype.draw = function() {
    ctx.beginPath();
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.lineTo(this.x1 + this.triSide/2, this.y1 + this.distance);
    if(flag == 0) {
        ctx.closePath();
    }
    ctx.fillStyle = this.color;
    ctx.fill();
}


// Algorithm for triangle generation

function drawTriangle(inEvent) {  
    if(flag==1) {
        // to get the distance between a point where mouse is clicked and a point where mouse drag ends  
        dist = Math.pow(Math.abs(parseInt(Math.pow(parseInt(inEvent.clientX-initX),2)-Math.pow(parseInt(inEvent.clientY-initY),2))),0.5);

        //To draw equilateral triangle, we have initial point and let us asssume the obtained distance as the hegiht of tringle.
        //Using this, we can get the side of the tringle, thereby we obtain the right and left side vertices points.
        triSide=1.1547*dist;
        var triangleColor = getColor();
        var triangle = new Triangle(initX, initY, inEvent.clientX, inEvent.clientY, triSide, dist, triangleColor);     
        triangles.push(triangle);
        triangle.draw();
    }

function drawTriangle(inEvent) {
       // to get the distance between a point where mouse is clicked and a point where mouse drag ends  
     dist=Math.pow(Math.abs(parseInt(Math.pow(parseInt(inEvent.clientX-initX),2)-Math.pow(parseInt(inEvent.clientY-initY),2))),0.5);

     //To draw equilateral triangle, we have initial point and let us asssume the obtained distance as the hegiht of tringle.
     //Using this, we can get the side of the tringle, thereby we obtain the right and left side vertices points.

    triSide=1.1547*dist;
            
	ctx.beginPath();
	ctx.moveTo(initX, initY);
	ctx.lineTo(initX-triSide/2,initY+dist);
	ctx.lineTo(initX+triSide/2,initY+dist);
	ctx.closePath();

	ctx.lineWidth = 1;
	ctx.strokeStyle = '#666666';
	ctx.stroke();

	ctx.fillStyle =getColor();
	ctx.fill();

}

function getColor()
{
	return '#'+Math.random().toString(16).slice(-6);
}


    var flag = 0;
    var initX,initY;
    var dist;
    var triSide;

    var triangles = [];


// To get the initial point 
document.addEventListener("mousedown", function(event){
    flag = 0;
    initX=event.clientX;
    initY=event.clientY;
}, false);

// To enable click into drag event 
document.addEventListener("mousemove", function(){
    flag = 1;
}, false);

// To draw triandle according to drag size

document.addEventListener("mouseup", drawTriangle, false);

document.addEventListener("mouseup", function(){
   if(flag === 1){
        drawTriangle(event);
    }
}, false);

