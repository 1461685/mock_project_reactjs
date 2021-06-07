import React, {useState} from 'react';

import './TodoItem.css';

// const TodoItem = (props) => {
const TodoItem = (props) => {
    //Edit state
    const [isEditing, setIsEditing] = useState(false);
    const [edit, setEdit] = useState({
        id: null,
        title: props.title
    });
    //Complete state
    // const [isCompleted, setIsCompleted] = useState(false);
    const [complete, setComplete] = useState({
        id: props.id,
        completed: props.completed
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

    const completedTodoHandle = (event) =>{
        // alert('Completed!');
        // console.log(props.id, event.target.checked);
        // if(props.completed)
        // {
        //     setIsCompleted(true);
        // }

        setComplete({
            id: props.id,
            completed: event.target.value
        });
        // console.log(complete);
        props.completeTodo(complete);
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
                    {/* // <div className={isCompleted ? "todo-item__complete": "todo=item"}> */}
                        <input type="checkbox" checked={complete.completed} onChange={completedTodoHandle}/>
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