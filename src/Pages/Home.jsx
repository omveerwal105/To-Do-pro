import React from 'react'
import Header from '../component/Header'
import AddTask from '../component/AddTask'
import TaskList from '../component/TaskList';

const Home = () => {
    const dummyTasks = ["learn react" , "go gym" , "do js"];
  return (
    <div className='container'>
        <Header />
        <AddTask />
        <TaskList tasks={dummyTasks} />

    </div>
  )
}

export default Home