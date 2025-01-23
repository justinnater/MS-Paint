import * as Styled from "./Dialog.styled.ts";
import { JSXElement } from "solid-js";

export type ButtonProps = {
    onClick: () => void;
    fontSize: number;
    children: JSXElement;
    width?: number;
    height?: number;
}

export const Button = (props: ButtonProps) => {

    return (
        <Styled.Button
            style={{
                "font-size": `${props.fontSize}px`,
                "width": `${props.width ?? "none"}px`,
                "height": `${props.height ?? "none"}px`,
            }}
            onClick={props.onClick}
        >
            {props.children}
        </Styled.Button>
    );
}
