
import './App.css'
import AddNewTask from './components/AddNewTask'
import ListTasks from './components/ListTasks'
import { Provider } from 'react-redux'
import store from './store/store'
function App() {


  return (
    <Provider store={store}>
     <div className='p-10 text-center font-serif'>
     <h2 className='text-violet-500 font-bold capitalize  text-2xl mb-5'>task Management App</h2>

     <AddNewTask/>
     <ListTasks/>
     </div>
     
    </Provider>
  )
}

export default App
