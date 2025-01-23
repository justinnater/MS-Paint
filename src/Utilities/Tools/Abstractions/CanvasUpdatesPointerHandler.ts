import { CanvasPointerHandler } from "../../PointerHandler/CanvasPointerHandler.ts";
import { Point2D } from "../../../Types.ts";

export abstract class CanvasUpdatesPointerHandler extends CanvasPointerHandler {
    protected abstract lineWidth: number;
    protected startPoint: Point2D | null = null;

    protected canvasSnapshot: ImageData | null = null;

    protected onPointerDown(event: PointerEvent): void {
        this.startPoint = this.getCanvasPosition(event);
        this.canvasSnapshot = this.getCanvasSnapshot();

        this.getCanvasContext().lineWidth = this.lineWidth;
        this.getCanvasContext().setLineDash([]);
        this.getCanvasContext().strokeStyle = this.getActiveColor();
        this.getCanvasContext().beginPath();
    }

    protected restoreImage(): void {
        this.getCanvasContext().putImageData(this.canvasSnapshot!, 0, 0);
    }
}
