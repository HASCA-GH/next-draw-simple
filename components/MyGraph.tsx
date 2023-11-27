'use client'
import { useEffect, useState } from "react";

const MyGraph = () => {
    const [ptox, setPtox] = useState([{}])
    const [c, setC] = useState<HTMLCanvasElement | null>(null)
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null)

    // const c = document.getElementById("myCanvas") as HTMLCanvasElement | null
    // const ctx = c?.getContext("2d") as CanvasRenderingContext2D | null;


    // setC(document.getElementById("myCanvas") as HTMLCanvasElement | null)
    // setCtx(c?.getContext("2d") as CanvasRenderingContext2D | null)

    // var c = document.getElementById("myCanvas") as HTMLCanvasElement | null;
    // var c = null as HTMLCanvasElement | null
    // var ctx = c?.getContext("2d");
    // const initialCanvas = () => {
    // const canvita = document.getElementById("myCanvas");
    // setCtx()
    // window.addEventListener('mousemove', (e) => console.log('Mouse:', e))
    // if (c && ctx) {
    //     ctx.moveTo(0, 0);
    //     ctx.lineTo(c.width * 0.5, c.height * 0.5);
    //     ctx.lineTo(c.width, 0);
    //     ctx.lineCap = "round";
    //     ctx.strokeStyle = "red";
    //     ctx.stroke();

    //     ctx.beginPath
    //     ctx.font = "30px Arial";
    //     ctx.fillText("Hello World", 10, 50);
    // }
    // }



    const getPointsxxx = () => {
        // window.addEventListener('mousemove', (e) => console.log('Mouse:', e))
        // var c = document.getElementById("myCanvas") as HTMLCanvasElement | null;
        // var ctx = c?.getContext("2d");
        console.log('Puntos:', ptox);

        // if (c && ctx) {
        //     // Draw all points
        //     pto.forEach((punto) => {
        //         ctx.beginPath();
        //         ctx.moveTo(punto.x, punto.y);
        //         // ctx.moveTo(punto.x, punto.y);
        //         ctx.lineTo(punto.x, punto.y);

        //     });
        //     ctx.lineCap = "round";
        //     ctx.lineJoin = "round";
        //     ctx.strokeStyle = "red";
        //     ctx.stroke();
        // }

    }

    const getPoints = (e: HTMLCanvasElement) => {
        // c?.addEventListener('mousedown', (e) => {
        //     // console.log('Mouse point :', mouse);

        // })
        const rect = e.getBoundingClientRect()
        const mouse = [

            e.clientX - rect.left,
            e.clientY - rect.top
        ]
        console.log('Mouse point :', mouse);

    }

    useEffect(() => {
        setC(document.getElementById("myCanvas") as HTMLCanvasElement | null)
        setCtx(c?.getContext("2d") as CanvasRenderingContext2D | null)
    }, [])





    return (
        <div className="flex justify-center p-8">
            <canvas
                id="myCanvas"
                // width="736" height="400"
                // w-screen lg:max-w-7xl
                className="border rounded-lg h-auto w-screen lg:max-w-7xl"
            // style={{ maxWidth: '800px', maxHeight: '800px' }}
            // onMouseMove={(e) => setPto({ x: e.screenX, y: e.screenY })}
            // onMouseMove={(e) => setPto((prev) => [...prev, { x: e.screenX, y: e.screenY }])}
            // onMouseMove={(e) => setPto((prev) => [...prev, { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY }])}
            // onMouseDown={(e) => setPto((prev) => [...prev, { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY }])}
            // onMouseDown={(e) => setPto((prev) => [...prev, { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY }, { x: e.screenX, y: e.screenX }])}
            // onMouseDown={(e) => console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
            // onMouseMove={(e) =>
            //     setPtox((prev) => [...prev, { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY }])
            // }
            // onMouseMove={handleMouseMove}



            >
            </canvas>

        </div >
    )
}

export default MyGraph