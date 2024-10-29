import React, { useState } from 'react';
import './Form.css';

function Form() {
    const [date, setDate] = useState('');
    const [project, setProject] = useState('');
    const [hours, setHours] = useState('');
    const [note, setNote] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ date, project, hours, note });
    };

    const handleCancel = () => {
        setDate('');
        setProject('');
        setHours('');
        setNote('');
    };

    return (
        <div className="form-container">
        <form onSubmit={handleSubmit}>
            <label>
            Date
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </label>
            <label>
            Project
            <select value={project} onChange={(e) => setProject(e.target.value)} required>
                <option value="">Select a project</option>
                <option value="Project A">Project A</option>
                <option value="Project B">Project B</option>
            </select>
            </label>
            <label>
            Hours
            <select value={hours} onChange={(e) => setHours(e.target.value)} required>
                <option value="">Select hours</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="3">4</option>
                <option value="3">5</option>
                <option value="3">6</option>
                <option value="3">7</option>
                <option value="3">8</option>
            </select>
            </label>
            <label>
            Note
            <input type="text" value={note} onChange={(e) => setNote(e.target.value)} />
            </label>
            <div className="button-container">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
            </div>
        </form>
        </div>
    );
}

export default Form;
