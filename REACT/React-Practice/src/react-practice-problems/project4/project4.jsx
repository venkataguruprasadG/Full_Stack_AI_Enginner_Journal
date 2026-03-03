function Project4() {

    function handleChange(event) {
        console.log(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div>
            <h1 className="title">The Input Mirror</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="type here somehting" onChange={handleChange} />
                <button className="btn">Log to Console</button>
            </form>
        </div>
    );
}

export default Project4;