import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  OFFERS_COUNT: 10,
  RATING_VALUE: 70,
};

ReactDOM.render(
    <App
      offersCount={Settings.OFFERS_COUNT}
      ratingValue={Settings.RATING_VALUE}
    />,
    document.getElementById(`root`)
);
