import {AxiosResponse} from "axios";

import {AppRoute, AuthStatus} from "../../consts/common";
import {ActionType} from "../../consts/store";
import {User} from "../../types/common";
import {LoginAction} from "../../types/store/login";

export const setAuthStatus = (authStatus: AuthStatus): LoginAction => ({
  type: ActionType.SET_AUTH_STATUS,
  payload: authStatus
});

export const setUser = (user: User): LoginAction => ({
  type: ActionType.SET_USER,
  payload: user
});

export const setRedirectToRoute = (route: AppRoute): LoginAction => ({
  type: ActionType.SET_REDIRECT_TO_ROUTE,
  payload: route
});

export const setIsSending = (isSending: boolean): LoginAction => ({
  type: ActionType.SET_LOGIN_IS_SENDING,
  payload: isSending
});

export const setSendingError = (sendingError: AxiosResponse | null): LoginAction => ({
  type: ActionType.SET_LOGIN_SENDING_ERROR,
  payload: sendingError
});
