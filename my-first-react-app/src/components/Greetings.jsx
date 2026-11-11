
const Greetings = (props) => {
    return (
        <div className= "greetings-card">
            <h2>{props.greet}, {props.name}</h2>
        </div>
    );
};

export default Greetings;