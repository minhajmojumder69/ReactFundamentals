import { useState } from "react";

const Profile = () => {
    const [user, setUser] = useState({
        name: 'Minhaj',
        Age: 23,
        location: 'Agargaon'
    });
    console.log(user,'user');

    const handleAge = () =>{
        const newUser = { ...user, Age: user.Age +1 };
        setUser(newUser);
    }
    return (
        <div className="profile-card">
            Profile
            <h2>Name: {user.name}</h2>
            <h2>Age: {user.Age}</h2>
            <h2>Address: {user.location}</h2>
            <button onClick={()=> handleAge()}>Increment Age</button>
        </div>
    );
};

export default Profile;