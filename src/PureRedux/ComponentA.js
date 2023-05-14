// ComponentA.js
import React, { useEffect, useState } from 'react';
import store from './store';

function ComponentA() {
    const [items, setItems] = useState(store.getState());

    useEffect(() => {
        // A listener function that is called any time an action is dispatched to the store:
        const unsubscribe = store.subscribe(() => setItems(store.getState()));

        return () => unsubscribe();
    }, []);

    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

export default ComponentA;
