import {getAuthStatus, getUserData} from "./actions";
import {APIAction} from "../index";
import {AuthStatus} from "../../const";
import {User} from "../../types";

export const checkAuthStatus = (): APIAction => (dispatch, _getState, api) => (
  api.get(`/login`)
  .then(({data}) => dispatch(getUserData(data)))
  .then(() => dispatch(getAuthStatus(AuthStatus.AUTH)))
  .catch(() => dispatch(getAuthStatus(AuthStatus.NO_AUTH)))
);

export const logIn = ({email, password}: Record<string, string>): APIAction => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
  .then(({data}) => dispatch(getUserData(data)))
  .then(() => dispatch(getAuthStatus(AuthStatus.AUTH)))
  .catch(() => {
    throw Error(`Ошибка авторизации`);
  })
);

export const logOut = (): APIAction => (dispatch, _getState, api) => (
  api.get(`/logout`)
  .then(() => dispatch(getUserData({} as User)))
  .then(() => dispatch(getAuthStatus(AuthStatus.NO_AUTH)))
  .catch(() => {
    throw Error(`Ошибка деавторизации`);
  })
);
