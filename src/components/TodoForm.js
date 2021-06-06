import React from 'react';

import './TodoForm.css';

const TodoForm = () => {
    return (
        <div className="todoForm">
            <input type="text" name="todoAdd" placeholder="Add new todo things..."></input>
            <button className="btn-addTodo" type="button" name="btn-add">Add</button>
        </div>
    );
};

export default TodoForm;