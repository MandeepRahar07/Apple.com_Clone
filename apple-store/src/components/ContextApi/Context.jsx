import React, { createContext, useState } from 'react'

export  const AuthContext = createContext();

function ContextProvider({child}) {

    const [CartData, SetCartData]= useState([]);

  return (
   <AuthContext.Provider value={{CartData,SetCartData}}>
    {child}
   </AuthContext.Provider>
  )
}

export default ContextProvider