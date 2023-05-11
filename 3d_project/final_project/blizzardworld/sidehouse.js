import * as T from '../../libs/CS559-Three/build/three.module.js';

import {
    GrObject
} from "../../libs/CS559-Framework/GrObject.js";
import {
    NormalHouse,
    HalfHouse
} from "./normalhouse.js";
export class SideHouse extends GrObject {
    constructor(params = {}) {
        const sidehouseGroup = new T.Group();
        super(`SideHouse`, sidehouseGroup);


        let woodtl = new T.TextureLoader().load('./images/castle.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.3;
            texture.repeat.x = 0.3;
        });
        let wood_material = new T.MeshStandardMaterial({
            color: "white",
            roughness: 1,
            metalness: 0.4,
            map: woodtl

        });
        let exSettings = {
            steps: 10,
            depth: 5,
            bevelEnabled: false,
        };

        let house_shape = new T.Shape();
        house_shape.moveTo(0, 0);
        house_shape.lineTo(0, 6);
        house_shape.lineTo(3, 6);
        house_shape.lineTo(6, 3);
        house_shape.lineTo(6, 0);

        let house_geometry = new T.ExtrudeGeometry(house_shape, exSettings);
        let house = new T.Mesh(house_geometry, wood_material);
        sidehouseGroup.add(house);
        house.rotateX(Math.PI / 2 * 3);

        let roofblue1tl = new T.TextureLoader().load('./images/roofblue.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.4;
            texture.repeat.x = 0.4;
        });
        let roofblue1_material = new T.MeshStandardMaterial({
            color: "white",
            map: roofblue1tl

        });
        let exSettingsroof = {
            steps: 10,
            depth: 0.3,
            bevelEnabled: false,
        };
        let roof1_shape = new T.Shape();
        roof1_shape.moveTo(-1.5, 0);
        roof1_shape.lineTo(-1.5, 2);
        roof1_shape.lineTo(1.5, 2);
        roof1_shape.lineTo(2, 0);
        let roof1_geom = new T.ExtrudeGeometry(roof1_shape, exSettingsroof);
        let roof1 = new T.Mesh(roof1_geom, roofblue1_material);
        sidehouseGroup.add(roof1);
        roof1.translateY(3.4);
        roof1.translateX(7);
        roof1.translateZ(-1.6);
        roof1.rotateY(Math.PI / 2);
        roof1.rotateX(-Math.PI / 6);

        let roof2_shape = new T.Shape();
        roof2_shape.moveTo(-2.62, 0);
        roof2_shape.lineTo(-2.12, 2);
        roof2_shape.lineTo(2.12, 2);
        roof2_shape.lineTo(2.62, 0);
        let roof2_geom = new T.ExtrudeGeometry(roof2_shape, exSettingsroof);
        let roof2 = new T.Mesh(roof2_geom, roofblue1_material);
        sidehouseGroup.add(roof2);
        roof2.translateY(3.4);
        roof2.translateX(5.2);
        roof2.translateZ(-5.2);
        roof2.rotateY(Math.PI / 2 + Math.PI / 4);
        roof2.rotateX(-Math.PI / 6);


        let texturedoor1 = new T.TextureLoader().load('./images/door3.jpg');
        let wooddoor = new T.Mesh(new T.PlaneGeometry(3, 5), new T.MeshStandardMaterial({
            map: texturedoor1,
            side: T.DoubleSide
        }));
        sidehouseGroup.add(wooddoor);
        wooddoor.translateY(2.5);
        wooddoor.translateX(6.02);
        wooddoor.translateZ(-1.5);
        wooddoor.rotateY(Math.PI / 2);

        let wooddoor2 = new T.Mesh(new T.PlaneGeometry(3 * Math.sqrt(2), 5), new T.MeshStandardMaterial({
            map: texturedoor1,
            side: T.DoubleSide
        }));
        sidehouseGroup.add(wooddoor2);
        wooddoor2.translateY(2.5);
        wooddoor2.translateX(4.51);
        wooddoor2.translateZ(-4.51);
        wooddoor2.rotateY(Math.PI / 2 + Math.PI / 4);



        /** @type {number} */
        const x = params.x || 0; // Position x
        /** @type {number} */
        const y = params.y || 0; // Position y
        /** @type {number} */
        const z = params.z || 0; // Position z
        /** @type {number} */
        const scale = params.scale || 1; // Scale
        sidehouseGroup.position.set(x, y, z); // CS559 Sample Code
        sidehouseGroup.scale.set(scale, scale, scale);

        sidehouseGroup.castShadow = true;
        sidehouseGroup.receiveShadow = true;
    }


}

