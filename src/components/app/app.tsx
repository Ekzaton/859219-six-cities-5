import React from "react";
import {Router, Switch, Route} from "react-router-dom";

import history from "../../history/index";

import FavoritesPage from "../favorites-page/favorites-page";
import MainPage from "../main-page/main-page";
import OfferPage from "../offer-page/offer-page";
import PrivateRoute from "../private-route/private-route";
import SignInPage from "../sign-in-page/sign-in-page";

const App: React.FunctionComponent = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={`/`} component={MainPage}/>
        <Route exact path={`/login`} component={SignInPage}/>
        <PrivateRoute exact path={`/favorites`} render={() => <FavoritesPage/>}/>
        <Route exact path={`/offer/:id`} component={OfferPage}/>
      </Switch>
    </Router>
  );
};

export default App;
