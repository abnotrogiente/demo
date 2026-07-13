import { CanvasTexture, LinearFilter } from "three";


export class CanvasTextTexture {
    constructor({
        width = 512,
        height = 256,
        background = "transparent",
        color = "white",
        font = "bold 48px Inter, sans-serif",
        padding = 20,
    } = {}) {

        this.canvas = document.createElement("canvas");
        this.canvas.width = width;
        this.canvas.height = height;

        this.ctx = this.canvas.getContext("2d");

        this.texture = new CanvasTexture(this.canvas);
        this.texture.minFilter = LinearFilter;
        this.texture.magFilter = LinearFilter;
        this.texture.generateMipmaps = false;

        this.background = background;
        this.color = color;
        this.font = font;
        this.padding = padding;

        this.text = "";
    }

    setText(text) {
        this.text = text;
        this.redraw();
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawBackground() {
        if (this.background !== "transparent") {
            this.ctx.fillStyle = this.background;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }

    }

    drawText() {
        this.ctx.font = this.font;
        this.ctx.fillStyle = this.color;
        this.ctx.textBaseline = "top";

        this.ctx.fillText(
            this.text,
            this.padding,
            this.padding
        );
    }

    redraw() {
        this.clear();
        this.drawBackground();
        this.drawText();



        this.texture.needsUpdate = true;
    }
}