import * as T from '../../libs/CS559-Three/build/three.module.js';

import {
    GrObject
} from "../../libs/CS559-Framework/GrObject.js";


let StandPillarCount = 0;
export class StandPillar extends GrObject {
    constructor(params = {}) {
        const standpillarGroup = new T.Group();
        super(`StandPillar-${++StandPillarCount}`, standpillarGroup);
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
        let base = new T.Mesh(new T.CylinderGeometry(0.3, 0.5, 3, 32), wood_material);
        standpillarGroup.add(base);
        let top = new T.Mesh(new T.ConeGeometry(0.3, 0.3, 32, 32), wood_material);
        standpillarGroup.add(top);
        top.position.y = 1.5 + 0.15;

        let shpere = new T.Mesh(new T.SphereGeometry(0.2), new T.MeshPhongMaterial({
            color: "white"
        }));
        standpillarGroup.add(shpere);
        shpere.position.y = 1.5 + 0.4;
        if (params.vis)
            standpillarGroup.children[2].visible = false;
        /** @type {number} */
        const x = params.x || 0; // Position x
        /** @type {number} */
        const y = params.y || 0; // Position y
        /** @type {number} */
        const z = params.z || 0; // Position z
        /** @type {number} */
        const scale = params.scale || 1; // Scale
        standpillarGroup.position.set(x, y, z); // CS559 Sample Code
        standpillarGroup.scale.set(scale, scale, scale);
        standpillarGroup.castShadow = true;
        standpillarGroup.receiveShadow = true;
    }

}