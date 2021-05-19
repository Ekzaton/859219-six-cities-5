import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import {store} from "./redux/store";

import {offers} from "./mocks/offers";
import {reviews} from "./mocks/reviews";

import App from "./components/app/app";

ReactDOM.render(
    <Provider store={store}>
      <App
        offers={offers}
        reviews={reviews}
      />
    </Provider>,
    document.getElementById(`root`)
);
