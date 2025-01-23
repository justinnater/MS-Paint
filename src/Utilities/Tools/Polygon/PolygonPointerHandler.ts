import { Point2D } from "../../../Types.ts";
import { CanvasPointerHandler } from "../../PointerHandler/CanvasPointerHandler.ts";
import { PMath } from "../../PMath.ts";

export class PolygonPointerHandler extends CanvasPointerHandler {
    protected lineWidth = 2;
    private points: Point2D[] = [];
    private snapShot: ImageData | null = null;
    private previousPoint: Point2D | null = null;
    private repeat = false;

    protected onPointerDown(event: PointerEvent): void {
        this.snapShot = this.getCanvasSnapshot();

        // If no existing points, do nothing
        if (!this.points.length) return;

        const ctx = this.getCanvasContext();
        ctx.setLineDash([]);

        const last = this.points[this.points.length - 1];
        this.previousPoint = last;

        let newPos = this.getCanvasPosition(event);

        // If clicking exactly on the last point and we have at least a triangle, close
        if (
            newPos.x === last.x &&
            newPos.y === last.y &&
            this.points.length > 2
        ) {
            newPos = this.points[0];
            this.repeat = true;
        }

        // Snap to first point if within range
        if (PMath.isPointInRangeOfPoint(this.points[0], newPos, 10)) {
            newPos = this.points[0];
        }

        this.points.push(newPos);

        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.getActiveColor();
        ctx.beginPath();
        ctx.moveTo(last.x, last.y);
        ctx.lineTo(newPos.x, newPos.y);
        ctx.stroke();

        // If we just closed the polygon
        if (this.repeat) {
            this.points = [];
        }
    }

    protected onPointerMove(event: PointerEvent): void {
        // If polygon is already closed, ignore
        if (this.repeat) return;

        // First click: store initial point
        if (!this.points.length) {
            this.points.push(this.getCanvasPosition(event));
            return;
        }

        // If we have exactly one point, set it as the previous
        if (this.points.length === 1) {
            this.previousPoint = this.points[0];
        }

        this.restoreImage();

        let pos = this.getCanvasPosition(event);
        // Snap to first point if within range
        if (PMath.isPointInRangeOfPoint(this.points[0], pos, 10)) {
            pos = this.points[0];
        }

        const ctx = this.getCanvasContext();
        ctx.setLineDash([]);
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.getActiveColor();
        ctx.beginPath();
        ctx.moveTo(this.previousPoint!.x, this.previousPoint!.y);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
    }

    protected onPointerUp(event: PointerEvent): void {
        this.repeat = false;
        if (!this.points.length) return;

        this.points.push(this.getCanvasPosition(event));

        // If releasing near the first point, finish the polygon
        if (PMath.isPointInRangeOfPoint(this.points[0], this.getCanvasPosition(event), 10) && this.points.length > 2) {
            this.points = [];
        }
    }

    private restoreImage(): void {
        this.getCanvasContext().putImageData(this.snapShot!, 0, 0);
    }

    public finalize(): void {
        this.points = [];
    }
}
