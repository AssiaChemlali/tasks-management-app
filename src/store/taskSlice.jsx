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
  allTasks: [],
  loading:false,
  error:null,
  status:"All"
}

const taskSlice=createSlice({
  name:'tasks',
  initialState,
  reducers:{
    addNewTask(state,action){
    state.tasks.push(action.payload)
    state.allTasks.push(action.payload);
   
    },
    removeTask(state,action){
        state.tasks=state.tasks.filter((task)=>task.id!==action.payload)
        state.allTasks = state.allTasks.filter((task) => task.id !== action.payload); 

    },
    updateTask(state,action){
     state.tasks= state.tasks.map((task)=>{
        return task.id===action.payload.id ? action.payload : task
      })
      state.allTasks = state.allTasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );

    },
    filterTasks(state,action){
      if (action.payload === "All") {
        state.tasks = state.allTasks;
      } else {
          state.tasks = state.allTasks.filter(
            (task) => task.status === action.payload
          );
      }

    
    }
   
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.loading = true;
      state.error=null
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
      state.allTasks = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchTasks.rejected, (state) => {
      state.loading = false;
      state.error=error.message
    });
  }
})

export const {addNewTask,removeTask,updateTask,filterTasks}=taskSlice.actions
const tasksReducer=taskSlice.reducer
export default tasksReducer