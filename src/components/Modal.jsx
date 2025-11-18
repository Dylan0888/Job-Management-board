import { useState } from 'react';
import { useTasksContext } from '../context/tasksContext';
import { useModalContext } from '../context/modalContext';
import { IoMdClose } from "react-icons/io";

const Modal = () => {

  const {tasks, setTasks } = useTasksContext();
  const {setOpenModal} = useModalContext();

  const [newTask, setNewTask] = useState({
    id: crypto.randomUUID(),
    title: "",
    status: "notStarted"
  });


    // when task clicked send info to modal 
    // when click send id to modal 
    // filter tasks to get the title and status of matching id 
    // fill new task hook with data sent 
    // if aditing task then add delete button and change add task button to save task (tertiatry op)
    //





  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask(prev => ({ ...prev, [name]: value }));
  };

  // Adds the new task to the existing list of tasks 
  const updateList = (e) => {
    e.preventDefault();
    if (!newTask.title.trim()) return;
    setTasks(prev => [...prev, newTask]); // add new task 
    setOpenModal(false); // close modal 
    setNewTask({ 
      id: crypto.randomUUID(),
      title: "",
      status: "notStarted"
    });
  };

  return (
    <form className="h-screen w-screen bg-black/30 backdrop-blur-sm fixed flex place-items-center justify-center">
      <div className="bg-white w-[45%] relative rounded-xl shadow-xl p-6 flex flex-col gap-5">

        <button
          className="absolute -top-4 -left-4 bg-red-500 cursor-pointer rounded-full w-8 h-8 place-items-center text-lg text-white"
          onClick={() => setOpenModal(false)}
        >
          <IoMdClose />
        </button>

        <h2 className="text-2xl font-semibold text-gray-800">Add New Task</h2>


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

        <button
          onClick={updateList}
          className="mt-2 bg-blue-600 text-white py-2 rounded-lg"
        >
          Add Task
        </button>

      </div>
    </form>
  );
};

export default Modal;
