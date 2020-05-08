import React from "react";
import { connect } from "react-redux";

function TodoListComponent({ todoList, todoListCompleted, actionMarkTodo }) {
  const renderTodos = (todoList) =>
    todoList.map((todoElement) => (
      <div key={todoElement.id} onClick={() => actionMarkTodo(todoElement.id)}>
        {todoElement.name}
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
    todoList: state.todo.todo.filter((element) => !element.completed),
    todoListCompleted: state.todo.todo.filter((element) => element.completed),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionMarkTodo: (value) => dispatch({ type: "MARK_TODO", todoId: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListComponent);
