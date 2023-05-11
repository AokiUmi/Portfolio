import * as T from '../../libs/CS559-Three/build/three.module.js';

import {
    GrObject
} from "../../libs/CS559-Framework/GrObject.js";
/** @type {number} */
import * as Loaders from "../../libs/CS559-Framework/loaders.js";
import {
    OBJLoader
} from "../../libs/CS559-Three/examples/jsm/loaders/OBJLoader.js";

export class Shark extends Loaders.ObjGrObject {
    constructor(params = {}) {
        super({
            obj: "./load/SHARK.obj",
            mtl: "./load/SHARK.mtl",
            name: `Shark`,
            callback: function (this1) {
                this1.objects[0].traverse(obj => {
                    if (obj instanceof T.Mesh) {
                        if (obj.name == "sphere3_eye")
                            obj.material = new T.MeshStandardMaterial({
                                color: "black",
                                roughness: 0.6,
                                metalness: 0.7,
                            });

                        else obj.material = new T.MeshStandardMaterial({
                            color: "#366e93",
                            roughness: 0.6,
                            metalness: 0.2,
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
        this.objects[0].scale.set(scale / 1.2, scale, scale);
        this.objects[0].castShadow = true;
        this.objects[0].receiveShadow = true;
    }
}
export class Fishing extends GrObject {

    constructor(params = {}) {
        const fishingGroup = new T.Group();
        super(`FishingTerrace`, fishingGroup);
        let exSettings = {
            steps: 2,
            depth: 0.5,
            bevelEnabled: false
        };
        let woodtl = new T.TextureLoader().load('./images/wood4.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.2;
            texture.repeat.x = 0.2;
        });
        let wood_material = new T.MeshStandardMaterial({
            color: "white",
            map: woodtl

        });
        // first, we define the base of the crane.
        // Just draw a curve for the shape, then use three's "ExtrudeGeometry"
        // to create the shape itself.

        let base = new T.Mesh(new T.BoxGeometry(0.5, 9, 0.5), wood_material);
        fishingGroup.add(base);
        base.translateY(4.5);

        let grey1 = new T.Mesh(new T.BoxGeometry(0.8, 0.4, 0.8), new T.MeshStandardMaterial({
            color: "grey",
            metalness: 0.6,
            roughness: 0.4
        }));
        fishingGroup.add(grey1);
        grey1.translateY(0.2);
        let grey2 = new T.Mesh(new T.BoxGeometry(0.7, 0.7, 0.7), new T.MeshStandardMaterial({
            color: "grey",
            metalness: 0.6,
            roughness: 0.4
        }));

        let arm_group = new T.Group();
        fishingGroup.add(arm_group);
        arm_group.translateY(9 + 0.6);
        arm_group.add(grey2);
        grey2.translateY(-0.25);
        let arm_curve = new T.Shape();
        arm_curve.moveTo(0, 0);
        arm_curve.lineTo(-3, 0);
        arm_curve.lineTo(-3, -0.5);
        arm_curve.lineTo(-1.7, -0.5);
        arm_curve.lineTo(0, -2.2);
        arm_curve.lineTo(0, -1.9);
        arm_curve.lineTo(-1.4, -0.5);
        arm_curve.lineTo(0, -0.5);

        let arm_geom = new T.ExtrudeGeometry(arm_curve, exSettings);
        let arm = new T.Mesh(arm_geom, wood_material);
        arm_group.add(arm);
        arm.translateZ(-0.25);
        let line_points = [];
        line_points.push(new T.Vector3(0, -6, 0));
        line_points.push(new T.Vector3(-2.8, 0, 0));


        let line_geo = new T.BufferGeometry().setFromPoints(line_points);

        let line_ma = new T.LineBasicMaterial({
            color: "#dcd8af",
            linewidth: 6,
        })
        let line = new T.Line(line_geo, line_ma);
        arm_group.add(line);
        let grey3 = new T.Mesh(new T.BoxGeometry(0.7, 0.7, 0.7), new T.MeshStandardMaterial({
            color: "grey",
            metalness: 0.6,
            roughness: 0.4
        }));
        arm_group.add(grey3);
        grey3.translateX(-2.8 + 0.35);
        grey3.translateY(-0.25);
        let wire_group = new T.Group();
        arm_group.add(wire_group);
        wire_group.position.set(-2.8, -1, 0);
        let cylinder1 = new T.Mesh(new T.CylinderGeometry(0.3, 0.3, 0.5, 32), wood_material);
        wire_group.add(cylinder1);
        cylinder1.position.set(0.3, -0.3, 0);
        cylinder1.rotateX(Math.PI / 2);
        let cylinder2 = new T.Mesh(new T.CylinderGeometry(0.3, 0.3, 0.5, 32), wood_material);
        wire_group.add(cylinder2);
        cylinder2.position.set(0.3, -1.1, 0);
        cylinder2.rotateX(Math.PI / 2);

        let shark = new Shark({
            x: 0.24,
            y: -4.6,
            scale: 2
        }).objects[0];
        wire_group.add(shark);
        shark.rotateZ(Math.PI / 2);

        let torus1 = new T.Mesh(new T.TorusGeometry(0.25, 0.05), wood_material);
        wire_group.add(torus1);
        torus1.position.set(0.22, -2.35, 0);
        torus1.rotateX(Math.PI / 2);
        let torus2 = new T.Mesh(new T.TorusGeometry(0.35, 0.05), wood_material);
        wire_group.add(torus2);
        torus2.position.set(0.26, -2.24, 0);
        torus2.rotateX(Math.PI / 2);

        let torus3 = new T.Mesh(new T.TorusGeometry(0.3, 0.05), wood_material);
        wire_group.add(torus3);
        torus3.position.set(0.06, -1.8, 0);
        torus3.scale.set(1.2, 1.4, 1);
        torus3.rotateY(Math.PI / 2);
        torus3.rotateX(Math.PI / 6);
        let torus4 = new T.Mesh(new T.TorusGeometry(0.3, 0.05), wood_material);
        wire_group.add(torus4);
        torus4.position.set(0.47, -1.8, 0);
        torus4.scale.set(1.2, 1.4, 1);
        torus4.rotateY(Math.PI / 2);
        torus4.rotateX(-Math.PI / 6);

        let wire_geo = new T.BufferGeometry();

        let wire_line = new T.Line(wire_geo, line_ma);
        arm_group.add(wire_line);

        this.arm = arm_group;
        this.wire = wire_group;
        this.wire_line = wire_geo;
        this.targetangle = 0;
        this.fishdirect = 0;
        this.targetangle = Math.random() * Math.PI * 0.9 * (-1);
        this.turndirect = (this.targetangle - this.arm.rotation.y > 0) ? 1 : -1;
        /** @type {number} */
        const x = params.x || 0; // Position x
        /** @type {number} */
        const y = params.y || 0; // Position y
        /** @type {number} */
        const z = params.z || 0; // Position z
        /** @type {number} */
        const scale = params.scale || 1; // Scale
        fishingGroup.position.set(x, y, z); // CS559 Sample Code
        fishingGroup.scale.set(scale, scale, scale);
        fishingGroup.castShadow = true;
        fishingGroup.receiveShadow = true;
    }

    stepWorld(delta, timeOfDay) {
        if (!this.turndirect) {
            this.wire.position.y -= this.fishdirect * delta * 0.002 % 1;

            if (this.wire.position.y <= -10)
                this.fishdirect *= -1;
            else if (this.wire.position.y >= -1) {
                this.fishdirect = 0, this.wire.position.y = -1;
                this.targetangle = Math.random() * Math.PI * 0.9 * (-1);
                if (this.targetangle == this.arm.rotation.y) this.turndirect = 0;
                else this.turndirect = (this.targetangle - this.arm.rotation.y > 0) ? 1 : -1;
            }



        } else { //ratate time
            this.arm.rotation.y += this.turndirect * delta * 0.001;
            if (this.turndirect == 1) {
                if (this.arm.rotation.y >= this.targetangle) {
                    this.fishdirect = 1;
                    this.arm.rotation.y = this.targetangle;
                    this.turndirect = 0;
                }
            } else if (this.arm.rotation.y <= this.targetangle) {
                this.fishdirect = 1;
                this.arm.rotation.y = this.targetangle;
                this.turndirect = 0;
            }


        }
        let verticesA = new Float32Array([-2.8, 0, 0, -2.8, this.wire.position.y - 1.2, 0,
            -2.8 + 0.6, 0, 0, -2.8 + 0.6, this.wire.position.y - 1.2, 0, -2.8, 0, 0,
        ]);
        this.wire_line.setAttribute("position", new T.BufferAttribute(verticesA, 3));
        // this.timecount += delta * 0.003;
        // this.sun.position.y = 2 + 0.1 * Math.sin(this.timecount);
        // this.earth.rotation.y += delta * 0.003;
        // this.moon.rotation.y += delta * 0.001;
    }
    // update(paramValues) {
    //     this.whole_ob.position.x = paramValues[0];
    //     this.whole_ob.position.z = paramValues[1];
    //     this.whole_ob.rotation.y = degreesToRadians(paramValues[2]);
    //     this.wire.position.x = paramValues[3];
    //     this.arm.rotation.y = degreesToRadians(paramValues[4]);
    // }
}