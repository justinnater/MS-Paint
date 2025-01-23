import { Point2D } from "../../../Types.ts";
import { Tool } from "../Tool.ts";
import { BrushPointerHandler } from "./BrushPointerHandler.ts";

export class BrushTool extends Tool {
    public imagePosition: Point2D = { x: -112, y: 0 };
    public pointerHandler = new BrushPointerHandler();
}
