import { Point2D } from "../Types.ts";

export class PMath {
    public static isPointInRangeOfPoint(point1: Point2D, point2: Point2D, range: number): boolean {
        return Math.abs(point1.x - point2.x) <= range && Math.abs(point1.y - point2.y) <= range;
    }
}
