import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [authUser,setAuthUser] = useState(null);
    
    const login = ()=>{
    setAuthUser({name: 'Mahi', id : 1234});
    }

    const logout = () =>{
    setAuthUser(null);
    }

    return(
        <AuthContext.Provider value={{authUser,login,logout}}>
        {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;