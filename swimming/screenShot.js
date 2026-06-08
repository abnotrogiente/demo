import { config } from "./params";

function createRenderTarget(gl, width, height) {
    const framebuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);

    // color texture
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);

    gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        width,
        height,
        0,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        null
    );

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_2D,
        texture,
        0
    );

    // depth buffer
    const depth = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, depth);

    gl.renderbufferStorage(
        gl.RENDERBUFFER,
        gl.DEPTH_COMPONENT16,
        width,
        height
    );

    gl.framebufferRenderbuffer(
        gl.FRAMEBUFFER,
        gl.DEPTH_ATTACHMENT,
        gl.RENDERBUFFER,
        depth
    );

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    return { framebuffer, texture, width, height };
}

function flipPixelsY(pixels, width, height) {
    const rowSize = width * 4;
    const flipped = new Uint8Array(pixels.length);

    for (let y = 0; y < height; y++) {
        const src = y * rowSize;
        const dst = (height - y - 1) * rowSize;

        flipped.set(
            pixels.subarray(src, src + rowSize),
            dst
        );
    }

    return flipped;
}

/**
 * 
 * @param {WebGLRenderingContext} gl 
 * @param {*} renderScene 
 * @param {*} width 
 * @param {*} height 
 * @returns 
 */
export async function captureScreenshot(gl, renderScene, width, height) {
    // Save original canvas dimensions
    const originalWidth = gl.canvas.width;
    const originalHeight = gl.canvas.height;
    const ratio = window.devicePixelRatio || 1;

    // Resize canvas to target dimensions
    gl.canvas.width = width;
    gl.canvas.height = height;
    gl.canvas.style.width = (width / ratio) + 'px';
    gl.canvas.style.height = (height / ratio) + 'px';

    // Update projection matrix for new aspect ratio
    gl.matrixMode(gl.PROJECTION);
    gl.loadIdentity();
    gl.perspective(config.params.fov, width / height, 0.01, 100);
    gl.matrixMode(gl.MODELVIEW);

    // Render at new resolution
    renderScene(width, height);

    // Read pixels from the canvas
    const pixels = new Uint8Array(width * height * 4);
    gl.readPixels(
        0,
        0,
        width,
        height,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        pixels
    );

    // flip Y
    const flipped = flipPixelsY(pixels, width, height);

    // convert to canvas
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    const imageData = ctx.createImageData(width, height);
    imageData.data.set(flipped);
    ctx.putImageData(imageData, 0, 0);

    // Restore original canvas dimensions
    gl.canvas.width = originalWidth;
    gl.canvas.height = originalHeight;
    gl.canvas.style.width = (originalWidth / ratio) + 'px';
    gl.canvas.style.height = (originalHeight / ratio) + 'px';

    // Restore projection matrix for original aspect ratio
    gl.matrixMode(gl.PROJECTION);
    gl.loadIdentity();
    gl.perspective(config.params.fov, originalWidth / originalHeight, 0.01, 100);
    gl.matrixMode(gl.MODELVIEW);

    // Render once to restore the display
    renderScene(originalWidth, originalHeight);

    return new Promise(resolve => {
        canvas.toBlob(blob => {
            resolve(blob);
        }, "image/png");
    });
}