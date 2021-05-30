import {getAllOffers, getFavoriteOffers, getNearbyOffers, getSingleOffer, getSingleOfferReviews} from "./actions";
import {APIAction} from "../index";

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


