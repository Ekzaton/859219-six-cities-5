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
