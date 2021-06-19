import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './TodoHeader.css';

const useStyle = makeStyles({
	root: {
		color: '#03a9f4',
		textAlign: 'center',
		width: '100%',
		marginBottom: '10px',
	},
});

const TodoHeader = () => {
	const classes = useStyle();
	const count = useSelector((state) => state.counter.value);
	console.log(count);
	return (
		<div className={classes.root}>
			<Typography variant='h3'>React Todo App</Typography>
			<Typography variant='caption'>
				Value of counter from redux: {count} Back to
				<Link to='test-redux'> test-redux Page</Link> to update
			</Typography>
		</div>
	);
};

export default TodoHeader;
