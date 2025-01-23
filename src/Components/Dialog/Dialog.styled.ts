import { styled } from "solid-styled-components";

export const Container = styled.div(() => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    border: "1px solid #000",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

export const ContentBox = styled.div(() => ({
    position: "relative",
    width: "375px",
    backgroundColor: "#c0c0c0",
    borderLeft: "1px solid #fff",
    borderTop: "1px solid #fff",
    borderBottom: "1px solid #000",
    borderRight: "1px solid #000",
    padding: "3px",
    pointerEvents: "auto",
    cursor: "default",
    userSelect: "none",
}));

export const Header = styled.div(() => ({
    width: "100%", // Reduce width by 5px on each side
    height: "20px", // Reduce height by 5px on top and bottom
    background: "linear-gradient(to right, #0300a3, #0080ff)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}));

export const HeaderText = styled.span(() => ({
    padding: "5px",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "bold",
    fontFamily: "Arial",
}));

export const Button = styled.button(() => ({
    border: "none",
    background: "none",
    cursor: "pointer",
    margin: "0",
    backgroundColor: "#c0c0c0",
    borderLeft: "1px solid #fff",
    borderTop: "1px solid #fff",
    borderBottom: "1px solid #000",
    borderRight: "1px solid #000",
    padding: "4px",
    marginRight: "2px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:active": {
        borderLeft: "1px solid #000",
        borderTop: "1px solid #000",
        borderBottom: "1px solid #fff",
        borderRight: "1px solid #fff",
    },
}));
