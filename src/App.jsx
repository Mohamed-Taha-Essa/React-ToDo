import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import './App.css'
import CreateToDo from './components/CreateToDo'
import ToDos from './components/ToDos'

function App() {

  // const [todos ,settodos] =useState([])

  // useEffect(()=>{
  //   fetch('http://127.0.0.1:8000/todo/')
  //   .then(response=>response.json())
  //   .then(data =>settodos(data))
  // })
//   // const onUpdateTodo =(updatedtodo)=>{
//   //   settodos(todos.map(todo => todo.id == updatedtodo.id ?updatedtodo :todo  ))
//   // }
// const onCreateTodo =(newTodo)=>{
//   settodos([...todos ,newTodo])
// }
  return (
    
      <div className="container">
        <div className="row ">
          <div className="col-lg-8 mx-auto">
            <CreateToDo  />
            <ToDos  />
          </div>
        </div>
      
      </div>
      
    
  )
}

export default App
