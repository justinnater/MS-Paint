import { SaveChanges } from "./SaveChanges/SaveChanges.tsx";
import { DialogType } from "../Type.ts";
import { SaveAs } from "./SaveAs/SaveAs.tsx";

export const Loader = (props: { type: DialogType }) => {
    return (
        <>
            {props.type === DialogType.SAVE && <SaveChanges />}
            {props.type === DialogType.NEW && <SaveChanges />}
            {props.type === DialogType.SAVE_AS && <SaveAs />}
        </>
    )
}
