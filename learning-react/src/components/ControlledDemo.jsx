import { useState } from 'react';

const ControlledDemo = () => {

    const [name,setName] = useState('')

    const handleSubmit = ()=>{
        alert(`${name} is submitted`)
    }

    return (
        <div>
            <h2>(2)Its controlled input :</h2>
            <input value={name} onChange={(e)=> setName(e.target.value)} type='text' placeholder='Your name'/>
            <p>Your name is {name}</p>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default ControlledDemo;