import { TODO_ACTION_TYPES } from "./todo.redux";

export const ACTION_TODO_MARK = (value) => ({
  type: TODO_ACTION_TYPES.MARK_TODO,
  todoId: value,
});

export const ACTION_TODO_ADD = (value) => ({
  type: TODO_ACTION_TYPES.ADD_TODO,
  todoValue: value,
});
