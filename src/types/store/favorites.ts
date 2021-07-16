import {AxiosResponse} from "axios";

import {Offer} from "../common";

import {ActionType} from "../../consts/store";

export type FavoritesState = {
  favoriteOffers: Offer[],
  isLoading: boolean,
  loadingError: AxiosResponse | null
};

type setFavoriteOffersAction = {
  type: ActionType.SET_FAVORITE_OFFERS,
  payload: Offer[]
}

type setOfferFavoriteStatusAction = {
  type: ActionType.SET_OFFER_FAVORITE_STATUS,
  payload: Offer
}

type setIsLoadingAction = {
  type: ActionType.SET_FAVORITES_IS_LOADING,
  payload: boolean
}

type setLoadingErrorAction = {
  type: ActionType.SET_FAVORITES_LOADING_ERROR,
  payload: AxiosResponse | null
}

export type FavoritesAction = setFavoriteOffersAction | setOfferFavoriteStatusAction | setIsLoadingAction | setLoadingErrorAction;
