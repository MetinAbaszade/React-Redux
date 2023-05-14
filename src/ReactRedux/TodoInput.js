import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function TodoInput() {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        // With pure Redux, you import the store into your component and use 'store.dispatch(action)' to dispatch actions.
        // With react-redux, you use the useDispatch hook to get the dispatch function, and then you can dispatch actions 
        // with dispatch(action). This hook returns a reference to the dispatch function(store.dispatch) from the Redux store. 
        // You can use it to dispatch actions to the store. It's important to note that useDispatch does not cause your 
        // component to re-render, unlike useSelector. It simply gives you the ability to dispatch actions.
        dispatch({ type: 'ADD_TODO', payload: title });
        setTitle('');
    };

    return (
        <div>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
}

export default TodoInput;
