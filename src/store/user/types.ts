import {ActionType} from "../const";
import {AuthStatus} from "../../const";
import {User} from "../../types";

export type UserState = {
  authStatus: AuthStatus,
  isDataSending: boolean,
  isSendingError: boolean,
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

type setDataSendingAction = {
  type: ActionType.SET_IS_DATA_SENDING,
  payload: boolean
}

type setSendingErrorAction = {
  type: ActionType.SET_IS_SENDING_ERROR,
  payload: boolean
}

export type UserAction = getAuthStatusAction | getUserDataAction | redirectToRouteAction | setDataSendingAction | setSendingErrorAction;
