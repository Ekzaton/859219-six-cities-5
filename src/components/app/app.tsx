import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {Offer, Review} from "../types";

import FavoritesPage from "../favorites-page/favorites-page";
import MainPage from "../main-page/main-page";
import OfferPage from "../offer-page/offer-page";
import SignInPage from "../sign-in-page/sign-in-page";

type Props = {
  offers: Offer[];
  reviews: Review[];
}

const App: React.FunctionComponent<Props> = (props: Props) => {
  const {offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`/`}>
          <MainPage/>
        </Route>
        <Route exact path={`/login`}>
          <SignInPage/>
        </Route>
        <Route exact path={`/favorites`}>
          <FavoritesPage
            offers={offers}
          />
        </Route>
        <Route exact path={`/offer/:id`}>
          <OfferPage
            offers={offers}
            reviews={reviews}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
