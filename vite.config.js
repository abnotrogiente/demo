import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path'
import glsl from 'vite-plugin-glsl';

const copies = [
    { src: 'node_modules/three/examples/jsm/libs/**/*', dest: 'jsm/libs', rename: { stripBase: 4 } },
    // { src: 'node_modules/three/examples/jsm/libs/ammo.wasm.js', dest: 'jsm/libs', rename: { stripBase: 1 } },
    // { src: 'node_modules/three/examples/jsm/libs/ammo.wasm.wasm', dest: 'jsm/libs', rename: { stripBase: 1 } },
    // { src: 'node_modules/three/examples/jsm/libs/draco/gltf/draco_decoder.js', dest: 'jsm/libs/draco/gltf', rename: "ammo.wasm.js" },
    // { src: 'node_modules/three/examples/jsm/libs/draco/gltf/draco_decoder.wasm', dest: 'jsm/libs/draco/gltf/', rename: "ammo.wasm.js" },
    // { src: 'node_modules/three/examples/jsm/libs/draco/gltf/draco_encoder.js', dest: 'jsm/libs/draco/gltf/', rename: "ammo.wasm.js" },
    // { src: 'node_modules/three/examples/jsm/libs/draco/gltf/draco_wasm_wrapper.js', dest: 'jsm/libs/draco/gltf/', rename: "ammo.wasm.js" }
];

copies.push({ src: "swimming/assets/vis-config.json", dest: "swimming/assets", rename: "vis-config.json" });
copies.push({ src: "swimming/assets/vis-config-demo.json", dest: "swimming/assets", rename: "vis-config-demo.json" });
copies.push({ src: "swimming/assets/vis-config-demo-2.json", dest: "swimming/assets", rename: "vis-config-demo-2.json" });

copies.push({ src: "table-tennis/assets/**/*", dest: "" });



for (let i = 1; i <= 8; i++) copies.push({ src: "swimming/assets/race-data/" + i + ".csv", dest: "swimming/assets/race-data/", rename: i + ".csv" });

export default defineConfig({
    base: "/demo/",
    assetsInclude: ["**/*.wasm"],
    clearScreen: false,
    optimizeDeps: {
        exclude: ["ammojs-typed"],
        esbuildOptions: {
            supported: {
                'top-level-await': true
            }
        }
    },
    esbuild: {
        supported: {
            'top-level-await': true
        }
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                demo1: resolve(__dirname, 'demo1/index.html'),
                square: resolve(__dirname, 'square/index.html'),
                swimming: resolve(__dirname, 'swimming/index.html'),
                'table-tennis': resolve(__dirname, 'table-tennis/index.html')
                // ajoute autant de démos que nécessaire
            }
        },
        sourcemap: true,
        chunkSizeWarningLimit: 1024
    },
    server: {
        open: true,
        allowedHosts: ['.trycloudflare.com']
    },
    plugins: [
        viteStaticCopy({
            targets: copies
        }),
        glsl()
    ]
})

