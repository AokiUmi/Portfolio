/*jshint esversion: 6 */

// these two things are the main UI code for the train
// students learned about them in last week's workbook

import {
  draggablePoints
} from "../js/helper/dragPoints.js";
import {
  RunCanvas
} from "../js/helper/runCanvas.js";

// this is a utility that adds a checkbox to the page
// useful for turning features on and off
import {
  makeCheckbox
} from "../js/helper/inputHelpers.js";

/**
 * Have the array of control points for the track be a
 * "global" (to the module) variable
 *
 * Note: the control points are stored as Arrays of 2 numbers, rather than
 * as "objects" with an x,y. Because we require a Cardinal Spline (interpolating)
 * the track is defined by a list of points.
 *
 * things are set up with an initial track
 */
/** @type Array<number[]> */
let presize = 600;
let thePoints = [
  [150, 150],
  [150, 450],
  [450, 450],
  [450, 150],
];
let derivative = [];
let circle_point = [];
let num = thePoints.length;
class Vector {
  /**
   * @param {number} x    - initial X position
   * @param {number} y    - initial Y position
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  /**
   * @param {Vector} vector2
   */
  add(vector2) {
    let ans = new Vector(this.x + vector2.x, this.y + vector2.y);
    return ans;
  }

  minus(vector2) {
    let ans = new Vector(this.x - vector2.x, this.y - vector2.y);
    return ans;
  }

  /**
   * @param {number} a
   */
  divide(a) {
    this.x /= a;
    this.y /= a;
  }
  multiply(a) {
    this.x *= a;
    this.y *= a;
    return this;
  }

}
/**
 * Draw function - this is the meat of the operation
 *
 * It's the main thing that needs to be changed
 *
 * @param {HTMLCanvasElement} canvas
 * @param {number} param
 */

// let simpletrack = ( /** @type{HTMLInputElement} */ document.getElementById("check-simple-track"));
// let arc = ( /** @type{HTMLInputElement} */ document.getElementById("check-arc-length"));

function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}
let sum_length = 0;

function resize_points() {
  for (let i of thePoints) {
    i[0] = i[0] / presize * canvas.width;
    i[1] = i[1] / presize * canvas.height;
  }
}

function init() {
  circle_point = [];
  arc_length = [];
  derivative = [];
  sum_length = 0;
  for (let i = 0; i < thePoints.length; i++)
    circle_point.push(new Vector(thePoints[i][0], thePoints[i][1]));
  circle_point.push(circle_point[0]);
  let num = thePoints.length;
  for (let i = 0; i < num; i++) {
    if (i == 0)
      derivative.push(circle_point[1].minus(circle_point[num - 1]).multiply((1 - Number(tension.value)) / 2));
    else
      derivative.push(circle_point[i + 1].minus(circle_point[i - 1]).multiply((1 - Number(tension.value)) / 2));

  }
  derivative.push(derivative[0]);

}
let flowers = [];
let last_length = 0;

function draw(canvas, param) {
  let context = canvas.getContext("2d");
  // clear the screen
  const contentWidth = content.clientWidth;
  if (contentWidth != 0) {
    canvas.width = contentWidth;
    canvas.height = canvas.width;

  }

  if (canvas.width != presize)
    resize_points();
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#2E8B57";
  context.fillRect(0, 0, canvas.width, canvas.height);

  // draw the control points

  thePoints.forEach(function (pt) {
    context.fillStyle = "#FFE4E1";
    context.beginPath();

    context.arc(pt[0], pt[1], 5, 0, Math.PI * 2);
    context.closePath();
    context.fill();
  });
  init();
  arc_length_parameterization();
  if (last_length != sum_length)
    change_rand();
  else if (last_length == 0)
    init_rand(30);
  draw_background(context);
  if (document.getElementById("check-simple-track").checked)
    draw_simple_track(context);
  else draw_parallel_rails(context);
  draw_train(context, param);
  last_length = sum_length;
  presize = canvas.width;
  // now, the student should add code to draw the track and train
}
let smoke = [];

