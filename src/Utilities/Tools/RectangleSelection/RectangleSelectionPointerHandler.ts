import { SelectionPointerHandler } from "../Abstractions/SelectionPointerHandler.ts";

export class RectangleSelectionPointerHandler extends SelectionPointerHandler {
    protected onPointerMove(event: PointerEvent): void {
        super.onPointerMove(event);

        if (this.points.length !== 1) this.points = [this.points[0], this.getCanvasPosition(event)];

        const rectangle = this.getRectangle();

        this.getCanvasContext().beginPath();
        this.getCanvasContext().rect(rectangle.x, rectangle.y, rectangle.w, rectangle.h);
        this.getCanvasContext().setLineDash([3, 3]);
        this.getCanvasContext().stroke();
    }
}
