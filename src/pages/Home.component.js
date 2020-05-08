import React from "react";
import { connect } from "react-redux";
import TodoList from "../components/TodoList.component";
import {
  ACTION_COUNTER_INCREMENT,
  ACTION_COUNTER_DECREMENT,
  ACTION_COUNTER_RESET,
  ACTION_COUNTER_CHANGE,
} from "../modules/counter/counter.action";

function HomeComponent({
  count,
  actionIncrement,
  actionDecrement,
  actionReset,
  actionChange,
}) {
  const handleChange = (event) => {
    actionChange(Number(event.target.value));
  };

  return (
    <div className="App">
      <TodoList />
      <hr />
      Count: {count}
      <button onClick={actionIncrement}>+</button>
      <button onClick={actionDecrement}>-</button>
      <button onClick={actionReset}>RESET</button>
      <input type="number" value={count} onChange={handleChange} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.countValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionIncrement: () => dispatch(ACTION_COUNTER_INCREMENT),
    actionDecrement: () => dispatch(ACTION_COUNTER_DECREMENT),
    actionReset: () => dispatch(ACTION_COUNTER_RESET),
    actionChange: (value) => dispatch(ACTION_COUNTER_CHANGE(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
