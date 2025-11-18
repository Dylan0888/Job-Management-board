import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState();

  function closeModal(){
    setOpenModal(false)
    setSelectedTask(null)
  }

  function openTaskModal(task){
    setOpenModal(true)
    setSelectedTask(task)
  }

  return (
    <ModalContext.Provider value={{ openModal, setOpenModal, closeModal, openTaskModal, selectedTask}}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  return useContext(ModalContext);
}
