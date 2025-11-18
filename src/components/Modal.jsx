import { useState} from 'react';
import { useTasksContext } from '../context/tasksContext';
import { useModalContext } from '../context/modalContext';
import { IoMdClose } from "react-icons/io";

const Modal = () => {

  const {tasks, setTasks } = useTasksContext();
  const {closeModal, selectedTask} = useModalContext();

  const [newTask, setNewTask] = useState(
      selectedTask ?
      {id: selectedTask.id,
      title: selectedTask.title,
      status: selectedTask.status}
      :
      {id: crypto.randomUUID(),
      title: "",
      status: "notStarted"}
  
  );

  // useEffect(() => {console.log(selectedTask)},[selectedTask])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask(prev => ({ ...prev, [name]: value }));
  };

  // Adds the new task to the existing list of tasks 
  const updateList = (e) => {
    e.preventDefault();
    if (!newTask.title.trim()) return;
    setTasks(prev => [...prev, newTask]); // add new task 
    closeModal();
    setNewTask({ 
      id: crypto.randomUUID(),
      title: "",
      status: "notStarted"
    });
  };

  return (
    <form className="h-screen w-screen bg-black/30 backdrop-blur-sm fixed top-0 left-0 flex place-items-center justify-center">
      <div className="bg-white w-[45%] relative rounded-xl shadow-xl p-6 flex flex-col gap-5">

        <button
          className="absolute -top-4 -left-4 bg-red-500 cursor-pointer rounded-full w-8 h-8 place-items-center text-lg text-white"
          onClick={() => closeModal()}>
          <IoMdClose />
        </button>

        <h2 className="text-2xl font-semibold text-gray-800">{selectedTask ? "Edit Task" : "Add New Task"}</h2>

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

        <div className='flex mt-2 gap-2'>
           <button
          onClick={updateList}
          className="bg-blue-600 text-white py-2 rounded-lg grow font-bold"
        >
          {selectedTask ? "Edit Task" : "Add Task"}
        </button>

          {selectedTask && <button className='grow bg-red-500 rounded-lg text-white font-bold '>Delete Me</button>}
        </div>
      
      </div>
    </form>
  );
};

export default Modal;
