/**
 * Starter file for 02-08-01.js - the only exercise of page 8 of Workbook 2
 */


// @ts-check
export {};
// Find the canvas and start!
let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("box2canvas"));
let context = canvas.getContext('2d');
let content = document.getElementById('fireworkcontent');
let spark = []; // after boom
// x,y, vx, vy, color, fade
let fireworks = []; // before boom
// x, y, vx,vy,goal_x, goal_y
let colors = ["Crimson", "Pink", "Violet", "Purple", "SlateBlue", "RoyalBlue", "DeepSkyBlue", "Aqua", "SpringGreen",
    "ForestGreen", "Yellow", "Gold", "Coral", "DarkOrange", "OliveDrab", "LightSeaGreen", "MediumOrchid", "PaleVioletRed",
    "Turquoise", "Orange"
]
let color_num = 20;
let rgbcolor = [{
        "r": 220,
        "g": 20,
        "b": 60,
    }, {
        "r": 255,
        "g": 192,
        "b": 203,
    }, {
        "r": 238,
        "g": 130,
        "b": 238,
    }, {
        "r": 128,
        "g": 0,
        "b": 128,
    },
    {
        "r": 106,
        "g": 90,
        "b": 205,
    }, {
        "r": 65,
        "g": 105,
        "b": 225
    }, {
        "r": 0,
        "g": 191,
        "b": 255,
    }, {
        "r": 0,
        "g": 255,
        "b": 255,
    },
    {
        "r": 60,
        "g": 179,
        "b": 113,
    }, {
        "r": 34,
        "g": 139,
        "b": 34,
    }, {
        "r": 255,
        "g": 255,
        "b": 0,
    }, {
        "r": 255,
        "g": 215,
        "b": 0,
    },
    {
        "r": 255,
        "g": 127,
        "b": 80,
    }, {
        "r": 255,
        "g": 140,
        "b": 0,
    },
    {
        "r": 85,
        "g": 107,
        "b": 47,
    },
    {
        "r": 32,
        "g": 178,
        "b": 170,
    },
    {
        "r": 186,
        "g": 85,
        "b": 211,
    },
    {
        "r": 219,
        "g": 112,
        "b": 147,
    },
    {
        "r": 64,
        "g": 224,
        "b": 208,
    },
    {
        "r": 255,
        "g": 165,
        "b": 0,
    }
];

let mouseX = -10;
let mouseY = -10;
let mouseDf = 0;
canvas.onmousemove = function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    // unfortunately, X,Y is relative to the overall window -
    // we need the X,Y inside the canvas!
    // we know that event.target is a HTMLCanvasElement, so tell typescript
    let box = /** @type {HTMLCanvasElement} */ (event.target).getBoundingClientRect();
    mouseX -= box.left;
    mouseY -= box.top;
    mouseDf = 0;
};
canvas.onmousedown = function () {
    mouseDf = 1;
};
canvas.onmouseup = function () {
    mouseDf = 0;
};
canvas.onmouseleave = function () {
    mouseX = -10;
    mouseY = -10;
    mouseDf = 0;
};

function animate() {
    // clear the canvas
    const contentWidth = content.clientWidth;
    canvas.width = contentWidth;
    canvas.height = canvas.width / 6 * 4;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "Black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    let random = Math.random() * 100;
    if (Math.round(random % 100) == 3) {
        let X = Math.random() * 800 % canvas.width;
        let Y = Math.random() * 800 % canvas.height;
        let randomx = Math.random() * 800 % canvas.width;
        let t = 60;
        let Vx = Number(X - randomx) / t;
        let A = -0.3;
        let Vy = Number(canvas.height - Y - 0.5 * A * t * t) / t;
        let col_id = Math.round(Math.random() * 100) % color_num;
        let R = 5 + (Math.random() * 100 % 7);
        fireworks.push({
            "x": randomx,
            "y": Number(canvas.height),
            "goal_x": X,
            "goal_y": Y,
            "vx": Vx,
            "vy": Vy,
            "r": R,
            "a": A,
            "color": colors[col_id],
            "colorid": col_id
        });
    }
    if (mouseDf) //generate new firework
    {
        let randomx = Math.random() * 800 % canvas.width;
        let t = 60;
        let Vx = Number(mouseX - randomx) / t;
        let A = -0.3;
        let Vy = Number(canvas.height - mouseY - 0.5 * A * t * t) / t;
        let col_id = Math.round(Math.random() * 100) % color_num;
        let R = 5 + Math.random() * 100 % 7;
        fireworks.push({
            "x": randomx,
            "y": Number(canvas.height),
            "goal_x": mouseX,
            "goal_y": mouseY,
            "vx": Vx,
            "vy": Vy,
            "r": R,
            "color": colors[col_id],
            "a": A,
            "colorid": col_id
        });
    }
    spark.forEach(function (cir) {
        context.beginPath();
        context.fillStyle = `rgba(${rgbcolor[cir.colorid].r},${rgbcolor[cir.colorid].g},${rgbcolor[cir.colorid].b},${cir.fade})`;
        context.arc(cir.x, cir.y, cir.r, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        cir.x -= cir.vx;
        cir.y -= cir.vy;
        cir.fade -= 0.01;

    });
    spark = spark.filter(
        cir => ((cir.fade > 0) && (cir.y > 0) && (cir.x > 0) && (cir.x < canvas.width) && (cir.y < canvas.height))
    );
    fireworks.forEach(function (cir) {
        context.beginPath();
        context.fillStyle = cir.color;
        context.arc(cir.x, cir.y, cir.r, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
        cir.x = cir.x + cir.vx;
        cir.y = cir.y - cir.vy;
        cir.vy += cir.a;
        if (cir.x > cir.goal_x && Number(cir.vx > 0)) cir.x = cir.goal_x, cir.vx = 0;
        else if (cir.x < cir.goal_x && Number(cir.vx < 0)) cir.x = cir.goal_x, cir.vx = 0;
        if (cir.y > cir.goal_y && Number(cir.vy < 0)) cir.y = cir.goal_y, cir.vy = 0;
        if (cir.x == cir.goal_x && cir.y == cir.goal_y) // spark
        {
            for (let i = 1; i <= 50; i++) {
                let Vx = (Math.random() - 0.5) * 5;
                let Vy = (Math.random() - 0.5) * 5;
                spark.push({
                    "x": cir.x,
                    "y": cir.y,
                    "vx": Vx,
                    "vy": Vy,
                    "r": cir.r / 3.6,
                    "color": cir.color,
                    "fade": 1.0,
                    "colorid": cir.colorid
                });
            }

        }

    });
    fireworks = fireworks.filter(
        cir => ((cir.x != cir.goal_x) || (cir.y != cir.goal_y))
    );
    window.requestAnimationFrame(animate);

}
animate();

// window.onresize = function () {

//     animate();
// }
// content.onchange = function () {
//     animate();
// }