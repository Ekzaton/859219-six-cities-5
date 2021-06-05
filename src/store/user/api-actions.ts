
import {getAuthStatus, getUserData, redirectToRoute, setDataSending, setSendingError} from "./actions";
import {APIAction} from "../index";
import {AuthStatus} from "../../const";
import {getSingleOfferReviews} from "../../store/data/actions";
import {ReviewPost, User, UserPost} from "../../types";

export const checkAuthStatus = (): APIAction => (dispatch, _getState, api) => (
  api.get(`/login`)
  .then(({data}) => dispatch(getUserData(data)))
  .then(() => dispatch(getAuthStatus(AuthStatus.AUTH)))
  .catch(() => dispatch(getAuthStatus(AuthStatus.NO_AUTH)))
);

export const logIn = ({email, password}: UserPost): APIAction => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
  .then(({data}) => dispatch(getUserData(data)))
  .then(() => dispatch(getAuthStatus(AuthStatus.AUTH)))
  .then(() => dispatch(redirectToRoute(`/`)))
  .catch(() => {
    throw Error(`Ошибка авторизации`);
  })
);

export const logOut = (): APIAction => (dispatch, _getState, api) => (
  api.get(`/logout`)
  .then(() => dispatch(getUserData({} as User)))
  .then(() => dispatch(getAuthStatus(AuthStatus.NO_AUTH)))
  .catch(() => {
    throw Error(`Ошибка деавторизации`);
  })
);

export const sendReview = (id: number, {rating, comment}: ReviewPost): APIAction => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {rating, comment})
    .then(({data}) => dispatch(getSingleOfferReviews(data)))
    .then(() => {
      dispatch(setSendingError(false));
      dispatch(setDataSending(false));
    })
    .catch(() => {
      dispatch(setDataSending(false));
      dispatch(setSendingError(true));
    })
);
