/*jshint esversion: 6 */
// @ts-check

import * as T from "../../libs/CS559-Three/build/three.module.js";
import {
  GrObject
} from "../../libs/CS559-Framework/GrObject.js";


let swingObCtr = 0;

// A more complicated, one-seat swingset.
// This one has actual chain links for its chains,
// and uses a nicer animation to give a more physically-plausible motion.
/**
 * @typedef AdvancedSwingProperties
 * @type {object}
 * @property {number} [x=0]
 * @property {number} [y=0]
 * @property {number} [z=0]
 * @property {number} [size=1]
 */
export class GrAdvancedSwing extends GrObject {
  /**
   * @param {AdvancedSwingProperties} params
   */
  constructor(params = {}) {
    let swing = new T.Group();
    addPosts(swing);

    let hanger = new T.Group();
    swing.add(hanger);
    hanger.translateY(1.8);
    let l_chain = new T.Group();
    let r_chain = new T.Group();
    hanger.add(l_chain);
    hanger.add(r_chain);
    // after creating chain groups, call the function to add chain links.
    growChain(l_chain, 20);
    growChain(r_chain, 20);
    l_chain.translateZ(0.4);
    r_chain.translateZ(-0.4);

    let seat_group = new T.Group();
    let seat_geom = new T.BoxGeometry(0.4, 0.1, 1);
    let seat_mat = new T.MeshStandardMaterial({
      color: "#554433",
      metalness: 0.1,
      roughness: 0.6,
    });
    let seat = new T.Mesh(seat_geom, seat_mat);
    seat_group.add(seat);
    seat_group.position.set(0, -1.45, 0);
    hanger.add(seat_group);

    // note that we have to make the Object3D before we can call
    // super and we have to call super before we can use this
    super(`Swing`, swing);
    this.whole_ob = swing;
    this.hanger = hanger;
    this.seat = seat_group;

    // put the object in its place
    this.whole_ob.position.x = params.x ? Number(params.x) : 0;
    this.whole_ob.position.y = params.y ? Number(params.y) : 0;
    this.whole_ob.position.z = params.z ? Number(params.z) : 0;
    let scale = params.size ? Number(params.size) : 1;
    swing.scale.set(scale, scale, scale);

    this.swing_angle = 0;

    // This helper function creates the 5 posts for a swingset frame,
    // and positions them appropriately.
    function addPosts(group) {
      let post_material = new T.MeshStandardMaterial({
        color: "#CD5555",
        metalness: 0.6,
        roughness: 0.5,
      });
      let post_geom = new T.CylinderGeometry(0.1, 0.1, 2, 16);
      let flPost = new T.Mesh(post_geom, post_material);
      group.add(flPost);
      flPost.position.set(0.4, 0.9, 0.9);
      flPost.rotateZ(Math.PI / 8);
      let blPost = new T.Mesh(post_geom, post_material);
      group.add(blPost);
      blPost.position.set(-0.4, 0.9, 0.9);
      blPost.rotateZ(-Math.PI / 8);
      let frPost = new T.Mesh(post_geom, post_material);
      group.add(frPost);
      frPost.position.set(0.4, 0.9, -0.9);
      frPost.rotateZ(Math.PI / 8);
      let brPost = new T.Mesh(post_geom, post_material);
      group.add(brPost);
      brPost.position.set(-0.4, 0.9, -0.9);
      brPost.rotateZ(-Math.PI / 8);
      let topPost = new T.Mesh(post_geom, post_material);
      group.add(topPost);
      topPost.position.set(0, 1.8, 0);
      topPost.rotateX(-Math.PI / 2);
    }

    // Helper function to add "length" number of links to a chain.
    function growChain(group, length) {
      let chain_geom = new T.TorusGeometry(0.05, 0.015);
      let chain_mat = new T.MeshStandardMaterial({
        color: "#777777",
        metalness: 0.8,
        roughness: 0.2,
      });
      let link = new T.Mesh(chain_geom, chain_mat);
      group.add(link);
      for (let i = 0; i < length; i++) {
        let l_next = new T.Mesh(chain_geom, chain_mat);
        l_next.translateY(-0.07);
        link.add(l_next);
        l_next.rotation.set(0, Math.PI / 3, 0);
        link = l_next;
      }
    }
  }
  /**
   * StepWorld method
   * @param {*} delta
   * @param {*} timeOfDay
   */
  stepWorld(delta, timeOfDay) {
    // in this animation, use the sine of the accumulated angle to set current rotation.
    // This means the swing moves faster as it reaches the bottom of a swing,
    // and faster at either end of the swing, like a pendulum should.
    this.swing_angle += 0.005 * delta;
    this.hanger.rotation.z = (Math.sin(this.swing_angle) * Math.PI) / 4;
    this.seat.rotation.z = (Math.sin(this.swing_angle) * Math.PI) / 16;
  }
}

let carouselObCtr = 0;
// A Carousel.
/**
 * @typedef CarouselProperties
 * @type {object}
 * @property {number} [x=0]
 * @property {number} [y=0]
 * @property {number} [z=0]
 * @property {number} [size=1]
 */