function draw_flower(context, color) {
  context.save();
  context.beginPath();
  context.fillStyle = color;
  context.arc(0, -10, 10, 0, Math.PI * 2);
  context.fill();
  context.rotate(Math.PI * 2 * 72 / 360);
  context.beginPath();
  context.fillStyle = color;
  context.arc(0, -10, 10, 0, Math.PI * 2);
  context.fill();
  context.rotate(Math.PI * 2 * 72 / 360);
  context.beginPath();
  context.fillStyle = color;
  context.arc(0, -10, 10, 0, Math.PI * 2);
  context.fill();
  context.rotate(Math.PI * 2 * 72 / 360);
  context.beginPath();
  context.fillStyle = color;
  context.arc(0, -10, 10, 0, Math.PI * 2);
  context.fill();
  context.rotate(Math.PI * 2 * 72 / 360);
  context.beginPath();
  context.fillStyle = color;
  context.arc(0, -10, 10, 0, Math.PI * 2);
  context.fill();
  context.beginPath();
  context.fillStyle = "#FFFFFF";
  context.arc(0, 0, 5, 0, Math.PI * 2);
  context.fill();
  context.restore();
}
let rand = [];

function check(x, y) {
  let num = thePoints.length;
  for (let i = 0; i < num; i++) {
    let id0 = i,
      id1 = i + 1;
    for (let u = 0; u <= 1; u += 0.1) {
      let [x1, y1] = bezier_position(u, id0, id1);
      if (distance(x, y, x1, y1) <= 50)
        return 1;
    }
  }

  return 0;

}

function change_rand() {
  flowers = flowers.filter(
    i => (!check(i[0], i[1]))
  );
  if (flowers.length <= 22)
    init_rand(4);
}

function init_rand(x) {
  let num = 10 + Math.round(Math.random() * 1000 % x);
  for (let i = 0; i < num; i++) {
    let x = Math.random() * 10000 % canvas.width;
    let y = Math.random() * 10000 % canvas.height;
    if (!check(x, y))
      flowers.push([x, y]);
  }

}

function draw_background(context) {
  for (let i = 0; i < flowers.length; i++) {
    context.save();
    context.translate(flowers[i][0], flowers[i][1]);
    if (Math.round(i % 3) == 1) {
      context.scale(1.5, 1.5);
      context.rotate(90);
      draw_flower(context, "#FFA54F");
    } else if (Math.round(i % 3) == 2) {
      context.scale(2, 2);
      context.rotate(-90);
      draw_flower(context, "#FFB5C5");
    } else draw_flower(context, "#BA55D3");
    context.restore();
  }


}

function bezier_position(u, id0, id1) {
  let p0 = circle_point[id0],
    p1 = circle_point[id1];
  let p0_d = derivative[id0],
    p1_d = derivative[id1];
  let x = p0.x + p0_d.x * u + (3 * p1.x - 3 * p0.x - 2 * p0_d.x - p1_d.x) * u * u +
    (2 * p0.x + p0_d.x - 2 * p1.x + p1_d.x) * u * u * u;
  let y = p0.y + p0_d.y * u + (3 * p1.y - 3 * p0.y - 2 * p0_d.y - p1_d.y) * u * u +
    (2 * p0.y + p0_d.y - 2 * p1.y + p1_d.y) * u * u * u;
  return [x, y];
}

function bezier_derivative(u, id0, id1) {
  let p0 = circle_point[id0],
    p1 = circle_point[id1];
  let p0_d = derivative[id0],
    p1_d = derivative[id1];
  let dx = p0_d.x + 2 * (3 * p1.x - 3 * p0.x - 2 * p0_d.x - p1_d.x) * u +
    3 * (2 * p0.x + p0_d.x - 2 * p1.x + p1_d.x) * u * u;
  let dy = p0_d.y + 2 * (3 * p1.y - 3 * p0.y - 2 * p0_d.y - p1_d.y) * u +
    3 * (2 * p0.y + p0_d.y - 2 * p1.y + p1_d.y) * u * u;
  return [dx, dy];
}

