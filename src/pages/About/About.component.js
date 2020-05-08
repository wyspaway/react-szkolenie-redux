import React from "react";
import { connect } from "react-redux";

function About({ count }) {
  return <div className="Contact">{count}</div>;
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.counterValue,
  };
};

export default connect(mapStateToProps)(About);
