import * as T from '../../libs/CS559-Three/build/three.module.js';

import {
    GrObject
} from "../../libs/CS559-Framework/GrObject.js";

let SmallHealerCount = 0;
export class SmallHealer extends GrObject {
    constructor(params = {}) {
        const smallhealerGroup = new T.Group();
        super(`SmallHealer-${++SmallHealerCount}`, smallhealerGroup);
        let healer = new T.Group();
        smallhealerGroup.add(healer);
        let mainbody = new T.Mesh(new T.CylinderGeometry(0.18, 0.18, 1.2, 32), new T.MeshPhongMaterial({
            transparent: true,
            opacity: 0.7,
            color: "#02a9ec",
        }));
        healer.add(mainbody);
        let cylinder_group = new T.Group();
        let cylinder = new T.Mesh(new T.CylinderGeometry(0.182, 0.182, 0.024, 32), new T.MeshStandardMaterial({
            color: "#0B212A",
        }))
        cylinder_group.add(cylinder);
        cylinder.translateY(0.202);
        let cylinder2 = new T.Mesh(new T.CylinderGeometry(0.182, 0.182, 0.04, 32), new T.MeshStandardMaterial({
            color: "#0B212A",
        }))
        cylinder_group.add(cylinder2);
        cylinder2.translateY(-0.182);
        let top_cylinder = new T.Mesh(new T.CylinderGeometry(0.16 * Math.sqrt(2), 0.22 * Math.sqrt(2), 0.16, 4), new T.MeshStandardMaterial({
            color: "grey",
        }));
        cylinder_group.add(top_cylinder);
        top_cylinder.position.y = 0.08;
        top_cylinder.rotateY(Math.PI / 4);
        let bottom_cylinder = new T.Mesh(new T.CylinderGeometry(0.22 * Math.sqrt(2), 0.16 * Math.sqrt(2), 0.16, 4), new T.MeshStandardMaterial({
            color: "grey",
        }));
        cylinder_group.add(bottom_cylinder);
        bottom_cylinder.position.y = -0.08;
        bottom_cylinder.rotateY(Math.PI / 4);
        healer.add(cylinder_group);
        cylinder_group.translateY(0.4);

        let copy = new T.Group();
        copy.copy(cylinder_group);
        healer.add(copy);
        copy.translateY(-0.8);
        copy.rotateX(Math.PI);

        let redcross = new T.Group();
        healer.add(redcross);
        let red1 = new T.Mesh(new T.BoxGeometry(0.6, 0.2, 0.05), new T.MeshStandardMaterial({
            color: "#f8071e",
        }))
        redcross.add(red1);

        let red2 = new T.Mesh(new T.BoxGeometry(0.7, 0.2, 0.05), new T.MeshStandardMaterial({
            color: "#f8071e",
        }));
        redcross.add(red2);
        red2.rotateZ(Math.PI / 2);

        redcross.translateZ(-0.16);
        redcross.scale.set(0.4, 0.4, 1);

        let cross_copy = new T.Group();
        cross_copy.copy(redcross);
        healer.add(cross_copy);
        cross_copy.translateZ(0.32);
        cross_copy.scale.set(0.4, 0.4, 1);


        let statue = new T.Mesh(new T.CylinderGeometry(0.8, 0.9, 0.15, 32), new T.MeshStandardMaterial({
            color: "#475362",
        }));
        smallhealerGroup.add(statue);
        statue.position.y = -1.3;

        let statue2 = new T.Mesh(new T.CylinderGeometry(0.7, 0.7, 0.17, 32), new T.MeshPhongMaterial({
            transparent: true,
            opacity: 0.7,
            color: "#007DD4",
        }));
        smallhealerGroup.add(statue2);
        statue2.position.y = -1.3;
        let bluecross = new T.Group();
        smallhealerGroup.add(bluecross);
        let blue1 = new T.Mesh(new T.BoxGeometry(0.6, 0.2, 0.1), new T.MeshStandardMaterial({
            color: "#004870",
        }))
        bluecross.add(blue1);

        let blue2 = new T.Mesh(new T.BoxGeometry(0.7, 0.2, 0.1), new T.MeshStandardMaterial({
            color: "#004870",
        }));
        bluecross.add(blue2);
        blue2.rotateZ(Math.PI / 2);
        bluecross.translateY(-1.2);
        bluecross.scale.set(1.6, 1.4, 1);
        bluecross.rotateX(Math.PI / 2);

        healer.rotateY(Math.PI / 2);
        healer.rotateZ(Math.PI / 10);
        healer.rotateX(-Math.PI / 8);

        const light1 = new T.PointLight("#09b5f9", 1, 10);
        light1.position.set(0, -1.35, 0);
        light1.castShadow = true;
        smallhealerGroup.add(light1);
        /** @type {number} */
        const x = params.x || 0; // Position x
        /** @type {number} */
        const y = params.y || 0; // Position y
        /** @type {number} */
        const z = params.z || 0; // Position z
        /** @type {number} */
        const scale = params.scale || 1; // Scale
        smallhealerGroup.position.set(x, y, z); // CS559 Sample Code
        smallhealerGroup.scale.set(scale, scale, scale);
        smallhealerGroup.castShadow = true;
        smallhealerGroup.receiveShadow = true;

        this.body = healer;
        this.timecount = 0;

    }
    stepWorld(delta, timeOfDay) {
        this.timecount += delta * 0.002;
        this.body.position.y = 0.2 * Math.sin(this.timecount);

    }

}

