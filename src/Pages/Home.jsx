import React, { useState } from 'react'
import Header from '../component/Header'
import AddTask from '../component/AddTask'
import TaskList from '../component/TaskList';

const Home = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        if (newTask.trim() === '') return;
        setTasks([...tasks, newTask]);
    }

    const deleteTask = (index) => {
        const updateTask = tasks.filter((task, id) => id !== index);
        setTasks(updateTask);
    }

    return (
        <div className='container'>
            <Header />
            <AddTask addTask={addTask} />
            <TaskList tasks={tasks} deleteTask={deleteTask} />
        </div>
    )
}

export default Home;
