import { useState } from 'react';
import { useTasksContext } from './context/tasksContext';
import Header from './components/Header';
import Modal from './components/Modal';
import completed from './assets/imgs/checked.png'
import inComplete from './assets/imgs/remove.png'
import inProgress from './assets/imgs/work-in-progress.png'
import Columns from './components/Columns';
import AddTaskBtn from './components/AddTaskBtn';

function App() {
  
  const {completedList, inProgressList, notStartedList} = useTasksContext()
  const [theme , setDark] = useState(false) // Light mode as def
  const [openNewTask , setOpenNewTask] = useState(false)

  // Array of columns to render out 
  const columns = [
    {name: "completed", src:completed, list: completedList},
    {name: "inProgress", src:inProgress, list: inProgressList},
    {name: "notStarted", src:inComplete, list: notStartedList}
  ]

  return (    
  <>
      {openNewTask && <Modal setOpenNewTask={setOpenNewTask} />}
      <Header theme={theme} setDark={setDark} />

      {/* Add Task Button */}
      <AddTaskBtn setOpenNewTask={setOpenNewTask}/>
      
      {/* Job Board */}
      <div className='  mt-2 p-2 gap-2 grid grid-cols-3 justify-evenly'>
        {columns.map((col) => (
          <Columns key={col.name} name={col.name} src={col.src} list={col.list}/>
        ))}      
      </div>
    </>
  )
}

export default App



