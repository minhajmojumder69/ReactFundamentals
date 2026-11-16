
const UncontrolledDemo = () => {
    const handleSubmit = ()=>{
        const value = document.getElementById('inputText').value;
        console.log(value)
    }
    return (
        <div>
            <h2>(1)Its Uncontrolled input :</h2>
            <input id='inputText' type='text'/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default UncontrolledDemo;