import { CanvasUpdatesPointerHandler } from "../Abstractions/CanvasUpdatesPointerHandler.ts";

export class RoundedRectanglePointerHandler extends CanvasUpdatesPointerHandler {
    protected lineWidth: number = 2;

    // create a rectangle with rounded corners
    protected onPointerMove(event: PointerEvent): void {
        this.restoreImage();
        const position = this.getCanvasPosition(event);

        const ctx = this.getCanvasContext();

        // Determine the top-left corner and dimensions, accounting for direction
        const x = Math.min(this.startPoint!.x, position.x);
        const y = Math.min(this.startPoint!.y, position.y);
        const width = Math.abs(position.x - this.startPoint!.x);
        const height = Math.abs(position.y - this.startPoint!.y);

        // Calculate a dynamic radius based on the rectangle's dimensions
        const maxRadius = 20; // Maximum radius for large rectangles
        const radius = Math.min(maxRadius, width / 2, height / 2);

        ctx.beginPath();

        // Top-left corner
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y); // Top edge
        ctx.arcTo(x + width, y, x + width, y + radius, radius); // Top-right corner
        ctx.lineTo(x + width, y + height - radius); // Right edge
        ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius); // Bottom-right corner
        ctx.lineTo(x + radius, y + height); // Bottom edge
        ctx.arcTo(x, y + height, x, y + height - radius, radius); // Bottom-left corner
        ctx.lineTo(x, y + radius); // Left edge
        ctx.arcTo(x, y, x + radius, y, radius); // Top-left corner

        ctx.stroke();
    }



    protected onPointerUp(): void {}
}
