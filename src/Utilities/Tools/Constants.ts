import { StarSelectionTool } from "./StarSelection/StarSelectionTool.ts";
import { RectangleSelectionTool } from "./RectangleSelection/RectangleSelectionTool.ts";
import { createEffect, createSignal } from "solid-js";
import { EraserTool } from "./Eraser/EraserTool.ts";
import { FillTool } from "./Fill/FillTool.ts";
import { MagnifierTool } from "./MagnifielTool/MagnifierTool.ts";
import { PickColorTool } from "./PickColor/PickColorTool.ts";
import { PencilTool } from "./Pencil/PencilTool.ts";
import { BrushTool } from "./Brush/BrushTool.ts";
import { AirbrushTool } from "./Airbrush/AirbrushTool.ts";
import { TextTool } from "./Text/TextTool.ts";
import { LineTool } from "./Line/LineTool.ts";
import { CurveTool } from "./Curve/CurveTool.ts";
import { RectangleTool } from "./Rectangle/RectangleTool.ts";
import { PolygonTool } from "./Polygon/PolygonTool.ts";
import { EllipseTool } from "./Ellipse/EllipseTool.ts";
import { RoundedRectangleTool } from "./RoundedRectangle/RoundedRectangleTool.ts";
import { Tool } from "./Tool.ts";

export const starSelectionTool = new StarSelectionTool();
export const rectangleSelectionTool = new RectangleSelectionTool();
export const eraserTool = new EraserTool();
export const fillTool = new FillTool();
export const pickColorTool = new PickColorTool();
export const magnifierTool = new MagnifierTool();
export const pencilTool = new PencilTool();
export const brushTool = new BrushTool();
export const airbrushTool = new AirbrushTool();
export const textTool = new TextTool();
export const lineTool = new LineTool();
export const curveTool = new CurveTool();
export const rectangleTool = new RectangleTool();
export const polygonTool = new PolygonTool();
export const ellipseTool = new EllipseTool();
export const roundedRectangleTool = new RoundedRectangleTool();

export const [activeTool, setActiveTool] = createSignal<Tool>(pencilTool);

let previousTool: Tool | null = null;

createEffect(() => {
    const currentTool = activeTool();

    if (previousTool) previousTool.onToolClose();
    if (currentTool) currentTool.onToolOpen();

    previousTool = currentTool;
});

export const tools = [
    starSelectionTool,
    rectangleSelectionTool,
    eraserTool,
    pickColorTool,
    fillTool,
    // magnifierTool,
    pencilTool,
    brushTool,
    airbrushTool,
    textTool,
    lineTool,
    // curveTool,
    rectangleTool,
    polygonTool,
    ellipseTool,
    roundedRectangleTool,
]
