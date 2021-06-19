import {UserAction} from "./types";

import {AppRoute, AuthStatus} from "../../consts/common";
import {ActionType} from "../../consts/store";

import {User} from "../../types";

export const getAuthStatus = (authStatus: AuthStatus): UserAction => ({
  type: ActionType.GET_AUTH_STATUS,
  payload: authStatus
});

export const getUserData = (userData: User): UserAction => ({
  type: ActionType.GET_USER_DATA,
  payload: userData
});

export const redirectToRoute = (route: AppRoute): UserAction => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: route
});
