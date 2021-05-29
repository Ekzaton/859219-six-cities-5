import {getAuthStatus} from "./actions";
import {APIAction} from "../index";
import {AuthStatus} from "../../components/const";

export const checkAuthStatus = (): APIAction => (dispatch, _getState, api) => (
  api.get(`/login`)
  .then(() => dispatch(getAuthStatus(AuthStatus.AUTH)))
  .catch(() => dispatch(getAuthStatus(AuthStatus.NO_AUTH)))
);
