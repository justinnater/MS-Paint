import { TopBarItem } from "./Types.ts";
import { setDialog } from "../Dialog/Dialog.tsx";
import { DialogType } from "../Dialog/Type.ts";
import { saveData } from "../Dialog/Variations/SaveAs/SaveAs.helper.ts";
import { loadFile } from "../../Utilities/Canvas.ts";

export const topBarItems: TopBarItem[] = [
    {
        name: "File",
        items: [
            {
                title: "New",
                onClick: () => setDialog({
                    type: DialogType.SAVE,
                    title: "Paint"
                })
            },
            {
                title: "Open",
                onClick: () => {
                    const input = document.createElement("input");
                    input.type = "file";
                    input.onchange = (event) => {
                        const file = (event.target as HTMLInputElement).files?.[0];
                        if (!file) return;
                        loadFile(file);
                    }
                    input.click();
                },
            },
            {
                title: "Save",
                onClick: () => {
                    saveData.reset = false;
                    setDialog({
                        type: DialogType.SAVE_AS,
                        title: "Paint"
                    })
                }
            },
        ]
    },
    {
        name: "Help",
        items: [
            {
                title: "Github",
                onClick: () => window.open("https://github.com/justinnater/MS-Paint", "_blank"),
            }
        ]
    },
    // {
    //     name: "View"
    // },
    // {
    //     name: "Image"
    // },
    // {
    //     name: "Options"
    // },
    // {
    //     name: "Help"
    // },
];
