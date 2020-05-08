import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home.component";
import About from "./pages/About/About.component";
import Todo from "./pages/Todo.component";
import Menu from "./components/Menu.component";

const INITIAL_STATE = {
  count: 0,
  todo: [
    {
      name: "Example Todo 1",
      completed: false,
      id: 1,
    },
    {
      name: "Example Todo 2",
      completed: false,
      id: 2,
    },
  ],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return (state = { ...state, count: state.count + 1 });
    case "DECREMENT":
      return (state = { ...state, count: state.count - 1 });
    case "RESET":
      return (state = { ...state, count: 0 });
    case "CHANGE":
      return (state = { ...state, count: action.counterValue });
    case "ADD_TODO":
      return (state = {
        ...state,
        todo: [
          ...state.todo,
          {
            name: action.todoValue,
            completed: false,
            id: state.todo.length + 1,
          },
        ],
      });
    case "MARK_TODO":
      console.log(action.TodoId);
      return state;
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
        <Route exact path="/about" component={About} />
        <Route exact path="/todo" component={Todo} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
