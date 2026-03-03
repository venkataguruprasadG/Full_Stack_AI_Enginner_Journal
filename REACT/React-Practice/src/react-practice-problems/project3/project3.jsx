function Project3() {

    const handleAlert = () => {
        alert("You clicked the button");
    }
    return (
        <div className="container">
            <h1 className="title">React Event Tester</h1>
            <button className="btn" onClick={handleAlert}>
                Click Me to see Magic</button>
        </div>
    );
}

export default Project3;