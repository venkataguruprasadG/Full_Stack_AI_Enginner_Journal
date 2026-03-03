import { useState } from "react";
import "./project7.css";

function Project7() {
    // Step 1: Create state called text, initial value ""
    const [text, setText] = useState("");

    // Step 2: Input + h2
    return (
        <div className="container">
            <input
                type="text"
                placeholder="Type something..."
                onChange={(event) => setText(event.target.value)}
            />
            <h2>{text}</h2>
        </div>
    );
}

export default Project7;
