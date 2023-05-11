import * as T from '../../libs/CS559-Three/build/three.module.js';

import {
    GrObject
} from "../../libs/CS559-Framework/GrObject.js";
let StairCount = 0;
export class StairCase extends GrObject {
    constructor(params = {}) {
        const staircaseGroup = new T.Group();
        super(`StairCase-${++StairCount}`, staircaseGroup);
        let width = params.width,
            height = params.height,
            number = params.number;
        let stepx = width / number,
            stepy = height / number;
        let base_shape = new T.Shape();
        let ix = 0,
            iy = height;
        base_shape.moveTo(0, 0);
        for (let i = 1; i <= number * 2; i++) {
            base_shape.lineTo(ix, iy);
            if (i % 2 == 1)
                ix += stepx;
            else
                iy -= stepy;
        }
        base_shape.lineTo(width, 0);
        base_shape.lineTo(0, 0);
        let greytl = new T.TextureLoader().load('./images/castle.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.4;
            texture.repeat.x = 0.4;
        });
        let grey_material = new T.MeshStandardMaterial({
            color: "white",
            map: greytl,
            side: T.DoubleSide

        });
        let exSettings = {
            steps: 10,
            depth: params.depth,
            bevelEnabled: false,
        };
        let base_geo = new T.ExtrudeGeometry(base_shape, exSettings);
        let base = new T.Mesh(base_geo, grey_material);
        staircaseGroup.add(base);


        /** @type {number} */
        const x = params.x || 0; // Position x
        /** @type {number} */
        const y = params.y || 0; // Position y
        /** @type {number} */
        const z = params.z || 0; // Position z
        /** @type {number} */
        const scale = params.scale || 1; // Scale
        staircaseGroup.position.set(x, y, z); // CS559 Sample Code
        staircaseGroup.scale.set(scale, scale, scale);
        staircaseGroup.castShadow = true;
        staircaseGroup.receiveShadow = true;
    }
}