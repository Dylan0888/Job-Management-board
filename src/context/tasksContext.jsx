import { createContext, useContext, useState, useEffect } from "react";

const TasksContext = createContext();

export function TasksProvider({ children }) {
const [tasks, setTasks] = useState(()=> {
    const savedTask = localStorage.getItem("task"); //stored saved tasks
    return savedTask ? JSON.parse(savedTask) : []; // return saved else empty list
  });

  // filtered lists
  const completedList = tasks.filter(t => t.status === "completed");
  const inProgressList = tasks.filter(t => t.status === "inProgress");
  const notStartedList = tasks.filter(t => t.status === "notStarted");


  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks))
  },[tasks])


  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        completedList,
        inProgressList,
        notStartedList
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

// 3. Custom hook for easier usage
export function useTasksContext() {
  return useContext(TasksContext);
}
