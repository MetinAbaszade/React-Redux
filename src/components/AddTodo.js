import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { addTodo } from '../stores/todo';
import { addTodoHandle } from '../redux-toolkit/utilities';

export default function AddTodo() {
    const [todo, setTodo] = useState('');

    // const dispatch = useDispatch();

    const submitHandle = e => {
        e.preventDefault();
        addTodoHandle({
            title: todo,
            done: false
        })
        setTodo('')
    }
  return (
    <div>
        <form onSubmit={submitHandle}>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
            <button type='submit' disabled={!todo}>Add</button>
        </form>
    </div>
  )
}
