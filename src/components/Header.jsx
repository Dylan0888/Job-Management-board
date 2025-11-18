import React from 'react'
import { FiSun, FiMoon } from "react-icons/fi";

const Header = ({theme, setDark}) => {

     const changeTheme = () => {
      return setDark(prev => !prev)
  }



  return (
    <header className=' bg-neutral-800 grid grid-cols-5 gap-2.5 p-2 shadow-2xl'>
         
        <div className='col-span-1 flex place-items-center justify-center'>
          
          {/* <button onClick={() => changeTheme()}
              className='p-3 cursor-pointer rounded-lg bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-900 dark:text-white dark:hover:bg-black/80  duration-150 ease-in-out '>{theme ? <FiMoon /> : <FiSun /> }
          </button> */}

        </div> 
          
          <div className='col-span-3 text-4xl font-extrabold text-orange-700 text-shadow-lg tracking-wide text-center'> Task Manager 9000.1</div>
          <div className=''></div>
      </header>
  )
}

export default Header

 
 //   <div className= {`${theme ? "dark" : ""} 
  //   h-screen w-full grid place-items-center dark:bg-neutral-800 `}>
  //     <div className='rounded-lg bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-900 dark:text-white dark:hover:bg-black/80  duration-150 ease-in-out'>
          
  //       <button onClick={() => changeTheme()}
  //         className='p-3 cursor-pointer w-fit'>{theme ? <FiMoon /> : <FiSun /> }
  //       </button>

  //     </div>
  //   </div> 