import * as T from '../../libs/CS559-Three/build/three.module.js';

import {
    GrObject
} from "../../libs/CS559-Framework/GrObject.js";
/** @type {number} */
let CastleCount = 0;
export class Castle extends GrObject {
    constructor(params = {}) {
        const castleGroup = new T.Group();
        super(`Castle-${++CastleCount}`, castleGroup);
        let basetl = new T.TextureLoader().load('./images/castle.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 2;
            texture.repeat.x = 4;
        });
        let basetl2 = new T.TextureLoader().load('./images/castle.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.2;
            texture.repeat.x = 2;
        });
        let toptl = new T.TextureLoader().load('./images/castle2.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.08;
            texture.repeat.x = 0.08;
        });
        let top_material = new T.MeshStandardMaterial({
            color: "white",
            roughness: 0.7,
            metalness: 0.3,
            map: toptl,
            side: T.DoubleSide

        });
        let base_material = new T.MeshStandardMaterial({
            color: "white",
            roughness: 0.7,
            metalness: 0.3,
            map: basetl

        });
        let base2_material = new T.MeshStandardMaterial({
            color: "white",
            roughness: 0.7,
            metalness: 0.3,
            map: basetl2

        });
        let base = new T.Mesh(new T.CylinderGeometry(5, 5, 16.1, 32, 32), base_material);
        castleGroup.add(base);
        base.translateY(6);
        let top = new T.Mesh(new T.CylinderGeometry(6, 6, 2, 32, 32), base2_material);
        castleGroup.add(top);
        top.translateY(14);
        let topshape = new T.Shape();
        topshape.arc(0, 0, 6, 0, Math.PI * 2);
        let top2 = new T.Mesh(new T.ShapeGeometry(topshape), top_material);
        castleGroup.add(top2);
        top2.translateY(15.06);
        top2.rotateX(Math.PI / 2);

        let exSettings = {
            steps: 10,
            depth: 3,
            bevelEnabled: false,
        };
        let exSettings2 = {
            steps: 20,
            depth: 2,
            bevelEnabled: false,
        };
        let circleshape = new T.Shape();
        circleshape.moveTo(5, 0);
        circleshape.arc(-5, 0, 5, 0, Math.PI / 4, false);
        circleshape.moveTo(5 / Math.sqrt(2), 5 / Math.sqrt(2));
        circleshape.lineTo(6.5 / Math.sqrt(2), 6.5 / Math.sqrt(2));
        circleshape.arc(-6.5 / Math.sqrt(2), -6.5 / Math.sqrt(2), 6.5, Math.PI / 4, 0, true);

        let circle_geom = new T.ExtrudeGeometry(circleshape, exSettings);
        let circle = new T.Mesh(circle_geom, new T.MeshStandardMaterial({
            color: "grey"
        }));
        let circlegp = new T.Group();
        circlegp.add(circle);
        circle.translateY(16);
        circle.rotateX(Math.PI / 2);

        let circle2 = new T.Mesh(circle_geom, new T.MeshStandardMaterial({
            color: "grey"
        }));
        circlegp.add(circle2);
        circle2.translateY(16);
        circle2.rotateY(Math.PI / 2);
        circle2.rotateX(Math.PI / 2);

        let circle3 = new T.Mesh(circle_geom, new T.MeshStandardMaterial({
            color: "grey"
        }));
        circlegp.add(circle3);
        circle3.translateY(16);
        circle3.rotateY(Math.PI);
        circle3.rotateX(Math.PI / 2);

        let circle4 = new T.Mesh(circle_geom, new T.MeshStandardMaterial({
            color: "grey"
        }));
        circlegp.add(circle4);
        circle4.translateY(16);
        circle4.rotateY(Math.PI / 2 * 3);
        circle4.rotateX(Math.PI / 2);
        castleGroup.add(circlegp);
        circlegp.rotateY(-Math.PI / 8);
        let circletopshape = new T.Shape();
        circletopshape.moveTo(5.2, 0);
        circletopshape.arc(-5.2, 0, 5.2, 0, Math.PI * 2, true);
        circletopshape.moveTo(6.2, 0);
        circletopshape.arc(-6.2, 0, 6.2, 0, Math.PI * 2, false);

        let circletop_geom = new T.ExtrudeGeometry(circletopshape, exSettings2);
        let circletop = new T.Mesh(circletop_geom, new T.MeshStandardMaterial({
            color: "#CDB38B"
        }));
        castleGroup.add(circletop);
        circletop.translateY(15.5);
        circletop.rotateX(Math.PI / 2);
        /** @type {number} */
        const x = params.x || 0; // Position x
        /** @type {number} */
        const y = params.y || 0; // Position y
        /** @type {number} */
        const z = params.z || 0; // Position z
        /** @type {number} */
        const scale = params.scale || 1; // Scale
        castleGroup.position.set(x, y, z); // CS559 Sample Code
        castleGroup.scale.set(scale, scale, scale);
        for (let i of castleGroup.children) {
            i.receiveShadow = true;
            i.castShadow = true;
        }

    }
}