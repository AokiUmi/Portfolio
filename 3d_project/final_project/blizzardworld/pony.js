import * as T from '../../libs/CS559-Three/build/three.module.js';

import {
    GrObject
} from "../../libs/CS559-Framework/GrObject.js";
let RiderPonyCount = 0;
export class RidePony extends GrObject {
    constructor(params = {}) {
        const ridepony = new T.Group();
        let basegroup = new T.Group();
        super(`RidePony-${++RiderPonyCount}`, basegroup);
        let pony_geo = new T.CylinderGeometry(0.8, 0.8, 0.3, 32);
        let pony_ma = new T.MeshPhongMaterial({
            color: "#FF6A6A"
        })
        let pony = new T.Group();
        let ponybody = new T.Mesh(pony_geo, pony_ma);
        ponybody.rotateZ(Math.PI / 2);
        ponybody.scale.set(0.6, 1, 1);
        let ponyhead = new T.Mesh(new T.CylinderGeometry(0.3, 0.3, 0.3, 32), pony_ma);
        let ponyleft = new T.Mesh(new T.CylinderGeometry(0.1, 0.1, 0.2, 32), new T.MeshStandardMaterial({
            color: "white"
        }));
        let ponyright = new T.Mesh(new T.CylinderGeometry(0.1, 0.1, 0.2, 32), new T.MeshStandardMaterial({
            color: "white"
        }));
        let ponytop = new T.Mesh(new T.SphereGeometry(0.1), new T.MeshStandardMaterial({
            color: "white"
        }));
        ponyhead.rotateZ(Math.PI / 2);
        pony.add(ponybody);
        pony.add(ponyhead);
        pony.add(ponyleft);
        pony.add(ponyright);
        pony.add(ponytop);
        ponyright.position.set(0, -0.5, -0.4);
        ponyleft.position.set(0, -0.5, 0.4);
        ponyhead.position.set(0, 0.45, 0.5);
        ponytop.position.set(0, 0.7, 0.2);

        ridepony.add(pony);
        let baseposition = params.base.objects[0].position;
        ridepony.rotateY(Math.PI);

        basegroup.position.set(baseposition.x, baseposition.y + 7.3, baseposition.z);
        basegroup.add(ridepony);
        ridepony.position.set(params.startx, 0, params.startz);


        this.pony = ridepony;
        this.rideable = ridepony;
        this.xdirect = params.xdirect;
        this.zdirect = params.zdirect;
        if (params.zdirect == 1)
            this.pony.rotateY(Math.PI), this.rotate = 0,
            this.angle = Math.PI;
        else {
            this.rotate = 0;
            this.angle = 0;
        }
        const scale = params.scale || 1; // Scale

        basegroup.scale.set(scale, scale, scale);
        basegroup.rotateY(Math.atan2(4, 3));
        basegroup.castShadow = true;
        basegroup.receiveShadow = true;

    }
    stepWorld(delta, timeOfDay) {
        let deltaSlowed = delta * 0.002;
        if (!this.rotate) {
            this.pony.position.x += this.xdirect * deltaSlowed;
            this.pony.position.z += this.zdirect * deltaSlowed;
        } else {
            this.pony.rotation.y += delta * 0.001;

            if (this.pony.rotation.y >= this.angle + Math.PI / 2) {

                this.rotate = 0;
                this.pony.position.x += this.xdirect * deltaSlowed;
                this.pony.position.z += this.zdirect * deltaSlowed;
                this.pony.rotation.y = this.angle + Math.PI / 2;
                this.angle = this.pony.rotation.y;
            }

        }
        if (this.pony.position.x == -3 && this.pony.position.z <= -2.6) {
            this.xdirect = 1;
            this.zdirect = 0;
            this.pony.position.z = -2.6;
            this.rotate = 1;

        } else if (this.pony.position.x >= 3 && this.pony.position.z == -2.6) {
            this.xdirect = 0;
            this.zdirect = 1;
            this.pony.position.x = 3;
            this.rotate = 1;

        } else if (this.pony.position.x == 3 && this.pony.position.z >= 2.6) {
            this.xdirect = -1;
            this.zdirect = 0;
            this.pony.position.z = 2.6;
            this.rotate = 1;

        } else if (this.pony.position.x <= -3 && this.pony.position.z == 2.6) {
            this.xdirect = 0;
            this.zdirect = -1;
            this.pony.position.x = -3;
            this.rotate = 1;

        }



    }


}