import { Point2D } from "../../../Types.ts";
import { Tool } from "../Tool.ts";
import { PickColorPointerHandler } from "./PickColorPointerHandler.ts";

export class PickColorTool extends Tool {
    public imagePosition: Point2D = { x: -64, y: 0 };
    public pointerHandler = new PickColorPointerHandler();
}
