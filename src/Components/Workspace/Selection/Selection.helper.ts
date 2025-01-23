import { selection, setSelection } from "./Selection.tsx";

export const mergeSelection = () => {
    const selectionData = selection();
    if (!selectionData) return;

    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d")!;

    context.putImageData(selectionData.imageData, selectionData.position.x, selectionData.position.y);

    setSelection(undefined);
}
