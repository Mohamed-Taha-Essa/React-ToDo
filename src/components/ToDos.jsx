import { useState } from "react"

const ToDos =({todos,settodos})=>
    {

        const TodoUpdate= (todo)=>{
            const updatedStatus = todo.status == 'DONE' ?'INPROGRESS' :'DONE'
            fetch(`http://127.0.0.1:8000/todo/${todo.id}/`,{
                method:'PUT',
                headers:{
                    'Content-Type': 'application/json'

                },
                body :JSON.stringify({title:todo.title ,status:updatedStatus})
            })
            .then(response => response.json())
            .then(data => settodos(todos.map(oldtodo => oldtodo.id == todo.id ?todo :oldtodo  ))
        )
        }
        const handleDeletTodo= (todo)=>{
            fetch(`http://127.0.0.1:8000/todo/${todo.id}/`,{
                method:'DELETE',
                headers:{ 'Content-Type': 'application/json'},
            })
            .then(response => {
                if (response.ok) {
                    settodos(todos.filter(oldtodo => oldtodo.id !== todo.id));
                } else {
                    console.error('Failed to delete');
                }
            })
            .catch(error => console.error('Error:', error));
                
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