function draw_smoke(context) {
  for (let i of smoke) {
    context.fillStyle = `rgba(190,190,190,${i.fade})`;
    context.beginPath();
    context.arc(i.x, i.y, i.r, 0, Math.PI * 2);
    context.closePath();
    context.fill();
  }

}

function draw_parallel_rails(context) {
  let rail = [];
  for (let i = 0; i <= sum_length; i += 5) {
    let u = find_newu(i);
    rail.push(u);
  }
  let num = thePoints.length
  rail.push(num);

  let prex, prey, prestepx, prestepy;
  for (let u of rail) {
    let id0, id1;
    if (u == num) {
      id0 = num - 1;
      id1 = (id0 + 1);
    } else {
      id0 = Math.floor(u);
      id1 = (id0 + 1);
    }

    u -= id0;
    let [x, y] = bezier_position(u, id0, id1);
    let [dx, dy] = bezier_derivative(u, id0, id1);
    let tmp = Math.sqrt(dx ** 2 + dy ** 2);
    dx /= tmp, dy /= tmp;
    let theta = Math.atan2(-dy, dx);
    let stepx = Math.sin(theta),
      stepy = Math.cos(theta);
    if (prex != undefined && prex != x) {

      context.lineWidth = 1;
      context.strokeStyle = "#FFE4E1";
      context.beginPath();
      context.moveTo(prex + 6 * prestepx, prey + 6 * prestepy);
      context.lineTo(x + 6 * stepx, y + 6 * stepy);
      context.moveTo(prex - 6 * prestepx, prey - 6 * prestepy);
      context.lineTo(x - 6 * stepx, y - 6 * stepy);
      context.moveTo(prex + 10 * prestepx, prey + 10 * prestepy);
      context.lineTo(x + 10 * stepx, y + 10 * stepy);
      context.moveTo(prex - 10 * prestepx, prey - 10 * prestepy);
      context.lineTo(x - 10 * stepx, y - 10 * stepy);
      context.closePath();
      context.stroke();



    }
    prex = x, prey = y;
    prestepx = stepx, prestepy = stepy;

  }
  for (let i = 0; i <= sum_length; i += 20) {
    let u = find_newu(i);
    let id0 = Math.floor(u);
    let id1 = (id0 + 1);
    u -= id0;
    let [x, y] = bezier_position(u, id0, id1);
    let [dx, dy] = bezier_derivative(u, id0, id1);
    let tmp = Math.sqrt(dx ** 2 + dy ** 2);
    dx /= tmp, dy /= tmp;
    let theta = Math.atan2(-dy, dx);
    let stepx = Math.sin(theta),
      stepy = Math.cos(theta);
    context.lineWidth = 4;
    if (Math.round((i / 2) % 3) == 1)
      context.strokeStyle = "	#4876FF";
    else if (Math.round((i / 2) % 3) == 2)
      context.strokeStyle = "#FF82AB";
    else context.strokeStyle = "#8A2BE2";
    context.beginPath();
    context.moveTo(x + 10 * stepx, y + 10 * stepy);
    context.lineTo(x - 10 * stepx, y - 10 * stepy);
    context.closePath();
    context.stroke();
  }

}

function draw_simple_track(context) {
  let num = thePoints.length;
  context.strokeStyle = "#FFE4E1";
  context.lineWidth = 3;
  context.beginPath();
  context.moveTo(thePoints[0][0], thePoints[0][1]);
  for (let i = 0; i < num; i++)
    context.bezierCurveTo(
      circle_point[i].x + (1 / 3) * derivative[i].x,
      circle_point[i].y + (1 / 3) * derivative[i].y,
      circle_point[i + 1].x - (1 / 3) * derivative[i + 1].x,
      circle_point[i + 1].y - (1 / 3) * derivative[i + 1].y,
      circle_point[i + 1].x,
      circle_point[i + 1].y
    );
  context.closePath();
  context.stroke();


}

