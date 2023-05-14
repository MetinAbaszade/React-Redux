import store from "."
import { addTodo, deleteTodo } from "./todo";


// addTodo and deleteTodo return an object with the corresponding action type and payload

export const addTodoHandle = todo => {
    store.dispatch(addTodo(todo));
}

export const deleteTodoHandle = title => {
    store.dispatch(deleteTodo(title));
}