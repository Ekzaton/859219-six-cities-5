
import {getAuthStatus, getUserData, redirectToRoute} from "./actions";
import {APIAction} from "../index";
import {AuthStatus} from "../../const";
import {UserPost} from "../../types";

export const checkAuthStatus = (): APIAction => (dispatch, _getState, api) => (
  api.get(`/login`)
  .then(({data}) => {
    dispatch(getUserData(data));
    dispatch(getAuthStatus(AuthStatus.AUTH));
  })
  .catch(() => dispatch(getAuthStatus(AuthStatus.NO_AUTH)))
);

export const logIn = ({email, password}: UserPost): APIAction => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
  .then(({data}) => {
    dispatch(getUserData(data));
    dispatch(getAuthStatus(AuthStatus.AUTH));
  })
  .then(() => dispatch(redirectToRoute(`/`)))
  .catch(() => {
    throw Error(`Ошибка авторизации`);
  })
);

export const logOut = (): APIAction => (dispatch, _getState, api) => (
  api.get(`/logout`)
  .then(() => {
    dispatch(getAuthStatus(AuthStatus.NO_AUTH));
  })
  .then(() => dispatch(redirectToRoute(`/`)))
  .catch(() => {
    throw Error(`Ошибка деавторизации`);
  })
);

