import { styled } from "solid-styled-components";

export const Container = styled.div(({ theme }) => ({
    width: "100%",
    height: "20px",
    backgroundColor: theme.colors.primary,
    borderBottom: "1px solid #000",
}));
