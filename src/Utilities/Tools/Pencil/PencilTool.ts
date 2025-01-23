import { Point2D } from "../../../Types.ts";
import { Tool } from "../Tool.ts";
import { PencilPointerHandler } from "./PencilPointerHandler.ts";

export class PencilTool extends Tool {
    public imagePosition: Point2D = { x: -96, y: 0 };

    public pointerHandler = new PencilPointerHandler();
}
