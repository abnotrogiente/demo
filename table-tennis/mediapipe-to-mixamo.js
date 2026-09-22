import {
    Camera,
    Matrix4,
    Quaternion,
    Vector3
} from "three";
import { config } from "./config";


// ============================================================
// GROUND
// ============================================================
//
// Physical ground plane:
//
//     Y = -h
//
// Example:
//
//     h = 0.8
//
// gives:
//
//     GROUND_Y = -0.8
//
// ============================================================

const h = 0.8;

const GROUND_Y = -h;


// ============================================================
// IMAGE CONFIG
// ============================================================
//
// Set this to true only when the image sent to MediaPipe is
// horizontally mirrored.
//
// This must describe the actual image fed to MediaPipe,
// not merely how the video is displayed with CSS.
//
// ============================================================

const IMAGE_IS_MIRRORED = false;


// ============================================================
// MODEL FOOT CONTACT
// ============================================================
//
// The Mixamo foot bone is normally located around the ankle /
// foot joint and not exactly at the bottom of the shoe.
//
// This value raises the desired Mixamo foot position above
// the physical ground plane.
//
// Start with 0 and increase if necessary.
//
// Example:
//
//     0.08 = 8 cm above the ground
//
// ============================================================

const MODEL_FOOT_CONTACT_HEIGHT = 0.0;


// ============================================================
// ROOT / SMOOTHING CONFIG
// ============================================================

// Bone rotation smoothing.
const ROTATION_SMOOTHING_SPEED = 12.0;


// World-position smoothing.
const POSITION_SMOOTHING_SPEED = 8.0;


// Enable absolute world-position tracking.
const ENABLE_WORLD_POSITION = true;


// ============================================================
// CACHE
// ============================================================

const _poseCache =
    new WeakMap();

const _worldPositionCache =
    new WeakMap();


// ============================================================
// TEMP OBJECTS
// ============================================================

const _tmpV1 = new Vector3();
const _tmpV2 = new Vector3();
const _tmpV3 = new Vector3();
const _tmpV4 = new Vector3();

const _tmpV5 = new Vector3();
const _tmpV6 = new Vector3();
const _tmpV7 = new Vector3();

const _tmpV8 = new Vector3();
const _tmpV9 = new Vector3();

const _tmpV10 = new Vector3();
const _tmpV11 = new Vector3();

const _tmpV12 = new Vector3();
const _tmpV13 = new Vector3();

const _tmpQ1 = new Quaternion();
const _tmpQ2 = new Quaternion();
const _tmpQ3 = new Quaternion();
const _tmpQ4 = new Quaternion();

const _tmpM1 = new Matrix4();


// ============================================================
// MIXAMO BONES
// ============================================================

const MIXAMO = {

    hips: "mixamorigHips",

    spine: "mixamorigSpine",
    spine1: "mixamorigSpine1",
    spine2: "mixamorigSpine2",

    neck: "mixamorigNeck",
    head: "mixamorigHead",

    leftShoulder: "mixamorigLeftShoulder",
    leftArm: "mixamorigLeftArm",
    leftForeArm: "mixamorigLeftForeArm",
    leftHand: "mixamorigLeftHand",

    rightShoulder: "mixamorigRightShoulder",
    rightArm: "mixamorigRightArm",
    rightForeArm: "mixamorigRightForeArm",
    rightHand: "mixamorigRightHand",

    leftUpLeg: "mixamorigLeftUpLeg",
    leftLeg: "mixamorigLeftLeg",
    leftFoot: "mixamorigLeftFoot",

    rightUpLeg: "mixamorigRightUpLeg",
    rightLeg: "mixamorigRightLeg",
    rightFoot: "mixamorigRightFoot"
};


// ============================================================
// GET CAMERA
// ============================================================
//
// The Three.js camera is taken directly from:
//
//     config.video.camera
//
// The camera's:
//
//     position
//     rotation
//     projection
//     aspect
//     FOV
//
// are therefore the actual values used for the image -> world
// calculation.
//
// ============================================================

/**
 * 
 * @returns {Camera}
 */
function getCamera() {

    const camera =
        config?.videoObject?.camera;


    if (!camera) {

        throw new Error(
            "applyMediaPipePose(): config.video.camera is missing"
        );
    }


    return camera;
}


