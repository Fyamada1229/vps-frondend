import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import New from "./page/New";
import NewConfrim from "./page/NewConfrim";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import reducers from "./reducers/store";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const store = createStore(reducers, applyMiddleware(thunk));
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/new" component={New} />
        <Route exact path="/new_confrim" component={NewConfrim} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
