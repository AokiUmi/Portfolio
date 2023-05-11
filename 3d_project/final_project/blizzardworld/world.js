import * as T from '../../libs/CS559-Three/build/three.module.js';
import {
    Water
} from '../../libs/CS559-Three/examples/jsm/objects/water.js';
import {
    groundplane
} from './groundplane.js';
import {
    GrSphere
} from "../../libs/CS559-Framework/SimpleObjects.js";
import {
    Castle
} from './castle.js';
import {
    Helicopter
} from './plane.js';
import {
    Healer,
    SmallHealer
} from './heal.js';
import {
    Bigdoor
} from './bigdoor.js';

import {
    PlayHouse
} from './playhouse.js';
import {
    GrLondonEye,
    GrCarousel,
    GrAdvancedSwing
} from './playground.js';
import {
    Statue,
    StatueBase
} from './statue.js';
import {
    SideHouse,
    SideHouse2,
    SideHouse3,
    SideHouseLeft,
    LakeHouse,
    Platform,
} from './sidehouse.js';

import {
    RidePony
} from './pony.js';

import {
    Shed
} from './shed.js';

import {
    StairCase
} from './staircase.js';

import {
    StandPillar
} from './standpillar.js';
import {
    Lamp,
    SmallLamp,
    SimpleLamp,
    SimpleLamp2,
    SmallLight
} from './lamp.js';
import {
    MapleTree,
    RealTree,
    PolyTree,
    Island,
    PolyTree2,
    PolyTree3,
    MultiIsland,
    DessertIsland,
    Tree

} from './tree.js'
import {
    TowerGate
} from './towergate.js';
import {
    TravelGuider
} from './travelguider.js';
import {
    Fishing
} from './fishing.js';
const route1 = [
    [0, 20, 50],
    [0, 20, 36],
    [15.5, 20, 36],
    [15.5, 20, 10],
    [4, 20, 0],
    [4, 20, -6],
    [13, 20, -18],
    [13, 20, -33],
    [-22, 20, -33],
    [-22, 20, -18],
    [-15.5, 20, -6],
    [-15.5, 20, 36],
];
const route2 = [
    [0, 20, 50],
    [0, 20, 36],
    [15.5, 20, 36],
    [15.5, 20, 10],
    [4, 20, 0],
    [4, 20, -6],
    [13, 20, -18],
    [13, 20, -56],
    [-2, 20, -56],
    [-18, 26, -56],
    [-18, 26, -44],
    [-6, 26, -44],
    [-6, 26, -51],
    [-18, 26, -51],
    [-18, 26, -56],
    [2, 20, -56],
    [2, 20, -33],
    [-22, 20, -33],
    [-22, 20, -18],
    [-40, 20, -18],
    [-35, 20, -4],
    [-13, 20, -6],
    [-15.5, 20, 36],


];
const route3 = [
    [0, 20, 50],
    [0, 20, 36],
    [15.5, 20, 36],
    [15.5, 20, 10],
    [4, 20, 0],
    [4, 20, -6],
    [13, 20, -18],
    [13, 20, -33],
    [13, 20, -64],
    [-2, 20, -64],
    [-2, 20, -72],
    [-2, 10, -84],
    [10, 10, -84],
    [10, 10, -98],
    [-8, 10, -98],
    [-8, 13, -68],
    [-22, 13, -68],
    [-22, 13, -58],
    [-22, 20, -40],
    [-22, 20, -18],
    [-40, 20, -18],
    [-34, 20, -2],
    [-13, 20, -6],
    [-15.5, 20, 36],
];
export function mainworld(world) {
    let spotlight = new T.SpotLight("#CDB38B", 0.4);

    spotlight.position.set(250, 200, 80);
    spotlight.castShadow = true;
    spotlight.lookAt(0, 0, 0);
    spotlight.shadow.camera.near = 0.5;
    spotlight.shadow.camera.far = 300;
    world.scene.add(spotlight);

    let spotlight2 = new T.SpotLight("#CD8C95", 0.2);

    spotlight2.position.set(-90, 150, -500);
    spotlight2.lookAt(0, 0, 0);
    spotlight2.castShadow = true;
    spotlight2.shadow.camera.near = 0.5;
    spotlight2.shadow.camera.far = 1000;
    world.scene.add(spotlight2);

    let spotlight3 = new T.SpotLight("#EECFA1", 0.4);

    spotlight3.position.set(0, 200, 600);
    spotlight3.lookAt(0, 0, 0);
    spotlight3.castShadow = true;
    spotlight3.shadow.camera.near = 0.5;
    spotlight3.shadow.camera.far = 1000;
    world.scene.add(spotlight3);
    groundplane(world);
    let healer1 = new Healer({
        x: -32,
        y: 16.5,
        z: -3,
        scale: 2,

    });
    world.add(new Healer({
        x: 12,
        y: 9.5,
        z: -82,
        scale: 2,

    }));
    world.add(healer1);
    world.add(new TravelGuider({
        route: route3,
        startid: 6,
        color: "#f14020",
        restartid: 1,

    }));
    world.add(new TravelGuider({
        route: route1,
        startid: 0,
        color: "#ba00ff",
        restartid: 1,
    }));
    world.add(new TravelGuider({
        route: route2,
        startid: 4,
        color: "#6fe152",
        restartid: 1,

    }));
    world.add(new Statue({
        x: 0,
        y: 18,
        z: 10,
        scale: 10,
        world: world
    }));
    world.add(new Fishing({
        x: -9,
        y: 6,
        z: -102,
        scale: 4,
        world: world
    }));

    world.add(new Helicopter({
        x: 0,
        y: 50,
        z: -100,
        scale: 4
    }));

    world.add(new StatueBase({
        x: 0,
        y: 18,
        z: 10,
        scale: 4,

    }));
    world.add(new Castle({
        x: 48,
        y: 5,
        z: 40,
        scale: 4
    }));
    world.add(new Castle({
        x: -48,
        y: 5,
        z: 40,
        scale: 4
    }));
    world.add(new Bigdoor({
        x: 0,
        y: 6,
        z: 36,
        scale: 4
    }));
    let playhouse = new PlayHouse({
        x: 36,
        y: 17.5,
        z: -8,
        scale: 4
    });
    world.add(playhouse);
    world.add(new RidePony({
        startx: -3,
        startz: -1,
        xdirect: 0,
        zdirect: -1,
        scale: 4,
        base: playhouse
    }));
    world.add(new RidePony({
        startx: -3,
        startz: 2.5,
        xdirect: 0,
        zdirect: -1,
        scale: 4,
        base: playhouse
    }));
    world.add(new SideHouse({
        x: -54,
        y: 12,
        z: 28,
        scale: 4
    }));
    world.add(new SideHouse2({
        x: -46,
        y: 12,
        z: 5,
        scale: 4
    }));

    world.add(new SimpleLamp({
        x: 11,
        z: -70,
        y: 13,
        scale: 0.7
    }));
    world.add(new SimpleLamp({
        x: 7,
        z: -3.5,
        y: 13,
        scale: 0.7
    }));
    world.add(new SimpleLamp2({
        x: -30,
        z: -25,
        y: 13,
        scale: 0.6
    }));
    world.add(new Lamp({
        x: -15,
        z: -38,
        y: 13,
        scale: 1.3
    }));
    world.add(new MapleTree({
        x: -23,
        z: 10,
        y: 13,
        scale: 0.5
    }));

    world.add(new RealTree({
        x: 0,
        z: -12,
        y: 13,
        scale: 2.3
    }));

    world.add(new RealTree({
        x: -9,
        z: -12,
        y: 13,
        scale: 2.3
    }));

    world.add(new PolyTree({
        x: -68,
        z: -170,
        y: 2,
        scale: 0.2
    }));
    world.add(new SmallLamp({
        x: 30,
        z: 22,
        y: 22,
        scale: 0.08
    }));
    world.add(new SmallLamp({
        x: 29,
        z: 13,
        y: 22,
        scale: 0.08
    }));
    world.add(new SmallLamp({
        x: 14,
        z: -74,
        y: 25,
        scale: 0.08
    }));
    world.add(new SmallLamp({
        x: 14,
        z: -47,
        y: 25,
        scale: 0.08
    }));
    let sidehouse3 = new SideHouse3({
        y: 11,
        x: -54,
        z: -43,
        scale: 4
    });
    world.add(sidehouse3);

    world.add(new Island({
        x: -60,
        z: -170,
        y: -10,
        scale: 4
    }));
    let island = new DessertIsland({
        x: -160,
        z: -20,
        y: 0,
        scale: 2
    });
    world.add(island);
    island.objects[0].rotateY(-Math.PI / 5);
    world.add(new GrLondonEye({
        x: -155,
        z: -99,
        y: 52,
        scale: 5
    }));
    world.add(new GrCarousel({
        x: -156,
        z: -48,
        y: 4,
        size: 4
    }));
    world.add(new GrAdvancedSwing({
        x: -145,
        z: -80,
        y: 4,
        size: 8
    }));
    world.add(new MultiIsland({
        x: -60,
        z: -170,
        y: 0,
        scale: 4
    }));
    let box1 = new T.Mesh(new T.CylinderGeometry(1, 1, 12, 32), new T.MeshStandardMaterial({
        color: "#b9a076"
    }));
    world.scene.add(box1);
    box1.position.set(-58, 8, -157);
    let box2 = new T.Mesh(new T.CylinderGeometry(1, 1, 12, 32), new T.MeshStandardMaterial({
        color: "#b9a076"
    }));
    world.scene.add(box2);
    box2.position.set(-49, 8, -168);
    let box3 = new T.Mesh(new T.BoxGeometry(14, 6, 1.6), new T.MeshStandardMaterial({
        color: "#b9a076",

    }));
    world.scene.add(box3);
    box3.position.set(-53.5, 10, -162.5);
    box3.rotateY(Math.atan2(11, 9));
    let box4 = new T.Mesh(new T.BoxGeometry(14, 5.96, 1.64), new T.MeshStandardMaterial({
        color: "white",
        map: new T.TextureLoader().load('./images/island.jpg'),
    }));
    world.scene.add(box4);
    box4.position.set(-53.5, 10, -162.5);
    box4.rotateY(Math.atan2(11, 9));
    world.add(new PolyTree2({
        x: -65,
        z: -174,
        y: 2,
        scale: 5
    }));
    world.add(new PolyTree3({
        x: -56,
        z: -178,
        y: 2,
        scale: 0.6
    }));
    world.add(new SideHouseLeft({
        y: 11,
        x: 25,
        z: -41,
        scale: 4
    }));
    world.add(new TowerGate({
        y: 16,
        x: 20,
        z: -60,
        scale: 4
    }));
    world.add(new LakeHouse({
        y: 14,
        x: 9,
        z: -92,
        scale: 4
    }));
    world.add(new SmallLight({
        y: 12.5,
        x: 13,
        z: -92,
        scale: 0.1
    }));
    world.add(new SmallLight({
        y: 12.5,
        x: 5,
        z: -92,
        scale: 0.1
    }));
    let smalllamp1 = new SmallLight({
        y: 12.5,
        x: 1,
        z: -88,
        scale: 0.1
    });
    world.add(smalllamp1);
    smalllamp1.objects[0].rotateY(Math.PI / 2);
    let smalllamp2 = new SmallLight({
        y: 12.5,
        x: 1,
        z: -80,
        scale: 0.1
    });
    world.add(smalllamp2);
    smalllamp2.objects[0].rotateY(Math.PI / 2);
    let StairCase1 = new StairCase({
        y: 6,
        x: -4,
        z: -72,
        scale: 4,
        width: 1.8,
        height: 1.75,
        depth: 1.4,
        number: 10,
    });

    world.add(StairCase1);
    StairCase1.objects[0].rotateY(Math.PI / 2)
    let StairCase2 = new StairCase({
        y: 6,
        x: -26,
        z: -48,
        scale: 4,
        width: 2.4,
        height: 1.75,
        depth: 1.4,
        number: 10,
    });

    world.add(StairCase2);
    StairCase2.objects[0].rotateY(Math.PI / 2)
    world.add(new Platform({
        y: 12.5,
        x: -12,
        z: -50,
        scale: 4
    }));
    world.add(new SmallHealer({
        x: -9.5,
        y: 9,
        z: -56,
        scale: 2,

    }));
    world.add(new SmallHealer({
        x: 24,
        y: 16,
        z: 36,
        scale: 2,

    }));

    world.add(new StairCase({
        y: 11.29,
        x: -15,
        z: -58.02,
        scale: 4,
        width: 4,
        height: 2,
        depth: 1.1,
        number: 14,
    }));

    world.add(new Shed({
        y: 14,
        x: 0,
        z: -22,
        scale: 4
    }));
    world.add(new StandPillar({
        x: 15,
        y: 3.6,
        z: -104,
        scale: 4,
    }));
    world.add(new StandPillar({
        x: 17,
        y: 3.6,
        z: -80,
        scale: 4,
        vis: 1
    }));
    world.add(new StandPillar({
        x: -12,
        y: 3.6,
        z: -104,
        scale: 4,
    }));
    world.add(new StandPillar({
        x: -12,
        y: 3.6,
        z: -93,
        scale: 4,
    }));
    world.add(new StandPillar({
        x: -12,
        y: 3.6,
        z: -80,
        scale: 4,
    }));
    world.add(new StandPillar({
        x: -25,
        y: 3.6,
        z: -80,
        scale: 4,
    }));
    world.add(new StandPillar({
        x: -40,
        y: 3.6,
        z: -80,
        scale: 4,
    }));
    let pillar1 = new StandPillar({
        x: -49,
        y: 5.4,
        z: -67,
        scale: 4,
    });
    world.add(new Tree({
        x: 31,
        z: 25.5,
        y: 14,
        scale: 5
    }));

    world.add(pillar1);
    pillar1.objects[0].scale.set(4.5, 7, 4.5);
    pillar1.objects[0].children[2].visible = false;
    let pillar2 = new StandPillar({
        x: -56.8,
        y: 5.4,
        z: -67,
        scale: 4,
    });
    world.add(pillar2);
    pillar2.objects[0].scale.set(4.5, 7, 4.5);
    pillar2.objects[0].children[2].visible = false;
    let bigpillar1 = new StandPillar({
        x: -58,
        y: 9,
        z: -82,
        scale: 8,
        vis: 1
    });
    world.add(bigpillar1);
    bigpillar1.objects[0].scale.set(8, 10, 8);

    bigpillar1.objects[0].children[2].visible = false;
    let bigpillar2 = new StandPillar({
        x: -76,
        y: 9,
        z: -82,
        scale: 8,
        vis: 1
    });
    world.add(bigpillar2);
    bigpillar2.objects[0].scale.set(8, 10, 8);

    let bigpillar3 = new StandPillar({
        x: -76,
        y: 9,
        z: -60.5,
        scale: 8,
        vis: 1
    });
    world.add(bigpillar3);
    bigpillar3.objects[0].scale.set(8, 10, 8);
    // world.add(new GrSphere({
    //     x: 13,
    //     y: 20,
    //     z: -56,
    //     radius: 2,
    //     scale: 4
    // }));

    world.renderer.shadowMap.enabled = true;
    world.renderer.shadowMap.type = T.PCFSoftShadowMap;
}