import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './TodoForm.css';
import { addNewTodo } from '../actions/todo';
import { useDispatch } from 'react-redux';

const TodoForm = (props) => {
	const [inputAddTodo, setInputAddTodo] = useState('');
	const changeHandle = (event) => {
		setInputAddTodo(event.target.value);
	};

	//Redux
	const dispatch = useDispatch();

	const handleAddTodoClick = () => {
		if (!inputAddTodo || /^\s*$/.test(inputAddTodo)) {
			return;
		}
		const newTodo = {
			id: Math.random().toString(),
			title: inputAddTodo,
			completed: false,
		};

		const action = addNewTodo(newTodo);
		dispatch(action);
		setInputAddTodo('');
	};

	return (
		<form>
			<TextField
				variant='outlined'
				placeholder='Add new todo things...'
				onChange={changeHandle}
				value={inputAddTodo}
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
