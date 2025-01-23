import { styled } from "solid-styled-components";
import { Point2D } from "../../../Types.ts";

export const Container = styled.div<{active: boolean}>(({ active }) => ({
    width: "25px",
    height: "25px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid #000",
    borderRight: "1px solid #000",
    margin: "0px",
    padding: "0px",
    borderTop: "1px solid #fff",
    borderLeft: "1px solid #fff",
    ...(active && {
        borderTop: "1px solid #000",
        borderLeft: "1px solid #000",
    }),
}));

export const ToolImage = styled.span<{imagePos: Point2D}>(({ imagePos }) => ({
    display: "block",
    width: "16px",
    height: "16px",
    backgroundImage: "url('/tools.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: `${imagePos.x}px -${imagePos.y}px`,
}));
