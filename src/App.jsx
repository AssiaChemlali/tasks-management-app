
import './App.css'
import AddNewTask from './components/AddNewTask'
import ListTasks from './components/ListTasks'
import { Provider } from 'react-redux'
import store from './store/store'
function App() {


  return (
    <Provider store={store}>
      <AddNewTask/>
      <ListTasks/>
    </Provider>
  )
}

export default App
