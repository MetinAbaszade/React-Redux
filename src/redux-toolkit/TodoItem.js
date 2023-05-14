import React from "react";
import { deleteTodoHandle } from "./utilities";

export default function TodoItem({ todo }) {
  
  const deleteHandle = () => {
    deleteTodoHandle(todo.title);
  };

  const editHandle = () => {};
  return (
    <ul>
      <span style={{ textDecoration: todo.done ? "line-through" : false }}>
        {todo.title}
      </span>
      <button onClick={deleteHandle}>Delete</button>
      <button onClick={editHandle}>Edit</button>
    </ul>
  );
}
