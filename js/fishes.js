/**
 * 04-05-01.js - a simple JavaScript file that gets loaded with
 * page 5 of Workbook 4 (CS559).
 *
 * written by Michael Gleicher, January 2019
 * modified January 2020, February 2021
 *
 */

/**
 * If you want to read up on JavaScript classes, 
 * see the tutorial on the class website:
 * 
 * https://cs559.github.io/559Tutorials/javascript/oop-in-js-1/
 */

function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}
let neighbor_dis = 20;
let limit = 18;
let flockspeed = 1;
let STEERINGFORCE = 0.04;
let ALIGNFORCE = 0.03;
let GOALFORCE = 0.05;
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
    normalize() {
        let tmp = Math.sqrt(this.x * this.x + this.y * this.y);
        this.x /= tmp;
        this.y /= tmp;
    }
    /**
     * @param {Vector} vector2
     */
    dotmul(vector2) {
        return this.x * vector2.x + this.y * vector2.y;
    }
    distance(vector2) {
        return Math.sqrt(Math.pow(this.x - vector2.x, 2) + Math.pow(this.y - vector2.y, 2));
    }
    value() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    equal(vector2) {
        this.x = vector2.x;
        this.y = vector2.y;
    }
}
let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("flock"));
let context = canvas.getContext("2d");
let content = document.getElementById('fishcontent');
let speedSlider = /** @type {HTMLInputElement} */ (document.getElementById("speed"));
let size_factor = /** @type {HTMLInputElement} */ (document.getElementById("size"));
let mouseX = -10;
let mouseY = -10;
canvas.onmousemove = function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    // unfortunately, X,Y is relative to the overall window -
    // we need the X,Y inside the canvas!
    // we know that event.target is a HTMLCanvasElement, so tell typescript
    let box = /** @type {HTMLCanvasElement} */ (event.target).getBoundingClientRect();
    mouseX -= box.left;
    mouseY -= box.top;

};

