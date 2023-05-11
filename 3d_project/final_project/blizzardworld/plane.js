import * as T from '../../libs/CS559-Three/build/three.module.js';

import {
    GrObject
} from "../../libs/CS559-Framework/GrObject.js";
import {
    shaderMaterial
} from "../../libs/CS559-Framework/shaderHelper.js";


/** @type {number} */
let PlaneCount = 0;
export class Helicopter extends GrObject {
    constructor(params = {}) {
        const planeGroup = new T.Group();
        super(`Helicopter`, planeGroup);
        let image = new T.TextureLoader().load('./images/blizzardworld.jpg');
        this.shaderMat = shaderMaterial("./shaders/flag.vs", "./shaders/flag.fs", {
            side: T.DoubleSide,
            uniforms: {
                time: {
                    value: 0
                },
                frequency: {
                    value: new T.Vector2(0.5, 0.25)
                },
                image: {
                    value: image,
                },
                color: {
                    value: new T.Color('orange')
                }
            },
        });
        //main body
        let helicopterA = new T.Group();
        let main_body_geo = new T.BoxGeometry(1.1, 0.5, 0.5);
        let main_body_ma = new T.MeshStandardMaterial({
            color: "#FFE1FF"
        })
        let main_body = new T.Mesh(main_body_geo, main_body_ma);


        // front box
        let frontbox_geo = new T.BoxGeometry(0.5 / 2 * Math.sqrt(3), 0.25, 0.5);
        let frontbox = new T.Mesh(frontbox_geo, main_body_ma);
        helicopterA.add(frontbox);
        frontbox.position.x = 0.55 + 0.5 / 2 * Math.sqrt(3) / 2;
        frontbox.position.y = -0.25 / 2;
        // front tri
        let fronttri_geo = new T.CylinderGeometry(0.5 / Math.sqrt(3), 0.5 / Math.sqrt(3), 0.5, 3);
        let fronttri = new T.Mesh(fronttri_geo, main_body_ma);
        helicopterA.add(fronttri);
        fronttri.position.set(0.55 + 0.5 / Math.sqrt(3) / 2, 0, 0);
        fronttri.rotateY(Math.PI + Math.PI / 2);
        fronttri.rotateX(Math.PI);
        fronttri.rotateZ(Math.PI / 2);
        // tail
        let tail_geo = new T.CylinderGeometry(0.5 / Math.sqrt(2), 0.1, 1.8, 4);
        let tail = new T.Mesh(tail_geo, main_body_ma);
        helicopterA.add(tail);
        tail.position.x = -(1.8 / 2 + 0.55);
        tail.rotateZ(Math.PI / 2 * 3);
        tail.rotateY(Math.PI / 4);
        //top 
        let top_box_geo = new T.BoxGeometry(0.5, 0.08, 2.8);
        let top_box_ma = new T.MeshStandardMaterial({
            color: "#FF6347"
        })
        let top_box = new T.Mesh(top_box_geo, top_box_ma);
        let top_1 = new T.Mesh(new T.BoxGeometry(0.8, 0.08, 0.5), top_box_ma);
        helicopterA.add(top_1);
        top_1.position.y = 0.25 + 0.08 / 2;
        helicopterA.add(top_box);
        top_box.position.y = 0.25 + 0.08 / 2 * 3;
        //tail_piece
        let tail_piece_geo = new T.BoxGeometry(0.6, 0.8, 0.08);
        let tail_piece_1 = new T.Mesh(tail_piece_geo, top_box_ma);
        helicopterA.add(tail_piece_1);
        tail_piece_1.position.set(-(1.3 + 0.55), 0.3, 0.28);
        tail_piece_1.rotateX(Math.PI / 4);
        tail_piece_1.rotateZ(Math.PI / 6);
        let tail_piece_2 = new T.Mesh(tail_piece_geo, top_box_ma);
        helicopterA.add(tail_piece_2);
        tail_piece_2.position.set(-(1.3 + 0.55), 0.3, -0.28);
        tail_piece_2.rotateX(-Math.PI / 4);
        tail_piece_2.rotateZ(Math.PI / 6);

        let door_ma = new T.LineBasicMaterial({
            color: "#FF6347",
            linewidth: 2,
        });

        let points = [];
        points.push(new T.Vector3(-0.3, -0.2, 0));
        points.push(new T.Vector3(-0.3, 0.2, 0));
        points.push(new T.Vector3(0.3, 0.2, 0));
        points.push(new T.Vector3(0.3, -0.2, 0));
        points.push(new T.Vector3(-0.3, -0.2, 0));
        let door_geo = new T.BufferGeometry().setFromPoints(points);

        let door_circle_ma = new T.MeshBasicMaterial({
            color: "#FF6347",
            side: T.DoubleSide
        })
        let door_line = new T.Line(door_geo, door_ma);
        let door_circle_geo = new T.CircleGeometry(0.05, 32);
        let door_circle = new T.Mesh(door_circle_geo, door_circle_ma);
        door_circle.position.set(0.23, 0, 0);
        let door = new T.Group();
        door.add(door_line);
        door.add(door_circle);
        door.position.z = 0.255;

        let door_2 = new T.Group();
        door_2.copy(door);

        helicopterA.add(door);
        helicopterA.add(door_2);
        door_2.position.z = -0.255;
        // propeller
        let propeller_geo = new T.BoxGeometry(1.6, 0.1, 0.1);
        let propellerMaterial = new T.MeshStandardMaterial({
            color: "#436EEE"
        });
        let propeller_1 = new T.Mesh(propeller_geo, propellerMaterial);
        let propeller_2 = new T.Mesh(propeller_geo, propellerMaterial);
        let propeller_3 = new T.Mesh(propeller_geo, propellerMaterial);

        // animation loop
        let procenter_geo = new T.CylinderGeometry(0.15, 0.15, 0.4, 32);
        let procenter_ma = new T.MeshPhongMaterial({
            color: "#E0EEEE"
        })
        let propeller_left = new T.Group();
        let procenter = new T.Mesh(procenter_geo, procenter_ma);
        propeller_left.position.set(0, 0.5 / 2 + 0.08 * 2 + 0.1, 1.3);
        propeller_left.add(procenter);
        procenter.add(propeller_1);
        propeller_1.position.set(0.8, 0, 0);
        procenter.add(propeller_2);
        propeller_2.rotateY(Math.PI / 3 * 2);
        propeller_2.position.set(-0.8 / 2, 0, -0.8 / 2 * Math.sqrt(3));
        procenter.add(propeller_3);
        propeller_3.rotateY(Math.PI / 3 * 4);
        propeller_3.position.set(-0.8 / 2, 0, 0.8 / 2 * Math.sqrt(3));
        propeller_left.scale.set(0.5, 0.5, 0.5);
        helicopterA.add(propeller_left);

        let propeller_right = new T.Group();
        propeller_right.copy(propeller_left);
        propeller_left.position.z = -1.3;
        helicopterA.add(propeller_right);
        helicopterA.add(main_body);

        planeGroup.add(helicopterA);
        helicopterA.scale.set(1.5, 1.5, 1.5);
        let flag = new T.Mesh(new T.PlaneGeometry(10, 3, 50, 30), this.shaderMat);
        planeGroup.add(flag);
        flag.translateX(-12);

        let line_points = [];
        line_points.push(new T.Vector3(-3, 0, 0));
        line_points.push(new T.Vector3(-7, 1.5, 0));
        line_points.push(new T.Vector3(-3, 0, 0));
        line_points.push(new T.Vector3(-7, -1.5, 0));

        let line_geo = new T.BufferGeometry().setFromPoints(line_points);

        let line_ma = new T.MeshBasicMaterial({
            color: "#FF6347",
            side: T.DoubleSide
        })
        let line = new T.Line(line_geo, door_ma);
        planeGroup.add(line);
        this.line = line_geo;
        /** @type {number} */
        const x = params.x || 0; // Position x
        /** @type {number} */
        const y = params.y || 0; // Position y
        /** @type {number} */
        const z = params.z || 0; // Position z
        /** @type {number} */
        const scale = params.scale || 1; // Scale
        planeGroup.position.set(x, y, z); // CS559 Sample Code
        planeGroup.scale.set(scale, scale, scale);
        planeGroup.castShadow = true;
        planeGroup.receiveShadow = true;

        this.time = 0;
        this.plane = planeGroup;
        this.direct = 1;
        this.flag = flag;
        this.propellerA = propeller_left;
        this.propellerB = propeller_right;
        this.rideable = planeGroup;
    }
    stepWorld(delta, timeOfDay) {
        this.shaderMat.uniforms.time.value += delta * 0.005 * this.direct;
        this.propellerA.rotation.y += delta * 0.1;
        this.propellerB.rotation.y += delta * 0.1;
        this.plane.position.x += delta * 0.013 * this.direct;

        if (this.plane.position.x >= 50) {
            this.plane.position.x = 49.9, this.plane.rotateY(Math.PI), this.direct *= -1;

        } else if (this.plane.position.x <= -90) {
            this.plane.position.x = -89.9, this.plane.rotateY(Math.PI), this.direct *= -1;

        }



    }
}