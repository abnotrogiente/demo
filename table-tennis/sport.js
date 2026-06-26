import { Mesh, MeshStandardMaterial, Scene, SphereGeometry, Vector3 } from "three";
import { TableEffects } from "./tableEffects";
import { parseCsv } from "./utils";
import { Video } from "./video";
import { sportSpecificAssets } from "./constants";
import { Physics } from "./physics";

class SportActor {
    constructor() {

    }
}

export class Sport {
    /**
     * 
     * @param {*} sportDescription 
     * @param {WebGLRenderer} renderer 
     * @param {Scene} scene 
     * @param {Video} videoObj 
     */
    constructor(sportDescription, renderer, scene, videoObj) {
        /**@type {TableEffects[]} */
        this.projections = [];
        /**@type {Map<string, Mesh>} */
        this.actorByName = new Map();

        this.scene = scene;
        this.renderer = renderer;

        this.videoObject = videoObj;
        this.video_src = videoObj.webcamVideo;
        this.videoDuration = videoObj.duration;

        this.trackingDataFromActor = new Map();

        this.sportDescription = sportDescription;
    }

    /**
     * 
     * @param {Physics} physics 
     */
    async init(physics) {
        this.setAssets(this.sportDescription.assets, physics);

        Object.entries(this.sportDescription.children).forEach(async ([name, child]) => {
            if (child.mesh) {
                const actor = this.scene.getObjectByName(child.mesh);
                this.actorByName.set(name, actor);
                this.actors.push(actor);
                actor.userData.name = name;
            }
            if (child.tracked) {
                const trackingData = await parseCsv(child.tracking_file);
                this.trackingDataFromActor.set(name, trackingData);
            }
        })

        this.sportDescription.interactions.forEach(interaction => {

            const actor1Name = interaction.actors[0];
            const actor2Name = interaction.actors[1];

            const actor1 = this.actorByName.get(actor1Name);
            const actor2 = this.actorByName.get(actor2Name);

            interaction.types.forEach(interactionType => {
                if (interactionType === "Projection") {
                    const effects = new TableEffects(actor1, actor2, this.renderer);
                    this.projections.push(effects);
                }
            });
        });

    }

    /**
     * 
     * @param {*} assets 
     * @param {Physics} physics 
     */
    async setAssets(assets, physics) {
        sportSpecificAssets.physics.forEach(asset => physics.deleteBody(asset));
        sportSpecificAssets.physics.splice(0, sportSpecificAssets.physics.length);
        assets.forEach(async asset => {
            let body;
            switch (asset.collideShape) {
                case "box":
                    body = await physics.createBox({
                        position: asset.position,
                        // rotation: new Quaternion(0., 0., .02, 1.),
                        dimensions: new Vector3(asset.dimensions.width, asset.dimensions.height, asset.dimensions.depth),
                        restitution: asset.physicsConstants.restitution, // allows bounce
                        friction: asset.physicsConstants.friction,     // higher friction (grip)
                        model: asset.model,
                        modelOffset: asset.modelOffset
                    });
                    break;
                case "sphere":
                    if (asset.physics) {
                        body = await physics.createSphere({
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
                        this.scene.add(body);
                    }
                    break;
                default:
                    console.warn("tried to add sport specific asset with invalid shape");
                    break;

            }
            console.log("ssa before: " + JSON.stringify(sportSpecificAssets));
            if (asset.physics) sportSpecificAssets.physics.push(body);
            else sportSpecificAssets.nonPhysics.push(body);
            console.log("ssa after: " + JSON.stringify(sportSpecificAssets));
        });
    }

    update(t, dt) {
        this.projections.forEach(projection => projection.update(t, dt));

        Object.entries(this.trackingDataFromActor).forEach(([actor, tracking_data]) => {
            const tracking_data_index = Math.min(tracking_data.length, Math.round(tracking_data.length * (this.video_src.currentTime % this.videoDuration) / this.videoDuration));
            const traj = tracking_data[tracking_data_index % 290];
            // console.log("z : " + traj["z\r"]);
            const z = parseFloat(traj["z"]);
            actor.position.set(traj["x"], z, traj["y"]);
        });
    }
}