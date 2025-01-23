import { styled } from "solid-styled-components";

export const Container = styled.div(() => ({
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    overflow: "hidden",
}));

export const SubContainer = styled.div(() => ({
    display: "flex",
    flexDirection: "row",
    height: "calc(100% - 90px)",
}));
