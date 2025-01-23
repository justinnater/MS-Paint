import { CanvasUpdatesPointerHandler } from "../Abstractions/CanvasUpdatesPointerHandler.ts";

export class RectanglePointerHandler extends CanvasUpdatesPointerHandler {
    protected lineWidth: number = 2;

    protected onPointerMove(event: PointerEvent): void {
        this.restoreImage();
        const position = this.getCanvasPosition(event);

        this.getCanvasContext().beginPath();
        this.getCanvasContext().rect(this.startPoint!.x, this.startPoint!.y, position.x - this.startPoint!.x, position.y - this.startPoint!.y);
        this.getCanvasContext().stroke();
    }

    protected onPointerUp(): void {}
}
