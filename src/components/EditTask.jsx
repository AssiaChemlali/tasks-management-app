import React, { useEffect ,useRef} from 'react'
import { forwardRef } from 'react'
const EditTask =({isEdit,setIsEdit}) => {
 
  useEffect(()=>{
   
  },[])

  function handleCancel(){
   setIsEdit(false)
  }

  return (
    



    
    <form   className='flex flex-col gap-3 absolute bottom-0 bg-white p-5 shadow drop-shadow right-0' >
    
    <input 
    type="text" 
    name="task" 
    id="" 
    
    className='border p-2 rounded ' 
    placeholder='Task name'/>

    <textarea 
    name="desc" 
    id="" 
    rows="3" 
 
    className='border p-2 rounded '
    placeholder='Task description'/>

    <select
   
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
    onCancel={handleCancel}
    className='bg-gray-700 p-3 text-white rounded font-semibold'>cancel</button>
  

</div>
 </form>

  )
}

export default EditTask
