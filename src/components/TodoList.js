import React from 'react';
import TodoItem from './TodoItem';

import './TodoList.css';

const TodoList = () => {
    return (
        <div className="todo-list">
            <ul>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </ul>
        </div>
    );
};

export default TodoList;