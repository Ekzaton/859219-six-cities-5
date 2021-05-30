import React from "react";
import {useSelector} from "react-redux";
import {Route, Redirect} from "react-router-dom";

import {AuthStatus} from "../const";
import {selectAuthStatus} from "../../store/user/selectors";

type Props = {
  exact: boolean,
  path: string,
  render: () => React.ReactElement;
}

const PrivateRoute: React.FunctionComponent<Props> = (props: Props) => {
  const {exact, path, render} = props;
  const status = useSelector(selectAuthStatus);
  const isAuthorized = status === AuthStatus.AUTH;

  return (
    <Route
      exact={exact}
      path={path}
      render={() => isAuthorized ? render() : <Redirect to={`/login`}/>}
    />
  );
};

export default PrivateRoute;
