import * as T from '../../libs/CS559-Three/build/three.module.js';

import {
    GrObject
} from "../../libs/CS559-Framework/GrObject.js";
import {
    NormalHouse,
    HalfHouse
} from "./normalhouse.js";

import {
    SmallHealer
} from "./heal.js";
export class PlayHouse extends GrObject {
    constructor(params = {}) {
        const playhouseGroup = new T.Group();
        super(`PlayHouse`, playhouseGroup);

        let woodtl = new T.TextureLoader().load('./images/wood3.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 2;
            texture.repeat.x = 2;
        });
        let wood_material = new T.MeshStandardMaterial({
            color: "white",
            roughness: 1,
            metalness: 0.4,
            map: woodtl

        });
        let exSettings = {
            steps: 10,
            depth: 0.3,
            bevelEnabled: false,
        };
        let base = new T.Mesh(new T.BoxGeometry(9.6, 2.4, 9.2), wood_material);
        playhouseGroup.add(base);

        let door1_shape = new T.Shape();
        door1_shape.moveTo(-1, 0);
        door1_shape.lineTo(-2, 0);
        door1_shape.lineTo(-2, 2.6);
        door1_shape.lineTo(2.6, 2.6);
        door1_shape.lineTo(2.6, 0);
        door1_shape.lineTo(1, 0);
        door1_shape.lineTo(1, 2);
        door1_shape.lineTo(-1, 2);

