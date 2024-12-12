import { createSlice } from "@reduxjs/toolkit";

 async function getTasks(){
  try {
    const url="https://jsonplaceholder.typicode.com/todos"
    const response= await fetch(url)
    const data=await response.json()
    console.log(data)
    
  } catch (error) {
     console.log(error)
  }

 }

const taskSlice=createSlice({
  name:'tasks',
  initialState:[],
  reducers:{
    addNewTask(state,action){

    },
    removeTask(state,action){

    },
    updateTask(state,action){

    },
    fetchTasks(state,action){
          getTasks()
    }
  }
})

export const {addNewTask,removeTask,fetchTasks}=taskSlice.actions
export default taskSlice.reducer