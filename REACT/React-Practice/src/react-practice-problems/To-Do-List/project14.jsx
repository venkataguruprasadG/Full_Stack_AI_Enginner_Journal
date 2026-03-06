import { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import "./project14.css";

function Project14() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        const newTask = { id: Date.now(), title: task };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="task-list">
            <h1>To-Do List</h1>
            <TaskInput onAddTask={addTask} />
            <TaskList tasks={tasks} onDeleteTask={deleteTask} />
        </div>
    );
}

export default Project14;
