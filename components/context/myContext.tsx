'use client'

import { createContext, ReactNode, useState } from 'react'
import { Punto, puntosContextType } from '@/components/context/types'

interface Props {
    children: ReactNode
}

const defaultContextValue: puntosContextType = {
    puntosContext: [],
    setPuntosContext: () => { }, // You can provide a default function if needed
};
// const MyContext = createContext({})
const MyContext = createContext(defaultContextValue);

export function MyContextPointsProvider({ children }: Props) {
    const [puntosContext, setPuntosContext] = useState<Array<Punto>>([])

    return <MyContext.Provider value={{ puntosContext, setPuntosContext }}>{children}</MyContext.Provider>
}

export default MyContext