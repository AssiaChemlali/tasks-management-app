import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchTasks,fetchedTasks } from '../store/taskSlice'
const ListTasks = () => {
  // const {tasks}=useSelector(state=>state.tasks)
  const dispatch=useDispatch()


  useEffect(()=>{
      dispatch(fetchedTasks())
  },[dispatch])


  // console.log("listTasks",tasks)
  return (
    <div>
      
    </div>
  )
}

export default ListTasks
