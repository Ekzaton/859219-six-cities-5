import {AxiosResponse} from "axios";
import {AnyAction} from "redux";

import {ActionType} from "../../consts/store";
import {Offer} from "../../types/common";

export const setFavoriteOffers = (favoriteOffers: Offer[]): AnyAction => ({
  type: ActionType.SET_FAVORITE_OFFERS,
  payload: favoriteOffers
});

export const setOfferFavoriteStatus = (changedOffer: Offer): AnyAction => ({
  type: ActionType.SET_OFFER_FAVORITE_STATUS,
  payload: changedOffer
});

export const setIsLoading = (isLoading: boolean): AnyAction => ({
  type: ActionType.SET_FAVORITES_IS_LOADING,
  payload: isLoading
});

export const setLoadingError = (loadingError: AxiosResponse | null): AnyAction => ({
  type: ActionType.SET_FAVORITES_LOADING_ERROR,
  payload: loadingError
});
