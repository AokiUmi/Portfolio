import * as T from '../../libs/CS559-Three/build/three.module.js';

import {
    GrObject
} from "../../libs/CS559-Framework/GrObject.js";
export class StatueBase extends GrObject {
    constructor(params = {}) {
        const statuebaseGroup = new T.Group();
        super(`StatueBase`, statuebaseGroup);

        let greytl = new T.TextureLoader().load('./images/castle.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.4;
            texture.repeat.x = 2.4;
        });
        let grey_material = new T.MeshStandardMaterial({
            color: "white",
            map: greytl,
            side: T.DoubleSide

        });
        let base = new T.Mesh(new T.CylinderGeometry(1.6, 1.6, 2, 32), grey_material);
        statuebaseGroup.add(base);
        let top = new T.Mesh(new T.CylinderGeometry(1.8, 1.8, 0.3, 32), new T.MeshStandardMaterial({
            color: "grey"
        }));
        statuebaseGroup.add(top);
        top.position.y = 1;

        /** @type {number} */
        const x = params.x || 0; // Position x
        /** @type {number} */
        const y = params.y || 0; // Position y
        /** @type {number} */
        const z = params.z || 0; // Position z
        /** @type {number} */
        const scale = params.scale || 1; // Scale
        statuebaseGroup.position.set(x, y, z); // CS559 Sample Code
        statuebaseGroup.scale.set(scale, scale, scale);
        statuebaseGroup.castShadow = true;
        statuebaseGroup.receiveShadow = true;

    }

}
export class Statue extends GrObject {
    constructor(params = {}) {
        const statueGroup = new T.Group();
        super(`Statue`, statueGroup);
        this.world = params.world;


        let sungeometry = new T.SphereGeometry(0.35);
        let sunmaterial = new T.MeshStandardMaterial({
            color: "#FF4500"
        });

        let sun = new T.Mesh(sungeometry, sunmaterial);
        sun.position.set(0, 1.6, 0);
        statueGroup.add(sun);
        let suncirclegeo = new T.TorusGeometry(0.8, 0.015);
        // let suncirclegeo = new T.RingGeometry(0.75, 0.8);
        let circlematerial = new T.MeshPhongMaterial({
            color: "#6AA6D4",

        });
        let suncircle = new T.Mesh(suncirclegeo, circlematerial);

        let suncircle2 = new T.Mesh(suncirclegeo, new T.MeshPhongMaterial({
            color: "#A282E1",

        }));
        let suncircle3 = new T.Mesh(new T.TorusGeometry(0.9, 0.015), new T.MeshPhongMaterial({
            color: "#FC5416",

        }));
        let suncircle4 = new T.Mesh(new T.TorusGeometry(1, 0.015), new T.MeshPhongMaterial({
            color: "#16FC95",

        }));
        suncircle.rotateX(Math.PI / 2);

        let earthPivot = new T.Group();
        sun.add(earthPivot);
        sun.add(suncircle);
        sun.add(suncircle2);
        sun.add(suncircle3);
        sun.add(suncircle4);
        //suncircle2.rotateX(-Math.PI / 4);
        suncircle2.rotateY(-Math.PI / 4);
        // suncircle3.rotateX(Math.PI / 4);
        suncircle4.rotateY(Math.PI / 2);
        let earth = new T.Mesh(sungeometry, new T.MeshPhongMaterial({
            color: "#088FF8"
        }));
        earth.scale.set(0.5, 0.5, 0.5);
        earth.position.set(-0.8, 0, 0);
        earthPivot.add(earth);

        let moonPivot = new T.Group();
        earth.add(moonPivot);

        let moon = new T.Mesh(sungeometry, new T.MeshPhongMaterial({
            color: "#F0FFFF"
        }));
        moon.scale.set(0.4, 0.4, 0.4);
        moon.position.set(-0.8, 0, 0);
        moonPivot.add(moon);
        sun.rotateZ(Math.PI / 8);


        /** @type {number} */
        const x = params.x || 0; // Position x
        /** @type {number} */
        const y = params.y || 0; // Position y
        /** @type {number} */
        const z = params.z || 0; // Position z
        /** @type {number} */
        const scale = params.scale || 1; // Scale
        statueGroup.position.set(x, y, z); // CS559 Sample Code
        statueGroup.scale.set(scale, scale, scale);
        statueGroup.castShadow = true;
        statueGroup.receiveShadow = true;

        this.sun = sun;
        this.earth = earthPivot;
        this.moon = moonPivot;
        this.timecount = 0;

    }
    stepWorld(delta, timeOfDay) {
        this.timecount += delta * 0.003;
        this.sun.position.y = 2 + 0.1 * Math.sin(this.timecount);
        this.earth.rotation.y += delta * 0.003;
        this.moon.rotation.y += delta * 0.001;
    }
}