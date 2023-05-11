/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import {
    GrObject
} from "../libs/CS559-Framework/GrObject.js";

let displacement = new T.TextureLoader().load('../textures/heightmap.png');

export class Terrain extends GrObject {
    constructor() {
        let geometry = new T.PlaneGeometry(20, 20, 100, 100);
        let material = new T.MeshStandardMaterial({
            color: "rgb(0, 125, 0)",
            displacementMap: displacement,
            displacementScale: 5,
        });
        let mesh = new T.Mesh(geometry, material);
        geometry.computeVertexNormals();
        mesh.rotation.x = -Math.PI / 2;
        mesh.position.y = -0.2
        super('terrain', mesh);
    }
}