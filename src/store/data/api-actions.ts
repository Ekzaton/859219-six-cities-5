import {getAllOffers, getFavoriteOffers} from "./actions";
import {APIAction} from "../index";

export const fetchOffers = (): APIAction => (dispatch, _getState, api) =>
  api.get(`/hotels`)
  .then(({data}) => dispatch(getAllOffers(data)))
  .catch(() => {
    throw Error(`Ошибка загрузки списка предложений`);
  });

export const fetchFavoriteMovies = (): APIAction => (dispatch, _getState, api) =>
  api.get(`/favorite`)
  .then(({data}) => dispatch(getFavoriteOffers(data)))
  .catch(() => {
    throw Error(`Ошибка загрузки списка избранных предложений`);
  });
