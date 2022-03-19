import React from 'react';

const Todo = (props) => {
    const { userId, title} = props.todo;
    return (
        <div>
            <h3>userId: {userId}</h3>
            <h4>Task: {title}</h4>
        </div>
    );
};

export default Todo;