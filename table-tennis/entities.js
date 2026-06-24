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
    Vector3
} from 'three';

import { BallEffects } from './ballEffects2';
import { TableEffects } from './tableEffects';
import { sportSpecificAssets, tableDimensions } from './constants';

export async function createEntities(scene, physics, renderer, composer) {
    // Create Table
    const table = await physics.createBox({
        position: new Vector3(0, 0, 0),
        dimensions: new Vector3(tableDimensions.depth, tableDimensions.height, tableDimensions.width),
        color: 0x0030FF,
        restitution: 0.9,
        friction: 0.6,
        model: "ping_pong_table.glb",
        modelOffset: new Vector3(0, -tableDimensions.altitude + tableDimensions.height + 0.015, 0)
    });

    console.log("Object in scene : " + scene.getObjectByName("Object_3"));
    sportSpecificAssets.push(table);

    // Create Room
    const roomGeometry = new BoxGeometry(20, 3, 20);
    const roomMaterial = new MeshStandardMaterial({ side: BackSide });
    const room = new Mesh(roomGeometry, roomMaterial);
    room.position.y = 1.5 - tableDimensions.altitude;
    scene.add(room);

    // Create Ball (Physics)
    const radius = 0.01381;
    const ball = physics.createSphere({
        position: new Vector3(0, 2.0, 0),
        radius: radius,
        color: 0xfe9000,
        mass: 0.0027,
        restitution: 0.9,
        friction: 0.2
    });

    // Create Tracked Ball (Visual)
    const tracked_ball = new Mesh(
        new SphereGeometry(radius),
        new MeshStandardMaterial({ color: 0xfe9000 })
    );
    tracked_ball.position.y = 1.5;
    scene.add(tracked_ball);

    // Create Effects
    const tableEffects = new TableEffects(scene.getObjectByName("Object_3"), tracked_ball, renderer);
    const ballEffects = new BallEffects(composer, tracked_ball, scene, renderer);

    return {
        table,
        room,
        ball,
        tracked_ball,
        tableEffects,
        ballEffects
    };
}
