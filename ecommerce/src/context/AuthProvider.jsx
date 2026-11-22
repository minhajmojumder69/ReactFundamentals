import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const [authUser,setAuthUser] = useState(()=> JSON.parse(localStorage.getItem('user')) || null)

    // eslint-disable-next-line no-unused-vars
    const login = (username,password)=>{
        setAuthUser({username,id:123})
        localStorage.setItem('user',JSON.stringify({username,id:123}))
    }

    const logout = ()=>{
        setAuthUser(null)
        localStorage.removeItem('user')
    }

    return (
        <AuthContext.Provider value={{authUser, login,logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;