import { AdditiveBlending, BufferAttribute, BufferGeometry, CanvasTexture, Color, Mesh, MeshBasicMaterial, NormalBlending, Points, PointsMaterial, SphereGeometry, Vector3 } from "three";
import { config } from "./config";


function createParticleTexture() {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;

    const ctx = canvas.getContext("2d");

    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);

    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.3, "rgba(255,255,255,0.9)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    return new CanvasTexture(canvas);
}

export function startExplosion(position, dimension, options = {}) {
    const scene = config.scene;
    const {
        particleCount = 180,
        duration = 1.2,
        particleSize = 6,
        gravity = null
    } = options;

    // Normalize position and dimensions.
    const origin = position.isVector3
        ? position.clone()
        : new Vector3(position.x, position.y, position.z);

    // A number represents a radius; Vector3 represents per-axis radii.
    const radii = typeof dimension === "number"
        ? new Vector3(dimension, dimension, dimension)
        : new Vector3(
            Math.abs(dimension.x),
            Math.abs(dimension.y),
            Math.abs(dimension.z)
        );

    const maxRadius = Math.max(radii.x, radii.y, radii.z);

    if (maxRadius <= 0 || duration <= 0) {
        throw new Error("Explosion dimensions and duration must be positive.");
    }

    const gravityY = gravity ?? -maxRadius * 0.35 / (duration * duration);

    // Particle data.
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = [];

    for (let i = 0; i < particleCount; i++) {
        // Random direction on a sphere.
        const z = Math.random() * 2 - 1;
        const angle = Math.random() * Math.PI * 2;
        const radial = Math.sqrt(1 - z * z);

        const direction = new Vector3(
            radial * Math.cos(angle),
            radial * Math.sin(angle),
            z
        );

        // Random particle speed, scaled by the requested dimensions.
        const speed = 0.65 + Math.random() * 0.7;

        velocities.push(new Vector3(
            direction.x * radii.x * speed / duration,
            direction.y * radii.y * speed / duration,
            direction.z * radii.z * speed / duration
        ));

        // All particles start at the explosion origin.
        positions[i * 3] = origin.x;
        positions[i * 3 + 1] = origin.y;
        positions[i * 3 + 2] = origin.z;

        // Random fire-like colors.
        const fireColors = [
            0xff2200, // Deep red
            0xff3b00, // Red-orange
            0xff5500, // Orange
            0xff7700, // Bright orange
            0xff9900  // Amber
        ];

        const color = new Color(
            fireColors[Math.floor(Math.random() * fireColors.length)]
        );

        color.toArray(colors, i * 3);
    }

    // Create particle geometry.
    const geometry = new BufferGeometry();
    geometry.setAttribute(
        "position",
        new BufferAttribute(positions, 3)
    );
    geometry.setAttribute(
        "color",
        new BufferAttribute(colors, 3)
    );

    const material = new PointsMaterial({
        size: particleSize,
        map: createParticleTexture(),
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: AdditiveBlending, // TODO NormalBlending but change the colors
        depthWrite: false,
        sizeAttenuation: true
    });

    const particles = new Points(geometry, material);
    scene.add(particles);

    // Expanding wireframe shockwave.
    const shockwaveGeometry = new SphereGeometry(1, 16, 12);
    const shockwaveMaterial = new MeshBasicMaterial({
        color: 0xffa64d,
        wireframe: true,
        visible: false,
        transparent: true,
        opacity: 0.4,
        blending: AdditiveBlending,
        depthWrite: false
    });

    const shockwave = new Mesh(
        shockwaveGeometry,
        shockwaveMaterial
    );

    shockwave.position.copy(origin);
    scene.add(shockwave);

    let elapsed = 0;
    let disposed = false;

    function dispose() {
        if (disposed) return;

        disposed = true;

        scene.remove(particles);
        scene.remove(shockwave);

        geometry.dispose();
        material.dispose();
        shockwaveGeometry.dispose();
        shockwaveMaterial.dispose();
    }

    // Call this every frame with the elapsed time in seconds.
    function update(deltaTime) {
        if (disposed) return;

        elapsed += deltaTime;

        const progress = Math.min(elapsed / duration, 1);
        const fade = 1 - progress;

        // Move particles away from the explosion origin.
        for (let i = 0; i < particleCount; i++) {
            const velocity = velocities[i];

            positions[i * 3] =
                origin.x + velocity.x * elapsed;

            positions[i * 3 + 1] =
                origin.y + velocity.y * elapsed +
                0.5 * gravityY * elapsed * elapsed;

            positions[i * 3 + 2] =
                origin.z + velocity.z * elapsed;
        }

        geometry.attributes.position.needsUpdate = true;

        // Fade out the particles.
        material.opacity = fade;

        // Expand and fade the shockwave.
        shockwave.scale.set(
            radii.x * progress,
            radii.y * progress,
            radii.z * progress
        );

        shockwaveMaterial.opacity = 0.4 * fade;

        if (progress >= 1) {
            dispose();
        }
    }

    const explosion = {
        update,
        dispose,
        get finished() {
            return disposed;
        }
    };

    config.explosions.push(explosion);
    return explosion;
}