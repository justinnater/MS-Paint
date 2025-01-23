export const resetCanvas = () => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d")!;

    context.fillStyle = "#ffffff";
    context.fillRect(-5000, -5000, 10000, 10000);
}

export const loadFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
        const image = new Image();
        image.src = reader.result as string;
        image.onload = () => {
            const canvas = document.getElementById("canvas") as HTMLCanvasElement;
            const context = canvas.getContext("2d") as CanvasRenderingContext2D;
            context.drawImage(image, 0, 0);
        }
    }
    reader.readAsDataURL(file);
}
