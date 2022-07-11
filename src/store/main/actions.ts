import {AxiosResponse} from "axios";

import {CityName, SortingType} from "../../consts/common";
import {ActionType} from "../../consts/store";
import {Offer} from "../../types/common";
import {MainAction} from "../../types/store/main";

export const setActiveOfferID = (activeOfferID: number | null): MainAction => ({
  type: ActionType.SET_ACTIVE_OFFER_ID,
  payload: activeOfferID
});

export const setCurrentCity = (currentCity: CityName): MainAction => ({
  type: ActionType.SET_CURRENT_CITY,
  payload: currentCity
});

export const setCurrentSorting = (currentSorting: SortingType): MainAction => ({
  type: ActionType.SET_CURRENT_SORTING,
  payload: currentSorting
});

export const setAllOffers = (allOffers: Offer[]): MainAction => ({
  type: ActionType.SET_ALL_OFFERS,
  payload: allOffers
});

export const setOfferFavoriteStatus = (changedOffer: Offer): MainAction => ({
  type: ActionType.SET_OFFER_FAVORITE_STATUS,
  payload: changedOffer
});

export const setIsLoading = (isLoading: boolean): MainAction => ({
  type: ActionType.SET_MAIN_IS_LOADING,
  payload: isLoading
});

export const setLoadingError = (loadingError: AxiosResponse | null): MainAction => ({
  type: ActionType.SET_MAIN_LOADING_ERROR,
  payload: loadingError
});