export class GrCarousel extends GrObject {
  /**
   * @param {CarouselProperties} params
   */
  constructor(params = {}) {
    let width = 3;
    let carousel = new T.Group();

    let base_geom = new T.CylinderGeometry(width, width, 1, 32);
    let base_mat = new T.MeshStandardMaterial({
      color: "#EED5D2",
      metalness: 0.3,
      roughness: 0.8,
    });
    let base = new T.Mesh(base_geom, base_mat);
    base.translateY(0.5);
    carousel.add(base);

    let platform_group = new T.Group();
    base.add(platform_group);
    platform_group.translateY(0.5);

    let platform_geom = new T.CylinderGeometry(
      0.95 * width,
      0.95 * width,
      0.2,
      32
    );
    let platform_mat = new T.MeshStandardMaterial({
      color: "#EEC900",
      metalness: 0.3,
      roughness: 0.8,
    });
    let platform = new T.Mesh(platform_geom, platform_mat);
    platform_group.add(platform);

    let cpole_geom = new T.CylinderGeometry(0.3 * width, 0.3 * width, 3, 16);
    let cpole_mat = new T.MeshStandardMaterial({
      color: "#FFC0CB",
      metalness: 0.8,
      roughness: 0.5,
    });
    let cpole = new T.Mesh(cpole_geom, cpole_mat);
    platform_group.add(cpole);
    cpole.translateY(1.5);
    let icosah = new T.Mesh(new T.IcosahedronGeometry(0.8, 1), new T.MeshStandardMaterial({
      color: "#00BFFF"
    }));
    platform_group.add(icosah);
    icosah.translateY(5);
    let top_trim = new T.Mesh(platform_geom, platform_mat);
    platform_group.add(top_trim);
    top_trim.translateY(3);

    let opole_geom = new T.CylinderGeometry(0.03 * width, 0.03 * width, 3, 16);
    let opole_mat = new T.MeshStandardMaterial({
      color: "#FFE7BA",
      metalness: 0.8,
      roughness: 0.5,
    });
    let opole;
    let num_poles = 10;
    let poles = [];
    let poles_group = new T.Group();
    let pony_geo = new T.CylinderGeometry(0.8, 0.8, 0.3, 32);
    let pony_ma = new T.MeshPhongMaterial({
      color: "#FF6A6A"
    })
    let poines = [];
    let all_pony = new T.Group();
    let cnt = 0;
    for (let i = 0; i < num_poles; i++) {
      let pony = new T.Group();
      let ponybody = new T.Mesh(pony_geo, pony_ma);
      ponybody.rotateZ(Math.PI / 2);
      ponybody.scale.set(0.6, 1, 1);
      let ponyhead = new T.Mesh(new T.CylinderGeometry(0.3, 0.3, 0.3, 32), pony_ma);
      let ponyleft = new T.Mesh(new T.CylinderGeometry(0.1, 0.1, 0.2, 32), new T.MeshStandardMaterial({
        color: "white"
      }));
      let ponyright = new T.Mesh(new T.CylinderGeometry(0.1, 0.1, 0.2, 32), new T.MeshStandardMaterial({
        color: "white"
      }));
      let ponytop = new T.Mesh(new T.SphereGeometry(0.1), new T.MeshStandardMaterial({
        color: "white"
      }));
      ponyhead.rotateZ(Math.PI / 2);
      pony.add(ponybody);
      pony.add(ponyhead);
      pony.add(ponyleft);
      pony.add(ponyright);
      pony.add(ponytop);
      ponyright.position.set(0, -0.5, -0.4);
      ponyleft.position.set(0, -0.5, 0.4);
      ponyhead.position.set(0, 0.45, -0.5);
      ponytop.position.set(0, 0.7, -0.2);
      opole = new T.Mesh(opole_geom, opole_mat);
      poles_group.add(opole);
      opole.rotateY((2 * i * Math.PI) / num_poles);
      opole.translateX(0.8 * width);
      poles.push(opole);
      pony.rotateY((2 * i * Math.PI) / num_poles);
      pony.translateX(0.8 * width);
      all_pony.add(pony);
      pony.position.y = 1 + cnt * 0.1;
      if (i % 2 == 0)
        poines.push([pony, 1]);
      else
        poines.push([pony, -1]);
      cnt++;

      //if(cnt)
    }
    platform_group.add(all_pony);
    platform_group.add(poles_group);
    poles_group.position.y = 1.5;
    let roof_geom = new T.ConeGeometry(width, 0.5 * width, 32, 4);
    let roof = new T.Mesh(roof_geom, base_mat);
    carousel.add(roof);
    roof.translateY(4.8);

    // note that we have to make the Object3D before we can call
    // super and we have to call super before we can use this
    super(`Carousel`, carousel);
    this.whole_ob = carousel;
    this.platform = platform;
    this.poles = poles;
    this.polegroup = poles_group;
    this.poines = poines;
    this.ponygroup = all_pony;

    // put the object in its place
    this.whole_ob.position.x = params.x ? Number(params.x) : 0;
    this.whole_ob.position.y = params.y ? Number(params.y) : 0;
    this.whole_ob.position.z = params.z ? Number(params.z) : 0;
    let scale = params.size ? Number(params.size) : 1;
    carousel.scale.set(scale, scale, scale);
  }
  /**
   * StepWorld method
   * @param {*} delta
   * @param {*} timeOfDay
   */
  stepWorld(delta, timeOfDay) {
    this.polegroup.rotateY(delta * 0.001);
    let step = delta * 0.001 % 1;
    this.ponygroup.rotateY(delta * 0.001);
    for (let i of this.poines) {
      let mesh = i[0];
      if (mesh.position.y > 1.9) i[1] = -1;
      else if (mesh.position.y < 1) i[1] = 1;
      mesh.position.y += i[1] * step;
      // mesh.rotateY(delta * 0.001);

    }
  }
}

