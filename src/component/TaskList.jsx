import React from 'react'

const TaskList = ({ tasks }) => {
  return (
    <div className='mt-4 row row-cols-1 row-cols-md-2 g-4'>
      {tasks.map((task, index) => (
        <div className='col' key={index}>
          <div className='card p-3'>
            <h3>{task}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskList
