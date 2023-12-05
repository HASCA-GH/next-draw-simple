export type Punto = {
    id: string;
    punto: number[];
}

export type puntosContextType = {
    puntosContext: Array<Punto>
    setPuntosContext: (value: Array<Punto>) => void
}


// type MyContextType = {
//     name: string;
//     points: number[];
// }
// const MyContextInitial = {
//     name: 'myName',
//     points: [0, 0, 300, 300, 300, 600]
// }