export class Pillar extends GrObject {
    constructor(params = {}) {
        const pillarGroup = new T.Group();

        super(`Pillar`, pillarGroup);

        let woodtl = new T.TextureLoader().load('./images/wood3.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.3;
            texture.repeat.x = 0.3;
        });
        let wood_material = new T.MeshStandardMaterial({
            color: "white",
            roughness: 1,
            metalness: 0.4,
            map: woodtl

        });

        let base = new T.Mesh(new T.BoxGeometry(0.6, 3.6, 0.6), wood_material);
        pillarGroup.add(base);
        let box = new T.Mesh(new T.BoxGeometry(1, 0.2, 1), new T.MeshBasicMaterial({
            color: "grey",
        }));
        pillarGroup.add(box);
        box.translateY(-1.6);
        /** @type {number} */
        const x = params.x || 0; // Position x
        /** @type {number} */
        const y = params.y || 0; // Position y
        /** @type {number} */
        const z = params.z || 0; // Position z
        /** @type {number} */
        const scale = params.scale || 1; // Scale
        pillarGroup.position.set(x, y, z); // CS559 Sample Code

        pillarGroup.castShadow = true;
        pillarGroup.receiveShadow = true;

    }
}
export class SideHouse2 extends GrObject {
    constructor(params = {}) {
        const sidehouse2Group = new T.Group();

        super(`SideHouse2`, sidehouse2Group);
        let woodtl = new T.TextureLoader().load('./images/wood4.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.6;
            texture.repeat.x = 0.6;
        });
        let wood_material = new T.MeshStandardMaterial({
            color: "white",
            roughness: 1,
            metalness: 0.4,
            map: woodtl

        });
        let wood2tl = new T.TextureLoader().load('./images/wood3.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 2;
            texture.repeat.x = 2;
        });
        let wood2_material = new T.MeshStandardMaterial({
            color: "#EECFA1",
            roughness: 1,
            metalness: 0.4,
            map: wood2tl

        });
        let greytl = new T.TextureLoader().load('./images/castle.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.6;
            texture.repeat.x = 0.6;
        });
        let grey_material = new T.MeshStandardMaterial({
            color: "#CDB38B",
            roughness: 1,
            metalness: 0.4,


        });
        let texturetl = new T.TextureLoader().load('./images/texture.png', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.2;
            texture.repeat.x = 0.2;
        });
        let exSettings = {
            steps: 10,
            depth: 6.8,
            bevelEnabled: false,
        };

        let house_shape = new T.Shape();
        house_shape.moveTo(-2, 0);
        house_shape.lineTo(-2, 2.2);
        house_shape.lineTo(0, 4.4);
        house_shape.lineTo(2, 2.2);
        house_shape.lineTo(2, 0);

        let house_geometry = new T.ExtrudeGeometry(house_shape, exSettings);
        let house = new T.Mesh(house_geometry, wood_material);
        sidehouse2Group.add(house);
        house.translateY(3);
        house.rotateY(Math.PI / 2);
        let exSettings2 = {
            steps: 10,
            depth: 5.6,
            bevelEnabled: false,
        };

        let roofred1tl = new T.TextureLoader().load('./images/roofred.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 1.8;
            texture.repeat.x = 0.8;
        });
        let roofred1_material = new T.MeshStandardMaterial({
            color: "white",
            map: roofred1tl

        });
        let roofgreytl = new T.TextureLoader().load('./images/roofgrey.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 1.8;
            texture.repeat.x = 0.8;
        });
        let roofgrey_material = new T.MeshStandardMaterial({
            color: "#6CA6CD",
            map: roofgreytl

        });
        let roof1 = new T.Mesh(new T.BoxGeometry(2.97, 0.2, 7), roofred1_material);
        house.add(roof1);
        roof1.translateY(3.34);
        roof1.translateZ(3.5);
        roof1.translateX(-1.08);
        roof1.rotateZ(Math.atan2(2.2, 2));
        let roof2 = new T.Mesh(new T.BoxGeometry(2.97, 0.2, 7), roofred1_material);
        house.add(roof2);
        roof2.translateY(3.34);
        roof2.translateZ(3.5);
        roof2.translateX(1.04);
        roof2.rotateZ(-Math.atan2(2.2, 2));
        let house2_geometry = new T.ExtrudeGeometry(house_shape, exSettings2);
        let house2 = new T.Mesh(house2_geometry, wood_material);
        sidehouse2Group.add(house2);
        house2.translateY(3);
        house2.translateZ(-6);
        house2.translateX(1);

        let littlehouse = new NormalHouse({
            width: 2,
            height: 3,
            middleheight: 2.5,
            color: "white",
            roofmaterial: roofgrey_material,
            texture: texturetl,
            depth: 2,
            x: 1,
            y: 3,
            z: -8,
        }).objects[0];
        sidehouse2Group.add(littlehouse);
        let roof3 = new T.Mesh(new T.BoxGeometry(2.97, 0.2, 5.8), roofred1_material);
        house2.add(roof3);
        roof3.translateY(3.34);
        roof3.translateZ(2.8);
        roof3.translateX(-1.08);
        roof3.rotateZ(Math.atan2(2.2, 2));
        let roof4 = new T.Mesh(new T.BoxGeometry(2.97, 0.2, 5.8), roofred1_material);
        house2.add(roof4);
        roof4.translateY(3.34);
        roof4.translateZ(2.8);
        roof4.translateX(1.04);
        roof4.rotateZ(-Math.atan2(2.2, 2));


        let box = new T.Mesh(new T.BoxGeometry(4, 8.8, 8), grey_material);
        sidehouse2Group.add(box);
        box.translateX(0);
        box.translateY(0.62);
        box.translateZ(-2);

        let box2 = new T.Mesh(new T.BoxGeometry(6, 0.3, 8), wood2_material);
        sidehouse2Group.add(box2);
        box2.translateX(2);
        box2.translateY(3);
        box2.translateZ(-6);

        let box3 = new T.Mesh(new T.BoxGeometry(0.6, 3.8, 4), wood2_material);
        house.add(box3);
        box3.translateX(-1.71);
        box3.translateY(-1.6);
        box3.translateZ(2.2);

        let texturedoor1 = new T.TextureLoader().load('./images/draw2.jpg');
        let wooddoor = new T.Mesh(new T.PlaneGeometry(6, 3), new T.MeshStandardMaterial({
            map: texturedoor1,
            side: T.DoubleSide
        }));
        house.add(wooddoor);
        wooddoor.translateY(-1.5);
        wooddoor.translateX(1);
        wooddoor.translateZ(2.02);


        let drawtl = new T.TextureLoader().load('./images/name2.jpg');
        let draw = new T.Mesh(new T.PlaneGeometry(4, 2), new T.MeshStandardMaterial({
            map: drawtl,
            side: T.DoubleSide
        }));
        house.add(draw);
        draw.translateY(1);
        draw.translateX(0);
        draw.translateZ(6.81);
        house.add(new Pillar({
            x: 2,
            z: 4.5,
            y: -1.68,
        }).objects[0]);
        house.add(new Pillar({
            x: 1.7,
            z: 6.5,
            y: -1.68,
        }).objects[0]);
        house.add(new Pillar({
            x: -1.7,
            z: 4.5,
            y: -1.68,
        }).objects[0]);
        house.add(new Pillar({
            x: -1.7,
            z: 6.5,
            y: -1.68,
        }).objects[0]);
        house.add(new Pillar({
            x: 5.6,
            z: 4.5,
            y: -1.68,
        }).objects[0]);
        /** @type {number} */
        const x = params.x || 0; // Position x
        /** @type {number} */
        const y = params.y || 0; // Position y
        /** @type {number} */
        const z = params.z || 0; // Position z
        /** @type {number} */
        const scale = params.scale || 1; // Scale
        sidehouse2Group.position.set(x, y, z); // CS559 Sample Code
        sidehouse2Group.scale.set(scale, scale, scale);
        sidehouse2Group.rotateY(Math.PI / 8);

        sidehouse2Group.castShadow = true;
        sidehouse2Group.receiveShadow = true;
    }
}

