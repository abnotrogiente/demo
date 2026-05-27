import { Vector3 } from "three";
import { depth } from "three/tsl";
import { Config } from "./config";

export const tableDimensions = {
    width: 2.74,
    depth: 1.525,
    height: 0.04, // minimum
    altitude: 0.76,
    netHeight: 0.1525
};

export const TABLE_TENNIS = 1;
export const BOXING = 2;

export const sportToAssets = {
    TABLE_TENNIS: [
        {
            name: "table",
            collideShape: "box",
            dimensions: { width: tableDimensions.width, height: tableDimensions.height, depth: tableDimensions.depth },
            position: new Vector3(0, 0, 0),
            physicsConstants: {
                restitution: .9, // allows bounce
                friction: .6,     // higher friction (grip)}
            },
            model: "ping_pong_table.glb",
            modelOffset: new Vector3(0, -tableDimensions.altitude + tableDimensions.height + .015, 0)
        },
        // TODO add ball
    ],
    BOXING: [
        {
            name: "ring",
            collideShape: "box",
            dimensions: { width: 7.8, height: 1., depth: 7.8 },
            position: new Vector3(0, -.5, 0),
            physicsConstants: {
                restitution: .3,
                friction: .7,
            },
            model: "boxing_ring.glb",
            modelOffset: new Vector3(0, -1.5, 0)
        },
    ]
}


export const sportSpecificAssets = [];








export const config = new Config();

config.configureSelectors();