// ============================================================
// IMAGE -> WORLD RAY
// ============================================================
//
// MediaPipe image coordinates:
//
//     x = 0 ... 1
//     y = 0 ... 1
//
//     (0,0) = top-left
//     (1,1) = bottom-right
//
// THREE uses NDC:
//
//     x = -1 ... +1
//     y = -1 ... +1
//
// We convert the MediaPipe image coordinate to NDC and then
// use the ACTUAL THREE CAMERA:
//
//     camera.unproject()
//
// This means there are no manually duplicated FOV/aspect
// constants.
//
// ============================================================

/**
 * 
 * @param {*} imagePoint 
 * @param {Camera} camera 
 * @param {*} outOrigin 
 * @param {*} outDirection 
 * @returns 
 */
function imagePointToWorldRay(
    imagePoint,
    camera,
    outOrigin = new Vector3(),
    outDirection = new Vector3()
) {

    let imageX =
        imagePoint.x;

    const imageY =
        imagePoint.y;


    // --------------------------------------------------------
    // Handle mirrored input.
    // --------------------------------------------------------

    if (IMAGE_IS_MIRRORED) {

        imageX =
            1.0 - imageX;
    }


    // --------------------------------------------------------
    // MediaPipe normalized image -> THREE NDC.
    //
    // MediaPipe:
    //
    //     x = 0 left
    //     x = 1 right
    //
    //     y = 0 top
    //     y = 1 bottom
    //
    // THREE NDC:
    //
    //     x = -1 left
    //     x = +1 right
    //
    //     y = -1 bottom
    //     y = +1 top
    // --------------------------------------------------------

    const ndcX =
        imageX * 2.0 - 1.0;

    const ndcY =
        1.0 - imageY * 2.0;


    // --------------------------------------------------------
    // Make sure the camera world matrix is current.
    // --------------------------------------------------------

    camera.updateMatrixWorld(true);


    // --------------------------------------------------------
    // Make sure projectionMatrixInverse corresponds to
    // projectionMatrix.
    //
    // We do NOT call updateProjectionMatrix(), because
    // config.video.camera may be a generic THREE.Camera.
    // --------------------------------------------------------

    if (
        camera.projectionMatrix &&
        camera.projectionMatrixInverse
    ) {

        camera.projectionMatrixInverse
            .copy(
                camera.projectionMatrix
            )
            .invert();
    }


    // --------------------------------------------------------
    // Point on the camera's near NDC plane.
    // --------------------------------------------------------

    _tmpV12.set(
        ndcX,
        ndcY,
        -1
    );


    // --------------------------------------------------------
    // NDC -> WORLD.
    // --------------------------------------------------------

    const worldPoint =
        _tmpV12.unproject(
            camera
        );


    // --------------------------------------------------------
    // Actual camera WORLD position.
    // --------------------------------------------------------

    camera.getWorldPosition(
        outOrigin
    );


    // --------------------------------------------------------
    // WORLD ray direction.
    // --------------------------------------------------------

    outDirection
        .subVectors(
            worldPoint,
            outOrigin
        )
        .normalize();


    return {
        origin: outOrigin,
        direction: outDirection
    };
}


// ============================================================
// RAY -> GROUND PLANE
// ============================================================
//
// Ground plane:
//
//     Y = GROUND_Y
//
// Ray:
//
//     P(t) = origin + direction * t
//
// Solve:
//
//     origin.y + direction.y * t = GROUND_Y
//
// ============================================================

function intersectRayWithGround(
    rayOrigin,
    rayDirection,
    outPosition = new Vector3()
) {

    const denominator =
        rayDirection.y;


    // Ray is parallel to the ground.

    if (
        Math.abs(
            denominator
        ) < 0.000001
    ) {

        return null;
    }


    const distance =
        (
            GROUND_Y -
            rayOrigin.y
        ) /
        denominator;


    // Ground is behind the ray.

    if (
        distance <= 0
    ) {

        return null;
    }


    outPosition
        .copy(
            rayOrigin
        )
        .addScaledVector(
            rayDirection,
            distance
        );


    return outPosition;
}


// ============================================================
// IMAGE FOOT POINT
// ============================================================
//
// MediaPipe:
//
//     29 = left heel
//     30 = right heel
//     31 = left foot index
//     32 = right foot index
//
// We use the visible foot landmarks to estimate the image
// point corresponding to the person's physical ground position.
//
// ============================================================

