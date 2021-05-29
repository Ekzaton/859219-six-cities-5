import {ActionType} from "../const";
import {AuthStatus} from "../../components/const";

export type UserState = {
  authStatus: AuthStatus
};

type getAuthStatusAction = {
  type: typeof ActionType.GET_AUTH_STATUS,
  payload: AuthStatus
}

export type UserAction = getAuthStatusAction;
