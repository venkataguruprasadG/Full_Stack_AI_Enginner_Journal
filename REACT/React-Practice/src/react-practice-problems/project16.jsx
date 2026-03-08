import { useState } from "react";
import { useEffect } from "react";

function Project16() {
    const [advice, setAdvice] = useState("Loading Advice...");

    const fetchAdvice = async () => {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        setAdvice(data.slip.advice);
    };

    useEffect(() => {
        fetchAdvice();
    }, []);

    return (
        <div>
            <h1>Daily Wisdom</h1>
            <p>{advice}</p>
            <button onClick={fetchAdvice}>Give me more advice!</button>
        </div>
    );
}

export default Project16;