import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AuthButton = () => {

    const {authUser,login,logout} = useContext(AuthContext)

    if(authUser){
        return(
            <div>
                <p>Welcome {authUser.name}</p>
                <button onClick={logout}>Logout</button>
            </div>
        )
    }
    return <button onClick={login}>Login</button>
};

export default AuthButton;