import { Point2D } from "../../../Types.ts";
import { Tool } from "../Tool.ts";
import { RectanglePointerHandler } from "./RectanglePointerHandler.ts";

export class RectangleTool extends Tool {
    public imagePosition: Point2D = { x: -192, y: 0 };
    public pointerHandler = new RectanglePointerHandler();
}
