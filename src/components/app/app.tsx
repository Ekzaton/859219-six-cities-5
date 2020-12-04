import * as React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import FavoritesPage from "../favorites-page/favorites-page";
import MainPage from "../main-page/main-page";
import OfferPage from "../offer-page/offer-page";
import SignInPage from "../sign-in-page/sign-in-page";

interface Props {
  offersCount: number;
  ratingValue: number;
}

const App: React.FunctionComponent<Props> = (props: Props) => {
  const {offersCount, ratingValue} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`/`}>
          <MainPage
            offersCount={offersCount}
            ratingValue={ratingValue}
          />
        </Route>
        <Route exact path={`/login`}>
          <SignInPage/>
        </Route>
        <Route exact path={`/favorites`}>
          <FavoritesPage
            ratingValue={ratingValue}
          />
        </Route>
        <Route exact path={`/offer/:id`}>
          <OfferPage
            ratingValue={ratingValue}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
