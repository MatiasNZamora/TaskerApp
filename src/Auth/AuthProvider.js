import React, { useState } from 'react'
import { createContext } from "react";
import roles from '../helpers/roles';

export const AuthContext = createContext()


export default function AuthProvider({children}) {

    // const [user, setUser] = useState(null);
    const [user, setUser] = useState({ id:1, role: roles.regular });

    const contextValue = {
        user,
    };

  return (
    
    <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>

  )
};

