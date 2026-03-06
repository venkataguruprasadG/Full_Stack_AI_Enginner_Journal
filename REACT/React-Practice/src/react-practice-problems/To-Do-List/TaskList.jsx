import { useState } from "react";

function TaskList({ tasks, onDeleteTask }) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="task-list-container">
            <input
                type="text"
                placeholder="Search task"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredTasks.map((task) => (
                    <li key={task.id} className="task-item">
                        {task.title}
                        <button onClick={() => onDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
