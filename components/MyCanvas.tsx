'use client'
import { useEffect, useRef, useState } from "react";

const MyCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const [isDrawing, setIsDrawing] = useState(false)

    useEffect(() => {
        const canvas = canvasRef.current!;
        const context = canvas.getContext("2d");

        if (context) {
            // canvas.style.width = "500";
            // canvas.style.height = "400";
            context.scale(1, 1)
            context.lineCap = "round";
            context.lineJoin = "round";
            context.strokeStyle = 'green'
            context.lineWidth = 5
            // Your initialization code here
            contextRef.current = context
        }

        return () => {
            // Cleanup code here (if needed)
            // This code will run when the component unmounts
        };
    }, []);

    const startDrawing = (e: any) => {
        const { offsetX, offsetY } = e.nativeEvent

        contextRef.current?.beginPath()
        contextRef.current?.moveTo(offsetX, offsetY)
        setIsDrawing(true)
    }

    const draw = (e: any) => {
        if (!isDrawing) {
            return
        }
        const { offsetX, offsetY } = e.nativeEvent
        contextRef.current?.lineTo(offsetX, offsetY)
        contextRef.current?.stroke()
    }
    const finishDrawing = (e: any) => {
        contextRef.current?.closePath()
        setIsDrawing(false)
    }

    return (
        <div className="flex justify-center p-8">
            <canvas
                id="myCanvas"
                width="500" height="400"
                style={{ border: '1px solid black', margin: '5px', background: 'white' }}
                ref={canvasRef}
                onMouseDown={(e) => startDrawing(e)}
                onMouseMove={(e) => draw(e)}
                onMouseUp={(e) => finishDrawing(e)}
            />
        </div>
    );
};

export default MyCanvas;
// const c = document.getElementById("myCanvas") as HTMLCanvasElement | null
// const ctx = c?.getContext("2d") as CanvasRenderingContext2D | null;


// setC(document.getElementById("myCanvas") as HTMLCanvasElement | null)
// setCtx(c?.getContext("2d") as CanvasRenderingContext2D | null)