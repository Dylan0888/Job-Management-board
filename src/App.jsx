import { useState } from 'react';
import { FiSun, FiMoon } from "react-icons/fi";


function App() {
  
  const [theme , setDark] = useState(false) // Light mode as def

  // Toggles light and dark mode 
  const changeTheme = () => {
      return setDark(prev => !prev)
  }





  return (
    <div className= {`${theme ? "dark" : ""} 
    h-screen w-full grid place-items-center dark:bg-neutral-800 `}>
      <div className='rounded-lg bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-900 dark:text-white dark:hover:bg-black/80  duration-150 ease-in-out'>
          
        <button onClick={() => changeTheme()}
          className='p-3 cursor-pointer w-fit'>{theme ? <FiMoon /> : <FiSun /> }
        </button>

      </div>
    </div>
  )
}

export default App
