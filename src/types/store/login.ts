import {AxiosResponse} from "axios";

import {User} from "../common";

import {AppRoute, AuthStatus} from "../../consts/common";
import {ActionType} from "../../consts/store";

export type LoginState = {
  authStatus: AuthStatus,
  user: User,
  isSending: boolean,
  sendingError: AxiosResponse | null
};

type setAuthStatusAction = {
  type: ActionType.SET_AUTH_STATUS,
  payload: AuthStatus
}

type setUserAction = {
  type: ActionType.SET_USER,
  payload: User
}

type setRedirectToRouteAction = {
  type: ActionType.SET_REDIRECT_TO_ROUTE,
  payload: AppRoute
}

type setIsSendingAction = {
  type: ActionType.SET_LOGIN_IS_SENDING,
  payload: boolean
}

type setSendingErrorAction = {
  type: ActionType.SET_LOGIN_SENDING_ERROR,
  payload: AxiosResponse | null
}

export type LoginAction = setAuthStatusAction | setUserAction | setRedirectToRouteAction | setIsSendingAction | setSendingErrorAction;
