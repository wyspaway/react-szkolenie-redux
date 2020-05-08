import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./modules/rootReducer";
import thunk from "redux-thunk";

export default function cofigureStore() {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}
