import { Point2D } from "../../../Types.ts";
import { Tool } from "../Tool.ts";
import { FillPointerHandler } from "./FillPointerHandler.ts";

export class FillTool extends Tool {
    public imagePosition: Point2D = { x: -48, y: 0 };
    public pointerHandler = new FillPointerHandler();
}
