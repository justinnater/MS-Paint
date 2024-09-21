import { styled } from "solid-styled-components";

export const Container = styled.div(({ theme, isClickable }) => ({
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
}));

export const SubContainer = styled.div(({ theme, isClickable }) => ({
    display: "flex",
    flexDirection: "row",
    height: "calc(100% - 90px)",
}));