        let door1_geom = new T.ExtrudeGeometry(door1_shape, exSettings);
        let door1tl = new T.TextureLoader().load('./images/wood3.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.3;
            texture.repeat.x = 0.3;
        });
        let door1_material = new T.MeshStandardMaterial({
            color: "white",
            roughness: 1,
            metalness: 0.4,
            map: door1tl

        });
        let door1 = new T.Mesh(door1_geom, door1_material);
        playhouseGroup.add(door1);
        door1.translateY(1.2);
        door1.translateX(-1.2);
        door1.translateZ(-2.6);
        door1.rotateY(Math.PI / 2 * 3);
        let door2tl = new T.TextureLoader().load('./images/wood3.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.8;
            texture.repeat.x = 0.8;
        });
        let door2_material = new T.MeshStandardMaterial({
            color: "white",
            roughness: 1,
            metalness: 0.4,
            map: door2tl

        });
        let doorpart = new T.Mesh(new T.BoxGeometry(2.4, 2.6, 0.8), door2_material);
        playhouseGroup.add(doorpart);
        doorpart.translateY(1.2 + 1.3);
        doorpart.translateZ(-0.4);
        let door3tl = new T.TextureLoader().load('./images/wood3.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 1.8;
            texture.repeat.x = 1.8;
        });
        let door3_material = new T.MeshStandardMaterial({
            color: "white",
            roughness: 1,
            metalness: 0.4,
            map: door3tl

        });
        let doorpart2 = new T.Mesh(new T.BoxGeometry(6, 2.6 + 2.4, 0.4), door3_material);
        playhouseGroup.add(doorpart2);
        doorpart2.translateY(1.3);
        doorpart2.translateZ(-4.6 + 0.19);
        doorpart2.translateX(1.8);
        let exSettings2 = {
            steps: 10,
            depth: 3,
            bevelEnabled: false,
        };
        let grey_shape = new T.Shape();
        grey_shape.moveTo(-1.6, 0);
        grey_shape.lineTo(-1.6, 1.8);
        grey_shape.bezierCurveTo(-0.9, 2.6, 0.9, 2.6, 1.6, 1.8);
        grey_shape.lineTo(1.6, 0);
        grey_shape.lineTo(1.8, 0);
        grey_shape.lineTo(1.8, 2.6);
        grey_shape.lineTo(-1.8, 2.6);
        grey_shape.lineTo(-1.8, 0);
        let grey_geom = new T.ExtrudeGeometry(grey_shape, exSettings2);
        let greytl = new T.TextureLoader().load('./images/castle.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.4;
            texture.repeat.x = 0.4;
        });
        let grey_material = new T.MeshStandardMaterial({
            color: "white",
            roughness: 1,
            metalness: 0.4,
            map: greytl

        });
        let grey = new T.Mesh(grey_geom, grey_material);
        playhouseGroup.add(grey);
        grey.translateY(1.2);
        grey.translateX(1.2 + 1.8);
        grey.translateZ(2.2);
        grey.rotateY(Math.PI);
        let grey2tl = new T.TextureLoader().load('./images/castle.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 1;
            texture.repeat.x = 1;
        });
        let grey2_material = new T.MeshStandardMaterial({
            color: "white",
            roughness: 1,
            metalness: 0.4,
            map: grey2tl

        });
        let grey2 = new T.Mesh(new T.BoxGeometry(0.3, 5, 9.2), grey2_material);
        playhouseGroup.add(grey2);
        grey2.translateY(1.25);
        grey2.translateX(4.76);

        let grey3 = new T.Mesh(new T.BoxGeometry(9.6, 0.2, 4.6), new T.MeshStandardMaterial({
            color: "grey"
        }));
        playhouseGroup.add(grey3);
        grey3.translateY(1.2 + 2.6);
        grey3.translateZ(2.3);

        let grey4 = new T.Mesh(new T.BoxGeometry(9.6, 5, 0.2), grey2_material);
        playhouseGroup.add(grey4);
        grey4.translateY(1.3);
        grey4.translateZ(4.59);
        let exSettings3 = {
            steps: 10,
            depth: 2.3,
            bevelEnabled: false,
        };
        let door2_shape = new T.Shape();
        door2_shape.moveTo(1, 0);
        door2_shape.lineTo(1.6, 0);
        door2_shape.lineTo(1.6, 2.6);
        door2_shape.lineTo(-2, 2.6);
        door2_shape.lineTo(-2, 0);
        door2_shape.lineTo(-1, 0);
        door2_shape.lineTo(-1, 2);
        door2_shape.lineTo(1, 2);
        let door2_geom = new T.ExtrudeGeometry(door2_shape, exSettings3);
        let door2 = new T.Mesh(door2_geom, door1_material);
        playhouseGroup.add(door2);
        door2.translateY(1.2);
        door2.translateX(-2.8);




        let exSettings4 = {
            steps: 10,
            depth: 6.4,
            bevelEnabled: false,
        };
        let roof1_shape = new T.Shape();
        roof1_shape.moveTo(-2.3, 0);
        roof1_shape.lineTo(0, 2.8);
        roof1_shape.lineTo(2.3, 0);
        let roof1_geom = new T.ExtrudeGeometry(roof1_shape, exSettings4);
        let roof1 = new T.Mesh(roof1_geom, door1_material);
        playhouseGroup.add(roof1);
        roof1.translateY(1.2 + 2.6);
        roof1.translateZ(-2.3);
        roof1.translateX(-1.55);
        roof1.rotateY(Math.PI / 2);
        let exSettings5 = {
            steps: 10,
            depth: 5.8,
            bevelEnabled: false,
        };

        let roof2_shape = new T.Shape();
        roof2_shape.moveTo(-1.2, 0);
        roof2_shape.lineTo(0, 2.4);
        roof2_shape.lineTo(1.2, 0);
        let roof2_geom = new T.ExtrudeGeometry(roof2_shape, exSettings5);
        let roof2 = new T.Mesh(roof2_geom, door1_material);
        playhouseGroup.add(roof2);
        roof2.translateY(1.2 + 2.6 + 0.1);
        roof2.translateZ(1.1);
        roof2.translateX(-4.85);
        roof2.rotateY(Math.PI / 2);

        let roof3 = new T.Mesh(roof2_geom, door1_material);
        playhouseGroup.add(roof3);
        roof3.translateY(1.2 + 2.6 + 0.1);
        roof3.translateZ(1.1 + 2.46);
        roof3.translateX(-4.85);
        roof3.rotateY(Math.PI / 2);

        let exSettingsroof = {
            steps: 10,
            depth: 0.3,
            bevelEnabled: false,
        };
        let littlehouse = new T.Group();
        playhouseGroup.add(littlehouse);

        let littlebase = new T.Mesh(new T.BoxGeometry(3, 5.4, 2), grey2_material);
        littlehouse.add(littlebase);
        littlehouse.translateX(-5);
        littlehouse.translateZ(3.6);
        littlehouse.translateY(1);
        littlehouse.rotateY(Math.PI / 5);



        let roofblue1tl = new T.TextureLoader().load('./images/roofblue.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 1.2;
            texture.repeat.x = 1.2;
        });
        let roofblue1_material = new T.MeshPhongMaterial({
            color: "white",

            map: roofblue1tl

        });
        let roofblue2tl = new T.TextureLoader().load('./images/roofblue.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.5;
            texture.repeat.x = 0.5;
        });
        let roofblue2_material = new T.MeshPhongMaterial({
            color: "white",

            map: roofblue2tl

        });
        let littleroof_shape = new T.Shape();
        littleroof_shape.moveTo(-1.4, 0);
        littleroof_shape.lineTo(-0.9, 2.8);
        littleroof_shape.lineTo(0.9, 2.8);
        littleroof_shape.lineTo(1.4, 0);
        let littleroof_geom = new T.ExtrudeGeometry(littleroof_shape, exSettingsroof);
        let littleroof = new T.Mesh(littleroof_geom, roofblue2_material);

        littlehouse.add(littleroof);
        littleroof.translateY(2.85);
        littleroof.translateZ(-1.4);
        littleroof.translateX(-0.45);
        littleroof.rotateX(Math.PI / 4);

        let colorroof1 = new T.Mesh(new T.BoxGeometry(6.6, 0.2, 3.76), roofblue1_material);
        playhouseGroup.add(colorroof1);
        colorroof1.translateY(1.46 + 1.2 + 2.6);
        colorroof1.translateX(1.64);
        colorroof1.translateZ(-3.40);
        colorroof1.rotateX(-Math.atan2(2.8, 2.3));

        let colorroof2 = new T.Mesh(new T.BoxGeometry(6.6, 0.2, 3.76), roofblue1_material);
        playhouseGroup.add(colorroof2);
        colorroof2.translateY(1.46 + 1.2 + 2.6);
        colorroof2.translateX(1.64);
        colorroof2.translateZ(-3.38 + 2.25);
        colorroof2.rotateX(Math.atan2(2.8, 2.3));

        let roofgroup = new T.Group();
        playhouseGroup.add(roofgroup);
        let colorroof3 = new T.Mesh(new T.BoxGeometry(6, 0.2, 2.7), roofblue1_material);
        roofgroup.add(colorroof3);
        colorroof3.translateY(1.4 + 1.2 + 2.6);
        colorroof3.translateX(-1.9);
        colorroof3.translateZ(0.48);
        colorroof3.rotateX(-Math.atan2(2.4, 1.2));

        let colorroof4 = new T.Mesh(new T.BoxGeometry(6, 0.2, 2.7), roofblue1_material);
        roofgroup.add(colorroof4);
        colorroof4.translateY(1.4 + 1.2 + 2.6);
        colorroof4.translateX(-1.9);
        colorroof4.translateZ(0.48 + 1.2);
        colorroof4.rotateX(Math.atan2(2.4, 1.2));



        let roofgroup2 = new T.Group();
        roofgroup2.copy(roofgroup);
        playhouseGroup.add(roofgroup2);
        roofgroup2.translateZ(2.51);

        let texturedoor1 = new T.TextureLoader().load('./images/door1.jpg');
        let wooddoor = new T.Mesh(new T.PlaneGeometry(2.2, 2.3), new T.MeshStandardMaterial({
            map: texturedoor1,
            side: T.DoubleSide
        }));
        playhouseGroup.add(wooddoor);
        wooddoor.translateY(0);
        wooddoor.translateX(-4.82);
        wooddoor.translateZ(-2.6);
        wooddoor.rotateY(Math.PI / 2);

        let texturedoor2 = new T.TextureLoader().load('./images/door2.jpg');
        let wooddoor2 = new T.Mesh(new T.PlaneGeometry(2, 2), new T.MeshStandardMaterial({
            map: texturedoor2,
            side: T.DoubleSide
        }));
        littlehouse.add(wooddoor2);
        wooddoor2.translateY(-1);
        wooddoor2.translateX(-0.2);
        wooddoor2.translateZ(-1.01);

        let texturewindow1 = new T.TextureLoader().load('./images/window1.jpg');
        let woodwindow1 = new T.Mesh(new T.PlaneGeometry(2, 2.1), new T.MeshStandardMaterial({
            map: texturewindow1,
            side: T.DoubleSide
        }));
        playhouseGroup.add(woodwindow1);
        woodwindow1.translateY(3);
        woodwindow1.translateX(-4.82);
        woodwindow1.translateZ(1.1);
        woodwindow1.rotateY(Math.PI / 2);

        let texturewindow2 = new T.TextureLoader().load('./images/name1.jpg');
        let woodwindow2 = new T.Mesh(new T.PlaneGeometry(3, 1.5), new T.MeshStandardMaterial({
            map: texturewindow2,
            side: T.DoubleSide
        }));
        playhouseGroup.add(woodwindow2);
        woodwindow2.translateY(4.7);
        woodwindow2.translateX(-1.7);
        woodwindow2.translateZ(-2.22);
        woodwindow2.rotateY(Math.PI / 2);

        let texture1 = new T.TextureLoader().load('./images/castle.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.5;
            texture.repeat.x = 2;
        });
        let grettexture = new T.Mesh(new T.PlaneGeometry(9.2, 2.4), new T.MeshStandardMaterial({
            map: texture1,
            side: T.DoubleSide
        }));
        playhouseGroup.add(grettexture);
        grettexture.translateY(0);
        grettexture.translateX(-4.81);
        grettexture.rotateY(Math.PI / 2);
        let texture2 = new T.TextureLoader().load('./images/castle.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 0.5;
            texture.repeat.x = 1;
        });
        let grettexture2 = new T.Mesh(new T.PlaneGeometry(3.6, 2.4), new T.MeshStandardMaterial({
            map: texture2,
            side: T.DoubleSide
        }));
        playhouseGroup.add(grettexture2);
        grettexture2.translateY(0);
        grettexture2.translateX(-3);
        grettexture2.translateZ(-4.61);

        let metaltl = new T.TextureLoader().load('./images/railway.jpg', texture => {
            texture.wrapS = texture.wrapT = T.RepeatWrapping;
            texture.repeat.y = 1;
            texture.repeat.x = 1;
        });
        let metal = new T.Mesh(new T.PlaneGeometry(0.4, 6.2), new T.MeshStandardMaterial({
            map: metaltl,
            color: "grey",
            side: T.DoubleSide
        }));
        playhouseGroup.add(metal);
        metal.translateY(1.21);
        metal.translateZ(-2.6);
        metal.rotateY(Math.PI / 2);
        metal.rotateX(Math.PI / 2 * 3);

        let metal2 = new T.Mesh(new T.PlaneGeometry(0.4, 6.2), new T.MeshStandardMaterial({
            map: metaltl,
            color: "grey",
            side: T.DoubleSide
        }));
        playhouseGroup.add(metal2);
        metal2.translateY(1.21);
        metal2.translateZ(2.6);
        metal2.rotateY(Math.PI / 2);
        metal2.rotateX(Math.PI / 2 * 3);


        let metal3 = new T.Mesh(new T.PlaneGeometry(0.4, 5.6), new T.MeshStandardMaterial({
            map: metaltl,
            color: "grey",
            side: T.DoubleSide
        }));
        playhouseGroup.add(metal3);
        metal3.translateY(1.22);
        metal3.translateX(-3);
        metal3.rotateY(Math.PI / 2);
        metal3.rotateX(Math.PI / 2 * 3);
        metal3.rotateZ(Math.PI / 2);


        let metal4 = new T.Mesh(new T.PlaneGeometry(0.4, 5.6), new T.MeshStandardMaterial({
            map: metaltl,
            color: "grey",
            side: T.DoubleSide
        }));
        playhouseGroup.add(metal4);
        metal4.translateY(1.22);
        metal4.translateX(3);
        metal4.rotateY(Math.PI / 2);
        metal4.rotateX(Math.PI / 2 * 3);
        metal4.rotateZ(Math.PI / 2);


        let draw1tl = new T.TextureLoader().load('./images/door4.jpg');
        let draw1 = new T.Mesh(new T.PlaneGeometry(3, 3), new T.MeshStandardMaterial({
            map: draw1tl,
            side: T.DoubleSide
        }));
        playhouseGroup.add(draw1);
        draw1.translateX(4.6);
        draw1.translateZ(-2.6);
        draw1.translateY(2.6);
        draw1.rotateY(Math.PI / 2);

        let draw2 = new T.Mesh(new T.PlaneGeometry(3, 2.5), new T.MeshStandardMaterial({
            map: draw1tl,
            side: T.DoubleSide
        }));
        playhouseGroup.add(draw2);
        draw2.translateX(4.58);
        draw2.translateZ(0.6);
        draw2.translateY(2.4);
        draw2.rotateY(Math.PI / 2);

        let draw3 = new T.Mesh(new T.PlaneGeometry(3, 2.5), new T.MeshStandardMaterial({
            map: draw1tl,
            side: T.DoubleSide
        }));
        playhouseGroup.add(draw3);
        draw3.translateX(4.59);
        draw3.translateZ(3);
        draw3.translateY(2.4);
        draw3.rotateY(Math.PI / 2);

        let draw4tl = new T.TextureLoader().load('./images/door5.jpg');
        let draw4 = new T.Mesh(new T.PlaneGeometry(2.6, 2.6), new T.MeshStandardMaterial({
            map: draw4tl,
            side: T.DoubleSide
        }));
        playhouseGroup.add(draw4);
        draw4.translateX(3.35);
        draw4.translateZ(4.4);
        draw4.translateY(2.4);


        let house = new NormalHouse({
            width: 1.8,
            height: 1.6,
            middleheight: 0.8,
            color: "#FFFAFA",
            roofmaterial: roofblue1_material,
            texture: woodtl,
            depth: 2,

        }).objects[0];
        playhouseGroup.add(house);
        house.position.set(0.4, 4.4, -4.1);

        let house2 = new NormalHouse({
            width: 1.8,
            height: 1.6,
            middleheight: 0.8,
            color: "#FFFAFA",
            roofmaterial: roofblue1_material,
            texture: woodtl,
            depth: 2,

        }).objects[0];
        playhouseGroup.add(house2);
        house2.position.set(3.5, 4.4, -4.1);

        let heal = new SmallHealer({
            x: 3.94,
            z: 3.74,
            y: 1.9,
            scale: 0.5
        }).objects[0];
        playhouseGroup.add(heal);
        this.timecount = 0;
        this.body = heal.children[0];
        /** @type {number} */
        const x = params.x || 0; // Position x
        /** @type {number} */
        const y = params.y || 0; // Position y
        /** @type {number} */
        const z = params.z || 0; // Position z
        /** @type {number} */
        const scale = params.scale || 1; // Scale
        playhouseGroup.position.set(x, y, z); // CS559 Sample Code
        playhouseGroup.scale.set(scale, scale, scale);
        playhouseGroup.rotateY(Math.atan2(4, 3));

        playhouseGroup.castShadow = true;
        playhouseGroup.receiveShadow = true;

    }
    stepWorld(delta, timeOfDay) {
        this.timecount += delta * 0.002;
        this.body.position.y = 0.2 * Math.sin(this.timecount);

    }


}