import { useState } from "react"

const CreateToDo =({todos,settodos})=>
{

    const [title,setTitle] =useState("")
    const [status ,setStatus] =useState('INPROGRESS')

    const addTodo=(e) =>{
        e.preventDefault();
        const newTodo = {title,status}
          
        fetch('http://127.0.0.1:8000/todo/' ,{
            method  : 'POST' ,
            headers:{
                'Content-Type': 'application/json'

            },
            body :JSON.stringify(newTodo)
        })
        .then(response => response.json())
        .then(data =>{ 
            settodos([...todos ,newTodo])
            setTitle("")
            setStatus('DONE')
        })

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