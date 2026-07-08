import { Mesh, PlaneGeometry, Vector3 } from "three";
import { depth } from "three/tsl";

export const SportActorInterationTypes = Object.freeze({
    BOUNCE: 0,
    PROJECTION: 1,
    TECHNIQUE: 2,
    STEP: 3
});

export const SelectorTypes = Object.freeze({
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

export const BounceModes = Object.freeze({
    NONE: 0,
    COLOR: 1,
    RIPPLE: 2
});

export const ProjectionModes = Object.freeze({
    INSTANTANEOUS: 0,
    TRACE: 1
})

export const EnableModes = Object.freeze({
    ENABLED: true,
    DISABLED: false
});

export const sportToAssets = {
    [SportName.TABLE_TENNIS]: [
        {
            name: "Table",
            visPannels: true,
            visPannelSmallHalf: true,
            collideShape: "box",
            dimensions: { width: tableDimensions.depth, height: tableDimensions.height, depth: tableDimensions.width },
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
            dimensions: { radius: 0.01381 * 3 },
            position: new Vector3(),
            physicsConstants: {
                restitution: .9,
                friction: .2,
                mass: .0027
            }
        },
        // {
        //     name: "vis-wall1",
        //     collideShape: "box",
        //     dimensions: { width: .01, height: 2.5, depth: tableDimensions.width },
        //     position: new Vector3(tableDimensions.depth / 2, 0, 0),
        //     physics: false,

        // }
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

export const defaultContactCondition = ({ prevPos, pos, prevSpeed, speed, surface }) => {
    return prevSpeed.y < 0 && speed.y > 0;
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
                        mesh: "Object_3",
                        dimensions: { width: tableDimensions.depth, height: tableDimensions.height, depth: tableDimensions.width }
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
                mesh: "Ball",
                dimensions: { radius: 0.01381 * 3 },
            },
            "ground": {
                properties: [],
                attributes: [],
                // mesh: "ground"
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
            },
            // {
            //     actors: ["ground", "Player"],
            //     types: [SportActorInterationTypes.BOUNCE, SportActorInterationTypes.PROJECTION]
            // },
            {
                extensions: true,
                actors: ["Plane", "Ball"],
                types: [SportActorInterationTypes.BOUNCE, SportActorInterationTypes.PROJECTION],
                params: {
                    contactCondition:
                        /**
                         * 
                         * @param {{prevPos: Vector3, pos: Vector3, prevSpeed: Vector3, speed: Vector3,surface: Mesh}} param0 
                         */
                        ({ prevPos, pos, prevSpeed, speed, surface }) => {
                            /**@param {PlaneGeometry} */
                            const geometry = surface.geometry;

                            const p = new Vector3();
                            surface.getWorldPosition(p);

                            const worldNormal = new Vector3();
                            const N = geometry.attributes.normal.array.slice(0, 3)
                            worldNormal.set(N[0], N[1], N[2]); // or set(0,0,1)
                            console.log("normal : " + N[0]);
                            worldNormal.transformDirection(surface.matrixWorld);
                            console.log("normal : " + JSON.stringify(worldNormal));


                            return (new Vector3().subVectors(prevPos, p).dot(worldNormal) * new Vector3().subVectors(pos, p).dot(worldNormal) < 0)


                        }
                }
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
                        mesh: "Boxing_Ring_Boxing_Ring_0",
                        cloneMaterial: true
                    },
                    "Net": {
                        properties: [],
                        attributes: [],
                        mesh: "Boxing_Ring_Boxing_Ring_0_1",
                        cloneMaterial: true
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




