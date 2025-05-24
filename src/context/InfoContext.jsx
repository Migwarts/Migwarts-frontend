import { createContext, useState, useEffect } from 'react';

export const InfoContext = createContext()

export const InfoContextProvider = ({ children }) => {
    const [name, setName] = useState(() => {
        return sessionStorage.getItem('name') || ""
    })
    const [number, setNumber] = useState(() => {
        return sessionStorage.getItem('number') || 0
    })
    const [userId, setUserId] = useState(() => {
        return sessionStorage.getItem('userId') || 0
    })  

    useEffect(() => {
        sessionStorage.setItem('name', name)
    }, [name])
    useEffect(() => {
        sessionStorage.setItem('number', number)
    }, [number])
    useEffect(() => {
        sessionStorage.setItem('userId', userId)
    }, [userId])   

    return (
        <InfoContext.Provider value={{ name, setName, number, setNumber, userId, setUserId }}>
            {children}
        </InfoContext.Provider>
    );
};
