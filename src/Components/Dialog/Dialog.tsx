import * as Styled from './Dialog.styled.ts';
import { createSignal, Show } from "solid-js";
import { Button } from "./Button.tsx";
import { Loader } from "./Variations/Loader.tsx";
import { DialogProps } from "./Type.ts";

export const [dialog, setDialog] = createSignal<DialogProps>(undefined);

export const Dialog = () => {
    return (
        <Styled.Container>
            <Show when={dialog() !== undefined}>
                <Styled.ContentBox>
                    <Styled.Header>
                        <Styled.HeaderText>{dialog().title}</Styled.HeaderText>
                        <Button onClick={() => setDialog(undefined)} fontSize={14} width={16} height={16} >x</Button>
                    </Styled.Header>
                    <Loader type={dialog().type} />
                </Styled.ContentBox>
            </Show>
        </Styled.Container>
    );
}
