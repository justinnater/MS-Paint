import { Point2D } from "../../../Types.ts";
import { Tool } from "../Tool.ts";
import { RoundedRectanglePointerHandler } from "./RoundedRectanglePointerHandler.ts";

export class RoundedRectangleTool extends Tool {
    public imagePosition: Point2D = { x: -240, y: 0 };
    public pointerHandler = new RoundedRectanglePointerHandler();
}
