const COUNTER_INITIAL_STATE = {
  countValue: 0,
};

export const COUNTER_ACTION_TYPES = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
  CHANGE: "CHANGE",
};

export const counterReducer = (state = COUNTER_INITIAL_STATE, action) => {
  switch (action.type) {
    case COUNTER_ACTION_TYPES.INCREMENT:
      return (state = { countValue: state.countValue + 1 });
    case COUNTER_ACTION_TYPES.DECREMENT:
      return (state = { countValue: state.countValue - 1 });
    case COUNTER_ACTION_TYPES.RESET:
      return (state = { countValue: 0 });
    case COUNTER_ACTION_TYPES.CHANGE:
      return (state = { countValue: action.counterValue });
    default:
      return state;
  }
};
