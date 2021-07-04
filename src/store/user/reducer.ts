import {AuthStatus} from "../../consts/common";
import {ActionType} from "../../consts/store";

import {User} from "../../types/common";
import {UserAction, UserState} from "../../types/store/user";

const initialState: UserState = {
  authStatus: AuthStatus.NO_AUTH,
  data: {} as User,
  isDataSending: false,
  isSendingError: false
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case ActionType.GET_USER:
      return {...state, data: action.payload};
    case ActionType.SET_AUTH_STATUS:
      return {...state, authStatus: action.payload};
    case ActionType.SET_IS_LOGIN_SENDING:
      return {...state, isDataSending: action.payload};
    case ActionType.SET_IS_LOGIN_SENDING_ERROR:
      return {...state, isSendingError: action.payload};
    default:
      return state;
  }
};
