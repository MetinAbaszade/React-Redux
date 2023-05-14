import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoItems() {
  const { todos } = useSelector((state) => state.todo);
  return (
    <div>
      {todos.map((todo, key) => (
        <TodoItem
          key={key}
          todo={todo}
        />
      ))}
    </div>
  );
}
