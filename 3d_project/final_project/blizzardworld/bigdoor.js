import * as T from '../../libs/CS559-Three/build/three.module.js';

import {
    GrObject
} from "../../libs/CS559-Framework/GrObject.js";
import {
    shaderMaterial
} from "../../libs/CS559-Framework/shaderHelper.js";
let BigdoorCount = 0;
export class Bigdoor extends GrObject {
    constructor(params = {}) {
        const bigdoorGroup = new T.Group();
        super(`MainGate`, bigdoorGroup);
        let basement_group = new T.Group();
        let exSettings = {
            steps: 10,
            depth: 1,
            bevelEnabled: false,
        };
        let exSettings2 = {
            steps: 10,
            depth: 4.02,
            bevelEnabled: false,
        };
        let exSettings3 = {
            steps: 10,
            depth: 0.3,
            bevelEnabled: false,
        };


        let base1_shape = new T.Shape();
        base1_shape.moveTo(-1, 0);
        base1_shape.lineTo(-2, 0);
        base1_shape.lineTo(-2, 5);
        base1_shape.lineTo(2, 5);
        base1_shape.lineTo(2, 0);
        base1_shape.lineTo(1, 0);
        base1_shape.lineTo(1, 2.8);
        base1_shape.arc(-1, 0, 1, 0, Math.PI);
        base1_shape.lineTo(-1, 0);

        let base1tl = new T.TextureLoader().load('./images/castle.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.22;
            texture.repeat.x = 0.2;
        });
        let base1_material = new T.MeshStandardMaterial({
            color: "white",
            roughness: 0.7,
            metalness: 0.3,
            map: base1tl

        });

