import {ActionType} from "../../consts/store";

import {Offer} from "../../types/common";
import {FavoriteOffersAction} from "../../types/store/favorite-offers";

export const getFavoriteOffers = (offers: Offer[]): FavoriteOffersAction => ({
  type: ActionType.GET_FAVORITE_OFFERS,
  payload: offers
});

export const setIsDataLoading = (isDataLoading: boolean): FavoriteOffersAction => ({
  type: ActionType.SET_IS_FAVORITE_OFFERS_LOADING,
  payload: isDataLoading
});

export const setIsLoadingError = (isLoadingError: boolean): FavoriteOffersAction => ({
  type: ActionType.SET_IS_FAVORITE_OFFERS_LOADING_ERROR,
  payload: isLoadingError
});
