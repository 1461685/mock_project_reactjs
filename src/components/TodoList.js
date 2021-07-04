import React from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import List from '@material-ui/core/List';
import { useSelector } from 'react-redux';

import './TodoList.css';

const TodoList = (props) => {
	// Redux
	const todoList = useSelector((state) => state.todo.list);
	console.log('Todo list: ', todoList);

	return (
		<List>
			<TodoForm />
			{todoList.map((item) => (
				<TodoItem
					key={item.id}
					id={item.id}
					title={item.title}
					completed={item.completed}
				/>
			))}
		</List>
	);
};

export default TodoList;
