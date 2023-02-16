var mouseEvent = ""
var lastPositionOfX, lastPositionOfY;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", myMouseDown);


function myMouseDown(e){
    color = documen.getElementById("color").value;
    widthOfLine = document.getElementById("widthOfLine").value;
    mouseEvent = "mousedown";
}

canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e){
    currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
    currentPositionOfMouseY = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        ctx.moveTo(lastPositionOfX, lastPostionOfY);
        ctx.lineTo(currentPositionOfMouseX, currentPositionOfMouseY);
        ctx.stroke();
    }

    lastPositionOfX = currentPositionOfMouseX;
    lastPositionOfY = currentPositionOfMouseY;

}

canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e){
    mouseEvent = "mouseUP";
}

canvas.addEnventListener("mouseleave", myMouseLeave);
function myMouseLeave(e)
{
    mouseEvent = "mouseleave";
}

var lastPositionOfTouchX, lastPositionOfTouchY;
var width = screen.width;

newWidht = screen.width - 70;
newHeight = screen.height - 300;
if (width < 992){
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";
}
canvas.addEnventListener("touchstart", myTouchStart);
function myTouchStart(e){
    color = document.getElementById("color").value;
    widthOfLine = document.getElementById("widthOfLine").value;
    lastPositionOfTouchX = e.touches[0].clientx - canvas.offsetLeft;
    lastPositionOfTouchY = e.touchas[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthOfLine;
    ctx.moveTo(lastPositionOfTouchX, lastPositionOfTouchY);
    ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
    ctx.stroke();

    lastPositionOfTouchX = currentPositionOfMouseX;
    lastPositionOfTouchY = currentPositionOfMouseY;
}

function clearArea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}