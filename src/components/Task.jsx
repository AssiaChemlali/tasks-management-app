import React, { useRef, useState } from 'react'
import EditTask from './EditTask'

const Task = ({task}) => {
  const ref=useRef()
  const [isEdit,setIsEdit]=useState(false)
  

  return (
    <>
    <div 
    className='bg-gray-100 p-3 rounded flex  items-center mb-2  justify-between' 
    key={task.id}>

      <div className='text-left'>
        <p className='font-bold mb-2'>{task.title}</p>
        {task.description && <p>{task.description}</p>}
        <p className={`text-sm ${task.status==="Completed" ? 'text-green-400':'text-blue-500'}`}>status:
          {task.status }</p>
      </div>

      <div className='flex space-x-2 '>
        <button 
        onClick={()=>setIsEdit(true)}
        className='bg-blue-500 text-white  text-sm px-3 py-2 rounded'>Edit</button>
        <button className='bg-red-500 text-white px-3 py-2 rounded text-sm'>Delete</button>
      </div>

    </div>
 {isEdit && <EditTask isEdit={isEdit} setIsEdit={setIsEdit}/>}
    

    </>

   
  )
}

export default Task
