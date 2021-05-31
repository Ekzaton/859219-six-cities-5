import React from "react";
import {useSelector} from "react-redux";
import {Route, Redirect} from "react-router-dom";

import {selectAuthStatus} from "../../store/user/selectors";

import {AuthStatus} from "../const";

type Props = {
  exact: boolean,
  path: string,
  render: () => React.ReactElement;
}

const PrivateRoute: React.FunctionComponent<Props> = (props: Props) => {
  const {exact, path, render} = props;
  const authStatus = useSelector(selectAuthStatus);
  const isAuthorized = authStatus === AuthStatus.AUTH;

  return (
    <Route
      exact={exact}
      path={path}
      render={() => isAuthorized ? render() : <Redirect to={`/login`}/>}
    />
  );
};

export default PrivateRoute;
