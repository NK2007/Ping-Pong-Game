var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height / 2;
var dx = 4;
var dy = -4;
var paddleHeight = 120;
var paddleWidth = 15;
var paddle1Y = 190;
var paddle2Y = 190;
var up = false;
var down = false;
var up2 = false;
var down2 = false;
var sc1 = 0;
var sc2 = 0;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
function keyDownHandler(e) {
    if (e.key == "ArrowUp") {
        up = true;
    } else if (e.key == "ArrowDown") {
        down = true;
    } else if (e.keyCode == 87) {
        up2 = true;
    } else if (e.keyCode == 83) {
        down2 = true;
    }
}
function keyUpHandler(e) {
    if (e.key == "ArrowUp") {
        up = false;
    } else if (e.key == "ArrowDown") {
        down = false;
    } else if (e.keyCode == 87) {
        up2 = false;
    } else if (e.keyCode == 83) {
        down2 = false;
    }
}
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    scores();
    check();
    drawBall();
    drawPaddle1();
    drawPaddle2();
    if (up && paddle1Y > 0) {
        paddle1Y -= 3;
    } else if (down && paddle1Y < canvas.height - paddleHeight) {
        paddle1Y += 3;
    } else if (up2 && paddle2Y > 0) {
        paddle2Y -= 3;
    } else if (down2 && paddle2Y < canvas.height - paddleHeight) {
        paddle2Y += 3;
    }
    x += dx;
    y += dy;
}
setInterval(draw, 10);
function check() {
    if (x < 10) {
        sc2++;
        dx = -dx;
        x = canvas.width / 2;
        y = canvas.height / 2;
    } else if (x > 790) {
        sc1++;
        dx = -dx;
        x = canvas.width / 2;
        y = canvas.height / 2;
    } else if (y > 490 || y < 10) {
        dy = -dy;
    } else if ((x < 25 && y >= paddle1Y && y <= paddle1Y + paddleHeight) || (x > 775 && y >= paddle2Y && y <= paddle2Y + paddleHeight)) {
        dx = -dx;
    }
}
function drawPaddle1() {
    ctx.beginPath();
    ctx.rect(10, paddle1Y, paddleWidth, paddleHeight);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle2() {
    ctx.beginPath();
    ctx.rect(775, paddle2Y, paddleWidth, paddleHeight);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}
function scores() {
    document.getElementById('hid').textContent = sc1 + " : " + sc2;
}