import {Middleware} from "redux";

import {ActionType} from "../consts/store";

import history from "../history/history";

export const redirect: Middleware = () => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    history.push(action.payload);
  }

  return next(action);
};
