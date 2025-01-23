import { styled } from "solid-styled-components";

export const Container = styled.div(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    justifyContent: "center",
    fontFamily: "MS Sans Serif, Arial, sans-serif",
    fontSize: "14px",
    width: "100%",
    paddingTop: "5px",
}));

export const Input = styled.input(() => ({
    width: "150px",
}));

export const Select = styled.select(() => ({
    width: "157px",
}));

export const Item = styled.div(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: "10px",
}));

export const ItemTextBox = styled.div(() => ({
    width: "110px",
    textAlign: "right",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
}));

export const ItemText = styled.div(() => ({
    width: "100px",
    textAlign: "left",
}));
