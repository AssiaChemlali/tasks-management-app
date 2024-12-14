import React, { useRef, useState } from 'react'
import EditTask from './EditTask'
import { useDispatch } from 'react-redux'
import { removeTask } from '../store/taskSlice'

const Task = ({task}) => {
  const dispatch=useDispatch()
  const [isEdit,setIsEdit]=useState(false)

  function handleDeleteTask(id){
    dispatch(removeTask(id))
  }

  let colorText="text-yellow-500"
  if(task.status==="Completed") colorText="text-green-400"
  if(task.status==="In Progress") colorText="text-blue-400"
  


  return (
    <>
    <div 
    className='bg-gray-100 p-3 rounded flex  items-center mb-2  justify-between' 
    key={task.id}>

      <div className='text-left'>
        <p className='font-bold mb-2'>{task.title}</p>
        {task.description && <p>{task.description}</p>}
        <p className={`text-sm capitalize font-bold ${colorText}`}>status:
          {task.status }</p>
      </div>

      <div className='flex space-x-2 '>
        <button 
        onClick={()=>setIsEdit(true)}
        className='bg-blue-500 text-white  text-sm px-3 py-2 rounded'>Edit</button>

        <button 
        onClick={()=>handleDeleteTask(task.id)}
        className='bg-red-500 text-white px-3 py-2 rounded text-sm'>Delete</button>
      </div>

    </div>
    {isEdit && <EditTask  task={task} setIsEdit={setIsEdit}
    />}
    </>

   
  )
}

export default Task
