import {Middleware} from "redux";

import history from "../history/history";
import {ActionType} from "../consts/store";

export const redirect: Middleware = () => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    history.push(action.payload);
  }

  return next(action);
};
