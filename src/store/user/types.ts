import {ActionType} from "../const";
import {AuthStatus} from "../../const";
import {User} from "../../types";

export type UserState = {
  authStatus: AuthStatus,
  userData: User
};

type getAuthStatusAction = {
  type: typeof ActionType.GET_AUTH_STATUS,
  payload: AuthStatus
}

type getUserDataAction = {
  type: typeof ActionType.GET_USER_DATA,
  payload: User
}

type redirectToRouteAction = {
  type: typeof ActionType.REDIRECT_TO_ROUTE,
  payload: string
}

export type UserAction = getAuthStatusAction | getUserDataAction | redirectToRouteAction;
