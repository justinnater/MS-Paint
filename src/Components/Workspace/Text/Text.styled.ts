import { styled } from "solid-styled-components";
import { activeColor } from "../../ColorBar/State.ts";
import { text } from "./Text.tsx";

export const Container = styled.div(() => ({
    position: "absolute",
    width: "1024px",
    height: "576px",
    pointerEvents: "none",
    overflow: "hidden",
}));

export const Input = styled.input(() => ({
    position: "absolute",
    pointerEvents: "all",
    width: "100%",
    border: "none",
    background: "none",
    fontSize: "16px",
    fontFamily: "Arial",
    outline: "none",
    color: activeColor(),
    left: `${text()?.position.x}px`,
    top: `${text()?.position.y}px`,
}));

