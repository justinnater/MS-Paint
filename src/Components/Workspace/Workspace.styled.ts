import { styled } from "solid-styled-components";

export const Container = styled.div(() => ({
    width: "100%",
    height: "100%",
    backgroundColor: "#808080",
    paddingTop: "3px",
    paddingLeft: "3px",
}));

export const Canvas = styled.canvas(() => ({
    position: "absolute",
    width: "1024px",
    height: "576px",
    backgroundColor: "#ffffff",
    cursor: "crosshair",
    userSelect: "none",
    touchAction: "none",
}));
