import {getAllOffers, getFavoriteOffers, getNearbyOffers, getSingleOffer, getSingleOfferReviews, setDataSending, setSendingError, updateOffers} from "./actions";
import {APIAction} from "../index";
import {APIEndpoint} from "../../const";
import {ReviewPost} from "../../types";
import {getFavStatus} from "../../utils";

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
    dispatch(setSendingError(false));
    dispatch(getSingleOfferReviews(data));
    dispatch(setDataSending(false));
  })
  .catch(() => {
    dispatch(setDataSending(false));
    dispatch(setSendingError(true));
  })
);

export const toggleFavoriteStatus = (id: number, isFavorite: boolean): APIAction => (dispatch, _getState, api) => (
  api.post(APIEndpoint.FAVORITE + id + getFavStatus(isFavorite))
  .then(({data}) => {
    dispatch(updateOffers(data));
    dispatch(setDataSending(false));
  })
);


