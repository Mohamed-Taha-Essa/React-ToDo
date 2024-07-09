import { useState } from "react"

const ToDos =()=>
    {
      const [todo ,settodos] =useState([
        {tilte:'todo1' ,status :'DONE'},
        {tilte:'todo2' ,status :'INPROGRESS'},
        {tilte:'todo3' ,status :'INPROGRESS'},
        {tilte:'todo4' ,status :'DONE'},
        {tilte:'todo5' ,status :'INPROGRESS'},

      ])
    
    
        return(
            <div className="container mt-4">
                <ul className="list-group">
                    {todo.map((todo,index)=>(
                        <li key={index} className="list-group-item d-flex justify-content-between">
                            <span>{todo.tilte}</span>
                            <button className="btn btn-primary border"> {todo.status}</button>

                        </li>
                    ))}
                   

                </ul>

            </div>
        )
    }
    
    export default ToDos