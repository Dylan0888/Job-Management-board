import React from 'react'

const addTaskBtn = ({setOpenNewTask}) => {
  return (
     <div className=' flex justify-center mt-2'>
        <button 
        className='border-2 rounded-xl px-4 py-1.5 bg-blue-700/80 shadow-lg cursor-pointer text-white hover:bg-blue-900 active:border-blue-700 active:bg-black active:text-white duration-100 ease-in'
        onClick={() => setOpenNewTask(true)}
        >Add Task</button>
      </div>
  )
}

export default addTaskBtn
