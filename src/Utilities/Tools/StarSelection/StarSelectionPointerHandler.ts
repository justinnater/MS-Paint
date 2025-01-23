import { SelectionPointerHandler } from "../Abstractions/SelectionPointerHandler.ts";

export class StarSelectionPointerHandler extends SelectionPointerHandler {
    protected onPointerMove(event: PointerEvent): void {
        super.onPointerMove(event);

        // loop through the points and draw the lines
        for (let i = 0; i < this.points.length; i++) {
            const point = this.points[i];
            const nextPoint = this.points[i + 1];

            if (nextPoint) {
                this.getCanvasContext().beginPath();
                this.getCanvasContext().moveTo(point.x, point.y);
                this.getCanvasContext().lineTo(nextPoint.x, nextPoint.y);
                this.getCanvasContext().stroke();
            }
        }
    }
}
