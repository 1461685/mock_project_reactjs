import React, { useState } from 'react';

import './TodoItem.css';

const TodoItem = (props) => {
	//Edit state
	const [isEditing, setIsEditing] = useState(false);
	const [edit, setEdit] = useState({
		id: null,
		title: props.title,
	});
	//Complete state
	const [complete, setComplete] = useState({
		id: props.id,
		completed: props.completed,
	});

	//Save state
	const [isSave, setIsSave] = useState(false);

	const cancelValue = props.title;

	const editingHandle = () => {
		setIsEditing(true);
	};

	const changeValueHandle = (event) => {
		setEdit({
			id: props.id,
			title: event.target.value,
		});
	};

	const saveValueHandle = () => {
		props.editTodo(edit);
		setIsEditing(false);
		setIsSave(true);
	};

	const cancelHandle = () => {
		setEdit({
			id: props.id,
			title: cancelValue,
		});
		setIsEditing(false);
		setIsSave(false);
	};

	const deleteHandle = () => {
		props.deleteTodo(props.id);
	};

	const completedTodoHandle = (event) => {
		setComplete({
			id: props.id,
			completed: event.target.checked,
		});
		props.completeTodo(complete);
	};

	return (
		<div>
			{isEditing && (
				<li className='todo-item__save'>
					<input
						type='text'
						name='editValue'
						value={edit.title}
						onChange={changeValueHandle}
					></input>
					<button className='todo-item__btnSave' onClick={saveValueHandle}>
						Save
					</button>
					<button className='todo-item__btnDelete' onClick={cancelHandle}>
						Cancel
					</button>
				</li>
			)}
			{!isEditing && (
				<div className='todo-item'>
					{/* // <div className={isCompleted ? "todo-item__complete": "todo=item"}> */}
					<input
						type='checkbox'
						checked={complete.completed}
						onChange={completedTodoHandle}
					/>
					<li>
						{isSave && <div className='todo-item__title'>{edit.title}</div>}
						{!isSave && <div className='todo-item__title'>{cancelValue}</div>}
						{/* <div className='todo-item__title'>{edit.title}</div> */}
					</li>
					<div>
						<button className='todo-item__btnEdit' onClick={editingHandle}>
							Edit
						</button>
						<button
							className='todo-item__btnDelete'
							type='button'
							onClick={deleteHandle}
						>
							Delete
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default TodoItem;
