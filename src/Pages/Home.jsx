import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import AddTask from '../component/AddTask'
import TaskList from '../component/TaskList';

const Home = () => {
    const [tasks, setTasks] = useState(()=>{
        const storedTask = localStorage.getItem('tasks');
        return storedTask ? JSON.parse(storedTask) : []; 
    });
    const [filter, setFilter] = useState('all');



    const addTask = (task) => {
        if (task.trim() === '') return;
        const newTask = {
            text: task,
            completed: false
        };

        setTasks([...tasks, newTask]);

    }

    const deleteTask = (index) => {
        const updateTask = tasks.filter((task, id) => id !== index);
        setTasks(updateTask);
    }

    const handleComplete = (index) => {
        const updatedList = [...tasks];
        updatedList[index].completed = !updatedList[index].completed;
        setTasks(updatedList);
    };

    const filterTodo = tasks.filter((todo) => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    // Save to localStorage whenever tasks change
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

 

    return (
        <div className='container'>
            <Header />
            <AddTask addTask={addTask} />
            <div className="d-flex gap-2 justify-content-center mt-3">
                <button className={`btn ${filter === 'all' ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => setFilter('all')}>All</button>
                <button className={`btn ${filter === 'active' ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => setFilter('active')}>Active</button>
                <button className={`btn ${filter === 'completed' ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => setFilter('completed')}>Completed</button>
            </div>

            <TaskList tasks={tasks} deleteTask={deleteTask} onComplete={handleComplete} filterTodo={filterTodo} />
        </div>
    )
}

export default Home;