let HealerCount = 0;
export class Healer extends GrObject {
    constructor(params = {}) {
        const healerGroup = new T.Group();
        super(`Healer-${++HealerCount}`, healerGroup);
        let healer = new T.Group();
        healerGroup.add(healer);
        let base2_shape = new T.Shape();
        base2_shape.moveTo(0.6, 0);
        base2_shape.lineTo(0.6, 0.6);
        base2_shape.arc(-0.2, 0, 0.2, 0, Math.PI / 2);
        base2_shape.lineTo(-0.4, 0.8);
        base2_shape.arc(0, -0.2, 0.2, Math.PI / 2, Math.PI);
        base2_shape.lineTo(-0.6, -0.6);
        base2_shape.arc(0.2, 0, 0.2, Math.PI, Math.PI / 2 * 3);
        base2_shape.lineTo(0.4, -0.8);
        base2_shape.arc(0, 0.2, 0.2, Math.PI / 2 * 3, Math.PI * 2);
        base2_shape.lineTo(0.6, 0);
        let exSettings2 = {
            steps: 10,
            depth: 0.2,
            bevelEnabled: false,
        };
        let base2_geom = new T.ExtrudeGeometry(base2_shape, exSettings2);
        let base = new T.Mesh(base2_geom, new T.MeshStandardMaterial({
            color: "grey",
        }));
        healer.add(base);
        base.translateZ(-0.1);
        let base_shape = new T.Shape();
        base_shape.moveTo(0.4, 0);
        base_shape.lineTo(0.4, 0.4);
        base_shape.arc(-0.2, 0, 0.2, 0, Math.PI / 2);
        base_shape.lineTo(-0.2, 0.6);
        base_shape.arc(0, -0.2, 0.2, Math.PI / 2, Math.PI);
        base_shape.lineTo(-0.4, -0.4);
        base_shape.arc(0.2, 0, 0.2, Math.PI, Math.PI / 2 * 3);
        base_shape.lineTo(0.2, -0.6);
        base_shape.arc(0, 0.2, 0.2, Math.PI / 2 * 3, Math.PI * 2);
        base_shape.lineTo(0.4, 0);
        let exSettings = {
            steps: 10,
            depth: 0.5,
            bevelEnabled: false,
        };
        let base_geom = new T.ExtrudeGeometry(base_shape, exSettings);

        let blue = new T.Mesh(base_geom, new T.MeshPhongMaterial({
            transparent: true,
            opacity: 0.5,
            color: "#007DD4",
        }));
        healer.add(blue);
        blue.translateZ(-0.25);
        blue.scale.set(1.1, 1.1, 1);

        let handle_shape = new T.Shape();
        handle_shape.moveTo(-0.25, 0);
        handle_shape.lineTo(-0.3, 0);
        handle_shape.lineTo(-0.3, 0.24);
        handle_shape.lineTo(0.3, 0.24);
        handle_shape.lineTo(0.3, 0);
        handle_shape.lineTo(0.25, 0);
        handle_shape.lineTo(0.25, 0.18);
        handle_shape.lineTo(-0.25, 0.18);
        let exSettings3 = {
            steps: 10,
            depth: 0.6,
            bevelEnabled: false,
        };
        let handle_geom = new T.ExtrudeGeometry(handle_shape, exSettings3);

        let handle = new T.Mesh(handle_geom, new T.MeshStandardMaterial({
            color: "#0B212A",
        }));
        healer.add(handle);
        handle.translateX(-0.3);
        handle.translateY(0.52);
        handle.rotateY(Math.PI / 2);
        let handle2 = new T.Mesh(handle_geom, new T.MeshStandardMaterial({
            color: "#0B212A",
        }));
        healer.add(handle2);
        handle2.translateX(0.3);
        handle2.translateY(-0.48);
        handle2.rotateY(Math.PI / 2);
        handle2.rotateX(Math.PI);

        let box = new T.Mesh(new T.BoxGeometry(0.8, 0.2, 0.3), new T.MeshStandardMaterial({
            color: "grey",
        }))
        healer.add(box);
        box.translateY(0.8);

        let box2 = new T.Mesh(new T.BoxGeometry(0.8, 0.2, 0.3), new T.MeshStandardMaterial({
            color: "grey",
        }))
        healer.add(box2);
        box2.translateY(-0.8);

        let box3 = new T.Mesh(new T.BoxGeometry(0.4, 0.1, 0.26), new T.MeshStandardMaterial({
            color: "#0B212A",
        }))
        healer.add(box3);
        box3.translateY(0.9);

        let box4 = new T.Mesh(new T.BoxGeometry(0.4, 0.1, 0.26), new T.MeshStandardMaterial({
            color: "#0B212A",
        }))
        healer.add(box4);
        box4.translateY(-0.9);



        let box5 = new T.Mesh(new T.BoxGeometry(0.24, 0.6, 0.14), new T.MeshStandardMaterial({
            color: "#0B212A",
        }))
        healer.add(box5);
        box5.translateX(0.54);
        box5.translateY(0.14);

        let box6 = new T.Mesh(new T.BoxGeometry(0.24, 0.6, 0.14), new T.MeshStandardMaterial({
            color: "#0B212A",
        }))
        healer.add(box6);
        box6.translateX(-0.54);
        box6.translateY(0.14);

        let redcross = new T.Group();
        healer.add(redcross);

        let red1 = new T.Mesh(new T.BoxGeometry(0.6, 0.2, 0.1), new T.MeshStandardMaterial({
            color: "#A9181F",
        }))
        redcross.add(red1);
        red1.translateZ(-0.24);

        let red2 = new T.Mesh(new T.BoxGeometry(0.7, 0.2, 0.1), new T.MeshStandardMaterial({
            color: "#A9181F",
        }));
        redcross.add(red2);
        red2.translateZ(-0.24);
        red2.rotateZ(Math.PI / 2 + Math.PI / 8);
        let redcross2 = new T.Group();
        redcross2.copy(redcross);
        healer.add(redcross2);
        redcross2.position.z = 0.48;

        let statue = new T.Mesh(new T.CylinderGeometry(0.8, 0.9, 0.15, 32), new T.MeshStandardMaterial({
            color: "#475362",
        }));
        healerGroup.add(statue);
        statue.position.y = -1.6;

        let statue2 = new T.Mesh(new T.CylinderGeometry(0.7, 0.7, 0.17, 32), new T.MeshPhongMaterial({
            transparent: true,
            opacity: 0.7,
            color: "#007DD4",
        }));
        healerGroup.add(statue2);
        statue2.position.y = -1.6;
        let bluecross = new T.Group();
        healerGroup.add(bluecross);
        let blue1 = new T.Mesh(new T.BoxGeometry(0.6, 0.2, 0.1), new T.MeshStandardMaterial({
            color: "#004870",
        }))
        bluecross.add(blue1);

        let blue2 = new T.Mesh(new T.BoxGeometry(0.7, 0.2, 0.1), new T.MeshStandardMaterial({
            color: "#004870",
        }));
        bluecross.add(blue2);
        blue2.rotateZ(Math.PI / 2);
        bluecross.translateY(-1.5);
        bluecross.scale.set(1.6, 1.4, 1);
        bluecross.rotateX(Math.PI / 2);
        healer.translateX(-0.25);
        healer.rotateZ(Math.PI / 8);
        healer.rotateX(-Math.PI / 10);

        const light1 = new T.PointLight("#09b5f9", 1, 10);
        light1.position.set(0, -1.45, 0);
        light1.castShadow = true;
        healerGroup.add(light1);

        /** @type {number} */
        const x = params.x || 0; // Position x
        /** @type {number} */
        const y = params.y || 0; // Position y
        /** @type {number} */
        const z = params.z || 0; // Position z
        /** @type {number} */
        const scale = params.scale || 1; // Scale
        healerGroup.position.set(x, y, z); // CS559 Sample Code
        healerGroup.scale.set(scale, scale, scale);
        healerGroup.castShadow = true;
        healerGroup.receiveShadow = true;
        this.ridepoint = new T.Group();
        this.ridepoint.rotateY(Math.PI);
        healerGroup.add(this.ridepoint);
        this.body = healer;
        this.timecount = 0;
        this.rideable = this.ridepoint;

    }
    stepWorld(delta, timeOfDay) {
        this.timecount += delta * 0.002;
        this.body.position.y = 0.2 * Math.sin(this.timecount);
        this.ridepoint.position.y = 0.2 * Math.sin(this.timecount);
        this.ridepoint.rotation.y += delta * 0.0004;

    }


}