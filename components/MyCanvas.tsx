'use client'
import { useEffect, useRef, useState, useContext, MouseEvent } from "react";
import MyContext from '@/components/context/myContext'
import { Punto, puntosContextType } from '@/components/context/types'

const MyCanvas = () => {
    const { puntosContext, setPuntosContext } = useContext(MyContext) as puntosContextType
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

        // const newPoint = {
        //     id: 'Mi punto',
        //     punto: [offsetX, offsetY]
        // }
        // setPuntosContext([...puntosContext, newPoint])
        // console.log(points);
        // console.log(puntosContext);
        setIsDrawing(true)
    }

    const draw = (e: MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawing) {
            return
        }
        const { offsetX, offsetY } = e.nativeEvent
        setPoints((prev: Array<[number, number]>) => [...prev, [offsetX, offsetY]])

        contextRef.current?.lineTo(offsetX, offsetY)
        contextRef.current?.stroke()

        // const newPoint = {
        //     id: 'Mi punto',
        //     punto: [offsetX, offsetY]
        // }
        // setPuntosContext([...puntosContext, newPoint])

        setPuntosContext((prev: Punto[]) => [...prev, { id: 'Mi punto', punto: [offsetX, offsetY] }]);

        // console.log(puntosContext);
        // console.log(points);
    }
    const finishDrawing = () => {
        contextRef.current?.closePath()
        setIsDrawing(false)
        // localStorage.setItem(`Mis Puntos`, `${puntosContext}`)
        // setPuntosContext([...puntosContext, ...points])
        localStorage.setItem('Mis Puntos', JSON.stringify(puntosContext));
        console.log('Saved to local Storage!');
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
