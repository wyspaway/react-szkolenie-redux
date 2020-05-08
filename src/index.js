import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Home from "./pages/Home/Home.component";
import About from "./pages/About/About.component";
import Todo from "./pages/Todo/Todo.component";

// import App from "./App";

import Menu from "./components/Menu/Menu.component.js";

const INITIAL_STATE = {
  count: 0,
  todo: ["Example 1", "Example todo 2"],
};

const reducer = (state = { INITIAL_STATE }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return (state = { ...state, count: state.count + 1 });
    case "DISCREMENT":
      return (state = { ...state, count: state.count - 1 });
    case "RESET":
      return (state = { ...state, count: 0 });
    case "CHANGE":
      return (state = { ...state, count: action.counterValue });
    case "ADD_TODO":
      return (state = { ...state, todo: [...state.todo, action.todoValue] });
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/todo" component={Todo} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
