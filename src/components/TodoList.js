import React from 'react';
import TodoItem from './TodoItem';

import './TodoList.css';

const TodoList = () => {
    const items = [
        {id: 'i1', title: 'Todo 1', completed: false},
        {id: 'i2', title: 'Todo 2', completed: true},
        {id: 'i3', title: 'Todo 3', completed: false},
        {id: 'i4', title: 'Todo 4', completed: true}
    ];

    return (
        <div className="todo-list">
            <ul>
                <TodoItem title={items[0].title} completed={items[0].completed}/>
                <TodoItem title={items[1].title} completed={items[1].completed}/>
                <TodoItem title={items[2].title} completed={items[2].completed}/>
                <TodoItem title={items[3].title} completed={items[3].completed}/>
            </ul>
        </div>
    );
};

export default TodoList;