import { BoxGeometry, Mesh, MeshBasicMaterial, MeshPhongMaterial, MeshStandardMaterial, Scene, SphereGeometry, Vector3 } from "three";
import { TableEffects } from "./tableEffects";
import { parseCsv } from "./utils";
import { Video } from "./video";
import { BounceModes, EnableModes, Selector, SportActorInterationTypes, SportName, sportSpecificAssets, sportTrees } from "./constants";
import { Physics } from "./physics";
import { config, configureSelector } from "./config";
import { SurfaceEffects } from "./surfaceEffects";
import { ObjectSelector } from "./editor";

class SportActor {
    constructor() {

    }
}

const interactionNameFromType = new Map([
    [SportActorInterationTypes.BOUNCE, "Bounce"],
    [SportActorInterationTypes.PROJECTION, "Projection"],
    [SportActorInterationTypes.TECHNIQUE, "Technique"],
    [SportActorInterationTypes.STEP, "Step"],
]);

const interactionToEnum = new Map([
    [SportActorInterationTypes.BOUNCE, BounceModes],
    [SportActorInterationTypes.PROJECTION, EnableModes],
    [SportActorInterationTypes.TECHNIQUE, EnableModes],
    [SportActorInterationTypes.STEP, EnableModes],
]);

const interactionDefaultValues = new Map([
    [SportActorInterationTypes.BOUNCE, BounceModes.NONE],
    [SportActorInterationTypes.PROJECTION, EnableModes.DISABLED],
    [SportActorInterationTypes.TECHNIQUE, EnableModes.DISABLED],
    [SportActorInterationTypes.STEP, EnableModes.DISABLED],
]);

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
        this.enum = interactionToEnum.get(type);
        this.value = interactionDefaultValues.get(type);
        this.type = type;
        this.name = interactionNameFromType.get(type);

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
                    this.actorByName.set(name, actor);
                    if (child.cloneMaterial) actor.material = actor.material.clone();
                    this.actors.push(actor);
                    this.interactionsFromActor.set(actor, new Map());
                    actor.userData.name = name;
                    if (child.useBoundingBox) actor.userData.useBoundingBox = true;
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

            interaction.types.forEach(interactionType => {
                if (actor1 && actor2) {
                    if (!this.surfaceEffectsFromActor.has(actor1)) this.surfaceEffectsFromActor.set(actor1, new SurfaceEffects(actor1));
                    const interaction = new SportActorInteraction(interactionType, actor1, actor2, this.surfaceEffectsFromActor.get(actor1));
                    if (!this.interactionsFromActor.get(actor1).has(actor2Name)) this.interactionsFromActor.get(actor1).set(actor2Name, []);
                    if (!this.interactionsFromActor.get(actor2).has(actor1Name)) this.interactionsFromActor.get(actor2).set(actor1Name, []);
                    this.interactionsFromActor.get(actor1).get(actor2Name).push(interaction);
                    this.interactionsFromActor.get(actor2).get(actor1Name).push(interaction);
                    // console.log("ADDING INTERACTION : " + this.interactionsFromActor.get(actor1);
                    console.log("ADDING INTERACTION : " + this.surfaceEffectsFromActor.get(actor1));
                    this.surfaceEffectsFromActor.get(actor1).otherActor = actor2;
                }
                // if (interactionType === SportActorInterationTypes.PROJECTION) {
                //     const effects = new TableEffects(actor1, actor2, config.renderer);
                //     this.projections.push(effects);
                // }
            });

        });
        this.selector = new ObjectSelector();
        this.selector.updateObjectShaders();

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
                    }
                    else {
                        const material = new MeshPhongMaterial();
                        material.transparent = true;
                        material.opacity = .2;
                        const geometry = new BoxGeometry(asset.dimensions.width, asset.dimensions.height, asset.dimensions.depth);
                        body = new Mesh(geometry, material);
                        body.position.copy(asset.position);
                        body.name = asset.name;
                        config.scene.add(body);
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
                    }
                    else {
                        const material = new MeshStandardMaterial();
                        const geometry = new SphereGeometry(asset.radius);
                        body = new Mesh(geometry, material);
                        body.position.copy(asset.position);
                        body.name = asset.name;
                        config.scene.add(body);
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
            selectorType: Selector.SELECT,
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