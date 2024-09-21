import { styled } from "solid-styled-components";

export const Container = styled.div<{color: string;}>(({ color }) => ({
    width: "12x",
    height: "12px",
    backgroundColor: color,
    borderTop: "2px solid #000",
    borderLeft: "1px solid #000",
    borderRight: "2px solid #c0c0c0",
}));
