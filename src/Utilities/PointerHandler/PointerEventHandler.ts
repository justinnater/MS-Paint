export abstract class PointerEventHandler {

    protected abstract onPointerDown(event: PointerEvent): void;
    protected abstract onPointerMove(event: PointerEvent): void;
    protected abstract onPointerUp(event: PointerEvent): void;

    private readonly boundOnPointerMove: (event: PointerEvent) => void;
    private readonly boundHandlePointerUp: (event: PointerEvent) => void;


    constructor() {
        this.boundOnPointerMove = this.onPointerMove.bind(this);
        this.boundHandlePointerUp = this.handlePointerUp.bind(this);
    }

    public startPointerEventHandler(event: PointerEvent) {
        this.onPointerDown(event);
        window.addEventListener("pointermove", this.boundOnPointerMove);
        window.addEventListener("pointerup", this.boundHandlePointerUp);
    }

    private handlePointerUp(event: PointerEvent) {
        this.onPointerUp(event);
        this.cleanUpPointerEventHandler();
    }

    private cleanUpPointerEventHandler() {
        window.removeEventListener("pointermove", this.boundOnPointerMove);
        window.removeEventListener("pointerup", this.boundHandlePointerUp);
        window.removeEventListener("pointercancel", this.boundHandlePointerUp);
    }
}
