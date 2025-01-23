import { styled } from "solid-styled-components";
import { Point2D } from "../../../Types.ts";

export const Container = styled.div(({ theme }) => ({
    width: "30px",
    height: "30px",
    bottom: "23px",
    borderTop: `1px solid ${theme.button.normal}`,
    borderRight: `1px solid ${theme.button.light}`,
    borderBottom: `1px solid ${theme.button.normal}`,
    boxShadow: `1px 1px 0px ${theme.button.dark} inset`,
    backgroundColor: theme.button.light,
}));

export const Block = styled.div<Point2D & { color: string }>(({ x, y, color }) => ({
    position: "absolute",
    left: `${x}px`,
    top: `${y}px`,
    width: "14px",
    height: "14px",
    backgroundColor: color,
    border: `1px solid #808080`,
    borderTop: `1px solid #ffffff`,
    borderLeft: `1px solid #ffffff`,
}));
