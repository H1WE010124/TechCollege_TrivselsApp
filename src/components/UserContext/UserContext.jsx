import React from 'react'
import { createContext } from 'react'

export const UserContext = createContext()

export const UserProvider = ({children} => {
    const [token, setToken] = useSTate(null)

  return (
    <UserContext.Provider value = {{token, setToken}}>
        {children}
    </UserContext.Provider>
    
  )
}