function train(context) {
  context.fillStyle = "rgba(255,255,255, 0.4)";
  context.beginPath();
  context.moveTo(-2, -20);
  context.lineTo(2, -20);
  context.lineTo(20, -60);
  context.lineTo(-20, -60);
  context.closePath();
  context.fill();
  context.fillStyle = "	#FF7F00";
  context.strokeStyle = "	#696969";
  context.lineWidth = 2.5;
  context.beginPath();
  context.moveTo(-12, 30);
  context.lineTo(12, 30);
  context.lineTo(12, -20);
  context.lineTo(-12, -20);
  context.closePath();
  context.fill();
  context.stroke();
  context.fillStyle = "#8B2500";
  context.beginPath();
  context.moveTo(-15, -15);
  context.lineTo(15, -15);
  context.lineTo(15, -20);
  context.lineTo(-15, -20);
  context.closePath();
  context.fill();

}
let last = 0,
  lastx = 0,
  lasty = 0,
  flag = 0;

function change_smoke() {
  for (let i of smoke) {
    i.fade -= 0.05;
    i.r += 2;
  }
  smoke = smoke.filter(
    i => (i.fade > 0)
  );
}

function smoke_fade() {
  for (let i of smoke) {
    i.fade -= 0.01;
  }
  smoke = smoke.filter(
    i => (i.fade > 0)
  );
}
let arc_length = [];

function calculate_arc_lengh(id0, id1, predis) {
  let p0 = circle_point[id0],
    p1 = circle_point[id1];
  let p0_d = derivative[id0],
    p1_d = derivative[id1];
  let prex, prey;
  for (let u = 0; u <= 1; u += 0.02) {
    let [x, y] = bezier_position(u, id0, id1);
    if (prex == undefined) {
      prex = x, prey = y;
      arc_length.push({
        "u": id0,
        "arclength": predis
      });
    } else {
      predis += distance(x, y, prex, prey);
      arc_length.push({
        "u": u + id0,
        "arclength": predis
      });
      prex = x, prey = y;
    }
  }
  return predis;
}

function arc_length_parameterization() {
  let num = thePoints.length;
  let sumdis = 0;
  for (let i = 0; i < num; i++)
    sumdis = calculate_arc_lengh(i, i + 1, sumdis);
  sum_length = sumdis;
}

function find_newu(length) {
  let id = 0,
    prelength;
  let i;
  for (i = 0; i < arc_length.length; i++) {
    if (arc_length[i].arclength > length)
      break;

  }
  id = i - 1;
  prelength = arc_length[id].arclength;
  if (prelength == length)
    return arc_length[id].u;
  else
    return arc_length[id].u + ((length - prelength) / (arc_length[id + 1].arclength - prelength)) * (arc_length[id + 1].u - arc_length[id].u);

}

function refind(pre_u) {
  let num = thePoints.length;
  let length = pre_u / num * sum_length;
  return find_newu(length);
}

function draw_multiply_train(dis, context) {
  for (let i = 1; i <= 4; i++) {
    let tmp_dis = dis - i * 58;
    if (tmp_dis < 0) tmp_dis += sum_length;
    let u = find_newu(tmp_dis);
    let id0, id1;
    if (u != num) id0 = Math.floor(u), u -= id0;
    else id0 = num - 1, u -= id0;
    id1 = id0 + 1;
    let [x, y] = bezier_position(u, id0, id1);
    let [dx, dy] = bezier_derivative(u, id0, id1);
    let theta = Math.PI / 2 - Math.atan2(-dy, dx);
    context.save();
    context.translate(x, y);
    context.rotate(theta);
    draw_diff_train(context, i)
    context.restore();
  }

}

