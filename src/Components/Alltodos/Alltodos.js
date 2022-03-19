import React, { useEffect, useState } from 'react';
import Todo from './Todo/Todo';
import './Alltodos.css'

// Data load in this component
const Alltodos = () => {
    const [todos, setTodos] = useState([]);
    console.log(todos);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data));
    }, [])
    return (
        <div>
            <h1>This is Todo</h1>
            <h2>Total Todos: {todos.length}</h2>
            <div className='todos-div'>
                {
                    todos.map(todo => <Todo
                        todo={todo}
                        key={todo.id}
                    ></Todo>)
                }
            </div>
        </div>
    );
};

export default Alltodos;