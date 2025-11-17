import { useState } from 'react';
import Header from './components/Header';
import completed from './assets/imgs/checked.png'
import inComplete from './assets/imgs/remove.png'
import inProgress from './assets/imgs/work-in-progress.png'
import Columns from './components/Columns';

import { IoMdClose } from "react-icons/io";

function App() {
  
  const [theme , setDark] = useState(false) // Light mode as def

  const [tasks, setTasks] = useState([
    {id: 1,title: "Clean ass", status: "completed"},
    {id: 2,title: "Brush teeth", status: "inProgress"},
    {id: 3,title: "sort Ketwig", status: "notStarted"}
  ]);

    const completedList = tasks.filter((task) => task.status === "completed");
    const inProgressList = tasks.filter(task => task.status === "inProgress");
    const notStartedList = tasks.filter(task => task.status === "notStarted");


  // Array of columns to render out 
  const columns = [
    {name: "completed", src:completed, list: completedList},
    {name: "inProgress", src:inProgress, list: inProgressList},
    {name: "notStarted", src:inComplete, list: notStartedList}
  ]



  const [openNewTask , setOpenNewTask] = useState(false)

  

  



  
  return (

    <>

      
      {/* Modal */}
<div className='h-screen w-screen bg-black/30 backdrop-blur-sm fixed flex place-items-center justify-center'>
  
  <div className='bg-white w-[40%] h-[35%] relative rounded-xl shadow-xl p-6 flex flex-col gap-5'>
    
    {/* close Button */}
    <button className='absolute -top-4 -left-4 bg-red-500 cursor-pointer rounded-full w-8 h-8 place-items-center text-lg text-white hover:bg-red-700 active:bg-black active:text-red-500 duration-100 ease-in'>
      <IoMdClose />
    </button>

    {/* Title */}
    <h2 className="text-2xl font-semibold text-gray-800">Add New Task</h2>

    {/* Task Title Input */}
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">Task Title</label>
      <input 
        type="text" 
        placeholder="Enter task..." 
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    {/* Status Dropdown */}
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">Status</label>
      <select 
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="notStarted">Not Started</option>
        <option value="inProgress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
    </div>

    {/* Submit Button */}
    <button className="mt-2 bg-blue-600 text-white py-2 rounded-lg font-medium shadow-md hover:bg-blue-700 active:bg-black active:text-white duration-100 ease-in">
      Add Task
    </button>

  </div>

</div>


      <Header theme={theme} setDark={setDark} />

      {/* Add Task Button */}
      <div className=' flex justify-center mt-2'>
        <button 
        className='border-2 rounded-xl px-4 py-1.5 bg-blue-700/80 shadow-lg cursor-pointer text-white hover:bg-blue-900 active:border-blue-700 active:bg-black active:text-white duration-100 ease-in'
        onClick={() => setOpenNewTask(true)}
        >Add Task</button>
      </div>





    
      {/* Job Board */}
      <div className='bg-gray-600/40 h-screen mt-2 p-2 gap-2 grid grid-cols-3 justify-evenly'>
        {columns.map((col) => (
          <Columns name={col.name} src={col.src} list={col.list}/>
        ))}      
      </div>
     

    </>
  )
}

export default App
