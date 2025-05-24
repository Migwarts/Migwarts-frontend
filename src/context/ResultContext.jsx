import { createContext, useEffect, useState } from "react";

export const ResultContext = createContext()

export const ResultContextProvider = ({children}) => {
    const [dormitoryArr, setDormitoryArr] = useState(Array(4).fill(0)) 
    const [dormitoryResult, setDormitoryResult] = useState(() => {
        return sessionStorage.getItem('dormitoryResult') || 0
    })
    const [characterArr, setCharacterArr] = useState(Array(12).fill(0))
    const [characterResult, setCharacterResult] = useState(() => {
        return sessionStorage.getItem('characterResult') || 0
    })

    useEffect(() => {
        sessionStorage.setItem('dormitoryResult', dormitoryResult)
    }, [dormitoryResult])
    useEffect(() => {
        sessionStorage.setItem('characterResult', characterResult)
    }, [characterResult])

    return (
        <ResultContext.Provider value={{ dormitoryArr, setDormitoryArr, characterArr, setCharacterArr, dormitoryResult, setDormitoryResult, characterResult, setCharacterResult }}>
            {children}
        </ResultContext.Provider>
    )
}