        let base2tl = new T.TextureLoader().load('./images/castle.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.8;
            texture.repeat.x = 1.3;
        });
        let base2_material = new T.MeshStandardMaterial({
            color: "white",
            roughness: 0.7,
            metalness: 0.3,
            map: base2tl

        });
        let base4tl = new T.TextureLoader().load('./images/texture.png', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.2;
            texture.repeat.x = 0.2;
        });
        let base4_material = new T.MeshStandardMaterial({
            color: "white",
            roughness: 0.7,
            metalness: 0.3,
            map: base4tl

        });

        let base1_geom = new T.ExtrudeGeometry(base1_shape, exSettings);
        let base1 = new T.Mesh(base1_geom, base1_material);
        basement_group.add(base1);
        base1.translateX(1.07);
        base1.rotateY(Math.PI / 2);


        let base2_shape = new T.Shape();
        base2_shape.moveTo(-1, 0);
        base2_shape.lineTo(-2, 0);
        base2_shape.lineTo(-2, 5);
        base2_shape.lineTo(4.93, 5);
        base2_shape.lineTo(4.93, 0);
        base2_shape.lineTo(1, 0);
        base2_shape.lineTo(1, 2.4);
        base2_shape.arc(-1, 0, 1, 0, Math.PI);
        base1_shape.lineTo(-1, 0);

        let base2_geom = new T.ExtrudeGeometry(base2_shape, exSettings);
        let base2 = new T.Mesh(base2_geom, base1_material);
        basement_group.add(base2);
        base2.translateX(3.08);
        base2.translateZ(-2.01);


        let base3 = new T.Mesh(new T.BoxGeometry(7, 5, 1), base2_material);
        basement_group.add(base3);
        base3.translateY(2.5);
        base3.translateX(4.58);
        base3.translateZ(1.51);

        let base4_shape = new T.Shape();

        base4_shape.moveTo(1.07, 1);
        base4_shape.lineTo(1.07, 1.4);
        base4_shape.arc(-1.07, 0, 1.07, 0, Math.PI / 2);
        base4_shape.lineTo(0, 6);
        base4_shape.lineTo(2.07, 6 - 2.14);
        base4_shape.lineTo(2.07, 2.85);
        base4_shape.lineTo(8, 1.64);
        base4_shape.lineTo(8, 1);
        base4_shape.lineTo(1.07, 1);
        let base4_geom = new T.ExtrudeGeometry(base4_shape, exSettings2);
        let base4 = new T.Mesh(base4_geom, base4_material);
        basement_group.add(base4);
        base4.translateY(4);
        // base4.translateX(5.08);
        base4.translateZ(-2.01);



        let basement_group2 = new T.Group();
        basement_group2.copy(basement_group);

        bigdoorGroup.add(basement_group);
        basement_group.translateY(3.25);
        bigdoorGroup.add(basement_group2);
        basement_group2.rotateY(Math.PI);

        basement_group2.children[1].translateZ(3.02);
        basement_group2.children[2].translateZ(-3.02);
        basement_group2.translateY(3.25);

        let wooden_group = new T.Group();
        bigdoorGroup.add(wooden_group);
        wooden_group.translateY(3.25);
        let wood1_shape = new T.Shape();
        wood1_shape.moveTo(1.05, 0);
        wood1_shape.lineTo(1.05, 4.3 + 1.05);
        wood1_shape.arc(-1.05, 0, 1.05, 0, Math.PI);
        wood1_shape.lineTo(-1.05, 0);
        wood1_shape.lineTo(-1.3, 0);
        wood1_shape.lineTo(-1.3, 4.3 + 1.05);
        wood1_shape.arc(1.3, 0, 1.3, Math.PI, 0, true);
        wood1_shape.lineTo(1.3, 0);
        let wood1tl = new T.TextureLoader().load('./images/wood.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.3;
            texture.repeat.x = 0.3;
        });
        let wood1_material = new T.MeshStandardMaterial({
            color: "white",
            roughness: 0.7,
            metalness: 0.3,
            map: wood1tl

        });
        let wood2tl = new T.TextureLoader().load('./images/wood.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.1;
            texture.repeat.x = 0.1;
        });
        let wood2_material = new T.MeshStandardMaterial({
            color: "white",
            roughness: 0.7,
            metalness: 0.3,
            map: wood2tl

        });
        let wood1_geom = new T.ExtrudeGeometry(wood1_shape, exSettings3);
        let wood1 = new T.Mesh(wood1_geom, wood1_material);
        wooden_group.add(wood1);
        wood1.translateZ(1.8);
        let wood2 = new T.Mesh(wood1_geom, wood1_material);
        wooden_group.add(wood2);
        wood2.translateZ(-2.1);

        let woodpart1 = new T.Mesh(new T.BoxGeometry(7, 0.25, 4.22), wood2_material);
        wooden_group.add(woodpart1);
        woodpart1.translateY(5);
        woodpart1.translateX(4.54);

        let woodpart2 = new T.Mesh(new T.BoxGeometry(7, 0.25, 4.22), wood2_material);
        wooden_group.add(woodpart2);
        woodpart2.translateY(5);
        woodpart2.translateX(-4.54);
        let exSettings4 = {
            steps: 10,
            depth: 4.1,
            bevelEnabled: false,
        };
        let woodenright = new T.Group();
        wooden_group.add(woodenright);
        woodenright.translateY(4);
        let grey1_shape = new T.Shape();
        grey1_shape.moveTo(0.98, 0);
        grey1_shape.lineTo(0.98, 2.4);
        grey1_shape.arc(-0.98, 0, 0.98, 0, Math.PI);
        grey1_shape.lineTo(-0.98, 0);
        grey1_shape.lineTo(-1.25, 0);
        grey1_shape.lineTo(-1.25, 2.4);
        grey1_shape.arc(1.25, 0, 1.25, Math.PI, 0, true);
        grey1_shape.lineTo(1.25, 0);
        grey1_shape.lineTo(0.98, 0);
        let grey1_shape_geom = new T.ExtrudeGeometry(grey1_shape, exSettings3);
        let grey1 = new T.Mesh(grey1_shape_geom, new T.MeshStandardMaterial({
            color: "grey"
        }));

        woodenright.add(grey1);
        grey1.translateX(3.08);
        grey1.translateZ(-1.3);
        grey1.translateY(-4);

        let grey2 = new T.Mesh(grey1_shape_geom, new T.MeshStandardMaterial({
            color: "grey"
        }));

        woodenright.add(grey2);
        grey2.translateX(3.08);
        grey2.translateZ(-2.02);
        grey2.translateY(-4);


        let grey3_shape = new T.Shape();
        grey3_shape.moveTo(0.98, 0);
        grey3_shape.lineTo(0.98, 2.8);
        grey3_shape.arc(-0.98, 0, 0.98, 0, Math.PI);
        grey3_shape.lineTo(-0.98, 0);
        grey3_shape.lineTo(-1.25, 0);
        grey3_shape.lineTo(-1.25, 2.8);
        grey3_shape.arc(1.25, 0, 1.25, Math.PI, 0, true);
        grey3_shape.lineTo(1.25, 0);
        grey3_shape.lineTo(0.98, 0);
        let grey3_shape_geom = new T.ExtrudeGeometry(grey3_shape, exSettings3);

        let grey3 = new T.Mesh(grey3_shape_geom, new T.MeshStandardMaterial({
            color: "grey"
        }));
        woodenright.add(grey3);
        grey3.translateY(-4);
        grey3.translateX(1.05);
        grey3.rotateY(Math.PI / 2);

        let grey4 = new T.Mesh(grey3_shape_geom, new T.MeshStandardMaterial({
            color: "grey"
        }));
        woodenright.add(grey4);
        grey4.translateY(-4);
        grey4.translateX(1.78);
        grey4.rotateY(Math.PI / 2);


        let woodtop_shape = new T.Shape();
        woodtop_shape.moveTo(2.05, 1);
        woodtop_shape.lineTo(2.3, 1);
        woodtop_shape.lineTo(2.3, 2.85 - 0.25);
        woodtop_shape.lineTo(7, 1.64 - 0.25);
        woodtop_shape.lineTo(7, 1.64 + 0.2);
        woodtop_shape.lineTo(2.3, 2.85 + 0.2);
        woodtop_shape.lineTo(2.3, 6 - 2.14 + 0.125);
        woodtop_shape.lineTo(0, 6 + 0.125);
        woodtop_shape.lineTo(0, 6 - 0.125);
        woodtop_shape.lineTo(0.914, 6 - 1.07);
        woodtop_shape.lineTo(0, 6 - 1.42);
        woodtop_shape.lineTo(0, 6 - 1.42 - 0.57);
        woodtop_shape.lineTo(1.2, 6 - 0.125 - 1.24);
        woodtop_shape.lineTo(2.05, 3.86 - 0.1);
        woodtop_shape.lineTo(2.05, 2.85 - 0.6 + 0.2);
        woodtop_shape.arc(0, 0.6, 0.6, Math.PI / 2 * 3, Math.PI, true);
        woodtop_shape.lineTo(2.05 - 0.6 - 0.25, 2.85 + 0.2);
        woodtop_shape.arc(0.85, 0, 0.85, Math.PI, Math.PI / 2 * 3);
        woodtop_shape.lineTo(2.05, 1);

        let woodtop_shape_geom = new T.ExtrudeGeometry(woodtop_shape, exSettings4);
        let woodtop = new T.Mesh(woodtop_shape_geom, wood2_material);
        woodenright.add(woodtop);
        woodtop.translateZ(-2.05);
        let woodtmp1 = new T.Mesh(new T.BoxGeometry(0.35, 1.6, 4.1), wood2_material);
        woodenright.add(woodtmp1);
        woodtmp1.translateX(2.14 + 1.07);
        woodtmp1.translateY(1.7);
        let woodtmp2 = new T.Mesh(new T.BoxGeometry(0.35, 1.3, 4.1), wood2_material);
        woodenright.add(woodtmp2);
        woodtmp2.translateX(2.14 + 1.07 + 1.07);
        woodtmp2.translateY(1.7);
        let woodtmp3 = new T.Mesh(new T.BoxGeometry(0.35, 1, 4.1), wood2_material);
        woodenright.add(woodtmp3);
        woodtmp3.translateX(2.14 + 1.13 * 3);
        woodtmp3.translateY(1.6);

        let woodenleft = new T.Group();
        woodenleft.copy(woodenright);
        wooden_group.add(woodenleft);

        woodenleft.rotateY(Math.PI);
        woodenleft.children[0].translateZ(2.28);
        woodenleft.children[1].translateZ(3.75);
        let woodtmp4 = new T.Mesh(new T.BoxGeometry(4.6, 0.45, 4.1), wood2_material);
        wooden_group.add(woodtmp4);
        woodtmp4.translateY(7.25);

        let woodtmp5 = new T.Mesh(new T.BoxGeometry(0.3, 2.86, 4.1), wood2_material);
        wooden_group.add(woodtmp5);
        woodtmp5.translateY(8.5);
        let roof1tl = new T.TextureLoader().load('./images/roofblue.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 1.3;
            texture.repeat.x = 1;
        });
        let roof1_material = new T.MeshStandardMaterial({
            color: "white",
            roughness: 0.7,
            metalness: 0.3,
            map: roof1tl

        });
        let roof2tl = new T.TextureLoader().load('./images/roofblue.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 1.5;
            texture.repeat.x = 1;
        });
        let roof2_material = new T.MeshStandardMaterial({
            color: "white",
            roughness: 0.7,
            metalness: 0.3,
            map: roof2tl

        });
        let roof3tl = new T.TextureLoader().load('./images/roofblue.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.65;
            texture.repeat.x = 1;
        });
        let roof3_material = new T.MeshStandardMaterial({
            color: "white",
            roughness: 0.7,
            metalness: 0.3,
            map: roof3tl

        });


        let roof = new T.Group();
        basement_group.add(roof);

        let roof1 = new T.Mesh(new T.BoxGeometry(4.2, 0.2, 3.4), roof1_material);

        roof.add(roof1);
        roof1.translateX(1.15);
        roof1.translateY(9.16);
        roof1.rotateY(Math.PI / 2);
        roof1.rotateX(Math.atan2(2.07, 2.14));


        let roof2 = new T.Mesh(new T.BoxGeometry(4.2, 0.2, 4.6), roof2_material);

        roof.add(roof2);
        roof2.translateX(4.5);
        roof2.translateY(6.50);
        roof2.rotateY(Math.PI / 2);
        roof2.rotateX(-Math.atan2(4.7, 1.21) + Math.PI / 2);

        let roof3 = new T.Mesh(new T.BoxGeometry(4.2, 0.2, 1.02), roof3_material);

        roof.add(roof3);
        roof3.translateX(2.3);
        roof3.translateY(7.5);
        roof3.rotateY(Math.PI / 2);
        roof3.rotateX(Math.PI / 2);
        let roofleft = new T.Group();
        roofleft.copy(roof);
        basement_group.add(roofleft);
        roofleft.rotateY(Math.PI);
        let movie1tl = new T.TextureLoader().load('./images/movie1.jpg');
        let movie1_material = new T.MeshStandardMaterial({
            color: "white",
            roughness: 0.7,
            metalness: 0.3,
            map: movie1tl,
            side: T.DoubleSide

        });
        let movie2tl = new T.TextureLoader().load('./images/movie2.jpg');
        let movie2_material = new T.MeshStandardMaterial({
            color: "white",
            roughness: 0.7,
            metalness: 0.3,
            map: movie2tl,
            side: T.DoubleSide

        });
        let movie1 = new T.Mesh(new T.PlaneGeometry(1.5, 1), movie1_material);
        // movie1.rotateY(Math.PI / 2);
        bigdoorGroup.add(movie1);
        movie1.translateZ(0.95);
        movie1.translateY(5.5);
        movie1.translateX(3.35);
        movie1.scale.set(1.5, 1.5, 1.5);

        let movie2 = new T.Mesh(new T.PlaneGeometry(1.3, 1), movie2_material);
        // movie1.rotateY(Math.PI / 2);
        bigdoorGroup.add(movie2);
        movie2.translateZ(0.95);
        movie2.translateY(5.5);
        movie2.translateX(-3.17);
        movie2.scale.set(1.5, 1.5, 1.5);

        /** @type {number} */
        const x = params.x || 0; // Position x
        /** @type {number} */
        const y = params.y || 0; // Position y
        /** @type {number} */
        const z = params.z || 0; // Position z
        /** @type {number} */
        const scale = params.scale || 1; // Scale
        bigdoorGroup.position.set(x, y - 12, z); // CS559 Sample Code
        bigdoorGroup.scale.set(5, 5, 4);
        bigdoorGroup.castShadow = true;
        bigdoorGroup.receiveShadow = true;
    }

}