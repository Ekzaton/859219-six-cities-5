
import {getUser, setAuthStatus, setIsDataSending, setIsSendingError} from "./actions";

import {APIAction} from "../store";

import {AuthStatus} from "../../consts/common";
import {APIEndpoint} from "../../consts/store";

import {UserPost} from "../../types/common";

export const checkAuthStatus = (): APIAction => (dispatch, _getState, api) => (
  api.get(APIEndpoint.LOGIN)
  .then(({data}) => {
    dispatch(getUser(data));
    dispatch(setAuthStatus(AuthStatus.AUTH));
  })
  .catch(() => dispatch(setAuthStatus(AuthStatus.NO_AUTH)))
);

export const logIn = ({email, password}: UserPost): APIAction => (dispatch, _getState, api) => {
  dispatch(setIsDataSending(true));
  api.post(APIEndpoint.LOGIN, {email, password})
  .then(({data}) => {
    dispatch(setIsSendingError(false));
    dispatch(getUser(data));
    dispatch(setAuthStatus(AuthStatus.AUTH));
    dispatch(setIsDataSending(false));
  })
  .catch(() => {
    dispatch(setIsSendingError(true));
    dispatch(setIsDataSending(false));
  });
};

export const logOut = (): APIAction => (dispatch, _getState, api) => {
  api.get(APIEndpoint.LOGOUT)
  .then(() => dispatch(setAuthStatus(AuthStatus.NO_AUTH)));
};

