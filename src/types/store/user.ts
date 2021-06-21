import {User} from "../common";

import {AppRoute, AuthStatus} from "../../consts/common";
import {ActionType} from "../../consts/store";

export type UserState = {
  authStatus: AuthStatus,
  userData: User
};

type getAuthStatusAction = {
  type: ActionType.GET_AUTH_STATUS,
  payload: AuthStatus
}

type getUserDataAction = {
  type: ActionType.GET_USER_DATA,
  payload: User
}

type redirectToRouteAction = {
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: AppRoute
}

export type UserAction = getAuthStatusAction | getUserDataAction | redirectToRouteAction;
