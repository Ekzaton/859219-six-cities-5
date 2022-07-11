import {AxiosResponse} from "axios";

import {ActionType} from "../../consts/store";
import {Offer} from "../../types/common";
import {FavoritesAction} from "../../types/store/favorites";

export const setFavoriteOffers = (favoriteOffers: Offer[]): FavoritesAction => ({
  type: ActionType.SET_FAVORITE_OFFERS,
  payload: favoriteOffers
});

export const setOfferFavoriteStatus = (changedOffer: Offer): FavoritesAction => ({
  type: ActionType.SET_OFFER_FAVORITE_STATUS,
  payload: changedOffer
});

export const setIsLoading = (isLoading: boolean): FavoritesAction => ({
  type: ActionType.SET_FAVORITES_IS_LOADING,
  payload: isLoading
});

export const setLoadingError = (loadingError: AxiosResponse | null): FavoritesAction => ({
  type: ActionType.SET_FAVORITES_LOADING_ERROR,
  payload: loadingError
});