export class SideHouse3 extends GrObject {
    constructor(params = {}) {
        const sidehouse3Group = new T.Group()
        super(`SideHouse3`, sidehouse3Group);
        let roofgrey1tl = new T.TextureLoader().load('./images/roofgrey.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 1;
            texture.repeat.x = 1;
        });
        let roofgrey1_material = new T.MeshStandardMaterial({
            color: "#6CA6CD",
            map: roofgrey1tl

        });
        let greytl = new T.TextureLoader().load('./images/castle.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 1.2;
            texture.repeat.x = 2.4;
        });

        let woodtl = new T.TextureLoader().load('./images/texture.png', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.2;
            texture.repeat.x = 0.2;
        });
        let wood2tl = new T.TextureLoader().load('./images/texture.png', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 1.2;
            texture.repeat.x = 1.2;
        });
        let wood3tl = new T.TextureLoader().load('./images/wood4.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.4;
            texture.repeat.x = 0.4;
        });
        let wood4tl = new T.TextureLoader().load('./images/wood3.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 1.4;
            texture.repeat.x = 1.6;
        });
        let wood_material = new T.MeshStandardMaterial({
            color: "#FFFAFA",
            roughness: 1,
            metalness: 0.4,
            map: wood2tl

        });
        let wood4_material = new T.MeshStandardMaterial({
            color: "#FFFAFA",
            roughness: 1,
            metalness: 0.4,
            map: wood4tl

        });

        let grey_material = new T.MeshStandardMaterial({
            color: "white",
            roughness: 1,
            metalness: 0.4,
            map: greytl

        });
        let house = new NormalHouse({
            width: 8,
            height: 5,
            middleheight: 3,
            color: "white",
            roofmaterial: roofgrey1_material,
            texture: woodtl,
            depth: 5,
            y: 3.6

        }).objects[0];
        let house2 = new NormalHouse({
            width: 4.4,
            height: 6.4,
            middleheight: 4.8,
            color: "#FFFAFA",
            roofmaterial: roofgrey1_material,
            texture: woodtl,
            depth: 10,
            y: 3.6,
            z: -4.1,
            x: -2.2

        }).objects[0];
        let house3 = new NormalHouse({
            width: 4.4,
            height: 6.4,
            middleheight: 4,
            color: "#FFFAFA",
            roofmaterial: roofgrey1_material,
            texture: wood3tl,
            depth: 6,
            y: -0.2,
            z: -10.1,
            x: -3.2

        }).objects[0];
        sidehouse3Group.add(house);
        sidehouse3Group.add(house2);
        sidehouse3Group.add(house3);
        house.rotateY(Math.PI / 2);

        let platform = new T.Mesh(new T.BoxGeometry(3.5, 0.3, 2), wood4_material);
        sidehouse3Group.add(platform);
        platform.position.set(2.4, -0.3, -5.07);
        platform.rotateZ(-Math.PI / 4);

        let platform2 = new T.Mesh(new T.BoxGeometry(2.4, 0.3, 2), wood4_material);
        sidehouse3Group.add(platform2);
        platform2.position.set(0.1, 0.9, -5.07);


        let base = new T.Mesh(new T.BoxGeometry(8, 5, 14), grey_material);
        house.add(base);
        base.position.set(0, -2.5, -1.8);

        let box = new T.Mesh(new T.BoxGeometry(4, 8.6, 4), wood_material);
        house.add(box);
        box.position.set(0, 1.2, 3.6);
        let roofgrey2tl = new T.TextureLoader().load('./images/roofgrey.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 1.5;
            texture.repeat.x = 1.8;
        });
        let roofgrey2_material = new T.MeshStandardMaterial({
            color: "#6CA6CD",
            map: roofgrey2tl

        });
        let roof = new T.Mesh(new T.CylinderGeometry(2, 4.4, 4, 4, 32), roofgrey2_material);
        box.add(roof);
        roof.translateY(6);
        roof.rotateY(Math.PI / 4);

        let doortl = new T.TextureLoader().load('./images/house1.jpg');
        let door = new T.Mesh(new T.PlaneGeometry(4, 8.6), new T.MeshStandardMaterial({
            map: doortl,
            side: T.DoubleSide
        }));
        box.add(door);
        door.position.set(0, 0, 2.02);
        let windowtl = new T.TextureLoader().load('./images/window2.jpg');
        let window = new T.Mesh(new T.PlaneGeometry(5, 3), new T.MeshStandardMaterial({
            map: windowtl,
            side: T.DoubleSide
        }));
        sidehouse3Group.add(window);
        window.position.set(2.58, 5, -4.01);

        let window2tl = new T.TextureLoader().load('./images/window4.jpg');
        let window2 = new T.Mesh(new T.PlaneGeometry(1.5, 1.5), new T.MeshStandardMaterial({
            map: window2tl,
            side: T.DoubleSide
        }));
        house3.add(window2);
        window2.position.set(0, 3, -0.02);

        let window3tl = new T.TextureLoader().load('./images/window3.jpg');
        let window3 = new T.Mesh(new T.PlaneGeometry(6, 2.5), new T.MeshStandardMaterial({
            map: window3tl,
            side: T.DoubleSide
        }));
        house3.add(window3);
        window3.position.set(2.21, 2.8, 3);
        window3.rotateY(Math.PI / 2);
        let door2tl = new T.TextureLoader().load('./images/door2.jpg');
        let door2 = new T.Mesh(new T.PlaneGeometry(2, 2), new T.MeshStandardMaterial({
            map: door2tl,
            side: T.DoubleSide
        }));
        house3.add(door2);
        door2.position.set(3.4, 2.2, 6);

        /** @type {number} */
        const x = params.x || 0; // Position x
        /** @type {number} */
        const y = params.y || 0; // Position y
        /** @type {number} */
        const z = params.z || 0; // Position z
        /** @type {number} */
        const scale = params.scale || 1; // Scale
        sidehouse3Group.position.set(x, y, z); // CS559 Sample Code
        sidehouse3Group.scale.set(scale, scale, scale);

        sidehouse3Group.castShadow = true;
        sidehouse3Group.receiveShadow = true;
    }

}

