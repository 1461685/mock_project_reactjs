const initialState = {
	list: [
		{ id: 'i1', title: 'Todo 1', completed: false },
		{ id: 'i2', title: 'Todo 2', completed: true },
		{ id: 'i3', title: 'Todo 3', completed: false },
		{ id: 'i4', title: 'Todo 4', completed: true },
	],
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TODO': {
			const newList = [...state.list];
			newList.push(action.payload);

			return {
				...state,
				list: newList,
			};
		}
		case 'COMPLETE_TODO': {
			return state;
		}
		case 'DELETE_TOTO': {
			const newList = state.list.filter(
				(todo) => todo.id !== action.payload.id
			);
			return newList;
		}
		case 'EDIT_TODO': {
			return state;
		}
		default:
			return state;
	}
};

export default todoReducer;
