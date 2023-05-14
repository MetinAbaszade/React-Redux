import { createStore } from 'redux';

const initialState = ['Todo 1', 'Todo 2'];


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload];
        default:
            return state;
    }
};

// When we create a Redux store using createStore(reducer), we're creating a state container that can be accessed and updated
// using Redux's getState and dispatch methods.
const store = createStore(reducer, initialState);

export default store;
