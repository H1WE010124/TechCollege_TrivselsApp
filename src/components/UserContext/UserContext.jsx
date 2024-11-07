import React from 'react'
import { createContext, useState, useContext } from 'react'

//Create context
const UserContext = createContext()

//Custom hook for easy access
export const useUser = () => useContext(UserContext)

export const UserProvider = ({children}) =>{
  const [token, setToken] = useState(null)


//Function to update token
 const login = (token) =>{
  setToken(token)
 }

 return (
  <UserContext.Provider value = {{token, login}}>
    {children}
  </UserContext.Provider>
 )
}