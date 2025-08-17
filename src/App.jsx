import React from 'react'
import AddTask from './component/AddTask'
import { TodoProvider } from './context/TodoContext'



const App = () => {
  return (
    <div>
      <TodoProvider>
     <AddTask />
     </TodoProvider>
    </div>
  )
}

export default App