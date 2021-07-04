import {AppRoute, AuthStatus} from "../../consts/common";
import {ActionType} from "../../consts/store";

import {User} from "../../types/common";
import {UserAction} from "../../types/store/user";

export const getUser = (user: User): UserAction => ({
  type: ActionType.GET_USER,
  payload: user
});

export const redirectToRoute = (route: AppRoute): UserAction => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: route
});

export const setAuthStatus = (authStatus: AuthStatus): UserAction => ({
  type: ActionType.SET_AUTH_STATUS,
  payload: authStatus
});

export const setIsDataSending = (isDataSending: boolean): UserAction => ({
  type: ActionType.SET_IS_LOGIN_SENDING,
  payload: isDataSending
});

export const setIsSendingError = (isSendingError: boolean): UserAction => ({
  type: ActionType.SET_IS_LOGIN_SENDING_ERROR,
  payload: isSendingError
});
