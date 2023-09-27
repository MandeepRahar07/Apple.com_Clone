import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

function ContextProvider({ children }) {
  const [CartData, SetCartData] = useState([]);
  const [name, setNamelogin] = useState('');
  const [auth, setIsAuth] = useState(false); 

  return (
    <AuthContext.Provider value={{ CartData, SetCartData, name, setNamelogin, auth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default ContextProvider;
