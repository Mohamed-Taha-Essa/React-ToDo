# React To-Do App  

A frontend application for managing a To-Do list, built with React and Zustand for state management. This app connects to a Django REST Framework backend to perform CRUD operations on tasks.  

---

## Features  

- **Task Management**:  
  - Create, update, delete, and list tasks.  
  - Toggle task status between `INPROGRESS` and `DONE`.  
- **Zustand for State Management**:  
  - Centralized state management with async actions for API calls.  
- **RESTful API Integration**:  
  - Fetches and syncs data with the Django backend.  

---

## Technologies Used  

- **Frontend**: React.js, Zustand  
- **Styling**: Bootstrap (for layout and styling)  
- **Backend API**: Django REST Framework  

---

## Project Structure  

```plaintext  
react-todo/  
│  
├── src/  
│   ├── components/  
│   │   ├── CreateToDo.jsx  # Component for adding new tasks  
│   │   ├── ToDos.jsx       # Component for listing and managing tasks  
│   │  
│   ├── store/  
│   │   ├── store.js        # Zustand store for state management  
│   │  
│   ├── App.js              # Main entry point of the React app  
│   ├── index.js            # React DOM rendering  
│  
├── public/                 # Public files for the app  
├── package.json            # Project dependencies  
└── README.md               # Documentation  
```  

---

## Components  

### 1. `ToDos.jsx`  

Manages and displays a list of tasks fetched from the Django backend.  

#### Key Features  
- Fetch tasks from the backend when the component is mounted.  
- Update a task's status between `DONE` and `INPROGRESS`.  
- Delete tasks from the list.  

```jsx  
import { useEffect, useState } from "react";  
import useTodoStore from "../store";  

const ToDos = () => {  
    const { todos, fetchTodos, updateTodo, deleteTodo } = useTodoStore((state) => ({  
        todos: state.todos,  
        fetchTodos: state.fetchTodos,  
        updateTodo: state.updateTodo,  
        deleteTodo: state.deleteTodo,  
    }));  

    useEffect(() => {  
        fetchTodos();  
    }, []);  

    return (  
        <div className="container mt-4">  
            <ul className="list-group">  
                {todos.map((todo, index) => (  
                    <li key={index} className="list-group-item d-flex">  
                        <span>{todo.title}</span>  
                        <button  
                            className="btn btn-danger border ms-auto"  
                            onClick={() => deleteTodo(todo)}  
                        >  
                            Delete  
                        </button>  
                        <button  
                            className={`btn btn-sm border ${  
                                todo.status === "DONE" ? "btn-success" : "btn-warning"  
                            }`}  
                            onClick={() => updateTodo({  
                                ...todo,  
                                status: todo.status === "DONE" ? "INPROGRESS" : "DONE",  
                            })}  
                        >  
                            {todo.status}  
                        </button>  
                    </li>  
                ))}  
            </ul>  
        </div>  
    );  
};  

export default ToDos;  
```  

---

### 2. `CreateToDo.jsx`  

Provides a form for adding new tasks to the To-Do list.  

#### Key Features  
- Handles user input for task title and status.  
- Submits new tasks to the backend using the Zustand store.  

```jsx  
import { useState } from "react";  
import useTodoStore from "../store";  

const CreateToDo = () => {  
    const createTodo = useTodoStore((state) => state.createTodo);  
    const [title, setTitle] = useState("");  
    const [status, setStatus] = useState("INPROGRESS");  

    const addTodo = (e) => {  
        e.preventDefault();  
        createTodo({ title, status });  
        setTitle("");  
        setStatus("DONE");  
    };  

    return (  
        <form onSubmit={addTodo}>  
            <input  
                type="text"  
                value={title}  
                onChange={(e) => setTitle(e.target.value)}  
                placeholder="Task Title"  
            />  
            <select  
                value={status}  
                onChange={(e) => setStatus(e.target.value)}  
            >  
                <option value="INPROGRESS">INPROGRESS</option>  
                <option value="DONE">DONE</option>  
            </select>  
            <button type="submit">Add Task</button>  
        </form>  
    );  
};  

export default CreateToDo;  
```  

---

## State Management  

The app uses Zustand for state management.  

### `store.js`  

Manages tasks, fetches data from the backend, and performs CRUD operations.  

#### Actions:  
- **fetchTodos**: Fetch all tasks from the backend.  
- **createTodo**: Add a new task to the backend.  
- **updateTodo**: Update a task's details.  
- **deleteTodo**: Remove a task from the backend.  

---

## How to Run  

1. **Install Dependencies**:  
   ```bash  
   npm install  
   ```  

2. **Start the Development Server**:  
   ```bash  
   npm start  
   ```  

3. **Ensure the Django Backend is Running**:  
   - Run your Django server at `http://127.0.0.1:8000/`.  

4. **Access the App**:  
   - Open `http://localhost:3000/` in your browser.  

---

## Future Improvements  

- Add authentication for users.  
- Integrate notifications for task updates.  
- Enhance UI/UX with animations.  

