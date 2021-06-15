import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import EditIcon from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';

import './TodoItem.css';

const TodoItem = (props) => {
	//Edit state
	const [isEditing, setIsEditing] = useState(false);
	const [edit, setEdit] = useState({
		id: null,
		title: props.title,
	});
	//Complete state
	const [isCompleted, setIsCompleted] = useState(props.completed);
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
		setIsCompleted(event.target.checked);
		props.completeTodo(complete);
		// console.log(isEditing);
		// console.log(!isCompleted);
	};

	return (
		<div>
			{isEditing && (
				<li className='todo-item__save'>
					{/* <input
						type='text'
						name='editValue'
						value={edit.title}
						onChange={changeValueHandle}
					></input> */}
					{/* <button className='todo-item__btnSave' onClick={saveValueHandle}>
						Save
					</button>
					<button className='todo-item__btnDelete' onClick={cancelHandle}>
						Cancel
					</button> */}
					<TextField
						variant='outlined'
						value={edit.title}
						onChange={changeValueHandle}
					></TextField>
					<Button variant='contained' color='primary' onClick={saveValueHandle}>
						Save
					</Button>
					<Button variant='contained' color='secondary' onClick={cancelHandle}>
						Cancel
					</Button>
				</li>
			)}
			{!isEditing && (
				<div className='todo-item'>
					{/* // <div className={isCompleted ? "todo-item__complete": "todo=item"}> */}
					{/* <input
						type='checkbox'
						checked={complete.completed}
						onChange={completedTodoHandle}
					/> */}
					<Checkbox
						color='primary'
						checked={complete.completed}
						onChange={completedTodoHandle}
					></Checkbox>
					<li>
						{isSave && <div className='todo-item__title'>{edit.title}</div>}
						{!isSave && <div className='todo-item__title'>{cancelValue}</div>}
						{/* <div className='todo-item__title'>{edit.title}</div> */}
					</li>
					{/* <div> */}
					{/* <button className='todo-item__btnEdit' onClick={editingHandle}>
							Edit
						</button> */}
					{/* <button
							className='todo-item__btnDelete'
							type='button'
							onClick={deleteHandle}
						>
							Delete
						</button> */}
					{/* <Button variant='contained' color='primary' onClick={editingHandle}>
							Edit
						</Button> */}
					{/* <Button
							variant='contained'
							color='secondary'
							onClick={deleteHandle}
						>
							Delete
						</Button> */}
					{/* <EditIcon color='primary' onClick={editingHandle}></EditIcon>
						<Delete color='secondary' onClick={deleteHandle}></Delete> */}
					{/* </div> */}
					{isCompleted && (
						<div>
							<EditIcon color='disabled'></EditIcon>
							<Delete color='disabled'></Delete>
						</div>
					)}
					{!isCompleted && (
						<div>
							<EditIcon color='primary' onClick={editingHandle}></EditIcon>
							<Delete color='secondary' onClick={deleteHandle}></Delete>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default TodoItem;
