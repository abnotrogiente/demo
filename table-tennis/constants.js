import { Mesh, PlaneGeometry, Quaternion, Vector3 } from "three";
import { depth } from "three/tsl";

export function dispose3(obj) {
    /**
     *  @author Marco Sulla (marcosullaroma@gmail.com)
     *  @date Mar 12, 2016
     */

    if (!obj) return;
    var children = obj.children;
    var child;

    if (children) {
        for (var i = 0; i < children.length; i += 1) {
            child = children[i];

            dispose3(child);
        }
    }

    var geometry = obj.geometry;
    var material = obj.material;

    if (geometry) {
        geometry.dispose();
    }

    if (material) {
        var texture = material.map;

        if (texture) {
            texture.dispose();
        }

        material.dispose();
    }
}

export const ReferentsCharacteristics = Object.freeze({
    CAMERA_FACING: 0,
    SCREEN_SPACE: 1,
    BACK_FACE_CULLING: 2,
    ALWAYS_VISIBLE: 3
});

export const SportActorInterationTypes = Object.freeze({
    BOUNCE: 0,
    PROJECTION: 1,
    TECHNIQUE: 2,
    RULE: 3,
    METADATA: 4
});

export const SelectorTypes = Object.freeze({
    CHECKBOX: 0,
    SELECT: 1
});

export const SportName = Object.freeze({
    TABLE_TENNIS: 0,
    BOXING: 1,
    CLIMBING: 2,
    GENERIC: 4
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
    RIPPLE: 2,
    HEATMAP: 3
});

export const ProjectionModes = Object.freeze({
    INSTANTANEOUS: 0,
    TRACE: 1
})

export const EnableModes = Object.freeze({
    ENABLED: true,
    DISABLED: false
});

export const MetaDataModes = Object.freeze({
    POSITION: 0,
    SPEED: 1,
    ACCELERATION: 2,
    NAME: 3
});

export const MetaDataValueFromModeAndActor = new Map([
    [MetaDataModes.POSITION, (actor) => actor.position],
    [MetaDataModes.SPEED, (actor) => actor.userData.speed]
]);

export const GlyphModes = Object.freeze({
    TEXT: 0,
    ARROW: 1
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
            physics: false,
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
    ],
    [SportName.CLIMBING]: [
        {
            name: "Climbing",
            collideShape: "box",
            dimensions: { width: 10., height: 10., depth: 10. },
            position: new Vector3(0, -.5, 0),
            rotation: new Quaternion().setFromAxisAngle(new Vector3(1, 0, 0), Math.PI / 2),
            physics: false,
            model: "speed1.glb",
            modelOffset: new Vector3(0, -tableDimensions.altitude + tableDimensions.height + .015, 0)
        },
    ],
    [SportName.GENERIC]: [
        {
            name: "cube",
            collideShape: "box",
            dimensions: { width: 1, height: 0.75, depth: 1 },
            position: new Vector3(0, 1., 0),
        },

        {
            name: "sphere",
            collideShape: "sphere",
            dimensions: { radius: 0.5 },
            position: new Vector3(2, 1., 0),
        },
    ]
}

export const defaultContactCondition = ({ prevPos, pos, prevSpeed, speed, surface }) => {
    return prevSpeed.y < 0 && speed.y > 0;
}

/**
 * 
 * @param {{prevPos: Vector3, pos: Vector3, prevSpeed: Vector3, speed: Vector3,surface: Mesh}} param0 
 */
const bounceContactCondition = ({ prevPos, pos, prevSpeed, speed, surface }) => {
    /**@param {PlaneGeometry} */
    const geometry = surface.geometry;

    const p = new Vector3();
    surface.getWorldPosition(p);

    const worldNormal = new Vector3();
    const N = geometry.attributes.normal.array.slice(0, 3)
    worldNormal.set(N[0], N[1], N[2]); // or set(0,0,1)
    worldNormal.transformDirection(surface.matrixWorld);


    return (new Vector3().subVectors(prevPos, p).dot(worldNormal) * new Vector3().subVectors(pos, p).dot(worldNormal) < 0)


}

export const sportTrees = {
    [SportName.TABLE_TENNIS]: {
        children: {
            "Player": {
                properties: [],
                attributes: [],
                mesh: "pelvis1",
                keepName: true,
                keepMaterial: true,
                dimensions: { radius: 1 },
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
                        dimensions: { width: tableDimensions.depth, height: tableDimensions.height, depth: tableDimensions.width, modelOffset: new Vector3(0, -tableDimensions.altitude + tableDimensions.height + .015, 0) },
                        dimensionsForExtensions: { width: tableDimensions.depth, height: 4, depth: tableDimensions.width },
                        surfaceForEffects: true
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
                dimensions: { radius: .3, height: 1 },
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
                    contactCondition: bounceContactCondition
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
    },
    [SportName.CLIMBING]: {
        children: {
            "Climber": {
                properties: [],
                attributes: [],
                mesh: "rABDO",
                // mesh: "ground",
                keepMaterial: true,
                dimensions: { radius: 1 },
            },
            "Right Hand": {
                // mesh: "rRHND",
                // dimensions: { radius: .1 }
            },
            "Wall": {
                mesh: "wall",
                dimensions: { width: 4, height: 8, depth: 0.1 },
                dimensionsForExtensions: { width: 4, height: 25, depth: 2, lookDirection: new Vector3(0, -1, 0) },
                surfaceForEffects: true
            }
        },
        interactions: [
            {
                actors: ["Wall", "Climber"],
                types: [SportActorInterationTypes.PROJECTION],
                params: {},
            },
            {
                actors: ["Wall", "Climber"],
                extensions: true,
                types: [SportActorInterationTypes.PROJECTION],
                params: {},
            },
            // {
            //     actors: ["Wall", "Right Hand"],
            //     types: [SportActorInterationTypes.BOUNCE],
            //     params: {},
            // },
        ],
        assets: sportToAssets[SportName.CLIMBING]
    },
    [SportName.GENERIC]: {
        children: {
            "Cube": {
                properties: [],
                attributes: [],
                dimensions: { width: 1, height: 0.75, depth: 1 },
                mesh: "cube"
                // surfaceForEffects: true
            },

            "Sphere": {
                properties: [],
                attributes: [],
                dimensions: { radius: 0.5 },
                mesh: "sphere"
                // surfaceForEffects: true
            },
        },
        interactions: [

        ],
        assets: sportToAssets[SportName.GENERIC]
    }
}



export const sportSpecificAssets = {
    physics: [],
    nonPhysics: []
};




