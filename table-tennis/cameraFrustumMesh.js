import { BufferGeometry, DoubleSide, Float32BufferAttribute, Matrix4, Mesh, MeshBasicMaterial, Vector3 } from "three";

export class CameraFrustumMesh extends Mesh {
    constructor(camera, options = {}) {
        const geometry = new BufferGeometry();

        const material = new MeshBasicMaterial({
            color: options.color ?? 0x00aaff,
            opacity: options.opacity ?? 0.15,
            transparent: true,
            side: DoubleSide,
            depthWrite: false,
        });

        super(geometry, material);

        this.camera = camera;

        this.update();
    }

    update() {
        const camera = this.camera;

        const inverseProjection = camera.projectionMatrix
            .clone()
            .invert();

        const corners = [
            [-1, -1, -1],
            [1, -1, -1],
            [1, 1, -1],
            [-1, 1, -1],

            [-1, -1, 1],
            [1, -1, 1],
            [1, 1, 1],
            [-1, 1, 1],
        ].map(([x, y, z]) =>
            new Vector3(x, y, z).applyMatrix4(inverseProjection)
        );

        const faces = [
            [0, 1, 2, 0, 2, 3], // near
            [4, 6, 5, 4, 7, 6], // far
            [0, 4, 5, 0, 5, 1], // bottom
            [3, 2, 6, 3, 6, 7], // top
            [0, 3, 7, 0, 7, 4], // left
            [1, 5, 6, 1, 6, 2], // right
        ];

        const positions = [];

        for (const face of faces) {
            for (const index of face) {
                const p = corners[index];

                positions.push(p.x, p.y, p.z);
            }
        }

        this.geometry.setAttribute(
            'position',
            new Float32BufferAttribute(positions, 3)
        );

        this.geometry.computeBoundingSphere();
    }

    dispose() {
        this.geometry.dispose();
        this.material.dispose();
    }
}