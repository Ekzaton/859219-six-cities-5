import {Middleware} from "redux";

import history from "../history";
import {ActionType} from "../store/const";

export const redirect: Middleware = () => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    history.push(action.payload);
  }

  return next(action);
};
