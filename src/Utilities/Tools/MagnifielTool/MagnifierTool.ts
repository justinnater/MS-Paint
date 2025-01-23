import { Point2D } from "../../../Types.ts";
import { Tool } from "../Tool.ts";

export class MagnifierTool extends Tool {
    public imagePosition: Point2D = { x: -80, y: 0 };
}
