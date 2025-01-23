import { CanvasUpdatesPointerHandler } from "../Abstractions/CanvasUpdatesPointerHandler.ts";

export class EllipsePointerHandler extends CanvasUpdatesPointerHandler {
    protected lineWidth: number = 2;

    protected onPointerMove(event: PointerEvent): void {
        this.restoreImage(); // Restore the canvas to its previous state

        const position = this.getCanvasPosition(event);
        const ctx = this.getCanvasContext();

        // Calculate the center of the circle/ellipse
        const centerX = (this.startPoint!.x + position.x) / 2;
        const centerY = (this.startPoint!.y + position.y) / 2;

        // Calculate the radii
        const radiusX = Math.abs(position.x - this.startPoint!.x) / 2;
        const radiusY = Math.abs(position.y - this.startPoint!.y) / 2;

        // Draw the ellipse
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
        ctx.stroke();
    }

    protected onPointerUp(): void {}
}
