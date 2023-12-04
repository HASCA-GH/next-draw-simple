'use client'
import { useEffect, useRef, useState, MouseEvent } from "react";

const MyCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const [isDrawing, setIsDrawing] = useState(false)
    const [points, setPoints] = useState<Array<[number, number]>>([])

    useEffect(() => {
        const canvas = canvasRef.current!;
        const context = canvas.getContext("2d");

        if (context) {
            context.scale(1, 1)
            context.lineCap = "round";
            context.lineJoin = "round";
            context.strokeStyle = 'green'
            context.lineWidth = 5
            contextRef.current = context
        }

        return () => {
            // Cleanup code here (if needed)
            // This code will run when the component unmounts
        };
    }, []);

    const startDrawing = (e: MouseEvent<HTMLCanvasElement>) => {
        const { offsetX, offsetY } = e.nativeEvent
        contextRef.current?.beginPath()
        contextRef.current?.moveTo(offsetX, offsetY)

        setPoints((prev) => [...prev, [offsetX, offsetY]])
        console.log(points);
        setIsDrawing(true)
    }

    const draw = (e: MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawing) {
            return
        }
        const { offsetX, offsetY } = e.nativeEvent
        setPoints((prev) => [...prev, [offsetX, offsetY]])
        console.log(points);
        contextRef.current?.lineTo(offsetX, offsetY)
        contextRef.current?.stroke()
    }
    const finishDrawing = () => {
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
                onMouseUp={finishDrawing}
            />
        </div>
    );
};

export default MyCanvas;
