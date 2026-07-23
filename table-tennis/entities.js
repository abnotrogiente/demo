/**
 * Game Entities Creation
 * Creates table, ball, room, and visual effects
 */

import {
    BoxGeometry,
    Mesh,
    MeshStandardMaterial,
    MeshBasicMaterial,
    BackSide,
    SphereGeometry,
    Vector3,
    Scene,
    Camera,
    WebGLRenderer,
    MeshPhongMaterial
} from 'three';

import { BallEffects } from './ballEffects2';
import { TableEffects } from './tableEffects';
import { SportName, sportSpecificAssets, tableDimensions } from './constants';
import { ObjectSelector } from './editor';
import { Physics } from './physics';
import { EffectComposer } from 'three/examples/jsm/Addons.js';
import { sport } from './sport';

/**
 * 
 * @param {Scene} scene 
 * @param {Camera} camera 
 * @param {Physics} physics 
 * @param {WebGLRenderer} renderer 
 * @param {EffectComposer} composer 
 * @returns 
 */
export async function createEntities(scene, camera, physics, renderer, composer) {
    // Create Table
    // const table = await physics.createBox({
    //     position: new Vector3(0, 0, 0),
    //     dimensions: new Vector3(tableDimensions.depth, tableDimensions.height, tableDimensions.width),
    //     color: 0x0030FF,
    //     restitution: 0.9,
    //     friction: 0.6,
    //     model: "ping_pong_table.glb",
    //     modelOffset: new Vector3(0, -tableDimensions.altitude + tableDimensions.height + 0.015, 0)
    // });

    // sportSpecificAssets.physics.push(table);

    // // Create Room
    const roomGeometry = new BoxGeometry(20, 10, 20);
    const roomMaterial = new MeshStandardMaterial({ side: BackSide, color: 0xddffff });
    const room = new Mesh(roomGeometry, roomMaterial);
    room.position.y = 5 - tableDimensions.altitude;
    scene.add(room);

    const groundThickness = 1.
    const groundGeometry = new BoxGeometry(20, groundThickness, 20);
    const groundMaterial = new MeshPhongMaterial({ color: 0xffaa66 });
    const ground = new Mesh(groundGeometry, groundMaterial);
    ground.position.y = -groundThickness / 2 + 0.01 - tableDimensions.altitude;
    ground.name = "ground";
    scene.add(ground);




    // // Create Ball (Physics)
    // const radius = 0.01381;
    // const ball = physics.createSphere({
    //     position: new Vector3(0, 1.5, 0),
    //     radius: radius * 4,
    //     color: 0xfe9000,
    //     mass: 0.0027,
    //     restitution: 0.9,
    //     friction: 0.2
    // });

    // // Create Tracked Ball (Visual)
    // const tracked_ball = new Mesh(
    //     new SphereGeometry(radius),
    //     new MeshStandardMaterial({ color: 0xfe9000 })
    // );
    // tracked_ball.position.y = 1.5;
    // // scene.add(tracked_ball);






    // return {
    //     table,
    //     room,
    //     ball,
    //     tracked_ball,
    //     tableEffects,
    //     ballEffects,
    //     interactableMeshes,
    //     objectSelector,
    // };
    return;
}
