import * as Styled from "./SaveChanges.styled.ts";
import { Button } from "../../Button.tsx";
import { setDialog } from "../../Dialog.tsx";
import { dontSave, save } from "./SaveChanges.helper.ts";

export const SaveChanges = () => {
    return (
        <>
            <Styled.TextBox>
                <img src="/warning.png" alt="vite"/>
                <Styled.WarningText>
                    Save changes to untitled?
                </Styled.WarningText>
            </Styled.TextBox>
            <Styled.ButtonBox>
                <Button fontSize={12} onClick={save} width={65}>Save</Button>
                <Button fontSize={12} onClick={dontSave} width={65}>No</Button>
                <Button fontSize={12} onClick={() => setDialog(undefined)} width={65}>Cancel</Button>
            </Styled.ButtonBox>
        </>
    );
}
