var canvas = document.querySelector("#canvas");
if(canvas.getContext) {
	var ctx = canvas.getContext("2d");
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Algorithm for triangle generation
function drawTriangle(inEvent) {
	ctx.beginPath();
	ctx.moveTo(100, 100);
	ctx.lineTo(100,300);
	ctx.lineTo(300,300);
	ctx.closePath();

	ctx.lineWidth = 10;
	ctx.strokeStyle = '#666666';
	ctx.stroke();

	ctx.fillStyle = "#FFCC00";
	ctx.fill();
}

canvas.addEventListener("mousedown", drawTriangle, false);