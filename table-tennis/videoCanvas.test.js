import test from "node:test";
import assert from "node:assert/strict";
import { createVideoCanvas } from "./videoCanvas.js";

class Element {
    constructor() {
        this.children = [];
        this.style = {};
        this.hidden = false;
        this.listeners = {};
        const classes = new Set();
        this.classList = {
            add: name => classes.add(name),
            remove: name => classes.delete(name),
            toggle: name => classes.has(name) ? classes.delete(name) : classes.add(name),
            contains: name => classes.has(name)
        };
    }

    appendChild(child) { this.children.push(child); }
    addEventListener(type, listener) { this.listeners[type] = listener; }
    setPointerCapture(pointerId) { this.capturedPointer = pointerId; }
    hasPointerCapture(pointerId) { return this.capturedPointer === pointerId; }
    releasePointerCapture() { this.capturedPointer = undefined; }
    getBoundingClientRect() { return { left: 100, top: 50, right: 500, bottom: 350, width: 400, height: 300 }; }
    dispatch(type, properties = {}) {
        this.listeners[type]?.({
            button: 0, pointerId: 1, clientX: 100, clientY: 50,
            preventDefault() {}, stopPropagation() {}, ...properties
        });
    }
}

function fixture() {
    globalThis.document = { body: new Element(), createElement: () => new Element() };
    const canvas = new Element();
    const videoCanvas = createVideoCanvas(canvas);
    const container = videoCanvas.element;
    const handle = direction => container.children.find(child => child.className === `video-resize-handle video-resize-${direction}`);
    return { canvas, container, handle, videoCanvas };
}

test("only corners resize, preserving proportions and the opposite corner", () => {
    const { container, handle } = fixture();
    for (const side of ["n", "s", "e", "w"]) assert.equal(handle(side), undefined);
    handle("nw").dispatch("pointerdown");
    handle("nw").dispatch("pointermove", { clientX: 140, clientY: 80 });
    assert.deepEqual(container.style, { left: "140px", top: "80px", width: "360px", height: "270px" });
    handle("nw").dispatch("pointermove", { clientX: 600, clientY: 500 });
    assert.deepEqual(container.style, { left: "420px", top: "290px", width: "80px", height: "60px" });
    handle("nw").dispatch("pointerup");
    handle("nw").dispatch("pointermove", { clientX: 100, clientY: 50 });
    assert.equal(container.style.width, "80px");

    handle("ne").dispatch("pointerdown");
    handle("ne").dispatch("pointermove", { clientX: 200 });
    assert.ok(Math.abs(parseFloat(container.style.width) - 464) < 0.001);
    assert.ok(Math.abs(parseFloat(container.style.height) - 348) < 0.001);
    assert.ok(Math.abs(parseFloat(container.style.top) - 2) < 0.001);
    assert.equal(container.style.left, "100px");
});

test("fullscreen toggles on video clicks, but hidden video cannot be clicked or resized", () => {
    const { canvas, container, handle, videoCanvas } = fixture();
    canvas.dispatch("click");
    assert.equal(container.classList.contains("fullscreen"), true);
    handle("se").dispatch("pointerdown");
    assert.equal(container.classList.contains("fullscreen"), false);
    handle("se").dispatch("pointermove", { clientX: 140, clientY: 80 });
    assert.equal(container.style.height, "330px");

    videoCanvas.setVisible(false);
    canvas.dispatch("click");
    handle("se").dispatch("pointermove", { clientY: 150 });
    handle("sw").dispatch("pointerdown");
    assert.equal(container.classList.contains("fullscreen"), false);
    assert.equal(container.style.height, "330px");
    assert.equal(handle("sw").capturedPointer, undefined);
    assert.equal(handle("se").capturedPointer, undefined);
    videoCanvas.setVisible(true);
    handle("se").dispatch("pointermove", { clientY: 150 });
    assert.equal(container.style.height, "330px");
});

test("dragging moves the video without toggling fullscreen, while clicks still toggle it", () => {
    const { canvas, container } = fixture();
    canvas.dispatch("pointerdown");
    canvas.dispatch("pointermove", { clientX: 102, clientY: 51 });
    assert.deepEqual(container.style, {});
    canvas.dispatch("pointermove", { clientX: 150, clientY: 80 });
    assert.deepEqual(container.style, { left: "150px", top: "80px", width: "400px", height: "300px" });
    assert.equal(container.classList.contains("dragging"), true);
    canvas.dispatch("pointerup");
    canvas.dispatch("click");
    assert.equal(container.classList.contains("dragging"), false);
    assert.equal(container.classList.contains("fullscreen"), false);

    canvas.dispatch("pointerdown");
    canvas.dispatch("pointerup");
    canvas.dispatch("click");
    assert.equal(container.classList.contains("fullscreen"), true);

    canvas.dispatch("pointerdown");
    canvas.dispatch("pointermove", { clientX: 120, clientY: 70 });
    canvas.dispatch("pointerup");
    canvas.dispatch("click");
    assert.equal(container.classList.contains("fullscreen"), false);
    assert.equal(container.style.left, "120px");
    assert.equal(container.style.top, "70px");
});

test("hiding the video cancels an active move and releases pointer capture", () => {
    const { canvas, container, videoCanvas } = fixture();
    canvas.dispatch("pointerdown");
    canvas.dispatch("pointermove", { clientX: 120, clientY: 70 });
    videoCanvas.setVisible(false);
    assert.equal(canvas.capturedPointer, undefined);
    assert.equal(container.classList.contains("dragging"), false);
    canvas.dispatch("pointermove", { clientX: 160, clientY: 90 });
    videoCanvas.setVisible(true);
    canvas.dispatch("click");
    assert.equal(container.style.left, "120px");
    assert.equal(container.style.top, "70px");
    assert.equal(container.classList.contains("fullscreen"), false);
});
