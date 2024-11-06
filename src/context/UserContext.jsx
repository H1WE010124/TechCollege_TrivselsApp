import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserContextProvider({children}){

    //holder styr på brugerens access token
    const [accessToken, setAccessToken] = useState(null);

    //funktion der gemmer access token
    const saveAccessToken = (token) => {
        setAccessToken(token);
        localStorage.setItem('accessToken', token);
    }

    //funktion der checker om access token allerede er i localstorage
    const checkAccessToken = () => {
        return localStorage.getItem('accessToken',) !== null;
    }

    //funktion der indlæser access token fra localstorage
    const loadAccessToken = () => {
        const token = localStorage.getItem('accessToken');
        if (token){
            setAccessToken(token);
        }
    }

    //funktionen kaldes kun 1 gang, når komponentet mountes
    useEffect(() => {
        loadAccessToken();
    }, [])

    return(
        <UserContext.Provider value={{ accessToken, saveAccessToken, checkAccessToken }}>
            {children}
        </UserContext.Provider>
    )
}