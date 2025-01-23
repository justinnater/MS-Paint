import { CanvasPointerHandler } from "../../PointerHandler/CanvasPointerHandler.ts";
import { setActiveColor } from "../../../Components/ColorBar/State.ts";
import { pencilTool, setActiveTool } from "../Constants.ts";

export class PickColorPointerHandler extends CanvasPointerHandler {
    protected onPointerDown(event: PointerEvent): void {
        this.updateColor(event);
    }

    protected onPointerMove(event: PointerEvent): void {
        this.updateColor(event);
    }

    protected onPointerUp(): void {
        setActiveTool(pencilTool);
    }

    private updateColor(event: PointerEvent): void {
        const position = this.getCanvasPosition(event);
        const color = this.getCanvasContext().getImageData(position.x, position.y, 1, 1).data;
        setActiveColor(`rgb(${color[0]}, ${color[1]}, ${color[2]})`);
    }
}

