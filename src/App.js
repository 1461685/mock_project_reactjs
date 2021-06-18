import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';

const useStyle = makeStyles({
	root: {
		width: '500px',
		margin: '2% auto',
	},
});

const App = () => {
	const classes = useStyle();

	return (
		<div className={classes.root}>
			<TodoHeader />
			<TodoList />
		</div>
	);
};

export default App;
