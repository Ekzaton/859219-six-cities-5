import {UserAction} from "./types";
import {ActionType} from "../const";
import {AuthStatus} from "../../components/const";

export const getAuthStatus = (authStatus: AuthStatus): UserAction => ({
  type: ActionType.GET_AUTH_STATUS,
  payload: authStatus
});
