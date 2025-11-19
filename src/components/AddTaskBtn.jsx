import React from 'react'

const addTaskBtn = ({setOpenNewTask}) => {
  return (
     <div className=' flex justify-center mt-2'>
        <button 
        className='border-2 border-transparent font-bold rounded-xl px-4 py-1.5 bg-blue-700/80 shadow-lg cursor-pointer text-white hover:bg-blue-800  active:bg-neutral-800 active:text-orange-600 duration-100 ease-in'
        onClick={() => setOpenNewTask(true)}
        >Add Task</button>
      </div>
  )
}

export default addTaskBtn