let londoneyeObCtr = 0;

export class GrLondonEye extends GrObject {

  constructor(params = {}) {
    let londoneye = new T.Group();
    let centerma = new T.MeshStandardMaterial({
      color: "#D2B48C"
    });
    let basic_center = new T.Mesh(new T.CylinderGeometry(0.3, 0.3, 2, 32), centerma);
    basic_center.rotateZ(Math.PI / 2);
    let standgeo = new T.BoxGeometry(0.3, 10.5, 0.3);
    let stand1 = new T.Mesh(standgeo, centerma);
    let stand2 = new T.Mesh(standgeo, centerma);
    let stand3 = new T.Mesh(standgeo, centerma);
    let stand4 = new T.Mesh(standgeo, centerma);
    let center_group = new T.Group();
    // base.add(platform_group);
    // platform_group.translateY(0.25);
    // let platform = new T.Mesh(platform_geom, platform_mat);
    center_group.add(basic_center);
    center_group.add(stand1), center_group.add(stand2), center_group.add(stand3), center_group.add(stand4);

    stand1.translateY(-5), stand1.translateZ(-1.7), stand1.translateX(-0.88);
    stand1.rotateX(Math.PI / 10);
    stand2.translateY(-5), stand2.translateZ(1.7), stand2.translateX(-0.88);
    stand2.rotateX(-Math.PI / 10);
    stand3.translateY(-5), stand3.translateZ(-1.7), stand3.translateX(0.88);
    stand3.rotateX(Math.PI / 10);
    stand4.translateY(-5), stand4.translateZ(1.7), stand4.translateX(0.88);
    stand4.rotateX(-Math.PI / 10);
    londoneye.add(center_group);
    let ro_group = new T.Group();
    for (let i = 0; i <= 11; i++) {
      let tmp_group = new T.Group();
      let frame = new T.Mesh(new T.CylinderGeometry(0.3, 0.3, 4, 32), new T.MeshStandardMaterial({
        color: "#66CDAA"
      }));
      let frame1 = new T.Mesh(new T.CylinderGeometry(0.1, 0.1, 2 / Math.sin(Math.PI / 12), 32), new T.MeshStandardMaterial({
        color: "#FF82AB"
      }));
      let frame2 = new T.Mesh(new T.CylinderGeometry(0.1, 0.1, 2 / Math.sin(Math.PI / 12), 32), new T.MeshStandardMaterial({
        color: "#BA55D3"
      }));
      let circle = new T.Mesh(new T.SphereGeometry(0.8), new T.MeshStandardMaterial({
        color: "#00BFFF"
      }));
      frame1.rotateZ(-Math.PI / 12);
      frame1.translateY(1 / Math.tan(Math.PI / 12));
      frame1.translateX(0.3);
      frame2.rotateZ(Math.PI / 12);
      frame2.translateY(1 / Math.tan(Math.PI / 12));
      frame2.translateX(-0.3);
      circle.translateX(-2);
      circle.translateY(2 / Math.tan(Math.PI / 12));
      frame.translateY(2 / Math.tan(Math.PI / 12));
      frame.rotateZ(Math.PI / 2);
      tmp_group.add(circle);
      tmp_group.add(frame);
      tmp_group.add(frame1);
      tmp_group.add(frame2);
      tmp_group.rotateZ((2 * i * Math.PI) / 12);
      ro_group.add(tmp_group);
    }
    ro_group.rotateY(Math.PI / 2);
    center_group.add(ro_group);
    londoneye.rotateY(-Math.PI / 6);
    // note that we have to make the Object3D before we can call
    // super and we have to call super before we can use this
    super(`LondonEye`, londoneye);
    this.whole_ob = londoneye;
    this.rogroup = ro_group;

    // put the object in its place
    this.whole_ob.position.x = params.x ? Number(params.x) : 0;
    this.whole_ob.position.y = params.y ? Number(params.y) : 0;
    this.whole_ob.position.z = params.z ? Number(params.z) : 0;
    let scale = params.scale ? Number(params.scale) : 1;
    this.whole_ob.scale.set(scale, scale, scale);
  }
  /**
   * StepWorld method
   * @param {*} delta
   * @param {*} timeOfDay
   */
  stepWorld(delta, timeOfDay) {
    this.rogroup.rotateZ(0.0017 * delta % 1);
  }
}