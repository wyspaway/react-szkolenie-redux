import React from "react";
import { connect } from "react-redux";

function TodoListComponent({ todoList, actionMarkTodo }) {
  const renderTodos = () =>
    todoList.map((todoElement) => (
      <div key={todoElement.id} onClick={() => actionMarkTodo(todoElement.id)}>
        {todoElement.name}
      </div>
    ));
  return (
    <div className="App">
      <h2>Lista Todo:</h2>
      {renderTodos()}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionMarkTodo: (value) => dispatch({ type: "MARK_TODO", todoId: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListComponent);
