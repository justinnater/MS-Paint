import { Point2D } from "../../../Types.ts";
import { Tool } from "../Tool.ts";
import { TextPointerHandler } from "./TextPointerHandler.ts";

export class TextTool extends Tool {
    public imagePosition: Point2D = { x: -144, y: 0 };
    public pointerHandler = new TextPointerHandler();
}
