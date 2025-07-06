import React, { useState } from 'react';

const AddTask = ({addTask}) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === '') {
      alert('Please fill the required field');
      return;
    }

    addTask(task);


    console.log('Task Added:', task);
    setTask(''); 
  };

  return (
    <div className='container'>
      <h2 className='fw-bold text-center'>Add Your Tasks</h2>
      <form onSubmit={handleSubmit}>
        <div className='card p-3 d-flex flex-column flex-md-row gap-3 align-items-center'>
          <input
            className='form-control'
            type='text'
            placeholder='Enter your task'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className='btn btn-primary' type='submit' >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
