import { CanvasPointerHandler } from "../../PointerHandler/CanvasPointerHandler.ts";
import { setText, text } from "../../../Components/Workspace/Text/Text.tsx";

export class TextPointerHandler extends CanvasPointerHandler {
    protected onPointerDown(event: PointerEvent): void {
        if (text() !== undefined) return;
        const position = this.getCanvasPosition(event);
        setText({
            position: {
                x: position.x,
                y: position.y - 8
            },
            text: ""
        });
    }

    protected onPointerMove(): void {}

    protected onPointerUp(): void {}

}
