import { BoxGeometry, DoubleSide, Mesh, MeshBasicMaterial, MeshPhongMaterial, MeshStandardMaterial, PlaneGeometry, Scene, SphereGeometry, Vector3 } from "three";
import { TableEffects } from "./tableEffects";
import { parseCsv } from "./utils";
import { Video } from "./video";
import { BounceModes, EnableModes, SelectorTypes, SportActorInterationTypes, SportName, sportSpecificAssets, sportTrees } from "./constants";
import { Physics } from "./physics";
import { config, configureSelector } from "./config";
import { SurfaceEffects } from "./surfaceEffects";
import { ObjectSelector } from "./editor";

class SportActor {
    constructor() {

    }
}


const characteristicsFromInteraction = new Map([
    [SportActorInterationTypes.BOUNCE, {
        name: "Bounce",
        params: {
            bounce: {
                enum: BounceModes,
                default: BounceModes.NONE
            }
        }
    }],
    [SportActorInterationTypes.PROJECTION, {
        name: "Projection",
        params: {
            instantaneous: {
                enum: EnableModes,
                default: EnableModes.DISABLED
            },
            trace: {
                enum: EnableModes,
                default: EnableModes.DISABLED
            }
        }
    }],
    [SportActorInterationTypes.TECHNIQUE, {
        name: "Technique",
        params: {
            technique: {
                enum: EnableModes,
                default: EnableModes.DISABLED
            }
        }

    }],
    [SportActorInterationTypes.STEP, {
        name: "Step",
        params: {
            technique: {
                enum: EnableModes,
                default: EnableModes.DISABLED
            }
        }
    }],
]);

// const interactionsCharacteristics = new Map([
//     [SportActorInterationTypes.BOUNCE, {
//         name: "Bounce",
//         enum: BounceModes,
//         default: BounceModes.NONE
//     }],
//     [SportActorInterationTypes.PROJECTION, {
//         name: "Projection",
//         enum: EnableModes,
//         default: EnableModes.DISABLED
//     }],
//     [SportActorInterationTypes.TECHNIQUE, {
//         name: "Technique",
//         enum: EnableModes,
//         default: EnableModes.DISABLED
//     }],
//     [SportActorInterationTypes.STEP, {
//         name: "Step",
//         enum: EnableModes,
//         default: EnableModes.DISABLED
//     }],
// ]);



export class SportActorInteraction {
    /**
     * 
     * @param {*} type 
     * @param {*} actor1 
     * @param {*} actor2 
     * @param {SurfaceEffects} surfaceEffects 
     */
    constructor(type, actor1, actor2, surfaceEffects) {
        this.actor1 = actor1;
        this.actor2 = actor2;

        const interactionCharacteristics = characteristicsFromInteraction.get(type);
        this.name = interactionCharacteristics.name;
        this.params = {};
        Object.entries(interactionCharacteristics.params).forEach(([paramName, param]) => {
            this.params[paramName] = {
                value: param.default,
                enum: param.enum
            }
        });
        // this.enum = interactionsCharacteristics.get(type).enum;
        // this.value = interactionsCharacteristics.get(type).default;
        // this.name = interactionsCharacteristics.get(type).name;
        this.type = type;

        surfaceEffects.addInteraction(this);
    }
}

class Sport {

    constructor() {




    }

    /**
     * 
     * @param {Video} videoObj 
     */
    init(videoObj) {
        this.videoObject = videoObj;
        this.video_src = videoObj.webcamVideo;
        this.videoDuration = videoObj.duration;
    }


