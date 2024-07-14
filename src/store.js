import { create } from 'zustand'

const useTodoStore = create((set) =>({
    todos:[],
    fetchTodos:async ()=>{
        const response = await fetch("http://127.0.0.1:8000/todo/")
        const data = await response.json()
        set({todos:data})
    },
    createTodo:async (newTodo)=>{
        const response = fetch("http://127.0.0.1:8000/todo/" ,{
                                    method  : 'POST' ,
                                    headers:{'Content-Type': 'application/json' },
                                    body :JSON.stringify(newTodo)
                                     })
        const data = (await response).json()
        set((state)=> ({todos :[...state.todos ,data]}))
    },

    updateTodo:async (updatedTodo)=>{
        const response = await fetch(`http://127.0.0.1:8000/todo/${updatedTodo.id}/`,{
            method:'PUT',
            headers:{ 'Content-Type': 'application/json'},
            body :JSON.stringify({title:updatedTodo.title ,status:updatedTodo.status})
        })
        const data = response.json()
        set((state) => ({
            todos: state.todos.map((oldTodo) => (oldTodo.id === updatedTodo.id ? data : oldTodo))
        }));    
    },
    deleteTodo:async (todo)=>{
        const response =  fetch(`http://127.0.0.1:8000/todo/${todo.id}/`,{
                        method:'DELETE',
                        headers:{ 'Content-Type': 'application/json'},
                     })
        const data =response.json()
        if (response.ok) {
            set((state)=>state.todos.filter(oldtodo => oldtodo.id !== todo.id));
        } else {
            console.error('Failed to delete');
        }
    }

}))

export default useTodoStore