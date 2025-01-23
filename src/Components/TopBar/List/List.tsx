import * as Styled from './List.styled';
import { ListProps } from "./Types.ts";
import { For } from "solid-js";
import ClickAwayListener from "../../ClickAwayListener/ClickAwayListener.tsx";

export const List = (props: { items: ListProps[], close: () => void }) => {
    return (
        <ClickAwayListener onClickAway={props.close}>
            <Styled.Container>
                <For each={props.items}>
                    {item => (
                        <Styled.Button type="button" onClick={() => {
                            item.onClick();
                            props.close();
                        }}>
                            {item.title}
                        </Styled.Button>
                    )}
                </For>
            </Styled.Container>
        </ClickAwayListener>
    );
}
