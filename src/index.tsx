import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";

import App from "./components/app/app";

import history from "./history/history";

import store from "./store/store";
import {fetchAllOffers} from "./store/data/api-actions";
import {checkAuthStatus} from "./store/user/api-actions";

Promise.all([
  store.dispatch(fetchAllOffers()),
  store.dispatch(checkAuthStatus())
])
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
