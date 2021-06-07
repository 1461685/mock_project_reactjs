import React, {useState} from 'react';

import './TodoForm.css';

const TodoForm = (props) => {

    const [inputAddTodo, setInputAddTodo] = useState('');

    const changeHandle = (event) => {
        setInputAddTodo(event.target.value);
        // console.log(inputAddTodo);
    };

    const submitHandle = (event) => {
        event.preventDefault();//cancels the event if it is canceled without stopping the propagation of the event to another part.

        props.onSubmit({
            id: Math.random().toString(),
            title: inputAddTodo,
            completed: false
        });

        setInputAddTodo('');//refresh input field to blank after press add button
    };

    

    return (
        <form className="todoForm" onSubmit={submitHandle}>
            <input 
                type="text" 
                placeholder="Add new todo things..." 
                value={inputAddTodo}
                onChange={changeHandle}></input>
            <button className="btn-addTodo" name="btn-add">Add</button>
        </form>
    );
};

export default TodoForm;