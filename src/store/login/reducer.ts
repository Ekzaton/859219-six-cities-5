import {AuthStatus} from "../../consts/common";
import {ActionType} from "../../consts/store";
import {User} from "../../types/common";
import {LoginAction, LoginState} from "../../types/store/login";

const initialState: LoginState = {
  authStatus: AuthStatus.NO_AUTH,
  user: {} as User,
  isSending: false,
  sendingError: null
};

export const loginReducer = (state = initialState, action: LoginAction): LoginState => {
  switch (action.type) {
    case ActionType.SET_AUTH_STATUS:
      return {...state, authStatus: action.payload};
    case ActionType.SET_USER:
      return {...state, user: action.payload};
    case ActionType.SET_LOGIN_IS_SENDING:
      return {...state, isSending: action.payload};
    case ActionType.SET_LOGIN_SENDING_ERROR:
      return {...state, sendingError: action.payload};
    default:
      return state;
  }
};
