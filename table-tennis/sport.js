import { BackSide, BoxGeometry, DoubleSide, FrontSide, Matrix4, Mesh, MeshBasicMaterial, MeshPhongMaterial, MeshStandardMaterial, PlaneGeometry, Quaternion, Scene, SphereGeometry, Vector3 } from "three";
import { TableEffects } from "./tableEffects";
import { parseCsv } from "./utils";
import { Video } from "./video";
import { BounceModes, SelectorTypes, defaultContactCondition, dispose3, EnableModes, GlyphModes, MetaDataModes, ReferentsCharacteristics, SideMode, SportActorInterationTypes, SportName, sportSpecificAssets, sportTrees, webSocketClient } from "./constants";
import { Physics } from "./physics";
import { config, configureSelector } from "./config";
import { SurfaceEffects } from "./surfaceEffects";
import { ObjectSelector } from "./editor";
import { createEnglobingShape, createExtendedReferents } from "./extendedReferents";
import { loadAsset } from "./asset-loader";
import { VolumeEffects } from "./volumeEffects";


const Z = new Vector3(0, 0, 1);

class SportActor {
    constructor() {

    }
}

const dataFromCharacteristic = new Map([
    [ReferentsCharacteristics.ALWAYS_VISIBLE, {
        name: "Always Visible",
        params: {
            alwaysVisible: {
                enum: EnableModes,
                default: EnableModes.DISABLED
            }
        },
        defaultParam: "alwaysVisible"
    }],
    [ReferentsCharacteristics.CAMERA_FACING, {
        name: "Camera Facing",
        params: {
            cameraFacing: {
                enum: EnableModes,
                default: EnableModes.DISABLED
            }
        },
        defaultParam: "cameraFacing"
    }],
    [ReferentsCharacteristics.SCREEN_SPACE, {
        name: "Screen Space",
        params: {
            screenSpace: {
                enum: EnableModes,
                default: EnableModes.DISABLED
            }
        },
        defaultParam: "screenSpace"
    }],
    [ReferentsCharacteristics.FACE_CULLING, {
        name: "Face Culling",
        params: {
            faceCulling: {
                enum: SideMode,
                default: SideMode.FRONT
            }
        },
        defaultParam: "faceCulling"
    }],
])


const dataFromRelationship = new Map([
    [SportActorInterationTypes.CONTACT, {
        name: "Contact",
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
                default: MetaDataModes.NONE
            },
            glyph: {
                enum: GlyphModes,
                default: GlyphModes.TEXT
            }
        }
    }],
]);




export class SportActorCharacteristic {

    /**
     * 
     * @param {*} type 
     * @param {Mesh} actor 
     */
    constructor(type) {
        const characteristicData = dataFromCharacteristic.get(type);
        this.name = characteristicData.name;
        this.defaultParam = characteristicData.defaultParam;
        this.params = {};
        Object.entries(characteristicData.params).forEach(([paramName, param]) => {
            this.params[paramName] = {
                value: param.default,
                default: param.default,
                enum: param.enum
            }
        });

        this.type = type;
    }
}



export class SportActorRelationship {
    /**
     * 
     * @param {*} type 
     * @param {*} actor1 
     * @param {*} actor2 
     * @param {SurfaceEffects | VolumeEffects} effects 
     */
    constructor(type, actor1, actor2, effects, contactCondition) {
        this.actor1 = actor1;
        this.actor2 = actor2;

        this.contactCondition = contactCondition;

        const relationshipData = dataFromRelationship.get(type);
        this.name = relationshipData.name;
        this.params = {};
        Object.entries(relationshipData.params).forEach(([paramName, param]) => {
            this.params[paramName] = {
                value: param.default,
                default: param.default,
                enum: param.enum
            }
        });
        // this.enum = relationshipData.get(type).enum;
        // this.value = relationshipData.get(type).default;
        // this.name = relationshipData.get(type).name;
        this.type = type;

        if (effects) effects.addRelationship(this);
    }
}

class Sport {

