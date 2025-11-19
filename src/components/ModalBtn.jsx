import React from 'react'

const ModalBtn = ({btnFunc, type}) => {
  
    const bgColor = (type === "add" || type=== "edit" 
        ? "bg-blue-600 hover:bg-blue-800 active:bg-neutral-800 active:text-blue-600" 
        : "bg-red-500 hover:bg-red-800 active:bg-neutral-800 active:text-red-500" )
  
    const text = {
        add: "Add Task",
        edit: "Edit Task",
        del: "Delete Task"
    }
  
    return (
    <button
      type='button'
          onClick={(e) => btnFunc(e)}
          className= {`${bgColor} text-white py-2 rounded-lg grow font-bold cursor-pointer duration-100 ease-in`}
        >
          {text[type]}
        </button>
  )
}

export default ModalBtn
