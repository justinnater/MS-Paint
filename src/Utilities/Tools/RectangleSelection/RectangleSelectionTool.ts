import { Point2D } from "../../../Types.ts";
import { Tool } from "../Tool.ts";
import { RectangleSelectionPointerHandler } from "./RectangleSelectionPointerHandler.ts";

export class RectangleSelectionTool extends Tool {
    public imagePosition: Point2D = { x: -16, y: 0 };
    public pointerHandler = new RectangleSelectionPointerHandler();
}
