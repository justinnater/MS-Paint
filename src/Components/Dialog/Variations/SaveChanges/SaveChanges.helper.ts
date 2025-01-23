import { resetCanvas } from "../../../../Utilities/Canvas.ts";
import { setDialog } from "../../Dialog.tsx";
import { DialogType } from "../../Type.ts";
import { saveData } from "../SaveAs/SaveAs.helper.ts";

export const dontSave = () => {
    resetCanvas();
    setDialog(undefined);
}

export const save = () => {
    saveData.reset = true;
    setDialog({
        type: DialogType.SAVE_AS,
        title: "Save As"
    });
}
