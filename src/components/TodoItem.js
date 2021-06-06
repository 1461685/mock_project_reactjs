import React from 'react';

import './TodoItem.css';

const TodoItem = () => {
    return (
        <div className="todo-item">
            <input type="checkbox"/>
            <li>
                <div className="todo-item__title">Todo item number 1</div>
            </li>
            <div>
                <button className="todo-item__btnEdit" type="button" name="btn-editTodo">Edit</button>
                <button className="todo-item__btnDelete" type="button" name="btn-deleteTodo">Delete</button>
            </div>
            
        </div>
    );
};

export default TodoItem;