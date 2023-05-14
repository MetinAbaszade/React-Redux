// ComponentB.js
import React, { useState } from 'react';
import store from './store';

function ComponentB() {
    const [item, setItem] = useState('');

    const addItem = () => {
        // When you dispatch an action, Redux automatically passes the current state and the dispatched action to your reducer.
        // Redux handles this internally; you don't have to pass the state yourself. Redux then updates the store with the new 
        // state returned by the reducer
        store.dispatch({ type: 'ADD_ITEM', payload: item });
        setItem('');
    };

    return (
        <div>
            <input value={item} onChange={(e) => setItem(e.target.value)} />
            <button onClick={addItem}>Add Item</button>
        </div>
    );
}

export default ComponentB;
