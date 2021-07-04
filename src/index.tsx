import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";

import App from "./components/app/app";

import history from "./history/history";

import store from "./store/store";

import {checkAuthStatus} from "./store/user/api-actions";

Promise.resolve(
    store.dispatch(checkAuthStatus())
)
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <Router history={history}>
          <App/>
        </Router>
      </Provider>,
      document.getElementById(`root`)
  );
});
