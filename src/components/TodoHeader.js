import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

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
	return (
		<div className={classes.root}>
			<Typography variant='h3'>React Todo App</Typography>
		</div>
	);
};

export default TodoHeader;
