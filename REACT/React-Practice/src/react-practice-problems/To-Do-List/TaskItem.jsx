import { useState } from "react";

function TaskItem({ searchTask }) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredTasks = searchTask.filter((task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="search-container">
            <input type="text" placeholder="search task" value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)} />

            <ul>
                {filteredTasks.map((task) => (
                    <li key={task.id} className="task-item">
                        {task.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskItem;