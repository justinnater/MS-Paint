import { CanvasPointerHandler } from "../../PointerHandler/CanvasPointerHandler.ts";

export abstract class DrawingPointerHandler extends CanvasPointerHandler {
    protected abstract lineWidth: number;

    protected onPointerDown(event: PointerEvent): void {
        const position = this.getCanvasPosition(event);

        this.getCanvasContext().setLineDash([]);
        this.getCanvasContext().lineWidth = this.lineWidth;
        this.getCanvasContext().beginPath();
        this.getCanvasContext().strokeStyle = this.getActiveColor();
        this.getCanvasContext().moveTo(position.x, position.y);
    }

    protected onPointerMove(event: PointerEvent): void {
        const position = this.getCanvasPosition(event);

        this.getCanvasContext().lineTo(position.x, position.y);
        this.getCanvasContext().stroke();
    }

    protected onPointerUp(): void {
        this.getCanvasContext().closePath();
    }
}
