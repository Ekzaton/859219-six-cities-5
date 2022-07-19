import React from "react";
import {Redirect, Route} from "react-router-dom";

import {AppRoute} from "../../consts/common";
import {useAppSelector} from "../../hooks/store";
import {selectIsAuthorized} from "../../store/login/selectors";

type PrivateRouteProps = {
  exact: boolean;
  path: string;
  render: () => JSX.Element;
}

const PrivateRoute = (props: PrivateRouteProps): JSX.Element => {
  const {exact, path, render} = props;

  const isAuthorized = useAppSelector(selectIsAuthorized);

  return (
    <Route
      exact={exact}
      path={path}
      render={() => isAuthorized ? render() : <Redirect to={AppRoute.LOGIN}/>}
    />
  );
};

export default PrivateRoute;
