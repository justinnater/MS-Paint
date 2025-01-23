import { Point2D } from "../../../Types.ts";
import { Tool } from "../Tool.ts";
import { LinePointerHandler } from "./LinePointerHandler.ts";

export class LineTool extends Tool {
    public imagePosition: Point2D = { x: -160, y: 0 };
    public pointerHandler = new LinePointerHandler();
}