    async set(sportDescription) {

        /**@type {Mesh[]} */
        this.actors = [];

        /**@type {Mesh[]} */
        this.visPannels = [];

        this.video_src = config.videoObject.webcamVideo;
        this.videoDuration = config.videoObject.duration;

        /**@type {TableEffects[]} */
        this.projections = [];
        /**@type {Map<string, Mesh>} */
        this.actorByName = new Map();

        this.sportDescription = sportDescription;

        this.trackingDataFromActor = new Map();

        /**@type {Map<Mesh, Map<string, SportActorInteraction[]>>} */
        this.interactionsFromActor = new Map();

        /**@type {Map<Mesh, SurfaceEffects>} */
        this.surfaceEffectsFromActor = new Map();

        await this.setAssets(this.sportDescription.assets);


        const parseChildren = async (children) => {
            for (const [name, child] of Object.entries(children)) {
                if (child.mesh) {
                    const actor = config.scene.getObjectByName(child.mesh);
                    if (child.cloneMaterial) actor.material = actor.material.clone();
                    if (child.useBoundingBox) actor.userData.useBoundingBox = true;
                    this.#addActor(actor, name);
                }
                if (child.tracked) {
                    const trackingData = await parseCsv(child.tracking_file);
                    this.trackingDataFromActor.set(name, trackingData);
                }
                if (child.children) await parseChildren(child.children);
            }
        }

        await parseChildren(sportDescription.children);

        this.sportDescription.interactions.forEach(interaction => {

            if (interaction.visPannels) {
                const actorName = interaction.actor;
                const actor = this.actorByName.get(actorName);

                this.visPannels.forEach(visPannel => {
                    this.#addInteractions(interaction.types, visPannel, visPannel.name, actor, actorName);
                });
            }

            else {
                const actor1Name = interaction.actors[0];
                const actor2Name = interaction.actors[1];

                const actor1 = this.actorByName.get(actor1Name);
                const actor2 = this.actorByName.get(actor2Name);

                this.#addInteractions(interaction.types, actor1, actor1Name, actor2, actor2Name);
            }

        });
        this.selector = new ObjectSelector();
        this.selector.updateObjectShaders();

    }


