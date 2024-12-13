import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


 export const  fetchTasks=createAsyncThunk(
  'tasks/fetchTasks',async()=>{
  const url="https://jsonplaceholder.typicode.com/todos?_limit=5"
  const response= await fetch(url)
  const data=await response.json()
  return data.map(task=>(
    {
      id:task.id,
      title:task.title,
      description:"",
      status:task.completed ? 'Completed':'To Do'
    }
  )
)
 })
 
const initialState={
  tasks:[],
  loading:false,
  error:null,
  status:"All"
}

const taskSlice=createSlice({
  name:'tasks',
  initialState,
  reducers:{
    addNewTask(state,action){

    },
    removeTask(state,action){

    },
    updateTask(state,action){

    },
   
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.loading = true;
      state.error=null
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchTasks.rejected, (state) => {
      state.loading = false;
      state.error=error.message
    });
  }
})

export const {addNewTask,removeTask}=taskSlice.actions
const tasksReducer=taskSlice.reducer
export default tasksReducer