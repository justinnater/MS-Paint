export enum DialogType {
    SAVE,
    NEW,
    SAVE_AS,
}

export type DialogProps = {
    type: DialogType;
    title: string;
}
