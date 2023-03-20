// @ts-check
export {}; // null statement to tell VSCode we're doing a module

// draw a picture using curves!

let canvas = document.getElementById("canvas3");
if (!(canvas instanceof HTMLCanvasElement))
    throw new Error("Canvas is not HTML Element");
let content = document.getElementById('dvabluecontent');

function draw() {
    let context = canvas.getContext("2d");
    const contentWidth = content.clientWidth;
    canvas.width = contentWidth;
    canvas.height = contentWidth;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.scale(canvas.width / 400, canvas.height / 400);
    context.fillStyle = "#316AB9";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = "#4F260B";
    context.fillStyle = "#4F260B";
    context.save();
    context.translate(20, 0);
    context.scale(0.9, 1);
    context.save();
    context.translate(70, 60);
    context.beginPath();
    context.moveTo(3.980, 141.980);
    context.bezierCurveTo(0.320, 122.543, 0.619, 102.895, 4.980, 83.980);
    context.bezierCurveTo(11.755, 54.598, 25.232, 34.862, 34.980, 25.980);
    context.bezierCurveTo(43.656, 18.075, 76.607, 1.975, 130, 0.575);
    context.translate(260, 0);
    context.scale(-1, 1);
    context.bezierCurveTo(76.607, 1.975, 43.656, 18.075, 34.980, 25.980);
    context.bezierCurveTo(25.232, 34.862, 11.755, 54.598, 4.980, 83.980);
    context.bezierCurveTo(0.619, 102.895, 0.320, 122.543, 3.980, 141.980);
    context.restore();

    context.save();
    context.translate(293.615, 125.575);
    context.bezierCurveTo(32.532, 69.890, 31.551, 63.499, 29.405, 57.405);
    context.bezierCurveTo(28.048, 53.552, 24.638, 47.272, 20.405, 41.405);
    context.bezierCurveTo(16.608, 36.142, 12.849, 32.897, 9.405, 27.405);
    context.bezierCurveTo(4.334, 19.319, 1.853, 10.174, 1.405, 0.405);

    context.restore();
    context.save();
    context.translate(96.8, 125.76);
    context.bezierCurveTo(197.899, 9.919, 195.887, 19.374, 192.220, 28.220);
    context.bezierCurveTo(187.809, 38.862, 182.555, 46.030, 177.220, 51.220);
    context.bezierCurveTo(169.311, 58.915, 160.813, 63.008, 160.220, 62.220);
    context.bezierCurveTo(159.722, 61.559, 165.722, 57.062, 169.220, 50.220);
    context.bezierCurveTo(171.740, 45.290, 173.007, 39.914, 173.220, 34.22);
    context.bezierCurveTo(168.051, 41.578, 162.030, 48.279, 155.220, 54.220);
    context.bezierCurveTo(148.533, 60.053, 140.611, 65.435, 131.220, 70.220);
    context.bezierCurveTo(91.916, 90.248, 37.788, 90.431, 37.220, 86.220);
    context.bezierCurveTo(37.001, 84.597, 46.338, 82.621, 54.220, 75.220);
    context.bezierCurveTo(57.399, 72.236, 60.935, 68.147, 60.220, 67.220);
    context.bezierCurveTo(59.445, 66.215, 47.255, 72.778, 46.220, 73.220);
    context.bezierCurveTo(36.147, 77.520, 25.550, 79.921, 15.220, 80.220);
    context.bezierCurveTo(10.179, 80.366, 5.172, 80.028, 0.220, 79.220);
    context.restore();
    context.closePath();
    context.stroke();
    context.fill();
    context.restore();

    context.translate(0, 13);
    context.save();
    context.beginPath();
    context.translate(66.7, 21.67);
    context.moveTo(1.330, 121.330);
    context.bezierCurveTo(-0.885, 99.730, 2.559, 78.707, 12.330, 60.330);
    context.bezierCurveTo(32.636, 22.139, 79.102, 2, 134.330, 2);

    context.restore();
    context.save();
    context.translate(333.3, 21.67);
    context.scale(-1, 1);
    context.bezierCurveTo(79.102, 2, 32.636, 22.139, 12.330, 60.330);
    context.bezierCurveTo(2.559, 78.707, -0.885, 99.730, 1.330, 121.330);
    context.restore();
    context.save();
    context.translate(65.65, 27.02);
    context.bezierCurveTo(265.833, 88.472, 254.631, 62.907, 235.980, 42.980);
    context.bezierCurveTo(207.539, 12.594, 166.737, 4, 135.132, 4);
    context.restore();
    context.save();
    context.translate(334.35, 27.02);
    context.scale(-1, 1);
    context.bezierCurveTo(166.737, 4, 207.539, 12.594, 235.980, 42.980);
    context.bezierCurveTo(254.631, 62.907, 265.833, 88.472, 266.32, 115.98);

    context.restore();
    context.stroke();
    context.fill();
    context.translate(0, -13);


    context.save();
    context.translate(353, 75);
    context.beginPath();
    context.fillStyle = "#d852b7";
    context.moveTo(2.340, 46.340);
    context.lineTo(20.340, 13.340);
    context.lineTo(27.340, 12.340);
    context.lineTo(13.340, 84.340);
    context.lineTo(2.340, 56.340);
    context.closePath();
    context.fill();

    context.restore();
    context.fillStyle = "White";
    context.save();

    context.beginPath();
    context.translate(320, 105);
    context.moveTo(0.980, 136.980);
    context.bezierCurveTo(7.859, 111.807, 11.553, 86.015, 11.980, 59.980);
    context.bezierCurveTo(12.282, 41.556, 10.945, 23.194, 7.980, 4.980);
    context.lineTo(22.980, 0.980);
    context.bezierCurveTo(36.818, 12.388, 54.899, 37.042, 43.980, 70.980);
    context.lineTo(14.980, 134.980);
    context.lineTo(14.980, 134.980);
    context.closePath();
    context.fill();

    context.restore();
    context.save();
    context.translate(264, 257);
    context.beginPath();
    context.save();
    context.rotate(-Math.PI * 10 / 360);
    context.fillStyle = "#d852b7";
    context.moveTo(4.980, 0.980);
    context.lineTo(43.980, 8.980);
    context.lineTo(37.980, 26.980);
    context.lineTo(1.980, 4.980);
    context.closePath();
    context.fill();
    context.restore();
    context.translate(0, 38);
    context.beginPath();
    context.fillStyle = "#d852b7";
    context.moveTo(1.980, 0.980);
    context.lineTo(38.980, 31.980);
    context.lineTo(22.980, 45.980);
    context.lineTo(0.980, 7.980);
    context.closePath();
    context.fill();
    context.restore();

    context.translate(400, 0);
    context.scale(-1, 1);
    context.save();
    context.translate(353, 75);
    context.beginPath();
    context.fillStyle = "#d852b7";
    context.moveTo(2.340, 46.340);
    context.lineTo(20.340, 13.340);
    context.lineTo(27.340, 12.340);
    context.lineTo(13.340, 84.340);
    context.lineTo(2.340, 56.340);
    context.closePath();
    context.fill();

    context.restore();
    context.fillStyle = "White";
    context.save();

    context.beginPath();
    context.translate(320, 105);
    context.moveTo(0.980, 136.980);
    context.bezierCurveTo(7.859, 111.807, 11.553, 86.015, 11.980, 59.980);
    context.bezierCurveTo(12.282, 41.556, 10.945, 23.194, 7.980, 4.980);
    context.lineTo(22.980, 0.980);
    context.bezierCurveTo(36.818, 12.388, 54.899, 37.042, 43.980, 70.980);
    context.lineTo(14.980, 134.980);
    context.lineTo(14.980, 134.980);
    context.closePath();
    context.fill();

    context.restore();
    context.save();
    context.translate(264, 257);
    context.beginPath();
    context.save();
    context.rotate(-Math.PI * 10 / 360);
    context.fillStyle = "#d852b7";
    context.moveTo(4.980, 0.980);
    context.lineTo(43.980, 8.980);
    context.lineTo(37.980, 26.980);
    context.lineTo(1.980, 4.980);
    context.closePath();
    context.fill();
    context.restore();
    context.translate(0, 38);
    context.beginPath();
    context.fillStyle = "#d852b7";
    context.moveTo(1.980, 0.980);
    context.lineTo(38.980, 31.980);
    context.lineTo(22.980, 45.980);
    context.lineTo(0.980, 7.980);
    context.closePath();
    context.fill();
    context.restore();
    window.requestAnimationFrame(draw);
}
draw();