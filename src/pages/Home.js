import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
	root: {
		color: '#01579b',
		textAlign: 'center',
		width: '100%',
		marginBottom: '10px',
	},
});

const Home = () => {
	const classes = useStyle();
	return (
		<div className={classes.root}>
			<Typography variant='h3'>Welcome to Todo App</Typography>
		</div>
	);
};

export default Home;
