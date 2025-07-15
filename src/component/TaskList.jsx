import React from 'react'

const TaskList = ({  deleteTask , onComplete , filterTodo }) => {

    return (
        <div className='mt-4 row row-cols-1 row-cols-md-2 g-4'>
            
            {filterTodo.map((task, index) => (
                <div className='col' key={index}>
                    <div className='card p-3'>
                        <p style={{textDecoration : task.completed ? 'line-through' : 'none' }}>
                            {task.text}
                        </p>
                        <button className='btn btn-danger' onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button className='btn btn-success'onClick={()=>onComplete(index)}>
                            {task.completed ? 'undo' : 'compelete'}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TaskList;
