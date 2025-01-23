import { setDialog } from "../../Dialog.tsx";
import { resetCanvas } from "../../../../Utilities/Canvas.ts";

export enum SaveType {
    PNG,
    JPG,
    BMP,
}

// create a variable, that links each saveType to its mimetype and extension

export const saveTypeToMime = {
    [SaveType.PNG]: {
        mimeType: "image/png",
        extension: ".png",
    },
    [SaveType.JPG]: {
        mimeType: "image/jpeg",
        extension: ".jpg",
    },
    [SaveType.BMP]: {
        mimeType: "image/bmp",
        extension: ".bmp",
    }
}

const download = (data: string, filename: string) => {
    const a = document.createElement("a");
    a.href = data;
    a.download = filename;
    a.click();
}

// dirty solution for now
export const saveData = {
    reset: false,
}

export const save = () => {
    // get the select value
    const select = document.getElementById("save-select") as HTMLSelectElement;
    const value = select.value as unknown as SaveType;

    const input = document.getElementById("save-input") as HTMLInputElement;
    const fileName = input.value;

    const canvas = document.getElementById("canvas") as HTMLCanvasElement;

    const mimeType = saveTypeToMime[value].mimeType;
    const extension = saveTypeToMime[value].extension;

    const data = canvas.toDataURL(mimeType);

    download(data, `${fileName}${extension}`);

    setDialog(undefined);

    if (saveData.reset) resetCanvas();
}


