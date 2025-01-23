import * as Styled from "./SaveAs.styled.ts";
import { Button } from "../../Button.tsx";
import { setDialog } from "../../Dialog.tsx";
import { save, SaveType } from "./SaveAs.helper.ts";

export const SaveAs = () => {
    return (
        <Styled.Container>
            <Styled.Item>
                <Styled.ItemText>File Name:</Styled.ItemText>
                <Styled.Input id="save-input" type="text" value="untitled"/>
                <Styled.ItemTextBox>
                    <Button onClick={save} fontSize={14} width={70}>Save</Button>
                </Styled.ItemTextBox>
            </Styled.Item>
            <Styled.Item>
                <Styled.ItemText>Save As Type:</Styled.ItemText>
                <Styled.Select id="save-select">
                    <option value={SaveType.PNG}>PNG</option>
                    <option value={SaveType.JPG}>JPG</option>
                    <option value={SaveType.BMP}>BMP</option>
                </Styled.Select>
                <Styled.ItemTextBox>
                    <Button onClick={() => setDialog(undefined)} fontSize={14} width={70}>Cancel</Button>
                </Styled.ItemTextBox>
            </Styled.Item>
        </Styled.Container>
    );
}
