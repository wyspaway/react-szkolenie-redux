import React from "react";
import { connect } from "react-redux";

function App({ count, actionIncrement, actionDiscrement, actionReset }) {
  return (
    <div className="App">
      Count: {count}
      <button onClick={actionIncrement}>+</button>
      <button onClick={actionDiscrement}>-</button>
      <button onClick={actionReset}>RESET</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionIncrement: () => dispatch({ type: "INCREMENT" }),
    actionDiscrement: () => dispatch({ type: "DISCREMENT" }),
    actionReset: () => dispatch({ type: "RESET" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
