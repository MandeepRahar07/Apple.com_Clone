import React, { createContext, useState } from 'react'

export  const AuthContext = createContext();

function ContextProvider({children}) {

    const [CartData, SetCartData]= useState([]);
    const [name, SetName] = useState("")
     
    
  return (
   <AuthContext.Provider value={{CartData,SetCartData,name,SetName}}>
    {children}
   </AuthContext.Provider>
  )
}

export default ContextProvider