function isUsableImageLandmark(
    landmark
) {

    if (!landmark) {

        return false;
    }


    if (
        !Number.isFinite(
            landmark.x
        ) ||
        !Number.isFinite(
            landmark.y
        )
    ) {

        return false;
    }


    if (
        landmark.visibility !== undefined &&
        landmark.visibility !== null &&
        landmark.visibility < 0.2
    ) {

        return false;
    }


    return true;
}


function getImageFootCenter(
    imageLandmarks,
    out = new Vector3()
) {

    const leftHeel =
        imageLandmarks[29];

    const rightHeel =
        imageLandmarks[30];

    const leftFootIndex =
        imageLandmarks[31];

    const rightFootIndex =
        imageLandmarks[32];


    let count = 0;

    let sumX = 0;
    let sumY = 0;


    // --------------------------------------------------------
    // Left heel.
    // --------------------------------------------------------

    if (
        isUsableImageLandmark(
            leftHeel
        )
    ) {

        sumX += leftHeel.x;
        sumY += leftHeel.y;

        count++;
    }


    // --------------------------------------------------------
    // Right heel.
    // --------------------------------------------------------

    if (
        isUsableImageLandmark(
            rightHeel
        )
    ) {

        sumX += rightHeel.x;
        sumY += rightHeel.y;

        count++;
    }


    // --------------------------------------------------------
    // Left foot index.
    // --------------------------------------------------------

    if (
        isUsableImageLandmark(
            leftFootIndex
        )
    ) {

        sumX += leftFootIndex.x;
        sumY += leftFootIndex.y;

        count++;
    }


    // --------------------------------------------------------
    // Right foot index.
    // --------------------------------------------------------

    if (
        isUsableImageLandmark(
            rightFootIndex
        )
    ) {

        sumX += rightFootIndex.x;
        sumY += rightFootIndex.y;

        count++;
    }


    // --------------------------------------------------------
    // Fallback to ankles.
    // --------------------------------------------------------

    if (count === 0) {

        const leftAnkle =
            imageLandmarks[27];

        const rightAnkle =
            imageLandmarks[28];


        if (
            isUsableImageLandmark(
                leftAnkle
            )
        ) {

            sumX += leftAnkle.x;
            sumY += leftAnkle.y;

            count++;
        }


        if (
            isUsableImageLandmark(
                rightAnkle
            )
        ) {

            sumX += rightAnkle.x;
            sumY += rightAnkle.y;

            count++;
        }
    }


    if (count === 0) {

        return null;
    }


    out.set(
        sumX / count,
        sumY / count,
        0
    );


    return out;
}


// ============================================================
// PERSON GROUND POSITION
// ============================================================
//
// Convert the MediaPipe image foot position into a WORLD
// position on:
//
//     Y = GROUND_Y
//
// ============================================================

function getPersonGroundPosition(
    imageLandmarks,
    camera,
    outPosition = new Vector3()
) {

    const imageFootCenter =
        getImageFootCenter(
            imageLandmarks,
            _tmpV8
        );


    if (!imageFootCenter) {

        return null;
    }


    imagePointToWorldRay(
        imageFootCenter,
        camera,
        _tmpV9,
        _tmpV10
    );


    return intersectRayWithGround(
        _tmpV9,
        _tmpV10,
        outPosition
    );
}


// ============================================================
// MODEL ROOT
// ============================================================

function getModelRoot(
    mesh
) {

    let modelRoot =
        mesh;


    while (
        modelRoot.parent &&
        modelRoot.parent.parent
    ) {

        modelRoot =
            modelRoot.parent;
    }


    return modelRoot;
}


// ============================================================
// SET WORLD POSITION
// ============================================================
//
// Convert a desired WORLD position into the local coordinates
// expected by modelRoot.position.
//
// This makes the code work even when the model is under a
// transformed parent.
//
// ============================================================

function setWorldPosition(
    object,
    worldPosition
) {

    if (!object.parent) {

        object.position.copy(
            worldPosition
        );

        return;
    }


    object.parent.worldToLocal(
        _tmpV13.copy(
            worldPosition
        )
    );


    object.position.copy(
        _tmpV13
    );
}


