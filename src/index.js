import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Home from "./pages/Home/Home.component";
import About from "./pages/About/About.component";

import Menu from "./components/Menu/Menu.component.js";

const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return (state = { count: state.count + 1 });
    case "DISCREMENT":
      return (state = { count: state.count - 1 });
    case "RESET":
      return (state = { count: 0 });
    case "CHANGE":
      return (state = { count: action.counterValue });
    default:
      return state;
  }
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
