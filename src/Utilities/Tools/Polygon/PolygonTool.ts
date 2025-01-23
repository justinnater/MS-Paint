import { Point2D } from "../../../Types.ts";
import { Tool } from "../Tool.ts";
import { PolygonPointerHandler } from "./PolygonPointerHandler.ts";

export class PolygonTool extends Tool {
    public imagePosition: Point2D = { x: -208, y: 0 };
    public pointerHandler = new PolygonPointerHandler();

    public onToolClose() {
        this.pointerHandler.finalize();
    }
}
