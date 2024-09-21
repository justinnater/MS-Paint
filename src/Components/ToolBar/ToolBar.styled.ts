import { styled } from "solid-styled-components";

export const Container = styled.div(({ theme }) => ({
    position: "relative",
    width: "56px",
    height: "100%",
    borderRight: "1px solid #000",
    backgroundColor: theme.colors.primary,
}));
