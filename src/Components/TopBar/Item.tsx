import * as Styled from './TopBar.styled';
import { TopBarItem } from "./Types.ts";
import { createSignal, Show } from "solid-js";
import { List } from "./List/List.tsx";

export const Item = (props: TopBarItem) => {
    const [showList, setShowList] = createSignal(false);

    const firstLetter = props.name.charAt(0);
    const restOfText = props.name.slice(1);

    return (
        <Styled.Item>
            <span
                onPointerDown={(event) => {
                    setShowList(!showList());
                    event.stopPropagation();
                    event.preventDefault();
                }}
            >
                <Styled.FirstLetter>{firstLetter}</Styled.FirstLetter>
                {restOfText}
            </span>
            <Show when={showList()}>
                <List items={props.items} close={setShowList} />
            </Show>
        </Styled.Item>
    );
}
