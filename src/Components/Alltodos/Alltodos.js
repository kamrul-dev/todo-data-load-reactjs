import React, { useEffect, useState } from 'react';
import Todo from './Todo/Todo';

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
            {
                todos.map(todo => <Todo
                    todo={todo}
                    key={todo.id}
                ></Todo>)
            }
        </div>
    );
};

export default Alltodos;