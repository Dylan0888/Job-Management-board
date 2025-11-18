import { createContext, useContext, useState } from "react";

// 1. Create the context
const TasksContext = createContext();

// 2. Provider component
export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Clean assassassassassassassassassassassassassass", status: "completed" },
    { id: 2, title: "Brush teeth", status: "inProgress" },
    { id: 3, title: "Sort Ketwig", status: "notStarted" }
  ]);

  // filtered lists
  const completedList = tasks.filter(t => t.status === "completed");
  const inProgressList = tasks.filter(t => t.status === "inProgress");
  const notStartedList = tasks.filter(t => t.status === "notStarted");

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
