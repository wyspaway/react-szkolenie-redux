import React from "react";
import { connect } from "react-redux";

function TodoListComponent({ todoList }) {
  const renderTodos = () =>
    todoList.map((todoElement, index) => <div key={index}>{todoElement}</div>);
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

export default connect(mapStateToProps, null)(TodoListComponent);
