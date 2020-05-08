import React from "react";
import { connect } from "react-redux";

function App({ count, actionIncrement }) {
  return (
    <div className="App">
      Count: {count}
      <button onClick={actionIncrement}>+</button>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
