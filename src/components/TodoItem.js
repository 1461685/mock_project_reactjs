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
	};

	return (
		<div>
			{isEditing && (
				<li className='todo-item__save'>
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
					<Checkbox
						color='primary'
						checked={complete.completed}
						onChange={completedTodoHandle}
					></Checkbox>
					<li>
						{isSave && <div className='todo-item__title'>{edit.title}</div>}
						{!isSave && <div className='todo-item__title'>{cancelValue}</div>}
					</li>
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
