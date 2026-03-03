import { useState } from "react"
import "./project8.css"

function Project8() {
    const [visibility, setVisibility] = useState(true);
    return (
        <div className="container">
            <h1 className="title">Toggle Visibility</h1>
            <button className="btn" onClick={(event) => setVisibility(!visibility)}>
                Show / Hide Content</button>

            {visibility && <p className="secret-text">Now you see me!</p>}
        </div>
    );
}

export default Project8;