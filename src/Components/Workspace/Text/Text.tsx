import { createEffect, createSignal } from "solid-js";
import * as Styled from "./Text.styled.ts";
import ClickAwayListener from "../../ClickAwayListener/ClickAwayListener.tsx";
import { Point2D } from "../../../Types.ts";
import { activeColor } from "../../ColorBar/State.ts";

export type TextProps = {
    position: Point2D;
    text: string;
}

export const [text, setText] = createSignal<TextProps>(undefined);

export const mergeText = () => {
    const textData = text();
    if (!textData) return;

    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d")!;
    context.font = "16px Arial";
    context.fillStyle = activeColor();
    context.fillText(textData.text, textData.position.x + 2, textData.position.y + 16);

    setText(undefined);
}

export const Text = () => {
    createEffect(() => {
        if (text()) { // Ensure `text` is set before trying to focus
            requestAnimationFrame(() => {
                const input = document.getElementById("text") as HTMLInputElement;
                input?.focus();
            })
        }
    });
    return (
        <Styled.Container>
            {text() && (
                <ClickAwayListener onClickAway={() => {
                    mergeText();
                }}>
                    <Styled.Input
                        id="text"
                        type="text"
                        onInput={(event) => {
                            setText({
                                position: text()?.position,
                                text: (event.target as HTMLInputElement).value
                            });
                        }}
                    />
                </ClickAwayListener>
            )}
        </Styled.Container>
    );
}
