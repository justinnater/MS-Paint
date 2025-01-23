import { For } from "solid-js";
import * as Styled from './TopBar.styled';
import { Item } from "./Item.tsx";
import { topBarItems } from "./Constants.ts";

export const TopBar = () => {
    return (
        <Styled.Container>
            <For each={topBarItems}>{(item) => (
                <Item name={item.name} items={item.items} />
            )}</For>
        </Styled.Container>
    );
}