    constructor() {

        this.directReferentSelection = true;
        configureSelector({
            selectorName: "Direct Referent Selection",
            variableParent: this,
            variableName: "directReferentSelection",
            selectorType: SelectorTypes.CHECKBOX
        });


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

        this.cleanMess();

        /**@type {Map<Mesh, Map<int, SportActorRelationship>} */
        this.visPreferences = new Map();

        /**@type {Mesh[]} */
        this.actors = [];

        /**@type {Mesh[]} */
        this.actorsNoBoundingBox = [];

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

        /**@type {Map<Mesh, Map<Mesh, Map<int,SportActorRelationship>>>} */
        this.relationshipsFromActor = new Map();

        /**@type {Map<Mesh, Map<int,SportActorCharacteristic>>} */
        this.characteristicsFromActor = new Map();

        /**@type {Map<Mesh, SurfaceEffects>} */
        this.surfaceEffectsFromActor = new Map();

        /**@type {Map<Mesh, VolumeEffects>} */
        this.volumeEffectsFromActor = new Map();

        /**@type {Mesh[]} */
        this.cameraFacingExtendedReferents = [];

        await this.setAssets(this.sportDescription.assets);


        const parseChildren = async (children) => {
            for (const [name, child] of Object.entries(children)) {
                if (child.mesh) {
                    const actor = config.scene.getObjectByName(child.mesh);
                    if (child.cloneMaterial) actor.material = actor.material.clone();
                    if (child.useBoundingBox) actor.userData.useBoundingBox = true;
                    this.#addActor(actor, child.keepName ? child.mesh : name, child, child.surfaceForEffects);
                }
                if (child.tracked) {
                    const trackingData = await parseCsv(child.tracking_file);
                    this.trackingDataFromActor.set(name, trackingData);
                }
                if (child.children) await parseChildren(child.children);
            }
        }

        await parseChildren(sportDescription.children);

        this.sportDescription.relationships.forEach(relationship => {
            const actor1Name = relationship.actors[0];
            const actor2Name = relationship.actors[1];

            const actor1 = this.actorByName.get(actor1Name);
            const actor2 = this.actorByName.get(actor2Name);

            if (relationship.extensions) {
                // const actorName = relationship.actor;
                // const actor = this.actorByName.get(actorName);
                const extensions = this.extensionsFromActor.get(actor1);
                if (extensions) extensions.forEach(extension => {
                    if (this.isProxyExtension(extension)) relationship.params.contactCondition = this.surfaceEffectsFromActor.get(this.getActorFromProxyExtension(extension)).contactCondition;
                    this.#addRelationship(relationship.types, relationship.params, extension, extension.name, actor2, actor2Name);
                });

                // this.visPannels.forEach(visPannel => {
                //     this.#addRelationship(relationship.types, visPannel, visPannel.name, actor, actorName);
                // });
            }

            else {

                this.#addRelationship(relationship.types, relationship.params, actor1, actor1Name, actor2, actor2Name);
            }

        });

        this.selector = new ObjectSelector();
        this.selector.updateObjectShaders();

    }


