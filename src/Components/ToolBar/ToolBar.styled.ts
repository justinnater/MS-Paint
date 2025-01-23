import { styled } from "solid-styled-components";

export const Container = styled.div(({ theme }) => ({
    position: "relative",
    minWidth: "56px",
    maxWidth: "56px",
    height: "100%",
    borderRight: "1px solid #000",
    backgroundColor: theme.colors.primary,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "start",
    justifyContent: "end",
    paddingRight: "2px",
}));
