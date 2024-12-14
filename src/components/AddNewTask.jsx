import React from 'react'
import {useRef} from 'react'
import { useDispatch } from "react-redux";
import {addNewTask} from '../store/taskSlice'
import {v4 as uuid4} from 'uuid'
const AddNewTask = () => {
const dispatch=useDispatch()

  const titleRef=useRef()
  const descRef=useRef()
const statusRef=useRef()



  function handleSubmit(e){
    e.preventDefault();
    const title=titleRef.current.value;
    const desc=descRef.current.value
    const status=statusRef.current.value

    const todo={
      id:uuid4(),
      title:title,
      description:desc,
      status:status
    }
   
    dispatch(addNewTask(todo))
    titleRef.current.value="";
    descRef.current.value=""
  

  }


  return (
    <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
      <h3 className='text-left text-violet-500 capitalize font-bold'>Add new task</h3>
      <input 
      type="text" 
      name="task" 
      id="" 
      ref={titleRef}
      className='border p-2 rounded ' 
      placeholder='Task name'/>

      <textarea 
      name="desc" 
      id="" 
      rows="5" 
      ref={descRef}
      className='border p-2 rounded '
      placeholder='Task description'/>

      <select
      ref={statusRef} 
      name="type" 
      id="status" 
      className='border p-2 rounded'>
        <option value="To Do">To Do</option>
          <option value="In Progress"> In Progress</option>
          <option value="Completed"> Completed</option>
      </select>

      <button 
      type="submit" 
      className='bg-violet-700 p-3 text-white rounded font-bold'>Add Task</button>

    </form>
  )
}

export default AddNewTask
