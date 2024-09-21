import { styled } from "solid-styled-components";

export const Container = styled.div(({ theme }) => ({
    width: "100%",
    height: "23px",
    backgroundColor: theme.colors.primary,
    borderTop: "1px solid #000",
    bottom: 0,
}));
