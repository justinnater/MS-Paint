import * as Styled from './Button.styled';
import { Tool } from "../../../Utilities/Tools/Tool.ts";
import { setActiveTool } from "../../../Utilities/Tools/Constants.ts";

export type ButtonProps = {
    tool: Tool;
    active: boolean;
}

// Button solid component with props color: string
export const Button = (props: ButtonProps) => {
    return (
        <Styled.Container
            active={props.active}
            onClick={() => setActiveTool(props.tool)}
        >
            <Styled.ToolImage imagePos={props.tool.imagePosition} />
        </Styled.Container>
    );
}
