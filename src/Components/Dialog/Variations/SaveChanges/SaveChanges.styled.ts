import { styled } from "solid-styled-components";

export const TextBox = styled.div(() => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "20px",
}));

export const WarningText = styled.div(() => ({
    fontFamily: "MS Sans Serif, Arial, sans-serif",
    fontSize: "14px",
    marginLeft: "20px",
}));

export const ButtonBox = styled.div(() => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
}));
