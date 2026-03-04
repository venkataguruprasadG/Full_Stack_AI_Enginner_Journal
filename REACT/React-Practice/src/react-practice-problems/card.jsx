function Card(props) {
    return (
        <div className="template">
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    );
}

export default Card;