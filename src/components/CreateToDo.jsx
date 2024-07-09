const CreateToDo =()=>
{



    return(
        <div className="container mt-4">
           <form className="row w-100">
            <div className="col-8">
                <input type="text" className="form-control" placeholder="Enter todo title"/>
            </div>
            <div className="col-2">
                    <select className="form-control">
                        <option value="DONE">DONE</option>
                        <option value="INPROGRESS">INPROGRESS</option>
                    </select>
                </div>
            <div className="col-2">
                <button type="submit" className="form-control btn btn-primary">add todo</button>
            </div>

           </form>
        </div>
    )
}

export default CreateToDo