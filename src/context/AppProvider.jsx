import React from "react";
import { ModalProvider } from "./modalContext";
import { TasksProvider } from "./tasksContext";

export default function AppProvider({children}){
    return(
        <ModalProvider>
            <TasksProvider>
                {children}
            </TasksProvider>
        </ModalProvider>
    )

}