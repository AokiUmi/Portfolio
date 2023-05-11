import * as T from "../../libs/CS559-Three/build/three.module.js";
import {
    GrWorld
} from "../../libs/CS559-Framework/GrWorld.js";
import {
    GrObject
} from "../../libs/CS559-Framework/GrObject.js";
import * as Loaders from "../../libs/CS559-Framework/loaders.js";
import {
    OBJLoader
} from "../../libs/CS559-Three/examples/jsm/loaders/OBJLoader.js";

let LampCount = 0;
let SmallLampCount = 0;
let SimpleLampCount = 0;
let SimpleLamp2Count = 0;
export class Lamp extends Loaders.ObjGrObject {
    constructor(params = {}) {
        super({
            obj: "./load/streetlamp.obj",
            mtl: "./load/streetlamp.mtl",
            name: `Lamp-${++LampCount}`,
        });



        /** @type {number} */
        const x = params.x || 0; // Position x
        /** @type {number} */
        const y = params.y || 0; // Position y
        /** @type {number} */
        const z = params.z || 0; // Position z
        /** @type {number} */
        const scale = params.scale || 1; // Scale
        this.objects[0].position.set(x, y, z); // CS559 Sample Code
        this.objects[0].scale.set(scale, scale, scale);
        this.objects[0].castShadow = true;
        this.objects[0].receiveShadow = true;
    }
}
export class SimpleLamp2 extends Loaders.ObjGrObject {
    constructor(params = {}) {
        super({
            obj: "./load/rv_lamp_post_4.obj",
            mtl: "./load/rv_lamp_post_4.mtl",
            name: `SimpleLamp2-${++SimpleLamp2Count}`,

        });



        /** @type {number} */
        const x = params.x || 0; // Position x
        /** @type {number} */
        const y = params.y || 0; // Position y
        /** @type {number} */
        const z = params.z || 0; // Position z
        /** @type {number} */
        const scale = params.scale || 1; // Scale
        this.objects[0].position.set(x, y, z); // CS559 Sample Code
        this.objects[0].scale.set(scale, scale, scale);
        this.objects[0].castShadow = true;
        this.objects[0].receiveShadow = true;
    }
}
export class SimpleLamp extends Loaders.ObjGrObject {
    constructor(params = {}) {
        super({
            obj: "./load/rv_lamp_post_3.obj",
            mtl: "./load/rv_lamp_post_3.mtl",
            name: `SimpleLamp-${++SimpleLampCount}`,

        });



        /** @type {number} */
        const x = params.x || 0; // Position x
        /** @type {number} */
        const y = params.y || 0; // Position y
        /** @type {number} */
        const z = params.z || 0; // Position z
        /** @type {number} */
        const scale = params.scale || 1; // Scale
        this.objects[0].position.set(x, y, z); // CS559 Sample Code
        this.objects[0].scale.set(scale, scale, scale);
        this.objects[0].castShadow = true;
        this.objects[0].receiveShadow = true;
    }
}

export class SmallLamp extends Loaders.ObjGrObject {
    constructor(params = {}) {
        super({
            obj: "./load/lamp.obj",
            name: `SmallLamp-${++SmallLampCount}`,

            callback: function (this1) {
                this1.objects[0].traverse(obj => {
                    if (obj instanceof T.Mesh) {
                        if (obj.name == "object_1")
                            obj.material = new T.MeshStandardMaterial({
                                color: "#1C1C1C",
                                metalness: 0.4,
                            });
                        else
                            obj.material = new T.MeshStandardMaterial({
                                color: "#8B7355",
                                metalness: 0.4,
                            });
                    }
                });
            }
        });

        //console.log(this.objects[0]);

        // lamp.traverse(obj => {
        //     if (obj instanceof T.Mesh) {
        //         obj.material = new T.MeshPhongMaterial({
        //             color: "#1C1C1C"
        //         });
        //     }
        // });

        /** @type {number} */
        const x = params.x || 0; // Position x
        /** @type {number} */
        const y = params.y || 0; // Position y
        /** @type {number} */
        const z = params.z || 0; // Position z
        /** @type {number} */
        const scale = params.scale || 1; // Scale
        this.objects[0].position.set(x, y, z); // CS559 Sample Code
        this.objects[0].scale.set(scale, scale, scale);
        this.objects[0].rotateX(Math.PI / 2);
        this.objects[0].castShadow = true;
        this.objects[0].receiveShadow = true;
    }
}
let SmallLightCount = 0;
export class SmallLight extends Loaders.ObjGrObject {
    constructor(params = {}) {
        super({
            obj: "./load/eb_sconce_light_01.obj",

            name: `SmallLight-${++SmallLightCount}`,

            callback: function (this1) {
                this1.objects[0].traverse(obj => {
                    if (obj instanceof T.Mesh) {
                        if (obj.name == "eb_sconce_light_01_low b_low")
                            obj.material = new T.MeshStandardMaterial({
                                color: "#cec1b0",
                                metalness: 0.4,
                                roughness: 0.6,
                            });
                        else
                            obj.material = new T.MeshStandardMaterial({
                                color: "#406647",
                                metalness: 0.4,
                            });
                    }
                });
            }
        });

        /** @type {number} */
        const x = params.x || 0; // Position x
        /** @type {number} */
        const y = params.y || 0; // Position y
        /** @type {number} */
        const z = params.z || 0; // Position z
        /** @type {number} */
        const scale = params.scale || 1; // Scale
        this.objects[0].position.set(x, y, z); // CS559 Sample Code
        this.objects[0].scale.set(scale, scale, scale);
        this.objects[0].rotateY(Math.PI);
        this.objects[0].castShadow = true;
        this.objects[0].receiveShadow = true;
    }
}