import { useState } from "react";

function Project9() {
    const [task, setTask] = useState("");

    const [items, setItems] = useState([]);

    const handleAddTask = () => {
        if (task.trim() !== "") {
            setItems([...items, task]);
            setTask("");
        }
    };

    return (
        <div className="container">
            <h1>List Adder</h1>
            <input type="text"
                placeholder="enter your task"
                value={task}
                onChange={(event) => setTask(event.target.value)} />
            <button onClick={handleAddTask}>Add Task</button>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
                <li></li>
            </ul>
        </div>
    );
}