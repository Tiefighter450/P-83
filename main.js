canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")
color = "red";
touchEvent = "empty";
mouseEvent = "empty";
var lastPosOfY, lastPosOfX;
widthOfLine = 1;
canvas.addEventListener("touchdown", myTouchDown);
function myTouchDown(e) {
    color = document.getElementById("color").value;
    console.log(color);
    widthOfLine = document.getElementById("lineWidth").value;
    console.log(widthOfLine);
    touchEvent = "touchDown";
}
canvas.addEventListener("touchmove", myTouchMove);
function myTouchMove(e) {
    currentPosOfX = e.touches[0].clientX - canvas.offsetLeft;
    currentPosOfY = e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        console.log("Last position of x and y coordinates =");
        console.log("x = " + lastPosOfX + " y = " + lastPosOfY);
        ctx.moveTo(lastPosOfX, lastPosOfY);
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + currentPosOfX + " y = " + currentPosOfY);
        ctx.lineTo(currentPosOfX, currentPosOfY);
        ctx.stroke();
    lastPosOfX = currentPosOfX;
    lastPosOfY = currentPosOfY;
}
canvas.addEventListener("touchleave", myTouchLeave);
function myTouchLeave() {
    mouseEvent = "mouseleave";
}
canvas.addEventListener("touchup", myTouchUp);
function myTouchUp() {
    touchEvent = "touchUp";
}
canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e) {
    color = document.getElementById("color").value;
    console.log(color);
    widthOfLine = document.getElementById("lineWidth").value;
    console.log(widthOfLine);
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e) {
    currentPosOfX = e.clientX - canvas.offsetLeft;
    currentPosOfY = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        console.log("Last position of x and y coordinates =");
        console.log("x = " + lastPosOfX + " y = " + lastPosOfY);
        ctx.moveTo(lastPosOfX, lastPosOfY);
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + currentPosOfX + " y = " + currentPosOfY);
        ctx.lineTo(currentPosOfX, currentPosOfY);
        ctx.stroke();
    }
    lastPosOfX = currentPosOfX;
    lastPosOfY = currentPosOfY;
}
canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave() {
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp() {
    mouseEvent = "mouseUP";
}
function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}