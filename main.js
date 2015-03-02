
var cvn = document.getElementById('cnv');
var ctx = cvn.getContext('2d');
var HEIGHT = innerHeight;
var WIDTH = innerWidth;
var pi = Math.PI * 2;
var radius = 4;
var dragging = false;
var incr = document.getElementById('inrad');
var decr = document.getElementById('derad');
var dfg = document.querySelector('span');
var colors = document.querySelectorAll('.swatch');

cvn.height = HEIGHT;
cvn.width = WIDTH;
ctx.lineWidth = radius * 2;



var incre = function () {
    radius += 2;
    dfg.innerHTML = radius;
};

var decre = function () {
    radius -= 2;
    dfg.innerHTML = radius;
};

incr.addEventListener('click', incre);
decr.addEventListener('click', decre);

var draw = function (e) {
    x = e.clientX;
    y = e.clientY;
    if (dragging) {
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, pi);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
};

var engage = function () {
    dragging = true;
    draw(e);
};

var disengage = function () {
    dragging = false;
    ctx.beginPath();
};

cvn.addEventListener('mousedown', engage);
cvn.addEventListener('mousemove', draw);
cvn.addEventListener('mouseup', disengage);

