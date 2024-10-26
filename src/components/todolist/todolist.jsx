import axios from "axios"
import { useState } from "react"
const Todolist = () => {


    const [todos, setTodos] = useState([])
    console.log("todos", todos);


    const fetchTodos = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        const data = response.data

        setTodos(data)
        console.log("response", response);
    }
    fetchTodos()

    return (
        <div>
            {/* {todos && todos.map} */}
        </div>
    )
}



export default Todolist