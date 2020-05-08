import { TODO_ACTION_TYPES } from "./todo.redux";

export const ACTION_TODO_MARK = (value) => ({
  type: TODO_ACTION_TYPES.MARK_TODO,
  todoId: value,
});

export const ACTION_TODO_ADD = (value) => ({
  type: TODO_ACTION_TYPES.ADD_TODO,
  todoValue: value,
});

export const ACTION_FETCH_TODOS = () => {
  console.log("action");
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => dispatch(ACTION_INSERT_TODOS(json)));
  };
};

export const ACTION_INSERT_TODOS = (value) => ({
  type: TODO_ACTION_TYPES.INSERT_TODOS,
  value: value,
});
