import { combineReducers } from "redux";
import { counterReducer } from "./counter/counter.redux";
import { todoReducer } from "./todo/todo.redux";

export default combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});
