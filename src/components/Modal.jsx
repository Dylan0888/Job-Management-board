import React from 'react'

import { IoMdClose } from "react-icons/io";

const Modal = ({setOpenNewTask, task, setTask, updateList}) => {
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setTask(prev => ({...prev, [name]:value}))
    console.log(name, value)
  }
 
  
    return (
        
<form className='h-screen w-screen bg-black/30 backdrop-blur-sm fixed flex place-items-center justify-center'>
  
  <div className='bg-white w-[45%]  relative rounded-xl shadow-xl p-6 flex flex-col gap-5'>
    
    {/* close Button */}
    <button className='absolute -top-4 -left-4 bg-red-500 cursor-pointer rounded-full w-8 h-8 place-items-center text-lg text-white hover:bg-red-700 active:bg-black active:text-red-500 duration-100 ease-in'
    onClick={() => setOpenNewTask(false)}>
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
        name='title'
        value={task.title}
        onChange={(e) => handleChange(e)}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    {/* Status Dropdown */}
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">Status</label>
      <select 
      name='status'
      onChange={(e) => handleChange(e)}
      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="notStarted">Not Started</option>
        <option value="inProgress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
    </div>

    {/* Submit Button */}
    <button 
    onClick={(e) => updateList(e)}
    className="mt-2 bg-blue-600 text-white py-2 rounded-lg font-medium shadow-md hover:bg-blue-700 active:bg-black active:text-white duration-100 ease-in">
      Add Task
    </button>

  </div>

</form>
  )
}

export default Modal
