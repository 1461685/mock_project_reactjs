import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

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
				<ul>
					<li>
						<Link to=''>Home</Link>
					</li>
					<li>
						<Link to='/app'>App</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
				</ul>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/app'>
						<div className={classes.root}>
							<TodoHeader />
							<TodoList />
						</div>
					</Route>
					<Route path='/about'>
						<About />
					</Route>
				</Switch>
			</Router>
		</>
	);
};

export default App;
