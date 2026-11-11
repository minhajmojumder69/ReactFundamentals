import { useEffect, useState } from "react";


const User = () => {

    const [users,setUsers] = useState([]);

    useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=> res.json())
            .then(data=> setUsers(data))
    }, [])

    console.log(users)

    return (
        <div className='user-card'>
            <h2>User:</h2>
            <div  className="id-card">
                {users.map((user)=> {
                    return (<div className="child">
                        <h2>Name: {user.name}</h2>
                        <h2>UserName: {user.username}</h2>
                        <h2>Email: {user.email}</h2>
                    </div>
                    );
                })}
            </div>
        </div>
    );
};

export default User;