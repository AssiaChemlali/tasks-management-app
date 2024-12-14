import React, { useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchTasks, filterTasks} from '../store/taskSlice'
import Task from './Task'

const ListTasks = () => {
  const tasks=useSelector((state)=>state.tasks.tasks)
  const loading=useSelector((state)=>state.tasks.loading)
  const error=useSelector((state)=>state.tasks.error)
  const dispatch=useDispatch()


  useEffect (()=>{
      dispatch(fetchTasks()) 
  },[dispatch])



  function handleFilterTasks(status){ 
    dispatch(filterTasks(status))
  }
  
  return (
    <div className='mt-10 relative'>

      <div className='flex items-center mb-3'>
        <h3 className='text-violet-500 font-bold'>Task List </h3>
        <select name="" id="staus" className='rounded ml-auto border p-2'
        onChange={(e)=>handleFilterTasks(e.target.value)}
        >
          <option value="All">All</option>
          <option value="To Do">To Do</option>
          <option value="In Progress"> In Progress</option>
          <option value="Completed"> Completed</option>
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
