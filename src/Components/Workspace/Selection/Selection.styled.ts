import { styled } from "solid-styled-components";
import { selection } from "./Selection.tsx";

export const Container = styled.div(() => ({
    position: "absolute",
    width: "1024px",
    height: "576px",
    pointerEvents: "none",
    overflow: "hidden",
}));

export const SelectionBox = styled.canvas(() => ({
    position: "absolute",
    width: `${selection()?.size.x}px`,
    height: `${selection()?.size.y}px`,
    left: `${selection()?.position.x}px`,
    top: `${selection()?.position.y}px`,
    outline: "1px dashed #000",
    pointerEvents: "all",
}));
