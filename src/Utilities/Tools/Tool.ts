import { Point2D } from "../../Types.ts";
import { CanvasPointerHandler } from "../PointerHandler/CanvasPointerHandler.ts";

export abstract class Tool {
    public abstract imagePosition: Point2D;

    public pointerHandler?: CanvasPointerHandler = undefined;

    public onToolClose(): void {}
    public onToolOpen(): void {}
}
