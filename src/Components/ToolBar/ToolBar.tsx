import * as Styled from './ToolBar.styled';
import { Button } from "./Button/Button.tsx";
import { For } from "solid-js";
import { activeTool, tools } from "../../Utilities/Tools/Constants.ts";

export const ToolBar = () => {
    return (
        <Styled.Container>
            <For each={tools}>
                {(tool) => (
                    <Button tool={tool} active={tool === activeTool()} />
                )}
            </For>
        </Styled.Container>
    );
}
