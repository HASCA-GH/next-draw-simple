'use client'

import { createContext, ReactNode, useState } from 'react'
import { Punto } from '@/components/context/types'

interface Props {
    children: ReactNode
}

const MyContext = createContext({})

export function MyContextPointsProvider({ children }: Props) {
    const [puntosContext, setPuntosContext] = useState<Array<Punto>>([])

    return <MyContext.Provider value={{ puntosContext, setPuntosContext }}>{children}</MyContext.Provider>
}

export default MyContext