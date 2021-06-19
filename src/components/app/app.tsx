import React from "react";
import {Route, Switch} from "react-router-dom";

import FavoritesPage from "../favorites-page/favorites-page";
import MainPage from "../main-page/main-page";
import OfferPage from "../offer-page/offer-page";
import PrivateRoute from "../private-route/private-route";
import SignInPage from "../sign-in-page/sign-in-page";

import {AppRoute} from "../../consts/common";

const App: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path={AppRoute.MAIN} component={MainPage}/>
      <Route exact path={AppRoute.LOGIN} component={SignInPage}/>
      <PrivateRoute exact path={AppRoute.FAVORITES} render={() => <FavoritesPage/>}/>
      <Route exact path={AppRoute.OFFER_ID} component={OfferPage}/>
    </Switch>
  );
};

export default App;
