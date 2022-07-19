import React from "react";
import {Route, Switch} from "react-router-dom";

import {AppRoute} from "../../consts/common";

import ErrorPage from "../error-page/error-page";
import FavoritesPage from "../favorites-page/favorites-page";
import LoginPage from "../login-page/login-page";
import MainPage from "../main-page/main-page";
import PrivateRoute from "../private-route/private-route";
import PropertyPage from "../property-page/property-page";

const App = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path={AppRoute.MAIN} component={MainPage}/>
      <Route exact path={AppRoute.LOGIN} component={LoginPage}/>
      <PrivateRoute exact path={AppRoute.FAVORITES} render={() => <FavoritesPage/>}/>
      <Route exact path={AppRoute.OFFER_ID} component={PropertyPage}/>
      <Route component={ErrorPage}/>
    </Switch>
  );
};

export default App;
