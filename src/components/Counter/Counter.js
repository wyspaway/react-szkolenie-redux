import React from "react";
import { connect } from "react-redux";

function Counter({
  count,
  actionIncrement,
  actionDiscrement,
  actionReset,
  actionChange,
}) {
  const handleChange = (event) => {
    actionChange(Number(event.target.value));
  };

  return (
    <div className="Counter">
      Count: {count}
      <button onClick={actionIncrement}>+</button>
      <button onClick={actionDiscrement}>-</button>
      <button onClick={actionReset}>RESET</button>
      <input type="number" value={count} onChange={handleChange} />
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
    actionChange: (value) => dispatch({ type: "CHANGE", counterValue: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
