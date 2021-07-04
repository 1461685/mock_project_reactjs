// import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './TodoForm.css';
import { addNewTodo } from '../actions/todo';
import { useDispatch } from 'react-redux';

const TodoForm = (props) => {
	let inputField = '';

	const changeHandle = (event) => {
		inputField = event.target.value;
	};

	//Redux
	const dispatch = useDispatch();

	const handleAddTodoClick = () => {
		const newTodo = {
			id: Math.random().toString(),
			title: inputField,
			completed: false,
		};

		const action = addNewTodo(newTodo);
		dispatch(action);
	};

	return (
		<form>
			<TextField
				variant='outlined'
				placeholder='Add new todo things...'
				onChange={changeHandle}
			></TextField>
			<AddCircleIcon
				color='primary'
				fontSize='large'
				onClick={handleAddTodoClick}
			>
				Add
			</AddCircleIcon>
		</form>
	);
};

export default TodoForm;
