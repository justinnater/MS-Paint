import { For } from "solid-js";
import * as Styled from './ColorBar.styled';
import { Preview } from "./Preview/Preview.tsx";
import { Button } from "./Button/Button.tsx";
import { ColorList } from "./Constants.ts";
import { setActiveColor } from './State';

export const ColorBar = () => {
    return (
        <Styled.Container>
            <Styled.Content>
                <Preview />
                <Styled.List>
                    <For each={ColorList}>
                        {(color: string) => <Button color={color} onClick={() => setActiveColor(color)} />}
                    </For>
                </Styled.List>
            </Styled.Content>
        </Styled.Container>
    );
}
