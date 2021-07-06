import {User} from "../common";

import {AppRoute, AuthStatus} from "../../consts/common";
import {ActionType} from "../../consts/store";

export type UserState = {
  authStatus: AuthStatus,
  data: User,
  isDataSending: boolean,
  isSendingError: boolean
};

type getUserDataAction = {
  type: ActionType.GET_USER,
  payload: User
}

type redirectToRouteAction = {
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: AppRoute
}

type setAuthStatusAction = {
  type: ActionType.SET_AUTH_STATUS,
  payload: AuthStatus
}

type setIsDataSendingAction = {
  type: ActionType.SET_IS_LOGIN_SENDING,
  payload: boolean
}

type setIsSendingErrorAction = {
  type: ActionType.SET_IS_LOGIN_SENDING_ERROR,
  payload: boolean
}

export type UserAction = getUserDataAction | redirectToRouteAction
| setAuthStatusAction | setIsDataSendingAction | setIsSendingErrorAction;
