const TODO_INITIAL_STATE = {
  todo: [
    {
      name: "Example Todo 1",
      completed: false,
      id: 1,
    },
    {
      name: "Example Todo 2",
      completed: false,
      id: 2,
    },
  ],
};

export const TODO_ACTION_TYPES = {
  ADD_TODO: "ADD_TODO",
  MARK_TODO: "MARK_TODO",
};

export const todoReducer = (state = TODO_INITIAL_STATE, action) => {
  switch (action.type) {
    case TODO_ACTION_TYPES.ADD_TODO:
      return (state = {
        todo: [
          ...state.todo,
          {
            name: action.todoValue,
            completed: false,
            id: state.todo.length + 1,
          },
        ],
      });
    case TODO_ACTION_TYPES.MARK_TODO:
      const newTodo = [...state.todo];
      newTodo.map((element) =>
        element.id === action.todoId
          ? (element.completed = !element.completed)
          : null
      );
      return (state = {
        todo: [...newTodo],
      });
    default:
      return state;
  }
};
