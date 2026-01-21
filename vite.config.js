import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path'
import glsl from 'vite-plugin-glsl';

export default defineConfig({
    base: "/demo/",
    clearScreen: false,
    optimizeDeps: {
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
                swimming: resolve(__dirname, 'swimming/index.html')
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
            targets: [
                { src: 'node_modules/three/examples/jsm/libs/ammo.wasm.js', dest: 'jsm/libs/' },
                { src: 'node_modules/three/examples/jsm/libs/ammo.wasm.wasm', dest: 'jsm/libs/' },
                { src: 'node_modules/three/examples/jsm/libs/draco/gltf/draco_decoder.js', dest: 'jsm/libs/draco/gltf' },
                { src: 'node_modules/three/examples/jsm/libs/draco/gltf/draco_decoder.wasm', dest: 'jsm/libs/draco/gltf/' },
                { src: 'node_modules/three/examples/jsm/libs/draco/gltf/draco_encoder.js', dest: 'jsm/libs/draco/gltf/' },
                { src: 'node_modules/three/examples/jsm/libs/draco/gltf/draco_wasm_wrapper.js', dest: 'jsm/libs/draco/gltf/' }
            ]
        }),
        glsl()
    ]
})

