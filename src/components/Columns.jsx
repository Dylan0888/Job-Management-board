import React from 'react'

const Columns = ({name, src, list}) => {

    // conditionally render the styles based on the name of the column 
    const styles = {
        completed: "bg-green-500",
        inProgress: "bg-orange-400",
        notStarted: "bg-red-500"
    }



  return (
    <div className='bg-neutral-200 shadow-md rounded-2xl p-1 '>

        {/* column headers */}
        <header className={`${styles[name]} rounded-2xl shadow-md p-1 flex flex-col place-items-center mb-2`}>
            <h1 className='text-lg capitalize font-bold text-white'>{name}</h1>
            <img src={src} width={100}/>
        </header>
       
       {/* column content  */}
       <div className='flex flex-col gap-2'>
            {list.map((task) => (
            <p key={task.id} 
            className='bg-white rounded-2xl shadow-md p-2 text-wrap break-all cursor-pointer hover:outline-none hover:ring-2 hover:ring-blue-400 duration-100 ease-linear'>
                {task.title}
            </p>
        ))}
       </div>
    </div>
  )
}

export default Columns
