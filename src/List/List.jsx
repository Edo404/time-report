

import React, { useState } from 'react';

function List() {
    const [tasks, setTasks] = useState([
        { id: 1, text: "AMS", project: "AEP" },
        { id: 2, text: "PowerApps", project: "ENI" },
        { id: 3, text: "SQL", project: "Prometeon" }
    ]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            const newTaskObject = {
                id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1, // Unique id for each task
                text: newTask,
                project: ""
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
                        <span className="text">{task.text}</span>
                        <span className="text">{task.project}</span>
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

export default List;
