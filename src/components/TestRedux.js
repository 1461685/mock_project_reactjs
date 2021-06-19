import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../features/counter/counterSlice';
import { Button, Grid, Typography } from '@material-ui/core';

const TestRedux = (props) => {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Typography align='center'>
					Caculate Value for Auto. This Value will affected to all application{' '}
					<br />
					Go to <Link to='/'>Index Page</Link> the other page to view result
				</Typography>
			</Grid>
			<Grid item xs={4}></Grid>
			<Grid item xs={1}>
				<Button
					variant='contained'
					color='primary'
					onClick={() => dispatch(increment())}
				>
					+
				</Button>
			</Grid>
			<Grid item xs={2}>
				<Typography align='center' variant='h3'>
					{count}
				</Typography>
			</Grid>
			<Grid item xs={1}>
				<Button
					variant='contained'
					color='primary'
					onClick={() => dispatch(decrement())}
				>
					-
				</Button>
			</Grid>
			<Grid item xs={4}></Grid>
		</Grid>
	);
};

export default TestRedux;
