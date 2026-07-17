import { BoxGeometry, DoubleSide, Mesh, MeshBasicMaterial, MeshPhongMaterial, MeshStandardMaterial, PlaneGeometry, Scene, SphereGeometry, Vector3 } from "three";
import { TableEffects } from "./tableEffects";
import { parseCsv } from "./utils";
import { Video } from "./video";
import { BounceModes, defaultContactCondition, dispose3, EnableModes, GlyphModes, MetaDataModes, SelectorTypes, SportActorInterationTypes, SportName, sportSpecificAssets, sportTrees } from "./constants";
import { Physics } from "./physics";
import { config, configureSelector } from "./config";
import { SurfaceEffects } from "./surfaceEffects";
import { ObjectSelector } from "./editor";
import { createEnglobingShape, createExtendedReferents } from "./extendedReferents";

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
    [SportActorInterationTypes.METADATA, {
        name: "Meta-data",
        params: {
            metaData: {
                enum: MetaDataModes,
                default: MetaDataModes.SPEED
            },
            glyph: {
                enum: GlyphModes,
                default: GlyphModes.TEXT
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

        console.log("actors list empited");

        this.video_src = config.videoObject.webcamVideo;
        this.videoDuration = config.videoObject.duration;

        /**@type {TableEffects[]} */
        this.projections = [];
        /**@type {Map<string, Mesh>} */
        this.actorByName = new Map();

        this.sportDescription = sportDescription;

        this.trackingDataFromActor = new Map();

        /**@type {Map<Mesh, Mesh[]>} */
        this.extensionsFromActor = new Map();

        /**@type {Map<Mesh, Map<string, SportActorInteraction[]>>} */
        this.interactionsFromActor = new Map();

        /**@type {Map<Mesh, SurfaceEffects>} */
        this.surfaceEffectsFromActor = new Map();

        /**@type {Mesh[]} */
        this.cameraFacingExtendedReferents = [];

        await this.setAssets(this.sportDescription.assets);


        const parseChildren = async (children) => {
            for (const [name, child] of Object.entries(children)) {
                if (child.mesh) {
                    const actor = config.scene.getObjectByName(child.mesh);
                    if (child.cloneMaterial) actor.material = actor.material.clone();
                    if (child.useBoundingBox) actor.userData.useBoundingBox = true;
                    this.#addActor(actor, child.keepName ? child.mesh : name, child.dimensions, child.surfaceForEffects);
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
            const actor1Name = interaction.actors[0];
            const actor2Name = interaction.actors[1];

            const actor1 = this.actorByName.get(actor1Name);
            const actor2 = this.actorByName.get(actor2Name);

            if (interaction.extensions) {
                // const actorName = interaction.actor;
                // const actor = this.actorByName.get(actorName);
                const extensions = this.extensionsFromActor.get(actor1);
                if (extensions) extensions.forEach(extension => {
                    if (this.isProxyExtension(extension)) interaction.params.contactCondition = this.surfaceEffectsFromActor.get(this.getActorFromProxyExtension(extension)).contactCondition;
                    this.#addInteractions(interaction.types, interaction.params, extension, extension.name, actor2, actor2Name);
                });

                // this.visPannels.forEach(visPannel => {
                //     this.#addInteractions(interaction.types, visPannel, visPannel.name, actor, actorName);
                // });
            }

            else {

                this.#addInteractions(interaction.types, interaction.params, actor1, actor1Name, actor2, actor2Name);
            }

        });
        this.selector = new ObjectSelector();
        this.selector.updateObjectShaders();

    }


    #addInteractions(interactionTypes, interactionParams, actor1, actor1Name, actor2, actor2Name) {
        const contactCondition = (interactionParams && interactionParams.contactCondition) ? interactionParams.contactCondition : defaultContactCondition;
        interactionTypes.forEach(interactionType => {
            if (actor1 && actor2) {
                if (!this.surfaceEffectsFromActor.has(actor1)) this.surfaceEffectsFromActor.set(actor1, new SurfaceEffects(actor1, contactCondition));
                const interaction = new SportActorInteraction(interactionType, actor1, actor2, this.surfaceEffectsFromActor.get(actor1));
                if (!this.interactionsFromActor.get(actor1).has(actor2Name)) this.interactionsFromActor.get(actor1).set(actor2Name, []);
                if (!this.interactionsFromActor.get(actor2).has(actor1Name)) this.interactionsFromActor.get(actor2).set(actor1Name, []);
                this.interactionsFromActor.get(actor1).get(actor2Name).push(interaction);
                this.interactionsFromActor.get(actor2).get(actor1Name).push(interaction);
                // console.log("ADDING INTERACTION : " + this.interactionsFromActor.get(actor1);
                this.surfaceEffectsFromActor.get(actor1).setOtherActor(actor2);
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
        sportSpecificAssets.nonPhysics.forEach(asset => {
            config.scene.remove(asset);
            dispose3(asset);
        });
        sportSpecificAssets.physics.forEach(asset => config.physics.deleteBody(asset));
        sportSpecificAssets.physics.splice(0, sportSpecificAssets.physics.length);

        if (!assets) return;
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
                        const geometry = new SphereGeometry(asset.dimensions.radius);
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
            else sportSpecificAssets.nonPhysics.push(mesh);
        }
    }

    /**
     * 
     * @param {Mesh} actor 
     * @param {*} name 
     * @param {*} dimensions 
     */
    #addActor(actor, name, dimensions = undefined, surfaceForEffects = false) {
        this.actorByName.set(name, actor);
        this.actors.push(actor);
        actor.name = name;
        this.display(actor, true);
        this.interactionsFromActor.set(actor, new Map());
        // return;
        if (dimensions) {


            if (surfaceForEffects) this.#addSurfaceForEffects(actor, dimensions);


            const extensions = createExtendedReferents(actor, dimensions);
            this.extensionsFromActor.set(actor, extensions);
            extensions.forEach(extension => {
                const p = new Vector3();
                actor.getWorldPosition(p);
                extension.position.add(p);
                actor.attach(extension);
                this.#addActor(extension, extension.name);
                this.display(extension, false);
                sportSpecificAssets.nonPhysics.push(extension);

                if (extension.name === "Label Plane") {
                    this.cameraFacingExtendedReferents.push(extension);
                    this.#addInteractions([SportActorInterationTypes.METADATA], null, extension, extension.name, actor, actor.name);
                }
                else if (extension.name === "Proxy") {
                    extension.userData.actorFromProxyExtension = actor;
                    if (surfaceForEffects) this.#addSurfaceForEffects(extension, dimensions);
                    actor.userData.proxy = extension;
                }
            });

        }

    }

    isProxyExtension(actor) {
        return actor.userData.actorFromProxyExtension !== undefined;
    }

    /**
     * 
     * @param {*} proxy 
     * @returns {Mesh}
     */
    getActorFromProxyExtension(proxy) {
        return proxy.userData.actorFromProxyExtension;
    }

    /**
     * 
     * @param {Mesh} actor 
     * @param {*} dimensions 
     */
    #addSurfaceForEffects(actor, dimensions) {
        const proxyForSurfaceEffects = new Mesh(createEnglobingShape(dimensions, 0.01), new MeshPhongMaterial());
        this.display(proxyForSurfaceEffects, this.isDisplayed(actor));
        actor.getWorldPosition(proxyForSurfaceEffects.position);
        if (dimensions.modelOffset) proxyForSurfaceEffects.position.sub(dimensions.modelOffset);
        console.log("proxy surface y : " + proxyForSurfaceEffects.position.y);
        proxyForSurfaceEffects.raycast = () => { };
        proxyForSurfaceEffects.material.opacity = 0.4;
        proxyForSurfaceEffects.material.transparent = true;
        actor.attach(proxyForSurfaceEffects);
        sportSpecificAssets.nonPhysics.push(proxyForSurfaceEffects);
        actor.userData.proxyForSurfaceEffects = proxyForSurfaceEffects;

        if (this.isProxyExtension(actor)) proxyForSurfaceEffects.userData.actorFromProxyExtension = this.getSurfaceForEffects(this.getActorFromProxyExtension(actor));
    }

    /**
     * 
     * @param {Mesh} actor 
     * @returns {Mesh}
     */
    getSurfaceForEffects(actor) {
        return actor.userData.proxyForSurfaceEffects ? actor.userData.proxyForSurfaceEffects : actor;
    }

    isDisplayed(actor) {
        return actor.userData.display;
    }
    /**
     * 
     * @param {Mesh} actor 
     * @param {*} val 
     */
    display(actor, val) {
        actor.userData.display = val;
        actor.layers.set(val ? 0 : 1);

        if (actor.userData.proxyForSurfaceEffects) this.display(actor.userData.proxyForSurfaceEffects, val);
    }

    update(t, dt) {
        // this.projections.forEach(projection => projection.update(t, dt));
        this.surfaceEffectsFromActor.forEach((surfaceEffects, actor) => {
            // if (surfaceEffects.surface.material.userData.shader && surfaceEffects.surface.name == "vis-wall1") console.log("surface effects on : " + surfaceEffects.surface.material.userData.shader.fragmentShader);
            surfaceEffects.update(t, dt);
        });
        this.actors.forEach(actor => {
            if (actor.userData.shader && actor.userData.shader.uniforms.uTime) actor.userData.shader.uniforms.uTime.value = t;
        });
        this.cameraFacingExtendedReferents.forEach(extension => {
            extension.lookAt(config.camera.position);
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
                await sport.set(sportTrees[value]);
            }
        });
    }
}

export const sport = new Sport();
sport.configureSelector();