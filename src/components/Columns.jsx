import React from 'react'

const Columns = ({name, src, list}) => {

    // conditionally render the styles based on the name of the column 
    const styles = {
        completed: "bg-green-500",
        inProgress: "bg-orange-400",
        notStarted: "bg-red-500"
    }



  return (
    <div className='border'>

        <header className={`${styles[name]} rounded-2xl shadow-lg p-1 flex flex-col place-items-center`}>
            <h1 className='text-lg capitalize font-bold text-white'>{name}</h1>
            <img src={src} width={100}/>
        </header>
       


        {list.map((task) => (
            <p>{task.title}</p>
        ))}


    </div>
  )
}

export default Columns
