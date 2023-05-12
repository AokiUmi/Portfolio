/*jshint esversion: 6 */
// @ts-check

/**
 * Graphics Town Framework - "Main" File
 *
 * This is the main file - it creates the world, populates it with
 * objects and behaviors, and starts things running
 *
 * The initial distributed version has a pretty empty world.
 * There are a few simple objects thrown in as examples.
 *
 * It is the students job to extend this by defining new object types
 * (in other files), then loading those files as modules, and using this
 * file to instantiate those objects in the world.
 */
import * as T from '../libs/CS559-Three/build/three.module.js';
import {
    GrWorld
} from "../libs/CS559-Framework/GrWorld.js";
import {
    WorldUI
} from "../libs/CS559-Framework/WorldUI.js";

import {
    mainworld
} from "./blizzardworld/world.js";
/**m
 * The Graphics Town Main -
 * This builds up the world and makes it go...
 */

// make the world
let world = new GrWorld({
    lookat: new T.Vector3(0, 0, 0),
    lookfrom: new T.Vector3(50, 80, 200),
    width: 800,
    height: 600,
    groundplane: false,


});

// put stuff into the world
// this calls the example code (that puts a lot of objects into the world)
// you can look at it for reference, but do not use it in your assignment
// main(world);
mainworld(world);
// while making your objects, be sure to identify some of them as "highlighted"

///////////////////////////////////////////////////////////////
// because I did not store the objects I want to highlight in variables, I need to look them up by name
// This code is included since it might be useful if you want to highlight your objects here
function highlight(obName) {
    const toHighlight = world.objects.find(ob => ob.name === obName);
    if (toHighlight) {
        toHighlight.highlighted = true;
    } else {
        throw `no object named ${obName} for highlighting!`;
    }
}
// // of course, the student should highlight their own objects, not these
highlight("Castle-1");
highlight("Castle-2");
highlight("MainGate");
highlight("PlayHouse");
highlight("SideHouse2");
highlight("SideHouse3");
highlight("LakeHouse");
highlight("TowerGate");
highlight("Platform");
highlight("Healer-1");
highlight("Statue");
highlight("SmallHealer-2");
highlight("FishingTerrace");
highlight("Helicopter");
highlight("LondonEye");
highlight("TravelGuider-1");
// highlight("Statue");

///////////////////////////////////////////////////////////////
// build and run the UI
// only after all the objects exist can we build the UI
// @ts-ignore       // we're sticking a new thing into the world
world.ui = new WorldUI(world);
// now make it go!
world.go();