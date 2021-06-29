// import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './TodoForm.css';
import { addNewTodo } from '../actions/todo';
import { useDispatch } from 'react-redux';

const TodoForm = (props) => {
	// const [inputAddTodo, setInputAddTodo] = useState('');

	let inputField = '';

	const changeHandle = (event) => {
		// setInputAddTodo(event.target.value);
		inputField = event.target.value;
	};

	// const submitHandle = (event) => {
	// 	event.preventDefault(); //cancels the event if it is canceled without stopping the propagation of the event to another part.

	// 	props.onClick({
	// 		id: Math.random().toString(),
	// 		title: inputAddTodo,
	// 		completed: false,
	// 	});

	// 	setInputAddTodo(''); //refresh input field to blank after press add button
	// };

	//Redux
	const dispatch = useDispatch();

	const handleAddTodoClick = () => {
		const newTodo = {
			id: Math.random().toString(),
			// title: inputAddTodo,
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
			{/* <AddCircleIcon color='primary' fontSize='large' onClick={submitHandle}> */}
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