    #addRelationship(relationshipTypes, relationshipParams, actor1, actor1Name, actor2, actor2Name) {
        // console.log("adding interacions : " + JSON.stringify(relationshipTypes));
        // console.log("for actors : " + actor1Name + " and " + actor2Name + "\n\n");
        const contactCondition = (relationshipParams && relationshipParams.contactCondition) ? relationshipParams.contactCondition : defaultContactCondition;
        relationshipTypes.forEach(relationshipType => {
            if (actor1 && actor2) {
                /**@type {SportActorRelationship} */
                let relationship = null;
                if (actor1.name.startsWith("Volume Extrusion")) {
                    if (!this.volumeEffectsFromActor.has(actor1)) this.volumeEffectsFromActor.set(actor1, new VolumeEffects(actor1));
                    relationship = new SportActorRelationship(relationshipType, actor1, actor2, this.volumeEffectsFromActor.get(actor1));
                    this.volumeEffectsFromActor.get(actor1).setOtherActor(actor2);
                }
                // console.log("")
                else {
                    if (!this.surfaceEffectsFromActor.has(actor1)) this.surfaceEffectsFromActor.set(actor1, new SurfaceEffects(actor1));
                    relationship = new SportActorRelationship(relationshipType, actor1, actor2, this.surfaceEffectsFromActor.get(actor1), contactCondition);
                    this.surfaceEffectsFromActor.get(actor1).setOtherActor(actor2);
                }
                if (!this.relationshipsFromActor.get(actor1).has(actor2)) this.relationshipsFromActor.get(actor1).set(actor2, new Map());
                if (!this.relationshipsFromActor.get(actor2).has(actor1)) this.relationshipsFromActor.get(actor2).set(actor1, new Map());
                this.relationshipsFromActor.get(actor1).get(actor2).set(relationshipType, relationship);
                this.relationshipsFromActor.get(actor2).get(actor1).set(relationshipType, relationship);

                if (!this.isExtension(actor1) && !this.visPreferences.get(actor1).has(relationshipType)) {
                    this.visPreferences.get(actor1).set(relationshipType, new SportActorRelationship(relationshipType, actor1, null, null));
                }
                if (!this.isExtension(actor2) && !this.visPreferences.get(actor2).has(relationshipType)) {
                    this.visPreferences.get(actor2).set(relationshipType, new SportActorRelationship(relationshipType, null, actor2, null));
                }
            }
            // if (relationshipType === SportActorInterationTypes.PROJECTION) {
            //     const effects = new TableEffects(actor1, actor2, config.renderer);
            //     this.projections.push(effects);
            // }
        });
    }

    /**
     * 
     * @param {Mesh} actor 
     */
    #initCharacteristics(actor) {
        Object.entries(ReferentsCharacteristics).forEach(([charName, charValue]) => {
            this.#addCharacteristic(charValue, actor);
        });
        const side = actor.material ?
            actor.material.side :
            FrontSide;
        this.setCharacteristic(actor, ReferentsCharacteristics.FACE_CULLING, side);
    }

    #addCharacteristic(type, actor) {
        if (!this.characteristicsFromActor.has(actor)) this.characteristicsFromActor.set(actor, new Map());
        this.characteristicsFromActor.get(actor).set(type, new SportActorCharacteristic(type));
    }


    cleanMess() {
        sportSpecificAssets.nonPhysics.forEach(asset => {
            if (this.hasCharacteristic(asset, ReferentsCharacteristics.SCREEN_SPACE)) {
                this.setCharacteristic(asset, ReferentsCharacteristics.SCREEN_SPACE, false);
            }
            config.scene.remove(asset);
            dispose3(asset);
        });
        sportSpecificAssets.nonPhysics.splice(0, sportSpecificAssets.nonPhysics.length);
        sportSpecificAssets.physics.forEach(asset => config.physics.deleteBody(asset));
        sportSpecificAssets.physics.splice(0, sportSpecificAssets.physics.length);
    }

    /**
     * 
     * @param {*} assets 
     */
    async setAssets(assets) {
        if (!assets) return;
        for (const asset of assets) {
            let body;
            let mesh;
            switch (asset.collideShape) {
                case "box":
                    if (asset.physics) {
                        body = await config.physics.createBox({
                            position: asset.position,
                            rotation: asset.rotation,
                            // rotation: new Quaternion(0., 0., .02, 1.),
                            dimensions: new Vector3(asset.dimensions.width, asset.dimensions.height, asset.dimensions.depth),
                            restitution: asset.physicsConstants.restitution, // allows bounce
                            friction: asset.physicsConstants.friction,     // higher friction (grip)
                            model: asset.model,
                            modelOffset: asset.modelOffset
                        });
                        mesh = config.physics.bodyToMesh.get(body);
                    }
                    else if (asset.model) {
                        mesh = await loadAsset({
                            position: asset.position,
                            rotation: asset.rotation,
                            dimesions: asset.dimensions,
                            model: asset.model,
                            modelOffset: asset.modelOffset
                        })
                        config.scene.add(mesh);

                        // mesh.traverse(child => {
                        //     if (child.isMesh) {
                        //         child.material.transparent = true;
                        //         child.material.opacity = 0.;
                        //     }
                        // })
                    }
                    else {
                        const material = new MeshPhongMaterial();
                        const geometry = new BoxGeometry(asset.dimensions.width, asset.dimensions.height, asset.dimensions.depth);
                        mesh = new Mesh(geometry, material);
                        mesh.position.copy(asset.position);
                        if (asset.rotation) mesh.applyQuaternion(asset.rotation);
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
    #addActor(actor, name, params = undefined, surfaceForEffects = false) {
        if (params?.hitbox) actor.userData.hitbox = params.hitbox;
        actor.userData.tracked = params?.tracked;
        this.#initCharacteristics(actor);
        actor.userData.label = params?.label;
        const dimensionsForExtensions = params?.dimensionsForExtensions ?? params?.dimensions;
        const dimensions = params?.dimensions;
        this.actorByName.set(name, actor);
        if (dimensions) actor.userData.dimensions = dimensions;
        this.actors.push(actor);
        if (!actor.userData.useBoundingBox) this.actorsNoBoundingBox.push(actor);
        actor.name = name;
        if (actor.name === "Ball") config.cvHelper.ball = actor;
        if (!(params && params.keepMaterial) && actor.material) actor.material = actor.material.clone();
        this.display(actor, true);
        this.relationshipsFromActor.set(actor, new Map());
        if (!this.isExtension(actor)) {
            this.visPreferences.set(actor, new Map());

        }
        // return;
        if (dimensions) {


            if (surfaceForEffects) this.#addSurfaceForEffects(actor, dimensions);


            const extensions = createExtendedReferents(actor, dimensionsForExtensions, dimensions);
            this.extensionsFromActor.set(actor, extensions);
            extensions.forEach(extension => {
                extension.userData.isExtension = true;
                const p = new Vector3();
                actor.getWorldPosition(p);
                extension.position.add(p);
                actor.attach(extension);
                this.#addActor(extension, extension.name);
                this.display(extension, false);
                sportSpecificAssets.nonPhysics.push(extension);

                if (extension.name.startsWith("Half X")) {
                    // this.cameraFacingExtendedReferents.push(extension);
                    // this.setCharacteristic(extension, ReferentsCharacteristics.CAMERA_FACING, true);

                    this.#addRelationship([SportActorInterationTypes.METADATA], null, extension, extension.name, actor, actor.name);
                }
                else if (extension.name.startsWith("Proxy")) {
                    if (dimensionsForExtensions.lookDirection) {
                        extension.userData.lookDirection = dimensionsForExtensions.lookDirection;
                    }
                    extension.userData.actorFromProxyExtension = actor;
                    if (surfaceForEffects) this.#addSurfaceForEffects(extension, dimensions);
                    actor.userData.proxy = extension;
                    // this.setCharacteristic(extension, ReferentsCharacteristics.SCREEN_SPACE, true);
                    // this.setCharacteristic(extension, ReferentsCharacteristics.CAMERA_FACING, true);
                    // this.setCharacteristic(extension, ReferentsCharacteristics.ALWAYS_VISIBLE, true);
                }
            });

        }

    }

    /**
     * 
     * @param {Mesh} actor 
     * @param {*} characteristic 
     * @param {*} value 
     */
    setCharacteristic(actor, characteristicType, value, param = null) {
        const characteristic = this.characteristicsFromActor.get(actor).get(characteristicType);
        if (param === null) {
            param = characteristic.defaultParam;
        }
        characteristic.params[param].value = value;
        switch (characteristicType) {
            case ReferentsCharacteristics.ALWAYS_VISIBLE:
                if (value) {
                    actor.material.depthTest = false;
                    actor.userData.originalRenderOrder = actor.renderOrder;
                    if (!this.renderOrderCounter) this.renderOrderCounter = 999;
                    actor.renderOrder = this.renderOrderCounter;
                    this.renderOrderCounter++;
                    actor.userData.originalTransparence = actor.material.transparent;
                    actor.material.transparent = true;
                }
                else {
                    actor.material.depthTest = true;
                    actor.renderOrder = actor.userData.originalRenderOrder;
                    actor.material.transparent = actor.userData.originalTransparence;
                }
                const surfaceForEffects = this.getSurfaceForEffects(actor);
                if (actor != surfaceForEffects) this.setCharacteristic(surfaceForEffects, characteristicType, value);

                break;
            case ReferentsCharacteristics.SCREEN_SPACE:
                this.#setScreenSpace(actor, value);
                break;
            case ReferentsCharacteristics.FACE_CULLING:
                if (actor.material) actor.material.side = value;
                // actor.material.side = value ? BackSide : actor.userData.referenceSide;
                break;
            default:
                break;
        }
    }

    /**
     * 
     * @param {Mesh} actor 
     * @param {*} value 
     */
    #setScreenSpace(actor, value) {
        let dimensions = actor.userData.dimensions;
        if (!dimensions) {
            console.warn("setting a referent to screen space but no dimensions was provided for this referent : " + actor.name);
            dimensions = { radius: 1 };
            // return;
        }
        if (value) {

            // actor.parent.remove(actor);
            const length = Math.max(dimensions.radius ?? 0, dimensions.width ?? 0, dimensions.depth ?? 0, dimensions.height ?? 0);
            actor.userData.positionBeforeScreenSpace = actor.position.clone();
            actor.userData.rotationBeforeScreenSpace = actor.rotation.clone();
            actor.userData.parentBeforeScreenSpace = actor.parent;
            config.camera.add(actor);

            actor.position.set(1., 0.4, -1);
            actor.position.multiplyScalar(length * 1.5);
            console.log("length : " + length);
            const p = new Vector3();
            actor.getWorldPosition(p);
            console.log("world position : " + JSON.stringify(p));
            actor.getWorldScale(p)
            console.log("world scale : " + JSON.stringify(p));


        }
        else {
            config.camera.remove(actor);
            actor.userData.parentBeforeScreenSpace.add(actor);
            actor.position.copy(actor.userData.positionBeforeScreenSpace);
            actor.rotation.copy(actor.userData.rotationBeforeScreenSpace);
        }
    }

    hasCharacteristic(actor, characteristicType, value = true, param = null) {
        if (!this.characteristicsFromActor.has(actor)) return;
        const characteristic = this.characteristicsFromActor.get(actor).get(characteristicType);
        if (param === null) {
            param = characteristic.defaultParam;
        }
        return characteristic.params[param].value == value;
    }

    isProxyExtension(actor) {
        return actor.userData.actorFromProxyExtension !== undefined;
    }

    isExtension(actor) {
        return actor.userData.isExtension;
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
        // return;
        const proxyForSurfaceEffects = new Mesh(createEnglobingShape(dimensions, 0.01), new MeshPhongMaterial());
        this.display(proxyForSurfaceEffects, this.isDisplayed(actor));
        actor.getWorldPosition(proxyForSurfaceEffects.position);
        if (dimensions.modelOffset) proxyForSurfaceEffects.position.sub(dimensions.modelOffset);
        proxyForSurfaceEffects.raycast = () => { };
        proxyForSurfaceEffects.material.opacity = 0.4;
        proxyForSurfaceEffects.material.transparent = true;
        actor.attach(proxyForSurfaceEffects);
        sportSpecificAssets.nonPhysics.push(proxyForSurfaceEffects);
        actor.userData.proxyForSurfaceEffects = proxyForSurfaceEffects;
        this.#initCharacteristics(proxyForSurfaceEffects);
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
        this.volumeEffectsFromActor.forEach((volumeEffects, actor) => {
            volumeEffects.update(dt);
        })
        this.actors.forEach(actor => {
            if (actor.userData.shader && actor.userData.shader.uniforms.uTime) actor.userData.shader.uniforms.uTime.value = t;
        });
        // this.cameraFacingExtendedReferents.forEach(extension => {
        //     extension.lookAt(config.camera.position);
        // })
        this.#updateFromCharacteristics();
        if (this.selector) this.selector.updateSelectionPannel();

        this.trackingDataFromActor.forEach((tracking_data, actorName) => {
            if (!this.actorByName.has(actorName)) return;
            const actor = this.actorByName.get(actorName);
            if (actor.userData.trackingMode === "websocket") {
                if (webSocketClient.lastMessage && webSocketClient.lastMessage.position) {
                    const position = webSocketClient.lastMessage.position;
                    actor.position.set(position.x, position.z + 0.065, position.y);
                }
                return;
            }
            const tracking_data_index = Math.min(tracking_data.length, Math.round(tracking_data.length * (this.video_src.currentTime % this.videoDuration) / this.videoDuration));
            const traj = tracking_data[tracking_data_index % 290];
            // console.log("z : " + traj["z\r"]);
            const z = parseFloat(traj["z"]);

            if (this.actorByName.has(actorName)) this.actorByName.get(actorName).position.set(traj["x"], z, traj["y"]);
        });

        const climber = config.scene.getObjectByName("Climber");
        if (climber) console.log("climber pos :  " + JSON.stringify(climber.position));
    }

    #updateFromCharacteristics() {
        this.actors.forEach(actor => {
            if (this.hasCharacteristic(actor, ReferentsCharacteristics.CAMERA_FACING)) {
                this.#updateCameraFacing(actor);
            }
        })
        // this.actorsByCaracteristics.get(ReferentsCharacteristics.CAMERA_FACING).forEach(actor => this.#updateCameraFacing(actor));
        // this.actorsByCaracteristics.get(ReferentsCharacteristics.SCREEN_SPACE).forEach(actor => {
        //     const p = new Vector3();
        //     actor.getWorldPosition(p);
        //     console.log("world position : " + JSON.stringify(p));
        //     actor.getWorldScale(p)
        //     console.log("world scale : " + JSON.stringify(p));
        // });
    }

    /**
 * @param {Mesh} mesh
 * @param {THREE.Vector3} localV1
 * @param {THREE.Vector3} worldV2
 */
    #rotateLocalToWorld(mesh, localV1, worldV2) {
        mesh.updateWorldMatrix(true, false);

        // Current world direction of localV1.
        const worldV1 = localV1.clone()
            .transformDirection(mesh.matrixWorld)
            .normalize();

        const target = worldV2.clone().normalize();

        // Rotation in WORLD space.
        const delta = new Quaternion()
            .setFromUnitVectors(worldV1, target);

        const deltaMatrix = new Matrix4()
            .makeRotationFromQuaternion(delta);

        // Apply rotation to the complete world transform.
        const newWorldMatrix = deltaMatrix
            .clone()
            .multiply(mesh.matrixWorld);

        // Convert world transform back to local space.
        if (mesh.parent) {
            const parentInverse = mesh.parent.matrixWorld
                .clone()
                .invert();

            mesh.matrix.copy(
                parentInverse.multiply(newWorldMatrix)
            );
        } else {
            mesh.matrix.copy(newWorldMatrix);
        }

        mesh.matrixAutoUpdate = false;
    }

    /**
     * 
     * @param {Mesh} actor 
     */
    #updateCameraFacing(actor) {
        if (actor.userData.lookDirection) {
            this.#rotateLocalToWorld(actor, actor.userData.lookDirection, config.camera.getWorldDirection(new Vector3()));
            // actor.quaternion.setFromUnitVectors(actor.userData.lookDirection, new Vector3(0, 0, 1));
        }
        else actor.lookAt(config.camera.position);
    }

    /**
     * 
     * @param {Mesh} actor 
     */
    #updateScreenSpace(actor) {

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