export class SideHouseLeft extends GrObject {
    constructor(params = {}) {
        const sidehouseleftGroup = new T.Group();
        super(`SideHouseLeft`, sidehouseleftGroup);


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
        let roofblue2tl = new T.TextureLoader().load('./images/roofblue.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.4;
            texture.repeat.x = 0.4;
        });
        let roofblue2_material = new T.MeshStandardMaterial({
            color: "white",
            map: roofblue2tl

        });
        let greytl = new T.TextureLoader().load('./images/texture.png', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.5;
            texture.repeat.x = 1;
        });
        let grey_material = new T.MeshStandardMaterial({
            color: "white",
            map: greytl,
            side: T.DoubleSide

        });
        let house = new HalfHouse({
            width: 3.2,
            height: 5.5,
            middleheight: 4.5,
            color: "#FFFAFA",
            roofmaterial: roofblue1_material,
            texture: woodtl,
            depth: 4.4,

        }).objects[0];

        sidehouseleftGroup.add(house);
        let house2 = new HalfHouse({
            width: 2,
            height: 3,
            middleheight: 2.5,
            color: "#FFFAFA",
            roofmaterial: roofblue1_material,
            texture: greytl,
            depth: 2.1,

        }).objects[0];
        sidehouseleftGroup.add(house2);
        house2.position.set(-0.9, 0, 2);


        let doortl = new T.TextureLoader().load('./images/door6.jpg');
        let door = new T.Mesh(new T.PlaneGeometry(2, 2), new T.MeshStandardMaterial({
            map: doortl,
            side: T.DoubleSide
        }));
        house2.add(door);
        door.position.set(-1.01, 1.5, 1);
        door.rotateY(Math.PI / 2);
        let exSettings = {
            steps: 10,
            depth: 5.5,
            bevelEnabled: false,
        };
        let triangle_shape = new T.Shape();
        triangle_shape.moveTo(3.8, 0);
        triangle_shape.lineTo(0, 2.8);
        triangle_shape.lineTo(0, 0);
        let triangle_geo = new T.ExtrudeGeometry(triangle_shape, exSettings);
        let triangle = new T.Mesh(triangle_geo, roofblue2_material);
        sidehouseleftGroup.add(triangle);
        triangle.position.set(2.2, 5.5, 1.64);
        triangle.rotateX(Math.PI / 2);
        triangle.rotateZ(Math.atan2(3, 4) + Math.PI / 2);

        let plane = new T.Mesh(new T.PlaneGeometry(5.4, 2.8), grey_material);
        triangle.add(plane);
        plane.position.set(-0.01, 1.4, 3);
        plane.rotateY(-Math.PI / 2);

        /** @type {number} */
        const x = params.x || 0; // Position x
        /** @type {number} */
        const y = params.y || 0; // Position y
        /** @type {number} */
        const z = params.z || 0; // Position z
        /** @type {number} */
        const scale = params.scale || 1; // Scale
        sidehouseleftGroup.position.set(x, y, z); // CS559 Sample Code
        sidehouseleftGroup.scale.set(scale, scale, scale);
        sidehouseleftGroup.castShadow = true;
        sidehouseleftGroup.receiveShadow = true;

    }
}

