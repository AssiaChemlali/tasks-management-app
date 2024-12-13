import React, { useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchTasks} from '../store/taskSlice'
import { useState } from 'react'
import Task from './Task'
import { useLayoutEffect } from 'react'

const ListTasks = () => {
  const tasks=useSelector((state)=>state.tasks.tasks)
  const loading=useSelector((state)=>state.tasks.loading)
  const error=useSelector((state)=>state.tasks.error)
  const dispatch=useDispatch()

  useEffect (()=>{
      dispatch(fetchTasks())
  
  },[dispatch])


  
  return (
    <div className='mt-10 relative'>

      <div className='flex items-center mb-3'>
        <h3 className='text-violet-500 font-bold'>Task List </h3>
        <select name="" id="" className='rounded ml-auto border p-2'>
          <option value="all">All</option>
          <option value="todo">To Do</option>
          <option value="inprogress"> In Progress</option>
          <option value="completed"> Completed</option>
        </select>
      </div>
      
   {loading && <p className='text-left text-xl mb-5'>Loading data ...</p>}
   {error && <p className='text-left text-xl mb-5'>{error}</p>}
      {
        tasks.map((task)=>{
          return(
           <Task task={task} key={task.id}/>
          )
        })
      }
     

    </div>
  )
}

export default ListTasks
