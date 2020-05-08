import React, { useState } from "react";
import { connect } from "react-redux";
import { ACTION_TODO_ADD } from "../modules/todo/todo.action";

function TodoForm({ actionAddTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => setInputValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    actionAddTodo(inputValue);
    setInputValue("");
  };

  return (
    <div className="App">
      <h2>Dodaj ToDo</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Dodaj</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    actionAddTodo: (value) => dispatch(ACTION_TODO_ADD(value)),
  };
};

export default connect(null, mapDispatchToProps)(TodoForm);
