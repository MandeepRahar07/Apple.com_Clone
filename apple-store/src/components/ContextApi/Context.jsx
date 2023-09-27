import React, { createContext, useState } from 'react'

export  const AuthContext = createContext();

function ContextProvider({children}) {

    const [CartData, SetCartData]= useState([]);
    const [name, setNamelogin] = useState("")
     const [auth, setIsauth] = useState(false);
    console.log(CartData);
  return (
   <AuthContext.Provider value={{CartData,SetCartData,name,setNamelogin,setIsauth,auth}}>
    {children}
   </AuthContext.Provider>
  )
}

export default ContextProvider