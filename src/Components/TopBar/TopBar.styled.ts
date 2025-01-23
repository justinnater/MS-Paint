import { styled } from "solid-styled-components";

export const Container = styled.div(({ theme }) => ({
    width: "100%",
    height: "20px",
    backgroundColor: theme.colors.primary,
    borderBottom: "1px solid #000",
    display: "flex",
    alignItems: "center",
}));

export const Item = styled.div(() => ({
    position: "relative",
    height: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "5px",
    paddingRight: "5px",
    fontFamily: "Arial",
    fontSize: "12px",
    boxSizing: "border-box", // Include padding and border in the element's total width/height
    border: "1px solid transparent", // Set transparent border by default
    cursor: "default",
    "&:hover": {
        borderTopColor: "#ffffff",
        borderLeftColor: "#ffffff",
        borderRightColor: "#000",
        borderBottomColor: "#000",
    },
    // Apply underline or bottom border to first letter
    "&::first-letter": {
        textDecoration: "underline", // Use underline
        borderBottom: "2px solid red", // For better visibility during debugging
        paddingBottom: "1px", // Ensure space for the border
    },
}));

export const FirstLetter = styled.span(() => ({
    borderBottom: "1px solid #606060",
    paddingBottom: "0px",
    lineHeight: "1",
    display: "inline-block",
}));
