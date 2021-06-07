import React, {useState} from 'react';

import './TodoItem.css';

// const TodoItem = (props) => {
const TodoItem = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [edit, setEdit] = useState({
        id: null,
        title: props.title
    });


    const editingHandle = () => {
        // console.log(props.id);
        setIsEditing(true);
    };

    const changeValueHandle =(event) => {
        setEdit({
            id: props.id,
            title: event.target.value
        });

    };

    const saveValueHandle = (event) => {

        setIsEditing(false);
        // console.log(edit);
        props.editTodo(edit);
    };

    const cancelHandle = () => {
        setEdit({title: props.title});
        setIsEditing(false);
    };

    const deleteHandle = () => {
        
        props.deleteTodo(props.id);
    };

    return (
        <div >
            {isEditing && (
                <li className="todo-item__save">
                    <input type="text" name="editValue" value={edit.title} onChange={changeValueHandle}></input>
                    <button className="todo-item__btnSave" onClick={saveValueHandle}>Save</button>
                    <button className="todo-item__btnDelete" onClick={cancelHandle}>Cancel</button>
                </li>
            )}
            {!isEditing &&
                (
                <div className="todo-item">
                    <input type="checkbox" checked={props.completed}/>
                    <li>
                        <div className="todo-item__title">{edit.title}</div>
                    </li>
                    <div>
                        <button className="todo-item__btnEdit" onClick={editingHandle} >Edit</button> 
                        <button className="todo-item__btnDelete" type="button" onClick={deleteHandle}>Delete</button>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default TodoItem;