import axios from "axios"
import { useEffect, useState } from "react"
import "./todolist.css"
const Todolist = () => {


    const [todos, setTodos] = useState([])
    console.log("todos", todos);


   const fetchTodos = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    const data = response.data.slice(0, 10); // Limit to the first 10 items

    setTodos(data);

};

    
    
    useEffect(()=>{
        
        fetchTodos()
    }, [])


    return (
        <div>
            <h3>My TODOS</h3>
            {todos && todos.map((todo)=>(
                <ul key={todo.id}>
                    <li>{todo.title}</li>
                    <li>{todo.completed}</li>
                </ul>
            ))}
        </div>
    )
}



export default Todolist