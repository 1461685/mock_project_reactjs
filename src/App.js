import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
		<>
			<Router>
				<Switch>
					<Route path='/about'>
						<div>
							About Page, Click <Link to='/users'>Here</Link> To Go To Users
							Page
						</div>
					</Route>
					<Route path='/users'>
						<div>
							About Page, Click <Link to='/'>Here</Link> To Go To Index Page
						</div>
					</Route>
					<Route path='/'>
						<div className={classes.root}>
							<TodoHeader />
							<TodoList />
						</div>
					</Route>
				</Switch>
			</Router>
		</>
	);
};

export default App;
