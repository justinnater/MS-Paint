import { CanvasUpdatesPointerHandler } from "./CanvasUpdatesPointerHandler.ts";
import { setSelection } from "../../../Components/Workspace/Selection/Selection.tsx";
import { Point2D } from "../../../Types.ts";

export class SelectionPointerHandler extends CanvasUpdatesPointerHandler {
    protected lineWidth: number = 2;
    protected points: Point2D[] = [];

    private isMoving: boolean = false;

    protected onPointerDown(event: PointerEvent): void {
        this.isMoving = false;
        this.points = [this.getCanvasPosition(event)];
        super.onPointerDown(event);
        this.getCanvasContext().strokeStyle = "black";
    }

    protected onPointerMove(event: PointerEvent): void {
        if (!this.isMoving) this.canvasSnapshot = this.getCanvasSnapshot();

        this.isMoving = true;
        this.points.push(this.getCanvasPosition(event));

        this.restoreImage();
    }

    protected onPointerUp(): void {
        if (!this.isMoving) return;

        const rectangle = this.getRectangle();

        this.restoreImage();

        if (rectangle.w === 0 || rectangle.h === 0) return;

        const snapshot = this.getCanvasContext().getImageData(rectangle.x, rectangle.y, rectangle.w, rectangle.h);

        this.getCanvasContext().fillStyle = this.getSecondaryColor();
        this.getCanvasContext().fillRect(rectangle.x, rectangle.y, rectangle.w, rectangle.h);

        setSelection({
            position: { x: rectangle.x, y: rectangle.y },
            size: { x: rectangle.w, y: rectangle.h },
            imageData: snapshot,
            active: true,
        });
    }

    protected getRectangle(): { x: number; y: number; w: number; h: number } {
        if (this.points.length === 0) {
            return { x: 0, y: 0, w: 0, h: 0 };
        }

        const canvas = this.getCanvas();
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        // Calculate min and max x, y values from points
        const minX = Math.max(0, Math.min(...this.points.map(point => point.x)));
        const minY = Math.max(0, Math.min(...this.points.map(point => point.y)));
        const maxX = Math.min(canvasWidth, Math.max(...this.points.map(point => point.x)));
        const maxY = Math.min(canvasHeight, Math.max(...this.points.map(point => point.y)));

        // Return the clamped rectangle dimensions
        return {
            x: minX,
            y: minY,
            w: Math.max(0, maxX - minX),
            h: Math.max(0, maxY - minY),
        };
    }
}
