import {UserAction, UserState} from "./types";

import {AuthStatus} from "../../consts/common";
import {ActionType} from "../../consts/store";

import {User} from "../../types";

const initialState: UserState = {
  authStatus: AuthStatus.NO_AUTH,
  userData: {} as User
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case ActionType.GET_AUTH_STATUS:
      return {...state, authStatus: action.payload};
    case ActionType.GET_USER_DATA:
      return {...state, userData: action.payload};
    default:
      return state;
  }
};
