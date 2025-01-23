import { DrawingPointerHandler } from "../Abstractions/DrawingPointerHandler.ts";

export class EraserPointerHandler extends DrawingPointerHandler {
    protected lineWidth: number = 10;

    protected getActiveColor(): string {
        return this.getSecondaryColor();
    }
}
