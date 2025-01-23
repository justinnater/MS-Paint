import { styled } from "solid-styled-components";

export const Container = styled.div(() => ({
    position: "absolute",
    left: "0",
    top: "auto",
    bottom: "0",
    transform: "translateY(100%)",
    backgroundColor: "#c0c0c0",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    borderLeft: "1px solid #ffffff",
    borderTop: "1px solid #ffffff",
    borderRight: "1px solid #000000",
    borderBottom: "1px solid #000000",
}));

export const Button = styled.button(() => ({
    fontSize: "12px",
    border: "none",
    background: "none",
    paddingLeft: "20px",
    paddingRight: "20px",
    textAlign: "center",
    backgroundColor: "#c0c0c0",
    marginLeft: "2px",
    marginRight: "2px",
    "&:hover": {
        backgroundColor: "#0300a3",
        color: "#ffffff",
    },
}));
