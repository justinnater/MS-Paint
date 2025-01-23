import { Point2D } from "../../../Types.ts";
import { Tool } from "../Tool.ts";
import { AirBrushPointerHandler } from "./AirBrushPointerHandler.ts";

export class AirbrushTool extends Tool {
    public imagePosition: Point2D = { x: -128, y: 0 };
    public pointerHandler = new AirBrushPointerHandler();
}
