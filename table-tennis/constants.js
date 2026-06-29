import { Vector3 } from "three";

export const SportActorInterationTypes = Object.freeze({
    BOUNCE: 0,
    PROJECTION: 1,
    TECHNIQUE: 2,
    STEP: 3
});

export const Selector = Object.freeze({
    CHECKBOX: 0,
    SELECT: 1
});

export const SportName = Object.freeze({
    TABLE_TENNIS: 0,
    BOXING: 1
});


export const tableDimensions = {
    width: 2.74,
    depth: 1.525,
    height: 0.04, // minimum
    altitude: 0.76,
    netHeight: 0.1525
};


export const sportToAssets = {
    [SportName.TABLE_TENNIS]: [
        {
            name: "Table",
            collideShape: "box",
            dimensions: { width: tableDimensions.width, height: tableDimensions.height, depth: tableDimensions.depth },
            position: new Vector3(0, 0, 0),
            physics: true,
            physicsConstants: {
                restitution: .9, // allows bounce
                friction: .6,     // higher friction (grip)}
            },
            model: "ping_pong_table.glb",
            modelOffset: new Vector3(0, -tableDimensions.altitude + tableDimensions.height + .015, 0)
        },
        // TODO add ball
        {
            name: "Ball",
            collideShape: "sphere",
            radius: 0.01381 * 3,
            position: new Vector3(),
            physicsConstants: {
                restitution: .9,
                friction: .2,
                mass: .0027
            }
        }
    ],
    [SportName.BOXING]: [
        {
            name: "ring",
            collideShape: "box",
            physics: true,
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

export const sportTrees = {
    [SportName.TABLE_TENNIS]: {
        children: {
            "Player": {
                properties: [],
                attributes: [],
                children: [
                    {
                        name: "Racket",
                        properties: [],
                        attributes: [],
                    }
                ]
            },

            "Table": {
                children: {
                    "Plane": {
                        properties: [],
                        attributes: [],
                        mesh: "Object_3"
                    },
                    "Net": {
                        properties: [],
                        attributes: [],
                        mesh: "Object_8",
                        useBoundingBox: true
                    }
                }
            },

            "Ball": {
                properties: [],
                attributes: [],
                tracked: true,
                tracking_file: "./assets/ball_traj_3D.csv",
                mesh: "Ball"
            }
        },
        interactions: [
            {
                actors: ["Racket", "Ball"],
                types: ["technique", SportActorInterationTypes.BOUNCE]
            },
            {
                actors: ["Net", "Ball"],
                types: [SportActorInterationTypes.BOUNCE]
            },
            {
                actors: ["Plane", "Ball"],
                types: [SportActorInterationTypes.BOUNCE, SportActorInterationTypes.PROJECTION]
            }
        ],
        assets: sportToAssets[SportName.TABLE_TENNIS]
    },

    [SportName.BOXING]: {
        children: {
            "Player": {
                properties: [],
                attributes: [],
                children: [
                    {
                        name: "Glove",
                        properties: [],
                        attributes: [],
                    }
                ]
            },

            "Ring": {
                children: {
                    "Plane": {
                        properties: [],
                        attributes: [],
                        mesh: "Boxing_Ring_Boxing_Ring_0"
                    },
                    "Net": {
                        properties: [],
                        attributes: [],
                        mesh: "Boxing_Ring_Boxing_Ring_0_1"
                    }
                }
            }
        },
        interactions: [
            {
                actors: ["Glove", "Player"],
                types: ["technique", "Bounce"]
            },
            {
                actors: ["Net", "Player"],
                types: ["Bounce"]
            },
            {
                actors: ["plane", "Player"],
                types: ["Bounce", "Projection", "step"]
            }
        ],
        assets: sportToAssets[SportName.BOXING]
    }
}


export const sportSpecificAssets = {
    physics: [],
    nonPhysics: []
};




