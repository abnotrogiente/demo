import { BoxGeometry, Mesh, MeshStandardMaterial, Quaternion, Scene, SphereGeometry, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

let ammo;

class Physics {
    /**
     * 
     * @param {Scene} scene 
     */
    constructor(scene) {
        this.scene = scene;
        this.initialized = false;
        /**@type {Ammo.default.btRigidBody[]} */
        this.bodies = [];


        this.loader = new GLTFLoader().setPath('assets/');
        this.bodyToMesh = new Map();
    }

    async init() {
        // @ts-ignore
        const AmmoLib = await Ammo();
        /**@type {Ammo.default} */
        this.Ammo = AmmoLib;
        console.log("Ammoo loaded:", this.Ammo);
        console.log("RigidBody exists:", typeof this.Ammo.btRigidBody);
        const collisionConfig = new this.Ammo.btDefaultCollisionConfiguration();
        const dispatcher = new this.Ammo.btCollisionDispatcher(collisionConfig);
        const broadphase = new this.Ammo.btDbvtBroadphase();
        const solver = new this.Ammo.btSequentialImpulseConstraintSolver();

        /**@type {Ammo.default.btDiscreteDynamicsWorld} */
        this.physicsWorld = new this.Ammo.btDiscreteDynamicsWorld(
            dispatcher,
            broadphase,
            solver,
            collisionConfig
        );

        this.physicsWorld.setGravity(new this.Ammo.btVector3(0, -9.8, 0));

        this.initialized = true;
        console.log("initialized");

        this.tmpTransform = new this.Ammo.btTransform();

    }


    createBox({ position = new Vector3(),
        rotation = new Quaternion(),
        mass = 0,
        dimensions = new Vector3(1, 1, 1),
        restitution = .5,
        friction = .5,
        color = 0xffffff,
        model = null,
        modelOffset = new Vector3() }) {
        const geometry = new BoxGeometry(dimensions.x, dimensions.y, dimensions.z);
        const material = new MeshStandardMaterial({ color: color });
        const mesh = new Mesh(geometry, material);
        mesh.position.copy(position);
        mesh.rotation.setFromQuaternion(rotation);


        const shape = new this.Ammo.btBoxShape(
            new this.Ammo.btVector3(
                dimensions.x * 0.5,
                dimensions.y * 0.5,
                dimensions.z * 0.5
            )
        );

        const transform = new this.Ammo.btTransform();
        transform.setIdentity();
        transform.setOrigin(new this.Ammo.btVector3(position.x, position.y, position.z));
        transform.setRotation(new this.Ammo.btQuaternion(rotation.x, rotation.y, rotation.z, rotation.w));

        const motionState = new this.Ammo.btDefaultMotionState(transform);

        const localInertia = new this.Ammo.btVector3(0, 0, 0);
        if (mass > 0) shape.calculateLocalInertia(mass, localInertia);

        const rbInfo = new this.Ammo.btRigidBodyConstructionInfo(
            mass,
            motionState,
            shape,
            localInertia
        );

        const body = new this.Ammo.btRigidBody(rbInfo);

        this.physicsWorld.addRigidBody(body);

        mesh.userData.physicsBody = body;

        this.bodyToMesh.set(body, mesh);

        this.bodies.push(body);

        body.setActivationState(4); // DISABLE_DEACTIVATION

        body.setRestitution(restitution);
        body.setFriction(friction);


        //LOAD MODEL
        if (model) {
            this.loader.load(model, (gltf) => {
                gltf.scene;
                if (gltf.scene) {
                    console.log("MODEL LOADED : " + model);
                    this.scene.add(gltf.scene);
                    gltf.scene.position.copy(modelOffset);
                }
                else console.log("LOADING FAILED");
            });
        }
        else this.scene.add(mesh);

        return body;
    }


    createSphere({ position = new Vector3(),
        rotation = new Quaternion(),
        radius = 1,
        mass = 0,
        restitution = .5,
        friction = .5,
        color = 0xffffff }) {
        const geometry = new SphereGeometry(radius);
        const material = new MeshStandardMaterial({ color: color })
        const mesh = new Mesh(geometry, material);
        mesh.position.copy(position);
        mesh.rotation.setFromQuaternion(rotation);
        this.scene.add(mesh);

        const shape = new this.Ammo.btSphereShape(radius);

        const transform = new this.Ammo.btTransform();
        transform.setIdentity();
        transform.setOrigin(new this.Ammo.btVector3(position.x, position.y, position.z));
        transform.setRotation(
            new this.Ammo.btQuaternion(rotation.x, rotation.y, rotation.z, rotation.w)
        );

        const motionState = new this.Ammo.btDefaultMotionState(transform);

        const localInertia = new this.Ammo.btVector3(0, 0, 0);
        if (mass > 0) {
            shape.calculateLocalInertia(mass, localInertia);
        }

        const rbInfo = new this.Ammo.btRigidBodyConstructionInfo(
            mass,
            motionState,
            shape,
            localInertia
        );

        const body = new this.Ammo.btRigidBody(rbInfo);

        this.physicsWorld.addRigidBody(body);

        mesh.userData.physicsBody = body;

        this.bodyToMesh.set(body, mesh);

        this.bodies.push(body);

        body.setActivationState(4); // DISABLE_DEACTIVATION

        body.setRestitution(restitution);
        body.setFriction(friction);

        body.setCcdMotionThreshold(radius * 0.2);
        body.setCcdSweptSphereRadius(radius);

        return body;
    }

    stepSimulation(dt) {
        const fixedTimeStep = 1 / 60;
        const maxSubSteps = 20;

        this.physicsWorld.stepSimulation(dt, maxSubSteps, fixedTimeStep);
        this.syncGraphics();
    }

    syncGraphics() {
        this.bodies.forEach(body => {
            const motionState = body.getMotionState();

            if (motionState) {
                motionState.getWorldTransform(this.tmpTransform);

                const p = this.tmpTransform.getOrigin();
                const q = this.tmpTransform.getRotation();

                const mesh = this.bodyToMesh.get(body);

                mesh.position.set(p.x(), p.y(), p.z());
                mesh.quaternion.set(q.x(), q.y(), q.z(), q.w());
            }
        })
    }
}



export { Physics };