import * as Styled from "./Workspace.styled.ts";
import { activeTool } from "../../Utilities/Tools/Constants.ts";
import { Selection } from "./Selection/Selection.tsx";
import { onMount } from "solid-js";
import { Text } from "./Text/Text.tsx";
import { resetCanvas } from "../../Utilities/Canvas.ts";

export const Workspace = () => {

    onMount(() => {
        resetCanvas();
    });

    return (
        <Styled.Container>
            <Styled.Canvas
                id="canvas"
                width={1024}
                height={576}
                onPointerDown={(event: PointerEvent) => {
                    activeTool().pointerHandler?.startPointerEventHandler(event);
                }}
              />
            <Selection />
            <Text />
        </Styled.Container>
    );
}
