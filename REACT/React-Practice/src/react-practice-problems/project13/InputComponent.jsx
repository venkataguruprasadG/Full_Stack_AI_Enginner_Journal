function InputConponent(props) {
    return (
        <div className="input-container">
            <input type="text" placeholder="type something" onChange={(event) => props.onTextChange(event.target.value)} />
        </div>
    )

}