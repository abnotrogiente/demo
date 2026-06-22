import { Vector3 } from "three";

export const Selector = Object.freeze({
    CHECKBOX: 0,
    SELECT: 1
});

export const Sport = Object.freeze({
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
    [Sport.TABLE_TENNIS]: [
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
    [Sport.BOXING]: [
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

export const sportTrees = {
    [Sport.TABLE_TENNIS]: {
        children: [
            {
                name: "Player",
                properties: [],
                attributes: [],
                children: [
                    {
                        name: "racket",
                        properties: [],
                        attributes: [],
                    }
                ]
            },
            {
                name: "table",
                children: [
                    {
                        name: "plane",
                        properties: [],
                        attributes: [],
                    },
                    {
                        name: "net",
                        properties: [],
                        attributes: []
                    }
                ]
            },
            {
                name: "ball",
                properties: [],
                attributes: []
            }
        ],
        interactions: [
            {
                actors: ["racket", "ball"],
                types: ["technique", "bounce"]
            },
            {
                actors: ["net", "ball"],
                types: ["bounce"]
            },
            {
                actors: ["plane", "ball"],
                types: ["bounce", "projection"]
            }
        ]
    }
}


export const sportSpecificAssets = [];




