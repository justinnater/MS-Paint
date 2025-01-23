import { styled } from "solid-styled-components";

export const Container = styled.div(({ theme }) => ({
    position: "absolute",
    width: "100%",
    height: "47px",
    backgroundColor: theme.colors.primary,
    bottom: "23px",
    borderTop: "1px solid #000",
    display: "flex",
    alignItems: "center",
    paddingTop: "8px",
    paddingBottom: "8px",
    paddingLeft: "2px",
    boxSizing: "border-box",
    overflow: "hidden",
}));

export const Content = styled.div(() => ({
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "34px",
    width: "256px",
    borderBottom: "1px solid #fff",
    borderRight: "1px solid #fff",
}));

export const List = styled.div(() => ({
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(14, 15px)",
    columnGap: "1px",
    rowGap: "2px",
    width: "50px",
}));
