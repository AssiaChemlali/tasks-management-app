import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


 export const  fetchedTasks=createAsyncThunk('tasks/fetch',async()=>{
  const url="https://jsonplaceholder.typicode.com/todos?limit=10"
  const response= await fetch(url)
  const data=await response.json()
  console.log("data",data)
  return data
 })
 


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
      
      
      
    }
  }
})

export const {addNewTask,removeTask,fetchTasks}=taskSlice.actions
const tasksReducer=taskSlice.reducer
export default tasksReducer