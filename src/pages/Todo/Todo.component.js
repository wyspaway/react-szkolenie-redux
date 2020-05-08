import React from "react";
import TodoList from "../../components/TodoList.component";
import TodoForm from "../../components/TodoForm.component";

function Todo() {
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default Todo;
