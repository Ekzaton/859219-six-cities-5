import {UserAction, UserState} from "./types";
import {ActionType} from "../const";
import {AuthStatus} from "../../const";
import {User} from "../../types";

const initialState: UserState = {
  authStatus: AuthStatus.NO_AUTH,
  isDataSending: false,
  isSendingError: false,
  userData: {} as User
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case ActionType.GET_AUTH_STATUS:
      return {...state, authStatus: action.payload};
    case ActionType.GET_USER_DATA:
      return {...state, userData: action.payload};
    case ActionType.SET_IS_DATA_SENDING:
      return {...state, isDataSending: action.payload};
    case ActionType.SET_IS_SENDING_ERROR:
      return {...state, isSendingError: action.payload};
    default:
      return state;
  }
};
