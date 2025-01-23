import { CanvasUpdatesPointerHandler } from "../Abstractions/CanvasUpdatesPointerHandler.ts";

export class LinePointerHandler extends CanvasUpdatesPointerHandler {
    protected lineWidth: number = 2;

    protected onPointerMove(event: PointerEvent): void {
        this.restoreImage();
        const position = this.getCanvasPosition(event);

        this.getCanvasContext().beginPath();
        this.getCanvasContext().moveTo(this.startPoint!.x, this.startPoint!.y);
        this.getCanvasContext().lineTo(position.x, position.y);
        this.getCanvasContext().stroke();
    }

    protected onPointerUp(): void {}
}
