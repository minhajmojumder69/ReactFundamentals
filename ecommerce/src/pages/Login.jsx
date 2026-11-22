import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    // eslint-disable-next-line no-unused-vars
    const {authUser,login} = useContext(AuthContext)

    const handleLogin = (e)=>{
        e.preventDefault();
        console.log(username,password);
        login(username,password)
    }

    return (
        <div className="w-1/3 shadow-2xl p-1 text-center bg-blue-50 mx-auto mt-1">
            <form onSubmit={handleLogin} >
                <input value={username} onChange={(e)=> setUsername(e.target.value)} type="text" placeholder="Username" className="border p-1" /><br />
                <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="password" className="border mt-1 mb-1 p-1" /><br />
                <button type="submit" className="border p-0.5" >Login</button>
            </form>
        </div>
    );
};

export default Login;