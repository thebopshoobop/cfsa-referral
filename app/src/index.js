import React from "react";
import ReactDOM from "react-dom";
import "index.css";
import App from "App";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";

import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import answers from "reducers/answers";
import data from "reducers/data";
import auth from "reducers/auth";
import eligiblePrograms from "reducers/eligiblePrograms";
import cases from "cases/reducers";

import logger from "redux-logger";
import thunk from "redux-thunk";

import createHistory from "history/createBrowserHistory";
import history from "./history";

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

const mWare =
  process.env.NODE_ENV === "development"
    ? applyMiddleware(middleware, thunk, logger)
    : applyMiddleware(middleware, thunk);
// Add the reducer to your store on the `routing` key
const rootReducer = combineReducers({
  answers,
  auth,
  data,
  eligiblePrograms,
  routing: routerReducer,
  form: formReducer,
  cases
});
const store = createStore(rootReducer, mWare);

console.log("bla?");

const rootElement = document.getElementById("root");
const runApp = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        {/* ConnectedRouter will use the store from Provider automatically */}
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    rootElement
  );
};

if (module.hot) {
  module.hot.accept("./App", () => {
    console.log("Updated components?");
    runApp();
  });
  module.hot.accept(rootReducer, () => {
    console.log("Updated reducers?");
    store.replaceReducer(rootReducer);
  });
}
runApp();
