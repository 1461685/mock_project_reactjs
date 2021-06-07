import React, {useState} from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

import './TodoList.css';

const TodoList = (props) => {
    

    const items = [
        {id: 'i1', title: 'Todo 1', completed: false},
        {id: 'i2', title: 'Todo 2', completed: true},
        {id: 'i3', title: 'Todo 3', completed: false},
        {id: 'i4', title: 'Todo 4', completed: true}
    ];

    const [todoItems, setTodoItems] = useState(items);

    // const [todoItems, setTodoItems] = useState([]);

    const addTodo = (item) => {
        //RegExp test method to test whether a string val is empty or only contains spaces.
        if(!item.title || /^\s*$/.test(item.title))
        {
            return;
        }

        const newItem = [item, ...todoItems];

        setTodoItems(newItem);
        // console.log(...todoItems);
    };

    const editTodo = (todo) => {
        //RegExp test method to test whether a string val is empty or only contains spaces.
        if(!todo.title || /^\s*$/.test(todo.title))
        {
            return;
        }

        const newTitle = todo.title;
        // console.log(newTitle);
        todoItems.map((item) => (item.id === todo.id ? item.title = newTitle : item));
        // console.log(todoItems);
        
    };

    const deleteTodo = (todoId) => {
        // console.log(todoId);
        const removeItem = [...todoItems].filter((item) => (item.id !== todoId ));
        setTodoItems(removeItem);
        // console.log(removeItem);
    };

    const completeTodo = (todo) => {
        // console.log(!todo.completed);
        todoItems.map((item) => (item.id === todo.id ? item.completed = !todo.completed : item));
        console.log(todoItems);
    };

    return (
        // <div className="todo-list">
        <ul className="todo-list">
            <TodoForm onSubmit={addTodo}/>
            {/* <TodoItem title={items[0].title} completed={items[0].completed}/>
                <TodoItem title={items[1].title} completed={items[1].completed}/>
                <TodoItem title={items[2].title} completed={items[2].completed}/>
                <TodoItem title={items[3].title} completed={items[3].completed}/> */}
            {todoItems.map(
                ((item) => (
                    <TodoItem 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        completed={item.completed}
                        editTodo={editTodo}
                        deleteTodo={deleteTodo}
                        completeTodo={completeTodo}
                    />)
                ))
            }
            {/* <TodoItem todoItems={todoItems}/> */}
        </ul>
        // </div>
    );
};

export default TodoList;