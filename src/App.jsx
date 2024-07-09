import "bootstrap/dist/css/bootstrap.min.css";

import './App.css'
import CreateToDo from './components/CreateToDo'
import ToDos from './components/ToDos'

function App() {

  return (
    
      <div className="container">
        <div className="row ">
          <div className="col-lg-8 mx-auto">
            <CreateToDo/>
            <ToDos/>
          </div>
        </div>
      
      </div>
      
    
  )
}

export default App
