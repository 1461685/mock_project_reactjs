import React from 'react';

import './TodoItem.css';

const TodoItem = (props) => {
    
    return (
        <div className="todo-item">
            
            <input type="checkbox" checked={props.completed}/>
            <li>
                
                <div className="todo-item__title">{props.title}</div>
            </li>
            <div>
                <button className="todo-item__btnEdit" type="button" >Edit</button> 
                <button className="todo-item__btnDelete" type="button" >Delete</button>
            </div>
            
        </div>
    );
};

export default TodoItem;