    #addInteractions(interactionTypes, actor1, actor1Name, actor2, actor2Name) {
        interactionTypes.forEach(interactionType => {
            if (actor1 && actor2) {
                if (!this.surfaceEffectsFromActor.has(actor1)) this.surfaceEffectsFromActor.set(actor1, new SurfaceEffects(actor1));
                const interaction = new SportActorInteraction(interactionType, actor1, actor2, this.surfaceEffectsFromActor.get(actor1));
                if (!this.interactionsFromActor.get(actor1).has(actor2Name)) this.interactionsFromActor.get(actor1).set(actor2Name, []);
                if (!this.interactionsFromActor.get(actor2).has(actor1Name)) this.interactionsFromActor.get(actor2).set(actor1Name, []);
                this.interactionsFromActor.get(actor1).get(actor2Name).push(interaction);
                this.interactionsFromActor.get(actor2).get(actor1Name).push(interaction);
                // console.log("ADDING INTERACTION : " + this.interactionsFromActor.get(actor1);
                this.surfaceEffectsFromActor.get(actor1).otherActor = actor2;
            }
            // if (interactionType === SportActorInterationTypes.PROJECTION) {
            //     const effects = new TableEffects(actor1, actor2, config.renderer);
            //     this.projections.push(effects);
            // }
        });
    }

    /**
     * 
     * @param {*} assets 
     */
    async setAssets(assets) {
        sportSpecificAssets.physics.forEach(asset => config.physics.deleteBody(asset));
        sportSpecificAssets.physics.splice(0, sportSpecificAssets.physics.length);

        for (const asset of assets) {
            let body;
            let mesh;
            switch (asset.collideShape) {
                case "box":
                    if (asset.physics) {
                        body = await config.physics.createBox({
                            position: asset.position,
                            // rotation: new Quaternion(0., 0., .02, 1.),
                            dimensions: new Vector3(asset.dimensions.width, asset.dimensions.height, asset.dimensions.depth),
                            restitution: asset.physicsConstants.restitution, // allows bounce
                            friction: asset.physicsConstants.friction,     // higher friction (grip)
                            model: asset.model,
                            modelOffset: asset.modelOffset
                        });
                        mesh = config.physics.bodyToMesh.get(body);
                    }
                    else {
                        const material = new MeshPhongMaterial();
                        const geometry = new BoxGeometry(asset.dimensions.width, asset.dimensions.height, asset.dimensions.depth);
                        mesh = new Mesh(geometry, material);
                        mesh.position.copy(asset.position);
                        mesh.name = asset.name;
                        config.scene.add(mesh);
                    }

                    if (asset.visPannels) {
                        const material = new MeshPhongMaterial();
                        material.transparent = true;
                        material.opacity = .4;
                        // const geometry1 = new BoxGeometry(.01, 3., asset.dimensions.depth);
                        const geometry1 = new PlaneGeometry(asset.dimensions.depth, 3);
                        geometry1.rotateY(-Math.PI / 2);

                        // const geometry2 = new BoxGeometry(asset.dimensions.width, 3., .01);
                        const geometry2 = new PlaneGeometry(asset.dimensions.width, 3);
                        // geometry1.rotateY(Math.PI/2);

                        const pannels = [];

                        const visPannel1 = new Mesh(geometry1, material);
                        visPannel1.position.set(asset.dimensions.width / 2, 0., 0.);
                        visPannel1.name = "Vis Pannel 1";
                        pannels.push(visPannel1);

                        const visPannel2 = new Mesh(geometry1, material.clone());
                        visPannel2.position.set(-asset.dimensions.width / 2, 0., 0.);
                        visPannel2.rotateY(Math.PI);
                        visPannel2.name = "Vis Pannel 2";
                        pannels.push(visPannel2);


                        const visPannel3 = new Mesh(geometry2, material.clone());
                        visPannel3.position.set(0., 0., asset.dimensions.depth / 2);
                        visPannel3.rotateY(Math.PI);
                        visPannel3.name = "Vis Pannel 3";
                        pannels.push(visPannel3);


                        const visPannel4 = new Mesh(geometry2, material.clone());
                        visPannel4.position.set(0., 0., -asset.dimensions.depth / 2);
                        visPannel4.name = "Vis Pannel 4";
                        pannels.push(visPannel4);


                        if (asset.visPannelSmallHalf) {
                            if (asset.dimensions.depth > asset.dimensions.width) {
                                const visPannel5 = new Mesh(geometry2, material.clone());
                                visPannel5.material.side = DoubleSide;
                                visPannel5.position.set(0., 0., 0);
                                visPannel5.name = "Vis Pannel 5";
                                pannels.push(visPannel5)
                            }
                        }

                        pannels.forEach(visPannel => {
                            console.log("PANNEL : " + visPannel.name);
                            mesh.add(visPannel);
                            this.#addActor(visPannel, visPannel.name, true);
                        });

                    }
                    break;
                case "sphere":
                    if (asset.physics) {
                        body = await config.physics.createSphere({
                            position: asset.position,
                            radius: asset.radius,
                            restitution: asset.physicsConstants.restitution,
                            friction: asset.physicsConstants.friction,
                            model: asset.model,
                            modelOffset: asset.modelOffset

                        });
                        mesh = config.physics.bodyToMesh.get(body);

                    }
                    else {
                        const material = new MeshStandardMaterial();
                        const geometry = new SphereGeometry(asset.radius);
                        mesh = new Mesh(geometry, material);
                        mesh.position.copy(asset.position);
                        mesh.name = asset.name;
                        config.scene.add(mesh);
                    }
                    break;
                default:
                    console.warn("tried to add sport specific asset with invalid shape");
                    break;


            }
            if (asset.physics) sportSpecificAssets.physics.push(body);
            else sportSpecificAssets.nonPhysics.push(body);
        }
    }

    #addActor(actor, name, isVisPannel = false) {
        this.actorByName.set(name, actor);
        this.actors.push(actor);
        actor.name = name;
        this.interactionsFromActor.set(actor, new Map());
        if (isVisPannel) {
            this.visPannels.push(actor);
        }
    }

    update(t, dt) {
        // this.projections.forEach(projection => projection.update(t, dt));
        this.surfaceEffectsFromActor.forEach((surfaceEffects, actor) => {
            // if (surfaceEffects.surface.material.userData.shader && surfaceEffects.surface.name == "vis-wall1") console.log("surface effects on : " + surfaceEffects.surface.material.userData.shader.fragmentShader);
            surfaceEffects.update(t, dt);
        })
        if (this.selector) this.selector.updateSelectionPannel();

        this.trackingDataFromActor.forEach((tracking_data, actorName) => {
            const tracking_data_index = Math.min(tracking_data.length, Math.round(tracking_data.length * (this.video_src.currentTime % this.videoDuration) / this.videoDuration));
            const traj = tracking_data[tracking_data_index % 290];
            // console.log("z : " + traj["z\r"]);
            const z = parseFloat(traj["z"]);

            if (this.actorByName.has(actorName)) this.actorByName.get(actorName).position.set(traj["x"], z, traj["y"]);
        });
    }

    configureSelector() {
        configureSelector({
            selectorName: "Sport",
            variableParent: config.params,
            variableName: "sport",
            variableEnum: SportName,
            selectorType: SelectorTypes.SELECT,
            callback: async (value) => {
                // this.sport = new Sport(sportTrees[value], config.renderer, config.scene, this.video);
                // await this.sport.init(physics);
                sport.set(sportTrees[value]);
            }
        });
    }
}

export const sport = new Sport();
sport.configureSelector();