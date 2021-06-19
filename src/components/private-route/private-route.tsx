import React from "react";
import {useSelector} from "react-redux";
import {Redirect, Route} from "react-router-dom";

import {AppRoute, AuthStatus} from "../../consts/common";

import {selectAuthStatus} from "../../store/user/selectors";

type Props = {
  exact: boolean;
  path: string;
  render: () => JSX.Element;
}

const PrivateRoute: React.FunctionComponent<Props> = (props: Props) => {
  const {exact, path, render} = props;
  const authStatus = useSelector(selectAuthStatus);
  const isAuthorized = authStatus === AuthStatus.AUTH;

  return (
    <Route
      exact={exact}
      path={path}
      render={() => isAuthorized ? render() : <Redirect to={AppRoute.LOGIN}/>}
    />
  );
};

export default PrivateRoute;
