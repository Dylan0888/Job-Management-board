import { useState } from 'react';
import Header from './components/Header';
import completed from './assets/imgs/checked.png'
import inComplete from './assets/imgs/remove.png'
import inProgress from './assets/imgs/work-in-progress.png'
import Columns from './components/Columns';

function App() {
  
  const [theme , setDark] = useState(false) // Light mode as def

  const [tasks, setTasks] = useState([
    {id: 1,title: "Clean ass", status: "completed"},
    {id: 2,title: "Brush teeth", status: "inProgress"},
    {id: 3,title: "sort Ketwig", status: "notStarted"}
  ]);

    const completedList = tasks.filter((task) => task.status === "completed");
    const inProgressList = tasks.filter(task => task.status === "inProgress");
    const notStartedList = tasks.filter(task => task.status === "notStarted");


  // Array of columns to render out 
  const columns = [
    {name: "completed", src:completed, list: completedList},
    {name: "inProgress", src:inProgress, list: inProgressList},
    {name: "notStarted", src:inComplete, list: notStartedList}
  ]







  
  
  return (

    <>
      <Header theme={theme} setDark={setDark} />


      <div className=' flex justify-center mt-2'>
        <button className='border rounded-xl px-4 py-1.5 bg-blue-400 shadow-lg cursor-pointer'>Add Task</button>
      </div>

    
      <div className='bg-gray-600/40 h-screen mt-2 p-2 gap-2 grid grid-cols-3 justify-evenly'>

        {columns.map((col) => (
          <Columns name={col.name} src={col.src} list={col.list}/>
        ))}

      
      </div>
     

    </>
  )
}

export default App
