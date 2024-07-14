import { useState } from "react"
import useTodoStore from "../store"
const CreateToDo =()=>
{
    const createTodo = useTodoStore((state) => state.createTodo);
    const [title,setTitle] =useState("")
    const [status ,setStatus] =useState('INPROGRESS')

    const addTodo=(e) =>{
        e.preventDefault();
        const newTodo = {title,status}
        createTodo(newTodo)
       
        setTitle("")
        setStatus('DONE')

    }


    return(
        <div className="container mt-4">
           <form className="row w-100" onSubmit={addTodo}>
                <div className="col-8">
                    <input type="text" 
                        className="form-control" 
                        placeholder="Enter todo title"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                </div>
                <div className="col-2">
                        <select 
                            className="form-control"
                            value={status}
                            onChange={(e)=> setStatus(e.target.value)}                    
                        >
                            <option value="DONE">DONE</option>
                            <option value="INPROGRESS">INPROGRESS</option>
                        </select>
                </div>
                <div className="col-2">
                    <button type="submit"  className="form-control btn btn-primary"> add todo </button>
                </div>

           </form>
        </div>
    )
}

export default CreateToDo