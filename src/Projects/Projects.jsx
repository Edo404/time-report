import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Projects.css'

function Projects() {
    const [tasks, setTasks] = useState([
        { id: 1, text: "ENI", color: "" },
        { id: 2, text: "AEP", color: "" },
        { id: 3, text: "Prometeon", color: "" }
    ]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            const newTaskObject = {
                id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
                text: newTask,
                color: ""
            };
            setTasks((t) => [...t, newTaskObject]);
            setNewTask("");
        }
    }

    function deleteTask(id) {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    }

    return (
        <div className="to-do-list">
            <div>
                <input
                    type="text"
                    placeholder="Enter a Task..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className="add-button" onClick={addTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <span className="text">{task.id}</span>
                        <span className="text">{task.text}</span>
                        <i
                            className="fas fa-trash-alt"
                            style={{
                                cursor: 'pointer',
                                marginLeft: '8px',
                                color: '#545454'
                            }}
                            onClick={() => deleteTask(task.id)}
                        ></i>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Projects;
