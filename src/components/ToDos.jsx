import { useEffect, useState } from "react"
import useTodoStore from "../store"
const ToDos =()=>
    {
        const {todos,fetchTodos,updateTodo,deleteTodo} =useTodoStore((state)=>({
            todos :state.todos,
            fetchTodos :state.fetchTodos ,
            updateTodo : state.updateTodo,
            deleteTodo :state.deleteTodo
        }))

        useEffect(()=>{

            fetchTodos()
        })

        const TodoUpdate= (todo)=>{
            const updatedTodo ={
                id :todo.id,
                title:todo.title ,
                status : todo.status == 'DONE' ?'INPROGRESS' :'DONE'
            }
            updateTodo(updatedTodo)
        }
        const handleDeletTodo= (todo)=>{
          
            deleteTodo(todo)
        }
     
        return(
            <div className="container mt-4">
                <ul className="list-group">
                    {todos.map((todo,index)=>(
                        <li key={index} className="list-group-item d-flex  ">
                            <span>{todo.title}</span>
                            <button className="btn btn-danger border ms-auto"
                             onClick={()=>handleDeletTodo(todo)}
                              >
                                Delete
                            </button>
                            <button 
                            className={`btn btn-sm border  ${todo.status== 'DONE' ?'btn-success' :'btn-warning'}`}
                            onClick={()=>TodoUpdate(todo)}
                            > 
                            {todo.status}
                            </button>
                            

                        </li>
                    ))}
                   

                </ul>

            </div>
        )
    }
    
    export default ToDos