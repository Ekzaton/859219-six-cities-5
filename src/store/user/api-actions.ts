
import {getAuthStatus, getUserData, redirectToRoute} from "./actions";
import {APIAction} from "../index";
import {AppRoute, AuthStatus} from "../../consts/common";
import {APIEndpoint} from "../../consts/store";
import {UserPost} from "../../types";

export const checkAuthStatus = (): APIAction => (dispatch, _getState, api) => (
  api.get(APIEndpoint.LOGIN)
  .then(({data}) => {
    dispatch(getUserData(data));
    dispatch(getAuthStatus(AuthStatus.AUTH));
  })
  .catch(() => dispatch(getAuthStatus(AuthStatus.NO_AUTH)))
);

export const logIn = ({email, password}: UserPost): APIAction => (dispatch, _getState, api) => (
  api.post(APIEndpoint.LOGIN, {email, password})
  .then(({data}) => {
    dispatch(getUserData(data));
    dispatch(getAuthStatus(AuthStatus.AUTH));
  })
  .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
  .catch(() => {
    throw Error(`Ошибка авторизации`);
  })
);

export const logOut = (): APIAction => (dispatch, _getState, api) => (
  api.get(APIEndpoint.LOGOUT)
  .then(() => {
    dispatch(getAuthStatus(AuthStatus.NO_AUTH));
  })
  .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
  .catch(() => {
    throw Error(`Ошибка деавторизации`);
  })
);

