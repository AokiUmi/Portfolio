// JavaScript file to be filled in by the student for Box 4-2
// we'll give you something to get started...
export {};
// you should start by getting the canvas, then draw whatever you want!
// Be sure to use the Canvas drawing API, not SVG!
/** @type {HTMLCanvasElement} */
let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas1"));
let context = canvas.getContext('2d');
let content = document.getElementById('dvacontent');

function draw() {
    const contentWidth = content.clientWidth;

    canvas.width = contentWidth;
    canvas.height = contentWidth;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.scale(canvas.width / 500, canvas.height / 500);
    context.fillStyle = "LightPink";
    context.fillRect(0, 0, 500, 450);
    context.beginPath();
    context.fillStyle = `rgba(255,255,255,${1/4.0}`;
    context.arc(300, 20, 50, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();

    context.beginPath();
    context.fillStyle = `rgba(255,255,255,${1.6/4.0})`;
    context.arc(350, 55, 60, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();

    context.beginPath();
    context.fillStyle = `rgba(255,255,255,${2/4.0})`;
    context.arc(340, 350, 60, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();


    context.beginPath();
    context.fillStyle = `rgba(255,255,255,${2.5/4.0})`;
    context.arc(40, 150, 100, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();

    context.beginPath();
    context.fillStyle = `rgba(255,255,255,${1.6/4.0})`;
    context.arc(450, 255, 130, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();

    context.beginPath();
    context.fillStyle = `rgba(255,255,255,${3/4.0})`;
    context.arc(100, 255, 40, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();

    context.beginPath();
    context.fillStyle = "#EE30A7";
    context.strokeStyle = "MediumVioletRed";
    context.lineWidth = 3;
    context.arc(250, 234.375, 125, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
    context.stroke();


    context.beginPath();
    context.fillStyle = "white";
    context.strokeStyle = "#27408B";
    context.lineWidth = 3;
    context.moveTo(205.078, 154.297);
    context.bezierCurveTo(228.516, 138.672, 271.484, 138.672, 294.922, 154.297); //1
    context.bezierCurveTo(296.875, 117.1875, 326.172, 64.453, 359.375, 46.875); // 2
    context.bezierCurveTo(371.094, 74.21875, 351.5625, 150.391, 324.219, 171.875); // 3
    context.bezierCurveTo(361.328, 226.5625, 347.656, 296.875, 250, 300.781); // 4
    context.bezierCurveTo(152.344, 296.875, 138.672, 226.5625, 175.781, 171.875);
    context.bezierCurveTo(148.4375, 150.391, 128.90625, 74.21875, 140.625, 46.875);
    context.bezierCurveTo(173.828, 64.453, 203.125, 117.1875, 205.078, 154.297);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.strokeStyle = "#27408B";
    context.lineWidth = 3.90625;
    context.moveTo(267.578, 222.65625);
    context.lineTo(298.828, 205.078);
    context.moveTo(295.898, 225.586);
    context.arc(287.109, 225.586, 8.789, 0, Math.PI * 2, true);
    context.moveTo(232.422, 222.65625);
    context.lineTo(201.172, 205.078);
    context.moveTo(221.680, 225.586);
    context.arc(212.891, 225.586, 8.789, 0, Math.PI * 2, true);
    context.closePath();
    context.stroke();


    context.beginPath();
    context.fillStyle = "#27408B";
    context.moveTo(238, 242.1875);
    context.lineTo(262, 242.1875);
    context.lineTo(250, 255);
    context.closePath();
    context.stroke();
    context.fill();

    context.moveTo(250, 255);
    context.lineTo(265.625, 267);
    context.lineTo(281.25, 256);
    context.moveTo(250, 255);
    context.lineTo(234.375, 267);
    context.lineTo(218.75, 256);
    context.stroke();

    context.fillStyle = "black";
    context.font = "italic 50px Arial";
    context.fillText("D.va", 198, 410);

    context.fillStyle = " White";
    context.font = "italic 20px Arial";
    context.fillText("Overwatch", 202, 440);


    context.fillStyle = "LightGrey";
    context.font = " 15x Arial";
    context.fillText("@Aoki_灏", 405, 470);

    context.fillStyle = "Pink";
    context.font = " 15x Arial";
    context.fillText("Heroes Never Die", 0, 470);

    context.fillStyle = "LightGrey";
    context.font = " 15x Arial";
    context.fillText("AokiUmi#1410", 368, 495);

    window.requestAnimationFrame(draw);
}
draw();