import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import SaveAltOutlinedIcon from '@material-ui/icons/SaveAltOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import { Checkbox, TextField, ListItem } from '@material-ui/core';

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
				<ListItem
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
						borderRadius: '12px',
						margin: '1em 0',
					}}
				>
					<TextField
						variant='outlined'
						value={edit.title}
						onChange={changeValueHandle}
					></TextField>
					<div>
						<SaveAltOutlinedIcon
							variant='contained'
							color='primary'
							fontSize='large'
							onClick={saveValueHandle}
						>
							Save
						</SaveAltOutlinedIcon>
						<CancelOutlinedIcon
							variant='contained'
							color='secondary'
							fontSize='large'
							onClick={cancelHandle}
						>
							Cancel
						</CancelOutlinedIcon>
					</div>
				</ListItem>
			)}
			{!isEditing && (
				<ListItem
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
						borderRadius: '12px',
						margin: '1rem 0',
					}}
				>
					<Checkbox
						color='primary'
						checked={complete.completed}
						onChange={completedTodoHandle}
					></Checkbox>
					<ListItem
						style={{ color: 'black', fontSize: '18px', fontWeight: '500' }}
					>
						{isSave && <div>{edit.title}</div>}
						{!isSave && <div>{cancelValue}</div>}
					</ListItem>
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
				</ListItem>
			)}
		</div>
	);
};

export default TodoItem;
