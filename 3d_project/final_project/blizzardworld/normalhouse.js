import * as T from '../../libs/CS559-Three/build/three.module.js';

import {
    GrObject
} from "../../libs/CS559-Framework/GrObject.js";
let NormalHouseCount = 0;

export class NormalHouse extends GrObject {
    constructor(params = {}) {
        const normalhouseGroup = new T.Group();
        super(`NormalHouse-${++NormalHouseCount}`, normalhouseGroup);
        //texture,color
        //height, width, middleheight,depth,
        let texture = params.texture;
        let house_material = new T.MeshStandardMaterial({
            color: params.color,
            roughness: 1,
            metalness: 0.4,
            map: texture

        });
        let exSettings = {
            steps: 10,
            depth: params.depth,
            bevelEnabled: false,
        };
        let width = params.width / 2,
            height = params.height,
            middle = params.middleheight;
        let house_shape = new T.Shape();
        house_shape.moveTo(-width, 0);
        house_shape.lineTo(-width, middle);
        house_shape.lineTo(0, height);
        house_shape.lineTo(width, middle);
        house_shape.lineTo(width, 0);

        let house_geometry = new T.ExtrudeGeometry(house_shape, exSettings);
        let house = new T.Mesh(house_geometry, house_material);
        normalhouseGroup.add(house);

        let roof_material = params.roofmaterial;
        let roof1 = new T.Mesh(new T.BoxGeometry(0.3, Math.sqrt(width * width + (height - middle) * (height - middle)) + 0.2, params.depth + 0.4), roof_material);
        normalhouseGroup.add(roof1);
        roof1.translateY(middle + (height - middle) / 2);
        roof1.translateX(width / 2);
        roof1.translateZ(params.depth / 2);
        roof1.rotateZ(Math.atan2(width, (height - middle)));

        let roof2 = new T.Mesh(new T.BoxGeometry(0.3, Math.sqrt(width * width + (height - middle) * (height - middle)) + 0.2, params.depth + 0.4), roof_material);
        normalhouseGroup.add(roof2);
        roof2.translateY(middle + (height - middle) / 2);
        roof2.translateX(-width / 2);
        roof2.translateZ(params.depth / 2);
        roof2.rotateZ(-Math.atan2(width, (height - middle)));


        /** @type {number} */
        const x = params.x || 0; // Position x
        /** @type {number} */
        const y = params.y || 0; // Position y
        /** @type {number} */
        const z = params.z || 0; // Position z
        /** @type {number} */
        const scale = params.scale || 1; // Scale
        normalhouseGroup.position.set(x, y, z); // CS559 Sample Code
        normalhouseGroup.scale.set(scale, scale, scale);

        normalhouseGroup.castShadow = true;
        normalhouseGroup.receiveShadow = true;
    }

}
let HalfHouseCount = 0;
export class HalfHouse extends GrObject {
    constructor(params = {}) {
        const halfhouseGroup = new T.Group();
        super(`HalfHouse-${++HalfHouseCount}`, halfhouseGroup);
        //texture,color
        //height, width, middleheight,depth,
        let texture = params.texture;
        let house_material = new T.MeshStandardMaterial({
            color: params.color,
            roughness: 1,
            metalness: 0.4,
            map: texture

        });
        let exSettings = {
            steps: 10,
            depth: params.depth,
            bevelEnabled: false,
        };
        let width = params.width / 2,
            height = params.height,
            middle = params.middleheight;
        let house_shape = new T.Shape();
        house_shape.moveTo(0, 0);
        house_shape.lineTo(0, height);
        house_shape.lineTo(-width, middle);
        house_shape.lineTo(-width, 0);

        let house_geometry = new T.ExtrudeGeometry(house_shape, exSettings);
        let house = new T.Mesh(house_geometry, house_material);
        halfhouseGroup.add(house);

        let roof_material = params.roofmaterial;

        let roof2 = new T.Mesh(new T.BoxGeometry(0.3, Math.sqrt(width * width + (height - middle) * (height - middle)) + 0.2, params.depth + 0.4), roof_material);
        halfhouseGroup.add(roof2);
        roof2.translateY(middle + (height - middle) / 2);
        roof2.translateX(-width / 2);
        roof2.translateZ(params.depth / 2);
        roof2.rotateZ(-Math.atan2(width, (height - middle)));


        /** @type {number} */
        const x = params.x || 0; // Position x
        /** @type {number} */
        const y = params.y || 0; // Position y
        /** @type {number} */
        const z = params.z || 0; // Position z
        /** @type {number} */
        const scale = params.scale || 1; // Scale
        halfhouseGroup.position.set(x, y, z); // CS559 Sample Code
        halfhouseGroup.scale.set(scale, scale, scale);

        halfhouseGroup.castShadow = true;
        halfhouseGroup.receiveShadow = true;
    }

}