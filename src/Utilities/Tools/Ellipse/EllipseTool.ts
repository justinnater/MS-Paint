import { Point2D } from "../../../Types.ts";
import { Tool } from "../Tool.ts";
import { EllipsePointerHandler } from "./EllipsePointerHandler.ts";

export class EllipseTool extends Tool {
    public imagePosition: Point2D = { x: -224, y: 0 };
    public pointerHandler = new EllipsePointerHandler();
}
