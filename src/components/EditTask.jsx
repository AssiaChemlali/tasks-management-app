import React, { useState} from 'react'
import { useDispatch } from 'react-redux'
import { updateTask } from '../store/taskSlice'

const EditTask =({task,setIsEdit}) => {

  const [title,setTitle]=useState(task.title)
  const [desc,setDesc]=useState(task.description)
  const [status,setStaus]=useState(task.status)
  const dispatch=useDispatch()

  function handleSave(e){
    e.preventDefault();
    const updateTodo={
      id:task.id,
      title:title,
      description:desc,
      status:status
    }
    dispatch(updateTask(updateTodo))
    setIsEdit(false)
  }

  return (
    
    <form   
      className='flex flex-col gap-3 absolute  bg-white p-5 shadow drop-shadow z-10'
       onSubmit={handleSave}>
        <p className='text-violet-500 '>Edit Task</p>
        <input 
        type="text" 
        name="task" 
        id="" 
        onChange={(e)=>setTitle(e.target.value)}
        value={title}
        className='border p-2 rounded ' 
        placeholder='Task name'/>

        <textarea 
        name="desc" 
        id="" 
        rows="3" 
        onChange={(e)=>setDesc(e.target.value)}
        value={desc}
        className='border p-2 rounded '
        placeholder='Task description'/>

        <select
        value={status}
        onChange={(e)=>setStaus(e.target.value)}
        name="type" 
        id="status" 
        className='border p-2 rounded'>
          <option value="To Do">To Do</option>
          <option value="Completed">Completed</option>
          <option value="In Progress">in progress</option>
        </select>

      <div className="flex gap-2">
        <button 
          type="submit" 
          className='bg-violet-700 p-3 text-white rounded font-semibold'>save</button>
        <button 
          onClick={()=>setIsEdit(false)}
          className='bg-gray-700 p-3 text-white rounded font-semibold'>cancel</button>
      </div>
    </form>

  )
}

export default EditTask
