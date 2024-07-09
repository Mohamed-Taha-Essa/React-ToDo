import "bootstrap/dist/css/bootstrap.min.css";

import './App.css'
import CreateToDo from './components/CreateToDo'
import ToDos from './components/ToDos'

function App() {

  return (
    
      <div>
       <CreateToDo/>
       <ToDos/>
      </div>
      
    
  )
}

export default App
