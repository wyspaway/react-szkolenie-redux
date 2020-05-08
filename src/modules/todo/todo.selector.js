export const selectTodosProgress = (state) =>
  state.todo.todo.filter((element) => !element.completed);

export const selectTodosCompleted = (state) =>
  state.todo.todo.filter((element) => element.completed);
