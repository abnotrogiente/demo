import {
    Matrix4,
    Quaternion,
    Vector3
} from "three";


// ============================================================
// CAMERA / WORLD CONFIG
// ============================================================
//
// Everything below is expressed in THREE WORLD coordinates.
//
// CAMERA_WORLD_POSITION:
//     Actual camera position in world space.
//
// CAMERA_WORLD_DIRECTION:
//     Normalized direction the camera is looking.
//
// h:
//     Height of the ground below world Y=0.
//
// Therefore:
//
//     GROUND_Y = -h
//
// ============================================================

const CAMERA_WORLD_POSITION = new Vector3(
    5,
    3.5,
    0
);

const CAMERA_WORLD_DIRECTION = new Vector3().sub(CAMERA_WORLD_POSITION);

// const CAMERA_WORLD_DIRECTION = new Vector3(
//     0.0,
//     0.0,
//     -1.0
// ).normalize();


// ============================================================
// GROUND
// ============================================================
//
// The physical floor is below world Y=0.
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
// CAMERA PROJECTION
// ============================================================
//
// These values must match the camera/image that was supplied
// to MediaPipe.
//
// For a THREE.PerspectiveCamera:
//
//     CAMERA_FOV_Y_DEGREES = camera.fov
//     CAMERA_IMAGE_ASPECT  = camera.aspect
//
// The principal point is normally approximately the center
// of the image.
//
// ============================================================

const CAMERA_FOV_Y_DEGREES = 60.0;

const CAMERA_IMAGE_ASPECT = 16 / 9;

const CAMERA_PRINCIPAL_X = 0.5;
const CAMERA_PRINCIPAL_Y = 0.5;


// ============================================================
// IMAGE CONFIG
// ============================================================
//
// Set this to true if the image given to MediaPipe is already
// horizontally mirrored.
//
// Normally leave this false.
//
// ============================================================

const IMAGE_IS_MIRRORED = false;


// ============================================================
// MODEL FOOT CONTACT
// ============================================================
//
// MediaPipe image coordinates allow us to determine the
// WORLD position on the ground underneath the person's feet.
//
// The Mixamo "Foot" bones are usually located around the ankle
// / foot joint rather than exactly at the sole of the shoe.
//
// This offset moves the Mixamo foot-bone midpoint above the
// physical ground plane.
//
// Start with 0.
//
// Example:
//     0.08 = put the foot bone 8 cm above the ground.
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
// CAMERA WORLD BASIS
// ============================================================
//
// Three.js camera convention:
//
//     +X = right
//     +Y = up
//     -Z = forward
//
// We explicitly construct the camera basis from:
//
//     CAMERA_WORLD_DIRECTION
//
// while assuming world +Y is the camera up direction.
//
// ============================================================

const WORLD_UP = new Vector3(
    0,
    1,
    0
);


// Camera forward in world coordinates.

const CAMERA_WORLD_FORWARD =
    CAMERA_WORLD_DIRECTION.clone()
        .normalize();


// Camera right.
//
// For:
//
//     forward = (0,0,-1)
//     up      = (0,1,0)
//
// this gives:
//
//     right = (1,0,0)
//
// ============================================================

const CAMERA_WORLD_RIGHT =
    new Vector3()
        .crossVectors(
            CAMERA_WORLD_FORWARD,
            WORLD_UP
        )
        .normalize();


// Camera up reconstructed from the orthogonal basis.

const CAMERA_WORLD_UP =
    new Vector3()
        .crossVectors(
            CAMERA_WORLD_RIGHT,
            CAMERA_WORLD_FORWARD
        )
        .normalize();


// ============================================================
// CAMERA WORLD QUATERNION
// ============================================================

const CAMERA_WORLD_QUATERNION =
    new Quaternion();


// Point in front of camera.

const cameraTarget =
    new Vector3()
        .copy(
            CAMERA_WORLD_POSITION
        )
        .add(
            CAMERA_WORLD_FORWARD
        );


// Build camera orientation.

const cameraMatrix =
    new Matrix4().lookAt(
        CAMERA_WORLD_POSITION,
        cameraTarget,
        WORLD_UP
    );


CAMERA_WORLD_QUATERNION.setFromRotationMatrix(
    cameraMatrix
);


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

const _tmpQ1 = new Quaternion();
const _tmpQ2 = new Quaternion();
const _tmpQ3 = new Quaternion();

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
// CAMERA IMAGE -> WORLD RAY
// ============================================================
//
// MediaPipe image landmark:
//
//     x = normalized horizontal coordinate
//     y = normalized vertical coordinate
//
//     (0,0) = top-left
//     (1,1) = bottom-right
//
// We turn this point into a camera-local perspective ray and
// then express that ray in WORLD coordinates.
//
// ============================================================

const CAMERA_FOV_Y_RADIANS =
    CAMERA_FOV_Y_DEGREES *
    Math.PI /
    180.0;


const CAMERA_TAN_HALF_FOV_Y =
    Math.tan(
        CAMERA_FOV_Y_RADIANS * 0.5
    );


