import { Vector3 } from "three";
import { trackingCameras } from "./cameras";
import { config } from "./config";
import { BounceModes, ReferentsCharacteristics, SportActorInterationTypes } from "./constants";
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
        sport.display(half, sport.isDisplayed(half));
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
        poses[1].set(0., 0., -0.5)

    });
}