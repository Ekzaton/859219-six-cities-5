import {UserAction, UserState} from "./types";
import {ActionType} from "../const";
import {AuthStatus} from "../../components/const";

const initialState: UserState = {
  authStatus: AuthStatus.NO_AUTH
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case ActionType.GET_AUTH_STATUS:
      return {...state, authStatus: action.payload};
    default:
      return state;
  }
};
