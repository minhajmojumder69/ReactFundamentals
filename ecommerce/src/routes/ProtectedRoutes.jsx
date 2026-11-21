import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const ProtectedRoutes = ({children}) => {
    const {authUser} = useContext(AuthContext)

    if(authUser){
        return children
    }
    return <Navigate to={'/login'} />
};

export default ProtectedRoutes;