import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  ACTION_TODO_MARK,
  ACTION_FETCH_TODOS,
} from "../modules/todo/todo.action";
import {
  selectTodosProgress,
  selectTodosCompleted,
} from "../modules/todo/todo.selector";

function TodoListComponent({
  todoList,
  todoListCompleted,
  actionMarkTodo,
  actionFetchTodo,
}) {
  useEffect(() => {
    actionFetchTodo();
  }, [actionFetchTodo]);
  const renderTodos = (todoList) =>
    todoList.map((todoElement) => (
      <div key={todoElement.id} onClick={() => actionMarkTodo(todoElement.id)}>
        {todoElement.title}
      </div>
    ));
  return (
    <div className="App">
      <h2>Lista Todo Aktywnych:</h2>
      {renderTodos(todoList)}
      <h2>Lista Todo Wykonanych:</h2>
      {renderTodos(todoListCompleted)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todoList: selectTodosProgress(state),
    todoListCompleted: selectTodosCompleted(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionMarkTodo: (value) => dispatch(ACTION_TODO_MARK(value)),
    actionFetchTodos: () => dispatch(ACTION_FETCH_TODOS()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListComponent);
