import React from 'react';
import './Todo.css'

const Todo = (props) => {
    const { id, title} = props.todo;
    return (
        <div className='todo'>
            <h3>User: {id}</h3>
            <h4>Task: {title}</h4>
        </div>
    );
};

export default Todo;