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

let MapleTreeCount = 0;
export class MapleTree extends Loaders.ObjGrObject {
    constructor(params = {}) {
        super({
            obj: "./load/MapleTree.obj",
            name: `MapleTree-${++MapleTreeCount}`,
            callback: function (this1) {
                this1.objects[0].traverse(obj => {
                    if (obj instanceof T.Mesh) {
                        if (obj.name == "tree_Mesh")
                            obj.material = new T.MeshStandardMaterial({
                                color: "#8B4513",
                                roughness: 0.6,
                                metalness: 0.7,
                            });
                        else if (obj.name == "leaves")
                            obj.material = new T.MeshStandardMaterial({
                                color: "#228B22",
                                roughness: 0.6,
                                metalness: 0.4,
                            });
                        else obj.material = new T.MeshStandardMaterial({
                            color: "#2E8B57",
                            roughness: 0.6,
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
        this.objects[0].castShadow = true;
        this.objects[0].receiveShadow = true;
    }
}

let RealTreeCount = 0;
export class RealTree extends Loaders.ObjGrObject {
    constructor(params = {}) {
        super({
            obj: "./load/fir.obj",
            name: `RealTree-${++RealTreeCount}`,
            callback: function (this1) {
                this1.objects[0].traverse(obj => {
                    if (obj instanceof T.Mesh) {
                        if (obj.name == "g1")
                            obj.material = new T.MeshStandardMaterial({
                                color: "#8B4513",
                                roughness: 0.6,
                                metalness: 0.7,
                            });

                        else obj.material = new T.MeshStandardMaterial({
                            color: "#B1E300",
                            roughness: 1,
                            metalness: 0.7,
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
        this.objects[0].castShadow = true;
        this.objects[0].receiveShadow = true;
    }
}


let PolyTreeCount = 0;
export class PolyTree extends Loaders.ObjGrObject {
    constructor(params = {}) {
        super({
            obj: "./load/Tree low.obj",
            mtl: "./load/Tree low.mtl",
            name: `PolyTree-${++PolyTreeCount}`,
            callback: function (this1) {
                this1.objects[0].traverse(obj => {
                    if (obj instanceof T.Mesh) {
                        if (obj.name == "Cylinder002")
                            obj.material = new T.MeshStandardMaterial({
                                color: "#8B4513",
                                roughness: 0.6,
                                metalness: 0.7,
                            });

                        else obj.material = new T.MeshStandardMaterial({
                            color: "#66CD00",
                            roughness: 1,
                            metalness: 0.7,
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
        this.objects[0].castShadow = true;
        this.objects[0].receiveShadow = true;
    }
}
let PolyTree3Count = 0;
export class PolyTree3 extends Loaders.ObjGrObject {
    constructor(params = {}) {
        super({
            obj: "./load/Lowpoly_tree_sample.obj",
            mtl: "./load/Lowpoly_tree_sample.mtl",
            name: `PolyTree3-${++PolyTree3Count}`,
            callback: function (this1) {
                this1.objects[0].traverse(obj => {
                    if (obj instanceof T.Mesh) {
                        obj.material = new T.MeshStandardMaterial({
                            color: "#67b842",
                            roughness: 1,
                            metalness: 0.7,
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
        this.objects[0].castShadow = true;
        this.objects[0].receiveShadow = true;
    }
}
let PolyTree2Count = 0;
export class PolyTree2 extends Loaders.ObjGrObject {
    constructor(params = {}) {
        super({
            obj: "./load/Tree.obj",
            name: `PolyTree2-${++PolyTree2Count}`,
            callback: function (this1) {
                this1.objects[0].traverse(obj => {
                    if (obj instanceof T.Mesh) {
                        obj.material = new T.MeshStandardMaterial({
                            color: "#577f56",
                            roughness: 1,
                            metalness: 0.7,
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
        this.objects[0].castShadow = true;
        this.objects[0].receiveShadow = true;
    }
}
let tex = new T.TextureLoader().load('./load/IslandTexture.png');


export class Island extends Loaders.ObjGrObject {
    constructor(params = {}) {
        super({
            obj: "./load/Island.obj",

            name: `Island`,
            callback: function (this1) {
                this1.objects[0].traverse(obj => {
                    if (obj instanceof T.Mesh) {
                        // if (obj.name == "Cylinder002")
                        obj.material = new T.MeshStandardMaterial({
                            color: "#8B4726",
                            // map: tex,
                            roughness: 1,
                            metalness: 0.5,
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
        this.objects[0].scale.set(scale, scale / 3, scale);
        this.objects[0].castShadow = true;
        this.objects[0].receiveShadow = true;
    }
}
export class Tree extends GrObject {
    constructor(params = {}) {
        let tree = new T.Group();
        let treetl = new T.TextureLoader().load("./images/tree.jpg", function (texture) {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 1;
            texture.repeat.x = 2;

        });
        let tree_material = new T.MeshStandardMaterial({
            color: "white",
            roughness: 0.5,
            map: treetl
        });
        let treemain = new T.Mesh(new T.CylinderGeometry(0.12, 0.12, 0.8, 32), tree_material);
        tree.add(treemain);
        treemain.translateY(0.3);

        let leaftl = new T.TextureLoader().load("./images/leaf.png", function (texture) {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 1;
            texture.repeat.x = 1;

        });
        let leaf_material = new T.MeshStandardMaterial({
            color: "#7CFC00",
            roughness: 0.5,
            map: leaftl
        });
        let leaf0 = new T.Mesh(new T.ConeGeometry(0.5, 0.8, 32), leaf_material);
        tree.add(leaf0);
        leaf0.translateY(0.89);

        let leaf1 = new T.Mesh(new T.ConeGeometry(0.4, 0.7, 32), leaf_material);
        tree.add(leaf1);
        leaf1.translateY(1.2);

        let leaf2 = new T.Mesh(new T.ConeGeometry(0.3, 0.6, 32), leaf_material);
        tree.add(leaf2);
        leaf2.translateY(1.5);

        let leaf3 = new T.Mesh(new T.ConeGeometry(0.2, 0.5, 32), leaf_material);
        tree.add(leaf3);
        leaf3.translateY(1.8);

        tree.scale.set(0.8, 0.8, 0.8);
        super("Tree", tree);
        /** @type {number} */
        const x = params.x || 0; // Position x
        /** @type {number} */
        const y = params.y || 0; // Position y
        /** @type {number} */
        const z = params.z || 0; // Position z
        /** @type {number} */
        const scale = params.scale || 1; // Scale
        tree.position.set(x, y, z); // CS559 Sample Code
        tree.scale.set(scale, scale, scale);
        tree.castShadow = true;
        tree.receiveShadow = true;

    }
}
export class DessertIsland extends Loaders.ObjGrObject {
    constructor(params = {}) {
        super({
            obj: "./load/Desert.obj",
            mtl: "./load/Desert.mtl",
            name: `DessertIsland`,
            callback: function (this1) {
                this1.objects[0].traverse(obj => {
                    if (obj instanceof T.Mesh) {

                        if (obj.name == "Sol.003_Plane.007" || obj.name == "Sol.002_Plane.006" || obj.name == "Sol_Plane.001")
                            obj.visible = false;
                        else if (obj.name == "Sol.001_Plane.005") {


                            obj.material = new T.MeshStandardMaterial({
                                color: "#966745",
                                // map: tex,
                                roughness: 1,
                                metalness: 0.5,
                            });
                            obj.scale.set(3, 1.8, 3);
                            obj.position.set(-45, -0.7, 40);
                            obj.rotateY(-Math.PI / 4);



                        } else if (obj.name == "Palmier.002_Cylinder.004" || obj.name == "Palmier.001_Cylinder.003" || obj.name == "Palmier_Cylinder.002") {
                            obj.scale.set(5, 5, 5);
                            obj.material = new T.MeshStandardMaterial({
                                color: "#277630",
                                // map: tex,
                                roughness: 1,
                                metalness: 0.5,
                            });
                            obj.position.set(-16, 0, -16);
                        } else obj.scale.set(5, 5, 5), obj.position.set(-10, 0, -10);

                    } else if (obj instanceof T.LineSegments) {
                        obj.visible = false;

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
        this.objects[0].castShadow = true;
        this.objects[0].receiveShadow = true;
    }
}

let MultiIslandCount = 0;
export class MultiIsland extends Loaders.ObjGrObject {
    constructor(params = {}) {
        super({
            obj: "./load/Low-Poly_Models.obj",
            mtl: "./load/Low-Poly_Models.mtl",
            name: `MultiIsland-${++MultiIslandCount}`,
            callback: function (this1) {
                this1.objects[0].traverse(obj => {
                    if (obj instanceof T.Mesh) {
                        if (obj.name == "Sphere") {
                            obj.material = new T.MeshStandardMaterial({
                                color: "#7d472a",

                                roughness: 1,
                                metalness: 0.5,
                            });
                            obj.visible = true;
                            obj.position.set(5.5, 0, 0.4);
                        } else if (obj.name == "Sphere.001") {
                            obj.material = new T.MeshStandardMaterial({
                                color: "#814b3f",

                                roughness: 1,
                                metalness: 0.5,
                            });
                            obj.visible = true;
                            obj.position.set(6, 0.4, 0);
                        } else if (obj.name == "Icosphere") {
                            obj.material = new T.MeshStandardMaterial({
                                color: "#401d10",

                                roughness: 1,
                                metalness: 0.5,
                            });
                            obj.visible = true;
                            obj.position.set(8, 0.8, 2);
                        } else if (obj.name == "Icosphere.001") {
                            obj.material = new T.MeshStandardMaterial({
                                color: "#713d20",

                                roughness: 1,
                                metalness: 0.5,
                            });
                            obj.visible = true;
                            obj.position.set(8, 0.6, 3);
                        } else if (obj.name == "Cylinder.001") {
                            obj.material = new T.MeshStandardMaterial({
                                color: "#167c55",

                                roughness: 1,
                                metalness: 0.5,
                            });
                            obj.visible = true;
                            obj.position.set(8.5, 0.6, 3);
                        } else if (obj.name == "Cylinder") {
                            obj.material = new T.MeshStandardMaterial({
                                color: "#577f56",

                                roughness: 1,
                                metalness: 0.5,
                            });
                            obj.visible = true;
                            obj.position.set(3.4, 0.6, 4);
                        } else if (obj.name == "Cylinder.014") {
                            obj.material = new T.MeshStandardMaterial({
                                color: "#4c3932",

                                roughness: 1,
                                metalness: 0.5,
                            });
                            obj.visible = true;
                            obj.position.set(-2, 0.6, 18);
                        } else if (obj.name == "Icosphere.025") {
                            obj.material = new T.MeshStandardMaterial({
                                color: "#5d3d2c",

                                roughness: 1,
                                metalness: 0.5,
                            });
                            obj.visible = true;
                            obj.position.set(1.4, 0.2, 9.4);
                        } else if (obj.name == "Icosphere.017") {
                            obj.material = new T.MeshStandardMaterial({
                                color: "#5d3d2c",

                                roughness: 1,
                                metalness: 0.5,
                            });
                            obj.visible = true;
                            obj.position.set(-11, -1.5, 8.2);
                        } else if (obj.name == "Icosphere_Icosphere.002") {
                            obj.material = new T.MeshStandardMaterial({
                                color: "#14451f",
                                roughness: 1,
                                metalness: 0.5,
                            });
                            obj.visible = true;
                            obj.position.set(-2, 0.6, 18);
                        } else if (obj.name == "Icosphere.001_Icosphere.003") {
                            obj.material = new T.MeshStandardMaterial({
                                color: "#14451f",

                                roughness: 1,
                                metalness: 0.5,
                            });
                            obj.visible = true;
                            obj.position.set(-2, 0.6, 18);
                        } else if (obj.name == "Cylinder.006") {
                            obj.material = new T.MeshStandardMaterial({
                                color: "#14451f",

                                roughness: 1,
                                metalness: 0.5,
                            });
                            obj.visible = true;
                            obj.position.set(-3, 1, 36);
                            obj.scale.set(2, 2, 2);

                        } else obj.visible = false;


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
        this.objects[0].castShadow = true;
        this.objects[0].receiveShadow = true;
    }
}