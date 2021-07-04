import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
	root: {
		color: '#01579b',
		textAlign: 'center',
		width: '100%',
		marginBottom: '10px',
	},
	paragraph: {
		textAlign: 'center',
		color: '#212121',
	},
});

const About = () => {
	const classes = useStyle();
	return (
		<div className={classes.root}>
			<Typography variant='h3'>About this App</Typography>
			<p className={classes.paragraph}>This is Todo app using React JS.</p>
		</div>
	);
};

export default About;
