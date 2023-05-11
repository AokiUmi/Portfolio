import * as T from '../../libs/CS559-Three/build/three.module.js';

import {
    GrObject
} from "../../libs/CS559-Framework/GrObject.js";
let TowerCount = 0;
import {
    NormalHouse,
    HalfHouse
} from "./normalhouse.js";
export class Tower extends GrObject {
    constructor(params = {}) {
        const towerGroup = new T.Group();
        super(`Tower-${++TowerCount}`, towerGroup);
        let woodtl = new T.TextureLoader().load('./images/wood3.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.2;
            texture.repeat.x = 0.2;
        });
        let wood_material = new T.MeshStandardMaterial({
            color: "white",
            map: woodtl

        });
        let wood2tl = new T.TextureLoader().load('./images/wood4.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.2;
            texture.repeat.x = 0.2;
        });
        let wood2_material = new T.MeshStandardMaterial({
            color: "white",
            map: wood2tl

        });
        let roofblue1tl = new T.TextureLoader().load('./images/roofblue.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 1;
            texture.repeat.x = 1;
        });
        let roofblue1_material = new T.MeshStandardMaterial({
            color: "white",
            map: roofblue1tl

        });
        let greytl = new T.TextureLoader().load('./images/castle.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 1.4;
            texture.repeat.x = 1.4;
        });
        let grey_material = new T.MeshStandardMaterial({
            color: "white",
            map: greytl,
            side: T.DoubleSide

        });
        let textl = new T.TextureLoader().load('./images/texture2.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 1;
            texture.repeat.x = 1;
        });
        let tex_material = new T.MeshStandardMaterial({
            color: "white",
            map: textl,
            side: T.DoubleSide

        });
        let tower = new T.Mesh(new T.CylinderGeometry(1.5, 1.7, 10.4, 4, 32), grey_material);
        towerGroup.add(tower);
        tower.rotateY(Math.PI / 4);

        let pillar1 = new T.Mesh(new T.BoxGeometry(0.4, 10, 0.4), wood_material);
        towerGroup.add(pillar1);
        // pillar1.rotateY(Math.PI / 4);

        pillar1.position.set(1.5 * Math.sqrt(2) / 2, 2.4, 1.5 * Math.sqrt(2) / 2);
        let pillar2 = new T.Mesh(new T.BoxGeometry(0.4, 10, 0.4), wood_material);
        towerGroup.add(pillar2);
        //  pillar2.rotateY(Math.PI / 4);

        pillar2.position.set(-1.5 * Math.sqrt(2) / 2, 2.4, 1.5 * Math.sqrt(2) / 2);

        let pillar3 = new T.Mesh(new T.BoxGeometry(0.4, 10, 0.4), wood_material);
        towerGroup.add(pillar3);
        // pillar3.rotateY(Math.PI / 4);

        pillar3.position.set(1.5 * Math.sqrt(2) / 2, 2.4, -1.5 * Math.sqrt(2) / 2);
        let pillar4 = new T.Mesh(new T.BoxGeometry(0.4, 10, 0.4), wood_material);
        towerGroup.add(pillar4);
        // pillar4.rotateY(Math.PI / 4);

        pillar4.position.set(-1.5 * Math.sqrt(2) / 2, 2.4, -1.5 * Math.sqrt(2) / 2);

        let top = new T.Mesh(new T.BoxGeometry(2.4, 1, 2.4), tex_material);
        towerGroup.add(top);
        top.position.y = 5.5;


        let top2 = new T.Mesh(new T.BoxGeometry(3.6, 0.4, 3.6), wood2_material);
        towerGroup.add(top2);
        top2.position.y = 7;

        let roof = new T.Mesh(new T.ConeGeometry(2.6, 3, 4, 32), roofblue1_material);
        towerGroup.add(roof);
        roof.rotateY(Math.PI / 4);
        roof.position.y = 8.7;
        /** @type {number} */
        const x = params.x || 0; // Position x
        /** @type {number} */
        const y = params.y || 0; // Position y
        /** @type {number} */
        const z = params.z || 0; // Position z
        /** @type {number} */
        const scale = params.scale || 1; // Scale
        towerGroup.position.set(x, y, z); // CS559 Sample Code
        towerGroup.scale.set(scale, scale, scale);


        towerGroup.castShadow = true;
        towerGroup.receiveShadow = true;
    }
}


export class TowerGate extends GrObject {
    constructor(params = {}) {
        const towergateGroup = new T.Group();
        super(`TowerGate`, towergateGroup);
        let woodtl = new T.TextureLoader().load('./images/texture.png', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.2;
            texture.repeat.x = 0.2;
        });

        let roofblue1tl = new T.TextureLoader().load('./images/roofblue.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 1;
            texture.repeat.x = 1;
        });
        let roofblue1_material = new T.MeshStandardMaterial({
            color: "white",
            map: roofblue1tl

        });
        let greytl = new T.TextureLoader().load('./images/castle.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.5;
            texture.repeat.x = 1;
        });
        let grey2tl = new T.TextureLoader().load('./images/castle2.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.2;
            texture.repeat.x = 0.2;
        });
        let grey_material = new T.MeshStandardMaterial({
            color: "white",
            map: greytl,
            side: T.DoubleSide

        });
        let wood2tl = new T.TextureLoader().load('./images/wood4.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.2;
            texture.repeat.x = 0.2;
        });
        let wood2_material = new T.MeshStandardMaterial({
            color: "white",
            map: wood2tl

        });
        let tower1 = new Tower().objects[0];
        towergateGroup.add(tower1);;
        tower1.position.z = 3.4;

        let tower2 = new Tower().objects[0];
        towergateGroup.add(tower2);;
        tower2.position.z = -3.4;


        let house = new NormalHouse({
            width: 2,
            height: 2.2,
            middleheight: 1.6,
            color: "white",
            roofmaterial: roofblue1_material,
            texture: grey2tl,
            depth: 6,

        }).objects[0];
        towergateGroup.add(house);
        house.position.z = -3.4;
        house.position.y = 3.5;

        let box1 = new T.Mesh(new T.BoxGeometry(0.4, 0.4, 9), wood2_material);
        towergateGroup.add(box1);
        box1.position.set(-1.12, 5, 0);

        let box2 = new T.Mesh(new T.BoxGeometry(0.4, 0.4, 9), wood2_material);
        towergateGroup.add(box2);
        box2.position.set(1.12, 5, 0);

        let box3 = new T.Mesh(new T.BoxGeometry(0.4, 0.4, 4.5), wood2_material);
        towergateGroup.add(box3);
        box3.position.set(-1.08, 3.4, 0);

        let box4 = new T.Mesh(new T.BoxGeometry(0.4, 0.4, 4.5), wood2_material);
        towergateGroup.add(box4);
        box4.position.set(1.08, 3.4, 0);
        /** @type {number} */
        const x = params.x || 0; // Position x
        /** @type {number} */
        const y = params.y || 0; // Position y
        /** @type {number} */
        const z = params.z || 0; // Position z
        /** @type {number} */
        const scale = params.scale || 1; // Scale
        towergateGroup.position.set(x, y, z); // CS559 Sample Code
        towergateGroup.scale.set(scale, scale, scale);
        towergateGroup.castShadow = true;
        towergateGroup.receiveShadow = true;
    }
}