export class LakeHouse extends GrObject {
    constructor(params = {}) {
        const lakehouseGroup = new T.Group();
        super(`LakeHouse`, lakehouseGroup);
        let woodtl = new T.TextureLoader().load('./images/wood3.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.3;
            texture.repeat.x = 0.3;
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
            texture.repeat.y = 0.3;
            texture.repeat.x = 0.3;
        });
        let grey_material = new T.MeshStandardMaterial({
            color: "white",
            map: greytl,
            side: T.DoubleSide

        });
        let grey2tl = new T.TextureLoader().load('./images/castle.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.7;
            texture.repeat.x = 0.7;
        });
        let grey2_material = new T.MeshStandardMaterial({
            color: "white",
            map: grey2tl,
            side: T.DoubleSide

        });
        let grey3tl = new T.TextureLoader().load('./images/castle.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.5;
            texture.repeat.x = 1;
        });
        let grey3_material = new T.MeshStandardMaterial({
            color: "white",
            map: grey3tl,
            side: T.DoubleSide

        });
        let house = new NormalHouse({
            width: 4,
            height: 4,
            middleheight: 2.5,
            color: "#FFFAFA",
            roofmaterial: roofblue1_material,
            texture: woodtl,
            depth: 5,

        }).objects[0];
        lakehouseGroup.add(house);
        let exSettings = {
            steps: 10,
            depth: 0.3,
            bevelEnabled: false,
        };
        let door_shape = new T.Shape();
        door_shape.moveTo(-0.8, 0);
        door_shape.moveTo(-2, 0);
        door_shape.lineTo(-2, 2.2);
        door_shape.lineTo(2, 2.2);
        door_shape.lineTo(2, 0);
        door_shape.lineTo(0.8, 0);
        door_shape.lineTo(0.8, 1.6);
        door_shape.lineTo(-0.8, 1.6);
        door_shape.lineTo(-0.8, 0);
        let door_geo = new T.ExtrudeGeometry(door_shape, exSettings);
        let door1 = new T.Mesh(door_geo, grey_material);
        lakehouseGroup.add(door1);
        door1.position.set(0, -2.2, 0);


        let door2_shape = new T.Shape();
        door2_shape.moveTo(-0.8, 0);
        door2_shape.moveTo(-3, 0);
        door2_shape.lineTo(-3, 2.2);
        door2_shape.lineTo(2, 2.2);
        door2_shape.lineTo(2, 0);
        door2_shape.lineTo(0.8, 0);
        door2_shape.lineTo(0.8, 1.6);
        door2_shape.lineTo(-0.8, 1.6);
        door2_shape.lineTo(-0.8, 0);
        let door2_geo = new T.ExtrudeGeometry(door2_shape, exSettings);
        let door2 = new T.Mesh(door2_geo, grey_material);
        lakehouseGroup.add(door2);
        door2.position.set(-1.98, -2.2, 2.01);
        door2.rotateY(Math.PI / 2);

        let wall1 = new T.Mesh(new T.BoxGeometry(0.3, 2.2, 5), grey3_material);
        lakehouseGroup.add(wall1);
        wall1.position.set(2 - 0.15 - 0.02, -1.1, 2.5 + 0.01);

        let wall2 = new T.Mesh(new T.BoxGeometry(4, 2.2, 0.3), grey2_material);
        lakehouseGroup.add(wall2);
        wall2.position.set(0, -1.1, 5 - 0.15);

        let window1tl = new T.TextureLoader().load('./images/window5.jpg');
        let window1 = new T.Mesh(new T.PlaneGeometry(1.5, 1.5), new T.MeshStandardMaterial({
            map: window1tl,
            side: T.DoubleSide
        }));
        lakehouseGroup.add(window1);
        window1.position.set(0, 1.4, -0.01);

        let window2tl = new T.TextureLoader().load('./images/wall2.jpg');
        let window2 = new T.Mesh(new T.PlaneGeometry(5, 2), new T.MeshStandardMaterial({
            map: window2tl,
            side: T.DoubleSide
        }));
        lakehouseGroup.add(window2);
        window2.position.set(-2.01, 1.4, 2.5);
        window2.rotateY(Math.PI / 2);



        let window3 = new T.Mesh(new T.PlaneGeometry(5, 2), new T.MeshStandardMaterial({
            map: window2tl,
            side: T.DoubleSide
        }));
        lakehouseGroup.add(window3);
        window3.position.set(2.01, 1.4, 2.5);
        window3.rotateY(Math.PI / 2);

        /** @type {number} */
        const x = params.x || 0; // Position x
        /** @type {number} */
        const y = params.y || 0; // Position y
        /** @type {number} */
        const z = params.z || 0; // Position z
        /** @type {number} */
        const scale = params.scale || 1; // Scale
        lakehouseGroup.position.set(x, y, z); // CS559 Sample Code
        lakehouseGroup.scale.set(scale, scale, scale);
        lakehouseGroup.castShadow = true;
        lakehouseGroup.receiveShadow = true;
    }
}

