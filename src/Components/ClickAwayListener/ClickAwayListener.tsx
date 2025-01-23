import { onCleanup, onMount } from 'solid-js';
import { ClickAwayListenerProps } from "./Type.ts";

export const ClickAwayListener = (props: ClickAwayListenerProps) => {
    let ref: HTMLDivElement | undefined;

    const handleClickOutside = (event: PointerEvent) => {
        event.stopPropagation();
        event.preventDefault();
        const targetRef = props.target ? props.target : ref as Element;
        if (!targetRef.contains(event.target as Node)) props.onClickAway();
    };

    onMount(() => {
        document.addEventListener('pointerdown', handleClickOutside);
    });

    onCleanup(() => {
        document.removeEventListener('pointerdown', handleClickOutside);
    });

    return (
        <div ref={ref}>
            {props.children}
        </div>
    );
}

export default ClickAwayListener;
