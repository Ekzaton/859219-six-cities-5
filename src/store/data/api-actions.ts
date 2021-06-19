import {
  getAllOffers,
  getFavoriteOffers,
  getNearbyOffers,
  getSingleOffer,
  getSingleOfferReviews,
  setIsDataSending,
  setIsSendingError,
  updateOffers
} from "./actions";
import {APIAction} from "../store";
import {APIEndpoint} from "../../consts/store";
import {ReviewPost} from "../../types";
import {getFavStatus} from "../../utils/store";

export const fetchAllOffers = (): APIAction => (dispatch, _getState, api) =>
  api.get(APIEndpoint.HOTELS)
  .then(({data}) => dispatch(getAllOffers(data)))
  .catch(() => {
    throw Error(`Ошибка загрузки списка предложений`);
  });

export const fetchFavoriteOffers = (): APIAction => (dispatch, _getState, api) =>
  api.get(APIEndpoint.FAVORITE)
  .then(({data}) => dispatch(getFavoriteOffers(data)))
  .catch(() => {
    throw Error(`Ошибка загрузки списка избранных предложений`);
  });

export const fetchNearbyOffers = (id: string): APIAction => (dispatch, _getState, api) =>
  api.get(APIEndpoint.HOTELS + id + APIEndpoint.NEARBY)
  .then(({data}) => dispatch(getNearbyOffers(data)))
  .catch(() => {
    throw Error(`Ошибка загрузки списка предложений неподалёку`);
  });

export const fetchSingleOffer = (id: string): APIAction => (dispatch, _getState, api) =>
  api.get(APIEndpoint.HOTELS + id)
  .then(({data}) => dispatch(getSingleOffer(data)))
  .catch(() => {
    throw Error(`Ошибка загрузки одного предложения`);
  });

export const fetchSingleOfferReviews = (id: string): APIAction => (dispatch, _getState, api) =>
  api.get(APIEndpoint.COMMENTS + id)
  .then(({data}) => dispatch(getSingleOfferReviews(data)))
  .catch(() => {
    throw Error(`Ошибка загрузки комментариев одного предложения`);
  });

export const sendReview = (id: number, {rating, comment}: ReviewPost): APIAction => (dispatch, _getState, api) => (
  api.post(APIEndpoint.COMMENTS + id, {rating, comment})
  .then(({data}) => {
    dispatch(setIsSendingError(false));
    dispatch(getSingleOfferReviews(data));
    dispatch(setIsDataSending(false));
  })
  .catch(() => {
    dispatch(setIsDataSending(false));
    dispatch(setIsSendingError(true));
  })
);

export const toggleFavoriteStatus = (id: number, isFavorite: boolean): APIAction => (dispatch, _getState, api) => (
  api.post(APIEndpoint.FAVORITE + id + getFavStatus(isFavorite))
  .then(({data}) => {
    dispatch(updateOffers(data));
    dispatch(setIsDataSending(false));
  })
);


