import {AxiosResponse} from "axios";
import {AnyAction} from "redux";

import {AppRoute, AuthStatus} from "../../consts/common";
import {ActionType} from "../../consts/store";
import {User} from "../../types/common";

export const setAuthStatus = (authStatus: AuthStatus): AnyAction => ({
  type: ActionType.SET_AUTH_STATUS,
  payload: authStatus
});

export const setUser = (user: User): AnyAction => ({
  type: ActionType.SET_USER,
  payload: user
});

export const setRedirectToRoute = (route: AppRoute): AnyAction => ({
  type: ActionType.SET_REDIRECT_TO_ROUTE,
  payload: route
});

export const setIsSending = (isSending: boolean): AnyAction => ({
  type: ActionType.SET_LOGIN_IS_SENDING,
  payload: isSending
});

export const setSendingError = (sendingError: AxiosResponse | null): AnyAction => ({
  type: ActionType.SET_LOGIN_SENDING_ERROR,
  payload: sendingError
});
