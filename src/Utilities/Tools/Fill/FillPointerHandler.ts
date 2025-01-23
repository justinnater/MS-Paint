import { CanvasPointerHandler } from "../../PointerHandler/CanvasPointerHandler.ts";

export class FillPointerHandler extends CanvasPointerHandler {
    protected onPointerDown(event: PointerEvent): void {
        const position = this.getCanvasPosition(event);

        // Perform bucket fill at the clicked position
        this.bucketFill(position.x, position.y, this.getActiveColor());
    }

    protected onPointerMove(): void {}

    protected onPointerUp(): void {}

    private bucketFill(x: number, y: number, fillColor: string): void {
        const ctx = this.getCanvasContext();
        const canvas = ctx.canvas;

        // Get the ImageData for the entire canvas
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data;

        // Parse the fill color into RGBA
        const [fillR, fillG, fillB] = this.parseColor(fillColor);
        const fillA = 255; // Fully opaque

        // Get the starting pixel color
        const startIdx = (y * canvas.width + x) * 4;
        const startR = pixels[startIdx];
        const startG = pixels[startIdx + 1];
        const startB = pixels[startIdx + 2];
        const startA = pixels[startIdx + 3];

        // If the starting color is the same as the fill color, do nothing
        if (
            startR === fillR &&
            startG === fillG &&
            startB === fillB &&
            startA === fillA
        ) {
            return;
        }

        // Helper function to match start color
        const matchStartColor = (px: number, py: number) => {
            const idx = (py * canvas.width + px) * 4;
            return (
                pixels[idx] === startR &&
                pixels[idx + 1] === startG &&
                pixels[idx + 2] === startB &&
                pixels[idx + 3] === startA
            );
        };

        // Helper function to set pixel color
        const setPixelColor = (px: number, py: number) => {
            const idx = (py * canvas.width + px) * 4;
            pixels[idx] = fillR;
            pixels[idx + 1] = fillG;
            pixels[idx + 2] = fillB;
            pixels[idx + 3] = fillA;
        };

        // Flood fill using a queue
        const pixelStack: [number, number][] = [[x, y]];

        while (pixelStack.length) {
            const [px, py] = pixelStack.pop()!;
            if (px < 0 || py < 0 || px >= canvas.width || py >= canvas.height) {
                continue;
            }
            if (!matchStartColor(px, py)) {
                continue;
            }

            setPixelColor(px, py);

            // Add neighboring pixels to the stack
            pixelStack.push([px + 1, py]);
            pixelStack.push([px - 1, py]);
            pixelStack.push([px, py + 1]);
            pixelStack.push([px, py - 1]);
        }

        // Update the canvas with the new ImageData
        ctx.putImageData(imageData, 0, 0);
    }

    private parseColor(color: string): [number, number, number] {
        // Convert a CSS color string (e.g., "#ff0000", "rgb(255,0,0)") to RGB values
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d")!;
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, 1, 1);
        const data = ctx.getImageData(0, 0, 1, 1).data;
        return [data[0], data[1], data[2]];
    }
}
