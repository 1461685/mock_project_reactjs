import React from 'react';
import './App.css';
// import TodoForm from './components/TodoForm';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';

const App = () => {
	return (
		<div className='outer-box'>
			<TodoHeader />
			{/* <TodoForm /> */}
			<TodoList />
		</div>
	);
};

export default App;
