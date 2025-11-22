import { useState} from 'react';
import { useTasksContext } from '../context/tasksContext';
import { useModalContext } from '../context/modalContext';
import ModalBtn from './ModalBtn';
import ModalInputBox from './ModalInputBox';
import { IoMdClose } from "react-icons/io";
import toast from 'react-hot-toast';

const Modal = () => {

  const {setTasks } = useTasksContext();
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask(prev => ({ ...prev, [name]: value }));
  };

  // Adds the new task to the existing list of tasks 
  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.title.trim()) {
      toast.error("Please Provide a Task Name!")
      return;
    }
    setTasks(prev => [...prev, newTask]); // add new task 
    closeModal();
    toast.success("Added Task!")
    setNewTask({ 
      id: crypto.randomUUID(),
      title: "",
      status: "notStarted"
    });
  };

  const editTask = () => {
    if (!newTask.title.trim()) {
      toast.error("Please Provide a Task Name!")
      return;
    }
    setTasks(prevTasks => prevTasks.map((task) => task.id === newTask.id ? newTask :task)) //Maps the matching task id to the edited task
     closeModal()
     setNewTask({ 
      id: crypto.randomUUID(),
      title: "",
      status: "notStarted"
    });
    toast.success("Successfully Edited Task!")
  }

  const removeTask = () => {
    setTasks(tasks => tasks.filter((prevTask)=> prevTask.id !== newTask.id))
    toast.success("Successfully Removed Task!")
    closeModal()
    toast
  }

  return (
    <form className="h-screen w-screen bg-black/30 backdrop-blur-sm fixed top-0 left-0 flex place-items-center justify-center">
      <div className="bg-white w-[45%] relative rounded-xl shadow-xl p-6 flex flex-col gap-5">

        <button
          className="absolute -top-4 -left-4 bg-red-500 cursor-pointer rounded-full w-8 h-8 place-items-center text-lg text-white"
          onClick={() => closeModal()}>
          <IoMdClose />
        </button>

        <h2 className="text-2xl font-semibold text-gray-800">{selectedTask ? "Edit Task" : "Add New Task"}</h2>

        <ModalInputBox inputName={"title"} newTask={newTask} handleChange={handleChange} />

        <ModalInputBox inputName={"status"} newTask={newTask} handleChange={handleChange} />

        <div className='flex mt-2 gap-2'> 
          <ModalBtn btnFunc={selectedTask ? editTask : addTask} type={selectedTask ? "edit" : "add"}/>

          {selectedTask && <ModalBtn btnFunc={removeTask} type={"del"}/>}
        </div>
      
      </div>
    </form>
  );
};

export default Modal;
