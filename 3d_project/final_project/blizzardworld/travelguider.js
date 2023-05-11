import * as T from '../../libs/CS559-Three/build/three.module.js';

import {
    GrObject
} from "../../libs/CS559-Framework/GrObject.js";

let TravelGuiderCount = 0;
export class TravelGuider extends GrObject {
    constructor(params = {}) {
        const travelguiderGroup = new T.Group();
        super(`TravelGuider-${++TravelGuiderCount}`, travelguiderGroup);
        let man = new T.Group();
        let head = new T.Mesh(new T.SphereGeometry(1, 32), new T.MeshPhongMaterial({
            color: "white"
        }));
        man.add(head);

        let body = new T.Mesh(new T.ConeGeometry(1.5, 8, 32), new T.MeshPhongMaterial({
            color: params.color,
        }));
        man.add(body);
        body.translateY(-4);
        // man.rotateY(-Math.PI / 2);
        travelguiderGroup.add(man);
        //route,startpoint
        this.startid = params.startid;
        this.length = params.route.length;
        this.restartid = params.restartid;
        this.startpoint = params.route[this.startid];
        this.route = params.route;
        if (this.startid == params.route.length - 1)
            this.targetid = params.restartid;
        else
            this.targetid = this.startid + 1;
        this.targetpoint = params.route[this.targetid];
        /** @type {number} */
        const x = params.x || 0; // Position x
        /** @type {number} */
        const y = params.y || 0; // Position y
        /** @type {number} */
        const z = params.z || 0; // Position z
        /** @type {number} */



        this.people = travelguiderGroup;
        this.rideable = this.people;

        this.vx = this.vz = this.vy = 0;

        this.targetangle_y = this.calcultate_angle(this.startpoint[0], this.startpoint[2], this.targetpoint[0], this.targetpoint[2]);


        this.vx = Math.cos(this.targetangle_y), this.vz = Math.sin(this.targetangle_y);
        this.people.rotation.y = 0;
        this.realrotation_target = this.translate_angle(Math.atan2(this.vx, this.vz));
        this.t = 0;
        this.nowangle_y = this.realrotation_target;
        this.people.rotation.y = this.realrotation_target;
        travelguiderGroup.position.set(this.startpoint[0], this.startpoint[1], this.startpoint[2]); // CS559 Sample Code
        travelguiderGroup.castShadow = true;
        travelguiderGroup.receiveShadow = true;
    }
    translate_angle(angle, pre_angle) {
        let new_angle, new_pre_angle;
        new_angle = (angle < 0) ? Math.PI * 2 + angle : angle;
        new_pre_angle = (pre_angle < 0) ? Math.PI * 2 + pre_angle : pre_angle;

        if (new_angle <= 0.001 || Math.abs(Math.PI * 2 - new_angle) <= 0.2) {
            if (Math.abs(0 - new_pre_angle) > Math.abs(Math.PI * 2 - new_pre_angle))
                return new_pre_angle, Math.PI * 2;
            else return new_pre_angle, 0;
        } else if (new_pre_angle <= 0.001 || Math.abs(Math.PI * 2 - new_pre_angle) <= 0.2) {

            if (Math.abs(0 - new_angle) > Math.abs(Math.PI * 2 - new_angle))
                return Math.PI * 2, new_angle;
            else return 0, new_angle;
        }
        return new_pre_angle, new_angle;
    }
    calcultate_angle(x0, y0, x1, y1) {
        let dx = x1 - x0,
            dy = y1 - y0;
        let angle = 0;

        if (dy >= 0) {
            angle = Math.atan2(dy, dx);
        } else if (dy < 0) {
            angle = Math.PI * 2 + Math.atan2(dy, dx);
        }
        return Math.abs(angle);

    }
    distance(x0, y0, z0, x1, y1, z1) {
        return Math.sqrt((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0) + (z1 - z0) * (z1 - z0));
    }

    stepWorld(delta, timeOfDay) {
        let delta_v = delta * 0.006 % 1;
        let delta_rotation = delta * 0.008 % 1;
        // console.log(this.people.rotation.y / Math.PI, this.nowangle_y / Math.PI);
        if (this.people.rotation.y == this.realrotation_target) {
            // no rotation
            this.people.position.y += this.vy * delta_v;
            this.people.position.x += this.vx * delta_v;
            this.people.position.z += this.vz * delta_v;
            this.nowangle_y = this.people.rotation.y;
            //console.log(this.distance(this.people.position.x, this.people.position.y, this.people.position.z, this.targetpoint[0], this.targetpoint[1], this.targetpoint[2]));
            if (this.distance(this.people.position.x, this.people.position.y, this.people.position.z, this.targetpoint[0], this.targetpoint[1], this.targetpoint[2]) <= 0.6) {
                this.people.position.x = this.targetpoint[0], this.people.position.y = this.targetpoint[1], this.people.position.z = this.targetpoint[2];
                this.startid = this.targetid;
                if (this.startid == this.route.length - 1)
                    this.targetid = this.restartid;
                else
                    this.targetid = this.startid + 1;
                this.targetpoint = this.route[this.targetid];
                this.startpoint = this.route[this.startid];
                //this.people.rotation.y = this.translate_angle(this.people.rotation.y);
                this.targetangle_y = this.calcultate_angle(this.startpoint[0], this.startpoint[2], this.targetpoint[0], this.targetpoint[2]);
                this.vx = Math.cos(this.targetangle_y), this.vz = Math.sin(this.targetangle_y);
                this.nowangle_y, this.realrotation_target = this.translate_angle(Math.atan2(this.vx, this.vz), this.nowangle_y);
                this.people.rotation.y = this.nowangle_y;
                if (this.targetpoint[1] - this.startpoint[1] != 0) {

                    if (Math.abs(this.vz) >= 0.001)
                        this.vy = (this.targetpoint[1] - this.startpoint[1]) / (Math.abs((this.targetpoint[2] - this.startpoint[2]) / this.vz));
                    else if (Math.abs(this.vx) >= 0.001)
                        this.vy = (this.targetpoint[1] - this.startpoint[1]) / (Math.abs((this.targetpoint[0] - this.startpoint[0]) / this.vx));
                } else this.vy = 0;
                this.t = 0;

            }

        }
        if (this.people.rotation.y != this.realrotation_target) {
            // rotateY
            // console.log(this.people.rotation.y / Math.PI, this.realrotation_target / Math.PI);

            //this.people.rotation.y = (this.people.rotation.y + delta_rotation * (this.realrotation_target - this.people.rotation.y)) % (2 * Math.PI);
            this.people.rotation.y = this.realrotation_target * this.t + this.nowangle_y * (1 - this.t);
            this.t += 0.02;
            if (Math.abs(this.people.rotation.y - this.realrotation_target) <= 0.001)
                this.people.rotation.y = this.realrotation_target;


        }


    }
}