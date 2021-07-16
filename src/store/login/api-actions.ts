
import {setAuthStatus, setUser, setRedirectToRoute, setIsSending, setSendingError} from "./actions";

import {APIAction} from "../store";

import {AppRoute, AuthStatus} from "../../consts/common";
import {APIEndpoint} from "../../consts/store";

import {UserPost} from "../../types/common";

export const checkAuthStatus = (): APIAction => (dispatch, _getState, api) => (
  api.get(APIEndpoint.LOGIN)
  .then(({data}) => {
    dispatch(setUser(data));
    dispatch(setAuthStatus(AuthStatus.AUTH));
  })
  .catch(() => dispatch(setAuthStatus(AuthStatus.NO_AUTH)))
);

export const logIn = ({email, password}: UserPost): APIAction => (dispatch, _getState, api) => {
  dispatch(setIsSending(true));
  api.post(APIEndpoint.LOGIN, {email, password})
  .then(({data}) => {
    dispatch(setSendingError(null));
    dispatch(setUser(data));
    dispatch(setAuthStatus(AuthStatus.AUTH));
    dispatch(setIsSending(false));
  })
  .catch(({response}) => {
    dispatch(setSendingError(response));
    dispatch(setIsSending(false));
  });
};

export const logOut = (): APIAction => (dispatch, _getState, api) => {
  api.get(APIEndpoint.LOGOUT)
  .then(() => {
    dispatch(setAuthStatus(AuthStatus.NO_AUTH));
    dispatch(setRedirectToRoute(AppRoute.MAIN));
  });
};