function draw_diff_train(context, i) {
  context.fillStyle = "#FFDEAD";
  context.beginPath();
  context.arc(0, -25, 5, 0, Math.PI * 2);
  context.closePath();
  context.fill();
  if (i == 1)
    context.fillStyle = "	#FF6347";
  else if (i == 2)
    context.fillStyle = "#4876FF";
  else if (i == 3)
    context.fillStyle = "#D15FEE";
  else context.fillStyle = "#A2B5CD";
  context.strokeStyle = "	#696969";
  context.lineWidth = 2.5;
  context.beginPath();
  context.moveTo(-12, 30);
  context.lineTo(12, 30);
  context.lineTo(12, -20);
  context.lineTo(-12, -20);
  context.closePath();
  context.stroke();
  context.fill();

}

function draw_train(context, param) {
  let u = param;
  let now_dis = u / thePoints.length * sum_length;
  if (document.getElementById("check-arc-length").checked) {
    u = refind(param);
  }
  let id0, id1;
  let num = thePoints.length;
  if (u == num) {
    id0 = num - 1;
    id1 = (id0 + 1);
  } else {
    id0 = Math.floor(u);
    id1 = (id0 + 1);
  }
  u -= id0;
  let [x, y] = bezier_position(u, id0, id1);
  let [dx, dy] = bezier_derivative(u, id0, id1);
  let theta = Math.PI / 2 - Math.atan2(-dy, dx);

  context.save();
  context.translate(x, y);
  context.rotate(theta);
  train(context);
  context.restore();
  if (document.getElementById("check-arc-length").checked)
    draw_multiply_train(now_dis, context);
  if (last == 0 && flag == 0) {
    smoke.push({
      "x": x,
      "y": y,
      "r": 4,
      "fade": 0.8,
    });
    lastx = x, lasty = y;
    flag = 1;
  }
  if (lastx != x && lasty != y) {
    smoke.push({
      "x": x,
      "y": y,
      "r": 8,
      "fade": 0.8,
    });
    draw_smoke(context);
    change_smoke();
    lastx = x, lasty = y;
  } else {
    draw_smoke(context);
    smoke_fade();
  }


  last = u;




}
/**
 * Initialization code - sets up the UI and start the train
 */
let canvas = /** @type {HTMLCanvasElement} */ (
  document.getElementById("canvas2")
);
let tension = /** @type {HTMLCanvasElement} */ (
  document.getElementById("tension")
);
let context = canvas.getContext("2d");
let content = document.getElementById('traincontent');
// we need the slider for the draw function, but we need the draw function
// to create the slider - so create a variable and we'll change it later
let slider; // = undefined;

// note: we wrap the draw call so we can pass the right arguments
function wrapDraw() {
  // do modular arithmetic since the end of the track should be the beginning
  draw(canvas, Number(slider.value) % thePoints.length);
  if (!content.clientWidth)
    window.requestAnimationFrame(wrapDraw);
}
// create a UI
let runcanvas = new RunCanvas(canvas, wrapDraw);
// now we can connect the draw function correctly
slider = runcanvas.range;

// note: if you add these features, uncomment the lines for the checkboxes
// in your code, you can test if the checkbox is checked by something like:
// document.getElementById("check-simple-track").checked
// in your drawing code
// WARNING: makeCheckbox adds a "check-" to the id of the checkboxes
//
// lines to uncomment to make checkboxes

//makeCheckbox("bspline");

let simple = /** @type {HTMLCanvasElement} */ (
  document.getElementById("check-simple-track")
);
let arc = /** @type {HTMLCanvasElement} */ (
  document.getElementById("check-arc-length")
);
simple.onchange = function () {
  wrapDraw();
}
arc.onchange = function () {
  wrapDraw();
}
tension.onchange = function () {
  wrapDraw();

}
window.onresize = function () {

  wrapDraw();
}
content.onchange = function () {
  wrapDraw();
}

// helper function - set the slider to have max = # of control points
function setNumPoints() {
  runcanvas.setupSlider(0, thePoints.length, 0.05);
}
setNumPoints();
runcanvas.setValue(0);
// add the point dragging UI

draggablePoints(canvas, thePoints, wrapDraw, 10, setNumPoints);