import {UserAction} from "./types";
import {ActionType} from "../const";
import {AuthStatus} from "../../const";
import {User} from "../../types";

export const getAuthStatus = (authStatus: AuthStatus): UserAction => ({
  type: ActionType.GET_AUTH_STATUS,
  payload: authStatus
});

export const getUserData = (userData: User): UserAction => ({
  type: ActionType.GET_USER_DATA,
  payload: userData
});

export const redirectToRoute = (route: string): UserAction => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: route
});

export const setDataSending = (isDataSending: boolean): UserAction => ({
  type: ActionType.SET_IS_DATA_SENDING,
  payload: isDataSending
});

export const setSendingError = (isSendingError: boolean): UserAction => ({
  type: ActionType.SET_IS_SENDING_ERROR,
  payload: isSendingError
});
