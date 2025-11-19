import React from 'react'

const ModalBtn = ({btnFunc, type}) => {
  
    const bgColor = (type === "add" || type=== "edit" ? "bg-blue-600" : "bg-red-500" )
  
    const text = {
        add: "Add Task",
        edit: "Edit Task",
        del: "Delete Task"
    }
  
    return (
    <button
          onClick={() => btnFunc}
          className= {`${bgColor} text-white py-2 rounded-lg grow font-bold`}
        >
          {text[type]}
        </button>
  )
}

export default ModalBtn
