import * as T from '../../libs/CS559-Three/build/three.module.js';
import {
    Water
} from '../../libs/CS559-Three/examples/jsm/objects/water.js';
export function groundplane(world) {
    let ground = new T.Group();
    let scene = world.scene;
    scene.add(ground);
    let urls = [
        './images/posx.jpg',
        './images/negx.jpg',
        './images/posy.jpg',
        './images/negy.jpg',
        './images/posz.jpg',
        './images/negz.jpg',
    ];
    let cubeLoader = new T.CubeTextureLoader();
    scene.background = cubeLoader.load(urls);
    const waterGeometry = new T.CircleGeometry(40, 32);
    const water = new Water(waterGeometry, {
        textureWidth: 512,
        textureHeight: 512,
        flowSpeed: 0.04,
        reflectivity: 0.8,
        flowDirection: new T.Vector2(1, 1), // 水面流动方向
        scale: 2, // 水面波纹大小
        color: "#87CEFF",
        // distortionScale: 4,
        // fog: scene.fog !== undefined
    });
    water.rotation.x = -Math.PI / 2;
    water.position.set(-80, -2, -85);
    water.scale.set(4, 4, 4);
    ground.add(water);



    let exSettings = {
        steps: 1,
        depth: 4,
        bevelEnabled: false,

    };
    let exSettings2 = {
        steps: 1,
        depth: 0.5,
        bevelEnabled: false,

    };
    let groundshape = new T.Shape();
    groundshape.moveTo(12, 13);
    groundshape.lineTo(12, -6);
    groundshape.lineTo(4, -12);
    groundshape.lineTo(4, -18);
    groundshape.lineTo(-1, -18);
    groundshape.lineTo(-1, -12);
    groundshape.lineTo(-12, -12);
    groundshape.lineTo(-12, 13);
    groundshape.lineTo(12, 13);
    let ground_geom = new T.ExtrudeGeometry(groundshape, exSettings);
    let basetl = new T.TextureLoader().load('./images/ground.jpg', texture => {
        texture.wrapS = texture.wrapT = T.RepeatWrapping;
        texture.repeat.y = 0.1;
        texture.repeat.x = 0.1;
    });
    let ground_material = new T.MeshStandardMaterial({
        color: "white",
        roughness: 1,
        metalness: 0.4,
        map: basetl

    });
    let groundbase = new T.Mesh(ground_geom, ground_material);
    ground.add(groundbase);
    groundbase.translateY(12.99);
    groundbase.rotateX(Math.PI / 2);
    groundbase.scale.set(4, 4, 4);
    let groundtl = new T.TextureLoader().load('./images/ground.png');
    let ground_text = new T.Mesh(new T.PlaneGeometry(96, 58), new T.MeshStandardMaterial({
        color: "#9f9895",
        side: T.DoubleSide,
        map: groundtl

    }));
    world.scene.add(ground_text);
    ground_text.position.set(0, 13.04, 25);
    ground_text.rotateX(Math.PI / 2);
    let ground2tl = new T.TextureLoader().load('./images/ground2.png');
    let ground2_text = new T.Mesh(new T.PlaneGeometry(78, 38), new T.MeshStandardMaterial({
        color: "#9f9895",
        side: T.DoubleSide,
        map: ground2tl

    }));
    world.scene.add(ground2_text);
    ground2_text.position.set(-11.5, 13.02, -22);
    ground2_text.rotateX(Math.PI / 2);

    let ground3tl = new T.TextureLoader().load('./images/redfloor.png', texture => {
        texture.wrapS = texture.wrapT = T.RepeatWrapping;
        texture.repeat.y = 0.2;
        texture.repeat.x = 2;
    });
    let ground3_text = new T.Mesh(new T.PlaneGeometry(60, 8), new T.MeshStandardMaterial({
        color: "#9f9895",
        side: T.DoubleSide,
        map: ground3tl

    }));
    world.scene.add(ground3_text);
    ground3_text.position.set(-10, 13.02, -44.2);
    ground3_text.rotateX(Math.PI / 2);

    let ground4tl = new T.TextureLoader().load('./images/redfloor2.png');
    let ground4_text = new T.Mesh(new T.PlaneGeometry(22, 32), new T.MeshStandardMaterial({
        color: "#aa9a93",
        side: T.DoubleSide,
        map: ground4tl

    }));
    world.scene.add(ground4_text);
    ground4_text.position.set(6, 13.05, -56);
    ground4_text.rotateX(Math.PI / 2);

    let woodshape = new T.Shape();
    woodshape.moveTo(3.99, -12);
    woodshape.lineTo(3.99, -26);
    woodshape.lineTo(-2.6, -26);
    woodshape.lineTo(-2.6, -20);

    woodshape.lineTo(-10, -20);
    woodshape.lineTo(-10, -12);
    woodshape.lineTo(4, -12);
    let wood_geom = new T.ExtrudeGeometry(woodshape, exSettings2);
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
    let woodbase = new T.Mesh(wood_geom, wood_material);
    ground.add(woodbase);
    woodbase.translateY(6);
    woodbase.rotateX(Math.PI / 2);
    woodbase.scale.set(4, 4, 4);
    let exSettings3 = {
        steps: 1,
        depth: 1.5,
        bevelEnabled: false,
        curveSegments: 32

    };
    let walltl = new T.TextureLoader().load('./images/texture.png', texture => {
        texture.wrapS = texture.wrapT = T.RepeatWrapping;
        texture.repeat.y = 0.3;
        texture.repeat.x = 0.3;
    });
    let wall_material = new T.MeshStandardMaterial({
        color: "white",
        roughness: 1,
        metalness: 0.4,
        map: walltl

    });
    let outer_shape = new T.Shape();
    outer_shape.moveTo(39.5, 0);
    outer_shape.arc(-39.5, 0, 39.5, 0, Math.PI * 2, true);
    outer_shape.moveTo(40.5, 0);
    outer_shape.arc(-40.5, 0, 40.5, 0, Math.PI * 2, false);
    let outer_geom = new T.ExtrudeGeometry(outer_shape, exSettings3);
    let outer = new T.Mesh(outer_geom, wall_material);
    let sphere_geo = new T.SphereGeometry(0.5);
    outer.rotation.x = -Math.PI / 2;
    outer.position.set(-80, -2, -85);
    outer.scale.set(4, 4, 4);
    ground.add(outer);
    let opole_geom = new T.CylinderGeometry(0.7, 0.7, 3, 32);
    let opole_mat = new T.MeshStandardMaterial({
        color: "#f7e4aa",
        metalness: 0.4,
        roughness: 1,
    });
    let opole, sphere;
    let opole_group = new T.Group();
    let num_poles = 20;
    for (let i = 0; i < num_poles; i++) {
        opole = new T.Mesh(opole_geom, opole_mat);
        sphere = new T.Mesh(sphere_geo, opole_mat);
        opole.add(sphere);
        sphere.position.y = 1.5 + 0.5;
        opole_group.add(opole);
        opole.rotateY((2 * i * Math.PI) / num_poles);
        opole.translateX(0.8 * 50);
    }
    ground.add(opole_group);
    opole_group.position.set(-80, 3, -85);
    opole_group.scale.set(4, 4, 4);
    ground.receiveShadow = true;

}