function getangle(vector) {
    let angle = 0;
    if (vector.y < 0)

        angle = Math.atan2(-vector.y, vector.x);
    else angle = Math.atan2(vector.y, vector.x);
    if (angle > 0)
        return angle;
    else return Math.PI - angle;

}
class Boid {
    /**
     * 
     * @param {number} x    - initial X position
     * @param {number} y    - initial Y position
     * @param {number} vx   - initial X velocity
     * @param {number} vy   - initial Y velocity
     * @param {number} ifchange   - initial Y velocity
     * @param {number} maxspeed   - initial Y velocity
     * @param {Vector} velocity  - initial Y velocity
     * @param {Vector} steering   - initial Y velocity
     * @param {number} maxforce   - initial Y velocity
     */
    constructor(x, y, vx = 1, vy = 0) {
        this.x = x;
        this.y = y;
        this.velocity = new Vector(vx, vy);
        this.ifchange = 0;
        this.maxspeed = 1;
        this.steering = new Vector(0, 0);
        this.maxforce = 2;
        this.vx = this.maxspeed * this.velocity.x;
        this.vy = this.maxspeed * this.velocity.y;
    }
    /**
     * Draw the Boid
     * @param {CanvasRenderingContext2D} context 
     */
    normalize() {
        this.velocity = new Vector(this.vx, this.vy);

    }
    draw(context) {
        context.save();
        context.translate(this.x, this.y);
        if (this.ifchange > 0)
            context.fillStyle = "Red", this.ifchange--;
        else
            context.fillStyle = "Orange";
        if (this.vx == 0) {
            if (this.vy > 0)
                context.rotate(Math.PI);
        } else {
            if (this.vx < 0 && this.vy <= 0)
                context.rotate(-Math.PI / 2 + Math.atan(-this.vy / -this.vx));
            else if (this.vx > 0 && this.vy <= 0)
                context.rotate(Math.PI / 2 - Math.atan(-this.vy / this.vx));
            else if (this.vx < 0 && this.vy > 0)
                context.rotate(-Math.PI / 2 - Math.atan(this.vy / -this.vx));
            else
                context.rotate(Math.PI / 2 + Math.atan(this.vy / this.vx));
        }

        //context.rotate(Math.PI);

        context.beginPath();
        context.moveTo(0, -8);
        context.lineTo(6, 8);
        context.lineTo(0, 3);
        context.lineTo(-6, 8);
        context.closePath();
        context.fill();
        context.restore();
    }
    /**
     * Perform the "steering" behavior -
     * This function should update the velocity based on the other
     * members of the flock.
     * It is passed the entire flock (an array of Boids) - that includes
     * "this"!
     * Note: dealing with the boundaries does not need to be handled here
     * (in fact it can't be, since there is no awareness of the canvas)
     * *
     * And remember, (vx,vy) should always be a unit vector!
     * @param {Array<Boid>} flock 
     * @param {number} delta 
     */
    steer(flock) {
        /*
		 Note - this sample behavior is just to help you understand
		 what a steering function might  do
		 all this one does is have things go in circles, rather than
		 straight lines
		 Something this simple would not count for the advanced points:
		 a "real" steering behavior must consider other boids,
		 or at least obstacles.
		
         a simple steering behavior: 
         create a rotation matrix that turns by a small amount
         2 degrees per time step
        
        */
        let Distance = 0.0;
        let center = new Vector(this.x, this.y);
        let speed = new Vector(this.vx, this.vy);
        let avoid = new Vector(0, 0);
        let size = 0;
        let gospeed = 0.1;
        for (let go of flock)
            if (go.x != this.x && go.y != this.y) {
                Distance = distance(this.x, this.y, go.x, go.y);
                if (Distance <= neighbor_dis) {
                    size++;
                    center = center.add(new Vector(go.x, go.y));
                    speed = speed.add(new Vector(go.vx, go.vy));


                }
                if (Distance < limit)
                    avoid = avoid.add(new Vector(this.x - go.x, this.y - go.y));
            }
        if (size > 0) {
            if (document.getElementById("cohesion").checked) {
                // Cohesion Rule:
                center.divide(size);
                if (distance(center.x, center.y, this.x, this.y) > 4) {
                    let tmp = center.minus(new Vector(this.x, this.y));
                    tmp.normalize();
                    tmp.multiply(STEERINGFORCE);
                    this.steering = this.steering.add(tmp);
                }


            }

            if (document.getElementById("alignment").checked) {
                // Alignment Rule:
                speed.divide(size);
                //speed=speed.multiply(ALIGNFORCE);
                let tmp = speed.minus(this.velocity);
                tmp = tmp.multiply(ALIGNFORCE);
                this.steering = this.steering.add(tmp);
            }
        }


        if (document.getElementById("attraction").checked && mouseX != -10 && mouseY != -10) {

            let desired_velocity = new Vector(mouseX - this.x, mouseY - this.y);
            desired_velocity.normalize();
            desired_velocity.multiply(this.maxspeed);
            this.steering = desired_velocity.minus(this.velocity);

        }

        if (this.steering.value() > this.maxforce) {
            this.steering.normalize();
            this.steering = this.steering.multiply(this.maxforce);
        }
        this.velocity = this.velocity.add(this.steering);
        if (this.velocity.value() > this.maxspeed) {
            this.velocity.normalize();
            this.velocity = this.velocity.multiply(this.maxspeed);
        }
        this.vx = this.velocity.x;
        this.vy = this.velocity.y;



    }
}


/** the actual main program
 * this used to be inside of a function definition that window.onload
 * was set to - however, now we use defer for loading
 */

/** @type Array<Boid> */
let boids = [];
let ifbounce = 0;



