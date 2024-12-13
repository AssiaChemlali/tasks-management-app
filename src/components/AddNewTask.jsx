import React from 'react'

const AddNewTask = () => {
  return (
    <form className='flex flex-col gap-3'>
      <h3 className='text-left text-violet-500 capitalize font-bold'>Add new task</h3>
      <input 
      type="text" 
      name="task" 
      id="" 
      className='border p-2 rounded ' 
      placeholder='Task name'/>

      <textarea 
      name="desc" 
      id="" 
      rows="10" 
      className='border p-2 rounded '
      placeholder='Task description'/>

      <select name="type" id="" className='border p-2 rounded'>
        <option value="todo">To Do</option>
        <option value="completed">Completed</option>
        <option value="inprogress">in progress</option>
      </select>

      <button 
      type="submit" 
      className='bg-violet-700 p-3 text-white rounded font-bold'>Add Task</button>
      
    </form>
  )
}

export default AddNewTask