function imagePointToWorldRay(
    imagePoint,
    outDirection = new Vector3()
) {

    let x =
        imagePoint.x;

    const y =
        imagePoint.y;


    // --------------------------------------------------------
    // Handle mirrored input.
    // --------------------------------------------------------

    if (IMAGE_IS_MIRRORED) {

        x =
            1.0 - x;
    }


    // --------------------------------------------------------
    // Convert normalized image coordinates to centered
    // camera coordinates.
    //
    // X:
    //     left  = negative
    //     right = positive
    //
    // Y:
    //     bottom = negative
    //     top    = positive
    // --------------------------------------------------------

    const normalizedX =
        (
            x -
            CAMERA_PRINCIPAL_X
        ) * 2.0;


    const normalizedY =
        (
            CAMERA_PRINCIPAL_Y -
            y
        ) * 2.0;


    // --------------------------------------------------------
    // Perspective projection.
    //
    // Camera local:
    //
    //     +X = right
    //     +Y = up
    //     -Z = forward
    // --------------------------------------------------------

    const cameraX =
        normalizedX *
        CAMERA_TAN_HALF_FOV_Y *
        CAMERA_IMAGE_ASPECT;


    const cameraY =
        normalizedY *
        CAMERA_TAN_HALF_FOV_Y;


    // --------------------------------------------------------
    // Camera-local -> WORLD.
    // --------------------------------------------------------

    outDirection
        .copy(
            CAMERA_WORLD_FORWARD
        )
        .addScaledVector(
            CAMERA_WORLD_RIGHT,
            cameraX
        )
        .addScaledVector(
            CAMERA_WORLD_UP,
            cameraY
        )
        .normalize();


    return outDirection;
}


// ============================================================
// RAY -> GROUND PLANE
// ============================================================
//
// Ground plane:
//
//     Y = GROUND_Y
//
// The camera ray:
//
//     P(t) = cameraPosition + rayDirection * t
//
// We solve:
//
//     P.y = GROUND_Y
//
// ============================================================

function intersectRayWithGround(
    rayOrigin,
    rayDirection,
    outPosition = new Vector3()
) {

    const denominator =
        rayDirection.y;


    // Ray is approximately parallel to ground.

    if (
        Math.abs(denominator) <
        0.000001
    ) {

        return null;
    }


    const distance =
        (
            GROUND_Y -
            rayOrigin.y
        ) /
        denominator;


    // Intersection is behind the camera.

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
// We use the visible foot landmarks in the IMAGE because these
// tell us which image ray belongs to the person's feet.
//
// MediaPipe:
//
//     29 = left heel
//     30 = right heel
//     31 = left foot index
//     32 = right foot index
//
// We average heel + toe for each foot, then average the two
// feet.
//
// This is more representative of the physical foot position
// than using the ankle pixel alone.
// ============================================================

function isUsableImageLandmark(
    landmark
) {

    if (!landmark) {

        return false;
    }


    if (
        !Number.isFinite(landmark.x) ||
        !Number.isFinite(landmark.y)
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
// PERSON'S PHYSICAL GROUND POSITION
// ============================================================
//
// Converts the person's IMAGE foot position into a WORLD point
// on:
//
//     Y = GROUND_Y
//
// ============================================================

function getPersonGroundPosition(
    imageLandmarks,
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


    const rayDirection =
        imagePointToWorldRay(
            imageFootCenter,
            _tmpV9
        );


    return intersectRayWithGround(
        CAMERA_WORLD_POSITION,
        rayDirection,
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
// modelRoot.position is normally already in world coordinates
// in this setup, but this function also handles a transformed
// parent correctly.
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
        _tmpV11.copy(
            worldPosition
        )
    );


    object.position.copy(
        _tmpV11
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
 *
 * Example:
 *
 * applyMediaPipePose(
 *     skinnedMesh,
 *     result.worldLandmarks[0],
 *     result.landmarks[0],
 *     deltaTime
 * );
 */
export function applyMediaPipePose(
    mesh,
    worldLandmarks,
    imageLandmarks,
    deltaTime = 1 / 60,
    name_prefix
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
    // Find model root.
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
        of Object.keys(MIXAMO)
    ) {

        const name =
            MIXAMO[key];


        const bone =
            skeleton.getBoneByName(
                name_prefix + name
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


        out.applyQuaternion(
            CAMERA_WORLD_QUATERNION
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
     * Preserve the Mixamo facing correction from the original
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
    // This is the important part.
    //
    // STEP 1:
    //
    //     MediaPipe image foot position
    //
    //     ↓
    //
    //     camera ray
    //
    //     ↓
    //
    //     ground intersection
    //
    // gives the physical WORLD position of the person's feet.
    //
    //
    // STEP 2:
    //
    //     Find the avatar's current foot-bone midpoint.
    //
    //
    // STEP 3:
    //
    //     Find the vector:
    //
    //     modelRoot -> avatarFoot
    //
    //
    // STEP 4:
    //
    //     Move modelRoot so that:
    //
    //     avatarFoot = detectedWorldFoot
    //
    // This prevents the hips/root from being placed directly
    // on the ground.
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
        // Find the person's physical WORLD foot position.
        // ----------------------------------------------------

        const targetGroundPosition =
            getPersonGroundPosition(
                imageLandmarks,
                _tmpV6
            );


        if (targetGroundPosition) {

            // --------------------------------------------
            // Raise the target point by the amount that the
            // Mixamo foot bone should sit above the floor.
            // --------------------------------------------

            const targetFootPosition =
                _tmpV7
                    .copy(
                        targetGroundPosition
                    )
                    .addScaledVector(
                        WORLD_UP,
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
            // Model-root -> avatar-foot offset.
            //
            // This offset is already in WORLD coordinates.
            // --------------------------------------------

            const rootToFoot =
                _tmpV11
                    .subVectors(
                        currentFootWorldPosition,
                        rootWorldPosition
                    );


            // --------------------------------------------
            // Desired model-root WORLD position.
            //
            // We want:
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
            // Smooth ROOT position in WORLD space.
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
            // Apply smoothed WORLD position to the root.
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
