import React, { useEffect ,useRef, useState} from 'react'
import { forwardRef } from 'react'
import { useDispatch } from 'react-redux'
import { updateTask } from '../store/taskSlice'
const EditTask =({isEdit,onClose,task}) => {
    const [title,setTitle]=useState(task.title)
    const [desc,setDesc]=useState(task.description)
    const [status,setStaus]=useState(task.status)
    const dispatch=useDispatch()

  useEffect(()=>{
   
  },[])

function handleSave(e){

  e.preventDefault();
  const updateTodo={
    id:task.id,
    title:title,
    description:desc,
    status:status
  }
  dispatch(updateTask(updateTodo))
  setTitle("")
  setStaus('')
  setDesc('')
}

  return (
    
    <form   className='flex flex-col gap-3 absolute  bg-white p-5 shadow drop-shadow right-0'
    onSubmit={handleSave}
    
    >
    
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
   
    name="type" 
    id="status" 
    className='border p-2 rounded'>
      <option value="To Do"
      onChange={(e)=>setStaus(e.target.value)}
      selected={status==='To Do'}>To Do</option>
      <option value="Completed" selected={status==='Completed'}>Completed</option>
      <option value="In Progress" selected={status==='In Progress'}>in progress</option>
    </select>

<div className="flex gap-2">
   <button 
    type="submit" 
    className='bg-violet-700 p-3 text-white rounded font-semibold'>save</button>
 
  <button 
    onCancel={onClose()}
    className='bg-gray-700 p-3 text-white rounded font-semibold'>cancel</button>
  

</div>
 </form>

  )
}

export default EditTask
