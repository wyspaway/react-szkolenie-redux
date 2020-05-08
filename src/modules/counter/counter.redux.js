const COUNTER_INITIAL_STATE = {
  countValue: 0,
};

export const counterReducer = (state = COUNTER_INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return (state = { countValue: state.countValue + 1 });
    case "DECREMENT":
      return (state = { countValue: state.countValue - 1 });
    case "RESET":
      return (state = { countValue: 0 });
    case "CHANGE":
      return (state = { countValue: action.counterValue });
    default:
      return state;
  }
};
