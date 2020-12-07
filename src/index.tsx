import * as React from "react";
import * as ReactDOM from "react-dom";

import offers from "./mocks/offers";
import reviews from "./mocks/reviews";

import App from "./components/app/app";

ReactDOM.render(
    <App
      offers={offers}
      reviews={reviews}
    />,
    document.getElementById(`root`)
);
