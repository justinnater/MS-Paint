import { PointerEventHandler } from "./PointerEventHandler.ts";
import { Point2D } from "../../Types.ts";
import { activeColor, secondaryColor } from "../../Components/ColorBar/State.ts";

export abstract class CanvasPointerHandler extends PointerEventHandler {
    protected getCanvasPosition(event: PointerEvent): Point2D {
        const rect = this.getCanvas().getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        return { x, y };
    }

    protected getCanvas(): HTMLCanvasElement {
        return document.getElementById("canvas") as HTMLCanvasElement;
    }

    protected getCanvasContext(): CanvasRenderingContext2D {
        return this.getCanvas().getContext("2d") as CanvasRenderingContext2D;
    }

    protected getCanvasSnapshot(): ImageData {
        return this.getCanvasContext().getImageData(0, 0, this.getCanvas().width, this.getCanvas().height);
    }

    protected getActiveColor(): string {
        return activeColor();
    }

    protected getSecondaryColor(): string {
        return secondaryColor();
    }
}
