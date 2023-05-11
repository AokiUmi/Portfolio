import * as T from '../../libs/CS559-Three/build/three.module.js';

import {
    GrObject
} from "../../libs/CS559-Framework/GrObject.js";

import {
    NormalHouse,
    HalfHouse
} from "./normalhouse.js";

import {
    SmallLamp
} from "./lamp.js";
export class Shed extends GrObject {
    constructor(params = {}) {
        const shedGroup = new T.Group();
        super(`Shed`, shedGroup);
        let woodtl = new T.TextureLoader().load('./images/wood3.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.1;
            texture.repeat.x = 0.1;
        });
        let wood_material = new T.MeshStandardMaterial({
            color: "white",
            roughness: 1,
            metalness: 0.4,
            map: woodtl

        });
        let wood2tl = new T.TextureLoader().load('./images/wood4.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.6;
            texture.repeat.x = 0.6;
        });
        let wood2_material = new T.MeshStandardMaterial({
            color: "white",
            roughness: 1,
            metalness: 0.4,
            map: wood2tl

        });
        let roofgreytl = new T.TextureLoader().load('./images/roofgrey.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 1.6;
            texture.repeat.x = 0.8;
        });
        let roofgrey_material = new T.MeshStandardMaterial({
            color: "#F5DEB3",
            map: roofgreytl

        });
        let roof2tl = new T.TextureLoader().load('./images/roof2.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 1;
            texture.repeat.x = 2;
        });
        let roof2_material = new T.MeshStandardMaterial({
            color: "#EEDFCC",
            map: roof2tl

        });
        let texturetl = new T.TextureLoader().load('./images/texture.png', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.2;
            texture.repeat.x = 0.2;
        });
        let house1 = new NormalHouse({
            width: 0.4,
            height: 3,
            middleheight: 2.7,
            color: "white",
            roofmaterial: roofgrey_material,
            texture: texturetl,
            depth: 1.3,


        }).objects[0];

        shedGroup.add(house1);
        house1.position.set(1.6, 0, -1);
        let house2 = new NormalHouse({
            width: 0.4,
            height: 3,
            middleheight: 2.7,
            color: "white",
            roofmaterial: roofgrey_material,
            texture: texturetl,
            depth: 2,


        }).objects[0];

        shedGroup.add(house2);
        house2.position.set(1.55, 0, 0.4);
        house2.rotateY(-Math.PI / 4);

        let house3 = new NormalHouse({
            width: 0.4,
            height: 3,
            middleheight: 2.7,
            color: "white",
            roofmaterial: roofgrey_material,
            texture: texturetl,
            depth: 1.3,


        }).objects[0];

        shedGroup.add(house3);
        house3.position.set(-4.2, 0, -1);
        let house4 = new NormalHouse({
            width: 0.4,
            height: 3,
            middleheight: 2.7,
            color: "white",
            roofmaterial: roofgrey_material,
            texture: texturetl,
            depth: 2,


        }).objects[0];

        shedGroup.add(house4);
        house4.position.set(-4.15, 0, 0.4);
        house4.rotateY(Math.PI / 4);

        let house5 = new NormalHouse({
            width: 0.4,
            height: 3,
            middleheight: 2.7,
            color: "white",
            roofmaterial: roofgrey_material,
            texture: texturetl,
            depth: 2.8,


        }).objects[0];
        shedGroup.add(house5);
        house5.position.set(-2.8, 0, 1.8);
        house5.rotateY(Math.PI / 2);

        let roof = new T.Mesh(new T.BoxGeometry(3.2, 0.3, 4.6), roof2_material);
        shedGroup.add(roof);
        roof.position.set(-1.35, 3.8, 0);
        roof.rotateX(Math.PI / 6);


        let box1 = new T.Mesh(new T.BoxGeometry(0.3, 4.6, 0.3), wood_material);
        shedGroup.add(box1);
        box1.position.set(0, 2.4, -1.5);


        let box2 = new T.Mesh(new T.BoxGeometry(0.3, 4.6, 0.3), wood_material);
        shedGroup.add(box2);
        box2.position.set(-2.6, 2.4, -1.5);

        let box4 = new T.Mesh(new T.BoxGeometry(2.8, 1.4, 0.3), wood2_material);
        shedGroup.add(box4);
        box4.position.set(-1.3, 4, -1.501);
        let lamp1 = new SmallLamp({
            scale: 0.02,
            x: 0,
            y: 4,
            z: -2.2,
        }).objects[0];
        shedGroup.add(lamp1);
        lamp1.rotateZ(Math.PI / 2);

        let lamp2 = new SmallLamp({
            scale: 0.02,
            x: -2.6,
            y: 4,
            z: -2.2,
        }).objects[0];
        shedGroup.add(lamp2);
        lamp2.rotateZ(Math.PI / 2);

        /** @type {number} */
        const x = params.x || 0; // Position x
        /** @type {number} */
        const y = params.y || 0; // Position y
        /** @type {number} */
        const z = params.z || 0; // Position z
        /** @type {number} */
        const scale = params.scale || 1; // Scale
        shedGroup.position.set(x, y, z); // CS559 Sample Code
        shedGroup.scale.set(scale, scale, scale);
        shedGroup.castShadow = true;
        shedGroup.receiveShadow = true;

    }
}