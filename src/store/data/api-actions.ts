import {getAllOffers, getFavoriteOffers, getNearbyOffers, getSingleOffer, getSingleOfferReviews, setDataSending, setSendingError, updateOffers} from "./actions";
import {APIAction} from "../index";
import {FavStatus} from "../../const";
import {ReviewPost} from "../../types";

export const fetchAllOffers = (): APIAction => (dispatch, _getState, api) =>
  api.get(`/hotels`)
  .then(({data}) => dispatch(getAllOffers(data)))
  .catch(() => {
    throw Error(`Ошибка загрузки списка предложений`);
  });

export const fetchFavoriteOffers = (): APIAction => (dispatch, _getState, api) =>
  api.get(`/favorite`)
  .then(({data}) => dispatch(getFavoriteOffers(data)))
  .catch(() => {
    throw Error(`Ошибка загрузки списка избранных предложений`);
  });

export const fetchNearbyOffers = (id: string): APIAction => (dispatch, _getState, api) =>
  api.get(`/hotels/${id}/nearby`)
  .then(({data}) => dispatch(getNearbyOffers(data)))
  .catch(() => {
    throw Error(`Ошибка загрузки списка предложений неподалёку`);
  });

export const fetchSingleOffer = (id: string): APIAction => (dispatch, _getState, api) =>
  api.get(`/hotels/${id}`)
  .then(({data}) => dispatch(getSingleOffer(data)))
  .catch(() => {
    throw Error(`Ошибка загрузки одного предложения`);
  });

export const fetchSingleOfferReviews = (id: string): APIAction => (dispatch, _getState, api) =>
  api.get(`/comments/${id}`)
  .then(({data}) => dispatch(getSingleOfferReviews(data)))
  .catch(() => {
    throw Error(`Ошибка загрузки комментариев одного предложения`);
  });

export const sendReview = (id: number, {rating, comment}: ReviewPost): APIAction => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {rating, comment})
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
  api.post(`/favorite/${id}/${isFavorite ? FavStatus.NOT_FAV : FavStatus.FAV}`)
  .then(({data}) => {
    dispatch(updateOffers(data));
    dispatch(setDataSending(false));
  })
);


