/**
 * Scene and Renderer Setup
 * Initializes Three.js scene, camera, renderer, and lighting
 */

import {
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
    AmbientLight,
    DirectionalLight,
    CameraHelper,
    Vector3
} from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer, RenderPass } from 'three/examples/jsm/Addons.js';
import { CameraFrustumMesh } from './cameraFrustumMesh';

export async function initializeScene() {
    // Scene
    const scene = new Scene();

    // Camera
    const aspect = window.innerWidth / window.innerHeight;
    const camera = new PerspectiveCamera(75, aspect, 0.1, 1000);
    camera.position.z = 3;
    camera.position.y = 1.8;

    scene.add(camera);

    // Debug camera
    const cameraDebug = new PerspectiveCamera(60, aspect, 0.1, 0.6);
    cameraDebug.name = "debug camera";
    cameraDebug.position.set(1.5, 2.5, -3.);
    cameraDebug.lookAt(new Vector3(0, 0, 0));
    const helper = new CameraHelper(cameraDebug);
    const frustum = new CameraFrustumMesh(cameraDebug, {
        color: 0x555555,
        opacity: 0.12
    });
    // scene.add(helper);
    // cameraDebug.add(frustum);
    // scene.add(cameraDebug);

    // Renderer
    const renderer = new WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    document.body.appendChild(renderer.domElement);

    // Post-processing
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    // Lighting
    const light = new AmbientLight(0xffffff, 1.0);
    scene.add(light);

    const directionalLight = new DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(1, 3, 2);
    directionalLight.lookAt(new Vector3());
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Optional: Improve shadow resolution and coverage
    // directionalLight.shadow.mapSize.width = 2048;
    // directionalLight.shadow.mapSize.height = 2048;
    // directionalLight.shadow.camera.near = 0.5;
    // directionalLight.shadow.camera.far = 50;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.listenToKeyEvents(window);

    return {
        scene,
        camera,
        cameraDebug,
        helper,
        renderer,
        composer,
        controls
    };
}
