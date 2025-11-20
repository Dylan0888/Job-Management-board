import React from 'react'

const ModalInputBox = ({inputName, newTask, handleChange}) => {
  
    const input = inputName === "title"
    ?
    <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Task Title</label>
          <input
            type="text"
            name="title"
            value={newTask.title}
            onChange={handleChange}
            placeholder="Enter task..."
            className="w-full border rounded-lg px-3 py-2"
          />
    </div>
    :  
    <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Status</label>
          <select
            name="status"
            value={newTask.status} 
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="notStarted">Not Started</option>
            <option value="inProgress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
    return input;
}
export default ModalInputBox