function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "Blue";
    if (document.getElementById("obstacle").checked) {
        let rectpoint = [{
            "x": 100,
            "y": 300
        }, {
            "x": 400,
            "y": 100
        }, {
            "x": 250,
            "y": 450
        }];
        for (let i = 0; i < rectpoint.length; i++) {
            context.beginPath();
            context.arc(rectpoint[i].x, rectpoint[i].y, 8, 0, Math.PI * 2);
            context.closePath();
            context.fill();
        }
    }
    /*
    for(let i=0;i<rectpoint.length;i++)
        context.fillRect(rectpoint[i].x-8,rectpoint[i].y-8,16,16);
    */
    boids.forEach(boid => boid.draw(context));
}

/**
 * Create some initial boids
 * STUDENT: may want to replace this
 */
boids.push(new Boid(100, 100));
boids.push(new Boid(200, 200, -1, 0));
boids.push(new Boid(300, 300, 0, -1));
boids.push(new Boid(400, 400, 0, 1));

/**
 * Handle the buttons
 */
/**
 * @param {number} y
 * @param {number} x
 */
function ifrect(x, y) {
    let rectpoint = [{
        "x": 100,
        "y": 300
    }, {
        "x": 400,
        "y": 100
    }, {
        "x": 250,
        "y": 450
    }];
    for (let i of rectpoint)
        if (distance(x, y, i.x, i.y) <= 8)
            return 1;
    return 0;

}
document.getElementById("add").onclick = function () {
    // Students Fill This In
    for (let i = 1; i <= 10; i++) {
        let randomx = Math.random() * 800 % canvas.width;
        let randomy = Math.random() * 800 % canvas.height;
        if (document.getElementById("obstacle").checked) {
            while (ifrect(randomx, randomy)) {
                randomx = Math.random() * 800 % canvas.width;
                randomy = Math.random() * 800 % canvas.height;
            }
        }

        let vx = Math.random() * 100 % 1;
        let vy = Math.random() * 100 % 1;
        while (vx == 0 && vy == 0) {
            vx = Math.random() * 100 % 1;
            vy = Math.random() * 100 % 1;
        }
        if (Math.round(Math.random() * 1000 % 3) == 1) vx *= -1;
        if (Math.round(Math.random() * 1000 % 2) == 0) vy *= -1;
        boids.push(new Boid(randomx, randomy, vx, vy));
    }

};
document.getElementById("clear").onclick = function () {
    // Student Fill This In
    boids = [];
};

let lastTime; // will be undefined by default
/**
 * The Actual Execution
 */
/**
 * @param {number} x1
 * @param {number} x2
 * @param {number} y1
 * @param {number} y2
 * @param {Boid} boid
 * 
 */

function get_point(boid) {
    let theta = 0;
    if (boid.vx == 0) {
        if (boid.vy >= 0)
            return {
                "x": boid.x,
                "y": boid.y + 8
            };
        else
            return {
                "x": boid.x,
                "y": boid.y - 8
            };
    }
    if (boid.vx >= 0 && boid.vy >= 0) {
        theta = Math.atan(boid.vy / boid.vx);
        return {
            "x": boid.x + 8 * Math.cos(theta),
            "y": boid.y + 8 * Math.sin(theta)
        };
    } else if (boid.vx >= 0 && boid.vy < 0) {
        theta = Math.atan(-boid.vy / boid.vx);
        return {
            "x": boid.x + 8 * Math.cos(theta),
            "y": boid.y - 8 * Math.sin(theta)
        };
    } else if (boid.vx < 0 && boid.vy >= 0) {
        theta = Math.atan(-boid.vy / boid.vx);
        return {
            "x": boid.x - 8 * Math.cos(theta),
            "y": boid.y + 8 * Math.sin(theta)
        };
    } else if (boid.vx < 0 && boid.vy < 0) {
        theta = Math.atan(boid.vy / boid.vx);
        return {
            "x": boid.x - 8 * Math.cos(theta),
            "y": boid.y - 8 * Math.sin(theta)
        };
    }


}

