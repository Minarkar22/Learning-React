"use client";

import { useEffect, useState } from "react";

export default function ToDoFetch(){

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function LoadTodo(){
            let response = await fetch('https://jsonplaceholder.typicode.com/todos');
            let json = await response.json();
            console.log("Data done", json);
            setTodos(json);
        }
        LoadTodo();
    }, []);

    console.log("Render");

    return (<div>
        Todo fetch from server
        {
            todos.map(todo => <div key={todo.id}>
                {todo.title}
            </div>)
        }
    </div>)
}