// ============================================================
// MAIN FUNCTION
// ============================================================

/**
 * Apply MediaPipe PoseLandmarker to a Mixamo-rigged
 * THREE.SkinnedMesh.
 *
 * worldLandmarks:
 *     result.worldLandmarks[0]
 *
 * imageLandmarks:
 *     result.landmarks[0]
 *
 * deltaTime:
 *     seconds since previous frame
 *
 * Example:
 *
 * applyMediaPipePose(
 *     skinnedMesh,
 *     result.worldLandmarks[0],
 *     result.landmarks[0],
 *     deltaTime,
 *     ""
 * );
 */
export function applyMediaPipePose(
    mesh,
    worldLandmarks,
    imageLandmarks,
    deltaTime = 1 / 60,
    name_prefix = ""
) {

    if (
        !mesh ||
        !mesh.isSkinnedMesh
    ) {

        throw new Error(
            "applyMediaPipePose(): expected a THREE.SkinnedMesh"
        );
    }


    if (
        !worldLandmarks ||
        worldLandmarks.length < 33
    ) {

        return;
    }


    if (
        !imageLandmarks ||
        imageLandmarks.length < 33
    ) {

        return;
    }


    // --------------------------------------------------------
    // Camera.
    // --------------------------------------------------------

    const camera =
        getCamera();


    // --------------------------------------------------------
    // Clamp delta time.
    // --------------------------------------------------------

    deltaTime =
        Math.min(
            Math.max(
                deltaTime,
                0.001
            ),
            0.1
        );


    // --------------------------------------------------------
    // Skeleton.
    // --------------------------------------------------------

    const skeleton =
        mesh.skeleton;


    // --------------------------------------------------------
    // Model root.
    // --------------------------------------------------------

    const modelRoot =
        getModelRoot(
            mesh
        );


    // ========================================================
    // FIND MIXAMO BONES
    // ========================================================

    const bones = {};


    for (
        const key
        of Object.keys(
            MIXAMO
        )
    ) {

        const name =
            name_prefix +
            MIXAMO[key];


        const bone =
            skeleton.getBoneByName(
                name
            );


        if (!bone) {

            console.warn(
                `applyMediaPipePose(): missing Mixamo bone "${name}"`
            );

            return;
        }


        bones[key] =
            bone;
    }


    // ========================================================
    // CACHE ORIGINAL BIND POSE
    // ========================================================

    let cache =
        _poseCache.get(
            mesh
        );


    if (!cache) {

        mesh.updateMatrixWorld(
            true
        );


        cache = {

            worldQuaternion:
                new Map(),

            worldDirection:
                new Map()
        };


        for (
            const [key, bone]
            of Object.entries(
                bones
            )
        ) {

            // --------------------------------------------
            // Original world rotation.
            // --------------------------------------------

            const worldQ =
                new Quaternion();


            bone.getWorldQuaternion(
                worldQ
            );


            cache.worldQuaternion.set(
                key,
                worldQ.clone()
            );


            // --------------------------------------------
            // Original bone direction.
            // --------------------------------------------

            const child =
                bone.children.find(
                    child =>
                        child.isBone
                );


            if (child) {

                const bonePosition =
                    new Vector3();

                const childPosition =
                    new Vector3();


                bone.getWorldPosition(
                    bonePosition
                );


                child.getWorldPosition(
                    childPosition
                );


                const direction =
                    childPosition
                        .sub(
                            bonePosition
                        )
                        .normalize();


                cache.worldDirection.set(
                    key,
                    direction.clone()
                );
            }
        }


        _poseCache.set(
            mesh,
            cache
        );
    }


    // ========================================================
    // CAMERA WORLD ORIENTATION
    // ========================================================
    //
    // Use the ACTUAL THREE CAMERA orientation for converting
    // MediaPipe's world-pose vectors into the application
    // world's orientation.
    //
    // ========================================================

    camera.updateMatrixWorld(
        true
    );


    camera.getWorldQuaternion(
        _tmpQ4
    );


    // ========================================================
    // MEDIAPIPE WORLD LANDMARK -> THREE WORLD
    // ========================================================
    //
    // worldLandmarks are used for BODY GEOMETRY and ROTATION.
    //
    // They are hip-centered, so they are NOT used as absolute
    // translation.
    //
    // ========================================================

    function landmark(
        index
    ) {

        const lm =
            worldLandmarks[index];


        if (!lm) {

            return new Vector3();
        }


        const out =
            new Vector3(
                lm.x,
                -lm.y,
                -lm.z
            );


        // MediaPipe-relative orientation -> camera/world
        // orientation using the actual Three.js camera.
        out.applyQuaternion(
            _tmpQ4
        );


        return out;
    }


    const nose =
        landmark(0);


    const leftShoulder =
        landmark(11);


    const rightShoulder =
        landmark(12);


    const leftElbow =
        landmark(13);


    const rightElbow =
        landmark(14);


    const leftWrist =
        landmark(15);


    const rightWrist =
        landmark(16);


    const leftHip =
        landmark(23);


    const rightHip =
        landmark(24);


    const leftKnee =
        landmark(25);


    const rightKnee =
        landmark(26);


    const leftAnkle =
        landmark(27);


    const rightAnkle =
        landmark(28);


    const leftFoot =
        landmark(31);


    const rightFoot =
        landmark(32);


    // ========================================================
    // HELPERS
    // ========================================================

    function getDirection(
        a,
        b,
        out = new Vector3()
    ) {

        out.subVectors(
            b,
            a
        );


        if (
            out.lengthSq() <
            0.000001
        ) {

            return null;
        }


        return out.normalize();
    }


    function smoothingAlpha(
        speed
    ) {

        return 1 -
            Math.exp(
                -speed *
                deltaTime
            );
    }


    const rotationAlpha =
        smoothingAlpha(
            ROTATION_SMOOTHING_SPEED
        );


    // ========================================================
    // BONE ROTATION
    // ========================================================

    function rotateBoneToDirection(
        bone,
        cacheKey,
        targetDirection
    ) {

        if (!targetDirection) {

            return;
        }


        const restDirection =
            cache.worldDirection.get(
                cacheKey
            );


        const restWorldQuaternion =
            cache.worldQuaternion.get(
                cacheKey
            );


        if (
            !restDirection ||
            !restWorldQuaternion
        ) {

            return;
        }


        // ----------------------------------------------------
        // Bind direction -> target direction.
        // ----------------------------------------------------

        _tmpQ1.setFromUnitVectors(
            restDirection,
            targetDirection
        );


        // ----------------------------------------------------
        // Desired WORLD rotation.
        // ----------------------------------------------------

        _tmpQ2
            .copy(
                _tmpQ1
            )
            .multiply(
                restWorldQuaternion
            );


        // ----------------------------------------------------
        // WORLD -> LOCAL.
        // ----------------------------------------------------

        if (bone.parent) {

            bone.parent.getWorldQuaternion(
                _tmpQ3
            );


            _tmpQ3.invert();


            _tmpQ3.multiply(
                _tmpQ2
            );


            bone.quaternion.slerp(
                _tmpQ3,
                rotationAlpha
            );

        } else {

            bone.quaternion.slerp(
                _tmpQ2,
                rotationAlpha
            );
        }
    }


    // ========================================================
    // SET WORLD ROTATION
    // ========================================================

    function setWorldQuaternion(
        bone,
        worldQuaternion
    ) {

        if (bone.parent) {

            bone.parent.getWorldQuaternion(
                _tmpQ3
            );


            _tmpQ3.invert();


            _tmpQ3.multiply(
                worldQuaternion
            );


            bone.quaternion.slerp(
                _tmpQ3,
                rotationAlpha
            );

        } else {

            bone.quaternion.slerp(
                worldQuaternion,
                rotationAlpha
            );
        }
    }


    // ========================================================
    // BODY CENTER
    // ========================================================

    const shoulderCenter =
        _tmpV1
            .addVectors(
                leftShoulder,
                rightShoulder
            )
            .multiplyScalar(
                0.5
            );


    const hipCenter =
        _tmpV2
            .addVectors(
                leftHip,
                rightHip
            )
            .multiplyScalar(
                0.5
            );


    // ========================================================
    // BODY ORIENTATION
    // ========================================================

    const up =
        _tmpV3
            .subVectors(
                shoulderCenter,
                hipCenter
            );


    if (
        up.lengthSq() <
        0.000001
    ) {

        return;
    }


    up.normalize();


    const right =
        _tmpV4
            .subVectors(
                rightShoulder,
                leftShoulder
            );


    if (
        right.lengthSq() <
        0.000001
    ) {

        return;
    }


    right.normalize();


    // --------------------------------------------------------
    // Forward.
    // --------------------------------------------------------

    const forward =
        _tmpV5
            .crossVectors(
                right,
                up
            )
            .normalize();


    /*
     * Preserve the Mixamo-facing correction from the original
     * implementation.
     */

    forward.negate();


    // --------------------------------------------------------
    // Re-orthogonalize.
    // --------------------------------------------------------

    right
        .crossVectors(
            up,
            forward
        )
        .normalize();


    // --------------------------------------------------------
    // Build torso rotation matrix.
    // --------------------------------------------------------

    _tmpM1.makeBasis(
        right,
        up,
        forward
    );


    const bodyQuaternion =
        _tmpQ1.setFromRotationMatrix(
            _tmpM1
        );


    // ========================================================
    // HIPS ROTATION
    // ========================================================

    setWorldQuaternion(
        bones.hips,
        bodyQuaternion
    );


    mesh.updateMatrixWorld(
        true
    );


    // ========================================================
    // SPINE
    // ========================================================

    bones.spine.quaternion.identity();

    bones.spine1.quaternion.identity();

    bones.spine2.quaternion.identity();


    mesh.updateMatrixWorld(
        true
    );


    // ========================================================
    // LEFT ARM
    // ========================================================

    rotateBoneToDirection(
        bones.leftArm,
        "leftArm",
        getDirection(
            leftShoulder,
            leftElbow,
            _tmpV6
        )
    );


    mesh.updateMatrixWorld(
        true
    );


    rotateBoneToDirection(
        bones.leftForeArm,
        "leftForeArm",
        getDirection(
            leftElbow,
            leftWrist,
            _tmpV7
        )
    );


    mesh.updateMatrixWorld(
        true
    );


    // ========================================================
    // RIGHT ARM
    // ========================================================

    rotateBoneToDirection(
        bones.rightArm,
        "rightArm",
        getDirection(
            rightShoulder,
            rightElbow,
            _tmpV6
        )
    );


    mesh.updateMatrixWorld(
        true
    );


    rotateBoneToDirection(
        bones.rightForeArm,
        "rightForeArm",
        getDirection(
            rightElbow,
            rightWrist,
            _tmpV7
        )
    );


    mesh.updateMatrixWorld(
        true
    );


    // ========================================================
    // LEFT LEG
    // ========================================================

    rotateBoneToDirection(
        bones.leftUpLeg,
        "leftUpLeg",
        getDirection(
            leftHip,
            leftKnee,
            _tmpV6
        )
    );


    mesh.updateMatrixWorld(
        true
    );


    rotateBoneToDirection(
        bones.leftLeg,
        "leftLeg",
        getDirection(
            leftKnee,
            leftAnkle,
            _tmpV7
        )
    );


    mesh.updateMatrixWorld(
        true
    );


    rotateBoneToDirection(
        bones.leftFoot,
        "leftFoot",
        getDirection(
            leftAnkle,
            leftFoot,
            _tmpV6
        )
    );


    mesh.updateMatrixWorld(
        true
    );


    // ========================================================
    // RIGHT LEG
    // ========================================================

    rotateBoneToDirection(
        bones.rightUpLeg,
        "rightUpLeg",
        getDirection(
            rightHip,
            rightKnee,
            _tmpV6
        )
    );


    mesh.updateMatrixWorld(
        true
    );


    rotateBoneToDirection(
        bones.rightLeg,
        "rightLeg",
        getDirection(
            rightKnee,
            rightAnkle,
            _tmpV7
        )
    );


    mesh.updateMatrixWorld(
        true
    );


    rotateBoneToDirection(
        bones.rightFoot,
        "rightFoot",
        getDirection(
            rightAnkle,
            rightFoot,
            _tmpV6
        )
    );


    mesh.updateMatrixWorld(
        true
    );


    // ========================================================
    // HEAD
    // ========================================================

    const headDirection =
        getDirection(
            shoulderCenter,
            nose,
            _tmpV6
        );


    if (headDirection) {

        rotateBoneToDirection(
            bones.head,
            "head",
            headDirection
        );
    }


    mesh.updateMatrixWorld(
        true
    );


    // ========================================================
    // ABSOLUTE WORLD POSITION
    // ========================================================
    //
    // IMAGE LANDMARKS:
    //
    //     feet in image
    //          ↓
    //     actual THREE camera
    //          ↓
    //     unprojected world ray
    //          ↓
    //     ground Y = -h
    //          ↓
    //     person's world foot position
    //
    // Then:
    //
    //     detected foot position
    //          -
    //     current model root -> foot offset
    //          =
    //     desired model root position
    //
    // This ensures the character's feet are placed on the
    // detected physical ground location rather than placing
    // the Mixamo root/hips directly on the floor.
    //
    // ========================================================

    if (ENABLE_WORLD_POSITION) {

        let worldCache =
            _worldPositionCache.get(
                mesh
            );


        if (!worldCache) {

            worldCache = {

                initialized: false,

                targetRootWorldPosition:
                    new Vector3(),

                smoothRootWorldPosition:
                    new Vector3()
            };


            _worldPositionCache.set(
                mesh,
                worldCache
            );
        }


        // ----------------------------------------------------
        // Detect the person's physical WORLD foot position.
        // ----------------------------------------------------

        const targetGroundPosition =
            getPersonGroundPosition(
                imageLandmarks,
                camera,
                _tmpV6
            );


        if (targetGroundPosition) {

            // --------------------------------------------
            // Desired position of the Mixamo foot midpoint.
            // --------------------------------------------

            const targetFootPosition =
                _tmpV7
                    .copy(
                        targetGroundPosition
                    )
                    .addScaledVector(
                        new Vector3(
                            0,
                            1,
                            0
                        ),
                        MODEL_FOOT_CONTACT_HEIGHT
                    );


            // --------------------------------------------
            // Current model root WORLD position.
            // --------------------------------------------

            const rootWorldPosition =
                modelRoot.getWorldPosition(
                    _tmpV8
                );


            // --------------------------------------------
            // Current LEFT foot WORLD position.
            // --------------------------------------------

            const leftFootWorldPosition =
                bones.leftFoot.getWorldPosition(
                    _tmpV9
                );


            // --------------------------------------------
            // Current RIGHT foot WORLD position.
            // --------------------------------------------

            const rightFootWorldPosition =
                bones.rightFoot.getWorldPosition(
                    _tmpV10
                );


            // --------------------------------------------
            // Current avatar foot midpoint.
            // --------------------------------------------

            const currentFootWorldPosition =
                _tmpV11
                    .addVectors(
                        leftFootWorldPosition,
                        rightFootWorldPosition
                    )
                    .multiplyScalar(
                        0.5
                    );


            // --------------------------------------------
            // Current root -> foot offset in WORLD space.
            // --------------------------------------------

            const rootToFoot =
                _tmpV12
                    .subVectors(
                        currentFootWorldPosition,
                        rootWorldPosition
                    );


            // --------------------------------------------
            // Desired root world position:
            //
            //     root + rootToFoot = targetFoot
            //
            // therefore:
            //
            //     root = targetFoot - rootToFoot
            // --------------------------------------------

            worldCache.targetRootWorldPosition
                .subVectors(
                    targetFootPosition,
                    rootToFoot
                );


            // --------------------------------------------
            // First valid frame.
            // --------------------------------------------

            if (
                !worldCache.initialized
            ) {

                worldCache.smoothRootWorldPosition
                    .copy(
                        worldCache.targetRootWorldPosition
                    );


                worldCache.initialized =
                    true;
            }


            // --------------------------------------------
            // Smooth WORLD root position.
            // --------------------------------------------

            const positionAlpha =
                smoothingAlpha(
                    POSITION_SMOOTHING_SPEED
                );


            worldCache.smoothRootWorldPosition.lerp(
                worldCache.targetRootWorldPosition,
                positionAlpha
            );


            // --------------------------------------------
            // Apply WORLD position to model root.
            // --------------------------------------------

            setWorldPosition(
                modelRoot,
                worldCache.smoothRootWorldPosition
            );
        }
    }


    // ========================================================
    // UPDATE SKELETON
    // ========================================================

    skeleton.update();

    mesh.updateMatrixWorld(
        true
    );
}
