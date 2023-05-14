import React from 'react';
import { useSelector } from 'react-redux';

function TodoList() {
    // Instead of 'store.subscribe', useSelector hook subscribes to the Redux store for you and triggers a re-render of your
    // component whenever the state changes. Under the hood, useSelector uses the Redux store's getState method to get the 
    // current state, and then calls your selector function with that state. If the new state returned by the selector function 
    // is different from the previous state(according to a shallow equality comparison), useSelector will cause your component 
    // to re - render with the new state.
    const todos = useSelector(state => state);

    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul>
    );
}

export default TodoList;
