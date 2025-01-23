import { Point2D } from "../../../Types.ts";
import { Tool } from "../Tool.ts";
import { EraserPointerHandler } from "./EraserPointerHandler.ts";

export class EraserTool extends Tool {
    public imagePosition: Point2D = { x: -32, y: 0 };
    public pointerHandler = new EraserPointerHandler();
}