function bounce() {
    for (let i = 0; i < boids.length; i++)
        for (let j = i + 1; j < boids.length; j++)
            if (distance(boids[i].x, boids[i].y, boids[j].x, boids[j].y) <= 16) {
                if (boids[i].x != boids[j].x) {
                    let k = (boids[i].y - boids[j].y) / (boids[i].x - boids[j].x);
                    let theta = Math.atan(k);
                    let vi = Math.sqrt(Math.pow(boids[i].vx, 2) + Math.pow(boids[i].vy, 2));
                    let vj = Math.sqrt(Math.pow(boids[j].vx, 2) + Math.pow(boids[j].vy, 2));
                    if (boids[i].x <= boids[j].x)
                        boids[i].vx = -vi * Math.abs(Math.cos(theta)), boids[j].vx = vj * Math.abs(Math.cos(theta));
                    else
                        boids[i].vx = vi * Math.abs(Math.cos(theta)), boids[j].vx = -vj * Math.abs(Math.cos(theta));
                    if (boids[i].y <= boids[j].y)
                        boids[i].vy = -vi * Math.abs(Math.sin(theta)), boids[j].vy = vj * Math.abs(Math.sin(theta));
                    else
                        boids[i].vy = vi * Math.abs(Math.sin(theta)), boids[j].vy = -vj * Math.abs(Math.sin(theta));

                } else {

                    if (boids[i].x <= boids[j].x)
                        boids[i].vx = -vi, boids[j].vx = vj;
                    else
                        boids[i].vx = vi, boids[j].vx = -vj;
                }
                boids[i].normalize();
                boids[j].normalize();
                boids[i].ifchange = 5;
                boids[j].ifchange = 5;
            }
}

function loop(timestamp) {
    // time step - convert to 1/60th of a second frames
    // 1000ms / 60fps
    const contentWidth = content.clientWidth;
    canvas.width = contentWidth;
    canvas.height = canvas.width;
    context.clearRect(0, 0, canvas.width, canvas.height);
    const delta = (lastTime ? timestamp - lastTime : 0) * 1000.0 / 60.0;
    let deltasize = Number(size_factor.value);
    neighbor_dis = deltasize;
    // change directions
    boids.forEach(boid => boid.steer(boids));

    // move forward
    let speed = Number(speedSlider.value);
    boids.forEach(function (boid) {
        boid.x += boid.vx * speed / 2;
        boid.y += boid.vy * speed / 2;
    });
    // make sure that we stay on the screen

    if (document.getElementById("ifbounce").checked) {
        ifbounce = 1;
        bounce();
    }




    boids.forEach(function (boid) {


        let tmp_point = get_point(boid);
        if (tmp_point.x <= 0 || tmp_point.x >= canvas.width) {
            boid.vx *= -1, boid.normalize(), boid.ifchange = 5;
            boid.steering.x *= -2;
        }

        if (tmp_point.y <= 0 || tmp_point.y >= canvas.height) {
            boid.vy *= -1, boid.normalize(), boid.ifchange = 5;
            boid.steering.y *= -2;
        }
        if (document.getElementById("obstacle").checked) {
            let rectpoint = [{
                "x": 100,
                "y": 300
            }, {
                "x": 400,
                "y": 100
            }, {
                "x": 250,
                "y": 450
            }];

            for (let i = 0; i < rectpoint.length; i++)
                if (distance(tmp_point.x, tmp_point.y, rectpoint[i].x, rectpoint[i].y) <= 14) {
                    if (boid.vx != 0) boid.vx *= -1, boid.steering.x *= -2;
                    if (boid.vy != 0) boid.vy *= -1, boid.steering.y *= -2;
                    boid.normalize();
                    boid.ifchange = 5;
                    boid.x += boid.vx * 10;
                    boid.y += boid.vy * 10;
                }
        }


    });


    // now we can draw
    draw();
    // and loop
    window.requestAnimationFrame(loop);

}
// start the loop with the first iteration
window.requestAnimationFrame(loop);