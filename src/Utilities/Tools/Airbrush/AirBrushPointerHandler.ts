import { CanvasPointerHandler } from "../../PointerHandler/CanvasPointerHandler.ts";

export class AirBrushPointerHandler extends CanvasPointerHandler {
    private spraying: boolean = false;
    private sprayInterval: number | null = null;

    protected onPointerDown(event: PointerEvent): void {
        this.spraying = true;
        const position = this.getCanvasPosition(event);

        this.startSpraying(position.x, position.y);
    }

    protected onPointerMove(event: PointerEvent): void {
        if (!this.spraying) return;

        const position = this.getCanvasPosition(event);
        this.updateSpraying(position.x, position.y);
    }

    protected onPointerUp(): void {
        this.spraying = false;
        this.stopSpraying();
    }

    private startSpraying(x: number, y: number): void {
        const ctx = this.getCanvasContext();
        const sprayRadius = 10; // Radius of the spray effect
        const sprayDensity = 5; // Number of dots per spray tick
        const sprayColor = this.getActiveColor();

        this.sprayInterval = window.setInterval(() => {
            for (let i = 0; i < sprayDensity; i++) {
                // Randomize a point within the spray radius
                const angle = Math.random() * Math.PI * 2;
                const radius = Math.random() * sprayRadius;
                const offsetX = Math.cos(angle) * radius;
                const offsetY = Math.sin(angle) * radius;

                // Draw the dot
                ctx.fillStyle = sprayColor;
                ctx.fillRect(x + offsetX, y + offsetY, 1, 1);
            }
        }, 5); // Spray interval in milliseconds
    }

    private updateSpraying(x: number, y: number): void {
        if (this.sprayInterval) {
            this.stopSpraying();
            this.startSpraying(x, y);
        }
    }

    private stopSpraying(): void {
        if (this.sprayInterval !== null) {
            window.clearInterval(this.sprayInterval);
            this.sprayInterval = null;
        }
    }
}

