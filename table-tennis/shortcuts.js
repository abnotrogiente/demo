import { Vector3 } from "three";
import { trackingCameras } from "./cameras";
import { config } from "./config";
import { BounceModes, MetaDataModes, ReferentsCharacteristics, SportActorInterationTypes } from "./constants";
import { addKeyPressCallback } from "./key-config";
import { sport } from "./sport";

export function setShortcuts() {

    //SHOW TRACKING CAMERAS
    addKeyPressCallback("c", () => {
        trackingCameras.show(!trackingCameras.shown)
    });

    //TABLE SHOW PROXY
    addKeyPressCallback("p", () => {
        const tableProxy = config.scene.getObjectByName("Proxy Plane");
        sport.display(tableProxy, !sport.isDisplayed(tableProxy));
        sport.setCharacteristic(tableProxy, ReferentsCharacteristics.ALWAYS_VISIBLE, true);
        sport.setCharacteristic(tableProxy, ReferentsCharacteristics.SCREEN_SPACE, true);
    });

    //HUMAN SHOW PROXY
    addKeyPressCallback("h", () => {
        const humanProxy = config.scene.getObjectByName("Proxy player1skinned mesh");
        sport.display(humanProxy, !sport.isDisplayed(humanProxy));

        // sport.setCharacteristic(humanProxy, ReferentsCharacteristics.ALWAYS_VISIBLE, true);
        sport.setCharacteristic(humanProxy, ReferentsCharacteristics.SCREEN_SPACE, true);
        humanProxy.position.x *= -1;
        humanProxy.position.y *= -2;
        if (humanProxy.userData.setForDemo) return;
        humanProxy.scale.multiplyScalar(0.4);
        humanProxy.userData.setForDemo = true;
        // humanProxy.position.z = -10
    });

    //TABLE BOUNCE COLOR
    addKeyPressCallback("b", () => {
        const table = config.scene.getObjectByName("Plane");
        const ball = config.scene.getObjectByName("Ball");
        const bounceRelationship = sport.relationshipsFromActor.get(table).get(ball).get(SportActorInterationTypes.CONTACT);
        if (bounceRelationship.params.bounce.value == BounceModes.COLOR) {
            bounceRelationship.params.bounce.value = BounceModes.NONE;
        }
        else bounceRelationship.params.bounce.value = BounceModes.COLOR;
    });

    //TABLE BOUNCE RIPPLES
    addKeyPressCallback("B", () => {
        const table = config.scene.getObjectByName("Plane");
        const ball = config.scene.getObjectByName("Ball");
        const bounceRelationship = sport.relationshipsFromActor.get(table).get(ball).get(SportActorInterationTypes.CONTACT);
        if (bounceRelationship.params.bounce.value == BounceModes.RIPPLE) {
            bounceRelationship.params.bounce.value = BounceModes.NONE;
        }
        else bounceRelationship.params.bounce.value = BounceModes.RIPPLE;
    });

    //TABLE TRACE
    addKeyPressCallback("t", () => {
        const table = config.scene.getObjectByName("Plane");
        const ball = config.scene.getObjectByName("Ball");
        const projectionRelationship = sport.relationshipsFromActor.get(table).get(ball).get(SportActorInterationTypes.PROJECTION);
        projectionRelationship.params.trace.value = !projectionRelationship.params.trace.value;
    });

    //BALL TRACE
    addKeyPressCallback("T", () => {
        const volume = config.scene.getObjectByName("Volume Extrusion Plane");
        const ball = config.scene.getObjectByName("Ball");
        const projectionRelationship = sport.relationshipsFromActor.get(ball).get(volume).get(SportActorInterationTypes.PROJECTION);
        projectionRelationship.params.trace.value = !projectionRelationship.params.trace.value;
    });

    //TABLE ENCLOSING
    addKeyPressCallback("e", () => {
        const enclosing = config.scene.getObjectByName("Enclosing Back Face Cull Plane");
        const ball = config.scene.getObjectByName("Ball");
        sport.display(enclosing, !sport.isDisplayed(enclosing));
        const projectionRelationship = sport.relationshipsFromActor.get(enclosing).get(ball).get(SportActorInterationTypes.PROJECTION);
        projectionRelationship.params.instantaneous.value = true;
        projectionRelationship.params.trace.value = true;
    });

    //TABLE HALF CONTACT
    addKeyPressCallback("x", () => {
        const half = config.scene.getObjectByName("Half X Plane");
        const ball = config.scene.getObjectByName("Ball");
        sport.display(half, !sport.isDisplayed(half));
        const contactRelationship = sport.relationshipsFromActor.get(half).get(ball).get(SportActorInterationTypes.CONTACT);
        contactRelationship.params.bounce.value = BounceModes.COLOR;
    });


    //TABLE PROXY PROJECTION
    addKeyPressCallback("o", () => {
        const tableProxy = config.scene.getObjectByName("Proxy Plane");
        const ball = config.scene.getObjectByName("Ball");
        const projectionRelationship = sport.relationshipsFromActor.get(tableProxy).get(ball).get(SportActorInterationTypes.PROJECTION);
        projectionRelationship.params.trace.value = !projectionRelationship.params.trace.value;
    });

    //TABLE PROXY BOUNCE
    addKeyPressCallback("i", () => {
        const tableProxy = config.scene.getObjectByName("Proxy Plane");
        const ball = config.scene.getObjectByName("Ball");
        const bounceRelationship = sport.relationshipsFromActor.get(tableProxy).get(ball).get(SportActorInterationTypes.CONTACT);
        if (bounceRelationship.params.bounce.value == BounceModes.COLOR) {
            bounceRelationship.params.bounce.value = BounceModes.NONE
        }
        else bounceRelationship.params.bounce.value = BounceModes.COLOR;
    });

    //TABLE MARKER
    addKeyPressCallback("m", () => {
        const table = config.scene.getObjectByName("Plane");
        const effectShader = sport.surfaceEffectsFromActor.get(table).shader;
        const prevNumMarkers = effectShader.uniforms.numMarkers.value;
        effectShader.uniforms.numMarkers.value = prevNumMarkers == 0 ? 2 : 0;
        const poses = effectShader.uniforms.markerPoses.value;
        poses[0].set(0., 0., 0.5);
        poses[1].set(0., 0., -0.5);


        const XPannel = config.scene.getObjectByName("Half X Plane");
        const effectShader2 = sport.surfaceEffectsFromActor.get(XPannel).shader;
        const prevNumMarkers2 = effectShader2.uniforms.numMarkers.value;
        effectShader2.uniforms.numMarkers.value = prevNumMarkers == 0 ? 1 : 0;
        const poses2 = effectShader2.uniforms.markerPoses.value;
        poses2[0].set(0, 0.4, 0.);

    });

    //SCORE
    addKeyPressCallback("s", () => {
        const pannel = config.scene.getObjectByName("Half X Ball");
        const ball = config.scene.getObjectByName("Ball");

        const metadataRelationship = sport.relationshipsFromActor.get(ball).get(pannel).get(SportActorInterationTypes.METADATA);
        metadataRelationship.params.metaData.value = MetaDataModes.SCORE;
        sport.display(pannel, !sport.isDisplayed(pannel));
        sport.setCharacteristic(pannel, ReferentsCharacteristics.ALWAYS_VISIBLE, true);
        sport.setCharacteristic(pannel, ReferentsCharacteristics.SCREEN_SPACE, true);
        pannel.position.y *= -1.8;
        config.score = 0;

    });
}