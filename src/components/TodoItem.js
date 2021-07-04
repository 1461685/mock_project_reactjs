import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import SaveAltOutlinedIcon from '@material-ui/icons/SaveAltOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import { Checkbox, TextField, ListItem } from '@material-ui/core';
import './TodoItem.css';
import { deleteTodo, completeTodo, editTodo } from '../actions/todo';
import { useDispatch } from 'react-redux';

const TodoItem = (props) => {
	//Edit state
	const [isEditing, setIsEditing] = useState(false);
	const [edit, setEdit] = useState({
		id: null,
		title: props.title,
	});

	const cancelValue = props.title;

	const changeValueHandle = (event) => {
		setEdit({
			id: props.id,
			title: event.target.value,
		});
	};

	const saveValueHandle = () => {
		// props.editTodo(edit);
		setIsEditing(false);
		// setIsSave(true);
		const editItem = {
			id: props.id,
			title: edit.title,
		};
		console.log(editItem);
		const action = editTodo(editItem);
		dispatch(action);
	};

	const cancelHandle = () => {
		setEdit({
			id: props.id,
			title: cancelValue,
		});
		setIsEditing(false);
	};

	//Redux
	const dispatch = useDispatch();
	const handleDeleteTodoClick = () => {
		const deleteItem = {
			id: props.id,
		};
		const action = deleteTodo(deleteItem);
		dispatch(action);
		console.log(props.id);
		console.log(action.payload.id);
	};

	const handleCompleteTodoClick = () => {
		const completeItem = {
			id: props.id,
			completed: !props.completed,
		};
		console.log(completeItem);
		const action = completeTodo(completeItem);
		dispatch(action);
	};

	const handleEditTodoClick = () => {
		setIsEditing(true);
	};

	return (
		<div>
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
						checked={props.completed}
						onChange={handleCompleteTodoClick}
					></Checkbox>
					<div>{props.title}</div>
					{!props.completed && (
						<div>
							<EditIcon
								color='primary'
								onClick={handleEditTodoClick}
							></EditIcon>
							<Delete
								color='secondary'
								onClick={handleDeleteTodoClick}
							></Delete>
						</div>
					)}
					{props.completed && (
						<div>
							<EditIcon color='disabled'></EditIcon>
							<Delete color='disabled'></Delete>
						</div>
					)}
				</ListItem>
			)}
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
		</div>
	);
};

export default TodoItem;
