import { PointerEventHandler } from "../../../Utilities/PointerHandler/PointerEventHandler.ts";
import { Point2D } from "../../../Types.ts";
import { setSelection, selection } from "./Selection.tsx";

export class SelectionPointerHandler extends PointerEventHandler {

    private initialPointerPosition: Point2D = { x: 0, y: 0 };

    public onPointerDown(event: PointerEvent): void {
        this.initialPointerPosition = { x: event.clientX, y: event.clientY };
    }

    public onPointerMove(event: PointerEvent): void {
        const deltaX = event.clientX - this.initialPointerPosition.x;
        const deltaY = event.clientY - this.initialPointerPosition.y;

        const selectionData = selection();
        if (!selectionData) return;

        setSelection({
            ...selectionData,
            position: {
                x: selectionData.position.x + deltaX,
                y: selectionData.position.y + deltaY
            }
        })

        this.initialPointerPosition = { x: event.clientX, y: event.clientY };
    }

    public onPointerUp(): void {}
}
