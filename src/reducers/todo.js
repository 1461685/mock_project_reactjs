const initialState = {
	list: [],
	completed: null,
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TODO': {
			return state;
		}
		case 'COMPLETE_TODO': {
			return state;
		}
		case 'DELETE_TOTO': {
			return state;
		}
		case 'EDIT_TODO': {
			return state;
		}
		default:
			return state;
	}
};

export default todoReducer;
