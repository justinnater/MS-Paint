import { Point2D } from "../../../Types.ts";
import { Tool } from "../Tool.ts";
import { StarSelectionPointerHandler } from "./StarSelectionPointerHandler.ts";

export class StarSelectionTool extends Tool {
    public imagePosition: Point2D = { x: 0, y: 0 };
    public pointerHandler = new StarSelectionPointerHandler();
}
