import { createEffect, createSignal } from "solid-js";
import * as Styled from "./Selection.styled.ts";
import { SelectionPointerHandler } from "./SelectionPointerHandler.ts";
import ClickAwayListener from "../../ClickAwayListener/ClickAwayListener.tsx";
import { SelectionProps } from "./Type.ts";
import { mergeSelection } from "./Selection.helper.ts";

export const [selection, setSelection] = createSignal<SelectionProps | undefined>(undefined);

export const Selection = () => {
    createEffect(() => {
        const selectionData = selection();
        if (!selectionData) return;

        const canvas = document.getElementById("selection-box") as HTMLCanvasElement;
        const context = canvas.getContext("2d")!;

        canvas.width = selectionData.size.x;
        canvas.height = selectionData.size.y;

        context.putImageData(selectionData.imageData, 0, 0);
    });

    return (
        <Styled.Container>
            {selection() && (
                <ClickAwayListener onClickAway={() => mergeSelection()}>
                    <Styled.SelectionBox
                        id={"selection-box"}
                        onPointerDown={(event: PointerEvent) => {
                            new SelectionPointerHandler().startPointerEventHandler(event);
                        }}
                    />
                </ClickAwayListener>
            )}
        </Styled.Container>
    );
}
