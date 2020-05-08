import { COUNTER_ACTION_TYPES } from "./counter.redux";

export const ACTION_COUNTER_INCREMENT = {
  type: COUNTER_ACTION_TYPES.INCREMENT,
};
export const ACTION_COUNTER_DECREMENT = {
  type: COUNTER_ACTION_TYPES.DECREMENT,
};
export const ACTION_COUNTER_RESET = {
  type: COUNTER_ACTION_TYPES.RESET,
};
export const ACTION_COUNTER_CHANGE = (value) => ({
  type: COUNTER_ACTION_TYPES.CHANGE,
  counterValue: value,
});
