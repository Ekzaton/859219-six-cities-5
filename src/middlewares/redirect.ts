import {Middleware} from "redux";

import {ActionType} from "../consts/store";

import history from "../history/history";

export const redirect: Middleware = () => (dispatch) => (action) => {
  if (action.type === ActionType.SET_REDIRECT_TO_ROUTE) {
    history.push(action.payload);
  }

  return dispatch(action);
};