export class Platform extends GrObject {
    constructor(params = {}) {
        const platformGroup = new T.Group();
        super(`Platform`, platformGroup);


        let greytl = new T.TextureLoader().load('./images/wood4.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.9;
            texture.repeat.x = 0.9;
        });
        let grey_material = new T.MeshStandardMaterial({
            color: "#EEC591",
            map: greytl,
            side: T.DoubleSide

        });

        let grey2tl = new T.TextureLoader().load('./images/castle.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.1;
            texture.repeat.x = 0.1;
        });
        let grey2_material = new T.MeshStandardMaterial({
            color: "white",
            map: grey2tl,
            side: T.DoubleSide

        });
        let texttl = new T.TextureLoader().load('./images/texture.png', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.7;
            texture.repeat.x = 0.7;
        });
        let text_material = new T.MeshStandardMaterial({
            color: "#EEC591",
            map: texttl,
            side: T.DoubleSide

        });
        let base = new T.Mesh(new T.BoxGeometry(2.6, 3, 3.6), grey_material);
        platformGroup.add(base);
        base.position.set(0.7, 0, 1);
        let base2 = new T.Mesh(new T.BoxGeometry(1.4, 3, 4), grey_material);
        platformGroup.add(base2);
        base2.position.x = -1.3;
        let exSettings = {
            steps: 10,
            depth: 0.4,
            bevelEnabled: false,
        };
        let top_shape = new T.Shape();
        top_shape.moveTo(-0.6 - 0.15, -1 + 0.15);
        top_shape.lineTo(2 - 0.15, -1 + 0.15);
        top_shape.lineTo(2 - 0.15, 2.7 - 0.15);
        top_shape.lineTo(-0.6 + 0.15, 2.7 - 0.15);
        top_shape.lineTo(-0.6 + 0.15, 2 - 0.15);
        top_shape.lineTo(-2 + 0.15, 2 - 0.15);
        top_shape.lineTo(-2 + 0.15, -2 + 0.15);
        top_shape.lineTo(-0.6 + 0.15, -2 + 0.15);
        top_shape.lineTo(-0.6 + 0.15, -2 - 0.15);
        top_shape.lineTo(-2 - 0.15, -2 - 0.15);
        top_shape.lineTo(-2 - 0.15, 2 + 0.15);
        top_shape.lineTo(-0.6 - 0.15, 2 + 0.15);
        top_shape.lineTo(-0.6 - 0.15, 2.7 + 0.15);
        top_shape.lineTo(2 + 0.15, 2.7 + 0.15);
        top_shape.lineTo(2 + 0.15, -1 - 0.15);
        top_shape.lineTo(-0.6 - 0.15, -1 - 0.15);
        top_shape.lineTo(-0.6 - 0.15, -1 + 0.15);
        let top_geo = new T.ExtrudeGeometry(top_shape, exSettings);
        let top = new T.Mesh(top_geo, grey2_material);
        platformGroup.add(top);
        top.position.y = 1.7;
        top.rotateX(Math.PI / 2);


        /** @type {number} */
        const x = params.x || 0; // Position x
        /** @type {number} */
        const y = params.y || 0; // Position y
        /** @type {number} */
        const z = params.z || 0; // Position z
        /** @type {number} */
        const scale = params.scale || 1; // Scale
        platformGroup.position.set(x, y, z); // CS559 Sample Code
        platformGroup.scale.set(scale, scale, scale);
        platformGroup.castShadow = true;
        platformGroup.receiveShadow = true;
    }
}