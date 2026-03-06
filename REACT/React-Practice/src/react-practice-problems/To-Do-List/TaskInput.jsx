import { useState } from "react";

function TaskInput({ onAddTask }) {
    const [text, setText] = useState("");

    return (
        <div className="input-container">
            <input
                type="text"
                placeholder="Type your task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={() => {
                if (text.trim() !== "") {
                    onAddTask(text);
                    setText(""); // clear input after adding
                }
            }}>
                Add Task
            </button>
        </div>
    );
}

export default TaskInput;
