import { JSXElement } from "solid-js";

export type ClickAwayListenerProps = {
    target?: HTMLDivElement;
    onClickAway: () => void;
    children: JSXElement;
}
