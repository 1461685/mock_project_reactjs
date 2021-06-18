import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import './TodoForm.css';

const TodoForm = (props) => {
	const [inputAddTodo, setInputAddTodo] = useState('');

	const changeHandle = (event) => {
		setInputAddTodo(event.target.value);
	};

	const submitHandle = (event) => {
		event.preventDefault(); //cancels the event if it is canceled without stopping the propagation of the event to another part.

		props.onClick({
			id: Math.random().toString(),
			title: inputAddTodo,
			completed: false,
		});

		setInputAddTodo(''); //refresh input field to blank after press add button
	};

	return (
		<form>
			<TextField
				variant='outlined'
				placeholder='Add new todo things...'
				onChange={changeHandle}
			></TextField>
			<AddCircleIcon color='primary' fontSize='large' onClick={submitHandle}>
				Add
			</AddCircleIcon>
		</form>
	);
};

export default TodoForm;
