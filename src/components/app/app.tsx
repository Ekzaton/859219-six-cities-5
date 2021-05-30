import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {Offer, Review} from "../types";

import FavoritesPage from "../favorites-page/favorites-page";
import MainPage from "../main-page/main-page";
import OfferPage from "../offer-page/offer-page";
import PrivateRoute from "../private-route/private-route";
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
        <Route exact path={`/`} component={MainPage}/>
        <Route exact path={`/login`} component={SignInPage}/>
        <PrivateRoute exact path={`/favorites`} render={() => <FavoritesPage/>}/>
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
